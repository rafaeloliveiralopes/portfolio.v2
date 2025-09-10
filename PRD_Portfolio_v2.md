# PRD - Portfolio.v2

## Product Requirements Document

---

## 1. Visão Geral do Produto

### 1.1 Contexto e Propósito

O Portfolio.v2 é uma landing page profissional desenvolvida para apresentar serviços de desenvolvimento web, capturar leads qualificados e demonstrar expertise através de um portfólio de projetos. O produto visa aumentar a conversão de visitantes em clientes potenciais e estabelecer credibilidade profissional no mercado de desenvolvimento web.

### 1.2 Objetivo do Produto

- **Primário**: Capturar leads qualificados através de formulário de contato
- **Secundário**: Demonstrar competências técnicas através do portfólio
- **Terciário**: Estabelecer presença digital profissional otimizada para SEO

### 1.3 Público-Alvo

- **Primário**: Empresas e empreendedores buscando serviços de desenvolvimento web
- **Secundário**: Recrutadores e empresas de tecnologia
- **Terciário**: Colegas desenvolvedores e profissionais da área

---

## 2. Requisitos Funcionais

### 2.1 Funcionalidades Principais

#### 2.1.1 Seção Hero/Apresentação

- **RF001**: Exibir apresentação pessoal com nome, título e call-to-action
- **RF002**: Incluir animações Lottie para engagement visual
- **RF003**: Implementar navegação responsiva com menu collapse

#### 2.1.2 Seção de Serviços

- **RF004**: Apresentar 3 categorias principais de serviços:
  - Desenvolvimento Web
  - SEO e Otimização
  - Chatbots e Automação
- **RF005**: Cada serviço deve ter página dedicada com detalhes
- **RF006**: Incluir CTAs direcionando para formulário de contato

#### 2.1.3 Portfólio de Projetos

- **RF007**: Exibir projetos carregados dinamicamente de `projects.json`
- **RF008**: Mostrar para cada projeto:
  - Título e descrição
  - Stack tecnológica utilizada
  - Imagem de preview/mockup
  - Link para visualização (quando disponível)
- **RF009**: Implementar layout responsivo em grid/cards

#### 2.1.4 Seção Sobre Mim

- **RF010**: Apresentar informações pessoais e profissionais
- **RF011**: Destacar competências técnicas e experiência
- **RF012**: Incluir componente de tecnologias dominadas

#### 2.1.5 Formulário de Contato

- **RF013**: Capturar informações essenciais:
  - Nome completo
  - Email
  - Tipo de serviço de interesse
  - Mensagem/detalhes do projeto
- **RF014**: Validação client-side dos campos obrigatórios
- **RF015**: Envio via API interna para processamento
- **RF016**: Feedback visual de sucesso/erro no envio
- **RF017**: Integração com Nodemailer para envio de emails

### 2.2 Funcionalidades de Sistema

#### 2.2.1 API de Email

- **RF018**: Endpoint `/api/sendEmail` para processar formulários
- **RF019**: Validação server-side dos dados recebidos
- **RF020**: Configuração SMTP via variáveis de ambiente
- **RF021**: Log de tentativas de envio para debug

#### 2.2.2 Navegação e Roteamento

- **RF022**: Implementar roteamento Next.js para páginas de serviços
- **RF023**: Navbar fixo com links para seções internas
- **RF024**: Footer com informações de contato e links sociais

---

## 3. Requisitos Não-Funcionais

### 3.1 Performance

- **RNF001**: Tempo de carregamento inicial < 3 segundos
- **RNF002**: Core Web Vitals otimizados (LCP, FID, CLS)
- **RNF003**: Otimização de imagens automática via Next.js
- **RNF004**: Server-Side Rendering para melhor SEO

### 3.2 Responsividade

- **RNF005**: Layout adaptativo para dispositivos:
  - Desktop (1920px+)
  - Tablet (768px - 1024px)
  - Mobile (320px - 767px)
- **RNF006**: Touch-friendly em dispositivos móveis
- **RNF007**: Teste em principais navegadores (Chrome, Firefox, Safari, Edge)

### 3.3 SEO e Acessibilidade

- **RNF008**: Meta tags otimizadas para cada página
- **RNF009**: Estrutura semântica HTML5
- **RNF010**: Schema markup para rich snippets
- **RNF011**: Texto alternativo em todas as imagens
- **RNF012**: Contraste mínimo WCAG AA

