
# Changelog - Corpo em Equilíbrio Digital

Todas as mudanças importantes neste projeto serão documentadas neste arquivo.

## [2025-06-04] - Atualização Completa de UX/UI e Acessibilidade

### ✨ Adicionado
- **Sistema completo de tema escuro/claro** com toggle no cabeçalho (ícone lua/sol)
- Persistência da preferência de tema no localStorage
- Suporte automático à preferência do sistema (prefers-color-scheme)
- **Animações das plantas completamente reformuladas** com movimentos suaves e naturais
- Controle avançado de animações com respeito ao prefers-reduced-motion
- Sistema de cores harmonioso conectado com bem-estar e natureza
- **Acessibilidade WCAG AA completa** com contraste mínimo 4.5:1
- Transições suaves entre temas (0.3s ease)
- Efeitos de shimmer e brilho nas plantas
- Estados de foco melhorados para navegação por teclado

### 🎨 Melhorado
- **Paleta de cores otimizada** para ambos os temas:
  - Modo claro: branco/lilás claro, texto roxo escuro, detalhes verdes
  - Modo escuro: roxo quase preto, texto branco/lilás claro, verdes desaturados
- Animações das plantas agora usam keyframes consistentes (2s, 4s, 6s, 8s)
- Movimentos naturais com transform: rotate() e ease-in-out timing
- **Responsividade 100% funcional** em mobile, tablet e desktop
- Navbar com indicador de tema integrado
- Botões com estados hover e focus aprimorados
- Tipografia com melhor hierarquia visual

### 🐞 Corrigido
- Quebras visuais e desalinhamentos em todas as seções
- Animações travadas ou com jitter nas plantas SVG
- Elementos sobrepostos em resoluções menores
- Comportamentos inesperados em links e botões
- Rolagem suave implementada corretamente
- Estados de carregamento otimizados

### 🔧 Técnico
- Código completamente organizado e bem comentado
- Sistema de tema robusto com Context API
- Componente ThemeToggle reutilizável
- CSS otimizado com variáveis dinâmicas
- Performance melhorada com will-change nas animações
- Suporte a high contrast mode
- Scrollbar customizada para ambos os temas

### 🌱 Animações das Plantas
- Movimentos suaves e naturais (leve balanço, flutuação, respiração)
- Keyframes consistentes sem quebras no ciclo
- Diferentes tipos de animação: sway, float, breathe, shimmer
- Delays escalonados para movimento orgânico
- Otimização para dispositivos móveis (durações reduzidas)

### ♿ Acessibilidade
- Contraste de cores WCAG AA completo
- Estados de foco visíveis e consistentes
- Suporte a prefers-reduced-motion
- Suporte a prefers-contrast: high
- Navegação por teclado otimizada
- Labels e descrições apropriadas
- Transições respeitosas para usuários sensíveis a movimento

## [2025-06-04] - Design Profissional Completo (Anterior)

### ✨ Adicionado
- Layout visual totalmente reformulado por equipe profissional de UI/UX
- Tipografia elegante com hierarquia clara de títulos H1-H6
- Sistema de animações suaves e modernas (fade-in, slide-up, hover effects)
- Componentes modernos: cards sofisticados, grids responsivos, sombras elegantes
- Badges e indicadores visuais profissionais
- Estatísticas em tempo real na hero section
- Padrões geométricos de fundo para visual premium
- Sistema de gradientes e efeitos glass
- Barras de rolagem customizadas
- Efeitos de hover em botões com transformações 3D

### 🎨 Melhorado
- Hero section completamente redesenhada com layout profissional
- Componente About reformulado com cards informativos elegantes
- Botões com padding generoso, bordas suaves e animações responsivas
- Espaçamentos e alinhamentos perfeitamente balanceados
- Responsividade otimizada para todos os dispositivos
- Cores e contrastes refinados mantendo a paleta verde-musgo
- Transições e animações mais suaves e profissionais

### 🔧 Técnico
- Código organizado com componentes focados e reutilizáveis
- Classes CSS modulares e bem estruturadas
- Animações otimizadas com performance aprimorada
- Sistema de design consistente com tokens de cores
- Configuração avançada do Tailwind CSS

### 🎯 UX/UI
- Interface mais intuitiva e profissional
- Hierarquia visual clara e acessível
- Microinterações que melhoram a experiência do usuário
- Loading states e feedback visual aprimorados

## [2025-06-03]

### Corrigido
- Corrigido bug do botão flutuante do WhatsApp que levava à página 404
- Corrigido link externo incorreto (`<Link>` substituído por `<a>` com `target="_blank"`)

### Alterado
- Tema branco removido, agora o site usa tema escuro como padrão
- Cores ajustadas para melhorar acessibilidade no tema escuro

### Adicionado
- Sistema de logging de atualizações em tempo real
- Mensagem pré-preenchida no WhatsApp com opções de consulta
- Sistema de registro de erros e bugs no console

### Verificado
- Responsividade em mobile, tablet e desktop
- Navegação entre páginas funcionando sem erros
- Performance e carregamento otimizados
