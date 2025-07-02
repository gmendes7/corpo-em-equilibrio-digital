import type { VercelRequest, VercelResponse } from '@vercel/node';

// Função para sanitizar input do usuário
function sanitizeInput(input: string): string {
  return input
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;")
    .trim();
}

// Rate limiting simples em memória (para produção, use Redis)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 minuto
  const maxRequests = 5; // máximo 5 por minuto

  const userLimit = rateLimitMap.get(ip);
  
  if (!userLimit || now > userLimit.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }
  
  if (userLimit.count >= maxRequests) {
    return false;
  }
  
  userLimit.count++;
  return true;
}

// Verificar reCAPTCHA
async function verifyRecaptcha(token: string): Promise<boolean> {
  if (!process.env.RECAPTCHA_SECRET_KEY) {
    console.warn('RECAPTCHA_SECRET_KEY não configurado');
    return true; // Em desenvolvimento, pular verificação
  }

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    });

    const data = await response.json();
    return data.success;
  } catch (error) {
    console.error('Erro ao verificar reCAPTCHA:', error);
    return false;
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Headers de segurança
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');

  // CORS restritivo
  const allowedOrigins = [
    'https://corpo-em-equilibrio-digital.vercel.app',
    'http://localhost:3000',
    'http://localhost:5173' // Vite dev server
  ];
  
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin || '')) {
    res.setHeader('Access-Control-Allow-Origin', origin || '');
  }
  
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Verificar método
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  // Rate limiting por IP
  const clientIp = req.headers['x-forwarded-for'] as string || 
                   req.headers['x-real-ip'] as string || 
                   'unknown';
  
  if (!checkRateLimit(clientIp)) {
    return res.status(429).json({ 
      error: 'Muitas tentativas. Tente novamente em alguns minutos.' 
    });
  }

  try {
    const { name, email, phone, subject, message, recaptchaToken } = req.body;

    // Validação de campos obrigatórios
    if (!name || !email || !message || !subject) {
      return res.status(400).json({ 
        error: 'Campos obrigatórios: nome, email, assunto e mensagem' 
      });
    }

    // Verificar reCAPTCHA
    if (!await verifyRecaptcha(recaptchaToken)) {
      return res.status(400).json({ 
        error: 'Verificação reCAPTCHA falhou. Tente novamente.' 
      });
    }

    // Sanitizar dados
    const sanitizedData = {
      name: sanitizeInput(name),
      email: sanitizeInput(email),
      phone: sanitizeInput(phone || ''),
      subject: sanitizeInput(subject),
      message: sanitizeInput(message),
    };

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(sanitizedData.email)) {
      return res.status(400).json({ error: 'Email inválido' });
    }

    // Enviar email (placeholder - implementar com serviço real)
    console.log('📧 Novo contato recebido:', {
      ...sanitizedData,
      ip: clientIp,
      timestamp: new Date().toISOString(),
    });

    // Simular envio de email
    // TODO: Implementar com Resend, SendGrid ou Nodemailer
    
    return res.status(200).json({ 
      success: true,
      message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.' 
    });

  } catch (error) {
    console.error('Erro no endpoint de contato:', error);
    return res.status(500).json({ 
      error: 'Erro interno do servidor. Tente novamente mais tarde.' 
    });
  }
}