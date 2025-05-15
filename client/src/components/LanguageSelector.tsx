import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  
  // Hardcoded translations
  const translations = {
    en: {
      language: "Language",
      english: "English",
      dutch: "Dutch"
    },
    nl: {
      language: "Taal",
      english: "Engels",
      dutch: "Nederlands"
    }
  };
  
  const t = translations[language as keyof typeof translations];

  const handleLanguageChange = (newLanguage: 'en' | 'nl') => {
    setLanguage(newLanguage);
    setOpen(false);
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="px-2">
          <Globe className="h-4 w-4 mr-1" />
          <span className="hidden md:inline">{t.language}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          className={language === 'en' ? 'bg-muted' : ''}
          onClick={() => handleLanguageChange('en')}
        >
          {t.english}
        </DropdownMenuItem>
        <DropdownMenuItem
          className={language === 'nl' ? 'bg-muted' : ''}
          onClick={() => handleLanguageChange('nl')}
        >
          {t.dutch}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;