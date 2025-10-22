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
    <section className="py-20 px-6 bg-luxury-dark/30 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-6xl font-black text-center mb-16 leading-tight">
          Quem Está Por Trás dos
          <span className="text-gradient block mt-2">Resultados Comprovados</span>
        </h2>
        
        {/* Hero Style Section with Fernando */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold mb-2 text-foreground/60">O ESPECIALISTA QUE</h3>
              <h4 className="text-4xl md:text-5xl font-black leading-tight mb-4">
                Transforma CRCs em
                <span className="text-gradient block mt-2">Vendedoras de Alto Nível</span>
              </h4>
              <p className="text-foreground/70 text-lg">
                Eu não te ensino a atender. Eu te ensino a <span className="text-primary font-semibold">VENDER</span>.
              </p>
            </div>
          </div>

          {/* Right Column - Image with Floating Stats */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden card-glow">
              <img 
                src={fernandoMachado} 
                alt="Fernando Machado - Diretor Comercial F5 Estratégia"
                className="w-full h-auto object-cover"
              />
              
              {/* Floating Stats */}
              <div className="absolute top-8 left-8 glass-card px-5 py-3 rounded-2xl backdrop-blur-md border border-white/10">
                <div className="text-3xl font-black text-gradient">+15 anos</div>
                <div className="text-xs text-foreground/80">Mercado Odontológico</div>
              </div>
              
              <div className="absolute top-1/3 right-8 glass-card px-5 py-3 rounded-2xl backdrop-blur-md border border-white/10">
                <div className="text-3xl font-black text-gradient">R$ 2M+</div>
                <div className="text-xs text-foreground/80">Em Vendas Estruturadas</div>
              </div>
              
              <div className="absolute bottom-12 left-12 glass-card px-5 py-3 rounded-2xl backdrop-blur-md border border-white/10">
                <div className="text-3xl font-black text-gradient">500+</div>
                <div className="text-xs text-foreground/80">CRCs Treinadas</div>
              </div>

              {/* Name Label */}
              <div className="absolute bottom-8 right-8 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-xl border border-primary/20">
                <p className="font-bold text-sm">Fernando Machado</p>
                <p className="text-xs text-primary">Diretor Comercial F5 Estratégia</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-4 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="card-glow p-6 rounded-xl text-center"
            >
              <div className="text-3xl md:text-4xl font-black text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-foreground/60 text-xs">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Slider */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-center mb-8">Depoimentos</h3>
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2">
                  <div className="card-glow p-5 rounded-xl h-full">
                    <p className="text-foreground/60 mb-3 italic text-sm">"{testimonial.quote}"</p>
                    <p className="font-semibold text-xs text-primary">— {testimonial.author}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default CredibilitySection;
