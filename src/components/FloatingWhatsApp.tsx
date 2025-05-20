
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  const preFilledMessage = "Olá, gostaria de agendar uma consulta para:\n- [ ] Saúde da Mulher\n- [ ] Menopausa\n- [ ] Emagrecimento\n- [ ] Diabetes\n- [ ] Análise Genética\n- [ ] Outro (especificar)";
  
  const encodedMessage = encodeURIComponent(preFilledMessage);
  
  return (
    <a 
      href={`https://wa.me/5567993417073?text=${encodedMessage}`}
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
