import { Button } from "@/components/ui/button";
import f5Logo from "@/assets/f5-logo.png";
import { getHotmartUrlWithParams } from "@/lib/utm-tracker";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-white/[0.06]">
      <div className="absolute inset-0 bg-background/80" />
      <div className="container mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-2 md:gap-3">
          <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center">
            <img 
              src={f5Logo} 
              alt="f5 estratégia" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#metodologia" className="text-xs font-medium text-foreground/70 hover:text-primary transition-all duration-300 relative group">
            A Metodologia
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="#resultados" className="text-xs font-medium text-foreground/70 hover:text-primary transition-all duration-300 relative group">
            Resultados
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="#diferenciais" className="text-xs font-medium text-foreground/70 hover:text-primary transition-all duration-300 relative group">
            Diferenciais
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="#contato" className="text-xs font-medium text-foreground/70 hover:text-primary transition-all duration-300 relative group">
            Contato
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
          </a>
        </nav>

        <Button 
          size="lg" 
          className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 text-white font-semibold text-sm px-6 py-5 shadow-lg hover:shadow-orange transition-all duration-300 hover:scale-[1.02] min-w-[200px] min-h-[44px]"
          onClick={() => {
            const url = getHotmartUrlWithParams("https://pay.hotmart.com/A102890720L");
            window.location.href = url;
          }}
        >
          QUERO COMEÇAR AGORA
        </Button>
      </div>
    </header>
  );
};

export default Header;
