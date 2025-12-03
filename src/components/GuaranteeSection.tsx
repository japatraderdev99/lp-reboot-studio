import { Button } from "@/components/ui/button";
import { getHotmartUrlWithParams } from "@/lib/utm-tracker";
import { Shield, Clock, RefreshCw, CheckCircle2 } from "lucide-react";

const GuaranteeSection = () => {
  const benefits = [
    {
      icon: Shield,
      title: "100% Seguro",
      description: "Seu investimento está totalmente protegido"
    },
    {
      icon: Clock,
      title: "30 Dias",
      description: "Tempo completo para testar e aplicar"
    },
    {
      icon: RefreshCw,
      title: "Sem Burocracia",
      description: "Devolução rápida e descomplicada"
    },
    {
      icon: CheckCircle2,
      title: "Garantia Total",
      description: "Zero risco para você"
    }
  ];

  return (
    <section id="diferenciais" className="py-12 md:py-20 px-4 md:px-6 bg-luxury-dark/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto max-w-4xl relative z-10 text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary/10 border-2 border-primary/20 mb-4 animate-pulse">
          <Shield className="w-7 h-7 md:w-8 md:h-8 text-primary" />
        </div>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 leading-tight px-2">
          Garantia de <span className="text-gradient">30 Dias</span>
        </h2>
        
        <p className="text-base md:text-lg text-foreground/70 max-w-2xl mx-auto mb-6 px-4">
          Teste o método por 30 dias. Se não ficar satisfeito, devolvemos <span className="text-primary font-bold">100% do valor</span>. Sem perguntas.
        </p>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-2 text-sm md:text-base text-foreground/80">
              <benefit.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              <span>{benefit.title}</span>
            </div>
          ))}
        </div>

        <Button 
          size="lg" 
          className="w-full sm:w-auto text-sm md:text-base px-6 md:px-10 py-4 md:py-5 h-auto shadow-xl"
          onClick={() => {
            const url = getHotmartUrlWithParams("https://pay.hotmart.com/A102890720L");
            window.location.href = url;
          }}
        >
          GARANTIR MINHA VAGA
        </Button>
        
        <p className="text-[10px] md:text-xs text-foreground/50 mt-3">
          🔒 Pagamento seguro • Garantia de 30 dias
        </p>
      </div>
    </section>
  );
};

export default GuaranteeSection;
