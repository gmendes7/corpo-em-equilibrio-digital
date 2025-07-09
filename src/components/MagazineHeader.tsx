import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, User, MessageCircle, ShoppingCart, Menu, X } from 'lucide-react';

const MagazineHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implementar busca
    console.log('Busca:', searchQuery);
  };

  return (
    <header className="bg-white shadow-sm border-b border-border sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-primary text-white py-2 px-4 text-center text-sm">
        <span className="font-medium">🎯 7% de desconto no PIX • Até 6x sem juros • Frete grátis acima de R$ 200</span>
      </div>

      {/* Main header */}
      <div className="container-custom py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <h1 className="text-2xl md:text-3xl font-playfair font-bold text-primary group-hover:text-primary/80 transition-colors">
              CORPO EM <span className="text-foreground">EQUILÍBRIO</span>
            </h1>
          </Link>

          {/* Search bar - Desktop */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="O que você procura?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-12 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground bg-white"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>
          </form>

          {/* Quick links */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="/meus-pedidos" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors text-sm">
              <ShoppingCart className="w-4 h-4" />
              Meus Pedidos
            </Link>
            <Link to="/contato" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors text-sm">
              <MessageCircle className="w-4 h-4" />
              Fale Conosco
            </Link>
            <Link to="/login" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors text-sm">
              <User className="w-4 h-4" />
              Entrar
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile search */}
        <form onSubmit={handleSearch} className="md:hidden mt-4">
          <div className="relative">
            <input
              type="text"
              placeholder="O que você procura?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-12 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground bg-white"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>

      {/* Navigation menu */}
      <nav className="bg-secondary/10 border-t border-border">
        <div className="container-custom">
          <div className="hidden lg:flex items-center justify-center gap-8 py-3">
            <Link to="/especialidades" className="text-foreground hover:text-primary transition-colors font-medium text-sm">
              Especialidades
            </Link>
            <Link to="/consultas" className="text-foreground hover:text-primary transition-colors font-medium text-sm">
              Consultas
            </Link>
            <Link to="/exames" className="text-foreground hover:text-primary transition-colors font-medium text-sm">
              Exames
            </Link>
            <Link to="/estetica" className="text-foreground hover:text-primary transition-colors font-medium text-sm">
              Estética
            </Link>
            <Link to="/nutricao" className="text-foreground hover:text-primary transition-colors font-medium text-sm">
              Nutrição
            </Link>
            <Link to="/psicologia" className="text-foreground hover:text-primary transition-colors font-medium text-sm">
              Psicologia
            </Link>
            <Link to="/blog" className="text-foreground hover:text-primary transition-colors font-medium text-sm">
              Blog
            </Link>
            <Link to="/contato" className="text-foreground hover:text-primary transition-colors font-medium text-sm">
              Contato
            </Link>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 space-y-2">
              <Link to="/especialidades" className="block py-2 text-foreground hover:text-primary transition-colors">
                Especialidades
              </Link>
              <Link to="/consultas" className="block py-2 text-foreground hover:text-primary transition-colors">
                Consultas
              </Link>
              <Link to="/exames" className="block py-2 text-foreground hover:text-primary transition-colors">
                Exames
              </Link>
              <Link to="/estetica" className="block py-2 text-foreground hover:text-primary transition-colors">
                Estética
              </Link>
              <Link to="/nutricao" className="block py-2 text-foreground hover:text-primary transition-colors">
                Nutrição
              </Link>
              <Link to="/psicologia" className="block py-2 text-foreground hover:text-primary transition-colors">
                Psicologia
              </Link>
              <Link to="/blog" className="block py-2 text-foreground hover:text-primary transition-colors">
                Blog
              </Link>
              <Link to="/contato" className="block py-2 text-foreground hover:text-primary transition-colors">
                Contato
              </Link>
              <div className="border-t border-border pt-4 mt-4 space-y-2">
                <Link to="/meus-pedidos" className="block py-2 text-foreground hover:text-primary transition-colors">
                  Meus Pedidos
                </Link>
                <Link to="/contato" className="block py-2 text-foreground hover:text-primary transition-colors">
                  Fale Conosco
                </Link>
                <Link to="/login" className="block py-2 text-foreground hover:text-primary transition-colors">
                  Entrar
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default MagazineHeader;