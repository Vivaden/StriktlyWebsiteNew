import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import striktlyLogo from "../assets/LogoStriktlyWebsite.png";

// Get the base path for the app (empty for development, '/StriktlyWebsiteNew' for GitHub Pages)
const basePath = import.meta.env.BASE_URL.endsWith('/') 
  ? import.meta.env.BASE_URL.slice(0, -1) 
  : import.meta.env.BASE_URL;

const Footer = () => {
  const { language } = useLanguage();
  
  // Hardcoded translations
  const translations = {
    en: {
      tagline: "Fast and low-cost PEPPOL compliance for your business.",
      navigation: "Navigation",
      home: "Home",
      features: "Features",
      pricing: "Pricing",
      contact: "Contact",
      legal: "Legal",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      cookies: "Cookie Policy",
      copyright: "© 2025 Striktly. All rights reserved."
    },
    nl: {
      tagline: "Snelle en betaalbare PEPPOL-compliance voor uw bedrijf.",
      navigation: "Navigatie",
      home: "Home",
      features: "Functies",
      pricing: "Prijzen",
      contact: "Contact",
      legal: "Juridisch",
      privacy: "Privacybeleid",
      terms: "Servicevoorwaarden",
      cookies: "Cookiebeleid",
      copyright: "© 2025 Striktly. Alle rechten voorbehouden."
    }
  };
  
  const t = translations[language as keyof typeof translations];
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          <div>
            <div className="mb-4">
              <img src={striktlyLogo} alt="Striktly Logo" className="h-8 filter brightness-0 invert" />
            </div>
            <p className="text-gray-400 mb-6">{t.tagline}</p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" clipRule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">{t.navigation}</h3>
            <ul className="space-y-3">
              <li><Link href={`${basePath}/`} className="text-gray-400 hover:text-white">{t.home}</Link></li>
              <li><Link href={`${basePath}/features`} className="text-gray-400 hover:text-white">{t.features}</Link></li>
              <li><Link href={`${basePath}/pricing`} className="text-gray-400 hover:text-white">{t.pricing}</Link></li>
              <li><Link href={`${basePath}/contact`} className="text-gray-400 hover:text-white">{t.contact}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">{t.legal}</h3>
            <ul className="space-y-3">
              <li><Link href={`${basePath}/privacy`} className="text-gray-400 hover:text-white">{t.privacy}</Link></li>
              <li><Link href={`${basePath}/terms`} className="text-gray-400 hover:text-white">{t.terms}</Link></li>
              <li><Link href={`${basePath}/cookies`} className="text-gray-400 hover:text-white">{t.cookies}</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">{t.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
