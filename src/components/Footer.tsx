
import { Instagram, Mail, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-slate-800/50 to-slate-900 pt-16 pb-8 relative overflow-hidden border-t border-slate-700">
      <div className="container-custom">
        {/* Top section with columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand column */}
          <div>
            <h2 className="text-xl md:text-2xl font-playfair font-semibold text-verde-claro mb-4">
              CORPO EM <span className="font-bold">EQUILÍBRIO</span>
            </h2>
            <p className="text-slate-300 mb-6 font-lato">
              Medicina integrativa personalizada para o seu bem-estar e saúde duradoura.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/drapatriciapolvora"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-verde-claro/20 rounded-full flex items-center justify-center text-verde-claro hover:bg-verde-musgo hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:contato@corpoemequilibrio.com"
                className="w-10 h-10 bg-verde-claro/20 rounded-full flex items-center justify-center text-verde-claro hover:bg-verde-musgo hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://wa.me/5567993417073"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-verde-claro/20 rounded-full flex items-center justify-center text-verde-claro hover:bg-verde-musgo hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Links column 1 */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-slate-50 font-playfair">Navegação</h3>
            <ul className="space-y-3 font-lato">
              <li>
                <button 
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-slate-300 hover:text-verde-claro transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-slate-300 hover:text-verde-claro transition-colors"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('specialties')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-slate-300 hover:text-verde-claro transition-colors"
                >
                  Especialidades
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-slate-300 hover:text-verde-claro transition-colors"
                >
                  Blog
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-slate-300 hover:text-verde-claro transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Links column 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-slate-50 font-playfair">Especialidades</h3>
            <ul className="space-y-3 font-lato">
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
            <h3 className="text-lg font-semibold mb-4 text-slate-50 font-playfair">Boletim Informativo</h3>
            <p className="text-slate-300 mb-4 font-lato">
              Receba dicas de saúde e bem-estar diretamente no seu e-mail.
            </p>
            <form className="space-y-3">
              <div>
                <input 
                  type="email" 
                  placeholder="Seu e-mail" 
                  className="w-full px-4 py-3 rounded-lg border border-slate-600 bg-slate-700 text-slate-100 focus:ring-2 focus:ring-verde-musgo focus:border-transparent outline-none transition-all"
                />
              </div>
              <button type="submit" className="w-full btn-primary">
                Assinar
              </button>
            </form>
          </div>
        </div>

        {/* Bottom section with copyright and developer credits */}
        <div className="border-t border-slate-700 pt-8">
          <p className="text-center text-slate-300 font-lato mb-2">
            © {new Date().getFullYear()} CORPO EM EQUILÍBRIO - Dra. Patrícia Pólvora. Todos os direitos reservados.
          </p>
          <p className="text-center text-slate-400 font-lato text-sm">
            Desenvolvido por <span className="text-verde-claro">@Gabrielmendes</span>, <span className="text-verde-claro">@Viniciushadid</span>, <span className="text-verde-claro">@pedroricaldes</span> e <span className="text-verde-claro">@schjneiderr</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
