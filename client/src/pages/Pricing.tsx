// import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import PricingSection from "@/components/PricingSection";
import ContactCTA from "@/components/ContactCTA";
import { useLanguage } from "@/contexts/LanguageContext";

const Pricing = () => {
  const { language } = useLanguage();
  
  // Hardcoded translations
  const translations = {
    en: {
      pageTitle: "Simple, Transparent Pricing",
      pageSubtitle: "Choose the plan that fits your business needs. No hidden fees or complicated pricing structures."
    },
    nl: {
      pageTitle: "Eenvoudige, Transparante Prijzen",
      pageSubtitle: "Kies het plan dat bij uw zakelijke behoeften past. Geen verborgen kosten of ingewikkelde prijsstructuren."
    }
  };
  
  const t = translations[language as keyof typeof translations] || translations.en;
  
  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto">
              <motion.h1 
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {t.pageTitle}
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-600 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {t.pageSubtitle}
              </motion.p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <PricingSection />

        {/* Contact CTA */}
        <ContactCTA />
      </main>
    </>
  );
};

export default Pricing;
