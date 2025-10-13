# Guia de Tokens Visuais - Tuggi Design System

## Visão Geral

O sistema de tokens visuais da Tuggi foi criado para garantir consistência, escalabilidade e manutenibilidade do design. Todos os tokens são definidos como variáveis CSS customizadas e podem ser facilmente modificados para adaptar o tema.

## Cores

### Paleta Primária
```css
--tuggi-primary: #00A8E8;        /* Azul principal */
--tuggi-primary-dark: #0088C7;   /* Azul escuro */
--tuggi-primary-light: #33B9EB;  /* Azul claro */
```

### Paleta Secundária
```css
--tuggi-secondary: #FF6B35;        /* Laranja principal */
--tuggi-secondary-dark: #E55A2B;   /* Laranja escuro */
--tuggi-secondary-light: #FF8A5C;  /* Laranja claro */
```

### Escala de Cores
Cada cor principal tem uma escala de 50 a 900:
- **50-100:** Tons muito claros (backgrounds)
- **200-300:** Tons claros (bordas, hover states)
- **400-500:** Tons médios (cores principais)
- **600-700:** Tons escuros (texto, hover states)
- **800-900:** Tons muito escuros (texto principal)

### Cores Semânticas
```css
--success: #10B981;    /* Verde para sucesso */
--warning: #F59E0B;    /* Amarelo para avisos */
--error: #EF4444;      /* Vermelho para erros */
--info: #3B82F6;       /* Azul para informações */
```

### Uso das Cores
```css
/* Texto */
.text-primary { color: var(--tuggi-primary); }
.text-secondary { color: var(--tuggi-secondary); }

/* Background */
.bg-primary { background-color: var(--tuggi-primary); }
.bg-secondary { background-color: var(--tuggi-secondary); }

/* Bordas */
.border-primary { border-color: var(--tuggi-primary); }
.border-secondary { border-color: var(--tuggi-secondary); }
```

## Tipografia

### Famílias de Fonte
```css
--font-primary: 'Inter', system-ui, sans-serif;  /* Fonte principal */
--font-mono: 'JetBrains Mono', monospace;        /* Fonte monospace */
```

### Tamanhos de Fonte
```css
--text-xs: 0.75rem;    /* 12px - Texto muito pequeno */
--text-sm: 0.875rem;   /* 14px - Texto pequeno */
--text-base: 1rem;     /* 16px - Texto base */
--text-lg: 1.125rem;   /* 18px - Texto grande */
--text-xl: 1.25rem;    /* 20px - Texto extra grande */
--text-2xl: 1.5rem;    /* 24px - Títulos pequenos */
--text-3xl: 1.875rem;  /* 30px - Títulos médios */
--text-4xl: 2.25rem;   /* 36px - Títulos grandes */
--text-5xl: 3rem;      /* 48px - Títulos extra grandes */
--text-6xl: 3.75rem;   /* 60px - Títulos hero */
```

### Pesos de Fonte
```css
--font-thin: 100;
--font-extralight: 200;
--font-light: 300;
--font-normal: 400;    /* Peso normal */
--font-medium: 500;    /* Peso médio */
--font-semibold: 600;  /* Semi-negrito */
--font-bold: 700;      /* Negrito */
--font-extrabold: 800;
--font-black: 900;
```

### Altura de Linha
```css
--leading-none: 1;      /* Sem espaçamento */
--leading-tight: 1.25;  /* Apertado */
--leading-snug: 1.375;  /* Confortável */
--leading-normal: 1.5;  /* Normal */
--leading-relaxed: 1.625; /* Relaxado */
--leading-loose: 2;     /* Solto */
```

### Uso da Tipografia
```css
/* Títulos */
.heading-1 {
  font-size: var(--text-5xl);
  font-weight: var(--font-bold);
  line-height: var(--leading-tight);
}

.heading-2 {
  font-size: var(--text-4xl);
  font-weight: var(--font-semibold);
  line-height: var(--leading-tight);
}

/* Texto do corpo */
.body-text {
  font-size: var(--text-base);
  font-weight: var(--font-normal);
  line-height: var(--leading-relaxed);
}

/* Texto pequeno */
.caption {
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  line-height: var(--leading-normal);
}
```

