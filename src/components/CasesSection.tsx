import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { getHotmartUrlWithParams } from "@/lib/utm-tracker";
import viviaOdontoImage from "@/assets/vivia-odonto.webp";
import oralUnicVilaImage from "@/assets/oral-unic-vila-mariana.webp";
import oralUnicJoaoImage from "@/assets/oral-unic-joao-pessoa.webp";

const CasesSection = () => {
  const mainCases = [
    {
      title: "VIVA ODONTOLOGIA",
      badge: "🏆",
      image: viviaOdontoImage,
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
      image: oralUnicVilaImage,
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
      image: oralUnicJoaoImage,
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
    <section id="resultados" className="py-12 md:py-20 px-4 md:px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-center mb-3 md:mb-4 leading-tight px-2">
          Você Quer Promessas ou
          <span className="text-gradient block mt-2">Quer Provas?</span>
        </h2>
        <p className="text-center text-foreground/70 mb-12 md:mb-16 max-w-3xl mx-auto text-sm md:text-base px-4">
          Veja os números reais de clínicas que escolheram resultados ao invés de discursos.
        </p>

        {/* Main Cases - Carousel */}
        <Carousel className="w-full mb-8 md:mb-12 px-2">
          <CarouselContent className="-ml-2 md:-ml-4">
            {mainCases.map((caseItem, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                <div className="card-glow rounded-xl md:rounded-2xl overflow-hidden h-full">
                    <div className="relative h-36 md:h-48 overflow-hidden" style={{ aspectRatio: '2/1' }}>
                    <img 
                      src={caseItem.image} 
                      alt={caseItem.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                      width="400"
                      height="200"
                    />
                    <div className="absolute top-3 left-3 md:top-4 md:left-4 bg-primary/90 backdrop-blur-sm px-2 py-1 md:px-3 md:py-1 rounded-full text-[10px] md:text-xs font-bold">
                      {caseItem.badge}
                    </div>
                  </div>
                  <div className="p-4 md:p-6">
                    <h3 className="text-base md:text-lg font-black mb-3 md:mb-4">{caseItem.title}</h3>
                    <div className="grid grid-cols-2 gap-2 md:gap-3 mb-3 md:mb-4">
                      {caseItem.metrics.map((metric, idx) => (
                        <div key={idx}>
                          <div className="text-[10px] md:text-xs text-foreground/60 mb-1">{metric.label}</div>
                          <div className="text-sm md:text-lg font-bold text-primary">{metric.value}</div>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs md:text-sm text-foreground/70 mb-2">{caseItem.description}</p>
                    {caseItem.extraInfo && (
                      <p className="text-[10px] md:text-xs text-foreground/50">{caseItem.extraInfo}</p>
                    )}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 md:-left-12" />
          <CarouselNext className="right-0 md:-right-12" />
        </Carousel>

        {/* Other Cases - Carousel */}
        <Carousel className="w-full mb-8 md:mb-12 px-2">
          <CarouselContent className="-ml-2 md:-ml-3">
            {otherCases.map((caseItem, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-3 basis-full sm:basis-1/2 lg:basis-1/4">
                <div className="card-glow p-4 md:p-5 rounded-xl h-full">
                  <h4 className="text-xs md:text-sm font-bold mb-2 md:mb-3">{caseItem.title}</h4>
                  <div className="mb-2 md:mb-3">
                    <div className="text-[10px] md:text-xs text-foreground/60 mb-1">{caseItem.metric.label}</div>
                    <div className="text-xl md:text-2xl font-black text-gradient">{caseItem.metric.value}</div>
                  </div>
                  <p className="text-xs text-foreground/60">{caseItem.description}</p>
                  {caseItem.period && (
                    <p className="text-[10px] md:text-xs text-foreground/50 mt-2">{caseItem.period}</p>
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 md:-left-12" />
          <CarouselNext className="right-0 md:-right-12" />
        </Carousel>

        {/* CTA */}
        <div className="text-center px-4">
          <Button 
            size="lg" 
            className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 h-auto w-full sm:w-auto whitespace-normal sm:whitespace-nowrap leading-tight"
            onClick={() => {
              const url = getHotmartUrlWithParams("https://pay.hotmart.com/A102890720L");
              window.location.href = url;
            }}
          >
            QUERO RESULTADOS COMO ESTES
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
