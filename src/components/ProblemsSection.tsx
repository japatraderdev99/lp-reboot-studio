import { Button } from "@/components/ui/button";
import { TrendingDown, DollarSign, Users, BarChart3, Target, UserX } from "lucide-react";
import { getHotmartUrlWithParams } from "@/lib/utm-tracker";

const problems = [
  {
    icon: TrendingDown,
    title: "Leads que somem no WhatsApp sem resposta",
  },
  {
    icon: DollarSign,
    title: "Taxa de conversão baixa mesmo investindo em marketing",
  },
  {
    icon: Users,
    title: "CRC que não consegue converter oportunidades",
  },
  {
    icon: BarChart3,
    title: "Leads desqualificados que não fecham",
  },
  {
    icon: Target,
    title: "Falta de processo comercial estruturado",
  },
  {
    icon: UserX,
    title: "Concorrente fecha em 5 minutos, você demora dias",
  }
];

const ProblemsSection = () => {
  return (
    <section className="py-12 md:py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-center mb-4 md:mb-6 leading-tight px-2">
          Você Reconhece Esses Problemas
          <span className="text-gradient block mt-1 md:mt-2">na Sua Clínica?</span>
        </h2>
        
        <p className="text-center text-foreground/60 mb-8 md:mb-12 lg:mb-16 max-w-2xl mx-auto text-sm md:text-base lg:text-lg px-2">
          Se você identificou <strong className="text-foreground">pelo menos 2 desses problemas</strong>, continue lendo...
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mb-10 md:mb-16">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className="card-glow p-4 md:p-6 rounded-xl flex flex-col items-center text-center group hover:scale-[1.02] transition-transform"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                </div>
                <p className="text-xs md:text-sm font-normal text-foreground/80 leading-relaxed">{problem.title}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center px-2">
          <Button 
            size="lg" 
            className="w-full sm:w-auto bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 text-white font-bold text-sm md:text-base px-6 md:px-8 py-5 md:py-6 rounded-xl shadow-xl transition-all hover:scale-[1.02]"
            onClick={() => {
              const url = getHotmartUrlWithParams("https://pay.hotmart.com/A102890720L");
              window.location.href = url;
            }}
          >
            RESOLVER ESSES PROBLEMAS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
