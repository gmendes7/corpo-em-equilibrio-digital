
import { useState, useEffect } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { logError } from '../utils/errorLogger';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showUpdatePanel, setShowUpdatePanel] = useState(false);

  useEffect(() => {
    try {
      setIsLoaded(true);
      
      // Show update panel on load
      setShowUpdatePanel(true);
      
      // Hide update panel after 7 seconds
      const timer = setTimeout(() => {
        setShowUpdatePanel(false);
      }, 7000);
      
      return () => clearTimeout(timer);
    } catch (error) {
      logError('error', 'Error in Hero component initialization', error);
    }
  }, []);

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Geometric background patterns */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-verde-musgo/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-verde-claro/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-verde-musgo/5 to-transparent rounded-full"></div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-verde-claro/30 rounded-full animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-verde-musgo/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-slate-400/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Update Panel */}
      {showUpdatePanel && (
        <div className="fixed top-24 right-6 z-50 bg-white/95 backdrop-blur-sm shadow-2xl rounded-2xl p-6 max-w-sm animate-slide-in-right border border-verde-claro/20">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-verde-musgo rounded-full animate-pulse"></div>
              <h3 className="font-semibold text-slate-800 text-sm">Sistema Atualizado</h3>
            </div>
            <button 
              onClick={() => setShowUpdatePanel(false)}
              className="text-slate-400 hover:text-slate-600 transition-colors text-lg leading-none"
              aria-label="Fechar"
            >
              ×
            </button>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            Design completamente reformulado com melhorias em UX/UI, tipografia e responsividade.
          </p>
          <div className="mt-3 text-xs text-verde-musgo font-medium">
            ✨ Layout profissional ativo
          </div>
        </div>
      )}
      
      <div className="relative z-10 container-custom px-6 md:px-12 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-12rem)]">
          {/* Content Column */}
          <div className={`space-y-8 ${isLoaded ? 'staggered-fade-in' : 'opacity-0'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-verde-musgo/10 border border-verde-musgo/20 rounded-full px-4 py-2 text-sm font-medium text-verde-claro backdrop-blur-sm">
              <div className="w-2 h-2 bg-verde-musgo rounded-full animate-pulse"></div>
              Medicina Integrativa Personalizada
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-50 leading-tight">
                Seu corpo em 
                <span className="block text-transparent bg-gradient-to-r from-verde-claro to-verde-musgo bg-clip-text">
                  perfeita harmonia
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed max-w-2xl">
                Tratamentos personalizados que combinam o melhor da medicina tradicional com abordagens naturais inovadoras.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} 
                className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-verde-musgo to-verde-musgo/90 hover:from-verde-musgo/90 hover:to-verde-musgo text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-verde-musgo/25 transform hover:-translate-y-1"
              >
                Agende sua Consulta
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} 
                className="group inline-flex items-center justify-center gap-3 bg-slate-800/50 backdrop-blur-sm border border-slate-600 hover:bg-slate-700/50 text-slate-100 font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:border-verde-claro/50"
              >
                <Play size={18} className="text-verde-claro" />
                Conheça a Dra. Patrícia
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-700/50">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-verde-claro">500+</div>
                <div className="text-sm text-slate-400 font-medium">Pacientes atendidos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-verde-claro">15+</div>
                <div className="text-sm text-slate-400 font-medium">Anos de experiência</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-verde-claro">98%</div>
                <div className="text-sm text-slate-400 font-medium">Satisfação</div>
              </div>
            </div>
          </div>
          
          {/* Image Column */}
          <div className={`relative ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-tr from-verde-musgo/20 to-verde-claro/20 rounded-3xl blur-3xl transform rotate-6"></div>
              
              {/* Main image container */}
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 shadow-2xl border border-slate-700/50">
                <img 
                  src="/doctor.png" 
                  alt="Dra. Patrícia Pólvora" 
                  className="w-full h-auto rounded-2xl shadow-xl"
                />
                
                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-slate-200">
                  <div className="text-center">
                    <div className="text-verde-musgo font-bold text-lg">CRM</div>
                    <div className="text-slate-600 text-sm font-medium">Ativo</div>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-verde-musgo rounded-2xl p-4 shadow-xl">
                  <div className="text-center">
                    <div className="text-white font-bold text-lg">★ 5.0</div>
                    <div className="text-verde-claro text-sm font-medium">Avaliação</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-400 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-verde-claro rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
