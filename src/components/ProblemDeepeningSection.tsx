import { AlertTriangle, MessageSquareX, Clock, Target, TrendingDown } from "lucide-react";

const causes = [
  {
    icon: MessageSquareX,
    title: "Treinada para ATENDER, não para VENDER",
    description: "Sua CRC foi ensinada a ser educada e prestativa, mas ninguém ensinou técnica de vendas"
  },
  {
    icon: Target,
    title: "Não identifica o nível de consciência do lead",
    description: "Trata todos os leads igual, sem personalizar a abordagem para cada momento da jornada"
  },
  {
    icon: Clock,
    title: "Demora para responder = lead perdido",
    description: "Enquanto sua CRC está ocupada, o concorrente já fechou a venda em 5 minutos"
  },
  {
    icon: TrendingDown,
    title: "Não conhece BANT, pitch ou follow-up",
    description: "Sem técnica estruturada, cada conversa vira improvisação e o resultado é imprevisível"
  }
];

const ProblemDeepeningSection = () => {
  return (
    <section className="py-16 md:py-20 px-4 md:px-6 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full mb-6">
            <AlertTriangle className="w-4 h-4" />
            <span className="text-sm font-semibold">A CAUSA RAIZ</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 leading-tight">
            Por Que Sua CRC Não Converte?
            <span className="text-gradient block mt-2">O Problema Que Ninguém Te Conta</span>
          </h2>
          
          <p className="text-foreground/60 max-w-2xl mx-auto text-base md:text-lg">
            O erro não está na agência, no criativo ou no lead. 
            <strong className="text-foreground"> Está na falta de técnica.</strong>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {causes.map((cause, index) => {
            const Icon = cause.icon;
            return (
              <div
                key={index}
                className="card-glow p-6 rounded-xl group hover:border-destructive/30 transition-all"
              >
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-destructive/20 transition-colors">
                    <Icon className="w-5 h-5 text-destructive" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-2">{cause.title}</h3>
                    <p className="text-sm text-foreground/60 leading-relaxed">{cause.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 p-6 md:p-8 card-glow rounded-2xl border-primary/20">
          <p className="text-center text-lg md:text-xl font-medium text-foreground/80">
            💡 <strong className="text-primary">Cada palavra mal colocada no WhatsApp</strong> gera prejuízo. 
            Cada lead não qualificado é dinheiro jogado fora.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemDeepeningSection;
