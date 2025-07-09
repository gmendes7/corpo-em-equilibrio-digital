
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-sm shadow-lg border-b border-border py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex justify-between items-center px-6 md:px-12">
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <h1 className="text-2xl md:text-3xl font-playfair font-semibold text-verde-folha group-hover:text-verde-escuro transition-colors duration-300">
            CORPO EM <span className="font-bold">EQUILÍBRIO</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <button onClick={() => scrollToSection('home')} className="nav-link font-playfair">
            Início
          </button>
          <button onClick={() => scrollToSection('about')} className="nav-link font-playfair">
            Sobre
          </button>
          <button onClick={() => scrollToSection('specialties')} className="nav-link font-playfair">
            Especialidades
          </button>
          <button onClick={() => scrollToSection('blog')} className="nav-link font-playfair">
            Blog
          </button>
          <button onClick={() => scrollToSection('contact')} className="nav-link font-playfair">
            Contato
          </button>
          <a 
            href="https://www.instagram.com/drapatriciapolvora" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-verde-musgo transition-colors duration-300"
            aria-label="Instagram da Dra. Patrícia Pólvora"
          >
            <Instagram size={22} />
          </a>
        </nav>

        {/* Book Appointment Button */}
        <button 
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="hidden lg:block btn-primary"
        >
          Agende sua Consulta
        </button>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button 
            className="text-foreground focus:outline-none p-2 rounded-lg hover:bg-muted/20 transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Abrir menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-sm shadow-lg border-b border-border absolute top-full left-0 w-full py-4 px-6 animate-fade-in">
          <nav className="flex flex-col gap-4">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-left py-2 text-foreground font-medium font-playfair hover:text-verde-musgo transition-colors duration-300"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-left py-2 text-foreground font-medium font-playfair hover:text-verde-musgo transition-colors duration-300"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('specialties')} 
              className="text-left py-2 text-foreground font-medium font-playfair hover:text-verde-musgo transition-colors duration-300"
            >
              Especialidades
            </button>
            <button 
              onClick={() => scrollToSection('blog')} 
              className="text-left py-2 text-foreground font-medium font-playfair hover:text-verde-musgo transition-colors duration-300"
            >
              Blog
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-left py-2 text-foreground font-medium font-playfair hover:text-verde-musgo transition-colors duration-300"
            >
              Contato
            </button>
            <div className="flex justify-between items-center py-2 border-t border-border mt-2 pt-4">
              <a 
                href="https://www.instagram.com/drapatriciapolvora" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-verde-musgo transition-colors duration-300"
                aria-label="Instagram da Dra. Patrícia Pólvora"
              >
                <Instagram size={20} />
                <span>@drapatriciapolvora</span>
              </a>
            </div>
            <button 
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                setIsMobileMenuOpen(false);
              }} 
              className="btn-primary mt-2"
            >
              Agende sua Consulta
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
