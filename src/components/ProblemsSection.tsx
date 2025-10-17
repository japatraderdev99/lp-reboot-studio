import { Button } from "@/components/ui/button";
import { TrendingDown, DollarSign, Users, BarChart3, Target, UserX } from "lucide-react";

const problems = [
  {
    icon: TrendingDown,
    title: "Investimento sem retorno claro",
    description: "Você gasta R$ 10 mil, R$ 20 mil em tráfego pago todo mês, mas não sabe quantos leads viraram pacientes de verdade."
  },
  {
    icon: DollarSign,
    title: "Leads desqualificados",
    description: "Pacientes que procuram preço, não valorizam o trabalho e querem tudo 'pro mais barato possível'."
  },
  {
    icon: Users,
    title: "Equipe que não converte",
    description: "Sua recepção anota nome, agenda e pronto. Não sabe qualificar, criar rapport ou quebrar objeções."
  },
  {
    icon: BarChart3,
    title: "Falta de métricas",
    description: "Decisões baseadas em achismo, sem números reais para guiar o crescimento da clínica."
  },
  {
    icon: Target,
    title: "Concorrência agressiva",
    description: "Competidores cada vez mais fortes na sua região, roubando seus pacientes com ofertas agressivas."
  },
  {
    icon: UserX,
    title: "No-show constante",
    description: "Pacientes agendam avaliação, você bloqueia horário, e eles simplesmente não aparecem."
  }
];

const ProblemsSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Sua clínica está cheia,<br />
            mas o <span className="text-primary">faturamento não cresce?</span>
          </h2>
          
          <p className="text-xl text-center text-muted-foreground mb-16">
            Se você se identifica com algum destes desafios, este treinamento foi feito para você.
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

          <div className="flex justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6">
              QUERO RESOLVER ESSES PROBLEMAS AGORA →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
