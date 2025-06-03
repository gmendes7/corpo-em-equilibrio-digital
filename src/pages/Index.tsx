
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Specialties from '../components/Specialties';
import Blog from '../components/Blog';
import Appointment from '../components/Appointment';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import PlantDecorations from '../components/PlantDecorations';
import { logStyleChange, logSystemUpdate } from '../utils/updateLogger';
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    // Registrar inicialização da página principal
    logSystemUpdate('Página principal carregada com tema escuro', 'Index');
    
    // Registrar mudanças aplicadas
    logStyleChange(
      'Tema escuro aplicado como padrão permanente',
      'Index',
      'Removido tema branco, melhorada acessibilidade'
    );
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 relative">
      {/* Plant decorations are positioned with fixed positioning */}
      <PlantDecorations />
      
      {/* Main content positioned above the decorative plants */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Specialties />
        <Blog />
        <Appointment />
        <Contact />
        <Footer />
        <FloatingWhatsApp />
      </div>
    </div>
  );
};

export default Index;
