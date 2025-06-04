
import { Instagram } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Image column */}
          <div className="w-full lg:w-2/5 mb-8 lg:mb-0">
            <div className="relative">
              <div className="absolute inset-0 bg-verde-musgo/10 rounded-xl -rotate-3 transform-gpu"></div>
              <img 
                src="/doctor-portrait.png" 
                alt="Dra. Patrícia Pólvora" 
                className="w-full h-auto rounded-xl shadow-lg relative z-10 rotate-3 transform-gpu"
              />
              <div className="absolute top-6 -right-6 bg-verde-claro w-24 h-24 rounded-full plant-breathe"></div>
              <div className="absolute -bottom-6 -left-6 bg-verde-musgo/20 w-16 h-16 rounded-full plant-breathe" style={{ animationDelay: '1.5s' }}></div>
              
              {/* Added subtle leaf decoration */}
              <div className="absolute -top-4 -left-4 w-12 h-12 opacity-30 leaf-wobble">
                <img src="/leaf2.png" alt="" className="w-full" />
              </div>
            </div>
          </div>
          
          {/* Content column */}
          <div className="w-full lg:w-3/5">
            <div className="staggered-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Sobre a <span className="text-verde-musgo">Dra. Patrícia Pólvora</span>
              </h2>
              
              <p className="text-lg text-gray-600 mb-6">
                Sou médica especialista em saúde integrativa, com foco em emagrecimento, saúde hormonal feminina e controle da diabetes através de abordagens naturais e baseadas em evidências científicas.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="bg-verde-claro/40 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-1">Formação Acadêmica</h3>
                  <p className="text-gray-600">
                    Medicina pela Universidade Federal do Rio de Janeiro, com especialização em Endocrinologia e Metabologia, além de formação em Medicina Integrativa pela Harvard Medical School.
                  </p>
                </div>
                
                <div className="bg-verde-claro/40 rounder-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-1">Especializações</h3>
                  <p className="text-gray-600">
                    Medicina Funcional, Nutrigenômica, Medicina Anti-aging e tratamentos avançados para diabetes e distúrbios hormonais femininos.
                  </p>
                </div>
                
                <div className="bg-verde-claro/40 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-1">Filosofia de Trabalho</h3>
                  <p className="text-gray-600">
                    Acredito que cada paciente é único e merece um olhar integrado que considere fatores físicos, emocionais, genéticos e ambientais para alcançar o verdadeiro equilíbrio e bem-estar.
                  </p>
                </div>
              </div>
              
              <blockquote className="border-l-4 border-verde-musgo pl-4 italic text-gray-700 mb-8">
                "Minha missão é ajudar cada pessoa a encontrar o equilíbrio natural do corpo, utilizando a ciência moderna aliada à sabedoria da natureza."
              </blockquote>
              
              <a 
                href="https://www.instagram.com/drapatriciapolvora" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-verde-musgo hover:text-verde-musgo/70 transition-colors"
              >
                <Instagram size={22} />
                <span>@drapatriciapolvora</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
