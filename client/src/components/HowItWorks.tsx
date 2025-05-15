import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const HowItWorks = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            How Striktly Works
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Get PEPPOL-compliant and streamline your invoice processing in just a few simple steps.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Step 1 */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 mx-auto">1</div>
            <h3 className="text-xl font-semibold mb-3 text-center text-gray-900">Connect Your System</h3>
            <p className="text-gray-600 text-center">Easily integrate Striktly with your existing systems without changing your workflow.</p>
            {/* Connector line */}
            <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-primary"></div>
          </motion.div>
          
          {/* Step 2 */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 mx-auto">2</div>
            <h3 className="text-xl font-semibold mb-3 text-center text-gray-900">Process Documents</h3>
            <p className="text-gray-600 text-center">Automatically receive, validate, and process all your PEPPOL documents in one platform.</p>
            {/* Connector line */}
            <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-primary"></div>
          </motion.div>
          
          {/* Step 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 mx-auto">3</div>
            <h3 className="text-xl font-semibold mb-3 text-center text-gray-900">Export & Report</h3>
            <p className="text-gray-600 text-center">Seamlessly export to your accounting system and generate detailed reports.</p>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {/* Document processing automation visualization */}
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600" 
            alt="Striktly document automation flow visualization" 
            className="rounded-xl shadow-lg w-full h-auto object-cover max-w-5xl mx-auto" 
          />
          
          <div className="mt-10">
            <Button size="lg" asChild>
              <Link href="/pricing">Get Started Today</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
