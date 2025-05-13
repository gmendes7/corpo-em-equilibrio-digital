
import { useState, useEffect } from 'react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="home" className="min-h-screen relative overflow-hidden pt-28 pb-16 bg-gradient-to-b from-brandGreen-light/50 to-white">
      {/* Decorative leaves */}
      <div className="absolute top-20 right-0 w-40 h-40 opacity-20 leaf-animation">
        <img src="/leaf1.png" alt="" className="w-full" />
      </div>
      
      <div className="absolute bottom-20 left-0 w-32 h-32 opacity-20 leaf-animation" style={{ animationDelay: '2s' }}>
        <img src="/leaf2.png" alt="" className="w-full" />
      </div>
      
      <div className="container-custom px-6 md:px-12 flex flex-col lg:flex-row items-center">
        {/* Text content */}
        <div className={`w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0 ${isLoaded ? 'staggered-fade-in' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-800 leading-tight">
            Seu corpo em harmonia, <br/>
            <span className="text-brandGreen-DEFAULT">sua saúde em primeiro lugar</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
            Tratamentos personalizados com foco em saúde integrativa, unindo o melhor da medicina tradicional com abordagens naturais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} 
              className="btn-secondary"
            >
              Conheça a Dra. Patrícia
            </button>
            <button className="btn-primary">
              Agende Agora
            </button>
          </div>
        </div>
        
        {/* Image */}
        <div className={`w-full lg:w-1/2 flex justify-center ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
          <div className="relative">
            <div className="absolute -top-12 -left-12 w-40 h-40 bg-brandGreen-light rounded-full opacity-60"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-brandGreen-DEFAULT rounded-full opacity-20"></div>
            <img 
              src="/doctor.png" 
              alt="Dra. Patrícia Pólvora" 
              className="w-4/5 md:w-auto max-h-[500px] object-cover rounded-lg relative z-10 shadow-xl"
            />
          </div>
        </div>
      </div>
      
      {/* Highlight cards */}
      <div className="container-custom px-6 md:px-12 mt-16 lg:mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 staggered-fade-in">
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-brandGreen-DEFAULT">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Atendimento personalizado</h3>
            <p className="text-gray-600">
              Cada paciente é único. Por isso, desenvolvemos um plano de cuidados adaptado às suas necessidades específicas.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-brandGreen-DEFAULT">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Foco em saúde da mulher</h3>
            <p className="text-gray-600">
              Cuidados específicos para cada fase da vida feminina, com atenção especial à menopausa e mudanças hormonais.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-brandGreen-DEFAULT">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Tratamentos naturais e genéticos</h3>
            <p className="text-gray-600">
              Combinamos a medicina moderna e análise genética com abordagens naturais para resultados duradouros.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
