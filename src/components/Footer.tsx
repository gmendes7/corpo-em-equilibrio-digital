
import { Instagram, Mail, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-verde-claro/30 to-white pt-16 pb-8 relative overflow-hidden">
      <div className="container-custom">
        {/* Top section with columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand column */}
          <div>
            <h2 className="text-xl md:text-2xl font-playfair font-semibold text-verde-musgo mb-4">
              CORPO EM <span className="font-bold">EQUILÍBRIO</span>
            </h2>
            <p className="text-gray-600 mb-6 font-lato">
              Medicina integrativa personalizada para o seu bem-estar e saúde duradoura.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/drapatriciapolvora"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-verde-claro rounded-full flex items-center justify-center text-verde-musgo hover:bg-verde-musgo hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:contato@corpoemequilibrio.com"
                className="w-10 h-10 bg-verde-claro rounded-full flex items-center justify-center text-verde-musgo hover:bg-verde-musgo hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://wa.me/5567999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-verde-claro rounded-full flex items-center justify-center text-verde-musgo hover:bg-verde-musgo hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Links column 1 */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 font-playfair">Navegação</h3>
            <ul className="space-y-2 font-lato">
              <li>
                <button 
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-600 hover:text-verde-musgo transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-600 hover:text-verde-musgo transition-colors"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('specialties')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-600 hover:text-verde-musgo transition-colors"
                >
                  Especialidades
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-600 hover:text-verde-musgo transition-colors"
                >
                  Blog
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-600 hover:text-verde-musgo transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Links column 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 font-playfair">Especialidades</h3>
            <ul className="space-y-2 font-lato">
              <li>
                <button 
                  onClick={() => {
                    document.getElementById('specialties')?.scrollIntoView({ behavior: 'smooth' });
                    const diabetesTab = document.querySelector('[data-specialty="diabetes"]');
                    if (diabetesTab) {
                      (diabetesTab as HTMLButtonElement).click();
                    }
                  }} 
                  className="text-gray-600 hover:text-verde-musgo transition-colors"
                >
                  Diabetes
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    document.getElementById('specialties')?.scrollIntoView({ behavior: 'smooth' });
                    const weightTab = document.querySelector('[data-specialty="emagrecimento"]');
                    if (weightTab) {
                      (weightTab as HTMLButtonElement).click();
                    }
                  }}
                  className="text-gray-600 hover:text-verde-musgo transition-colors"
                >
                  Emagrecimento
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    document.getElementById('specialties')?.scrollIntoView({ behavior: 'smooth' });
                    const menopauseTab = document.querySelector('[data-specialty="menopausa"]');
                    if (menopauseTab) {
                      (menopauseTab as HTMLButtonElement).click();
                    }
                  }}
                  className="text-gray-600 hover:text-verde-musgo transition-colors"
                >
                  Menopausa
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    document.getElementById('specialties')?.scrollIntoView({ behavior: 'smooth' });
                    const geneticsTab = document.querySelector('[data-specialty="genetica"]');
                    if (geneticsTab) {
                      (geneticsTab as HTMLButtonElement).click();
                    }
                  }}
                  className="text-gray-600 hover:text-verde-musgo transition-colors"
                >
                  Genética
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    document.getElementById('specialties')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-600 hover:text-verde-musgo transition-colors"
                >
                  Saúde da Mulher
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 font-playfair">Boletim Informativo</h3>
            <p className="text-gray-600 mb-4 font-lato">
              Receba dicas de saúde e bem-estar diretamente no seu e-mail.
            </p>
            <form className="space-y-3">
              <div>
                <input 
                  type="email" 
                  placeholder="Seu e-mail" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-verde-musgo focus:border-transparent outline-none transition-all"
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
          <p className="text-center text-gray-600 font-lato">
            © {new Date().getFullYear()} CORPO EM EQUILÍBRIO - Dra. Patrícia Pólvora. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
