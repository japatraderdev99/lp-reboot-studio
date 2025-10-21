import { Button } from "@/components/ui/button";
import { Play, RotateCcw } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-luxury-dark" />
      
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] opacity-30" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] opacity-20" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in">
            <span className="glass px-5 py-2.5 rounded-full text-sm font-semibold text-primary border border-primary/30 backdrop-blur-xl hover:scale-105 transition-transform duration-300">
              ⚡ 60% mais conversão em 5 minutos
            </span>
            <span className="glass px-5 py-2.5 rounded-full text-sm font-semibold text-primary border border-primary/30 backdrop-blur-xl hover:scale-105 transition-transform duration-300">
              📈 Usado por 500+ clínicas
            </span>
            <span className="glass px-5 py-2.5 rounded-full text-sm font-semibold text-primary border border-primary/30 backdrop-blur-xl hover:scale-105 transition-transform duration-300">
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

          {/* Video Container */}
          <div className="relative max-w-5xl mx-auto mb-12 animate-scale-in" style={{animationDelay: '0.4s'}}>
            <div className="relative aspect-video glass-dark rounded-2xl border border-white/[0.08] flex flex-col items-center justify-center gap-8 p-10 overflow-hidden shadow-2xl">
              {/* Inner glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
              
              <div className="relative z-10 text-center space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold">
                  Você já começou a assistir esse vídeo
                </h3>
                
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 text-white gap-3 px-8 py-6 text-base font-semibold shadow-lg hover:shadow-orange transition-all duration-300 hover:scale-[1.02]"
                  >
                    <Play className="w-5 h-5" />
                    Continuar assistindo?
                  </Button>
                  <Button 
                    size="lg" 
                    className="glass border-primary/50 text-primary hover:bg-primary hover:text-white gap-3 px-8 py-6 text-base font-semibold transition-all duration-300 hover:scale-[1.02]"
                  >
                    <RotateCcw className="w-5 h-5" />
                    Assistir do início?
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="max-w-3xl mx-auto mb-16 animate-fade-in flex flex-col sm:flex-row gap-5" style={{animationDelay: '0.5s'}}>
            <Button 
              size="lg" 
              className="flex-1 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 text-white font-bold text-lg py-7 md:py-8 px-8 rounded-xl shadow-xl hover:shadow-orange transition-all duration-300 hover:scale-[1.02]"
            >
              Quero Converter Mais Leads →
            </Button>
            <Button 
              size="lg"
              className="flex-1 glass border-primary/50 text-primary hover:bg-primary hover:text-white font-bold text-lg py-7 md:py-8 px-8 rounded-xl transition-all duration-300 hover:scale-[1.02]"
            >
              Assistir Aula Gratuita
            </Button>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto animate-fade-in" style={{animationDelay: '0.6s'}}>
            {[
              "Método validado em +500 clínicas",
              "Aumento de 60% na conversão comprovado",
              "Resultados em até 30 dias",
              "Sistema que fatura R$ 2M+/ano"
            ].map((benefit, index) => (
              <div 
                key={index} 
                className="group flex items-start gap-3 glass p-6 rounded-xl border border-white/[0.08] hover:border-primary/50 hover-luxury cursor-default"
              >
                <span className="text-primary mt-0.5 text-xl font-bold group-hover:scale-110 transition-transform duration-300">✓</span>
                <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors duration-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
