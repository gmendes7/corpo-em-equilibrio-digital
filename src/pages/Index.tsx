
import MagazineHeader from "../components/MagazineHeader";
import HeroSection from "../components/HeroSection";
import AboutDoctor from "../components/AboutDoctor";
import Specialties from "../components/Specialties";
import Testimonials from "../components/Testimonials";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import QuickAppointment from "../components/QuickAppointment";
import SystemDashboard from "../components/admin/SystemDashboard";
import { performanceMonitor } from "../utils/performanceMonitor";
import { logUpdate } from "../utils/updateLogger";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    performanceMonitor.trackPageView('/');
    logUpdate('chore', 'Sistema de monitoramento inicializado', 'Index', 'Performance monitoring, caching e testes automatizados ativados');
    return () => {
      performanceMonitor.cleanup();
    };
  }, []);
  return (
    <div className="min-h-screen bg-background text-foreground font-lato">
      <MagazineHeader />
      
      {/* Banner central inspirado na Magazine Médica */}
      <section className="bg-background py-16 px-4 text-center">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-playfair">
            Cuidando da sua saúde com acolhimento e profissionalismo
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto font-lato">
            Agende sua consulta com facilidade e confiança. Medicina integrativa focada no seu bem-estar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/5567993417073?text=Olá! Vim do site e gostaria de agendar uma consulta."
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-lg shadow-lg hover:bg-primary/90 transition-all duration-300 font-lato"
            >
              Agendar pelo WhatsApp
            </a>
            <button
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-300 font-lato"
            >
              Conhecer a Dra. Patrícia
            </button>
          </div>
        </div>
      </section>

      <HeroSection />
      <AboutDoctor />
      <Specialties />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
      <QuickAppointment />
      {/* WhatsApp para suporte */}
      <div className="hidden">
        <FloatingWhatsApp />
      </div>
      <SystemDashboard />
    </div>
  );
};
export default Index;
