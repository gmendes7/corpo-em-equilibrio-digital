
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

const Index = () => {
  return (
    <div className="min-h-screen bg-branco-areia">
      <Navbar />
      <PlantDecorations />
      <Hero />
      <About />
      <Specialties />
      <Blog />
      <Appointment />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
