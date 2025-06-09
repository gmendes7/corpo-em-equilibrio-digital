
/**
 * Sistema de registro de atualizações do site em tempo real
 */

export type UpdateType = 'fix' | 'feature' | 'style' | 'chore' | 'docs' | 'test';

interface UpdateEntry {
  timestamp: string;
  type: UpdateType;
  description: string;
  component?: string;
  version?: string;
  details?: string;
  developer?: string;
}

const UPDATE_LOG_KEY = 'corpo_equilibrio_updates';
const MAX_UPDATE_LOGS = 100;

// Lista de desenvolvedores para rotacionar nas atualizações
const developers = ['@Gabrielmendes', '@Viniciushadid', '@pedroricaldes', '@schjneiderr'];
let currentDeveloperIndex = 0;

// Emojis para cada tipo de update
const updateTypeEmojis: Record<UpdateType, string> = {
  fix: '🐛',
  feature: '✨',
  style: '🎨',
  chore: '🔧',
  docs: '📝',
  test: '🧪'
};

/**
 * Obtém o próximo desenvolvedor na rotação
 */
const getNextDeveloper = (): string => {
  const developer = developers[currentDeveloperIndex];
  currentDeveloperIndex = (currentDeveloperIndex + 1) % developers.length;
  return developer;
};

/**
 * Registra uma atualização do sistema
 */
export const logUpdate = (
  type: UpdateType,
  description: string,
  component?: string,
  details?: string,
  specificDeveloper?: string
) => {
  const developer = specificDeveloper || getNextDeveloper();
  
  const updateEntry: UpdateEntry = {
    timestamp: new Date().toISOString(),
    type,
    description,
    component,
    details,
    version: '2.0.0', // Nova versão após mudanças
    developer
  };

  const emoji = updateTypeEmojis[type];
  const componentInfo = component ? ` [${component}]` : '';
  
  // Log no console para desenvolvimento
  console.log(
    `%c[UPDATE]${componentInfo} ${emoji} ${description} - ${developer}`,
    'color: #22c55e; font-weight: bold;'
  );

  if (details) {
    console.log(`%cDetalhes: ${details}`, 'color: #64748b;');
  }

  // Armazenar no localStorage para histórico
  try {
    const existingUpdates = getUpdateHistory();
    const updatedHistory = [updateEntry, ...existingUpdates].slice(0, MAX_UPDATE_LOGS);
    
    localStorage.setItem(UPDATE_LOG_KEY, JSON.stringify(updatedHistory));
  } catch (error) {
    console.error('Falha ao armazenar log de atualização:', error);
  }

  return updateEntry;
};

/**
 * Obtém o histórico de atualizações
 */
export const getUpdateHistory = (): UpdateEntry[] => {
  try {
    const stored = localStorage.getItem(UPDATE_LOG_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Falha ao recuperar histórico de atualizações:', error);
    return [];
  }
};

/**
 * Limpa o histórico de atualizações
 */
export const clearUpdateHistory = (): void => {
  localStorage.removeItem(UPDATE_LOG_KEY);
  console.log('🗑️ Histórico de atualizações limpo');
};

/**
 * Registra atualizações automáticas do sistema
 */
export const logSystemUpdate = (message: string, component?: string, developer?: string) => {
  logUpdate('chore', message, component, 'Atualização automática do sistema', developer);
};

/**
 * Registra correção de bug
 */
export const logBugFix = (description: string, component?: string, details?: string, developer?: string) => {
  logUpdate('fix', description, component, details, developer);
};

/**
 * Registra nova funcionalidade
 */
export const logFeature = (description: string, component?: string, details?: string, developer?: string) => {
  logUpdate('feature', description, component, details, developer);
};

/**
 * Registra mudança visual/estética
 */
export const logStyleChange = (description: string, component?: string, details?: string, developer?: string) => {
  logUpdate('style', description, component, details, developer);
};

/**
 * Exporta histórico para download (útil para relatórios)
 */
export const exportUpdateHistory = () => {
  const history = getUpdateHistory();
  const dataStr = JSON.stringify(history, null, 2);
  const dataBlob = new Blob([dataStr], { type: 'application/json' });
  
  const url = URL.createObjectURL(dataBlob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `corpo-equilibrio-updates-${new Date().toISOString().split('T')[0]}.json`;
  link.click();
  
  URL.revokeObjectURL(url);
  logUpdate('docs', 'Histórico de atualizações exportado');
};

// Registrar carregamento inicial do sistema
if (typeof window !== 'undefined') {
  logSystemUpdate('Sistema de logs de atualização inicializado com novos desenvolvedores', 'UpdateLogger', '@Gabrielmendes');
}
