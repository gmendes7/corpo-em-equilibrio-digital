import { ArrowRight, Play, MessageCircle, Heart, Shield, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <>
      {/* Chatbot widget inteligente melhorado */}
      <script
        id="chatbase-widget"
        dangerouslySetInnerHTML={{
          __html: `
            window.chatbotConfig = {
              welcomeMessage: "Olá! 👋 Sou a assistente virtual da Dra. Patrícia. Como posso te ajudar hoje?",
              faq: [
                { q: "Quais especialidades vocês atendem?", a: "Trabalhamos com Medicina Integrativa, Nutrologia e Fitoterapia. Nossa abordagem une medicina tradicional e terapias naturais." },
                { q: "Como agendo uma consulta?", a: "Você pode agendar clicando no botão 'Agende sua Consulta' ou enviando uma mensagem aqui. Podemos enviar os valores por WhatsApp, deseja que eu envie?" },
                { q: "Onde fica a clínica?", a: "Atendemos 100% online no momento para maior comodidade e segurança." },
                { q: "Aceitam plano de saúde?", a: "Atualmente trabalhamos apenas com consultas particulares. Fornecemos recibo para reembolso se seu plano permitir." },
                { q: "Qual o valor da consulta?", a: "Os valores variam conforme a especialidade. Posso enviar a tabela completa por WhatsApp. Deseja receber?" },
                { q: "O que é medicina integrativa?", a: "É uma abordagem que une medicina convencional e terapias complementares, tratando o paciente de forma integral - corpo, mente e espírito." },
                { q: "Atendem que tipos de problemas?", a: "Focamos em saúde da mulher, emagrecimento, menopausa, controle de diabetes, ansiedade, e medicina preventiva." },
                { q: "Como funciona a consulta online?", a: "Realizamos videochamadas pelo WhatsApp ou plataforma médica. Você recebe orientações, prescrições e acompanhamento completo." }
              ],
              contactLink: "https://wa.me/5567993417073?text=Olá! Vim do site e gostaria de agendar uma consulta."
            };
          `,
        }}
      />
      <script src="https://cdn.chatbase.com/widget.js" defer></script>
      
      <section
        id="home"
        className="hero-container"
      >
        <div className="container-custom grid lg:grid-cols-2 gap-16 py-24 items-center">
          <div className="hero-content">
            <span className="hero-badge">
              <Shield className="w-4 h-4" />
              Medicina Integrativa • CRM 12345-MS
            </span>
            
            <h1 className="hero-title">
              Cuidar da sua saúde com{" "}
              <span className="block text-primary">empatia e confiança</span>
            </h1>
            
            <p className="hero-subtitle">
              Agende sua consulta com quem entende você. Medicina integrativa focada na saúde da mulher, 
              unindo ciência e cuidado humanizado.
            </p>

            {/* Indicadores de confiança */}
            <div className="flex items-center gap-6 text-sm text-muted-foreground font-lato">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-600 fill-current" />
                <span>4.9/5 avaliações</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-primary" />
                <span>500+ pacientes</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-primary" />
                <span>Atendimento online</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-primary gap-3 px-8 py-4 text-lg"
              >
                Agende sua Consulta
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-secondary gap-3 px-8 py-4 text-lg"
              >
                <Play size={18} />
                Conheça a Dra. Patrícia
              </button>
            </div>
          </div>
          
          {/* Imagem da médica otimizada */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-[350px] h-[350px] aspect-square rounded-2xl overflow-hidden shadow-media bg-gradient-to-br from-muted to-white flex items-center justify-center border-2 border-primary/20">
                <img
                  src="/lovable-uploads/bb6f72a5-c130-46e7-9f11-99e6a9b55f75.png"
                  alt="Dra. Patrícia Pólvora - Médica especialista em Medicina Integrativa"
                  className="w-full h-full object-cover object-center rounded-2xl"
                  loading="eager"
                />
              </div>
              {/* Elementos decorativos */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse-subtle"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary rounded-full animate-pulse-subtle" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
