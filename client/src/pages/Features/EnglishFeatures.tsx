import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Zap,
  ClipboardCopy,
  Layers,
  ServerCog,
  LifeBuoy,
  FileCheck,
  Database,
  ShieldCheck,
  LineChart,
  Users
} from "lucide-react";
import IconWrapper from "@/components/icons/IconWrapper";

const EnglishFeatures = () => {
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
                Powerful Features for Effortless PEPPOL Compliance
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-600 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Everything you need to manage invoices, comply with regulations, and streamline your document workflows.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Button size="lg" asChild>
                  <Link href="/pricing">View Pricing</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Main Features Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
              {/* PEPPOL Compliance Features */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-6">
                  <IconWrapper>
                    <ShieldCheck />
                  </IconWrapper>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">PEPPOL Compliance Features</h2>
                <p className="text-lg text-gray-600 mb-6">Everything you need to stay compliant with PEPPOL standards and regulations.</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Zap className="h-5 w-5 text-primary mt-1 mr-3" />
                    <span className="text-gray-700">Automatic validation against PEPPOL standards and requirements</span>
                  </li>
                  <li className="flex items-start">
                    <FileCheck className="h-5 w-5 text-primary mt-1 mr-3" />
                    <span className="text-gray-700">Real-time compliance checks for all document types</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="h-5 w-5 text-primary mt-1 mr-3" />
                    <span className="text-gray-700">Built-in support for multiple PEPPOL access points</span>
                  </li>
                  <li className="flex items-start">
                    <Database className="h-5 w-5 text-primary mt-1 mr-3" />
                    <span className="text-gray-700">Comprehensive compliance reporting and audit trails</span>
                  </li>
                </ul>
              </motion.div>

              {/* Workflow Integration Features */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-6">
                  <IconWrapper>
                    <ClipboardCopy />
                  </IconWrapper>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Seamless Workflow Integration</h2>
                <p className="text-lg text-gray-600 mb-6">Integrate PEPPOL compliance into your existing business processes without disruption.</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Zap className="h-5 w-5 text-primary mt-1 mr-3" />
                    <span className="text-gray-700">Flexible API for integration with any existing system</span>
                  </li>
                  <li className="flex items-start">
                    <FileCheck className="h-5 w-5 text-primary mt-1 mr-3" />
                    <span className="text-gray-700">Automated document routing based on customizable rules</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="h-5 w-5 text-primary mt-1 mr-3" />
                    <span className="text-gray-700">Support for multi-step approval workflows</span>
                  </li>
                  <li className="flex items-start">
                    <Database className="h-5 w-5 text-primary mt-1 mr-3" />
                    <span className="text-gray-700">Real-time notifications and alerts for important events</span>
                  </li>
                </ul>
              </motion.div>

              {/* Document Management Features */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-6">
                  <IconWrapper>
                    <Layers />
                  </IconWrapper>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Advanced Document Management</h2>
                <p className="text-lg text-gray-600 mb-6">Powerful tools to organize, track, and manage all your business documents.</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Zap className="h-5 w-5 text-primary mt-1 mr-3" />
                    <span className="text-gray-700">Centralized storage with powerful search capabilities</span>
                  </li>
                  <li className="flex items-start">
                    <FileCheck className="h-5 w-5 text-primary mt-1 mr-3" />
                    <span className="text-gray-700">Version control and document history tracking</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="h-5 w-5 text-primary mt-1 mr-3" />
                    <span className="text-gray-700">Role-based access control for sensitive documents</span>
                  </li>
                  <li className="flex items-start">
                    <Database className="h-5 w-5 text-primary mt-1 mr-3" />
                    <span className="text-gray-700">Secure document sharing with internal and external users</span>
                  </li>
                </ul>
              </motion.div>

              {/* Automation Features */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-6">
                  <IconWrapper>
                    <ServerCog />
                  </IconWrapper>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Intelligent Automation</h2>
                <p className="text-lg text-gray-600 mb-6">Reduce manual work and eliminate errors with smart automation features.</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Zap className="h-5 w-5 text-primary mt-1 mr-3" />
                    <span className="text-gray-700">Data extraction from invoices and documents using OCR</span>
                  </li>
                  <li className="flex items-start">
                    <FileCheck className="h-5 w-5 text-primary mt-1 mr-3" />
                    <span className="text-gray-700">Automated matching of purchase orders, invoices, and receipts</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="h-5 w-5 text-primary mt-1 mr-3" />
                    <span className="text-gray-700">Scheduled actions and batch processing</span>
                  </li>
                  <li className="flex items-start">
                    <LineChart className="h-5 w-5 text-primary mt-1 mr-3" />
                    <span className="text-gray-700">Customizable dashboards and reporting</span>
                  </li>
                </ul>
              </motion.div>

              {/* Support & Resources */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-2"
              >
                <div className="mb-6">
                  <IconWrapper>
                    <LifeBuoy />
                  </IconWrapper>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Expert Support & Resources</h2>
                <p className="text-lg text-gray-600 mb-6">Get the help you need, when you need it, from our team of PEPPOL experts.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Expert Guidance</h3>
                    <p className="text-gray-700">Access to PEPPOL subject matter experts for personalized advice and troubleshooting.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Smooth Onboarding</h3>
                    <p className="text-gray-700">Dedicated implementation team to ensure a successful transition to Striktly.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Knowledge Base</h3>
                    <p className="text-gray-700">Comprehensive documentation, tutorials, and best practice guides.</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* CTA */}
            <motion.div 
              className="text-center mt-16 pt-8 border-t border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Ready to simplify your PEPPOL compliance?</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Join thousands of businesses that have streamlined their invoice processes with Striktly.</p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Book a Demo</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/pricing">View Pricing</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default EnglishFeatures;