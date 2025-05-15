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
  const { t } = useLanguage();
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
          {/* USP 1 */}
          <FeatureCard 
            icon={<Zap />}
            title={t('usp.card1.title')}
            description={t('usp.card1.description')}
            linkText={t('usp.learn.more')}
            linkUrl="/features"
          />

          {/* USP 2 */}
          <FeatureCard 
            icon={<ClipboardCopy />}
            title={t('usp.card2.title')}
            description={t('usp.card2.description')}
            linkText={t('usp.learn.more')}
            linkUrl="/features"
          />

          {/* USP 3 */}
          <FeatureCard 
            icon={<Layers />}
            title={t('usp.card3.title')}
            description={t('usp.card3.description')}
            linkText={t('usp.learn.more')}
            linkUrl="/features"
          />

          {/* USP 4 */}
          <FeatureCard 
            icon={<ServerCog />}
            title={t('usp.card4.title')}
            description={t('usp.card4.description')}
            linkText={t('usp.learn.more')}
            linkUrl="/features"
          />

          {/* USP 5 */}
          <FeatureCard 
            icon={<LifeBuoy />}
            title={t('usp.card5.title')}
            description={t('usp.card5.description')}
            linkText={t('usp.learn.more')}
            linkUrl="/features"
          />

          {/* Additional Info Card */}
          <div className="bg-gradient-to-br from-primary to-[#6366F1] rounded-xl p-8 shadow-md flex flex-col h-full hover:shadow-lg transition-shadow text-white">
            <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center mb-6">
              <Info className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">{t('usp.info.title')}</h3>
            <p className="text-white/90 flex-grow mb-4">{t('usp.info.description')}</p>
            <Link href="/contact" className="text-white font-medium flex items-center bg-white/20 py-2 px-4 rounded-lg hover:bg-white/30 transition w-fit">
              {t('usp.info.cta')}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default USPSection;
