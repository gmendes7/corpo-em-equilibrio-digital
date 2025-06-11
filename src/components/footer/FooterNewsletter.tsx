
import { useState } from 'react';

const FooterNewsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate newsletter subscription
      await new Promise(resolve => setTimeout(resolve, 1000));
      setMessage('Obrigado por se inscrever!');
      setEmail('');
    } catch (error) {
      setMessage('Erro ao se inscrever. Tente novamente.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setMessage(''), 3000);
    }
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4 text-slate-50 font-playfair">Boletim Informativo</h3>
      <p className="text-slate-300 mb-4 font-lato">
        Receba dicas de saúde e bem-estar diretamente no seu e-mail.
      </p>
      <form className="space-y-3" onSubmit={handleSubmit}>
        <div>
          <input 
            type="email" 
            placeholder="Seu e-mail" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-lg border border-slate-600 bg-slate-700 text-slate-100 focus:ring-2 focus:ring-verde-musgo focus:border-transparent outline-none transition-all"
          />
        </div>
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full btn-primary disabled:opacity-50"
        >
          {isSubmitting ? 'Inscrevendo...' : 'Assinar'}
        </button>
        {message && (
          <p className={`text-sm ${message.includes('Obrigado') ? 'text-green-400' : 'text-red-400'}`}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
};

export default FooterNewsletter;
