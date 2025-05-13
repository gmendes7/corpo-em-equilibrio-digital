
import { useState } from 'react';

const Appointment = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="section bg-white relative overflow-hidden">
      <div className="container-custom">
        <div 
          className={`bg-gradient-to-r from-verde-claro to-verde-claro/30 rounded-2xl p-8 md:p-12 shadow-lg relative overflow-hidden transition-transform duration-500 ${isHovered ? 'scale-[1.01]' : ''}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-verde-musgo/10 rounded-full -mt-16 -mr-16"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-verde-musgo/10 rounded-full -mb-10 -ml-10"></div>
          
          {/* Animated leaf */}
          <div className="absolute top-1/2 right-5 w-28 h-28 opacity-30 leaf-animation hidden lg:block">
            <img src="/leaf1.png" alt="" className="w-full" />
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between relative z-10">
            <div className="w-full md:w-2/3 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 font-playfair">
                Pronto para dar o primeiro passo rumo à 
                <span className="text-verde-musgo"> saúde equilibrada</span>?
              </h2>
              <p className="text-lg text-gray-700 font-lato">
                Agende sua consulta e comece sua jornada para o bem-estar. A Dra. Patrícia Pólvora está pronta para desenvolver um plano personalizado para você.
              </p>
            </div>
            <div className="w-full md:w-1/3 flex justify-center md:justify-end">
              <button 
                onClick={scrollToContact} 
                className="btn-primary text-lg py-4 px-8 w-full md:w-auto whitespace-nowrap relative overflow-hidden"
              >
                <span className="relative z-10">Agende sua Consulta</span>
                <div className="absolute inset-0 bg-white opacity-0 hover:opacity-20 transition-opacity"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
