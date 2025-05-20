
/**
 * Utility for logging errors and bugs in the application
 */

// Log levels
export type LogLevel = 'error' | 'warning' | 'info';

interface LogEntry {
  timestamp: string;
  level: LogLevel;
  message: string;
  details?: unknown;
  userInfo?: {
    path: string;
    userAgent: string;
  };
}

// Maximum number of logs to store in localStorage
const MAX_STORED_LOGS = 50;
const LOCAL_STORAGE_KEY = 'corpo_equilibrio_error_logs';

/**
 * Log an error, warning or info message
 */
export const logError = (
  level: LogLevel,
  message: string,
  details?: unknown
) => {
  const logEntry: LogEntry = {
    timestamp: new Date().toISOString(),
    level,
    message,
    details,
    userInfo: {
      path: window.location.pathname,
      userAgent: navigator.userAgent,
    },
  };

  // Log to console
  switch (level) {
    case 'error':
      console.error(`[ERROR] ${message}`, details);
      break;
    case 'warning':
      console.warn(`[WARNING] ${message}`, details);
      break;
    case 'info':
      console.info(`[INFO] ${message}`, details);
      break;
  }

  // Store in localStorage for later review
  try {
    const existingLogs = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]') as LogEntry[];
    
    // Add new log entry at the beginning
    const updatedLogs = [logEntry, ...existingLogs].slice(0, MAX_STORED_LOGS);
    
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedLogs));
  } catch (error) {
    console.error('Failed to store error log in localStorage', error);
  }

  // In a production environment, you might want to send serious errors to a server
  if (level === 'error' && process.env.NODE_ENV === 'production') {
    // Implementação futura: enviar para um servidor de logs
    // sendToErrorServer(logEntry);
  }

  return logEntry;
};

/**
 * Get all stored logs
 */
export const getStoredLogs = (): LogEntry[] => {
  try {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]');
  } catch (error) {
    console.error('Failed to retrieve logs from localStorage', error);
    return [];
  }
};

/**
 * Clear all stored logs
 */
export const clearStoredLogs = (): void => {
  localStorage.removeItem(LOCAL_STORAGE_KEY);
};

/**
 * Utility function to wrap error-prone functions
 */
export const withErrorLogging = <T extends (...args: any[]) => any>(
  fn: T,
  errorMessage = 'Function execution failed'
): ((...args: Parameters<T>) => ReturnType<T>) => {
  return (...args: Parameters<T>): ReturnType<T> => {
    try {
      return fn(...args);
    } catch (error) {
      logError('error', errorMessage, { error, functionName: fn.name, args });
      throw error; // Re-throw to maintain original behavior
    }
  };
};
