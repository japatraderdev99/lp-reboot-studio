import { Button } from "@/components/ui/button";
import { TrendingUp, Clock, Target, Shield, Users, Zap } from "lucide-react";

const ProofSection = () => {
  const stats = [
    {
      icon: Clock,
      stat: "Atender em 5 minutos",
      result: "+60% conversão",
      color: "text-primary"
    },
    {
      icon: Users,
      stat: "60% das vendas",
      result: "vêm de leads antigos",
      color: "text-primary"
    },
    {
      icon: Target,
      stat: "40% dos leads",
      result: "NUNCA são atendidos (erro fatal)",
      color: "text-destructive"
    },
    {
      icon: Shield,
      stat: "Confiança > Preço",
      result: "Atendimento vende",
      color: "text-primary"
    },
    {
      icon: TrendingUp,
      stat: "8-15 follow-ups",
      result: "necessários (não desista!)",
      color: "text-primary"
    },
    {
      icon: Zap,
      stat: "Regra dos 5 minutos",
      result: "Muda o jogo completamente",
      color: "text-primary"
    }
  ];

  const techniques = [
    {
      title: "Técnica das Duas Opções Positivas",
      description: "Agendamento sem escapatória - o lead escolhe entre duas opções, mas sempre agenda"
    },
    {
      title: "Método do Inimigo Comum",
      description: "Quebra objeções sem confronto - você e o paciente contra o problema"
    },
    {
      title: "Grupo de Pertencimento",
      description: "Nunca tenha medo do preço - mostre que outros como ele já investiram"
    },
    {
      title: "Múltiplos SIMs",
      description: "Coleta micro-compromissos - pequenos 'sins' levam ao grande 'SIM'"
    },
    {
      title: "Marcação de Território",
      description: "WhatsApp + Instagram + Ligação - esteja presente em todos os canais"
    }
  ];

  const caseStudies = [
    {
      title: "Clínica Alto Ticket",
      subtitle: "Facetas R$ 60k",
      points: [
        "Como vender 5 procedimentos/mês",
        "Ciclo de venda consultivo",
        "Autoridade acima de preço"
      ]
    },
    {
      title: "Clínica Volume",
      subtitle: "Múltiplas cadeiras",
      points: [
        "Conversão rápida em escala",
        "Sistema de atendimento otimizado",
        "Processo replicável"
      ]
    },
    {
      title: "Clínica Média",
      subtitle: "Modelo híbrido",
      points: [
        "Equilíbrio volume + ticket",
        "Flexibilidade estratégica",
        "Crescimento sustentável"
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 leading-tight">
            Os Números Não Mentem
            <br />
            <span className="text-primary">(E Você Pode Replicar)</span>
          </h2>

          <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Estatísticas validadas em centenas de clínicas que mudam completamente o jogo
          </p>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {stats.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all"
                  style={{
                    animation: 'fadeIn 0.6s ease-out forwards',
                    animationDelay: `${index * 0.1}s`,
                    opacity: 0
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className={`w-6 h-6 ${item.color}`} />
                    </div>
                    <div>
                      <div className="font-bold text-lg mb-1">{item.stat}</div>
                      <div className="text-muted-foreground text-sm">{item.result}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Techniques */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-8">
              💡 Técnicas <span className="text-primary">Validadas</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {techniques.map((technique, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all"
                >
                  <h4 className="font-bold text-lg mb-2 text-primary">✓ {technique.title}</h4>
                  <p className="text-muted-foreground text-sm">{technique.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Case Studies */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-center mb-8">
              📊 Cases de <span className="text-primary">Sucesso</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {caseStudies.map((caseStudy, index) => (
                <div
                  key={index}
                  className="bg-card border-2 border-primary/30 rounded-lg p-6 hover:shadow-lg transition-all"
                >
                  <div className="mb-4">
                    <h4 className="text-xl font-bold mb-1">{caseStudy.title}</h4>
                    <p className="text-sm text-primary font-semibold">{caseStudy.subtitle}</p>
                  </div>
                  <ul className="space-y-2">
                    {caseStudy.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start gap-2">
                        <span className="text-primary mt-1">→</span>
                        <span className="text-sm text-muted-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              QUERO APLICAR ESSAS TÉCNICAS →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
