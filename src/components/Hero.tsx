
import { useState, useEffect } from 'react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showUpdatePanel, setShowUpdatePanel] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    // Show update panel on load
    setShowUpdatePanel(true);
    
    // Hide update panel after 7 seconds
    const timer = setTimeout(() => {
      setShowUpdatePanel(false);
    }, 7000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen relative overflow-hidden pt-28 pb-16 bg-gradient-to-b from-verde-claro/30 to-branco-areia">      
      {/* Update Panel - Fixed position notification */}
      {showUpdatePanel && (
        <div className="fixed top-20 right-4 z-50 bg-white shadow-lg rounded-lg p-4 max-w-xs animate-fade-in">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-verde-musgo">Atualização do Site</h3>
            <button 
              onClick={() => setShowUpdatePanel(false)}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Fechar"
            >
              ×
            </button>
          </div>
          <p className="text-sm text-gray-600">
            Nosso site está sendo constantemente atualizado para melhorar sua experiência.
            Confira nossas novas funcionalidades!
          </p>
        </div>
      )}
      
      <div className="container-custom px-6 md:px-12 flex flex-col lg:flex-row items-center">
        {/* Text content */}
        <div className={`w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0 ${isLoaded ? 'staggered-fade-in' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-800 leading-tight font-playfair">
            Seu corpo em harmonia, <br/>
            <span className="text-verde-musgo">sua saúde em primeiro lugar</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0 font-lato">
            Tratamentos personalizados com foco em saúde integrativa, unindo o melhor da medicina tradicional com abordagens naturais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} 
              className="btn-secondary"
            >
              Conheça a Dra. Patrícia
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} 
              className="btn-primary"
            >
              Agende Agora
            </button>
          </div>
        </div>
        
        {/* Image */}
        <div className={`w-full lg:w-1/2 flex justify-center ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
          <div className="relative">
            <div className="absolute -top-12 -left-12 w-40 h-40 bg-verde-claro rounded-full opacity-60"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-verde-musgo rounded-full opacity-20"></div>
            <img 
              src="/doctor.png" 
              alt="Dra. Patrícia Pólvora" 
              className="w-4/5 md:w-auto max-h-[500px] object-cover rounded-lg relative z-10 shadow-xl"
            />
          </div>
        </div>
      </div>
      
      {/* Highlight cards with improved spacing */}
      <div className="container-custom px-6 md:px-12 mt-16 lg:mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 staggered-fade-in">
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-verde-musgo">
            <h3 className="text-xl font-semibold mb-3 text-gray-800 font-playfair">Atendimento personalizado</h3>
            <p className="text-gray-600 font-lato">
              Cada paciente é único. Por isso, desenvolvemos um plano de cuidados adaptado às suas necessidades específicas.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-verde-musgo">
            <h3 className="text-xl font-semibold mb-3 text-gray-800 font-playfair">Foco em saúde da mulher</h3>
            <p className="text-gray-600 font-lato">
              Cuidados específicos para cada fase da vida feminina, com atenção especial à menopausa e mudanças hormonais.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-verde-musgo">
            <h3 className="text-xl font-semibold mb-3 text-gray-800 font-playfair">Tratamentos naturais e genéticos</h3>
            <p className="text-gray-600 font-lato">
              Combinamos a medicina moderna e análise genética com abordagens naturais para resultados duradouros.
            </p>
          </div>
        </div>
      </div>
      
      {/* Call to action with green text */}
      <div className="container-custom px-6 md:px-12 mt-16 text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 font-playfair">
          Pronto para dar o primeiro passo rumo à saúde equilibrada?
        </h3>
        <p className="text-verde-musgo text-lg mb-8 max-w-2xl mx-auto font-lato">
          Agende uma consulta hoje mesmo e descubra como podemos ajudar você a alcançar o seu melhor estado de saúde através de abordagens integrativas e personalizadas.
        </p>
        <button 
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="btn-primary"
        >
          Entrar em Contato
        </button>
      </div>
    </section>
  );
};

export default Hero;
