
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
import { ThemeProvider } from '../hooks/useTheme';
import { logStyleChange, logSystemUpdate } from '../utils/updateLogger';
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    // Registrar inicialização da página principal
    logSystemUpdate('Página principal carregada com sistema de tema dinâmico', 'Index');
    
    // Registrar mudanças aplicadas
    logStyleChange(
      'Sistema de tema escuro/claro implementado com acessibilidade completa',
      'Index',
      'Adicionado toggle de tema, animações melhoradas, contraste otimizado'
    );
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background relative transition-colors duration-300">
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
    </ThemeProvider>
  );
};

export default Index;
