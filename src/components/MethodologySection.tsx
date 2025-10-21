import { Button } from "@/components/ui/button";

const methodologySteps = [
  {
    phase: "FASE 1",
    title: "FUNDAMENTOS",
    module: "Módulo 1",
    items: [
      "ICP Real vs ICP Imaginado (pare de perseguir lead errado)",
      "Os 3 Jogos Empresariais (adapte ao modelo da clínica)",
      "CRC é vendedora? SIM. E te mostro como."
    ]
  },
  {
    phase: "FASE 2",
    title: "CANAIS DE CONVERSÃO",
    module: "Módulo 2",
    items: [
      "Script Matador: Meta/Instagram (baixo nível de consciência)",
      "Conversão Google em 5 min (abordagem agressiva)",
      "Cold Call & Social Selling (prospecção que funciona)"
    ]
  },
  {
    phase: "FASE 3",
    title: "RAPPORT & FOLLOW-UP",
    module: "Módulos 3 e 4",
    items: [
      "Regra dos 5 Minutos (+60% conversão)",
      "Fato Novo (nunca mais mandar só 'oi, tudo bem?')",
      "BANT & SPIN Selling (qualificação real)",
      "13 Tipos de Conteúdo para Engajamento"
    ]
  },
  {
    phase: "FASE 4",
    title: "FUNIL & NO-SHOW",
    module: "Módulo 5",
    items: [
      "6 Etapas do Funil (MQL → Fechamento)",
      "Metáfora dos Reinos (conquiste cada etapa)",
      "Técnicas Anti-No-Show (vídeos, antes/depois, pré-avaliação)"
    ]
  },
  {
    phase: "FASE 5",
    title: "FECHAMENTO INFALÍVEL",
    module: "Módulo 6",
    items: [
      "Roteiro de Fechamento Completo",
      "Quebra de Objeções (método do inimigo comum)",
      "Múltiplos SIMs (micro-compromissos)",
      "Guardião das Vendas Saudáveis"
    ]
  }
];

const MethodologySection = () => {
  return (
    <section id="metodologia" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              O Sistema Exato que Transforma<br />
              <span className="text-primary">Leads em Pacientes Pagantes</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              5 fases estruturadas que te levam de recepcionista comum a máquina de conversão
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Steps */}
            <div className="space-y-6">
              {methodologySteps.map((step, index) => (
                <div
                  key={index}
                  className="bg-card border-2 border-border rounded-lg p-6 md:p-8 hover:border-primary/50 transition-all"
                  style={{
                    animation: 'fadeIn 0.6s ease-out forwards',
                    animationDelay: `${index * 0.1}s`,
                    opacity: 0
                  }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-primary text-white px-4 py-2 rounded-lg font-bold text-sm whitespace-nowrap">
                      {step.phase}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-primary mb-1">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{step.module}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 ml-4">
                    {step.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <span className="text-primary mt-1 flex-shrink-0">→</span>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Timeline Visual */}
            <div className="mt-12 bg-primary/10 rounded-lg p-6 border border-primary/20">
              <h4 className="font-bold text-center mb-4">Linha do Tempo de Transformação</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="font-bold text-primary">Semana 1-2</div>
                  <div className="text-sm text-muted-foreground">Fundamentos + Scripts</div>
                </div>
                <div>
                  <div className="font-bold text-primary">Semana 3</div>
                  <div className="text-sm text-muted-foreground">Rapport + Follow-up</div>
                </div>
                <div>
                  <div className="font-bold text-primary">Semana 4</div>
                  <div className="text-sm text-muted-foreground">Fechamento + Objeções</div>
                </div>
                <div>
                  <div className="font-bold text-primary">Resultado</div>
                  <div className="text-sm text-muted-foreground">CRC Completa</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              QUERO DOMINAR ESSE MÉTODO AGORA →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
