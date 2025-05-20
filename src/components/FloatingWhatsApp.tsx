
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  return (
    <a 
      href="https://wa.me/5567993417073?text=Olá%2C%20gostaria%20de%20agendar%20uma%20consulta"
      target="_blank"
      rel="noopener noreferrer"
      className="float-whatsapp bg-verde-musgo hover:bg-verde-musgo/90 text-white p-4 rounded-full shadow-lg transition-colors"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default FloatingWhatsApp;
