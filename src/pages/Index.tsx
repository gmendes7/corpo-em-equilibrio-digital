
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Specialties from "../components/Specialties";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import SystemDashboard from "../components/admin/SystemDashboard";
import { performanceMonitor } from "../utils/performanceMonitor";
import { logUpdate } from "../utils/updateLogger";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Track page view
    performanceMonitor.trackPageView('/');
    
    // Log system initialization
    logUpdate('chore', 'Sistema de monitoramento inicializado', 'Index', 'Performance monitoring, caching e testes automatizados ativados');
    
    return () => {
      // Cleanup performance monitor on unmount
      performanceMonitor.cleanup();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Specialties />
      <Blog />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
      <SystemDashboard />
    </div>
  );
};

export default Index;
