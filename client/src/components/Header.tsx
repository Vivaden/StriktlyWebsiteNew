import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import MobileMenu from "./MobileMenu";
import { Button } from "@/components/ui/button";
import LanguageSelector from "./LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`bg-white ${isScrolled ? 'shadow-sm' : ''} sticky top-0 z-50 transition-shadow duration-300`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-primary font-bold text-2xl">Striktly</span>
            </Link>
            <nav className="hidden md:flex ml-10 space-x-8">
              <Link href="/" className={`${location === '/' ? 'text-primary' : 'text-gray-700'} hover:text-primary font-medium`}>
                {t('nav.home')}
              </Link>
              <Link href="/features" className={`${location === '/features' ? 'text-primary' : 'text-gray-700'} hover:text-primary font-medium`}>
                {t('nav.features')}
              </Link>
              <Link href="/pricing" className={`${location === '/pricing' ? 'text-primary' : 'text-gray-700'} hover:text-primary font-medium`}>
                {t('nav.pricing')}
              </Link>
              <Link href="/faq" className={`${location === '/faq' ? 'text-primary' : 'text-gray-700'} hover:text-primary font-medium`}>
                {t('nav.faq')}
              </Link>
              <Link href="/contact" className={`${location === '/contact' ? 'text-primary' : 'text-gray-700'} hover:text-primary font-medium`}>
                {t('nav.contact')}
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <LanguageSelector />
            <Button variant="outline" className="hidden md:inline-flex" asChild>
              <Link href="/contact">Sign In</Link>
            </Button>
            <Button asChild>
              <Link href="/contact">{t('cta.book_demo')}</Link>
            </Button>
          </div>
          <div className="md:hidden flex items-center">
            <button 
              type="button" 
              className="text-gray-500 hover:text-gray-700 focus:outline-none" 
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
        <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
      </div>
    </header>
  );
};

export default Header;
