import { ArrowRight, Play } from "lucide-react";
const HeroSection = () => {
  return (
    <>
      {/* Chatbot widget integration */}
      <script
        id="chatbase-widget"
        dangerouslySetInnerHTML={{
          __html: `
            window.chatbotConfig = {
              welcomeMessage: "Olá! 👋 Como posso te ajudar?",
              faq: [
                { q: "Quais especialidades?", a: "Medicina Integrativa, Nutrologia e Fitoterapia." },
                { q: "Como agendar?", a: "Clique em 'Agende sua Consulta' ou fale comigo." },
                { q: "Onde é?", a: "Atendimento 100% online atualmente." }
              ],
              contactLink: "https://wa.me/5567993417073"
            };
          `,
        }}
      />
      <script src="https://cdn.chatbase.com/widget.js" defer></script>
      <section
        id="home"
        className="min-h-screen bg-background flex items-center relative overflow-hidden"
      >
        <div className="container-custom grid lg:grid-cols-2 gap-16 py-24 items-center">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 rounded-full px-4 py-2 text-sm font-medium text-secondary backdrop-blur-sm">
              Medicina Integrativa • CRM 12345-MS
            </span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-primary font-lato">
              Cuidar da sua saúde com{" "}
              <span className="block text-secondary">empatia e confiança</span>
            </h1>
            <p className="text-xl text-cinza-texto font-light font-lato">
              Agende sua consulta com quem entende você. Medicina integrativa focada na saúde da mulher.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="group inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-primary/90 transition-all duration-300 font-lato"
              >
                Agende sua Consulta
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                className="group inline-flex items-center justify-center gap-3 bg-secondary text-secondary-foreground font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-secondary/90 transition-all duration-300 font-lato"
              >
                <Play size={18} className="text-white" />
                Conheça a Dra. Patrícia
              </button>
            </div>
          </div>
          {/* Imagem circular otimizada */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-[350px] h-[350px] aspect-square rounded-full overflow-hidden shadow-lg bg-card flex items-center justify-center border-4 border-secondary">
              <img
                src="/lovable-uploads/bb6f72a5-c130-46e7-9f11-99e6a9b55f75.png"
                alt="Foto da Dra. Patrícia Pólvora sorrindo"
                className="w-full h-full object-cover object-center rounded-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default HeroSection;
