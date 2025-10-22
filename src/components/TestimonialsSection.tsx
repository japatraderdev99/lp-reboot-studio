import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useEffect } from "react";

const TestimonialsSection = () => {
  useEffect(() => {
    // Load vturb SDK script
    const script = document.createElement("script");
    script.src = "https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const testimonials = [
    {
      id: "68f7e3478ea58bfe7173c5b5",
      isVertical: true
    },
    {
      id: "68f7dee38ea58bfe7173c072",
      isVertical: true
    },
    {
      id: "68f7d9cbc9a120c812a9e6a7",
      isVertical: true
    },
    {
      id: "68f7d9ef21b0a6afaf4cc36c",
      isVertical: true
    },
    {
      id: "68f7df118ea58bfe7173c0b0",
      isVertical: true
    },
    {
      id: "68f7ebffa1ac75e611ca004b",
      isVertical: false
    }
  ];

  return (
    <section className="py-20 px-6 bg-luxury-dark/30">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-6xl font-black text-center mb-4 leading-tight">
          Não é Sobre Nós.
          <span className="text-gradient block mt-2">É Sobre Quem Confia em Nós.</span>
        </h2>
        <p className="text-center text-foreground/70 mb-16 max-w-3xl mx-auto text-lg">
          Veja o que os donos de clínicas que já transformaram seus resultados têm a dizer
        </p>

        {/* Video Testimonials Carousel */}
        <div className="max-w-6xl mx-auto mb-12">
          <Carousel className="w-full">
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <div 
                      id={`ifr_${testimonial.id}_wrapper`} 
                      style={{ 
                        margin: '0 auto', 
                        width: '100%', 
                        maxWidth: testimonial.isVertical ? '320px' : '100%'
                      }}
                    >
                      <div 
                        style={{ 
                          position: 'relative', 
                          padding: testimonial.isVertical ? '177.77777777777777% 0 0 0' : '56.25% 0 0 0'
                        }} 
                        id={`ifr_${testimonial.id}_aspect`}
                      >
                        <iframe 
                          frameBorder="0" 
                          allowFullScreen 
                          src="about:blank" 
                          id={`ifr_${testimonial.id}`} 
                          style={{ 
                            position: 'absolute', 
                            top: 0, 
                            left: 0, 
                            width: '100%', 
                            height: '100%',
                            borderRadius: '1rem'
                          }} 
                          referrerPolicy="origin" 
                          onLoad={(e) => {
                            const iframe = e.target as HTMLIFrameElement;
                            if (iframe.src === 'about:blank') {
                              iframe.src = `https://scripts.converteai.net/de1f52b9-182e-4159-9b25-8c5e55b7fd12/players/${testimonial.id}/v4/embed.html${location.search || '?'}&vl=${encodeURIComponent(location.href)}`;
                            }
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
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

export default TestimonialsSection;
