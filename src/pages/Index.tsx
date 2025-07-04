
import Navbar from "../components/Navbar";
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
      <Navbar />
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
