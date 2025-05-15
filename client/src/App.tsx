import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from "react-helmet-async";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { AnimatePresence } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Features from "@/pages/Features";
import Pricing from "@/pages/Pricing";
import Contact from "@/pages/Contact";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

function Router() {
  const [location] = useLocation();
  
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="min-h-screen">
        <AnimatePresence mode="wait">
          <PageTransition key={location}>
            <Switch location={location}>
              <Route path="/" component={Home} />
              <Route path="/features" component={Features} />
              <Route path="/pricing" component={Pricing} />
              <Route path="/contact" component={Contact} />
              <Route component={NotFound} />
            </Switch>
          </PageTransition>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </LanguageProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
