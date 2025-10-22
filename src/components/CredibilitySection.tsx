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
    <section className="py-20 px-6 bg-luxury-dark/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-6xl font-black text-center mb-4 leading-tight">
          Quem Está Por Trás dos
          <span className="text-gradient block mt-2">Resultados Comprovados</span>
        </h2>
        
        <div className="max-w-3xl mx-auto mb-16 card-glow p-8 rounded-2xl">
          <div className="flex items-start gap-6">
            <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary/20">
              <img 
                src={fernandoMachado} 
                alt="Fernando Machado"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-1">Fernando Machado</h3>
              <p className="text-primary text-xs font-semibold mb-3">Diretor Comercial F5 Estratégia</p>
              <div className="text-foreground/60 text-sm space-y-1">
                <p>→ +15 anos no mercado odontológico</p>
                <p>→ R$ 2M+ em vendas estruturadas</p>
                <p>→ 500+ CRCs treinadas</p>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-white/[0.06]">
            <p className="text-center text-sm italic text-foreground/70">
              "Eu não te ensino a atender. Eu te ensino a <span className="text-primary font-semibold">VENDER</span>"
            </p>
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
