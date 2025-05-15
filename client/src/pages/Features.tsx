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
import { useLanguage } from "@/contexts/LanguageContext";

const Features = () => {
  const { t } = useLanguage();
  
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
                {t('page.features.title')}
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-600 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {t('page.features.subtitle')}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Button size="lg" asChild>
                  <Link href="/pricing">{t('cta.button.pricing')}</Link>
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
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{t('features.section.peppol')}</h2>
                <p className="text-lg text-gray-600 mb-6">{t('features.section.peppol.subtitle')}</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Zap className="h-5 w-5 text-primary mt-1 mr-3" />
                    <span className="text-gray-700">{t('features.item.peppol.1')}</span>
                  </li>
                  <li className="flex items-start">
                    <FileCheck className="h-5 w-5 text-primary mt-1 mr-3" />
                    <span className="text-gray-700">{t('features.item.peppol.2')}</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="h-5 w-5 text-primary mt-1 mr-3" />
                    <span className="text-gray-700">{t('features.item.peppol.3')}</span>
                  </li>
                  <li className="flex items-start">
                    <Database className="h-5 w-5 text-primary mt-1 mr-3" />
                    <span className="text-gray-700">{t('features.item.peppol.4')}</span>
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
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{t('features.section.workflow')}</h2>
                <p className="text-lg text-gray-600 mb-6">{t('features.section.workflow.subtitle')}</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Zap className="h-5 w-5 text-primary mt-1 mr-3" />
                    <span className="text-gray-700">{t('features.item.workflow.1')}</span>
                  </li>
                  <li className="flex items-start">
                    <FileCheck className="h-5 w-5 text-primary mt-1 mr-3" />
                    <span className="text-gray-700">{t('features.item.workflow.2')}</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="h-5 w-5 text-primary mt-1 mr-3" />
                    <span className="text-gray-700">{t('features.item.workflow.3')}</span>
                  </li>
                  <li className="flex items-start">
                    <Database className="h-5 w-5 text-primary mt-1 mr-3" />
                    <span className="text-gray-700">{t('features.item.workflow.4')}</span>
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
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{t('features.section.document')}</h2>
                <p className="text-lg text-gray-600 mb-6">{t('features.section.document.subtitle')}</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Zap className="h-5 w-5 text-primary mt-1 mr-3" />
                    <span className="text-gray-700">{t('features.item.document.1')}</span>
                  </li>
                  <li className="flex items-start">
                    <FileCheck className="h-5 w-5 text-primary mt-1 mr-3" />
                    <span className="text-gray-700">{t('features.item.document.2')}</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="h-5 w-5 text-primary mt-1 mr-3" />
                    <span className="text-gray-700">{t('features.item.document.3')}</span>
                  </li>
                  <li className="flex items-start">
                    <Database className="h-5 w-5 text-primary mt-1 mr-3" />
                    <span className="text-gray-700">{t('features.item.document.4')}</span>
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
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{t('features.section.automation')}</h2>
                <p className="text-lg text-gray-600 mb-6">{t('features.section.automation.subtitle')}</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Zap className="h-5 w-5 text-primary mt-1 mr-3" />
                    <span className="text-gray-700">{t('features.item.automation.1')}</span>
                  </li>
                  <li className="flex items-start">
                    <FileCheck className="h-5 w-5 text-primary mt-1 mr-3" />
                    <span className="text-gray-700">{t('features.item.automation.2')}</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="h-5 w-5 text-primary mt-1 mr-3" />
                    <span className="text-gray-700">{t('features.item.automation.3')}</span>
                  </li>
                  <li className="flex items-start">
                    <LineChart className="h-5 w-5 text-primary mt-1 mr-3" />
                    <span className="text-gray-700">{t('features.item.automation.4')}</span>
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
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{t('features.section.support')}</h2>
                <p className="text-lg text-gray-600 mb-6">{t('features.section.support.subtitle')}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">{t('features.support.expertise')}</h3>
                    <p className="text-gray-700">{t('features.support.expertise.desc')}</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">{t('features.support.onboarding')}</h3>
                    <p className="text-gray-700">{t('features.support.onboarding.desc')}</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">{t('features.support.knowledge')}</h3>
                    <p className="text-gray-700">{t('features.support.knowledge.desc')}</p>
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
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{t('features.cta.title')}</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">{t('features.cta.subtitle')}</p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button size="lg" asChild>
                  <Link href="/contact">{t('cta.button.demo')}</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/pricing">{t('cta.button.pricing')}</Link>
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
