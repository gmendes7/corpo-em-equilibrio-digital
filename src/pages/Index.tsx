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
import { logStyleChange, logFeature, logSystemUpdate } from '../utils/updateLogger';
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    // Registrar upgrade profissional do site
    logStyleChange(
      'Upgrade profissional completo do site',
      'Index',
      'Aplicação de design profissional com paleta correta: Verde musgo (#7A9C32), Azul escuro (#1B2B36), correção de estilos e adição de nova foto da médica',
      'Sistema'
    );

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

    // Registrar nova paleta profissional baseada na imagem de referência
    logStyleChange(
      'Aplicada paleta profissional conforme imagem de referência',
      'Index',
      'Cores atualizadas: Gradiente cinza escuro (#2A2E30) para azul petróleo (#1F3A3D), verde musgo (#7A9C32) para destaques, azul escuro (#1B2B36) para botões secundários, removidos tons fluorescentes',
      'Sistema'
    );

    // Registrar restauração para paleta original conforme imagem de referência
    logStyleChange(
      'Cores restauradas para paleta original conforme imagem de referência',
      'Index',
      'Aplicação de cores suaves e profissionais: Fundo cinza azulado escuro, verde musgo suave (#8BA443) para destaques, azul escuro suave para botões secundários, removidos tons fluorescentes',
      'Sistema'
    );
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-azul-escuro via-background to-azul-escuro/90 relative transition-colors duration-300">
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
