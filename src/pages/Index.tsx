import { lazy, Suspense, useEffect, useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BotpressChatbot from "@/components/BotpressChatbot";

// Lazy load non-critical sections for better initial load
const CasesSection = lazy(() => import("@/components/CasesSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const ProblemsSection = lazy(() => import("@/components/ProblemsSection"));
const CredibilitySection = lazy(() => import("@/components/CredibilitySection"));
const MethodologySection = lazy(() => import("@/components/MethodologySection"));
const GuaranteeSection = lazy(() => import("@/components/GuaranteeSection"));
const Footer = lazy(() => import("@/components/Footer"));

// Minimal skeleton that reserves space to prevent CLS
const LoadingFallback = ({ height = "400px" }: { height?: string }) => (
  <div className="w-full flex items-center justify-center" style={{ minHeight: height, contentVisibility: 'auto' }}>
    <div className="text-muted-foreground/50 text-sm">Carregando...</div>
  </div>
);

const Index = () => {
  const [showBelowFold, setShowBelowFold] = useState(false);

  // Defer below-fold content loading - with safe browser check
  useEffect(() => {
    const hasIdleCallback = typeof window !== 'undefined' && 'requestIdleCallback' in window;
    
    const timer = hasIdleCallback
      ? window.requestIdleCallback(() => setShowBelowFold(true), { timeout: 1500 })
      : window.setTimeout(() => setShowBelowFold(true), 800);
    
    return () => {
      if (hasIdleCallback) {
        window.cancelIdleCallback(timer as number);
      } else {
        window.clearTimeout(timer as unknown as number);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <BotpressChatbot />
      {showBelowFold ? (
        <>
          <Suspense fallback={<LoadingFallback height="600px" />}>
            <CasesSection />
          </Suspense>
          <Suspense fallback={<LoadingFallback height="400px" />}>
            <TestimonialsSection />
          </Suspense>
          <Suspense fallback={<LoadingFallback height="500px" />}>
            <ProblemsSection />
          </Suspense>
          <Suspense fallback={<LoadingFallback height="700px" />}>
            <CredibilitySection />
          </Suspense>
          <Suspense fallback={<LoadingFallback height="600px" />}>
            <MethodologySection />
          </Suspense>
          <Suspense fallback={<LoadingFallback height="400px" />}>
            <GuaranteeSection />
          </Suspense>
          <Suspense fallback={<LoadingFallback height="200px" />}>
            <Footer />
          </Suspense>
        </>
      ) : (
        <div style={{ minHeight: '3000px' }} />
      )}
    </div>
  );
};

export default Index;
