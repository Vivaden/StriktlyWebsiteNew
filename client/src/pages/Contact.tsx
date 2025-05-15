// import { Helmet } from 'react-helmet-async';
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
  requestType: string;
}

const Contact = () => {
  const { language } = useLanguage();
  const { toast } = useToast();
  
  // Translations
  const translations = {
    en: {
      pageTitle: "Get in Touch",
      pageSubtitle: "We're here to help with any questions about our PEPPOL solutions.",
      getInTouch: "Get in Touch",
      getInTouchDescription: "Have questions about Striktly or our PEPPOL solutions? We'd love to hear from you. Contact us using any of the methods below.",
      phone: "Phone",
      email: "Email",
      office: "Our Office",
      hours: "Business Hours",
      weekdayHours: "Monday - Friday: 9:00 AM - 6:00 PM CET",
      weekendHours: "Closed on weekends and holidays",
      formTitle: "Send us a Message",
      formName: "Name",
      formEmail: "Email",
      formCompany: "Company",
      formPhone: "Phone (optional)",
      formRequestType: "Request Type",
      formRequestTypeGeneral: "General Inquiry",
      formRequestTypeDemo: "Request a Demo",
      formRequestTypePricing: "Pricing Information",
      formRequestTypeSupport: "Support",
      formMessage: "Message",
      formSending: "Sending...",
      formSend: "Send Message",
      demoTitle: "Schedule a Personalized Demo",
      demoDescription: "See how Striktly can streamline your PEPPOL invoice management with a customized demonstration.",
      scheduleDemo: "Schedule Demo"
    },
    nl: {
      pageTitle: "Neem Contact Op",
      pageSubtitle: "We zijn er om u te helpen met vragen over onze PEPPOL-oplossingen.",
      getInTouch: "Neem Contact Op",
      getInTouchDescription: "Heeft u vragen over Striktly of onze PEPPOL-oplossingen? We horen graag van u. Neem contact met ons op via een van de onderstaande methoden.",
      phone: "Telefoon",
      email: "E-mail",
      office: "Ons Kantoor",
      hours: "Openingstijden",
      weekdayHours: "Maandag - Vrijdag: 9:00 - 18:00 CET",
      weekendHours: "Gesloten in weekenden en op feestdagen",
      formTitle: "Stuur ons een Bericht",
      formName: "Naam",
      formEmail: "E-mail",
      formCompany: "Bedrijf",
      formPhone: "Telefoon (optioneel)",
      formRequestType: "Type Aanvraag",
      formRequestTypeGeneral: "Algemene Vraag",
      formRequestTypeDemo: "Demo Aanvragen",
      formRequestTypePricing: "Prijsinformatie",
      formRequestTypeSupport: "Ondersteuning",
      formMessage: "Bericht",
      formSending: "Versturen...",
      formSend: "Bericht Versturen",
      demoTitle: "Plan een Gepersonaliseerde Demo",
      demoDescription: "Ontdek hoe Striktly uw PEPPOL-factuurbeheer kan stroomlijnen met een op maat gemaakte demonstratie.",
      scheduleDemo: "Demo Inplannen"
    }
  };
  
  // Use the appropriate translations based on the current language
  const texts = translations[language as keyof typeof translations] || translations.en;
  
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    requestType: "general"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
        requestType: "general"
      });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
                {texts.pageTitle}
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-600 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {texts.pageSubtitle}
              </motion.p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">{texts.getInTouch}</h2>
                <p className="text-lg text-gray-600 mb-8">{texts.getInTouchDescription}</p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{texts.phone}</h3>
                      <p className="text-gray-600">+3233048040</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{texts.email}</h3>
                      <p className="text-gray-600">support@striktlysoftware.com</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">{texts.formTitle}</h2>
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">{texts.formName} *</label>
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
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">{texts.formEmail} *</label>
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
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700">{texts.formCompany} *</label>
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
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">{texts.formPhone}</label>
                        <input 
                          type="tel" 
                          id="phone" 
                          name="phone" 
                          value={formData.phone}
                          onChange={handleChange}
                          className="mt-1 block w-full py-3 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="requestType" className="block text-sm font-medium text-gray-700">{texts.formRequestType}</label>
                      <select 
                        id="requestType" 
                        name="requestType" 
                        value={formData.requestType}
                        onChange={handleChange}
                        className="mt-1 block w-full py-3 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                      >
                        <option value="general">{texts.formRequestTypeGeneral}</option>
                        <option value="demo">{texts.formRequestTypeDemo}</option>
                        <option value="pricing">{texts.formRequestTypePricing}</option>
                        <option value="support">{texts.formRequestTypeSupport}</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700">{texts.formMessage} *</label>
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
                        animation="pulse"
                        variant="default"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? texts.formSending : texts.formSend}
                      </Button>
                    </div>
                  </form>
                </div>
              </motion.div>
            </div>
            
            {/* Schedule Demo CTA */}
            <motion.div 
              className="mt-20 bg-gradient-to-r from-primary/10 to-[#6366F1]/10 rounded-xl p-10 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{texts.demoTitle}</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">{texts.demoDescription}</p>
              <Button size="lg">{texts.scheduleDemo}</Button>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;