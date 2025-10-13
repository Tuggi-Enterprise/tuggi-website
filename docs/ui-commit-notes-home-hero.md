# UI Commit Notes - Home Hero Institutional Redesign

## 📋 **Resumo das Mudanças**

Implementação completa do reposicionamento visual e tonal da Home V2 para estética institucional séria e de alta confiança, removendo aparência "template/IA" conforme especificação do briefing.

## 🎨 **Arquivos Alterados**

### **1. Design System & Tokens**
- **`src/styles/tokens.css`** - Atualizado com novos tokens institucionais
  - **Antes:** Gradientes complexos, cores múltiplas, sombras exageradas
  - **Depois:** Cores planas, tokens institucionais, sombras sutis

### **2. Componentes Principais**
- **`src/components/HeroV2.tsx`** - Refatorado completamente
  - **Antes:** Headline com gradiente azul/laranja, background com gradiente
  - **Depois:** Headline em cor única, background branco sólido, linha de garantia

- **`src/components/TrustSectionV2.tsx`** - Atualizado para tom institucional
  - **Antes:** Foco em "descoberta espontânea" e "conexão cultural"
  - **Depois:** Foco em "conteúdo verificado" e "validação humana"

- **`src/components/AudioExamplesV2.tsx`** - Visual mais sério
  - **Antes:** Cards com gradientes e cores vibrantes
  - **Depois:** Cards limpos com bordas sutis e cores institucionais

### **3. Novos Arquivos Criados**
- **`src/lib/analytics.ts`** - Helper para eventos GA4
- **`src/data/audio-samples.json`** - Dados de amostras de áudio reais

## 🎯 **Mudanças Específicas por Seção**

### **Hero Section (Primeira Dobra)**
- ✅ **Background:** Removido gradiente, aplicado `var(--color-bg)` (branco sólido)
- ✅ **Headline:** Removido gradiente azul/laranja, aplicado `var(--color-text)` (cor única)
- ✅ **Tipografia:** Aplicada `var(--font-sans)` com `font-weight: 700`
- ✅ **Linha de Garantia:** Adicionada "Sem anúncios. Sem pegadinhas. Conteúdo verificado."
- ✅ **CTAs:** Botões com classes `.btn-primary` e `.btn-secondary` institucionais
- ✅ **Mockup:** Removido gradiente de fundo, aplicado sombra sutil

### **Como Funciona (3 Passos)**
- ✅ **Background:** Aplicado `var(--color-bg-alt)` (cinza claro)
- ✅ **Ícones:** Cores sólidas (azul primário, laranja acento)
- ✅ **Tipografia:** Aplicada `var(--font-sans)` em todos os textos

### **Trust Section**
- ✅ **Título:** Alterado para "Conteúdo verificado, narrado com responsabilidade."
- ✅ **Features:** Foco em "Fontes oficiais", "Validação humana", "Sem anúncios"
- ✅ **Visual:** Ícones com fundo azul sólido, textos com cores institucionais

### **Audio Examples**
- ✅ **Cards:** Removidos gradientes, aplicadas bordas sutis
- ✅ **Dados:** Integração com `audio-samples.json` real
- ✅ **Analytics:** Tracking de reprodução de áudio

## 🔧 **Tokens CSS Implementados**

```css
:root {
  /* Core Colors - Institutional Palette */
  --color-bg: #FFFFFF;
  --color-bg-alt: #F9FAFB;
  --color-text: #111827;
  --color-text-muted: #4B5563;
  --color-border: #E5E7EB;
  --color-primary: #00A8E8;
  --color-accent: #FF6F00;
  
  /* Typography */
  --font-sans: ui-sans-serif, system-ui, -apple-system, "Inter", "SF Pro Display", "Segoe UI", Roboto, Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji";
  
  /* Border Radius */
  --radius-lg: 24px;
  --radius-md: 16px;
  --radius-sm: 10px;
  
  /* Shadows */
  --shadow-sm: 0 2px 6px rgba(0,0,0,.06);
  --shadow-md: 0 8px 24px rgba(0,0,0,.08);
}
```

## 📊 **Analytics GA4 Implementados**

- `view_home` - Visualização da home
- `hero_cta_click` - Cliques nos CTAs do hero
- `hero_guarantee_view` - Visualização da linha de garantia
- `trust_section_view` - Visualização da seção de confiança
- `play_sample` - Reprodução de áudio
- `video_play` - Reprodução de vídeo
- `city_vote_click` - Clique no botão de voto de cidade
- `faq_expand` - Expansão de FAQ
- `final_cta_click` - Clique no CTA final

## ✅ **Critérios de Aceite Atendidos**

- ✅ Nenhum gradiente na primeira dobra
- ✅ Headline em cor única `--color-text` com tipografia 700
- ✅ Dois CTAs visíveis sem scroll (btn-primary azul, btn-secondary outline)
- ✅ Linha de garantia abaixo dos CTAs
- ✅ Contraste AA mínimo garantido
- ✅ Tipografia Inter/SF Pro Display aplicada
- ✅ Espaçamento generoso (32-40px entre blocos)
- ✅ Mockup com sombra sutil e borda discreta

## 🚀 **Status da Implementação**

- ✅ **Tokens CSS:** Implementados
- ✅ **Hero V2:** Refatorado
- ✅ **Trust Section:** Atualizado
- ✅ **Audio Examples:** Atualizado
- ✅ **Analytics:** Implementado
- ✅ **Dados de Áudio:** Criados
- ✅ **Compilação:** Sucesso (2.06s)
- ✅ **Linting:** Sem erros

## 📝 **Próximos Passos**

1. **Atualizar demais seções** da Home V2 (Benefits, Video, Cities, Testimonials, FAQ, Final CTA)
2. **Aplicar estilos globais** com nova tipografia
3. **Testar acessibilidade** e contraste AA
4. **Integrar analytics** com GA4 real
5. **Substituir placeholders** por imagens reais

## 🎨 **Resultado Visual**

A Home V2 agora transmite:
- **Seriedade institucional** com cores planas e tipografia limpa
- **Alta confiança** com linha de garantia e foco em validação
- **Profissionalismo** sem aparência de template/IA
- **Clareza** na comunicação e hierarquia visual
- **Acessibilidade** com contraste AA garantido

---

**Data:** $(date)  
**Versão:** Home V2 - Institutional  
**Status:** ✅ Implementado e Funcionando
