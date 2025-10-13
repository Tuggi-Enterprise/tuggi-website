# Sitemap v2 - Nova Arquitetura de Páginas

## Princípios da Nova Arquitetura

1. **Foco em conversão** - Páginas que convertem visitantes em usuários
2. **Simplicidade** - Menos páginas, mais impacto
3. **Cultura separada** - Propósito/sobre em página dedicada
4. **Investidores discretos** - Link no footer, sem menu principal
5. **SEO otimizado** - Cada página com propósito claro

## Navegação Principal (Header)

### Menu Principal
- **Home** - Landing page de conversão
- **Quem Somos** - Propósito + Equipe unificados
- **Para Empresas** - B2B landing page
- **Contato** - Formulário de contato

### Seletor de Idioma
- PT (🇧🇷 Português)
- EN (🇺🇸 English) 
- ES (🇪🇸 Español)

## Estrutura de Páginas Proposta

### 1. Home (Landing de Conversão)
**URLs:**
- `/pt/` (Home PT-BR)
- `/en/` (Home EN-US)
- `/es/` (Home ES-ES)

**Objetivo:** Converter visitantes em usuários do app
**Foco:** Download iOS + Beta Android + Vote em cidades
**Seções:** 8 seções otimizadas para conversão (Home v2)

### 2. Quem Somos (Propósito + Equipe)
**URLs:**
- `/pt/quem-somos` (Quem Somos PT-BR)
- `/en/about-us` (About Us EN-US)
- `/es/quienes-somos` (Quiénes Somos ES-ES)

**Objetivo:** Construir confiança e explicar o "porquê"
**Conteúdo:**
- Missão e visão da Tuggi
- História da empresa
- Equipe (fotos + perfis)
- Valores e cultura
- Parceiros e investidores

**Mudança:** Unifica "Propósito" + "Equipe" em uma página

### 3. Para Empresas (B2B)
**URLs:**
- `/pt/para-empresas` (Para Empresas PT-BR)
- `/en/for-business` (For Business EN-US)
- `/es/para-empresas` (Para Empresas ES-ES)

**Objetivo:** Gerar leads B2B
**Conteúdo:**
- Casos de uso empresariais
- Benefícios para empresas
- Formulário de contato B2B
- Depoimentos de clientes
- Preços e planos

### 4. Contato
**URLs:**
- `/pt/contato` (Contato PT-BR)
- `/en/contact` (Contact EN-US)
- `/es/contacto` (Contacto ES-ES)

**Objetivo:** Capturar leads e suporte
**Conteúdo:**
- Formulário de contato
- Informações de contato
- FAQ básico
- Links para suporte

## Navegação Footer

### Links Rápidos
- Home
- Quem Somos
- Para Empresas
- Contato

### Links Legais
- Política de Privacidade
- Termos de Uso
- Exclusão de Dados

### Links Secundários
- **Investidores** (link discreto)
- **Para Motoristas** (link discreto)
- **Blog** (se implementado)

### Contato
- Email: contato@tuggi.app
- Localização do usuário

## Páginas Legais (Mantidas)

### Política de Privacidade
**URLs:**
- `/pt/politica-de-privacidade`
- `/en/privacy-policy`
- `/es/politica-de-privacidad`

### Termos de Uso
**URLs:**
- `/pt/termos-de-uso`
- `/en/terms-of-use`
- `/es/terminos-de-uso`

### Exclusão de Dados
**URLs:**
- `/pt/exclusao-de-dados`
- `/en/data-deletion`
- `/es/eliminacion-de-datos`

## Páginas Específicas (Links Discretos)

### Para Motoristas
**URLs:**
- `/pt/motoristas`
- `/en/drivers`
- `/es/conductores`

**Status:** Link no footer, não no menu principal
**Objetivo:** Landing page específica para motoristas

### Investidores
**URLs:**
- `/pt/investidores`
- `/en/investors`
- `/es/inversores`

**Status:** Link no footer, não no menu principal
**Objetivo:** Informações para investidores (quando necessário)

## Páginas Removidas/Consolidadas

### ❌ Removidas
- **Página separada de "Propósito"** → Integrada em "Quem Somos"
- **Página separada de "Equipe"** → Integrada em "Quem Somos"
- **Página separada de "Investidores"** → Link discreto no footer
- **Blog/News** → Removido (a menos que seja atualizado regularmente)

### ✅ Consolidadas
- **Propósito + Equipe** → "Quem Somos"
- **Investidores** → Link no footer
- **Motoristas** → Link no footer

## Mapa de Navegação Visual

```
                    HOME (/)
                        │
        ┌───────────────┼───────────────┐
        │               │               │
   QUEM SOMOS      PARA EMPRESAS    CONTATO
   (/quem-somos)   (/para-empresas)  (/contato)
        │               │               │
        └───────────────┼───────────────┘
                        │
                    FOOTER
                        │
    ┌───────────────────┼───────────────────┐
    │                   │                   │
LEGAIS              SECUNDÁRIOS         CONTATO
• Privacidade      • Investidores      • Email
• Termos           • Motoristas        • Localização
• Exclusão         • Blog (opcional)   • Redes sociais
```

## Benefícios da Nova Arquitetura

### 1. Foco em Conversão
- Home otimizada para downloads
- Menos distrações na navegação
- CTAs mais claros

### 2. Simplicidade
- 4 páginas principais vs 6+ atuais
- Navegação mais limpa
- Menos decisões para o usuário

### 3. SEO Melhorado
- Cada página com propósito claro
- Menos páginas = mais autoridade por página
- Estrutura mais simples para indexação

### 4. Manutenção Reduzida
- Menos páginas para manter
- Conteúdo mais focado
- Atualizações mais simples

## Implementação

### Fase 1: Reestruturação
1. Criar página "Quem Somos" unificada
2. Otimizar Home para conversão
3. Mover links secundários para footer

### Fase 2: Conteúdo
1. Migrar conteúdo de "Propósito" para "Quem Somos"
2. Migrar conteúdo de "Equipe" para "Quem Somos"
3. Otimizar "Para Empresas" para B2B

### Fase 3: SEO
1. Implementar redirects 301
2. Atualizar sitemap
3. Otimizar meta tags por página

## URLs de Redirect (301)

### Redirects Necessários
```
/pt/purpose → /pt/quem-somos
/en/purpose → /en/about-us
/es/purpose → /es/quienes-somos

/pt/story → /pt/quem-somos
/en/story → /en/about-us
/es/story → /es/quienes-somos

/pt/empresas → /pt/para-empresas
/en/business → /en/for-business
/es/empresas → /es/para-empresas
```

## Métricas de Sucesso

### Conversão
- Taxa de download iOS
- Taxa de inscrição Beta Android
- Taxa de preenchimento de formulários

### Navegação
- Tempo na página
- Taxa de rejeição
- Páginas por sessão

### SEO
- Posições no Google
- Tráfego orgânico
- CTR nos resultados

---

**Resultado:** Arquitetura mais simples, focada em conversão, com menos páginas mas mais impacto por página.


