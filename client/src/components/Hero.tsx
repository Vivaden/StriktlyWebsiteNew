import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-12 pb-20 md:py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-gray-900">
                Fast and low-cost PEPPOL compliance for your business
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl">
                Streamline your invoice management with zero changes to your current workflow. Get compliant in minutes, not months.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" asChild>
                <Link href="/pricing">Start Free Trial</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Book a Demo</Link>
              </Button>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span>No credit card required</span>
              <span className="mx-2">•</span>
              <span>14-day free trial</span>
            </div>
          </motion.div>
          <motion.div 
            className="lg:ml-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1573496774426-fe3db3dd1731?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=750" 
              alt="Business professional using Striktly for invoice management" 
              className="rounded-xl shadow-xl w-full h-auto object-cover max-w-lg mx-auto" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
