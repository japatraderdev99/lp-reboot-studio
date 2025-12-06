import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";
import { getHotmartUrlWithParams } from "@/lib/utm-tracker";

const faqs = [
  {
    question: "Funciona para clínicas pequenas ou só para redes grandes?",
    answer: "Funciona para qualquer tamanho de clínica. Temos casos de clínicas que saíram de R$20k/mês para R$150k/mês aplicando o método. O processo é o mesmo, independente do tamanho da operação."
  },
  {
    question: "Minha CRC não tem experiência em vendas. Vai funcionar?",
    answer: "Sim! O método foi criado justamente para isso. É didático, prático e passo a passo. Sua CRC não precisa de experiência prévia em vendas - apenas precisa seguir o processo ensinado."
  },
  {
    question: "Em quanto tempo vejo resultados?",
    answer: "Com aplicação correta do método, você começa a ver resultados em 30 dias. Alguns alunos reportam aumento de conversão já na primeira semana de implementação."
  },
  {
    question: "E se não funcionar para minha clínica?",
    answer: "Oferecemos garantia incondicional de 30 dias. Se você aplicar o método e não ver resultados, devolvemos 100% do seu investimento. Sem burocracia."
  },
  {
    question: "Como funciona o acesso ao curso?",
    answer: "O acesso é 100% online e imediato após a confirmação do pagamento. Você pode assistir as aulas quantas vezes quiser, no seu ritmo, de qualquer dispositivo."
  },
  {
    question: "Preciso estar presente nos treinamentos ou posso passar para minha CRC?",
    answer: "Você decide! Pode assistir junto com sua CRC, passar diretamente para ela, ou assistir primeiro e depois repassar. O conteúdo foi pensado para ser facilmente aplicável."
  }
];

const FAQSection = () => {
  // data-section attribute for chatbot trigger
  return (
    <section data-section="faq" className="py-12 md:py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full mb-4 md:mb-6">
            <HelpCircle className="w-3.5 h-3.5" />
            <span className="text-xs md:text-sm font-semibold">DÚVIDAS FREQUENTES</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-3 md:mb-4 leading-tight">
            Perguntas
            <span className="text-gradient block mt-1 md:mt-2">Frequentes</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-2 md:space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="card-glow rounded-xl px-4 md:px-6 border-none"
            >
              <AccordionTrigger className="text-left font-semibold text-xs sm:text-sm md:text-base hover:no-underline py-4 md:py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70 text-xs sm:text-sm md:text-base pb-4 md:pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-8 md:mt-12 px-2">
          <p className="text-foreground/60 mb-3 md:mb-4 text-sm">Ainda tem dúvidas?</p>
          <Button 
            size="lg" 
            className="w-full sm:w-auto bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 text-white font-bold text-sm md:text-base px-6 md:px-8 py-5 md:py-6 rounded-xl shadow-xl transition-all hover:scale-[1.02]"
            onClick={() => {
              const url = getHotmartUrlWithParams("https://pay.hotmart.com/A102890720L");
              window.location.href = url;
            }}
          >
            QUERO COMEÇAR AGORA →
          </Button>
          <p className="text-xs text-foreground/50 mt-2 md:mt-3">Garantia de 30 dias ou seu dinheiro de volta</p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
