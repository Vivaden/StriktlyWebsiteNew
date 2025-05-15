// import { Helmet } from 'react-helmet-async';
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

const Features = () => {
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
                  <Link href="/pricing">Start Free Trial</Link>
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
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">PEPPOL Compliance</h2>
                <p className="text-lg text-gray-600 mb-6">Meeting all requirements with minimal effort on your part.</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Zap className="h-5 w-5 text-primary mt-1 mr-3" />
                    <span className="text-gray-700">Fast PEPPOL access point connection</span>
                  </li>
                  <li className="flex items-start">
                    <FileCheck className="h-5 w-5 text-primary mt-1 mr-3" />
                    <span className="text-gray-700">Automatic document format validation</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="h-5 w-5 text-primary mt-1 mr-3" />
                    <span className="text-gray-700">Trading partner management</span>
                  </li>
                  <li className="flex items-start">
                    <Database className="h-5 w-5 text-primary mt-1 mr-3" />
                    <span className="text-gray-700">Compliant document storage</span>
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
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Workflow Integration</h2>
                <p className="text-lg text-gray-600 mb-6">Seamlessly fits into your existing business processes.</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Zap className="h-5 w-5 text-primary mt-1 mr-3" />
                    <span className="text-gray-700">Email-to-PEPPOL conversion</span>
                  </li>
                  <li className="flex items-start">
                    <FileCheck className="h-5 w-5 text-primary mt-1 mr-3" />
                    <span className="text-gray-700">API integration with your systems</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="h-5 w-5 text-primary mt-1 mr-3" />
                    <span className="text-gray-700">Customizable approval workflows</span>
                  </li>
                  <li className="flex items-start">
                    <Database className="h-5 w-5 text-primary mt-1 mr-3" />
                    <span className="text-gray-700">Keep using your existing tools</span>
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
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Document Management</h2>
                <p className="text-lg text-gray-600 mb-6">All your business documents in one secure platform.</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Zap className="h-5 w-5 text-primary mt-1 mr-3" />
                    <span className="text-gray-700">Centralized document repository</span>
                  </li>
                  <li className="flex items-start">
                    <FileCheck className="h-5 w-5 text-primary mt-1 mr-3" />
                    <span className="text-gray-700">Advanced search and filtering</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="h-5 w-5 text-primary mt-1 mr-3" />
                    <span className="text-gray-700">Role-based access control</span>
                  </li>
                  <li className="flex items-start">
                    <Database className="h-5 w-5 text-primary mt-1 mr-3" />
                    <span className="text-gray-700">Audit trails and history tracking</span>
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
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Automation & Exports</h2>
                <p className="text-lg text-gray-600 mb-6">Save time with intelligent automation features.</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Zap className="h-5 w-5 text-primary mt-1 mr-3" />
                    <span className="text-gray-700">Automatic accountant exports</span>
                  </li>
                  <li className="flex items-start">
                    <FileCheck className="h-5 w-5 text-primary mt-1 mr-3" />
                    <span className="text-gray-700">Smart document recognition</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="h-5 w-5 text-primary mt-1 mr-3" />
                    <span className="text-gray-700">Scheduled reports and exports</span>
                  </li>
                  <li className="flex items-start">
                    <LineChart className="h-5 w-5 text-primary mt-1 mr-3" />
                    <span className="text-gray-700">Business intelligence dashboards</span>
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
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Unlimited Support</h2>
                <p className="text-lg text-gray-600 mb-6">We're with you every step of the way.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Expert Assistance</h3>
                    <p className="text-gray-700">Direct access to PEPPOL specialists who can help with any technical issues.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Onboarding Support</h3>
                    <p className="text-gray-700">Guided setup and team training to ensure a smooth transition.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Knowledge Base</h3>
                    <p className="text-gray-700">Comprehensive documentation, guides, and best practices.</p>
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

export default Features;
