import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { getKiwifyUrlWithParams } from "@/lib/utm-tracker";
import modulo1 from "@/assets/modulo1.jpg";
import modulo2 from "@/assets/modulo2.jpg";
import modulo3 from "@/assets/modulo3.jpg";
import modulo4 from "@/assets/modulo4.jpg";
import modulo5 from "@/assets/modulo5.jpg";
import modulo6 from "@/assets/modulo6.jpg";

const methodologySteps = [
  {
    phase: "FASE 1",
    title: "FUNDAMENTOS",
    module: "Módulo 1",
    thumbnail: modulo1,
    items: [
      "ICP Real vs ICP Imaginado",
      "Os 3 Jogos Empresariais",
      "CRC é vendedora? SIM"
    ]
  },
  {
    phase: "FASE 2",
    title: "CANAIS DE CONVERSÃO",
    module: "Módulo 2",
    thumbnail: modulo2,
    items: [
      "Script Meta/Instagram",
      "Conversão Google em 5 min",
      "Cold Call & Social Selling"
    ]
  },
  {
    phase: "FASE 3",
    title: "ENGAJAMENTO & FOLLOW-UP",
    module: "Módulo 3",
    thumbnail: modulo3,
    items: [
      "Fato Novo",
      "BANT & SPIN Selling",
      "13 Tipos de Conteúdo"
    ]
  },
  {
    phase: "FASE 4",
    title: "RAPPORT & CONEXÃO",
    module: "Módulo 4",
    thumbnail: modulo4,
    items: [
      "Regra dos 5 Minutos (+60% conversão)",
      "Gerando Conexão Verdadeira",
      "Técnicas de Autoridade"
    ]
  },
  {
    phase: "FASE 5",
    title: "FUNIL & JORNADA DE COMPRA",
    module: "Módulo 5",
    thumbnail: modulo5,
    items: [
      "6 Etapas do Funil (MQL → Fechamento)",
      "Metáfora dos Reinos",
      "Técnicas Anti-No-Show"
    ]
  },
  {
    phase: "FASE 6",
    title: "FECHAMENTO INFALÍVEL",
    module: "Módulo 6",
    thumbnail: modulo6,
    items: [
      "Roteiro de Fechamento Completo",
      "Quebra de Objeções",
      "Guardião das Vendas Saudáveis"
    ]
  }
];

const MethodologySection = () => {
  return (
    <section id="metodologia" className="py-12 md:py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-16 px-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 leading-tight">
            O Sistema que Transforma
            <span className="text-gradient block mt-2">Leads em Pacientes</span>
          </h2>
          <p className="text-foreground/60 max-w-3xl mx-auto text-sm md:text-base">
            6 módulos estruturados para você se tornar uma máquina de conversão
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full mb-12 md:mb-16"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {methodologySteps.map((step, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                <div className="card-glow rounded-xl md:rounded-2xl overflow-hidden h-full">
                  <div className="flex flex-col gap-4 md:gap-5 p-4 md:p-5 h-full">
                    {/* Thumbnail Vertical */}
                    <div className="relative w-full h-48 sm:h-56 md:h-64 flex-shrink-0 rounded-lg overflow-hidden border border-white/[0.06]">
                      <img 
                        src={step.thumbnail} 
                        alt={`${step.module} - ${step.title}`}
                        className="w-full h-full object-contain"
                        loading="lazy"
                        decoding="async"
                        width="600"
                        height="800"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2.5 mb-3">
                        <span className="bg-primary/10 text-primary px-2.5 py-0.5 rounded-md font-bold text-xs border border-primary/20">
                          {step.phase}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-primary mb-1">
                        {step.title}
                      </h3>
                      <p className="text-xs text-foreground/50 mb-3">{step.module}</p>
                      <ul className="space-y-1.5">
                        {step.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2 text-xs sm:text-sm text-foreground/60">
                            <span className="text-primary mt-0.5 text-xs">→</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12" />
          <CarouselNext className="hidden md:flex -right-12" />
        </Carousel>

        <div className="text-center px-4">
          <Button 
            size="lg" 
            className="w-full sm:w-auto bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 text-white font-bold text-sm sm:text-base px-6 md:px-8 py-5 md:py-6 rounded-xl shadow-xl transition-all hover:scale-[1.02] whitespace-normal sm:whitespace-nowrap leading-tight"
            onClick={() => {
              const url = getKiwifyUrlWithParams("https://pay.kiwify.com.br/mCqb3Yk");
              window.location.href = url;
            }}
          >
            QUERO DOMINAR ESSE MÉTODO →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
