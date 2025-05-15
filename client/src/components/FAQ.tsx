import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button 
        className="flex justify-between items-center w-full py-6 text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        <ChevronDown 
          className={`h-6 w-6 text-gray-500 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div 
        className={`pb-6 transition-all duration-200 overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const { t } = useLanguage();
  
  const faqItems = [
    {
      question: t('faq.item1.q'),
      answer: t('faq.item1.a')
    },
    {
      question: t('faq.item2.q'),
      answer: t('faq.item2.a')
    },
    {
      question: t('faq.item3.q'),
      answer: t('faq.item3.a')
    },
    {
      question: t('faq.item4.q'),
      answer: t('faq.item4.a')
    },
    {
      question: t('faq.item5.q'),
      answer: t('faq.item5.a')
    },
    {
      question: t('faq.item6.q'),
      answer: t('faq.item6.a')
    }
  ];
  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t('faq.general.title')}
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t('faq.general.subtitle')}
          </motion.p>
        </div>
        
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {faqItems.map((item, i) => (
            <FAQItem 
              key={i} 
              question={item.question} 
              answer={item.answer} 
              index={i} 
            />
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-gray-600 mb-6">{t('faq.help.text')}</p>
          <Button asChild>
            <Link href="/contact">{t('faq.contact.cta')}</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
