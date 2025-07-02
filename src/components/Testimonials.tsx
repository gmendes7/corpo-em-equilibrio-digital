import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      initials: "MS",
      text: "A Dra. Patrícia é super atenciosa. Explicou tudo com calma e me senti acolhida desde a primeira consulta. Recomendo demais!",
      rating: 5,
      specialty: "Medicina Integrativa"
    },
    {
      name: "Ana Paula R.",
      initials: "AP",
      text: "Excelente profissional! Me ajudou muito com questões hormonais. Abordagem humanizada e muito conhecimento técnico.",
      rating: 5,
      specialty: "Endocrinologia"
    },
    {
      name: "Carla Mendes",
      initials: "CM",
      text: "Depois de anos sem respostas, finalmente encontrei uma médica que me ouve e entende. Muito obrigada, Dra. Patrícia!",
      rating: 5,
      specialty: "Nutrologia"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container-custom px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 rounded-full px-4 py-2 text-sm font-medium text-secondary mb-6">
            <Star size={16} />
            Depoimentos de Pacientes
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            O que nossas pacientes dizem
          </h2>
          <p className="text-xl text-cinza-texto max-w-2xl mx-auto">
            Histórias reais de transformação e cuidado humanizado
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary font-bold text-sm">{testimonial.initials}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <Quote className="absolute -top-2 -left-2 text-primary/20" size={24} />
                <p className="text-cinza-texto leading-relaxed mb-4 pl-6">
                  "{testimonial.text}"
                </p>
              </div>
              
              <div className="text-sm text-muted-foreground border-t border-border pt-4">
                Especialidade: {testimonial.specialty}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 bg-card rounded-2xl px-6 py-4 shadow-md border border-border">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="text-left">
              <div className="font-bold text-lg text-foreground">4.9/5</div>
              <div className="text-sm text-muted-foreground">Baseado em 150+ avaliações</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;