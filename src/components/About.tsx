
import { Instagram, Award, Users, Clock } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative py-24 bg-background-claro overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-verde-musgo to-transparent"></div>
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative z-10 container-custom px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Image column */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-verde-musgo/10 to-background-claro/10 rounded-3xl blur-2xl"></div>
              <div className="absolute top-8 -right-8 w-32 h-32 bg-stone-800/20 rounded-full blur-3xl plant-gentle-sway"></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-verde-musgo/15 rounded-full blur-3xl plant-gentle-sway-delayed"></div>
              
              {/* Main image - Made square and cropped */}
              <div className="relative bg-white rounded-3xl p-6 shadow-2xl border border-stone-200 card-hover">
                <div className="w-full aspect-square overflow-hidden rounded-2xl shadow-lg bg-white">
                  <img 
                    src="/lovable-uploads/bb6f72a5-c130-46e7-9f11-99e6a9b55f75.png" 
                    alt="Dra. Patrícia Pólvora" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                
                {/* Professional badges */}
                <div className="absolute -top-3 -left-3 bg-verde-musgo rounded-2xl p-3 shadow-xl">
                  <Award className="w-6 h-6 text-white" />
                </div>
                
                <div className="absolute -bottom-3 -right-3 bg-white rounded-2xl p-3 shadow-xl border border-stone-200">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-verde-musgo" />
                    <span className="text-sm font-semibold text-stone-800">500+ pacientes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content column */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="staggered-fade-in space-y-6">
              {/* Section badge */}
              <div className="inline-flex items-center gap-2 bg-verde-musgo/10 border border-verde-musgo/20 rounded-full px-4 py-2 text-sm font-semibold text-verde-musgo">
                <Clock size={16} />
                Sobre a Especialista
              </div>

              {/* Headline */}
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-stone-800 leading-tight">
                  Dra. <span className="text-verde-musgo">Patrícia Pólvora</span>
                </h2>
                <p className="text-xl text-stone-600 font-light leading-relaxed">
                  Especialista em medicina integrativa com foco em transformar vidas através de abordagens personalizadas e baseadas em evidências científicas.
                </p>
              </div>
              
              {/* Experience cards */}
              <div className="space-y-4">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-stone-200 hover:shadow-xl transition-all duration-300 card-hover">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-verde-musgo/10 rounded-xl flex items-center justify-center">
                      <Award className="w-6 h-6 text-verde-musgo" />
                    </div>
                    <div>
                      <h3 className="font-bold text-stone-800 mb-2">Formação Acadêmica de Excelência</h3>
                      <p className="text-stone-600 leading-relaxed">
                        Medicina pela Universidade Federal do Rio de Janeiro, especialização em Endocrinologia e Metabologia, 
                        com formação em Medicina Integrativa pela Harvard Medical School.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-stone-200 hover:shadow-xl transition-all duration-300 card-hover">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-stone-100 rounded-xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-verde-musgo" />
                    </div>
                    <div>
                      <h3 className="font-bold text-stone-800 mb-2">Especializações Avançadas</h3>
                      <p className="text-stone-600 leading-relaxed">
                        Medicina Funcional, Nutrigenômica, Medicina Anti-aging e tratamentos inovadores 
                        para diabetes e distúrbios hormonais femininos.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Quote */}
              <blockquote className="relative bg-gradient-to-br from-verde-musgo/5 to-stone-50 rounded-2xl p-6 border-l-4 border-verde-musgo">
                <div className="absolute top-4 left-6 text-4xl text-verde-musgo/20 font-serif">&quot;</div>
                <p className="text-stone-800 font-medium italic leading-relaxed pt-6">
                  Minha missão é transformar vidas através de uma medicina que vê o ser humano de forma integral, 
                  utilizando a ciência moderna aliada à sabedoria natural do corpo.
                </p>
                <cite className="block text-sm text-verde-musgo font-semibold mt-3 not-italic">
                  — Dra. Patrícia Pólvora
                </cite>
              </blockquote>
              
              {/* Social link */}
              <div className="pt-4">
                <a 
                  href="https://www.instagram.com/drapatriciapolvora" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 bg-gradient-to-r from-stone-700 to-stone-800 hover:from-stone-800 hover:to-stone-900 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:ring-offset-2 focus:ring-offset-background"
                >
                  <Instagram size={20} />
                  <span>Seguir @drapatriciapolvora</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
