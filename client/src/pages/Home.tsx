import Hero from "@/components/Hero";
import USPSection from "@/components/USPSection";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import PricingSection from "@/components/PricingSection";
import ContactCTA from "@/components/ContactCTA";

const Home = () => {
  return (
    <>
      <main>
        <Hero />
        <USPSection />
        <HowItWorks />
        <Testimonials />
        <PricingSection />
        <ContactCTA />
      </main>
    </>
  );
};

export default Home;
