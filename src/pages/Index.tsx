import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CasesSection from "@/components/CasesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ProblemsSection from "@/components/ProblemsSection";
import CredibilitySection from "@/components/CredibilitySection";
import MethodologySection from "@/components/MethodologySection";
import GuaranteeSection from "@/components/GuaranteeSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <CasesSection />
      <TestimonialsSection />
      <ProblemsSection />
      <CredibilitySection />
      <MethodologySection />
      <GuaranteeSection />
      <Footer />
    </div>
  );
};

export default Index;
