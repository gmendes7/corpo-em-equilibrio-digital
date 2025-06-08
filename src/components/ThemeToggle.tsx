
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border border-verde-claro/30 dark:border-slate-600 hover:bg-white dark:hover:bg-slate-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-verde-musgo focus:ring-offset-2 focus:ring-offset-background shadow-lg"
      aria-label={`Alternar para modo ${theme === 'light' ? 'escuro' : 'claro'}`}
      title={`Modo ${theme === 'light' ? 'escuro' : 'claro'}`}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <Sun 
          size={18} 
          className={`text-verde-musgo transition-all duration-300 ${
            theme === 'light' ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'
          }`}
        />
        <Moon 
          size={18} 
          className={`absolute text-slate-600 dark:text-slate-300 transition-all duration-300 ${
            theme === 'dark' ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
          }`}
        />
      </div>
    </button>
  );
};

export default ThemeToggle;
