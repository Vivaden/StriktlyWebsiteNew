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

const DutchFeatures = () => {
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
                Krachtige functies voor moeiteloze PEPPOL-compliance
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-600 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Alles wat u nodig heeft om facturen te beheren, aan regelgeving te voldoen en uw documentworkflows te stroomlijnen.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Button size="lg" asChild>
                  <Link href="/pricing">Prijzen Bekijken</Link>
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
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">PEPPOL-compliance Functies</h2>
                <p className="text-lg text-gray-600 mb-6">Alles wat u nodig heeft om te voldoen aan PEPPOL-standaarden en regelgeving.</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Zap className="h-5 w-5 text-primary mt-1 mr-3" />
                    <span className="text-gray-700">Automatische validatie tegen PEPPOL-standaarden en vereisten</span>
                  </li>
                  <li className="flex items-start">
                    <FileCheck className="h-5 w-5 text-primary mt-1 mr-3" />
                    <span className="text-gray-700">Realtime compliance-controles voor alle documenttypen</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="h-5 w-5 text-primary mt-1 mr-3" />
                    <span className="text-gray-700">Ingebouwde ondersteuning voor meerdere PEPPOL-toegangspunten</span>
                  </li>
                  <li className="flex items-start">
                    <Database className="h-5 w-5 text-primary mt-1 mr-3" />
                    <span className="text-gray-700">Uitgebreide compliance-rapportage en audittrails</span>
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
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Naadloze Workflowintegratie</h2>
                <p className="text-lg text-gray-600 mb-6">Integreer PEPPOL-compliance in uw bestaande bedrijfsprocessen zonder verstoring.</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Zap className="h-5 w-5 text-primary mt-1 mr-3" />
                    <span className="text-gray-700">Flexibele API voor integratie met elk bestaand systeem</span>
                  </li>
                  <li className="flex items-start">
                    <FileCheck className="h-5 w-5 text-primary mt-1 mr-3" />
                    <span className="text-gray-700">Geautomatiseerde documentroutering op basis van aanpasbare regels</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="h-5 w-5 text-primary mt-1 mr-3" />
                    <span className="text-gray-700">Ondersteuning voor goedkeuringsworkflows met meerdere stappen</span>
                  </li>
                  <li className="flex items-start">
                    <Database className="h-5 w-5 text-primary mt-1 mr-3" />
                    <span className="text-gray-700">Realtime meldingen en waarschuwingen voor belangrijke gebeurtenissen</span>
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
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Geavanceerd Documentbeheer</h2>
                <p className="text-lg text-gray-600 mb-6">Krachtige tools om al uw zakelijke documenten te organiseren, bij te houden en te beheren.</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Zap className="h-5 w-5 text-primary mt-1 mr-3" />
                    <span className="text-gray-700">Gecentraliseerde opslag met krachtige zoekmogelijkheden</span>
                  </li>
                  <li className="flex items-start">
                    <FileCheck className="h-5 w-5 text-primary mt-1 mr-3" />
                    <span className="text-gray-700">Versiebeheer en tracking van documentgeschiedenis</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="h-5 w-5 text-primary mt-1 mr-3" />
                    <span className="text-gray-700">Op rollen gebaseerde toegangscontrole voor gevoelige documenten</span>
                  </li>
                  <li className="flex items-start">
                    <Database className="h-5 w-5 text-primary mt-1 mr-3" />
                    <span className="text-gray-700">Veilig delen van documenten met interne en externe gebruikers</span>
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
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Intelligente Automatisering</h2>
                <p className="text-lg text-gray-600 mb-6">Verminder handmatig werk en elimineer fouten met slimme automatiseringsfuncties.</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Zap className="h-5 w-5 text-primary mt-1 mr-3" />
                    <span className="text-gray-700">Gegevensextractie uit facturen en documenten met behulp van OCR</span>
                  </li>
                  <li className="flex items-start">
                    <FileCheck className="h-5 w-5 text-primary mt-1 mr-3" />
                    <span className="text-gray-700">Geautomatiseerde matching van inkooporders, facturen en ontvangstbewijzen</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="h-5 w-5 text-primary mt-1 mr-3" />
                    <span className="text-gray-700">Geplande acties en batchverwerking</span>
                  </li>
                  <li className="flex items-start">
                    <LineChart className="h-5 w-5 text-primary mt-1 mr-3" />
                    <span className="text-gray-700">Aanpasbare dashboards en rapportage</span>
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
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Deskundige Ondersteuning & Hulpbronnen</h2>
                <p className="text-lg text-gray-600 mb-6">Krijg de hulp die u nodig heeft, wanneer u die nodig heeft, van ons team van PEPPOL-experts.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Deskundige Begeleiding</h3>
                    <p className="text-gray-700">Toegang tot PEPPOL-vakexperts voor gepersonaliseerd advies en probleemoplossing.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Soepele Implementatie</h3>
                    <p className="text-gray-700">Toegewijd implementatieteam om een succesvolle overgang naar Striktly te garanderen.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Kennisbank</h3>
                    <p className="text-gray-700">Uitgebreide documentatie, tutorials en best practice-gidsen.</p>
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
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Klaar om uw PEPPOL-compliance te vereenvoudigen?</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Sluit u aan bij duizenden bedrijven die hun factuurprocessen hebben gestroomlijnd met Striktly.</p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Demo Aanvragen</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/pricing">Prijzen Bekijken</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default DutchFeatures;