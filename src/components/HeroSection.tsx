import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { getHotmartUrlWithParams } from "@/lib/utm-tracker";

const HeroSection = () => {
  useEffect(() => {
    // Load VTurb player script - mais estável no mobile
    const script = document.createElement("script");
    script.src = "https://scripts.converteai.net/de1f52b9-182e-4159-9b25-8c5e55b7fd12/players/6930a75d30e3e1f31709f2d5/v4/player.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="min-h-screen pt-20 sm:pt-24 md:pt-32 pb-12 md:pb-20 px-3 sm:px-4 md:px-6 relative overflow-hidden">
      {/* Simplified Glow Effects - Single element for performance */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/15 rounded-full blur-[100px] opacity-30 pointer-events-none" aria-hidden="true" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Headline - Optimized for LCP with reduced animation */}
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-center mb-3 sm:mb-4 md:mb-6 leading-[1.15] tracking-tight px-2">
            <span className="text-gradient drop-shadow-lg">Assista o Vídeo Abaixo</span>{" "}
            <span className="block mt-1 sm:mt-2">Para Descobrir Como Transformar Sua CRC em Uma</span>{" "}
            <span className="text-gradient drop-shadow-lg">Máquina de Vendas em 30 Dias</span>
          </h1>
          
          {/* Sub-headline */}
          <p className="text-center text-foreground/60 text-sm md:text-base mb-4 sm:mb-6 md:mb-8 px-4 max-w-2xl mx-auto">
            O método que já aumentou a conversão de <strong className="text-primary">+3.000 clínicas odontológicas</strong> no Brasil
          </p>

          {/* VSL Container - VTurb Smartplayer with fixed aspect ratio to prevent CLS */}
          <div className="relative w-full max-w-5xl mx-auto mb-6 sm:mb-8 md:mb-12">
            <div className="w-full rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden border border-white/[0.06] shadow-2xl aspect-video bg-black/20">
              <vturb-smartplayer 
                id="vid-6930a75d30e3e1f31709f2d5" 
                style={{ display: 'block', margin: '0 auto', width: '100%', height: '100%' }}
              />
            </div>
          </div>

          {/* CTA */}
          <div className="max-w-2xl mx-auto mb-12 md:mb-16 px-4">
          <Button 
            size="lg" 
            className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl py-5 sm:py-6 md:py-7 lg:py-8 px-6 md:px-8 rounded-xl shadow-xl hover:shadow-orange transition-all duration-300 hover:scale-[1.02] whitespace-normal leading-tight"
            onClick={() => {
              const url = getHotmartUrlWithParams("https://pay.hotmart.com/A102890720L");
              window.location.href = url;
            }}
          >
            QUERO CONVERTER MAIS LEADS AGORA →
          </Button>
          </div>

          {/* Benefits Grid - Responsive with fixed min-height to prevent CLS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 max-w-6xl mx-auto px-2 min-h-[280px] sm:min-h-[140px] lg:min-h-[80px]">
            {[
              "Método validado em +3.000 clínicas",
              "Aumento de 60% na conversão em 30 dias",
              "Sistema usado por redes que faturam R$2M+/ano",
              "Garantia de 30 dias ou seu dinheiro de volta"
            ].map((benefit, index) => (
              <div 
                key={index} 
                className="group card-glow p-4 md:p-5 rounded-xl cursor-default min-h-[60px] md:min-h-[70px]"
              >
                <div className="flex items-start gap-2.5">
                  <span className="text-primary mt-0.5 text-base font-bold group-hover:scale-110 transition-transform duration-300 flex-shrink-0">✓</span>
                  <span className="text-sm font-normal text-foreground/70 group-hover:text-foreground/90 transition-colors duration-300">{benefit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
