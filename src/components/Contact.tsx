
import { MessageCircle, Mail, MapPin, Instagram } from 'lucide-react';

const Contact = () => {
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
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome completo</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-verde-musgo focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-verde-musgo focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-verde-musgo focus:border-transparent outline-none transition-all"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Assunto</label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-verde-musgo focus:border-transparent outline-none transition-all"
                >
                  <option value="">Selecione um assunto</option>
                  <option value="appointment">Agendamento</option>
                  <option value="information">Informações</option>
                  <option value="partnership">Parcerias</option>
                  <option value="other">Outro</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-verde-musgo focus:border-transparent outline-none transition-all resize-none"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full btn-primary"
                >
                  Enviar Mensagem
                </button>
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
