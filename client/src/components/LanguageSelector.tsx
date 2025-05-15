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
  const { language, setLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);

  const handleLanguageChange = (newLanguage: 'en' | 'nl') => {
    setLanguage(newLanguage);
    setOpen(false);
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="px-2">
          <Globe className="h-4 w-4 mr-1" />
          <span className="hidden md:inline">{t('language')}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          className={language === 'en' ? 'bg-muted' : ''}
          onClick={() => handleLanguageChange('en')}
        >
          {t('language.en')}
        </DropdownMenuItem>
        <DropdownMenuItem
          className={language === 'nl' ? 'bg-muted' : ''}
          onClick={() => handleLanguageChange('nl')}
        >
          {t('language.nl')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;