import { Button } from "@/components/ui/button";
import bannerCurso from "@/assets/banner-do-curso.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Enhanced Glow Effects - inspired by viverdeia.ai */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/20 rounded-full blur-[150px] opacity-40" />
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[120px] opacity-30" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] opacity-25" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Badges - Minimalist style */}
          <div className="flex flex-wrap justify-center gap-3 mb-10 animate-fade-in">
            <span className="px-4 py-2 rounded-full text-xs font-medium text-foreground/80 bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl hover:border-primary/30 hover:text-primary transition-all duration-300">
              ⚡ 60% mais conversão em 5 minutos
            </span>
            <span className="px-4 py-2 rounded-full text-xs font-medium text-foreground/80 bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl hover:border-primary/30 hover:text-primary transition-all duration-300">
              📈 Usado por 500+ clínicas
            </span>
            <span className="px-4 py-2 rounded-full text-xs font-medium text-foreground/80 bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl hover:border-primary/30 hover:text-primary transition-all duration-300">
              💰 R$ 2M+ faturados
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-center mb-8 animate-slide-up leading-[1.1] tracking-tight">
            De Secretária a Máquina de Vendas:{" "}
            <span className="text-gradient">Aumente em 60% a Conversão</span>
            {" "}da Sua Clínica em 30 Dias
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-center text-foreground/70 mb-16 max-w-4xl mx-auto animate-fade-in leading-relaxed font-light" style={{animationDelay: '0.2s'}}>
            Método F5 validado em +500 clínicas: transforme leads frios em pacientes pagantes usando o sistema exato que fatura R$ 2M+/ano no mercado odontológico
          </p>

          {/* Banner Container - Minimalist sophisticated style */}
          <div className="relative max-w-5xl mx-auto mb-12 animate-scale-in" style={{animationDelay: '0.4s'}}>
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/[0.06]">
              {/* Subtle inner glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none z-10" />
              
              <img 
                src={bannerCurso} 
                alt="CRC Que Converte - Banner do Curso"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* CTA */}
          <div className="max-w-2xl mx-auto mb-16 animate-fade-in" style={{animationDelay: '0.5s'}}>
            <Button 
              size="lg" 
              className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 text-white font-bold text-lg py-7 md:py-8 px-8 rounded-xl shadow-xl hover:shadow-orange transition-all duration-300 hover:scale-[1.02]"
              onClick={() => window.open('https://pay.kiwify.com.br/mCqb3Yk', '_blank')}
            >
              QUERO CONVERTER MAIS LEADS AGORA →
            </Button>
          </div>

          {/* Benefits Grid - Minimalist cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto animate-fade-in" style={{animationDelay: '0.6s'}}>
            {[
              "Método validado em +500 clínicas",
              "Aumento de 60% na conversão comprovado",
              "Resultados em até 30 dias",
              "Sistema que fatura R$ 2M+/ano"
            ].map((benefit, index) => (
              <div 
                key={index} 
                className="group card-glow p-5 rounded-xl cursor-default"
              >
                <div className="flex items-start gap-2.5">
                  <span className="text-primary mt-0.5 text-base font-bold group-hover:scale-110 transition-transform duration-300">✓</span>
                  <span className="text-sm font-normal text-foreground/70 group-hover:text-foreground/90 transition-colors duration-300">{benefit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
