import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const TestimonialsSection = () => {
  const testimonials = [
    {
      videoId: "video1",
      embedCode: `<div id="vid_67169ff7210d2e0009e76e73" style="position:relative;width:100%;padding: 177.77777777777777% 0 0;"><img id="thumb_67169ff7210d2e0009e76e73" src="https://images.converteai.net/de1f52b9-182e-4159-9b25-8c5e55b7fd12/players/67169ff7210d2e0009e76e73/thumbnail.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;display:block;"><div id="backdrop_67169ff7210d2e0009e76e73" style="position:absolute;top:0;width:100%;height:100%;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);"></div></div><script type="text/javascript" id="scr_67169ff7210d2e0009e76e73">var s=document.createElement("script");s.src="https://scripts.converteai.net/de1f52b9-182e-4159-9b25-8c5e55b7fd12/players/67169ff7210d2e0009e76e73/player.js",s.async=!0,document.head.appendChild(s);</script>`,
      name: "Cliente 1"
    },
    {
      videoId: "video2",
      embedCode: `<div id="vid_67169ff7210d2e0009e76e74" style="position:relative;width:100%;padding: 177.77777777777777% 0 0;"><img id="thumb_67169ff7210d2e0009e76e74" src="https://images.converteai.net/de1f52b9-182e-4159-9b25-8c5e55b7fd12/players/67169ff7210d2e0009e76e74/thumbnail.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;display:block;"><div id="backdrop_67169ff7210d2e0009e76e74" style="position:absolute;top:0;width:100%;height:100%;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);"></div></div><script type="text/javascript" id="scr_67169ff7210d2e0009e76e74">var s=document.createElement("script");s.src="https://scripts.converteai.net/de1f52b9-182e-4159-9b25-8c5e55b7fd12/players/67169ff7210d2e0009e76e74/player.js",s.async=!0,document.head.appendChild(s);</script>`,
      name: "Cliente 2"
    },
    {
      videoId: "video3",
      embedCode: `<div id="vid_67169ff7210d2e0009e76e75" style="position:relative;width:100%;padding: 177.77777777777777% 0 0;"><img id="thumb_67169ff7210d2e0009e76e75" src="https://images.converteai.net/de1f52b9-182e-4159-9b25-8c5e55b7fd12/players/67169ff7210d2e0009e76e75/thumbnail.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;display:block;"><div id="backdrop_67169ff7210d2e0009e76e75" style="position:absolute;top:0;width:100%;height:100%;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);"></div></div><script type="text/javascript" id="scr_67169ff7210d2e0009e76e75">var s=document.createElement("script");s.src="https://scripts.converteai.net/de1f52b9-182e-4159-9b25-8c5e55b7fd12/players/67169ff7210d2e0009e76e75/player.js",s.async=!0,document.head.appendChild(s);</script>`,
      name: "Cliente 3"
    },
    {
      videoId: "video4",
      embedCode: `<div id="vid_67169ff7210d2e0009e76e76" style="position:relative;width:100%;padding: 177.77777777777777% 0 0;"><img id="thumb_67169ff7210d2e0009e76e76" src="https://images.converteai.net/de1f52b9-182e-4159-9b25-8c5e55b7fd12/players/67169ff7210d2e0009e76e76/thumbnail.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;display:block;"><div id="backdrop_67169ff7210d2e0009e76e76" style="position:absolute;top:0;width:100%;height:100%;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);"></div></div><script type="text/javascript" id="scr_67169ff7210d2e0009e76e76">var s=document.createElement("script");s.src="https://scripts.converteai.net/de1f52b9-182e-4159-9b25-8c5e55b7fd12/players/67169ff7210d2e0009e76e76/player.js",s.async=!0,document.head.appendChild(s);</script>`,
      name: "Cliente 4"
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
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div 
                      className="rounded-2xl overflow-hidden card-glow"
                      dangerouslySetInnerHTML={{ __html: testimonial.embedCode }}
                    />
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
