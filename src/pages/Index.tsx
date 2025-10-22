import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";

// Lazy load non-critical sections for better initial load
const CasesSection = lazy(() => import("@/components/CasesSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const ProblemsSection = lazy(() => import("@/components/ProblemsSection"));
const CredibilitySection = lazy(() => import("@/components/CredibilitySection"));
const MethodologySection = lazy(() => import("@/components/MethodologySection"));
const GuaranteeSection = lazy(() => import("@/components/GuaranteeSection"));
const Footer = lazy(() => import("@/components/Footer"));

const LoadingFallback = () => (
  <div className="w-full py-12 flex items-center justify-center">
    <div className="animate-pulse text-muted-foreground">Carregando...</div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <Suspense fallback={<LoadingFallback />}>
        <CasesSection />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <TestimonialsSection />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <ProblemsSection />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <CredibilitySection />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <MethodologySection />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <GuaranteeSection />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
