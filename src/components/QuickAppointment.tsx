import { Calendar, MessageCircle } from 'lucide-react';

const QuickAppointment = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Olá! Gostaria de agendar uma consulta com a Dra. Patrícia Pólvora. Poderia me ajudar com os horários disponíveis?"
    );
    window.open(`https://wa.me/5567993417073?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="group bg-primary text-primary-foreground font-bold px-6 py-4 rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300 flex items-center gap-3 animate-pulse hover:animate-none"
      >
        <Calendar size={20} />
        <span className="hidden md:inline font-lato">Agendar Consulta</span>
        <MessageCircle size={20} className="md:hidden" />
      </button>
    </div>
  );
};

export default QuickAppointment;