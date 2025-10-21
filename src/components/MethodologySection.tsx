import { Button } from "@/components/ui/button";
import modulo1 from "@/assets/modulo1.jpg";
import modulo2 from "@/assets/modulo2.jpg";
import modulo3 from "@/assets/modulo3.jpg";
import modulo4 from "@/assets/modulo4.jpg";
import modulo5 from "@/assets/modulo5.jpg";
import modulo6 from "@/assets/modulo6.jpg";

const methodologySteps = [
  {
    phase: "FASE 1",
    title: "FUNDAMENTOS",
    module: "Módulo 1",
    thumbnail: modulo1,
    items: [
      "ICP Real vs ICP Imaginado",
      "Os 3 Jogos Empresariais",
      "CRC é vendedora? SIM"
    ]
  },
  {
    phase: "FASE 2",
    title: "CANAIS DE CONVERSÃO",
    module: "Módulo 2",
    thumbnail: modulo2,
    items: [
      "Script Meta/Instagram",
      "Conversão Google em 5 min",
      "Cold Call & Social Selling"
    ]
  },
  {
    phase: "FASE 3",
    title: "ENGAJAMENTO & FOLLOW-UP",
    module: "Módulo 3",
    thumbnail: modulo3,
    items: [
      "Fato Novo",
      "BANT & SPIN Selling",
      "13 Tipos de Conteúdo"
    ]
  },
  {
    phase: "FASE 4",
    title: "RAPPORT & CONEXÃO",
    module: "Módulo 4",
    thumbnail: modulo4,
    items: [
      "Regra dos 5 Minutos (+60% conversão)",
      "Gerando Conexão Verdadeira",
      "Técnicas de Autoridade"
    ]
  },
  {
    phase: "FASE 5",
    title: "FUNIL & JORNADA DE COMPRA",
    module: "Módulo 5",
    thumbnail: modulo5,
    items: [
      "6 Etapas do Funil (MQL → Fechamento)",
      "Metáfora dos Reinos",
      "Técnicas Anti-No-Show"
    ]
  },
  {
    phase: "FASE 6",
    title: "FECHAMENTO INFALÍVEL",
    module: "Módulo 6",
    thumbnail: modulo6,
    items: [
      "Roteiro de Fechamento Completo",
      "Quebra de Objeções",
      "Guardião das Vendas Saudáveis"
    ]
  }
];

const MethodologySection = () => {
  return (
    <section id="metodologia" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            O Sistema que Transforma
            <span className="text-gradient block mt-2">Leads em Pacientes</span>
          </h2>
          <p className="text-foreground/60 max-w-3xl mx-auto">
            6 módulos estruturados para você se tornar uma máquina de conversão
          </p>
        </div>

        <div className="space-y-6 mb-16">
          {methodologySteps.map((step, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl border border-white/[0.08] overflow-hidden hover:border-primary/30 transition-all"
            >
              <div className="flex flex-col md:flex-row gap-6 p-6">
                {/* Thumbnail Vertical - Kiwify */}
                <div className="relative w-full md:w-40 h-64 md:h-auto flex-shrink-0 rounded-xl overflow-hidden">
                  <img 
                    src={step.thumbnail} 
                    alt={`${step.module} - ${step.title}`}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-lg font-bold text-xs">
                      {step.phase}
                    </span>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-primary">
                        {step.title}
                      </h3>
                      <p className="text-xs text-foreground/60">{step.module}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {step.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2 text-sm text-foreground/70">
                        <span className="text-primary mt-0.5">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 text-white font-bold text-base px-8 py-6 rounded-xl shadow-xl transition-all hover:scale-[1.02]"
          >
            QUERO DOMINAR ESSE MÉTODO →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
