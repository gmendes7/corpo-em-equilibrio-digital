
const FooterSpecialties = () => {
  const scrollToSpecialty = (specialty: string) => {
    document.getElementById('specialties')?.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      const tab = document.querySelector(`[data-specialty="${specialty}"]`);
      if (tab) {
        (tab as HTMLButtonElement).click();
      }
    }, 500);
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4 text-slate-50 font-playfair">Especialidades</h3>
      <ul className="space-y-3 font-lato">
        <li>
          <button 
            onClick={() => scrollToSpecialty('diabetes')}
            className="text-gray-600 hover:text-verde-musgo transition-colors"
          >
            Diabetes
          </button>
        </li>
        <li>
          <button 
            onClick={() => scrollToSpecialty('emagrecimento')}
            className="text-gray-600 hover:text-verde-musgo transition-colors"
          >
            Emagrecimento
          </button>
        </li>
        <li>
          <button 
            onClick={() => scrollToSpecialty('menopausa')}
            className="text-gray-600 hover:text-verde-musgo transition-colors"
          >
            Menopausa
          </button>
        </li>
        <li>
          <button 
            onClick={() => scrollToSpecialty('genetica')}
            className="text-gray-600 hover:text-verde-musgo transition-colors"
          >
            Genética
          </button>
        </li>
        <li>
          <button 
            onClick={() => document.getElementById('specialties')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-gray-600 hover:text-verde-musgo transition-colors"
          >
            Saúde da Mulher
          </button>
        </li>
      </ul>
    </div>
  );
};

export default FooterSpecialties;
