
import { useState } from 'react';
import { Dna, Weight, Egg, Pill } from 'lucide-react';

const specialties = [
  {
    id: 'diabetes',
    title: 'Diabetes',
    icon: <Pill className="w-12 h-12 text-brandGreen-DEFAULT" />,
    description: 'Abordagem integrativa para o controle e tratamento da diabetes, combinando medicamentos quando necessários com mudanças no estilo de vida, nutrição personalizada e suplementação estratégica.',
    benefits: [
      'Controle glicêmico natural',
      'Redução da necessidade de medicamentos',
      'Prevenção de complicações',
      'Suporte personalizado contínuo'
    ]
  },
  {
    id: 'emagrecimento',
    title: 'Emagrecimento',
    icon: <Weight className="w-12 h-12 text-brandGreen-DEFAULT" />,
    description: 'Estratégias personalizadas para emagrecimento saudável e duradouro, baseadas no seu perfil metabólico, genético e estilo de vida, sem dietas restritivas ou soluções temporárias.',
    benefits: [
      'Planos baseados no seu metabolismo',
      'Resultados duradouros',
      'Sem efeito sanfona',
      'Acompanhamento contínuo'
    ]
  },
  {
    id: 'menopausa',
    title: 'Menopausa',
    icon: <Egg className="w-12 h-12 text-brandGreen-DEFAULT" />,
    description: 'Cuidado integral para mulheres na perimenopausa e menopausa, focado no equilíbrio hormonal, alívio dos sintomas e manutenção da qualidade de vida com abordagens naturais e, quando necessário, terapias hormonais bioidênticas.',
    benefits: [
      'Alívio dos sintomas desconfortáveis',
      'Equilíbrio hormonal natural',
      'Prevenção de osteoporose',
      'Melhora do bem-estar geral'
    ]
  },
  {
    id: 'genetica',
    title: 'Genética',
    icon: <Dna className="w-12 h-12 text-brandGreen-DEFAULT" />,
    description: 'Análise detalhada do seu perfil genético para desenvolver tratamentos e planos de prevenção personalizados, identificando predisposições e adaptando intervenções para suas necessidades específicas.',
    benefits: [
      'Medicina verdadeiramente personalizada',
      'Prevenção baseada no seu DNA',
      'Otimização da nutrição',
      'Suplementação específica para seu genótipo'
    ]
  }
];

const Specialties = () => {
  const [activeTab, setActiveTab] = useState('diabetes');

  return (
    <section id="specialties" className="section bg-brandGreen-light/30">
      <div className="container-custom">
        <div className="text-center mb-12 staggered-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Nossas <span className="text-brandGreen-DEFAULT">Especialidades</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Oferecemos tratamentos integrativos personalizados para atender às suas necessidades específicas, combinando ciência de ponta e abordagens naturais.
          </p>
        </div>

        {/* Tabs navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-8 staggered-fade-in">
          {specialties.map((specialty) => (
            <button
              key={specialty.id}
              className={`px-5 py-3 rounded-full font-medium transition-all ${
                activeTab === specialty.id
                  ? 'bg-brandGreen-DEFAULT text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-brandGreen-light'
              }`}
              onClick={() => setActiveTab(specialty.id)}
            >
              {specialty.title}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-fade-in">
          {specialties.map((specialty) => (
            <div
              key={specialty.id}
              className={`${
                activeTab === specialty.id ? 'block' : 'hidden'
              }`}
            >
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/3 bg-brandGreen-light/30 p-8 flex flex-col justify-center items-center text-center">
                  <div className="mb-4 p-4 bg-white rounded-full shadow-md">
                    {specialty.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">
                    {specialty.title}
                  </h3>
                </div>

                <div className="w-full md:w-2/3 p-8">
                  <p className="text-gray-700 mb-6 text-lg">
                    {specialty.description}
                  </p>

                  <h4 className="font-semibold text-lg mb-3 text-brandGreen-DEFAULT">
                    Benefícios:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {specialty.benefits.map((benefit, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2"
                      >
                        <div className="mt-1 min-w-[20px]">
                          <div className="h-5 w-5 rounded-full bg-brandGreen-light flex items-center justify-center">
                            <div className="h-2 w-2 rounded-full bg-brandGreen-DEFAULT"></div>
                          </div>
                        </div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="mt-8 btn-primary">
                    Saiba Mais
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;
