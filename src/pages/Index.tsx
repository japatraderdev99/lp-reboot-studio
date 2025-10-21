import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemsSection from "@/components/ProblemsSection";
import CredibilitySection from "@/components/CredibilitySection";
import MethodologySection from "@/components/MethodologySection";
import ProofSection from "@/components/ProofSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <ProblemsSection />
      <CredibilitySection />
      <MethodologySection />
      <ProofSection />
      <Footer />
    </div>
  );
};

export default Index;
