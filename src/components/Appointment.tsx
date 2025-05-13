
const Appointment = () => {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="bg-gradient-to-r from-brandGreen-light to-brandGreen-light/30 rounded-2xl p-8 md:p-12 shadow-lg relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-brandGreen-DEFAULT/10 rounded-full -mt-16 -mr-16"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-brandGreen-DEFAULT/10 rounded-full -mb-10 -ml-10"></div>
          
          <div className="flex flex-col md:flex-row items-center justify-between relative z-10">
            <div className="w-full md:w-2/3 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                Pronto para dar o primeiro passo rumo à 
                <span className="text-brandGreen-DEFAULT"> saúde equilibrada</span>?
              </h2>
              <p className="text-lg text-gray-700">
                Agende sua consulta e comece sua jornada para o bem-estar. A Dra. Patrícia Pólvora está pronta para desenvolver um plano personalizado para você.
              </p>
            </div>
            <div className="w-full md:w-1/3 flex justify-center md:justify-end">
              <button className="btn-primary text-lg py-4 px-8 w-full md:w-auto whitespace-nowrap">
                Agende sua Consulta
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
