const CredibilitySection = () => {
  const stats = [
    { value: "22% → 45%", label: "Taxa de conversão (média)" },
    { value: "30d → 7d", label: "Tempo de fechamento" },
    { value: "+35%", label: "Aumento no ticket médio" }
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
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Quem Te Ensina Não é Teoria,<br />
            é <span className="text-primary">RESULTADOS REAIS</span>
          </h2>
          
          <div className="max-w-4xl mx-auto mb-12 bg-card border-2 border-primary/30 rounded-lg p-8">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center text-4xl font-bold text-primary flex-shrink-0">
                FM
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">👤 Fernando Machado</h3>
                <p className="text-primary font-semibold mb-2">Diretor Comercial F5 Estratégia</p>
                <div className="text-muted-foreground space-y-1">
                  <p>→ +15 anos no mercado odontológico</p>
                  <p>→ R$ 2M+ em vendas estruturadas</p>
                  <p>→ 500+ CRCs treinadas</p>
                  <p>→ Método validado em clínicas de alto ticket E volume</p>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-center text-lg font-semibold italic">
                "Eu não te ensino a atender. Eu te ensino a <span className="text-primary">VENDER</span> e proteger o caixa da empresa ao mesmo tempo."
              </p>
            </div>
          </div>

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

          {/* Depoimentos */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-8">Depoimentos de Quem Aplicou o Método</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  quote: "Converti 3 leads no primeiro dia aplicando a regra dos 5 minutos",
                  author: "Maria Silva, CRC"
                },
                {
                  quote: "Diminuí no-show de 40% para 8% com as técnicas de autoridade",
                  author: "João Santos, Coordenador"
                },
                {
                  quote: "Meu ticket médio subiu 30% usando o roteiro de fechamento",
                  author: "Ana Costa, Gestora"
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all">
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
                  <p className="font-semibold text-sm">— {testimonial.author}</p>
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
