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
        animation={isPopular ? "pulse" : "bounce"}
        asChild
      >
        <Link href={ctaLink}>{cta}</Link>
      </Button>
    </motion.div>
  );
};

const PricingSection = () => {
  const { language } = useLanguage();
  
  // Hardcoded translations
  const translations = {
    en: {
      sectionTitle: "Choose Your Plan",
      sectionSubtitle: "Select the package that best fits your business needs. All plans include core PEPPOL compliance features.",
      popular: "Most Popular",
      period: "/month",
      
      // Starter tier
      starterTitle: "Starter",
      starterDescription: "Perfect for small businesses just getting started with PEPPOL.",
      starterCta: "Book a Demo",
      
      // Business tier
      businessTitle: "Business",
      businessDescription: "Ideal for growing businesses with moderate document volume.",
      businessCta: "Book a Demo",
      
      // Enterprise tier
      enterpriseTitle: "Enterprise",
      enterpriseDescription: "Advanced features for businesses with high document volumes.",
      enterpriseCta: "Contact Sales"
    },
    nl: {
      sectionTitle: "Kies Uw Plan",
      sectionSubtitle: "Selecteer het pakket dat het beste bij uw zakelijke behoeften past. Alle plannen bevatten kernfuncties voor PEPPOL-compliance.",
      popular: "Meest Populair",
      period: "/maand",
      
      // Starter tier
      starterTitle: "Starter",
      starterDescription: "Perfect voor kleine bedrijven die net beginnen met PEPPOL.",
      starterCta: "Demo Aanvragen",
      
      // Business tier
      businessTitle: "Business",
      businessDescription: "Ideaal voor groeiende bedrijven met gemiddeld documentvolume.",
      businessCta: "Demo Aanvragen",
      
      // Enterprise tier
      enterpriseTitle: "Enterprise",
      enterpriseDescription: "Geavanceerde functies voor bedrijven met hoog documentvolume.",
      enterpriseCta: "Contact Verkoop"
    }
  };
  
  const t = translations[language as keyof typeof translations] || translations.en;
  
  // Define features arrays in both languages
  const features = {
    en: {
      starter: [
        '30 documents per month',
        'PEPPOL compliance',
        'Basic document management',
        'Email support'
      ],
      business: [
        '75 documents per month',
        'PEPPOL compliance',
        'Advanced document management',
        'Accountant export features',
        'Priority email & chat support'
      ],
      enterprise: [
        'Unlimited documents',
        'PEPPOL compliance',
        'Advanced document management',
        'Advanced integrations',
        '24/7 priority support',
        'Dedicated account manager',
        'Multiple entities in a single platform'
      ]
    },
    nl: {
      starter: [
        '30 documenten per maand',
        'PEPPOL-compliance',
        'Basis documentbeheer',
        'E-mail ondersteuning'
      ],
      business: [
        '75 documenten per maand',
        'PEPPOL-compliance',
        'Geavanceerd documentbeheer',
        'Exportfuncties voor accountants',
        'Prioriteit e-mail & chat ondersteuning'
      ],
      enterprise: [
        'Onbeperkt documenten',
        'PEPPOL-compliance',
        'Geavanceerd documentbeheer',
        'Geavanceerde integraties',
        '24/7 prioriteit ondersteuning',
        'Toegewijde accountmanager',
        'Mogelijkheid tot meerdere entiteiten in 1 platform'
      ]
    }
  };
  
  const currentFeatures = features[language as keyof typeof features] || features.en;
  
  const starterFeatures = currentFeatures.starter;
  const businessFeatures = currentFeatures.business;
  const enterpriseFeatures = currentFeatures.enterprise;
  
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
            {t.sectionTitle}
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t.sectionSubtitle}
          </motion.p>
        </div>
        
        {/* Pricing Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Starter Plan */}
          <PricingTier 
            title={t.starterTitle}
            description={t.starterDescription}
            price="€25"
            features={starterFeatures}
            cta={t.starterCta}
            ctaLink="/contact"
            delay={0.1}
            popularLabel={t.popular}
            periodLabel={t.period}
          />
          
          {/* Business Plan (Popular) */}
          <PricingTier 
            title={t.businessTitle}
            description={t.businessDescription}
            price="€50"
            features={businessFeatures}
            cta={t.businessCta}
            isPopular={true}
            ctaLink="/contact"
            delay={0.2}
            popularLabel={t.popular}
            periodLabel={t.period}
          />
          
          {/* Enterprise Plan */}
          <PricingTier 
            title={t.enterpriseTitle}
            description={t.enterpriseDescription}
            price="€100"
            features={enterpriseFeatures}
            cta={t.enterpriseCta}
            ctaLink="/contact"
            delay={0.3}
            popularLabel={t.popular}
            periodLabel={t.period}
          />
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
