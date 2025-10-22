import { Button } from "@/components/ui/button";

const CasesSection = () => {
  const mainCases = [
    {
      title: "VIVA ODONTOLOGIA",
      badge: "🏆 Case Âncora",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=400&fit=crop",
      metrics: [
        { label: "Investimento", value: "R$ 124.294" },
        { label: "Faturamento", value: "R$ 3,8 MI" },
        { label: "ROAS", value: "27,11x" },
        { label: "Período", value: "10 meses" }
      ],
      description: "De R$124 mil investidos para R$3,8 MILHÕES em vendas. Sistema completo de vendas multiplicou resultado em 27x."
    },
    {
      title: "ORAL UNIC VILA MARIANA",
      badge: "🏆",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop",
      metrics: [
        { label: "Vendas", value: "R$ 2 MI+" },
        { label: "Período", value: "14 meses" }
      ],
      description: "Mais de R$2 milhões em vendas em 14 meses. Crescimento consistente e escalável.",
      extraInfo: "Ticket médio: R$12.500 | Comparecimento: 80%"
    },
    {
      title: "ORAL UNIC JOÃO PESSOA",
      badge: "🏆",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=400&fit=crop",
      metrics: [
        { label: "Vendas", value: "R$ 820 mil" },
        { label: "ROAS", value: "27x" }
      ],
      description: "R$820 mil efetivados com ROAS de 27x. Taxa de conversão de 43% com CPL de apenas R$18,34.",
      extraInfo: "Período: 8 meses"
    }
  ];

  const otherCases = [
    {
      title: "ORAL UNIC NATAL",
      metric: { label: "Vendas", value: "R$ 800k+" },
      description: "R$42 mil se transformaram em R$800 mil. Crescimento previsível mês após mês.",
      period: "Período: 12 meses"
    },
    {
      title: "ORAL UNIC IBIRAMA",
      metric: { label: "ROAS", value: "64,65x" },
      description: "52 vendas em 30 dias. R$352 mil faturados. Ticket médio de R$6.774."
    },
    {
      title: "ORAL UNIC PRES. PRUDENTE",
      metric: { label: "ROAS", value: "28x" },
      description: "R$93.100 efetivados em apenas 18 dias. Velocidade e conversão."
    },
    {
      title: "INNOVARE SORRISOS",
      metric: { label: "Vendas", value: "R$ 105k" },
      description: "Mais de R$105 mil em vendas em 30 dias. Crescimento acelerado."
    },
    {
      title: "CLINIC DENTE",
      metric: { label: "Vendas", value: "R$ 103k" },
      description: "R$103.160 em vendas com tráfego pago em apenas 1 mês."
    },
    {
      title: "SERIDÓ MED",
      metric: { label: "Receita", value: "R$ 100k" },
      description: "R$100 mil em receita com investimento de apenas R$3.256 em 1 mês."
    },
    {
      title: "ODONTO EXCELLENCE",
      metric: { label: "CPL", value: "R$ 24" },
      description: "CPL reduzido de R$150 para R$24 em menos de 30 dias."
    },
    {
      title: "ORAL UNIC SERTÃOZINHO",
      metric: { label: "CPL", value: "R$ 5,54" },
      description: "CPL reduzido de R$65 para R$5,54 em menos de 24h."
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-6xl font-black text-center mb-4 leading-tight">
          Você Quer Promessas ou
          <span className="text-gradient block mt-2">Quer Provas?</span>
        </h2>
        <p className="text-center text-foreground/70 mb-16 max-w-3xl mx-auto">
          Veja os números reais de clínicas que escolheram resultados ao invés de discursos.
        </p>

        {/* Main Cases */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {mainCases.map((caseItem, index) => (
            <div key={index} className="card-glow rounded-2xl overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={caseItem.image} 
                  alt={caseItem.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold">
                  {caseItem.badge}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-black mb-4">{caseItem.title}</h3>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {caseItem.metrics.map((metric, idx) => (
                    <div key={idx}>
                      <div className="text-xs text-foreground/60 mb-1">{metric.label}</div>
                      <div className="text-lg font-bold text-primary">{metric.value}</div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-foreground/70 mb-2">{caseItem.description}</p>
                {caseItem.extraInfo && (
                  <p className="text-xs text-foreground/50">{caseItem.extraInfo}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Other Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {otherCases.map((caseItem, index) => (
            <div key={index} className="card-glow p-5 rounded-xl">
              <h4 className="text-sm font-bold mb-3">{caseItem.title}</h4>
              <div className="mb-3">
                <div className="text-xs text-foreground/60 mb-1">{caseItem.metric.label}</div>
                <div className="text-2xl font-black text-gradient">{caseItem.metric.value}</div>
              </div>
              <p className="text-xs text-foreground/60">{caseItem.description}</p>
              {caseItem.period && (
                <p className="text-xs text-foreground/50 mt-2">{caseItem.period}</p>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 h-auto"
            onClick={() => window.open('https://pay.kiwify.com.br/mCqb3Yk', '_blank')}
          >
            QUERO RESULTADOS COMO ESTES
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
