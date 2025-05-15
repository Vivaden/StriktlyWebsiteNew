import { useLanguage } from "@/contexts/LanguageContext";
import EnglishFeatures from "@/pages/Features/EnglishFeatures";
import DutchFeatures from "@/pages/Features/DutchFeatures";

const Features = () => {
  const { language } = useLanguage();
  
  return language === 'nl' ? <DutchFeatures /> : <EnglishFeatures />;
};

export default Features;