import { motion } from "framer-motion";
import { Star } from "lucide-react";

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
            Trusted by Businesses Like Yours
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Join hundreds of companies that have streamlined their invoice management with Striktly.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <TestimonialCard 
            quote="Striktly has transformed our invoicing process. We're now fully PEPPOL-compliant with no disruption to our existing workflows. The customer support is incredible!"
            name="Sarah Johnson"
            title="CFO, TechWorks Inc."
            delay={0.1}
          />
          
          {/* Testimonial 2 */}
          <TestimonialCard 
            quote="The automated export to our accountant alone saved us countless hours. Striktly is by far the most cost-effective PEPPOL solution we found after months of research."
            name="Mark Reynolds"
            title="Operations Manager, Global Logistics"
            delay={0.2}
          />
          
          {/* Testimonial 3 */}
          <TestimonialCard 
            quote="As a small business, we needed a solution that wouldn't break the bank. Striktly delivered exactly what we needed at a price point that made sense for us. Implementation was a breeze."
            name="Elena Rodriguez"
            title="Owner, Craft Supplies Direct"
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
