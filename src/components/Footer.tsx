const Footer = () => {
  return (
    <footer className="relative bg-card border-t border-white/[0.08] py-16 px-6">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-50" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-12">
            <div className="relative w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/20">
              <span className="text-4xl font-black text-white">F5</span>
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl" />
            </div>
            <h3 className="text-2xl font-bold mb-3">F5 Estratégia</h3>
            <p className="text-foreground/60 font-light">Aceleradora Digital para Odontologia</p>
          </div>

          <div className="space-y-3 mb-12 text-foreground/60">
            <p className="flex items-center justify-center gap-2">
              <span>📧</span>
              <a href="mailto:contato@f5estrategia.com.br" className="hover:text-primary transition-colors duration-300">
                contato@f5estrategia.com.br
              </a>
            </p>
            <p className="flex items-center justify-center gap-2">
              <span>📱</span>
              <span>WhatsApp: (XX) XXXXX-XXXX</span>
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <a href="#" className="text-sm text-foreground/60 hover:text-primary transition-all duration-300 relative group">
              Política de Privacidade
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#" className="text-sm text-foreground/60 hover:text-primary transition-all duration-300 relative group">
              Termos de Uso
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#" className="text-sm text-foreground/60 hover:text-primary transition-all duration-300 relative group">
              Perguntas Frequentes
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          </div>

          <div className="pt-8 border-t border-white/[0.08] text-sm text-foreground/50 space-y-2">
            <p>© 2025 F5 Estratégia. Todos os direitos reservados.</p>
            <p>CNPJ: XX.XXX.XXX/XXXX-XX</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
