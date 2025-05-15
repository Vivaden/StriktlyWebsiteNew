import { useEffect } from "react";
import { Link, useLocation } from "wouter";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const [location] = useLocation();

  // Close menu on location change
  useEffect(() => {
    onClose();
  }, [location, onClose]);

  if (!isOpen) return null;

  return (
    <div className="md:hidden" id="mobileMenu">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <Link 
          href="/" 
          className={`block px-3 py-2 rounded-md text-base font-medium ${location === '/' ? 'text-primary bg-gray-50' : 'text-gray-700'} hover:text-primary hover:bg-gray-50`}
          onClick={onClose}
        >
          Home
        </Link>
        <Link 
          href="/features" 
          className={`block px-3 py-2 rounded-md text-base font-medium ${location === '/features' ? 'text-primary bg-gray-50' : 'text-gray-700'} hover:text-primary hover:bg-gray-50`}
          onClick={onClose}
        >
          Features
        </Link>
        <Link 
          href="/pricing" 
          className={`block px-3 py-2 rounded-md text-base font-medium ${location === '/pricing' ? 'text-primary bg-gray-50' : 'text-gray-700'} hover:text-primary hover:bg-gray-50`}
          onClick={onClose}
        >
          Pricing
        </Link>
        <Link 
          href="/faq" 
          className={`block px-3 py-2 rounded-md text-base font-medium ${location === '/faq' ? 'text-primary bg-gray-50' : 'text-gray-700'} hover:text-primary hover:bg-gray-50`}
          onClick={onClose}
        >
          FAQ
        </Link>
        <Link 
          href="/contact" 
          className={`block px-3 py-2 rounded-md text-base font-medium ${location === '/contact' ? 'text-primary bg-gray-50' : 'text-gray-700'} hover:text-primary hover:bg-gray-50`}
          onClick={onClose}
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