## Espaçamento

### Unidade Base
```css
--space-unit: 0.25rem; /* 4px - Unidade base */
```

### Escala de Espaçamento
```css
--space-0: 0;           /* 0px */
--space-1: 0.25rem;     /* 4px */
--space-2: 0.5rem;      /* 8px */
--space-3: 0.75rem;     /* 12px */
--space-4: 1rem;        /* 16px */
--space-5: 1.25rem;     /* 20px */
--space-6: 1.5rem;      /* 24px */
--space-8: 2rem;        /* 32px */
--space-10: 2.5rem;     /* 40px */
--space-12: 3rem;       /* 48px */
--space-16: 4rem;       /* 64px */
--space-20: 5rem;       /* 80px */
--space-24: 6rem;       /* 96px */
--space-32: 8rem;       /* 128px */
```

### Uso do Espaçamento
```css
/* Padding */
.p-4 { padding: var(--space-4); }
.px-6 { padding-left: var(--space-6); padding-right: var(--space-6); }
.py-8 { padding-top: var(--space-8); padding-bottom: var(--space-8); }

/* Margin */
.m-4 { margin: var(--space-4); }
.mx-auto { margin-left: auto; margin-right: auto; }
.my-12 { margin-top: var(--space-12); margin-bottom: var(--space-12); }

/* Gap (para flexbox/grid) */
.gap-4 { gap: var(--space-4); }
.gap-x-6 { column-gap: var(--space-6); }
.gap-y-8 { row-gap: var(--space-8); }
```

## Bordas e Raios

### Raios de Borda
```css
--radius-none: 0;
--radius-sm: 0.125rem;   /* 2px */
--radius-base: 0.25rem;  /* 4px */
--radius-md: 0.375rem;   /* 6px */
--radius-lg: 0.5rem;     /* 8px */
--radius-xl: 0.75rem;    /* 12px */
--radius-2xl: 1rem;      /* 16px */
--radius-3xl: 1.5rem;    /* 24px */
--radius-full: 9999px;   /* Círculo */
```

### Uso dos Raios
```css
.rounded-sm { border-radius: var(--radius-sm); }
.rounded-lg { border-radius: var(--radius-lg); }
.rounded-xl { border-radius: var(--radius-xl); }
.rounded-full { border-radius: var(--radius-full); }
```

## Sombras

### Escala de Sombras
```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-base: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
--shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
```

### Uso das Sombras
```css
.shadow-sm { box-shadow: var(--shadow-sm); }
.shadow-md { box-shadow: var(--shadow-md); }
.shadow-lg { box-shadow: var(--shadow-lg); }
.shadow-xl { box-shadow: var(--shadow-xl); }
```

## Gradientes

### Gradientes Predefinidos
```css
--gradient-primary: linear-gradient(135deg, var(--tuggi-primary) 0%, var(--tuggi-primary-dark) 100%);
--gradient-secondary: linear-gradient(135deg, var(--tuggi-secondary) 0%, var(--tuggi-secondary-dark) 100%);
--gradient-hero: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
--gradient-ocean: linear-gradient(135deg, var(--tuggi-primary) 0%, var(--tuggi-secondary) 100%);
--gradient-subtle: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
```

### Uso dos Gradientes
```css
.gradient-primary { background: var(--gradient-primary); }
.gradient-secondary { background: var(--gradient-secondary); }
.gradient-hero { background: var(--gradient-hero); }
.gradient-ocean { background: var(--gradient-ocean); }
.gradient-subtle { background: var(--gradient-subtle); }
```

## Transições

### Transições Predefinidas
```css
--transition-all: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-colors: color 150ms cubic-bezier(0.4, 0, 0.2, 1), background-color 150ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-opacity: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-transform: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
```

