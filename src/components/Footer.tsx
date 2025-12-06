import f5Logo from "@/assets/f5-logo.png";

const Footer = () => {
  return (
    <footer id="contato" className="relative bg-background/50 border-t border-white/[0.06] py-16 px-6">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-40" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-12">
            <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mx-auto mb-6">
              <img 
                src={f5Logo} 
                alt="f5 estratégia" 
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-2">f5 estratégia</h3>
            <p className="text-foreground/50 font-light text-xs md:text-sm">Aceleradora Digital para Odontologia</p>
          </div>

          <div className="space-y-2 mb-12 text-foreground/50">
            <p className="flex items-center justify-center gap-2 text-sm">
              <span>📧</span>
              <a href="mailto:contato@f5estrategia.com.br" className="hover:text-primary transition-colors duration-300">
                contato@f5estrategia.com.br
              </a>
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <a href="#" className="text-xs text-foreground/50 hover:text-primary transition-all duration-300 relative group">
              Política de Privacidade
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#" className="text-xs text-foreground/50 hover:text-primary transition-all duration-300 relative group">
              Termos de Uso
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#" className="text-xs text-foreground/50 hover:text-primary transition-all duration-300 relative group">
              Perguntas Frequentes
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          </div>

          <div className="pt-8 border-t border-white/[0.06] text-xs text-foreground/40 space-y-1.5">
            <p>© 2025 f5 estratégia. Todos os direitos reservados.</p>
            <p className="hidden sm:block">CNPJ: XX.XXX.XXX/XXXX-XX</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
