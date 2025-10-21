import { Button } from "@/components/ui/button";
import { TrendingDown, DollarSign, Users, BarChart3, Target, UserX } from "lucide-react";

const problems = [
  {
    icon: TrendingDown,
    title: "40% dos seus leads NUNCA recebem primeiro atendimento",
    description: "Cada lead perdido é dinheiro jogado fora. Você investe em tráfego, mas sua equipe não responde rápido o suficiente."
  },
  {
    icon: DollarSign,
    title: "60% das vendas estão mofando no seu CRM há meses",
    description: "Oportunidades paradas, sem follow-up estratégico, sem cadência. Leads frios que poderiam virar pacientes."
  },
  {
    icon: Users,
    title: "Leads do Meta/Instagram viram fantasmas em 24h",
    description: "Você paga caro por lead quente, mas não sabe como abordar com baixo nível de consciência. Eles somem."
  },
  {
    icon: BarChart3,
    title: "WhatsApp é ignorado e você não sabe o que enviar",
    description: "Mensagens genéricas, sem estratégia de rapport. Você manda 'Oi, tudo bem?' e nunca mais tem resposta."
  },
  {
    icon: Target,
    title: "Consultas marcadas = no-show = agenda vazia",
    description: "Pacientes agendam, você bloqueia horário, e eles não aparecem. Sua agenda sangra todos os dias."
  },
  {
    icon: UserX,
    title: "A concorrente fecha em 5 minutos, você demora dias",
    description: "Enquanto você 'analisa', outro fecha a venda. Velocidade é conversão no mercado odontológico."
  }
];

const ProblemsSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 leading-tight">
            "Você Perde Vendas Todos os Dias<br />
            <span className="text-primary">e Nem Percebe..."</span>
          </h2>
          
          <p className="text-xl text-center text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
            Reconhece alguma dessas situações?
          </p>
          
          <p className="text-lg text-center mb-12 max-w-2xl mx-auto px-4 py-3 bg-primary/10 rounded-lg border border-primary/20">
            <span className="text-foreground font-semibold">"Se você já perdeu uma venda e não sabe por quê, este curso foi feito para você."</span>
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {problems.map((problem, index) => {
              const Icon = problem.icon;
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                  style={{
                    animation: 'fadeIn 0.6s ease-out forwards',
                    animationDelay: `${index * 0.1}s`,
                    opacity: 0
                  }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{problem.title}</h3>
                  <p className="text-muted-foreground">{problem.description}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-card border-2 border-primary/30 rounded-lg p-6 md:p-8 max-w-3xl mx-auto mb-8">
            <p className="text-center text-muted-foreground mb-4">
              → Cada lead perdido é dinheiro jogado fora<br />
              → Seu chefe investe em tráfego... e você não converte<br />
              → A concorrente fecha em 5 minutos, você demora dias
            </p>
          </div>

          <div className="flex justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all hover:scale-105">
              QUERO RESOLVER ESSES PROBLEMAS AGORA →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
