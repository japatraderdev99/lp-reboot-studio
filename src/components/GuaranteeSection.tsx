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
    <section className="py-20 px-6 bg-luxury-dark/30 relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Main Content */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 border-2 border-primary/20 mb-6 animate-pulse">
            <Shield className="w-10 h-10 text-primary" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Garantia Incondicional de
            <span className="text-gradient block mt-2">30 Dias</span>
          </h2>
          
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto mb-8">
            Você tem <span className="text-primary font-bold">30 dias completos</span> para aplicar as técnicas, 
            testar o método e ver os primeiros resultados. Se por qualquer motivo você não ficar 
            satisfeito, devolvemos <span className="text-primary font-bold">100% do seu investimento</span>.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="card-glow p-6 rounded-2xl text-center hover-scale"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 border border-primary/20 mb-4">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
              <p className="text-sm text-foreground/60">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Highlighted Box */}
        <div className="max-w-4xl mx-auto card-glow p-8 md:p-12 rounded-3xl text-center border-2 border-primary/20">
          <h3 className="text-2xl md:text-3xl font-black mb-4">
            Por Que Oferecemos Essa Garantia?
          </h3>
          <p className="text-foreground/70 mb-6 text-lg">
            Porque temos <span className="text-primary font-bold">confiança absoluta</span> no 
            nosso método. Mais de <span className="text-primary font-bold">500 CRCs</span> já aplicaram 
            essas técnicas e transformaram seus resultados. Agora é a sua vez.
          </p>
          
          <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6 mb-8">
            <p className="text-sm text-foreground/80 mb-2">
              Isso significa que você tem <span className="text-primary font-bold">ZERO RISCO</span>
            </p>
            <p className="text-2xl font-black text-gradient">
              Ou você transforma seus resultados ou devolvemos seu dinheiro
            </p>
          </div>

          <Button 
            size="lg" 
            className="text-lg px-12 py-7 h-auto shadow-xl hover:shadow-2xl transition-all"
            onClick={() => window.open('https://pay.kiwify.com.br/mCqb3Yk', '_blank')}
          >
            GARANTIR MINHA VAGA COM SEGURANÇA
          </Button>
          
          <p className="text-xs text-foreground/50 mt-4">
            🔒 Pagamento 100% seguro • Garantia de 30 dias
          </p>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
