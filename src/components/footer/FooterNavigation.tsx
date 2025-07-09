
const FooterNavigation = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4 text-slate-50 font-playfair">Navegação</h3>
      <ul className="space-y-3 font-lato">
        <li>
          <button 
            onClick={() => scrollToSection('home')}
            className="text-slate-300 hover:text-primary transition-colors"
          >
            Início
          </button>
        </li>
        <li>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-slate-300 hover:text-primary transition-colors"
          >
            Sobre
          </button>
        </li>
        <li>
          <button 
            onClick={() => scrollToSection('specialties')}
            className="text-slate-300 hover:text-primary transition-colors"
          >
            Especialidades
          </button>
        </li>
        <li>
          <button 
            onClick={() => scrollToSection('blog')}
            className="text-slate-300 hover:text-primary transition-colors"
          >
            Blog
          </button>
        </li>
        <li>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-slate-300 hover:text-primary transition-colors"
          >
            Contato
          </button>
        </li>
      </ul>
    </div>
  );
};

export default FooterNavigation;
