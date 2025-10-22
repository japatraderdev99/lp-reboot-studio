import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import LazyVideo from "@/components/LazyVideo";

const TestimonialsSection = () => {
  const testimonials = [
    {
      embedCode: `<script type="text/javascript"> var s=document.createElement("script"); s.src="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js", s.async=!0,document.head.appendChild(s); </script> <div id="ifr_68f7e3478ea58bfe7173c5b5_wrapper" style="margin: 0 auto; width: 100%; max-width: 320px;"> <div style="position: relative; padding: 177.77777777777777% 0 0 0;" id="ifr_68f7e3478ea58bfe7173c5b5_aspect"> <iframe frameborder="0" allowfullscreen src="about:blank" id="ifr_68f7e3478ea58bfe7173c5b5" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 1rem;" referrerpolicy="origin" onload=" this.onload=null, this.src='https://scripts.converteai.net/de1f52b9-182e-4159-9b25-8c5e55b7fd12/players/68f7e3478ea58bfe7173c5b5/v4/embed.html' +(location.search||'?') +'&vl=' +encodeURIComponent(location.href)"></iframe> </div> </div>`,
      isVertical: true
    },
    {
      embedCode: `<script type="text/javascript"> var s=document.createElement("script"); s.src="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js", s.async=!0,document.head.appendChild(s); </script> <div id="ifr_68f7dee38ea58bfe7173c072_wrapper" style="margin: 0 auto; width: 100%; max-width: 320px;"> <div style="position: relative; padding: 177.77777777777777% 0 0 0;" id="ifr_68f7dee38ea58bfe7173c072_aspect"> <iframe frameborder="0" allowfullscreen src="about:blank" id="ifr_68f7dee38ea58bfe7173c072" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 1rem;" referrerpolicy="origin" onload=" this.onload=null, this.src='https://scripts.converteai.net/de1f52b9-182e-4159-9b25-8c5e55b7fd12/players/68f7dee38ea58bfe7173c072/v4/embed.html' +(location.search||'?') +'&vl=' +encodeURIComponent(location.href)"></iframe> </div> </div>`,
      isVertical: true
    },
    {
      embedCode: `<script type="text/javascript"> var s=document.createElement("script"); s.src="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js", s.async=!0,document.head.appendChild(s); </script> <div id="ifr_68f7d9cbc9a120c812a9e6a7_wrapper" style="margin: 0 auto; width: 100%; max-width: 320px;"> <div style="position: relative; padding: 177.77777777777777% 0 0 0;" id="ifr_68f7d9cbc9a120c812a9e6a7_aspect"> <iframe frameborder="0" allowfullscreen src="about:blank" id="ifr_68f7d9cbc9a120c812a9e6a7" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 1rem;" referrerpolicy="origin" onload=" this.onload=null, this.src='https://scripts.converteai.net/de1f52b9-182e-4159-9b25-8c5e55b7fd12/players/68f7d9cbc9a120c812a9e6a7/v4/embed.html' +(location.search||'?') +'&vl=' +encodeURIComponent(location.href)"></iframe> </div> </div>`,
      isVertical: true
    },
    {
      embedCode: `<script type="text/javascript"> var s=document.createElement("script"); s.src="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js", s.async=!0,document.head.appendChild(s); </script> <div id="ifr_68f7d9ef21b0a6afaf4cc36c_wrapper" style="margin: 0 auto; width: 100%; max-width: 320px;"> <div style="position: relative; padding: 177.77777777777777% 0 0 0;" id="ifr_68f7d9ef21b0a6afaf4cc36c_aspect"> <iframe frameborder="0" allowfullscreen src="about:blank" id="ifr_68f7d9ef21b0a6afaf4cc36c" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 1rem;" referrerpolicy="origin" onload=" this.onload=null, this.src='https://scripts.converteai.net/de1f52b9-182e-4159-9b25-8c5e55b7fd12/players/68f7d9ef21b0a6afaf4cc36c/v4/embed.html' +(location.search||'?') +'&vl=' +encodeURIComponent(location.href)"></iframe> </div> </div>`,
      isVertical: true
    },
    {
      embedCode: `<script type="text/javascript"> var s=document.createElement("script"); s.src="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js", s.async=!0,document.head.appendChild(s); </script> <div id="ifr_68f7df118ea58bfe7173c0b0_wrapper" style="margin: 0 auto; width: 100%; max-width: 320px;"> <div style="position: relative; padding: 177.77777777777777% 0 0 0;" id="ifr_68f7df118ea58bfe7173c0b0_aspect"> <iframe frameborder="0" allowfullscreen src="about:blank" id="ifr_68f7df118ea58bfe7173c0b0" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 1rem;" referrerpolicy="origin" onload=" this.onload=null, this.src='https://scripts.converteai.net/de1f52b9-182e-4159-9b25-8c5e55b7fd12/players/68f7df118ea58bfe7173c0b0/v4/embed.html' +(location.search||'?') +'&vl=' +encodeURIComponent(location.href)"></iframe> </div> </div>`,
      isVertical: true
    }
  ];

  return (
    <section className="py-12 md:py-20 px-4 md:px-6 bg-luxury-dark/30">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-center mb-3 md:mb-4 leading-tight px-2">
          Não é Sobre Nós.
          <span className="text-gradient block mt-2">É Sobre Quem Confia em Nós.</span>
        </h2>
        <p className="text-center text-foreground/70 mb-12 md:mb-16 max-w-3xl mx-auto text-base md:text-lg px-4">
          Veja o que os donos de clínicas que já transformaram seus resultados têm a dizer
        </p>

        {/* Video Testimonials Carousel */}
        <div className="max-w-6xl mx-auto mb-8 md:mb-12">
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem 
                  key={index} 
                  className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="h-full flex items-center justify-center">
                    <LazyVideo 
                      embedCode={testimonial.embedCode}
                      className="w-full max-w-[280px] sm:max-w-[320px] mx-auto"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 md:-left-12" />
            <CarouselNext className="right-0 md:-right-12" />
          </Carousel>
        </div>

        {/* CTA */}
        <div className="text-center px-4">
          <Button 
            size="lg" 
            className="text-sm sm:text-base md:text-lg px-6 md:px-8 py-6 md:py-6 h-auto w-full sm:w-auto whitespace-normal leading-tight"
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
