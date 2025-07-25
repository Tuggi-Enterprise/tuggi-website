# 🎨 Guia de Cores da Tuggi - Sistema de Design

## 📋 Visão Geral

Este documento descreve o sistema de cores expandido da Tuggi, incluindo cores semânticas, gradientes expressivos e componentes reutilizáveis.

---

## 🎯 Paleta de Cores

### **Cores Principais**
```css
/* Azul Tuggi - Cor principal */
tuggi-primary: #00A8E8
tuggi-primary-dark: #0088BB
tuggi-primary-light: #33B9ED

/* Laranja Tuggi - Cor secundária */
tuggi-secondary: #FF6F00
tuggi-secondary-dark: #E55A00
tuggi-secondary-light: #FF8533
```

### **Cores Semânticas**
```css
/* Sucesso */
tuggi-success: #10B981
tuggi-success-light: #34D399
tuggi-success-dark: #059669

/* Aviso */
tuggi-warning: #F59E0B
tuggi-warning-light: #FBBF24
tuggi-warning-dark: #D97706

/* Erro */
tuggi-error: #EF4444
tuggi-error-light: #F87171
tuggi-error-dark: #DC2626

/* Informação */
tuggi-info: #3B82F6
tuggi-info-light: #60A5FA
tuggi-info-dark: #2563EB
```

### **Cores de Destaque**
```css
/* Roxo */
tuggi-accent-purple: #8B5CF6
tuggi-accent-purple-light: #A78BFA
tuggi-accent-purple-dark: #7C3AED

/* Verde-azulado */
tuggi-accent-teal: #14B8A6
tuggi-accent-teal-light: #2DD4BF
tuggi-accent-teal-dark: #0D9488

/* Rosa */
tuggi-accent-pink: #EC4899
tuggi-accent-pink-light: #F472B6
tuggi-accent-pink-dark: #DB2777

/* Âmbar */
tuggi-accent-amber: #F59E0B
tuggi-accent-amber-light: #FBBF24
tuggi-accent-amber-dark: #D97706
```

---

## 🌈 Gradientes Expressivos

### **Gradientes Principais**
```css
/* Oceano - Azul para azul escuro */
bg-gradient-ocean: linear-gradient(135deg, #00A8E8 0%, #3B82F6 50%, #1E40AF 100%)

/* Pôr do Sol - Laranja para vermelho */
bg-gradient-sunset: linear-gradient(135deg, #FF6F00 0%, #F59E0B 50%, #DC2626 100%)

/* Floresta - Verde */
bg-gradient-forest: linear-gradient(135deg, #10B981 0%, #059669 50%, #047857 100%)

/* Cósmico - Roxo para rosa */
bg-gradient-cosmic: linear-gradient(135deg, #8B5CF6 0%, #EC4899 50%, #F59E0B 100%)

/* Aurora - Azul para verde para roxo */
bg-gradient-aurora: linear-gradient(135deg, #00A8E8 0%, #10B981 50%, #8B5CF6 100%)
```

### **Gradientes Sutis**
```css
/* Sutil - Para fundos */
bg-gradient-subtle: linear-gradient(135deg, rgba(0, 168, 232, 0.05) 0%, rgba(255, 111, 0, 0.05) 100%)

/* Hero - Para seção principal */
bg-gradient-hero: linear-gradient(135deg, #F8FAFC 0%, rgba(0, 168, 232, 0.1) 50%, rgba(255, 111, 0, 0.05) 100%)
```

---

## 🧩 Componentes de Cores

### **LoadingSpinner**
```tsx
<LoadingSpinner 
  size="md" 
  variant="primary" 
  className="mx-auto" 
/>
```

**Variantes disponíveis:**
- `primary` - Azul Tuggi
- `success` - Verde
- `warning` - Amarelo
- `error` - Vermelho
- `info` - Azul informativo

**Tamanhos:**
- `sm` - 16px
- `md` - 32px
- `lg` - 48px

### **StatusBadge**
```tsx
<StatusBadge 
  status="success" 
  text="Disponível" 
  size="md" 
/>
```

**Status disponíveis:**
- `success` - Verde com ícone de check
- `warning` - Amarelo com ícone de alerta
- `error` - Vermelho com ícone de erro
- `info` - Azul com ícone de informação
- `pending` - Amarelo com ícone de relógio

**Tamanhos:**
- `sm` - Texto pequeno
- `md` - Texto médio
- `lg` - Texto grande

---

## 🎨 Casos de Uso

### **1. Estados de Interface**
```tsx
// Sucesso
<StatusBadge status="success" text="Download concluído" />

// Aviso
<StatusBadge status="warning" text="Beta em desenvolvimento" />

// Erro
<StatusBadge status="error" text="Erro de conexão" />

// Informação
<StatusBadge status="info" text="Nova funcionalidade" />
```

### **2. Gradientes por Contexto**
```tsx
// Hero Section
<section className="bg-gradient-hero">

// Final CTA
<section className="bg-gradient-ocean">

// Cards de features
<div className="bg-gradient-subtle">

// Elementos ativos
<div className="bg-gradient-aurora">
```

### **3. Loading States**
```tsx
// Loading padrão
<LoadingSpinner variant="primary" />

// Loading de sucesso
<LoadingSpinner variant="success" />

// Loading de erro
<LoadingSpinner variant="error" />
```

---

## 🔧 Implementação

### **Classes CSS Disponíveis**
```css
/* Cores de texto */
.text-tuggi-primary
.text-tuggi-success
.text-tuggi-warning
.text-tuggi-error
.text-tuggi-info

/* Cores de fundo */
.bg-tuggi-primary
.bg-tuggi-success
.bg-tuggi-warning
.bg-tuggi-error
.bg-tuggi-info

/* Gradientes */
.bg-gradient-ocean
.bg-gradient-sunset
.bg-gradient-forest
.bg-gradient-cosmic
.bg-gradient-aurora
.bg-gradient-subtle
.bg-gradient-hero

/* Bordas */
.border-tuggi-primary
.border-tuggi-success
.border-tuggi-warning
.border-tuggi-error
.border-tuggi-info
```

### **Animações**
```css
/* Gradiente animado */
.animate-gradient-shift

/* Pulse lento */
.animate-pulse-slow

/* Bounce lento */
.animate-bounce-slow
```

---

## 📱 Responsividade

### **Mobile First**
- Cores mantêm contraste adequado em telas pequenas
- Gradientes otimizados para performance mobile
- Componentes escalam adequadamente

### **Acessibilidade**
- Contraste WCAG AA garantido
- Suporte para modo escuro (futuro)
- Indicadores visuais para daltônicos

---

## 🚀 Próximos Passos

### **Implementações Futuras**
1. **Modo Escuro**
   - Paleta de cores invertida
   - Gradientes adaptados

2. **Temas Personalizados**
   - Cores baseadas na localização
   - Temas sazonais

3. **Animações Avançadas**
   - Gradientes interativos
   - Transições de cores

4. **Componentes Adicionais**
   - Progress bars coloridos
   - Toast notifications
   - Alertas contextuais

---

## 📊 Métricas de Sucesso

### **Objetivos**
- ✅ Melhor hierarquia visual
- ✅ Feedback claro para usuários
- ✅ Consistência em toda a aplicação
- ✅ Acessibilidade aprimorada
- ✅ Experiência mais expressiva

### **Resultados Esperados**
- Aumento na taxa de engajamento
- Melhor compreensão dos estados
- Redução de erros de usuário
- Feedback positivo sobre design 