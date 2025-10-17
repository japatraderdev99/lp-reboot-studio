const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12 px-4">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl font-bold text-white">F5</span>
            </div>
            <h3 className="text-xl font-bold mb-2">F5 Estratégia</h3>
            <p className="text-muted-foreground">Aceleradora Digital para Odontologia</p>
          </div>

          <div className="space-y-2 mb-8 text-muted-foreground">
            <p>📧 contato@f5estrategia.com.br</p>
            <p>📱 WhatsApp: (XX) XXXXX-XXXX</p>
          </div>

          <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Política de Privacidade
            </a>
            <span className="text-muted-foreground">|</span>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Termos de Uso
            </a>
            <span className="text-muted-foreground">|</span>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Perguntas Frequentes
            </a>
          </div>

          <div className="pt-8 border-t border-border text-sm text-muted-foreground">
            <p>© 2025 F5 Estratégia. Todos os direitos reservados.</p>
            <p className="mt-2">CNPJ: XX.XXX.XXX/XXXX-XX</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
