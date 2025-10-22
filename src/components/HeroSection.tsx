import { Button } from "@/components/ui/button";
import bannerCurso from "@/assets/banner-do-curso.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-6 relative overflow-hidden">
      {/* Enhanced Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] md:w-[1000px] h-[400px] md:h-[600px] bg-primary/20 rounded-full blur-[120px] md:blur-[150px] opacity-40" />
      <div className="absolute top-1/3 left-1/4 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-primary/15 rounded-full blur-[100px] md:blur-[120px] opacity-30" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] md:w-[500px] h-[350px] md:h-[500px] bg-primary/10 rounded-full blur-[80px] md:blur-[100px] opacity-25" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-center mb-6 md:mb-8 animate-slide-up leading-[1.15] tracking-tight px-2">
            De Secretária a Máquina de Vendas:{" "}
            <span className="text-gradient">Aumente em 60% a Conversão</span>
            {" "}da Sua Clínica em 30 Dias
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl text-center text-foreground/70 mb-12 md:mb-16 max-w-4xl mx-auto animate-fade-in leading-relaxed font-light px-4" style={{animationDelay: '0.2s'}}>
            Método f5 validado em 3000+ clínicas odontológicas: transforme leads frios em pacientes recorrentes usando a metodologia que gera receita previsível e escalável no mercado odontológico
          </p>

          {/* Banner Container */}
          <div className="relative max-w-5xl mx-auto mb-8 md:mb-12 animate-scale-in px-2" style={{animationDelay: '0.4s'}}>
            <div className="relative aspect-video rounded-xl md:rounded-2xl overflow-hidden border border-white/[0.06] shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none z-10" />
              
              <img 
                src={bannerCurso} 
                alt="CRC Que Converte - Banner do Curso"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* CTA */}
          <div className="max-w-2xl mx-auto mb-12 md:mb-16 animate-fade-in px-4" style={{animationDelay: '0.5s'}}>
          <Button 
            size="lg" 
            className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl py-5 sm:py-6 md:py-7 lg:py-8 px-6 md:px-8 rounded-xl shadow-xl hover:shadow-orange transition-all duration-300 hover:scale-[1.02] whitespace-normal leading-tight"
            onClick={() => window.open('https://pay.kiwify.com.br/mCqb3Yk', '_blank')}
          >
            QUERO CONVERTER MAIS LEADS AGORA →
          </Button>
          </div>

          {/* Benefits Grid - Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 max-w-6xl mx-auto animate-fade-in px-2" style={{animationDelay: '0.6s'}}>
            {[
              "Método validado em +500 clínicas",
              "Aumento de 60% na conversão comprovado",
              "Resultados em até 30 dias",
              "Sistema que fatura R$ 2M+/ano"
            ].map((benefit, index) => (
              <div 
                key={index} 
                className="group card-glow p-4 md:p-5 rounded-xl cursor-default"
              >
                <div className="flex items-start gap-2.5">
                  <span className="text-primary mt-0.5 text-base font-bold group-hover:scale-110 transition-transform duration-300 flex-shrink-0">✓</span>
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
