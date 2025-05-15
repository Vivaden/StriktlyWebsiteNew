import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface PricingTierProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  cta: string;
  isPopular?: boolean;
  ctaLink: string;
  delay: number;
}

const PricingTier: React.FC<PricingTierProps> = ({ 
  title, 
  description, 
  price, 
  features, 
  cta, 
  isPopular = false,
  ctaLink,
  delay 
}) => {
  return (
    <motion.div 
      className={`bg-white rounded-xl p-8 shadow-md border ${isPopular ? 'border-primary' : 'border-gray-100'} relative flex flex-col ${isPopular ? 'transform md:scale-105' : ''} hover:shadow-lg transition-shadow`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      {isPopular && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
          Most Popular
        </div>
      )}
      <div className="pb-6 border-b border-gray-100">
        <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-baseline">
          <span className="text-4xl font-bold text-gray-900">{price}</span>
          <span className="text-gray-500 ml-2">/month</span>
        </div>
      </div>
      <ul className="py-6 space-y-4 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <Button 
        variant={isPopular ? "default" : "outline"} 
        className="mt-6 w-full" 
        asChild
      >
        <Link href={ctaLink}>{cta}</Link>
      </Button>
    </motion.div>
  );
};

const PricingSection = () => {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            No hidden fees, no long-term contracts. Choose the plan that's right for your business.
          </motion.p>
        </div>
        
        {/* Pricing Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Starter Plan */}
          <PricingTier 
            title="Starter"
            description="Perfect for small businesses"
            price="€29"
            features={[
              "100 documents per month",
              "PEPPOL compliance",
              "Basic document management",
              "Email support"
            ]}
            cta="Book a Demo"
            ctaLink="/contact"
            delay={0.1}
          />
          
          {/* Business Plan (Popular) */}
          <PricingTier 
            title="Business"
            description="Ideal for growing companies"
            price="€79"
            features={[
              "500 documents per month",
              "PEPPOL compliance",
              "Advanced document management",
              "Accountant export features",
              "Priority email & chat support"
            ]}
            cta="Book a Demo"
            isPopular={true}
            ctaLink="/contact"
            delay={0.2}
          />
          
          {/* Enterprise Plan */}
          <PricingTier 
            title="Enterprise"
            description="For large-scale operations"
            price="€199"
            features={[
              "Unlimited documents",
              "PEPPOL compliance",
              "Advanced document management",
              "Advanced integrations",
              "24/7 priority support",
              "Dedicated account manager"
            ]}
            cta="Contact Sales"
            ctaLink="/contact"
            delay={0.3}
          />
        </div>
        
        {/* Stripe Pricing Table Placeholder */}
        <motion.div 
          className="mt-16 p-8 border border-dashed border-gray-300 rounded-lg bg-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-center text-gray-500">
            {/* Stripe Pricing Table Embed Here */}
            {/* Example: 
            <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
            <stripe-pricing-table
              pricing-table-id="your-pricing-table-id"
              publishable-key="your-publishable-key">
            </stripe-pricing-table>
            */}
          </p>
        </motion.div>
        

      </div>
    </section>
  );
};

export default PricingSection;
