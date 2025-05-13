
import { Instagram, Mail, MessageCircle, Leaf } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-10 right-10 w-24 h-24 opacity-20 leaf-animation">
        <img src="/leaf1.png" alt="" className="w-full" />
      </div>
      
      <div className="absolute bottom-40 left-10 w-20 h-20 opacity-20 leaf-animation" style={{ animationDelay: '3s' }}>
        <img src="/leaf2.png" alt="" className="w-full" />
      </div>
      
      <div className="container-custom">
        {/* Top section with columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand column */}
          <div>
            <h2 className="text-xl md:text-2xl font-montserrat font-semibold text-brand-green mb-4">
              CORPO EM <span className="font-bold">EQUILÍBRIO</span>
            </h2>
            <p className="text-gray-600 mb-6">
              Medicina integrativa personalizada para o seu bem-estar e saúde duradoura.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/drapatriciapolvora"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-brand-green-light rounded-full flex items-center justify-center text-brand-green hover:bg-brand-green hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:contato@corpoemequilibrio.com"
                className="w-10 h-10 bg-brand-green-light rounded-full flex items-center justify-center text-brand-green hover:bg-brand-green hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://wa.me/5567999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-brand-green-light rounded-full flex items-center justify-center text-brand-green hover:bg-brand-green hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Links column 1 */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-600 hover:text-brand-green transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-600 hover:text-brand-green transition-colors"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('specialties')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-600 hover:text-brand-green transition-colors"
                >
                  Especialidades
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-600 hover:text-brand-green transition-colors"
                >
                  Blog
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-600 hover:text-brand-green transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Links column 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Especialidades</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-brand-green transition-colors">
                  Diabetes
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-brand-green transition-colors">
                  Emagrecimento
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-brand-green transition-colors">
                  Menopausa
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-brand-green transition-colors">
                  Genética
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-brand-green transition-colors">
                  Saúde da Mulher
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Boletim Informativo</h3>
            <p className="text-gray-600 mb-4">
              Receba dicas de saúde e bem-estar diretamente no seu e-mail.
            </p>
            <form className="space-y-3">
              <div>
                <input 
                  type="email" 
                  placeholder="Seu e-mail" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all"
                />
              </div>
              <button type="submit" className="w-full btn-primary">
                Assinar
              </button>
            </form>
          </div>
        </div>

        {/* Bottom section with copyright */}
        <div className="border-t border-gray-200 pt-8">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} CORPO EM EQUILÍBRIO - Dra. Patrícia Pólvora. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
