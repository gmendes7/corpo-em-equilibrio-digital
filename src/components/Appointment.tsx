
import { Leaf } from 'lucide-react';

const Appointment = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section bg-white relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-10 right-20 w-28 h-28 opacity-20 leaf-animation">
        <img src="/leaf1.png" alt="" className="w-full" />
      </div>
      
      <div className="absolute bottom-10 left-20 w-24 h-24 opacity-20 leaf-animation" style={{ animationDelay: '2.5s' }}>
        <img src="/leaf2.png" alt="" className="w-full" />
      </div>
      
      <div className="container-custom">
        <div className="bg-gradient-to-r from-brand-green-light to-brand-green-light/30 rounded-2xl p-8 md:p-12 shadow-lg relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-brand-green/10 rounded-full -mt-16 -mr-16"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-green/10 rounded-full -mb-10 -ml-10"></div>
          
          <div className="flex flex-col md:flex-row items-center justify-between relative z-10">
            <div className="w-full md:w-2/3 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                Pronto para dar o primeiro passo rumo à 
                <span className="text-brand-green"> saúde equilibrada</span>?
              </h2>
              <p className="text-lg text-gray-700">
                Agende sua consulta e comece sua jornada para o bem-estar. A Dra. Patrícia Pólvora está pronta para desenvolver um plano personalizado para você.
              </p>
            </div>
            <div className="w-full md:w-1/3 flex justify-center md:justify-end">
              <button 
                onClick={scrollToAbout} 
                className="btn-primary text-lg py-4 px-8 w-full md:w-auto whitespace-nowrap"
              >
                Conheça a Doutora
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
