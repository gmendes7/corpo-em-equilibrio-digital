
import FooterBrand from './footer/FooterBrand';
import FooterNavigation from './footer/FooterNavigation';
import FooterSpecialties from './footer/FooterSpecialties';
import FooterNewsletter from './footer/FooterNewsletter';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-slate-800/50 to-slate-900 pt-16 pb-8 relative overflow-hidden border-t border-slate-700">
      <div className="container-custom">
        {/* Top section with columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <FooterBrand />
          <FooterNavigation />
          <FooterSpecialties />
          <FooterNewsletter />
        </div>

        {/* Bottom section with copyright and developer credits */}
        <div className="border-t border-slate-700 pt-8">
          <p className="text-center text-slate-300 font-lato mb-2">
            © {new Date().getFullYear()} CORPO EM EQUILÍBRIO - Dra. Patrícia Pólvora. Todos os direitos reservados.
          </p>
          <p className="text-center text-slate-400 font-lato text-sm">
            Desenvolvido por <span className="text-verde-claro">@Gabrielmendes</span>, <span className="text-verde-claro">@Viniciushadid</span>, <span className="text-verde-claro">@pedroricaldes</span> e <span className="text-verde-claro">@schjneiderr</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
