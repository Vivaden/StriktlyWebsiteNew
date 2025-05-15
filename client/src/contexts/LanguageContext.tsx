import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations } from '@/translations';

type Language = 'en' | 'nl';

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

const defaultValue: LanguageContextType = {
  language: 'en',
  setLanguage: () => {},
  t: (key: string) => key
};

export const LanguageContext = createContext<LanguageContextType>(defaultValue);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  // Initialize language from localStorage or default to English
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('language');
      return (savedLanguage === 'en' || savedLanguage === 'nl') ? savedLanguage as Language : 'en';
    }
    return 'en';
  });
  
  // Save language choice to localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', language);
      document.documentElement.lang = language;
    }
  }, [language]);

  // Translation function
  const t = (key: string): string => {
    const currentTranslations = translations[language] as Record<string, string>;
    const defaultTranslations = translations['en'] as Record<string, string>;
    return currentTranslations[key] || defaultTranslations[key] || key;
  };

  const value = {
    language,
    setLanguage,
    t
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);