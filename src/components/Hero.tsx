
import { useState, useEffect } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { logError } from '../utils/errorLogger';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      setIsLoaded(true);
    } catch (error) {
      logError('error', 'Error in Hero component initialization', error);
    }
  }, []);

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-azul-escuro via-background to-azul-escuro/90 overflow-hidden">
      {/* Geometric background patterns */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-verde-musgo/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-azul-escuro/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-verde-musgo/5 to-transparent rounded-full"></div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-verde-musgo/30 rounded-full plant-float"></div>
        <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-azul-escuro/30 rounded-full plant-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-cinza-texto/30 rounded-full plant-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative z-10 container-custom px-6 md:px-12 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-12rem)]">
          {/* Content Column */}
          <div className={`space-y-8 ${isLoaded ? 'staggered-fade-in' : 'opacity-0'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-verde-musgo/10 border border-verde-musgo/20 rounded-full px-4 py-2 text-sm font-medium text-verde-musgo backdrop-blur-sm">
              <div className="w-2 h-2 bg-verde-musgo rounded-full animate-pulse"></div>
              Medicina Integrativa Personalizada
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight font-playfair">
                Seu corpo em 
                <span className="block text-transparent bg-gradient-to-r from-verde-musgo to-verde-musgo/80 bg-clip-text">
                  perfeita harmonia
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-cinza-texto font-light leading-relaxed max-w-2xl font-lato">
                Tratamentos personalizados que combinam o melhor da medicina tradicional com abordagens naturais inovadoras.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} 
                className="group inline-flex items-center justify-center gap-3 btn-primary"
              >
                Agende sua Consulta
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} 
                className="group inline-flex items-center justify-center gap-3 btn-secondary"
              >
                <Play size={18} className="text-white" />
                Conheça a Dra. Patrícia
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-verde-musgo font-playfair">500+</div>
                <div className="text-sm text-cinza-texto font-medium font-lato">Pacientes atendidos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-verde-musgo font-playfair">15+</div>
                <div className="text-sm text-cinza-texto font-medium font-lato">Anos de experiência</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-verde-musgo font-playfair">98%</div>
                <div className="text-sm text-cinza-texto font-medium font-lato">Satisfação</div>
              </div>
            </div>
          </div>
          
          {/* Image Column */}
          <div className={`relative ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-tr from-verde-musgo/20 to-azul-escuro/20 rounded-3xl blur-3xl transform rotate-6"></div>
              
              {/* Main image container */}
              <div className="relative bg-gradient-to-br from-card to-card/80 rounded-3xl p-8 shadow-2xl border border-borda-suave">
                <img 
                  src="/doctor.png" 
                  alt="Dra. Patrícia Pólvora" 
                  className="w-full h-auto rounded-2xl shadow-xl"
                />
                
                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 bg-card rounded-2xl p-4 shadow-xl border border-borda-suave">
                  <div className="text-center">
                    <div className="text-azul-escuro font-bold text-lg">CRM</div>
                    <div className="text-cinza-texto text-sm font-medium">Ativo</div>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-verde-musgo rounded-2xl p-4 shadow-xl">
                  <div className="text-center">
                    <div className="text-white font-bold text-lg">★ 5.0</div>
                    <div className="text-white/80 text-sm font-medium">Avaliação</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cinza-texto animate-bounce">
        <div className="w-6 h-10 border-2 border-border rounded-full flex justify-center">
          <div className="w-1 h-3 bg-verde-musgo rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
