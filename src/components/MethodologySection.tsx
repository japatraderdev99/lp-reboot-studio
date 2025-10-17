import { Button } from "@/components/ui/button";

const methodologySteps = [
  {
    letter: "C",
    title: "COMUNICAÇÃO",
    description: "Comunicamos com o perfil exato de paciente que sua clínica precisa atrair."
  },
  {
    letter: "H",
    title: "HUMANIZAÇÃO",
    description: "Posicionamos sua clínica como autoridade na sua cidade através de conteúdo estratégico e presença digital dominante."
  },
  {
    letter: "A",
    title: "ANÚNCIO",
    description: "Criamos anúncios pagos na plataforma que seu cliente consome seus serviços."
  },
  {
    letter: "V",
    title: "VENDAS",
    description: "Gestão estratégica e oportunidades de vendas para sua equipe transformar cada lead em fechamento."
  },
  {
    letter: "I",
    title: "INTELIGÊNCIA DE DADOS",
    description: "Você acompanha o ROI de cada real investido em tempo real, com métricas claras e acionáveis."
  }
];

const MethodologySection = () => {
  return (
    <section id="metodologia" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nossa metodologia é a <span className="text-primary">CHAVE</span>
              <br />
              que sua clínica precisa
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Aplicamos uma metodologia validada em mais de 3.000 clínicas para criar um motor de crescimento previsível para o seu negócio.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block" />

            {/* Steps */}
            <div className="space-y-8">
              {methodologySteps.map((step, index) => (
                <div
                  key={index}
                  className="relative flex gap-6 items-start"
                  style={{
                    animation: 'fadeIn 0.6s ease-out forwards',
                    animationDelay: `${index * 0.15}s`,
                    opacity: 0
                  }}
                >
                  {/* Circle with Letter */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-2xl font-bold text-white shadow-lg shadow-primary/30">
                      {step.letter}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all">
                    <h3 className="text-2xl font-bold mb-3 text-primary">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-white text-lg px-8 py-6"
            >
              QUERO ENTENDER ESSE MÉTODO →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
