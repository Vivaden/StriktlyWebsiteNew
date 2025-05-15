import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  delay: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, title, delay }) => {
  return (
    <motion.div 
      className="bg-white rounded-xl p-8 shadow-md border border-gray-100 flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex items-center mb-6">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="text-yellow-400 h-5 w-5 fill-current" />
        ))}
      </div>
      <blockquote className="text-gray-600 italic mb-6 flex-grow">{quote}</blockquote>
      <div className="flex items-center mt-auto">
        <div className="h-10 w-10 rounded-full bg-gray-200 mr-3"></div>
        <div>
          <h4 className="font-medium text-gray-900">{name}</h4>
          <p className="text-sm text-gray-500">{title}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t('testimonials.title')}
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t('testimonials.subtitle')}
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <TestimonialCard 
            quote={t('testimonials.quote1')}
            name={t('testimonials.name1')}
            title={t('testimonials.title1')}
            delay={0.1}
          />
          
          {/* Testimonial 2 */}
          <TestimonialCard 
            quote={t('testimonials.quote2')}
            name={t('testimonials.name2')}
            title={t('testimonials.title2')}
            delay={0.2}
          />
          
          {/* Testimonial 3 */}
          <TestimonialCard 
            quote={t('testimonials.quote3')}
            name={t('testimonials.name3')}
            title={t('testimonials.title3')}
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
