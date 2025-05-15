import { useEffect } from "react";
import { Link, useLocation } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSelector from "./LanguageSelector";

// Get the base path for the app (empty for development, '/StriktlyWebsiteNew' for GitHub Pages)
const basePath = import.meta.env.BASE_URL.endsWith('/') 
  ? import.meta.env.BASE_URL.slice(0, -1) 
  : import.meta.env.BASE_URL;

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const [location] = useLocation();
  const { language } = useLanguage();
  
  // Hardcoded translations
  const translations = {
    en: {
      home: "Home",
      features: "Features",
      pricing: "Pricing",
      contact: "Contact"
    },
    nl: {
      home: "Home",
      features: "Functies",
      pricing: "Prijzen",
      contact: "Contact"
    }
  };
  
  const t = translations[language as keyof typeof translations];

  // Close menu on location change
  useEffect(() => {
    onClose();
  }, [location, onClose]);

  if (!isOpen) return null;

  return (
    <div className="md:hidden" id="mobileMenu">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <div className="flex justify-center pb-2">
          <LanguageSelector />
        </div>
        <Link 
          href={`${basePath}/`} 
          className={`block px-3 py-2 rounded-md text-base font-medium ${location === '/' || location === basePath + '/' ? 'text-primary bg-gray-50' : 'text-gray-700'} hover:text-primary hover:bg-gray-50`}
          onClick={onClose}
        >
          {t.home}
        </Link>
        <Link 
          href={`${basePath}/features`} 
          className={`block px-3 py-2 rounded-md text-base font-medium ${location === '/features' || location === basePath + '/features' ? 'text-primary bg-gray-50' : 'text-gray-700'} hover:text-primary hover:bg-gray-50`}
          onClick={onClose}
        >
          {t.features}
        </Link>
        <Link 
          href={`${basePath}/pricing`} 
          className={`block px-3 py-2 rounded-md text-base font-medium ${location === '/pricing' || location === basePath + '/pricing' ? 'text-primary bg-gray-50' : 'text-gray-700'} hover:text-primary hover:bg-gray-50`}
          onClick={onClose}
        >
          {t.pricing}
        </Link>
        <Link 
          href={`${basePath}/contact`} 
          className={`block px-3 py-2 rounded-md text-base font-medium ${location === '/contact' || location === basePath + '/contact' ? 'text-primary bg-gray-50' : 'text-gray-700'} hover:text-primary hover:bg-gray-50`}
          onClick={onClose}
        >
          {t.contact}
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
