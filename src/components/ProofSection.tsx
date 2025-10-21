import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Clock, Users, Target, Shield, TrendingUp, Zap } from "lucide-react";

const ProofSection = () => {
  const stats = [
    { icon: Clock, stat: "5 minutos", result: "+60% conversão" },
    { icon: Users, stat: "60% vendas", result: "leads antigos" },
    { icon: Target, stat: "40% leads", result: "nunca atendidos" },
    { icon: Shield, stat: "Confiança", result: "vende mais" },
    { icon: TrendingUp, stat: "8-15 follow-ups", result: "necessários" },
    { icon: Zap, stat: "Regra 5min", result: "muda o jogo" }
  ];

  const techniques = [
    { title: "Duas Opções Positivas", description: "Agendamento sem escapatória" },
    { title: "Inimigo Comum", description: "Quebra objeções sem confronto" },
    { title: "Grupo de Pertencimento", description: "Nunca tenha medo do preço" },
    { title: "Múltiplos SIMs", description: "Micro-compromissos" },
    { title: "Marcação de Território", description: "Presença em todos os canais" }
  ];

  const caseStudies = [
    {
      title: "Alto Ticket",
      subtitle: "Facetas R$ 60k",
      points: ["5 procedimentos/mês", "Venda consultiva", "Autoridade > preço"]
    },
    {
      title: "Volume",
      subtitle: "Múltiplas cadeiras",
      points: ["Conversão rápida", "Sistema otimizado", "Processo replicável"]
    },
    {
      title: "Híbrido",
      subtitle: "Equilíbrio ideal",
      points: ["Volume + ticket", "Flexibilidade", "Crescimento sustentável"]
    }
  ];

  return (
    <section className="py-20 px-6 bg-luxury-dark/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-6xl font-black text-center mb-4 leading-tight">
          Os Números Não Mentem
          <span className="text-gradient block mt-2">(Você Pode Replicar)</span>
        </h2>

        <p className="text-center text-foreground/60 mb-16 max-w-2xl mx-auto">
          Estatísticas validadas em centenas de clínicas
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="glass-card p-4 rounded-xl border border-white/[0.08]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <div className="font-bold text-sm">{item.stat}</div>
                </div>
                <div className="text-foreground/60 text-xs">{item.result}</div>
              </div>
            );
          })}
        </div>

        {/* Techniques Slider */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">💡 Técnicas Validadas</h3>
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {techniques.map((technique, index) => (
                <CarouselItem key={index} className="md:basis-1/2">
                  <div className="glass-card p-6 rounded-xl border border-white/[0.08] h-full">
                    <h4 className="font-bold mb-2 text-primary text-sm">✓ {technique.title}</h4>
                    <p className="text-foreground/60 text-xs">{technique.description}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

        {/* Case Studies */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">📊 Cases de Sucesso</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((caseStudy, index) => (
              <div key={index} className="glass-card p-6 rounded-xl border border-primary/30">
                <div className="mb-4">
                  <h4 className="text-lg font-bold">{caseStudy.title}</h4>
                  <p className="text-xs text-primary font-semibold">{caseStudy.subtitle}</p>
                </div>
                <ul className="space-y-2">
                  {caseStudy.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-2">
                      <span className="text-primary text-xs mt-0.5">→</span>
                      <span className="text-xs text-foreground/70">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 text-white font-bold text-base px-8 py-6 rounded-xl shadow-xl transition-all hover:scale-[1.02]">
            QUERO APLICAR ESSAS TÉCNICAS →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
