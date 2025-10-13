# 📁 Estrutura do Projeto Tuggi Drive B2B

## 🏗️ Organização Geral

```
/
├── 📁 api/                    # APIs e endpoints
│   ├── deletion-request.js
│   └── leads.js
├── 📄 postcss.config.js        # Configuração PostCSS
├── 📄 tailwind.config.js       # Configuração Tailwind CSS
├── 📁 database/               # Scripts SQL e migrações
│   ├── create_simple_table.sql
│   ├── insert_sample_data.sql
│   ├── migrate_leads_table.sql
│   └── supabase_drivers_table.sql
├── 📁 docs/                   # Documentação completa
│   ├── ab-tests.md
│   ├── analytics-plan.md
│   ├── COLOR_GUIDE.md
│   ├── DESIGN_SYSTEM_ANALYSIS.md
│   ├── DESIGN_SYSTEM_GUIDE.md
│   ├── DATA_DELETION_INTEGRATION.md
│   ├── IMPLEMENTATION_SUMMARY.md
│   ├── MOBILE_VALIDATION_CHECKLIST.md
│   ├── README_DATA_INSERTION.md
│   ├── README_MIGRATION.md
│   └── [outros arquivos de documentação]
├── 📁 scripts/                # Scripts utilitários
│   ├── insert_data_via_api.cjs
│   └── test-seo.js
├── 📁 server/                 # Servidor backend
│   ├── email-service.js
│   ├── package.json
│   └── README.md
├── 📁 src/                    # Código fonte principal
│   ├── 📁 components/         # Componentes React
│   │   ├── 📁 ui/            # Componentes de UI básicos
│   │   ├── 📁 layout/        # Componentes de layout
│   │   ├── 📁 forms/         # Componentes de formulários
│   │   ├── 📁 features/      # Funcionalidades específicas
│   │   └── 📁 sections/      # Seções da home page
│   ├── 📁 pages/             # Páginas completas
│   │   └── 📁 legal/         # Páginas legais
│   ├── 📁 hooks/             # Custom hooks
│   ├── 📁 utils/             # Funções utilitárias
│   ├── 📁 types/             # Definições TypeScript
│   ├── 📁 data/              # Dados estáticos
│   ├── 📁 lib/               # Bibliotecas e configurações
│   ├── 📁 examples/          # Exemplos de uso
│   └── 📁 styles/            # Estilos globais
├── 📁 public/                 # Assets estáticos
├── 📁 dist/                   # Build de produção (gerado)
└── 📄 [arquivos de configuração principais]
```

## 🎯 Princípios de Organização

### **1. Separação por Responsabilidade**
- **`components/`**: Componentes React organizados por tipo
- **`pages/`**: Páginas completas da aplicação
- **`utils/`**: Funções utilitárias reutilizáveis
- **`hooks/`**: Custom hooks do React

### **2. Agrupamento por Domínio**
- **`ui/`**: Componentes básicos de interface
- **`layout/`**: Componentes de estrutura da página
- **`forms/`**: Componentes de formulários
- **`features/`**: Funcionalidades específicas
- **`sections/`**: Seções da home page

### **3. Organização de Recursos**
- **`docs/`**: Toda documentação centralizada
- **`database/`**: Scripts SQL organizados
- **`scripts/`**: Scripts utilitários
- **`config/`**: Configurações específicas

## 📋 Convenções de Nomenclatura

### **Arquivos**
- **Componentes**: `PascalCase.tsx` (ex: `HeroV2.tsx`)
- **Hooks**: `camelCase.ts` (ex: `useAnalytics.ts`)
- **Utilitários**: `camelCase.ts` (ex: `designSystem.ts`)
- **Páginas**: `PascalCase.tsx` (ex: `HomeV2.tsx`)

### **Pastas**
- **Componentes**: `kebab-case` (ex: `audio-samples`)
- **Páginas**: `kebab-case` (ex: `legal`)
- **Recursos**: `kebab-case` (ex: `design-system`)

## 🔧 Configurações

### **Vite**
- `vite.config.ts` - Configuração principal do Vite
- `tsconfig.json` - Configuração TypeScript

### **Tailwind CSS**
- `tailwind.config.js` - Configuração do Tailwind
- `postcss.config.js` - Configuração do PostCSS

### **ESLint**
- `eslint.config.js` - Configuração do ESLint

## 📚 Documentação

### **Design System**
- `docs/DESIGN_SYSTEM_GUIDE.md` - Guia completo do design system
- `docs/DESIGN_SYSTEM_ANALYSIS.md` - Análise e implementação
- `docs/COLOR_GUIDE.md` - Guia de cores

### **Desenvolvimento**
- `docs/IMPLEMENTATION_SUMMARY.md` - Resumo das implementações
- `docs/MOBILE_VALIDATION_CHECKLIST.md` - Checklist de validação mobile
- `docs/README_DATA_INSERTION.md` - Guia de inserção de dados
- `docs/README_MIGRATION.md` - Guia de migração

### **Análise e Planejamento**
- `docs/analytics-plan.md` - Plano de analytics
- `docs/performance-a11y-seo.md` - Performance, acessibilidade e SEO
- `docs/sitemap-v2.md` - Mapa do site

## 🚀 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Servidor de desenvolvimento
npm run build        # Build de produção
npm run preview      # Preview do build

# Qualidade de código
npm run lint         # Verificar código
npm run lint:fix     # Corrigir problemas de lint
```

## 📦 Dependências Principais

- **React 18** - Framework principal
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework CSS
- **Framer Motion** - Animações
- **Lucide React** - Ícones

## 🔄 Fluxo de Desenvolvimento

1. **Desenvolvimento**: `npm run dev`
2. **Testes**: Verificar no navegador
3. **Lint**: `npm run lint`
4. **Build**: `npm run build`
5. **Deploy**: Upload da pasta `dist/`

## 📝 Notas Importantes

- A pasta `dist/` é gerada automaticamente e não deve ser editada
- A pasta `public/` contém assets que são copiados para `dist/`
- Scripts SQL estão organizados em `database/`
- Documentação está centralizada em `docs/`
- Configurações específicas estão em `config/`
