import { Button } from "@/components/ui/button";
import { Play, RotateCcw } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen pt-24 pb-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-6 animate-fade-in">
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold border border-primary/20">
              ⚡ 60% mais conversão em 5 minutos
            </span>
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold border border-primary/20">
              📈 Usado por 500+ clínicas
            </span>
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold border border-primary/20">
              💰 R$ 2M+ faturados
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-6 animate-slide-up leading-tight">
            De Secretária a Máquina de Vendas:{" "}
            <span className="text-primary">Aumente em 60% a Conversão</span>
            {" "}da Sua Clínica em 30 Dias
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-center text-muted-foreground mb-12 max-w-4xl mx-auto animate-fade-in leading-relaxed" style={{animationDelay: '0.2s'}}>
            Método F5 validado em +500 clínicas: transforme leads frios em pacientes pagantes usando o sistema exato que fatura R$ 2M+/ano no mercado odontológico
          </p>

          {/* Video Container */}
          <div className="relative max-w-4xl mx-auto mb-8 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <div className="aspect-video bg-primary/20 rounded-lg border-2 border-primary/30 flex flex-col items-center justify-center gap-6 p-8">
              <h3 className="text-2xl font-bold text-center">
                Você já começou a assistir esse vídeo
              </h3>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white gap-2">
                  <Play className="w-5 h-5" />
                  Continuar assistindo?
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white gap-2">
                  <RotateCcw className="w-5 h-5" />
                  Assistir do início?
                </Button>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="max-w-2xl mx-auto mb-12 animate-fade-in flex flex-col sm:flex-row gap-4" style={{animationDelay: '0.5s'}}>
            <Button 
              size="lg" 
              className="flex-1 bg-primary hover:bg-primary/90 text-white font-bold text-base md:text-lg py-6 md:py-7 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Quero Converter Mais Leads →
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="flex-1 border-primary text-primary hover:bg-primary hover:text-white font-bold text-base md:text-lg py-6 md:py-7 px-6 rounded-lg transition-all duration-300"
            >
              Assistir Aula Gratuita
            </Button>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto animate-fade-in" style={{animationDelay: '0.6s'}}>
            {[
              "Método validado em +500 clínicas",
              "Aumento de 60% na conversão comprovado",
              "Resultados em até 30 dias",
              "Sistema que fatura R$ 2M+/ano"
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-2 bg-card/50 p-4 rounded-lg border border-border hover:border-primary/50 transition-all">
                <span className="text-primary mt-1 text-lg">✓</span>
                <span className="text-sm font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
