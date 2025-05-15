// import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";
import FAQ from "@/components/FAQ";
import ContactCTA from "@/components/ContactCTA";

const FaqPage = () => {
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
                Frequently Asked Questions
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-600 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Find answers to common questions about Striktly and PEPPOL compliance
              </motion.p>
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <motion.div 
                className="bg-gray-50 p-8 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-xl font-bold text-gray-900 mb-4">About PEPPOL</h2>
                <ul className="space-y-3">
                  <li className="text-gray-700">What is PEPPOL?</li>
                  <li className="text-gray-700">Why do I need to be PEPPOL-compliant?</li>
                  <li className="text-gray-700">Which countries require PEPPOL?</li>
                  <li className="text-gray-700">Who regulates PEPPOL?</li>
                </ul>
              </motion.div>
              
              <motion.div 
                className="bg-gray-50 p-8 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h2 className="text-xl font-bold text-gray-900 mb-4">Using Striktly</h2>
                <ul className="space-y-3">
                  <li className="text-gray-700">How does Striktly work?</li>
                  <li className="text-gray-700">Will I need to change my systems?</li>
                  <li className="text-gray-700">How long does setup take?</li>
                  <li className="text-gray-700">What kind of support is available?</li>
                </ul>
              </motion.div>
              
              <motion.div 
                className="bg-gray-50 p-8 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-xl font-bold text-gray-900 mb-4">Pricing & Plans</h2>
                <ul className="space-y-3">
                  <li className="text-gray-700">How much does Striktly cost?</li>
                  <li className="text-gray-700">Is there a free trial?</li>
                  <li className="text-gray-700">Can I change plans?</li>
                  <li className="text-gray-700">What's the money-back guarantee?</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Main FAQ Component */}
        <FAQ />

        {/* Additional Questions Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <motion.h2 
                className="text-3xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Still Have Questions?
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-600 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Our team is here to help with any questions you might have about PEPPOL compliance or Striktly.
              </motion.p>
            </div>
            
            <motion.div 
              className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Support</h3>
                  <p className="text-gray-700 mb-4">Our support team is available to answer your questions via email or chat during business hours.</p>
                  <p className="text-gray-700">Email: support@striktly.com</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Schedule a Demo</h3>
                  <p className="text-gray-700 mb-4">Get a personalized walkthrough of Striktly and see how it can work for your specific business needs.</p>
                  <p className="text-gray-700">Call: +1 (555) 123-4567</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact CTA */}
        <ContactCTA />
      </main>
    </>
  );
};

export default FaqPage;
