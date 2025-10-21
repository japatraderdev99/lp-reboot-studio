import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-dark backdrop-blur-xl border-b border-white/[0.08]">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-2xl font-black text-white">F5</span>
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl" />
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-10">
          <a href="#metodologia" className="text-sm font-medium text-foreground/80 hover:text-primary transition-all duration-300 relative group">
            A Metodologia
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="#resultados" className="text-sm font-medium text-foreground/80 hover:text-primary transition-all duration-300 relative group">
            Resultados
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="#diferenciais" className="text-sm font-medium text-foreground/80 hover:text-primary transition-all duration-300 relative group">
            Diferenciais
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="#contato" className="text-sm font-medium text-foreground/80 hover:text-primary transition-all duration-300 relative group">
            Contato
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
          </a>
        </nav>

        <Button 
          size="lg" 
          className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 text-white font-semibold px-8 shadow-lg hover:shadow-orange transition-all duration-300 hover:scale-[1.02]"
        >
          QUERO COMEÇAR AGORA
        </Button>
      </div>
    </header>
  );
};

export default Header;
