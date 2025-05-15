import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";

interface PricingTierProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  cta: string;
  isPopular?: boolean;
  ctaLink: string;
  delay: number;
  popularLabel: string;
  periodLabel: string;
}

const PricingTier: React.FC<PricingTierProps> = ({ 
  title, 
  description, 
  price, 
  features, 
  cta, 
  isPopular = false,
  ctaLink,
  delay,
  popularLabel,
  periodLabel
}) => {
  return (
    <motion.div 
      className={`bg-white rounded-xl p-8 shadow-md border ${isPopular ? 'border-primary' : 'border-gray-100'} relative flex flex-col ${isPopular ? 'transform md:scale-105' : ''} hover:shadow-lg transition-shadow`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      {isPopular && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
          {popularLabel}
        </div>
      )}
      <div className="pb-6 border-b border-gray-100">
        <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-baseline">
          <span className="text-4xl font-bold text-gray-900">{price}</span>
          <span className="text-gray-500 ml-2">{periodLabel}</span>
        </div>
      </div>
      <ul className="py-6 space-y-4 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <Button 
        variant={isPopular ? "default" : "outline"} 
        className="mt-6 w-full" 
        asChild
      >
        <Link href={ctaLink}>{cta}</Link>
      </Button>
    </motion.div>
  );
};

const PricingSection = () => {
  const { t } = useLanguage();
  
  // Define features arrays with translations
  const starterFeatures = [
    "100 documents per month",
    "PEPPOL compliance",
    "Basic document management",
    "Email support"
  ];
  
  const businessFeatures = [
    "500 documents per month",
    "PEPPOL compliance",
    "Advanced document management",
    "Accountant export features",
    "Priority email & chat support"
  ];
  
  const enterpriseFeatures = [
    "Unlimited documents",
    "PEPPOL compliance",
    "Advanced document management",
    "Advanced integrations",
    "24/7 priority support",
    "Dedicated account manager"
  ];
  
  return (
    <section id="pricing" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t('pricing.title')}
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t('pricing.subtitle')}
          </motion.p>
        </div>
        
        {/* Pricing Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Starter Plan */}
          <PricingTier 
            title={t('pricing.starter.title')}
            description={t('pricing.starter.description')}
            price={t('pricing.starter.price')}
            features={starterFeatures}
            cta={t('pricing.cta.demo')}
            ctaLink="/contact"
            delay={0.1}
            popularLabel={t('pricing.popular')}
            periodLabel={t('pricing.period')}
          />
          
          {/* Business Plan (Popular) */}
          <PricingTier 
            title={t('pricing.business.title')}
            description={t('pricing.business.description')}
            price={t('pricing.business.price')}
            features={businessFeatures}
            cta={t('pricing.cta.demo')}
            isPopular={true}
            ctaLink="/contact"
            delay={0.2}
            popularLabel={t('pricing.popular')}
            periodLabel={t('pricing.period')}
          />
          
          {/* Enterprise Plan */}
          <PricingTier 
            title={t('pricing.enterprise.title')}
            description={t('pricing.enterprise.description')}
            price={t('pricing.enterprise.price')}
            features={enterpriseFeatures}
            cta={t('pricing.cta.sales')}
            ctaLink="/contact"
            delay={0.3}
            popularLabel={t('pricing.popular')}
            periodLabel={t('pricing.period')}
          />
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
