import { useEffect } from "react";
import { Link, useLocation } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSelector from "./LanguageSelector";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const [location] = useLocation();
  const { t } = useLanguage();

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
          href="/" 
          className={`block px-3 py-2 rounded-md text-base font-medium ${location === '/' ? 'text-primary bg-gray-50' : 'text-gray-700'} hover:text-primary hover:bg-gray-50`}
          onClick={onClose}
        >
          {t('nav.home')}
        </Link>
        <Link 
          href="/features" 
          className={`block px-3 py-2 rounded-md text-base font-medium ${location === '/features' ? 'text-primary bg-gray-50' : 'text-gray-700'} hover:text-primary hover:bg-gray-50`}
          onClick={onClose}
        >
          {t('nav.features')}
        </Link>
        <Link 
          href="/pricing" 
          className={`block px-3 py-2 rounded-md text-base font-medium ${location === '/pricing' ? 'text-primary bg-gray-50' : 'text-gray-700'} hover:text-primary hover:bg-gray-50`}
          onClick={onClose}
        >
          {t('nav.pricing')}
        </Link>
        <Link 
          href="/faq" 
          className={`block px-3 py-2 rounded-md text-base font-medium ${location === '/faq' ? 'text-primary bg-gray-50' : 'text-gray-700'} hover:text-primary hover:bg-gray-50`}
          onClick={onClose}
        >
          {t('nav.faq')}
        </Link>
        <Link 
          href="/contact" 
          className={`block px-3 py-2 rounded-md text-base font-medium ${location === '/contact' ? 'text-primary bg-gray-50' : 'text-gray-700'} hover:text-primary hover:bg-gray-50`}
          onClick={onClose}
        >
          {t('nav.contact')}
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
