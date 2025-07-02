import { Instagram, Award, Users, Clock } from 'lucide-react';

const AboutDoctor = () => {
  return (
    <section id="about" className="relative py-24 bg-card overflow-hidden">
      {/* Linha superior decorativa */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
      </div>
      <div className="relative z-10 container-custom px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Foto circular, aspect-square */}
          <div className="relative flex justify-center lg:justify-end order-2 lg:order-1">
            <div className="relative bg-card p-8 shadow-md rounded-2xl border border-border flex items-center justify-center">
              <div className="w-64 h-64 aspect-square overflow-hidden rounded-full shadow-lg bg-muted flex items-center justify-center">
                <img
                  src="/lovable-uploads/bb6f72a5-c130-46e7-9f11-99e6a9b55f75.png"
                  alt="Foto profissional da Dra. Patrícia Pólvora"
                  className="w-full h-full object-cover object-center rounded-full"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          {/* Texto/Conteúdo */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="staggered-fade-in space-y-6">
              <span className="inline-flex items-center gap-2 bg-secondary/40 border border-secondary/60 rounded-full px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm">
                <Clock size={16} />
                Sobre a Especialista
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight font-lato">
                Dra. Patrícia Pólvora
                <span className="block text-lg font-normal text-muted-foreground mt-2">CRM 12345-MS</span>
              </h1>
              <p className="text-xl text-cinza-texto font-light leading-relaxed font-lato">
                Olá, sou a Dra. Patrícia, apaixonada por cuidar da saúde da mulher. Com mais de 10 anos de experiência, busco sempre ouvir e acolher cada paciente de forma única.
              </p>
              <div className="space-y-4">
                <div className="bg-muted rounded-2xl p-6 shadow border border-border hover:shadow-md transition card-hover">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/50 rounded-xl flex items-center justify-center">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="font-bold text-primary mb-2">Formação Acadêmica</h2>
                      <p className="text-cinza-texto">
                        Medicina pela UFRJ, especialização em Endocrinologia, e formação internacional em Medicina Integrativa.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-muted rounded-2xl p-6 shadow border border-border hover:shadow-md transition card-hover">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/50 rounded-xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="font-bold text-primary mb-2">Experiência e Inovações</h2>
                      <p className="text-cinza-texto">
                        Medicina Funcional, Nutrigenômica, tratamentos avançados para diabetes e saúde hormonal feminina.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Citação */}
              <blockquote className="relative bg-background rounded-2xl p-6 border-l-4 border-secondary">
                <div className="absolute top-4 left-6 text-4xl text-secondary/20 font-serif">&quot;</div>
                <p className="text-foreground font-medium italic leading-relaxed pt-6">
                  Minha missão é transformar vidas através de uma medicina que enxerga o ser humano de forma integral.
                </p>
                <cite className="block text-sm text-secondary font-semibold mt-3 not-italic">
                  — Dra. Patrícia Pólvora
                </cite>
              </blockquote>
              <div className="pt-4">
                <a
                  href="https://www.instagram.com/drapatriciapolvora"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-secondary text-white font-semibold px-5 py-3 rounded-xl shadow hover:bg-secondary/90 focus:ring-2 focus:ring-secondary focus:outline-none"
                  style={{ backgroundColor: '#503629' }}
                >
                  <Instagram size={20} />
                  <span>@drapatriciapolvora</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDoctor;
