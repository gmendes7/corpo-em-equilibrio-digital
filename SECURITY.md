# Guia de Configuração de Segurança - Corpo em Equilíbrio

## 🛡️ Medidas de Segurança Implementadas

### ✅ 1. API Segura (`/api/send-contact`)
- ✅ Validação de método e origem
- ✅ Rate limiting (5 tentativas por minuto)
- ✅ Sanitização de inputs
- ✅ Verificação reCAPTCHA
- ✅ Headers de segurança
- ✅ CORS restritivo

### ✅ 2. Formulário de Contato Protegido
- ✅ Validação de campos em tempo real
- ✅ Detecção de conteúdo malicioso
- ✅ Limite de caracteres
- ✅ Feedback visual de segurança
- ✅ Rate limiting no frontend

### ✅ 3. Middleware de Segurança
- ✅ Headers de proteção XSS
- ✅ Content Security Policy (CSP)
- ✅ HTTP Strict Transport Security (HSTS)
- ✅ Proteção contra clickjacking

### ✅ 4. Utilidades de Segurança
- ✅ Funções de sanitização
- ✅ Validação de email e telefone
- ✅ Detecção de injection attacks
- ✅ Rate limiting utilities

## 🔧 Configurações Necessárias

### Para ativar o reCAPTCHA:
1. Vá para [Google reCAPTCHA](https://www.google.com/recaptcha/admin)
2. Registre o site com o domínio
3. Configure as variáveis de ambiente:
   ```
   RECAPTCHA_SITE_KEY=sua_chave_site_aqui
   RECAPTCHA_SECRET_KEY=sua_chave_secreta_aqui
   ```
4. Substitua '6LdYourSiteKey' no código pelo seu site key

### Para email (implementar posteriormente):
```
MAIL_USER=seu_email@gmail.com
MAIL_PASS=sua_senha_app_gmail
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
```

## 🚨 Alertas de Segurança
- ✅ Formulário com proteção anti-spam
- ✅ Rate limiting ativo
- ✅ Sanitização automática
- ✅ Headers de segurança configurados
- ✅ HTTPS obrigatório via Vercel

## 📊 Monitoramento
- Console logs para tentativas suspeitas
- Rate limiting tracking
- Validação de input em tempo real
- Feedback imediato para o usuário

## 🔒 Próximos Passos
1. Configurar reCAPTCHA com chaves reais
2. Implementar envio de email via Resend/SendGrid
3. Adicionar monitoring com Vercel Analytics
4. Implementar backup automático dos dados