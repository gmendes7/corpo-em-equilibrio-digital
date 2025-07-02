// Utility functions para segurança
export const SecurityUtils = {
  // Sanitizar input do usuário
  sanitizeInput: (input: string): string => {
    return input
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#x27;")
      .replace(/\//g, "&#x2F;")
      .trim();
  },

  // Validar email
  isValidEmail: (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  // Validar telefone brasileiro
  isValidPhone: (phone: string): boolean => {
    const phoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
    return phoneRegex.test(phone) || phone === '';
  },

  // Detectar tentativas de injection
  detectMaliciousContent: (input: string): boolean => {
    const maliciousPatterns = [
      /<script/i,
      /javascript:/i,
      /on\w+=/i,
      /<iframe/i,
      /eval\(/i,
      /document\./i,
      /window\./i,
    ];
    
    return maliciousPatterns.some(pattern => pattern.test(input));
  },

  // Rate limiting checker
  checkRateLimit: (ip: string, windowMs: number = 60000, maxRequests: number = 5): boolean => {
    const key = `rate_limit_${ip}`;
    const now = Date.now();
    
    const stored = localStorage.getItem(key);
    if (!stored) {
      localStorage.setItem(key, JSON.stringify({ count: 1, resetTime: now + windowMs }));
      return true;
    }
    
    const data = JSON.parse(stored);
    if (now > data.resetTime) {
      localStorage.setItem(key, JSON.stringify({ count: 1, resetTime: now + windowMs }));
      return true;
    }
    
    if (data.count >= maxRequests) {
      return false;
    }
    
    data.count++;
    localStorage.setItem(key, JSON.stringify(data));
    return true;
  }
};

export default SecurityUtils;