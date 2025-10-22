import { Button } from "@/components/ui/button";
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
    <section className="py-12 md:py-20 px-4 md:px-6 bg-luxury-dark/30 relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Main Content */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 border-2 border-primary/20 mb-4 md:mb-6 animate-pulse">
            <Shield className="w-8 h-8 md:w-10 md:h-10 text-primary" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 leading-tight px-2">
            Garantia Incondicional de
            <span className="text-gradient block mt-2">30 Dias</span>
          </h2>
          
          <p className="text-base md:text-xl text-foreground/70 max-w-3xl mx-auto mb-6 md:mb-8 px-4">
            Você tem <span className="text-primary font-bold">30 dias completos</span> para aplicar as técnicas, 
            testar o método e ver os primeiros resultados. Se por qualquer motivo você não ficar 
            satisfeito, devolvemos <span className="text-primary font-bold">100% do seu investimento</span>.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-8 md:mb-12 px-2">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="card-glow p-4 md:p-6 rounded-xl md:rounded-2xl text-center hover-scale"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-full bg-primary/10 border border-primary/20 mb-3 md:mb-4">
                <benefit.icon className="w-5 h-5 md:w-7 md:h-7 text-primary" />
              </div>
              <h3 className="text-sm md:text-lg font-bold mb-1 md:mb-2">{benefit.title}</h3>
              <p className="text-xs md:text-sm text-foreground/60">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Highlighted Box */}
        <div className="max-w-4xl mx-auto card-glow p-6 md:p-12 rounded-2xl md:rounded-3xl text-center border-2 border-primary/20 mx-4">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-black mb-3 md:mb-4">
            Por Que Oferecemos Essa Garantia?
          </h3>
          <p className="text-foreground/70 mb-4 md:mb-6 text-sm md:text-lg">
            Porque temos <span className="text-primary font-bold">confiança absoluta</span> no 
            nosso método. Mais de <span className="text-primary font-bold">500 CRCs</span> já aplicaram 
            essas técnicas e transformaram seus resultados. Agora é a sua vez.
          </p>
          
          <div className="bg-primary/10 border border-primary/20 rounded-xl md:rounded-2xl p-4 md:p-6 mb-6 md:mb-8">
            <p className="text-xs md:text-sm text-foreground/80 mb-2">
              Isso significa que você tem <span className="text-primary font-bold">ZERO RISCO</span>
            </p>
            <p className="text-lg md:text-2xl font-black text-gradient">
              Ou você transforma seus resultados ou devolvemos seu dinheiro
            </p>
          </div>

          <Button 
            size="lg" 
            className="w-full sm:w-auto text-base md:text-lg px-6 sm:px-8 md:px-12 py-5 sm:py-6 md:py-7 h-auto shadow-xl hover:shadow-2xl transition-all whitespace-normal sm:whitespace-nowrap leading-tight"
            onClick={() => window.open('https://pay.kiwify.com.br/mCqb3Yk', '_blank')}
          >
            GARANTIR MINHA VAGA COM SEGURANÇA
          </Button>
          
          <p className="text-[10px] md:text-xs text-foreground/50 mt-3 md:mt-4">
            🔒 Pagamento 100% seguro • Garantia de 30 dias
          </p>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
