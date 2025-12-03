import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { getHotmartUrlWithParams } from "@/lib/utm-tracker";

const HeroSection = () => {
  const videoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let script: HTMLScriptElement | null = null;
    
    const loadVideoPlayer = () => {
      // Load VTurb SmartPlayer script (new winning VSL)
      script = document.createElement("script");
      script.src = "https://scripts.converteai.net/de1f52b9-182e-4159-9b25-8c5e55b7fd12/players/692f30b27fbe07d9ce4080a7/v4/player.js";
      script.async = true;
      document.head.appendChild(script);

      // Create vturb-smartplayer element
      if (videoContainerRef.current && !videoContainerRef.current.querySelector('vturb-smartplayer')) {
        const player = document.createElement('vturb-smartplayer');
        player.setAttribute('id', 'vid-692f30b27fbe07d9ce4080a7');
        player.style.display = 'block';
        player.style.margin = '0 auto';
        player.style.width = '100%';
        videoContainerRef.current.appendChild(player);
      }
    };

    // Load immediately for faster video start
    if (document.readyState === 'complete') {
      loadVideoPlayer();
    } else {
      window.addEventListener('load', loadVideoPlayer, { once: true });
    }

    return () => {
      if (script && document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);
  return (
    <section className="min-h-screen pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-6 relative overflow-hidden">
      {/* Simplified Glow Effects - Single element for performance */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/15 rounded-full blur-[100px] opacity-30 pointer-events-none" aria-hidden="true" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-center mb-6 md:mb-8 animate-slide-up leading-[1.15] tracking-tight px-2">
            Transforme Sua Secretária em{" "}
            <span className="text-gradient">Máquina de Vendas</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center text-foreground/80 mb-12 md:mb-16 max-w-4xl mx-auto leading-relaxed font-normal px-4">
            Método validado em 3000+ clínicas para converter mais leads em pacientes
          </p>

          {/* VSL Container - Fixed aspect ratio to prevent CLS */}
          <div className="relative max-w-5xl mx-auto mb-8 md:mb-12 px-2">
            <div className="relative rounded-xl md:rounded-2xl overflow-hidden border border-white/[0.06] shadow-2xl" style={{ aspectRatio: '16/9', minHeight: '300px' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none z-10" />
              
              <div ref={videoContainerRef} className="relative z-20 w-full h-full" />
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

          {/* Benefits Grid - Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 max-w-6xl mx-auto px-2">
            {[
              "Método validado em +500 clínicas",
              "Aumento de 60% na conversão comprovado",
              "Resultados em até 30 dias",
              "Sistema que fatura R$ 2M+/ano"
            ].map((benefit, index) => (
              <div 
                key={index} 
                className="group card-glow p-4 md:p-5 rounded-xl cursor-default"
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
