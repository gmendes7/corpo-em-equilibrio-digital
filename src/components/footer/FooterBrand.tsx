
import { Instagram, Mail, MessageCircle } from 'lucide-react';

const FooterBrand = () => {
  return (
    <div>
      <h2 className="text-xl md:text-2xl font-playfair font-semibold text-verde-claro mb-4">
        CORPO EM <span className="font-bold">EQUILÍBRIO</span>
      </h2>
      <p className="text-slate-300 mb-6 font-lato">
        Medicina integrativa personalizada para o seu bem-estar e saúde duradoura.
      </p>
      <div className="flex space-x-4">
        <a
          href="https://www.instagram.com/drapatriciapolvora"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-verde-claro/20 rounded-full flex items-center justify-center text-verde-claro hover:bg-verde-musgo hover:text-white transition-colors"
          aria-label="Instagram"
        >
          <Instagram size={20} />
        </a>
        <a
          href="mailto:contato@corpoemequilibrio.com"
          className="w-10 h-10 bg-verde-claro/20 rounded-full flex items-center justify-center text-verde-claro hover:bg-verde-musgo hover:text-white transition-colors"
          aria-label="Email"
        >
          <Mail size={20} />
        </a>
        <a
          href="https://wa.me/5567993417073"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-verde-claro/20 rounded-full flex items-center justify-center text-verde-claro hover:bg-verde-musgo hover:text-white transition-colors"
          aria-label="WhatsApp"
        >
          <MessageCircle size={20} />
        </a>
      </div>
    </div>
  );
};

export default FooterBrand;
