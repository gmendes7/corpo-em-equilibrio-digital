
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
import { logStyleChange, logSystemUpdate, logFeature } from '../utils/updateLogger';
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    // Registrar correção para paleta verde musgo original
    logStyleChange(
      'Cores corrigidas para paleta verde musgo original especificada',
      'Index',
      'Aplicação das cores corretas: Verde musgo (#556B2F) como fundo, Verde escuro (#2E4A17) para destaques, Verde claro (#DFF0D8) para cards e Branco (#FFFFFF) para textos',
      '@Viniciushadid'
    );

    // Registrar mudança para paleta verde escura profissional
    logStyleChange(
      'Site alterado para paleta verde escura profissional',
      'Index',
      'Aplicação de cores verde escuro (#064e3b) como fundo principal e verde claro (#10b981) para destaques, removendo completamente o amarelo',
      '@pedroricaldes'
    );

    // Registrar reversão para cores originais
    logStyleChange(
      'Cores revertidas para paleta original verde-musgo',
      'Index',
      'Removido sistema de tema escuro/claro, aplicadas cores naturais originais',
      '@Viniciushadid'
    );
    
    // Registrar remoção do sistema de tema
    logFeature(
      'Sistema de tema escuro/claro removido conforme solicitado',
      'Index',
      'Simplificação da interface com cores fixas verde-musgo',
      '@pedroricaldes'
    );

    // Registrar atualização da equipe de desenvolvimento
    logSystemUpdate(
      'Equipe de desenvolvimento atualizada no rodapé',
      'Footer',
      '@schjneiderr'
    );

    // Registrar inicialização da versão 2.0
    logSystemUpdate(
      'Versão 2.0 inicializada com paleta de cores original',
      'Index',
      '@Gabrielmendes'
    );
  }, []);

  return (
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
  );
};

export default Index;
