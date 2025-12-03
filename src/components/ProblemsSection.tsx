import { Button } from "@/components/ui/button";
import { TrendingDown, DollarSign, Users, BarChart3, Target, UserX } from "lucide-react";

const problems = [
  {
    icon: TrendingDown,
    title: "40% dos leads NUNCA recebem primeiro atendimento",
  },
  {
    icon: DollarSign,
    title: "60% das vendas estão mofando no CRM há meses",
  },
  {
    icon: Users,
    title: "Leads do Meta/Instagram viram fantasmas em 24h",
  },
  {
    icon: BarChart3,
    title: "WhatsApp é ignorado e você não sabe o que enviar",
  },
  {
    icon: Target,
    title: "Consultas marcadas = no-show = agenda vazia",
  },
  {
    icon: UserX,
    title: "A concorrente fecha em 5 minutos, você demora dias",
  }
];

const ProblemsSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-6xl font-black text-center mb-6 leading-tight">
          Você Perde Vendas Todos os Dias
          <span className="text-gradient block mt-2">e Nem Percebe...</span>
        </h2>
        
        <p className="text-center text-foreground/60 mb-16 max-w-2xl mx-auto text-lg">
          Se você já perdeu uma venda e não sabe por quê, este curso foi feito para você.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className="card-glow p-6 rounded-xl flex flex-col items-center text-center group hover:scale-[1.02] transition-transform"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-sm font-normal text-foreground/80 leading-relaxed">{problem.title}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center px-4">
          <Button 
            size="lg" 
            className="w-full sm:w-auto bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 text-white font-bold text-sm md:text-base px-6 md:px-8 py-5 md:py-6 rounded-xl shadow-xl transition-all hover:scale-[1.02]"
            onClick={() => window.open('https://pay.kiwify.com.br/mCqb3Yk', '_blank')}
          >
            QUERO RESOLVER ESSES PROBLEMAS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
