
# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Versionamento Semântico](https://semver.org/lang/pt-BR/).

## [2025-06-03] - Versão 1.1.0

### Corrigido
- ✅ Corrigido bug do botão flutuante do WhatsApp que redirecionava para página 404
- ✅ Link do WhatsApp convertido de componente `<Link>` para `<a>` com `target="_blank"`
- ✅ URL do WhatsApp corrigida com código do país brasileiro (+55)
- ✅ Cores de texto ajustadas para melhor contraste no tema escuro
- ✅ Responsividade verificada em dispositivos móveis, tablet e desktop

### Alterado
- 🎨 Tema escuro aplicado como padrão permanente
- 🎨 Cores de fundo, textos e botões ajustadas para tema escuro
- 🎨 Melhorada legibilidade dos textos no Hero section
- 📱 Botão do WhatsApp otimizado para abertura em dispositivos móveis

### Adicionado
- 📝 Sistema de registro de erros e bugs implementado (`errorLogger.ts`)
- 📝 Mensagem pré-preenchida no WhatsApp com opções de consulta
- 📝 Logs informativos no console para debugging
- 📝 Credits dos desenvolvedores no footer (@trinitytecnlogias e @schjneiderr)
- 📋 Este arquivo CHANGELOG.md para rastreamento de alterações

### Verificado
- ✅ Navegação entre todas as páginas funcionando corretamente
- ✅ Links externos abrindo em nova aba
- ✅ Responsividade em diferentes tamanhos de tela
- ✅ Console do navegador sem erros críticos
- ✅ Performance geral do site mantida

### Técnico
- 🛠️ Implementado `withErrorLogging` para wrapping de funções propensas a erro
- 🛠️ Sistema de armazenamento de logs no localStorage
- 🛠️ Utilidades para limpeza e recuperação de logs
- 🛠️ Logs categorizados por nível (error, warning, info)

---

## [Versão Anterior] - Baseline

### Inicial
- 🚀 Site "Corpo em Equilíbrio Digital" lançado
- 👩‍⚕️ Seções: Hero, Sobre, Especialidades, Blog, Contato
- 📱 Design responsivo com Tailwind CSS
- 🌿 Tema com elementos naturais e plantas decorativas
- 📞 Integração básica com WhatsApp

---

## Template de Registro para Próximas Atualizações

```markdown
## [YYYY-MM-DD] - Versão X.X.X

### Corrigido
- Descrição do bug corrigido

### Alterado
- Descrição da mudança

### Adicionado
- Nova funcionalidade

### Removido
- Funcionalidade removida

### Técnico
- Mudanças técnicas internas
```

---

**Legendas:**
- ✅ Corrigido/Verificado
- 🎨 Mudança visual/estética  
- 📱 Mobile/Responsividade
- 📝 Documentação/Logs
- 🛠️ Técnico/Infraestrutura
- 🚀 Nova funcionalidade
- 📞 Integração externa
