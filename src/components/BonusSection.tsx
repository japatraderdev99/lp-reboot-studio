import { Button } from "@/components/ui/button";
import { FileText, MessageSquare, CheckSquare, ClipboardList, BarChart } from "lucide-react";

const BonusSection = () => {
  const bonuses = [
    {
      icon: MessageSquare,
      number: "1",
      title: "Scripts Prontos para Cada Canal",
      items: [
        "Meta/Instagram/Facebook (palavra por palavra)",
        "Google (abordagem agressiva)",
        "Indicação (fale o nome nos primeiros 3 segundos)",
        "Cold Call (conexão antes de empresa)"
      ]
    },
    {
      icon: FileText,
      number: "2",
      title: "Templates de Follow-up",
      items: [
        "13 tipos de conteúdo para engajamento",
        "Cadência de 2 semanas (dia a dia)",
        "Fato Novo: nunca mais ficar sem assunto"
      ]
    },
    {
      icon: CheckSquare,
      number: "3",
      title: "Checklist BANT & SPIN",
      items: [
        "Perguntas estratégicas prontas",
        "Como qualificar sem ser agressivo",
        "Identificar: Budget, Authority, Need, Timing"
      ]
    },
    {
      icon: ClipboardList,
      number: "4",
      title: "Roteiro de Fechamento Imprimível",
      items: [
        "Passo a passo visual",
        "Sumarização antes do preço",
        "Quebra de objeções com perguntas"
      ]
    },
    {
      icon: BarChart,
      number: "5",
      title: "Planilha de Gestão de Leads",
      items: [
        "Funil de 6 etapas",
        "Tarefas específicas por etapa",
        "Critérios de avanço"
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 leading-tight">
            Além do Curso, Você Leva a
            <br />
            <span className="text-primary">Munição Completa</span>
          </h2>

          <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Não é só teoria. Você recebe todos os templates, scripts e ferramentas prontos para usar
          </p>

          {/* Bonuses Grid */}
          <div className="space-y-6 mb-12">
            {bonuses.map((bonus, index) => {
              const Icon = bonus.icon;
              return (
                <div
                  key={index}
                  className="bg-card border-2 border-border rounded-lg p-6 md:p-8 hover:border-primary/50 transition-all"
                  style={{
                    animation: 'fadeIn 0.6s ease-out forwards',
                    animationDelay: `${index * 0.1}s`,
                    opacity: 0
                  }}
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex items-start gap-4 md:w-1/3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-primary font-bold mb-1">BÔNUS {bonus.number}</div>
                        <h3 className="text-xl font-bold">{bonus.title}</h3>
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <ul className="space-y-2">
                        {bonus.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3">
                            <span className="text-primary mt-1 flex-shrink-0">→</span>
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Value Stack */}
          <div className="bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/30 rounded-lg p-8 mb-12">
            <div className="text-center mb-6">
              <div className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                Valor Total dos Bônus
              </div>
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
                R$ 4.997
              </div>
              <div className="text-lg text-muted-foreground line-through mb-4">
                Investimento Normal
              </div>
              <div className="inline-block bg-primary text-white px-6 py-3 rounded-lg text-2xl font-bold">
                INVESTIMENTO HOJE: [PREÇO ESPECIAL]
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold border border-primary/20">
                ⚡ Acesso Imediato
              </span>
              <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold border border-primary/20">
                🎯 Suporte Incluído
              </span>
              <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold border border-primary/20">
                🏆 Certificado F5
              </span>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-bold text-xl px-12 py-8 rounded-lg shadow-2xl hover:shadow-primary/50 transition-all hover:scale-105 mb-4"
            >
              QUERO GARANTIR MINHA VAGA AGORA →
            </Button>
            <p className="text-sm text-muted-foreground">
              ⚡ Últimas vagas disponíveis | 💯 Garantia incondicional de 7 dias
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
