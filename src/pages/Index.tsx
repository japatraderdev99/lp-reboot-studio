import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemsSection from "@/components/ProblemsSection";
import CredibilitySection from "@/components/CredibilitySection";
import MethodologySection from "@/components/MethodologySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <ProblemsSection />
      <CredibilitySection />
      <MethodologySection />
      <Footer />
    </div>
  );
};

export default Index;
