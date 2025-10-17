const CredibilitySection = () => {
  const stats = [
    { value: "+3.000", label: "Clínicas Atendidas" },
    { value: "R$ 50 Mi+", label: "Gerado para Clientes" },
    { value: "109x", label: "ROI Recorde (Oral Unic)" }
  ];

  const logos = [
    { name: "Sorrifácil", width: "w-32" },
    { name: "Odonto Company", width: "w-36" },
    { name: "Oral Unic", width: "w-32" },
    { name: "OdontoTop", width: "w-32" },
    { name: "Oral Sin", width: "w-28" }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Não somos uma agência <span className="text-primary">generalista.</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
            70% dos nossos clientes são clínicas odontológicas. Nós não apenas entendemos o seu negócio, nós vivemos ele.
          </p>

          <p className="text-lg text-muted-foreground mb-16 max-w-3xl mx-auto">
            Fazemos parte do maior ecossistema para odontologia do Brasil, com empresas de consultoria, vendas e até construção de clínicas. 
            <span className="text-foreground font-semibold"> Nós sabemos exatamente o jogo que você está jogando.</span>
          </p>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all"
              >
                <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-lg">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Logo Wall */}
          <div className="mb-8">
            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-8">
              A confiança das maiores redes e clínicas do Brasil
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className={`${logo.width} h-16 bg-muted/30 rounded-lg flex items-center justify-center border border-border/50`}
                >
                  <span className="text-muted-foreground font-semibold text-sm">
                    {logo.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredibilitySection;