### 3.4 Segurança

- **RNF013**: Sanitização de inputs no formulário
- **RNF014**: Rate limiting no endpoint de email
- **RNF015**: Headers de segurança configurados
- **RNF016**: Validação CSRF nos formulários

---

## 4. Especificações Técnicas

### 4.1 Arquitetura

- **Framework**: Next.js 14.2.14 (App Router)
- **Linguagem**: TypeScript 5.4.5
- **Estilização**: CSS Modules + Bootstrap 5.3.3
- **Estado**: React hooks nativos (sem state management)

### 4.2 Stack Tecnológica

#### Frontend

- React 18
- Next.js 14 (SSR/SSG)
- TypeScript
- Bootstrap + react-bootstrap
- Lottie React (animações)
- React Toastify (notificações)

#### Backend/API

- Next.js API Routes
- Nodemailer (envio de emails)

#### DevOps e Qualidade

- ESLint + Prettier
- Husky + lint-staged
- Git hooks para qualidade de código

### 4.3 Estrutura de Arquivos

```
src/
├── app/                 # App Router (Next.js 13+)
├── components/          # Componentes reutilizáveis
├── pages/              # Páginas e API routes
├── data/               # Dados estáticos (projects.json)
└── styles/             # CSS Modules
```

---

## 5. Critérios de Aceitação

### 5.1 Funcionalidades Core

- [ ] Landing page carrega em < 3 segundos
- [ ] Formulário de contato funciona e envia emails
- [ ] Portfólio exibe projetos dinamicamente
- [ ] Navegação responsiva em todos os dispositivos
- [ ] SEO básico implementado (meta tags, estrutura)

### 5.2 Qualidade

- [ ] Todos os componentes têm tipos TypeScript
- [ ] Código passa em linting (ESLint + Prettier)
- [ ] Layout responsivo testado em 3+ dispositivos
- [ ] Formulário validado client e server-side

### 5.3 Performance

- [ ] Lighthouse Score > 90 (Performance, SEO, Accessibility)
- [ ] Imagens otimizadas e com lazy loading
- [ ] Bundle JavaScript < 200KB

---

## 6. Roadmap e Fases

### Fase 1 - MVP (Completa)

- ✅ Estrutura básica da landing page
- ✅ Seções principais (Hero, Sobre, Portfólio, Contato)
- ✅ Formulário de contato funcional
- ✅ Design responsivo

### Fase 2 - Melhorias (Futuro)

- [ ] Sistema de CMS para gerenciar projetos
- [ ] Analytics e tracking de conversões
- [ ] Testes A/B no formulário
- [ ] Blog/seção de artigos

### Fase 3 - Otimizações (Futuro)

- [ ] PWA capabilities
- [ ] Múltiplos idiomas
- [ ] Sistema de agendamento
- [ ] Integração com CRM

---

## 7. Métricas de Sucesso

### 7.1 Métricas Técnicas

- **Performance**: Lighthouse Score > 90
- **SEO**: Ranking nas primeiras posições para palavras-chave alvo
- **Uptime**: 99.9% de disponibilidade

### 7.2 Métricas de Negócio

- **Conversão**: Taxa de preenchimento do formulário > 5%
- **Engagement**: Tempo médio na página > 2 minutos
- **Leads**: Qualidade dos leads capturados

---

## 8. Riscos e Mitigações

### 8.1 Riscos Técnicos

- **Email não enviado**: Configurar backup SMTP e monitoring
- **Performance degradada**: Implementar monitoring contínuo
- **Vulnerabilidades**: Auditorias regulares de dependências

### 8.2 Riscos de Negócio

- **Baixa conversão**: Implementar testes A/B no formulário
- **Concorrência**: Diferenciação através de casos de sucesso
- **SEO**: Estratégia de conteúdo e link building

---

## 9. Dependências e Integrações

### 9.1 Dependências Críticas

- Provedor SMTP para envio de emails
- Hospedagem (Vercel) para deploy
- Domínio personalizado

### 9.2 Integrações Futuras

- Google Analytics
- Google Tag Manager
- CRM (HubSpot, Pipedrive)
- Sistema de pagamento

---

_Documento criado em: Janeiro 2025_  
_Versão: 1.0_  
_Status: Produto em Produção_
