
import { MessageCircle } from 'lucide-react';
import { logBugFix, logSystemUpdate } from '../utils/updateLogger';

const FloatingWhatsApp = () => {
  const phoneNumber = "5567993417073"; // Número com código do país
  const preFilledMessage = "Olá, gostaria de agendar uma consulta para:\n- [ ] Saúde da Mulher\n- [ ] Menopausa\n- [ ] Emagrecimento\n- [ ] Diabetes\n- [ ] Análise Genética\n- [ ] Outro (especificar)";
  
  const encodedMessage = encodeURIComponent(preFilledMessage);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
  const handleClick = () => {
    // Log da correção aplicada
    logBugFix(
      'Botão WhatsApp corrigido - agora abre link externo corretamente',
      'FloatingWhatsApp',
      'Convertido de <Link> para <a> com target="_blank"'
    );
    
    logSystemUpdate('WhatsApp aberto com mensagem pré-preenchida', 'FloatingWhatsApp');
    
    console.log('WhatsApp button clicked, opening:', whatsappUrl);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };
  
  return (
    <button 
      onClick={handleClick}
      className="float-whatsapp bg-verde-musgo hover:bg-verde-musgo/90 text-white p-4 rounded-full shadow-lg transition-colors cursor-pointer"
      aria-label="Contato via WhatsApp"
      type="button"
    >
      <MessageCircle size={28} />
    </button>
  );
};

export default FloatingWhatsApp;
