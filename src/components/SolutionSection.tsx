import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { getHotmartUrlWithParams } from "@/lib/utm-tracker";

const solutionPoints = [
  "Vendas é TÉCNICA, não é talento ou experiência",
  "Com o processo certo, qualquer CRC pode converter 60% mais",
  "Treinamento agressivo + acompanhamento permanente = resultado"
];

const funnelSteps = [
  { label: "Lead", color: "bg-muted" },
  { label: "Qualificação (BANT)", color: "bg-primary/30" },
  { label: "Relacionamento", color: "bg-primary/50" },
  { label: "Pitch", color: "bg-primary/70" },
  { label: "Conversão", color: "bg-primary" }
];

const SolutionSection = () => {
  return (
    <section className="py-16 md:py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <CheckCircle2 className="w-4 h-4" />
            <span className="text-sm font-semibold">A SOLUÇÃO</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 leading-tight">
            Transformar Técnica
            <span className="text-gradient block mt-2">em Processo Replicável</span>
          </h2>
          
          <p className="text-foreground/60 max-w-2xl mx-auto text-base md:text-lg">
            O segredo das clínicas que faturam +R$500k/mês: 
            <strong className="text-foreground"> um método estruturado que funciona com qualquer CRC.</strong>
          </p>
        </div>

        {/* Solution Points */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {solutionPoints.map((point, index) => (
            <div key={index} className="card-glow p-5 rounded-xl text-center">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-primary font-bold">{index + 1}</span>
              </div>
              <p className="text-sm md:text-base font-medium text-foreground/80">{point}</p>
            </div>
          ))}
        </div>

        {/* Funnel Diagram */}
        <div className="card-glow p-6 md:p-8 rounded-2xl mb-12">
          <h3 className="text-center font-bold text-lg mb-6 text-foreground/80">O Processo de Conversão</h3>
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
            {funnelSteps.map((step, index) => (
              <div key={index} className="flex items-center gap-2 md:gap-3">
                <div className={`${step.color} px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm font-semibold text-white whitespace-nowrap`}>
                  {step.label}
                </div>
                {index < funnelSteps.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-primary hidden sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="w-full sm:w-auto bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 text-white font-bold text-sm md:text-base px-6 md:px-8 py-5 md:py-6 rounded-xl shadow-xl transition-all hover:scale-[1.02]"
            onClick={() => {
              const url = getHotmartUrlWithParams("https://pay.hotmart.com/A102890720L");
              window.location.href = url;
            }}
          >
            QUERO APRENDER ESSE MÉTODO →
          </Button>
          <p className="text-xs text-foreground/50 mt-3">Acesso imediato + Garantia de 30 dias</p>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
