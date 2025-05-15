import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";
import { Link } from "wouter";
import { 
  Zap, 
  ClipboardCopy, 
  Layers, 
  ServerCog, 
  LifeBuoy, 
  Info 
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// Animation variants for staggered animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const USPSection = () => {
  const { t, language } = useLanguage();
  return (
    <section className="py-16 md:py-24 bg-white" id="features">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t('usp.title')}
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t('usp.subtitle')}
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* USP 1 - Fast Compliance */}
          <FeatureCard 
            icon={<Zap />}
            title={language === 'en' ? "Fast and Affordable Compliance" : "Snelle en Voordelige Compliance"}
            description={language === 'en' ? "Become PEPPOL-compliant within minutes at a fraction of the cost of traditional solutions." : "Word PEPPOL-compliant binnen minuten tegen een fractie van de kosten van traditionele oplossingen."}
            linkText={language === 'en' ? "Learn more" : "Meer informatie"}
            linkUrl="/features"
          />

          {/* USP 2 - No Workflow Changes */}
          <FeatureCard 
            icon={<ClipboardCopy />}
            title={language === 'en' ? "No Workflow Changes" : "Geen Werkstroomwijzigingen"}
            description={language === 'en' ? "Keep your existing processes. Striktly adapts to your way of working, not the other way around." : "Behoud uw bestaande processen. Striktly past zich aan uw manier van werken aan, niet andersom."}
            linkText={language === 'en' ? "Learn more" : "Meer informatie"}
            linkUrl="/features"
          />

          {/* USP 3 - Centralized Document Management */}
          <FeatureCard 
            icon={<Layers />}
            title={language === 'en' ? "Centralized Document Management" : "Gecentraliseerd Documentbeheer"}
            description={language === 'en' ? "All your invoices and documents managed in one intuitive platform for maximum efficiency." : "Al uw facturen en documenten beheerd in één intuïtief platform voor maximale efficiëntie."}
            linkText={language === 'en' ? "Learn more" : "Meer informatie"}
            linkUrl="/features"
          />

          {/* USP 4 - Automatic Exports */}
          <FeatureCard 
            icon={<ServerCog />}
            title={language === 'en' ? "Automatic Export to Accountant" : "Automatische Export naar Accountant"}
            description={language === 'en' ? "Export your documents seamlessly to your accountant in their preferred format, saving time and reducing errors." : "Exporteer uw documenten naadloos naar uw accountant in hun gewenste formaat, bespaar tijd en verminder fouten."}
            linkText={language === 'en' ? "Learn more" : "Meer informatie"}
            linkUrl="/features"
          />

          {/* USP 5 - Unlimited Support */}
          <FeatureCard 
            icon={<LifeBuoy />}
            title={language === 'en' ? "Unlimited Support" : "Onbeperkte Ondersteuning"}
            description={language === 'en' ? "Access to our expert team whenever you need help, with no limit on questions or consultations." : "Toegang tot ons expertteam wanneer u hulp nodig heeft, zonder limiet op vragen of consulten."}
            linkText={language === 'en' ? "Learn more" : "Meer informatie"}
            linkUrl="/features"
          />

          {/* Additional Info Card */}
          <motion.div 
            className="bg-gradient-to-br from-primary to-[#6366F1] rounded-xl p-8 shadow-md flex flex-col h-full hover:shadow-lg transition-shadow text-white"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center mb-6">
              <Info className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">
              {language === 'en' ? "Need more information?" : "Meer informatie nodig?"}
            </h3>
            <p className="text-white/90 flex-grow mb-4">
              {language === 'en' 
                ? "Discover how Striktly can be tailored to your specific business needs with a personalized demo." 
                : "Ontdek hoe Striktly kan worden aangepast aan uw specifieke zakelijke behoeften met een persoonlijke demo."}
            </p>
            <Link href="/contact" className="text-white font-medium flex items-center bg-white/20 py-2 px-4 rounded-lg hover:bg-white/30 transition w-fit">
              {language === 'en' ? "Book a Demo" : "Demo Aanvragen"}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default USPSection;
