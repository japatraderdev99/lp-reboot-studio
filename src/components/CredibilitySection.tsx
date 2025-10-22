import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import fernandoMachado from "@/assets/fernando-machado.png";

const CredibilitySection = () => {
  const stats = [
    { value: "22% → 45%", label: "Taxa de conversão" },
    { value: "30d → 7d", label: "Tempo de fechamento" },
    { value: "+35%", label: "Ticket médio" }
  ];

  const testimonials = [
    {
      quote: "Converti 3 leads no primeiro dia aplicando a regra dos 5 minutos",
      author: "Maria Silva"
    },
    {
      quote: "Diminuí no-show de 40% para 8% com as técnicas de autoridade",
      author: "João Santos"
    },
    {
      quote: "Meu ticket médio subiu 30% usando o roteiro de fechamento",
      author: "Ana Costa"
    },
    {
      quote: "Nunca mais perdi leads por demora no atendimento",
      author: "Carlos Mendes"
    }
  ];

  return (
    <section className="py-12 md:py-20 px-4 md:px-6 bg-luxury-dark/30 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-center mb-12 md:mb-16 leading-tight px-2">
          Quem Está Por Trás dos
          <span className="text-gradient block mt-2">Resultados Comprovados</span>
        </h2>
        
        {/* Hero Style Section with Fernando - Floating Cards */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
          {/* Left Column - Text Content */}
          <div className="space-y-4 md:space-y-6 px-2 order-2 lg:order-1">
            <div>
              <h3 className="text-sm md:text-lg font-bold mb-2 text-foreground/60">O ESPECIALISTA QUE</h3>
              <h4 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-4">
                Transforma CRCs em
                <span className="text-gradient block mt-2">Vendedoras de Alto Nível</span>
              </h4>
              <p className="text-foreground/70 text-base md:text-lg">
                Eu não te ensino a atender. Eu te ensino a <span className="text-primary font-semibold">VENDER</span>.
              </p>
            </div>
          </div>

          {/* Right Column - Image with Floating Stats */}
          <div className="relative px-2 order-1 lg:order-2">
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden">
              <img 
                src={fernandoMachado} 
                alt="Fernando Machado - Diretor Comercial f5 estratégia"
                className="w-full h-auto object-cover"
              />
              
              {/* Floating Stats - Compact and sophisticated */}
              <div className="absolute top-2 left-2 md:top-4 md:left-4 glass-card px-2 py-1.5 md:px-3 md:py-2 rounded-lg backdrop-blur-xl border border-white/20 shadow-2xl hover:scale-105 transition-transform">
                <div className="text-sm sm:text-base md:text-xl font-black text-gradient leading-none">+15 anos</div>
                <div className="text-[8px] sm:text-[9px] md:text-[10px] text-foreground/70 leading-tight mt-0.5">Mercado<br/>Odontológico</div>
              </div>
              
              <div className="absolute top-1/4 right-2 md:right-4 glass-card px-2 py-1.5 md:px-3 md:py-2 rounded-lg backdrop-blur-xl border border-white/20 shadow-2xl hover:scale-105 transition-transform">
                <div className="text-sm sm:text-base md:text-xl font-black text-gradient leading-none">R$ 2M+</div>
                <div className="text-[8px] sm:text-[9px] md:text-[10px] text-foreground/70 leading-tight mt-0.5">Vendas<br/>Estruturadas</div>
              </div>
              
              <div className="absolute bottom-16 sm:bottom-20 md:bottom-24 left-2 md:left-4 glass-card px-2 py-1.5 md:px-3 md:py-2 rounded-lg backdrop-blur-xl border border-white/20 shadow-2xl hover:scale-105 transition-transform">
                <div className="text-sm sm:text-base md:text-xl font-black text-gradient leading-none">500+</div>
                <div className="text-[8px] sm:text-[9px] md:text-[10px] text-foreground/70 leading-tight mt-0.5">CRCs<br/>Treinadas</div>
              </div>

              {/* Name Label - Bottom - More compact */}
              <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 bg-background/95 backdrop-blur-sm px-2 py-1 md:px-3 md:py-1.5 rounded-lg border border-primary/30 shadow-2xl">
                <p className="font-bold text-[10px] md:text-xs leading-tight">Fernando Machado</p>
                <p className="text-[8px] md:text-[10px] text-primary leading-tight">Diretor Comercial<br/>f5 estratégia</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats - Smaller and more sophisticated */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 px-2 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="card-glow p-4 md:p-5 rounded-xl text-center hover-scale group"
            >
              <div className="text-xl sm:text-2xl md:text-3xl font-black text-gradient mb-1 group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <div className="text-foreground/50 text-[10px] sm:text-xs uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CredibilitySection;
