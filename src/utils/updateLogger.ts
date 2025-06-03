
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
}

const UPDATE_LOG_KEY = 'corpo_equilibrio_updates';
const MAX_UPDATE_LOGS = 100;

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
 * Registra uma atualização do sistema
 */
export const logUpdate = (
  type: UpdateType,
  description: string,
  component?: string,
  details?: string
) => {
  const updateEntry: UpdateEntry = {
    timestamp: new Date().toISOString(),
    type,
    description,
    component,
    details,
    version: '1.1.0' // Versão atual
  };

  const emoji = updateTypeEmojis[type];
  const componentInfo = component ? ` [${component}]` : '';
  
  // Log no console para desenvolvimento
  console.log(
    `%c[UPDATE]${componentInfo} ${emoji} ${description}`,
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
export const logSystemUpdate = (message: string, component?: string) => {
  logUpdate('chore', message, component, 'Atualização automática do sistema');
};

/**
 * Registra correção de bug
 */
export const logBugFix = (description: string, component?: string, details?: string) => {
  logUpdate('fix', description, component, details);
};

/**
 * Registra nova funcionalidade
 */
export const logFeature = (description: string, component?: string, details?: string) => {
  logUpdate('feature', description, component, details);
};

/**
 * Registra mudança visual/estética
 */
export const logStyleChange = (description: string, component?: string, details?: string) => {
  logUpdate('style', description, component, details);
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
  logSystemUpdate('Sistema de logs de atualização inicializado', 'UpdateLogger');
}
