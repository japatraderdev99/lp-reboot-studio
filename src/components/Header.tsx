import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-2xl font-bold text-white">F5</span>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#metodologia" className="text-foreground hover:text-primary transition-colors">
            A Metodologia
          </a>
          <a href="#resultados" className="text-foreground hover:text-primary transition-colors">
            Resultados
          </a>
          <a href="#diferenciais" className="text-foreground hover:text-primary transition-colors">
            Diferenciais
          </a>
          <a href="#contato" className="text-foreground hover:text-primary transition-colors">
            Contato
          </a>
        </nav>

        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
          AGENDAR CONSULTORIA
        </Button>
      </div>
    </header>
  );
};

export default Header;
