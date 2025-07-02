
import { useState } from 'react';
import { MessageCircle, Mail, MapPin, Instagram, Shield, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { SecurityUtils } from '../utils/security';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Detectar conteúdo malicioso
    if (SecurityUtils.detectMaliciousContent(value)) {
      toast({
        title: "Conteúdo não permitido",
        description: "Por favor, remova caracteres especiais ou códigos do formulário.",
        variant: "destructive",
      });
      return;
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: SecurityUtils.sanitizeInput(value)
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Verificar rate limiting
    if (!SecurityUtils.checkRateLimit('contact_form', 300000, 3)) { // 3 tentativas por 5 min
      toast({
        title: "Muitas tentativas",
        description: "Aguarde alguns minutos antes de enviar outra mensagem.",
        variant: "destructive",
      });
      return;
    }

    // Validações
    if (!SecurityUtils.isValidEmail(formData.email)) {
      toast({
        title: "Email inválido",
        description: "Por favor, insira um email válido.",
        variant: "destructive",
      });
      return;
    }

    if (formData.phone && !SecurityUtils.isValidPhone(formData.phone)) {
      toast({
        title: "Telefone inválido",
        description: "Use o formato (XX) XXXXX-XXXX.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Obter token reCAPTCHA
      const recaptchaToken = await new Promise<string>((resolve, reject) => {
        if (typeof window !== 'undefined' && (window as any).grecaptcha) {
          (window as any).grecaptcha.ready(() => {
            (window as any).grecaptcha.execute('6LdYourSiteKey', { action: 'submit' })
              .then(resolve)
              .catch(reject);
          });
        } else {
          resolve(''); // Fallback para desenvolvimento
        }
      });

      const response = await fetch('/api/send-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken
        }),
      });

      const result = await response.json();

      if (response.ok) {
        toast({
          title: "Mensagem enviada!",
          description: "Obrigado pelo contato. Responderemos em breve.",
        });
        
        // Limpar formulário
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error(result.error || 'Erro ao enviar mensagem');
      }
    } catch (error) {
      console.error('Erro ao enviar:', error);
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente ou entre em contato via WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contact" className="section bg-verde-claro/20">
      <div className="container-custom">
        <div className="text-center mb-12 staggered-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Entre em <span className="text-verde-musgo">Contato</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estamos aqui para ajudar você a iniciar sua jornada de saúde e bem-estar. Não hesite em nos contatar para agendar uma consulta ou esclarecer suas dúvidas.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 staggered-fade-in">
          {/* Contact form */}
          <div className="w-full lg:w-7/12 bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Envie-nos uma mensagem</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex items-center gap-2 mb-6 p-4 bg-muted/50 rounded-lg border border-border">
                <Shield size={20} className="text-secondary" />
                <span className="text-sm text-muted-foreground font-lato">
                  Formulário protegido contra spam e ataques
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2 font-lato">
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-input focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all font-lato"
                    placeholder="Seu nome completo"
                    required
                    maxLength={100}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2 font-lato">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-input focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all font-lato"
                    placeholder="seu@email.com"
                    required
                    maxLength={255}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2 font-lato">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-input focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all font-lato"
                  placeholder="(00) 00000-0000"
                  maxLength={15}
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2 font-lato">
                  Especialidade de interesse *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-input focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all font-lato"
                  required
                >
                  <option value="">Selecione uma especialidade</option>
                  <option value="medicina-integrativa">Medicina Integrativa</option>
                  <option value="nutrologia">Nutrologia</option>
                  <option value="endocrinologia">Endocrinologia</option>
                  <option value="fitoterapia">Fitoterapia</option>
                  <option value="outros">Outros</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2 font-lato">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-input focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none font-lato"
                  placeholder="Conte um pouco sobre sua necessidade ou dúvida..."
                  required
                  maxLength={1000}
                ></textarea>
                <div className="text-xs text-muted-foreground mt-1">
                  {formData.message.length}/1000 caracteres
                </div>
              </div>

              {/* reCAPTCHA placeholder - será ativado quando as chaves forem configuradas */}
              <div className="g-recaptcha" data-sitekey="6LdYourSiteKey" data-size="invisible"></div>
              
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground font-bold px-6 py-4 rounded-xl shadow-lg hover:bg-primary/90 transition-all duration-300 font-lato disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <CheckCircle size={20} />
                      Enviar Mensagem Segura
                    </>
                  )}
                </button>
              </div>
              
              <div className="text-xs text-muted-foreground text-center">
                Seus dados estão protegidos e não serão compartilhados com terceiros.
              </div>
            </form>
          </div>

          {/* Contact info */}
          <div className="w-full lg:w-5/12 flex flex-col justify-between">
            {/* Map */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden h-64 mb-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d240868.91247001226!2d-54.736868898778384!3d-20.48692364790951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9486e6726b2b9f27%3A0xf5a8469ebc85d4a!2sCampo%20Grande%2C%20MS!5e0!3m2!1spt-BR!2sbr!4v1715368595549!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Location map"
              ></iframe>
            </div>

            {/* Contact cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-verde-claro rounded-full flex items-center justify-center mb-4">
                  <MessageCircle className="text-verde-musgo" size={24} />
                </div>
                <h4 className="font-semibold mb-1 text-gray-800">WhatsApp</h4>
                <p className="text-gray-600">(67) 99341-7073</p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-verde-claro rounded-full flex items-center justify-center mb-4">
                  <Mail className="text-verde-musgo" size={24} />
                </div>
                <h4 className="font-semibold mb-1 text-gray-800">E-mail</h4>
                <p className="text-gray-600">contato@corpoemequilibrio.com</p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-verde-claro rounded-full flex items-center justify-center mb-4">
                  <MapPin className="text-verde-musgo" size={24} />
                </div>
                <h4 className="font-semibold mb-1 text-gray-800">Endereço</h4>
                <p className="text-gray-600">Campo Grande, MS</p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-verde-claro rounded-full flex items-center justify-center mb-4">
                  <Instagram className="text-verde-musgo" size={24} />
                </div>
                <h4 className="font-semibold mb-1 text-gray-800">Instagram</h4>
                <p className="text-gray-600">@drapatriciapolvora</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
