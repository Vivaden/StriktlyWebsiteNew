import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Link } from "wouter";

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

const faqItems = [
  {
    question: "What is PEPPOL?",
    answer: "PEPPOL (Pan-European Public Procurement Online) is a set of specifications for standardized electronic document exchange. It enables organizations to exchange electronic documents (like invoices, orders, etc.) in a standardized format across borders."
  },
  {
    question: "Why do I need to be PEPPOL-compliant?",
    answer: "Many countries now require businesses to use PEPPOL for electronic invoicing, especially when dealing with government entities. Beyond compliance, PEPPOL standardization reduces errors, speeds up processing times, and cuts administrative costs."
  },
  {
    question: "How does Striktly help with PEPPOL compliance?",
    answer: "Striktly handles all the technical aspects of PEPPOL compliance for you. We manage the connection to the PEPPOL network, ensure your documents meet the required format specifications, and provide a seamless interface for sending and receiving documents through the network."
  },
  {
    question: "Will I need to change my current systems?",
    answer: "No. Striktly is designed to integrate with your existing workflows and systems. You can continue using your current accounting and ERP software. Striktly works alongside your systems to handle the PEPPOL-specific requirements without disrupting your operations."
  },
  {
    question: "How long does it take to get set up?",
    answer: "Most businesses are up and running with Striktly within minutes. Our onboarding process is straightforward, and our support team is available to assist you every step of the way."
  },
  {
    question: "What kind of support does Striktly provide?",
    answer: "All Striktly plans include unlimited support. We offer email support for all customers, with chat and priority support for Business and Enterprise plans. Our team of PEPPOL experts is ready to assist with any questions or issues you might have."
  }
];

const FAQ = () => {
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
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Everything you need to know about Striktly and PEPPOL compliance.
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
          <p className="text-gray-600 mb-6">Still have questions? We're here to help.</p>
          <Button asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