### Uso das Transições
```css
.transition-all { transition: var(--transition-all); }
.transition-colors { transition: var(--transition-colors); }
.transition-opacity { transition: var(--transition-opacity); }
.transition-transform { transition: var(--transition-transform); }
```

## Z-Index

### Escala de Z-Index
```css
--z-0: 0;
--z-10: 10;
--z-20: 20;
--z-30: 30;
--z-40: 40;
--z-50: 50;
--z-auto: auto;
```

### Uso do Z-Index
```css
.z-10 { z-index: var(--z-10); }
.z-20 { z-index: var(--z-20); }
.z-30 { z-index: var(--z-30); }
.z-50 { z-index: var(--z-50); }
```

## Breakpoints

### Breakpoints Responsivos
```css
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;
--breakpoint-2xl: 1536px;
```

### Uso dos Breakpoints
```css
/* Mobile First */
.container {
  width: 100%;
  padding: var(--space-4);
}

@media (min-width: 768px) {
  .container {
    max-width: var(--breakpoint-md);
    margin: 0 auto;
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: var(--breakpoint-lg);
  }
}
```

## Acessibilidade

### Estilos de Foco
```css
--focus-ring: 0 0 0 2px var(--tuggi-primary-50), 0 0 0 4px var(--tuggi-primary);
--focus-ring-offset: 0 0 0 2px var(--tuggi-primary-50), 0 0 0 4px var(--tuggi-primary), 0 0 0 6px var(--neutral-50);
```

### Uso dos Estilos de Foco
```css
.focus-ring {
  outline: none;
  box-shadow: var(--focus-ring);
}

.focus-ring-offset {
  outline: none;
  box-shadow: var(--focus-ring-offset);
}
```

## Modo Escuro

### Suporte ao Modo Escuro
```css
@media (prefers-color-scheme: dark) {
  :root {
    --neutral-50: #171717;
    --neutral-100: #262626;
    --neutral-200: #404040;
    /* ... outras cores ajustadas */
  }
}
```

## Alto Contraste

### Suporte ao Alto Contraste
```css
@media (prefers-contrast: high) {
  :root {
    --tuggi-primary: #0056b3;
    --tuggi-secondary: #cc5500;
    --neutral-600: #000000;
    /* ... cores com maior contraste */
  }
}
```

## Movimento Reduzido

### Suporte ao Movimento Reduzido
```css
@media (prefers-reduced-motion: reduce) {
  :root {
    --transition-all: none;
    --transition-colors: none;
    --transition-opacity: none;
    --transition-transform: none;
  }
}
```

## Exemplos de Uso

### Botão Primário
```css
.btn-primary {
  background: var(--gradient-primary);
  color: white;
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-lg);
  font-weight: var(--font-semibold);
  font-size: var(--text-base);
  transition: var(--transition-all);
  box-shadow: var(--shadow-sm);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.btn-primary:focus {
  outline: none;
  box-shadow: var(--focus-ring);
}
```

### Card
```css
.card {
  background: white;
  border-radius: var(--radius-xl);
  padding: var(--space-6);
  box-shadow: var(--shadow-base);
  transition: var(--transition-all);
}

.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-4px);
}
```

### Container
```css
.container {
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: 0 var(--space-4);
}

@media (min-width: 768px) {
  .container {
    padding: 0 var(--space-6);
  }
}

@media (min-width: 1024px) {
  .container {
    padding: 0 var(--space-8);
  }
}
```

## Manutenção

### Adicionando Novos Tokens
1. Defina a variável CSS em `:root`
2. Crie classes utilitárias se necessário
3. Documente o uso no guia
4. Teste em diferentes dispositivos e modos

### Modificando Tokens Existentes
1. Altere apenas a variável CSS
2. Teste a consistência visual
3. Verifique acessibilidade
4. Atualize a documentação

---

**Objetivo:** Sistema de design consistente, escalável e acessível que facilita o desenvolvimento e manutenção da interface Tuggi.


