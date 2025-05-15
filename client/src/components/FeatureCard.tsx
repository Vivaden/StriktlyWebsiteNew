import { motion } from "framer-motion";
import { Link } from "wouter";
import { ReactNode } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  linkText?: string;
  linkUrl?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon, 
  title, 
  description, 
  linkText = "Learn more", 
  linkUrl = "#" 
}) => {
  const { t } = useLanguage();
  
  return (
    <motion.div 
      className="bg-white rounded-xl p-8 shadow-md border border-gray-100 flex flex-col h-full hover:shadow-lg transition-shadow"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
    >
      <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-6">
        <div className="h-6 w-6 text-primary">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 flex-grow mb-4">{description}</p>
      <Link href={linkUrl} className="text-primary font-medium flex items-center">
        {linkText}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
      </Link>
    </motion.div>
  );
};

export default FeatureCard;
