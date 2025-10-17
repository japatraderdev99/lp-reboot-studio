import { Button } from "@/components/ui/button";
import { Play, RotateCcw } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen pt-24 pb-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Pre-headline */}
          <p className="text-muted-foreground text-center mb-4 animate-fade-in">
            ⚡ Assista esse vídeo até o final e descubra o método EXATO que as maiores redes de odontologia do Brasil usam para converter leads
          </p>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-6 animate-slide-up">
            Sua CRC está desperdiçando{" "}
            <span className="text-primary">40% dos seus leads</span>
            <br />
            (e você está pagando por isso)
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-center text-muted-foreground mb-12 max-w-4xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
            Transforme sua recepcionista em uma máquina de conversão que aumenta seu faturamento em até 60% - sem contratar ninguém novo.
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

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto animate-fade-in" style={{animationDelay: '0.6s'}}>
            {[
              "Método validado em +3.000 clínicas",
              "Aumento de 60% na conversão comprovado",
              "Resultados em até 30 dias",
              "Certificado F5 Estratégia"
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-2 bg-card/50 p-4 rounded-lg border border-border">
                <span className="text-primary mt-1">✓</span>
                <span className="text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
