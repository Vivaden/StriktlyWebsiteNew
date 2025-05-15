import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

const ContactCTA = () => {
  const { toast } = useToast();
  const { language } = useLanguage();
  
  // Hardcoded translations
  const translations = {
    en: {
      contactTitle: "Ready to streamline your PEPPOL invoicing?",
      contactSubtitle: "Get in touch to learn how Striktly can help your business with PEPPOL compliance and document management.",
      
      // Features
      feature1Title: "Personalized Demonstration",
      feature1Description: "Schedule a demo with our team to see how Striktly can fit your specific business needs.",
      feature2Title: "Expert Consultation",
      feature2Description: "Our PEPPOL experts will guide you through the implementation process and answer all your questions.",
      
      // CTAs
      ctaPrimary: "Book a Demo",
      ctaSecondary: "View Pricing",
      
      // Form
      formTitle: "Send us a message",
      formName: "Name",
      formEmail: "Email",
      formCompany: "Company",
      formMessage: "Message",
      formSubmit: "Send Message",
      formSubmitting: "Sending...",
      
      // Toast messages
      toastSuccessTitle: "Message sent!",
      toastSuccessDescription: "We'll get back to you as soon as possible.",
      toastErrorTitle: "Error",
      toastErrorDescription: "There was a problem sending your message. Please try again."
    },
    nl: {
      contactTitle: "Klaar om uw PEPPOL-facturering te stroomlijnen?",
      contactSubtitle: "Neem contact op om te leren hoe Striktly uw bedrijf kan helpen met PEPPOL-compliance en documentbeheer.",
      
      // Features
      feature1Title: "Persoonlijke Demonstratie",
      feature1Description: "Plan een demo met ons team om te zien hoe Striktly kan passen bij uw specifieke zakelijke behoeften.",
      feature2Title: "Expert Consultatie",
      feature2Description: "Onze PEPPOL-experts begeleiden u door het implementatieproces en beantwoorden al uw vragen.",
      
      // CTAs
      ctaPrimary: "Demo Aanvragen",
      ctaSecondary: "Prijzen Bekijken",
      
      // Form
      formTitle: "Stuur ons een bericht",
      formName: "Naam",
      formEmail: "E-mail",
      formCompany: "Bedrijf",
      formMessage: "Bericht",
      formSubmit: "Bericht Versturen",
      formSubmitting: "Versturen...",
      
      // Toast messages
      toastSuccessTitle: "Bericht verzonden!",
      toastSuccessDescription: "We nemen zo snel mogelijk contact met u op.",
      toastErrorTitle: "Fout",
      toastErrorDescription: "Er is een probleem opgetreden bij het verzenden van uw bericht. Probeer het opnieuw."
    }
  };
  
  const t = translations[language as keyof typeof translations] || translations.en;
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await apiRequest('POST', '/api/contact', formData);
      
      toast({
        title: t.toastSuccessTitle,
        description: t.toastSuccessDescription,
      });
      
      setFormData({
        name: "",
        email: "",
        company: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: t.toastErrorTitle,
        description: t.toastErrorDescription,
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-[#6366F1]/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{t.contactTitle}</h2>
            <p className="text-xl text-gray-600 mb-8">{t.contactSubtitle}</p>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">{t.feature1Title}</h3>
                  <p className="text-gray-600">{t.feature1Description}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">{t.feature2Title}</h3>
                  <p className="text-gray-600">{t.feature2Description}</p>
                </div>
              </div>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" asChild>
                <Link href="/contact">{t.ctaPrimary}</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/pricing">{t.ctaSecondary}</Link>
              </Button>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            className="bg-white rounded-xl shadow-md p-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-6 text-gray-900">{t.formTitle}</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">{t.formName}</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full py-3 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">{t.formEmail}</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full py-3 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">{t.formCompany}</label>
                <input 
                  type="text" 
                  id="company" 
                  name="company" 
                  value={formData.company}
                  onChange={handleChange}
                  className="mt-1 block w-full py-3 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">{t.formMessage}</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full py-3 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                  required
                ></textarea>
              </div>
              <div>
                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? t.formSubmitting : t.formSubmit}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
