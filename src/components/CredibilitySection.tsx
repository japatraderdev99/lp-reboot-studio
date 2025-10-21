import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

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
          Quem Te Ensina é
          <span className="text-gradient block mt-2">RESULTADOS REAIS</span>
        </h2>
        
        <div className="max-w-3xl mx-auto mb-16 glass-card p-8 rounded-2xl border border-white/[0.08]">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-2xl font-bold text-primary flex-shrink-0">
              FM
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">Fernando Machado</h3>
              <p className="text-primary text-sm font-semibold mb-3">Diretor Comercial F5 Estratégia</p>
              <div className="text-foreground/60 text-sm space-y-1">
                <p>→ +15 anos no mercado odontológico</p>
                <p>→ R$ 2M+ em vendas estruturadas</p>
                <p>→ 500+ CRCs treinadas</p>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-white/[0.08]">
            <p className="text-center text-sm italic text-foreground/80">
              "Eu não te ensino a atender. Eu te ensino a <span className="text-primary font-semibold">VENDER</span>"
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-xl border border-white/[0.08] text-center"
            >
              <div className="text-4xl md:text-5xl font-black text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-foreground/60 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Slider */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Depoimentos</h3>
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2">
                  <div className="glass-card p-6 rounded-xl border border-white/[0.08] h-full">
                    <p className="text-foreground/70 mb-4 italic text-sm">"{testimonial.quote}"</p>
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
