# Melhorias de Analytics Implementadas

## Visão Geral

Implementamos um sistema abrangente de tracking de analytics para o site institucional da Tuggi, focando em rastreamento de cliques, conversões do Google Forms e comportamento do usuário.

## Funcionalidades Implementadas

### 1. Tracking de Google Forms

**Função:** `trackGoogleFormInteraction()`

- **Abertura do formulário**: Conversão principal (valor: 50 USD)
- **Início do preenchimento**: Engajamento médio (valor: 25 USD)
- **Envio do formulário**: Conversão de alto valor (valor: 100 USD)
- **Abandono do formulário**: Tracking de perda de conversão

```typescript
// Exemplo de uso
trackGoogleFormInteraction('open', 'registration_form', 'home', 'PT', {
  source_element: 'CTA Button',
  source_page: 'home'
});
```

### 2. Tracking de Elementos (Botões e Links)

**Função:** `trackElementClick()`

- Rastreamento automático de links externos
- Detecção automática de Google Forms
- Classificação por tipo de elemento (button, link, cta)
- Contexto multilíngue completo

```typescript
// Exemplo de uso
trackElementClick('button', 'Inscreva-se Agora', 'https://forms.gle/xyz', 'home', 'PT');
```

### 3. Tracking de Engajamento do Usuário

**Função:** `trackUserEngagement()`

- **Marcos de rolagem**: 25%, 50%, 75%, 90%, 100%
- **Marcos de tempo**: 30s, 60s, 120s, 300s
- **Rajadas de interação**: Múltiplos cliques em sequência
- **Visitas de retorno**: Usuários recorrentes

### 4. Tracking de Visibilidade de Seções

**Função:** `trackSectionVisibility()`

- Tempo de visualização por seção
- Porcentagem de visibilidade
- Qualidade de engajamento (alto/baixo)
- Otimização de conteúdo institucional

### 5. Hook Personalizado para React

**Hook:** `useAnalytics()`

Fornece funções prontas para uso em componentes React:

```typescript
const {
  trackButtonClick,
  trackLinkClickEvent,
  trackFormInteraction,
  trackNavigation,
  trackLanguageSwitch
} = useAnalytics(currentPage, currentLanguage);
```

### 6. Tracking Automático de Engajamento

**Hook:** `useEngagementTracking()`

- Configuração automática de tracking de rolagem
- Tracking automático de tempo na página
- Marcos pré-definidos otimizados

### 7. Tracking de Visibilidade com Intersection Observer

**Hook:** `useSectionTracking()`

- Observação automática de seções
- Cálculo preciso de tempo de visualização
- Detecção de porcentagem de visibilidade

## Implementação nos Componentes

### Footer.tsx

✅ **Implementado:**
- Tracking de cliques em links de navegação
- Tracking de mudanças de idioma
- Tracking de cliques no email de contato
- Tracking de inscrições na newsletter

### Header.tsx

✅ **Implementado:**
- Tracking de cliques no logo
- Tracking de navegação principal
- Tracking de mudanças de idioma
- Tracking de menu mobile

## Eventos de Conversão Configurados

### Conversão Principal
- **Evento**: `google_form_opened`
- **Valor**: 50 USD
- **Descrição**: Abertura do formulário de inscrição

### Conversão de Alto Valor
- **Evento**: `google_form_submitted`
- **Valor**: 100 USD
- **Descrição**: Envio completo do formulário

### Conversões Secundárias
- Cliques em CTAs importantes
- Engajamento prolongado (>5min)
- Múltiplas interações na sessão

## Dimensões Personalizadas do Google Analytics

1. **language**: Idioma atual do usuário
2. **locale**: Código de localização
3. **page_type**: Tipo de página atual
4. **cta_type**: Tipo de CTA clicado
5. **lead_score**: Pontuação de qualidade do lead
6. **user_journey_stage**: Estágio da jornada do usuário
7. **conversion_funnel**: Etapa do funil de conversão
8. **industry_vertical**: Setor de atuação identificado
9. **company_size**: Tamanho da empresa
10. **multilingual_journey**: Jornada multilíngue

## Relatórios Disponíveis no Google Analytics

### 1. Funil de Conversão
- Visualizações de página → Cliques em CTA → Abertura de formulário → Envio

### 2. Análise de Engajamento
- Tempo na página por idioma
- Profundidade de rolagem por seção
- Qualidade de sessão

### 3. Performance Multilíngue
- Conversões por idioma
- Preferências de navegação
- Efetividade do conteúdo localizado

### 4. Análise de Elementos
- CTAs mais clicados
- Links externos mais acessados
- Performance de seções específicas

## Como Usar

### 1. Em Componentes Existentes

```typescript
import { useAnalytics } from '../hooks/useAnalytics';

const MyComponent = ({ currentPage, currentLanguage }) => {
  const { trackButtonClick, trackFormInteraction } = useAnalytics(currentPage, currentLanguage);
  
  const handleCTAClick = () => {
    trackButtonClick('Inscreva-se Agora', 'https://forms.gle/xyz');
    // Redirecionar para o formulário
  };
  
  return (
    <button onClick={handleCTAClick}>
      Inscreva-se Agora
    </button>
  );
};
```

### 2. Para Tracking Automático

```typescript
import { useEngagementTracking } from '../hooks/useAnalytics';

const MyPage = ({ currentPage, currentLanguage }) => {
  const { setupScrollTracking, setupTimeTracking } = useEngagementTracking(currentPage, currentLanguage);
  
  useEffect(() => {
    const cleanupScroll = setupScrollTracking();
    const cleanupTime = setupTimeTracking();
    
    return () => {
      cleanupScroll();
      cleanupTime();
    };
  }, []);
  
  return <div>Conteúdo da página</div>;
};
```

### 3. Para Tracking de Seções

```typescript
import { useSectionTracking } from '../hooks/useAnalytics';

const MySection = ({ currentPage, currentLanguage }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { observeSection } = useSectionTracking(currentPage, currentLanguage);
  
  useEffect(() => {
    const cleanup = observeSection(sectionRef, 'hero_section');
    return cleanup;
  }, []);
  
  return (
    <div ref={sectionRef}>
      Conteúdo da seção
    </div>
  );
};
```

## Próximos Passos

### Implementação Recomendada

1. **Adicionar tracking aos CTAs principais**
   - Botões de inscrição
   - Links para Google Forms
   - CTAs de contato

2. **Implementar tracking de seções**
   - Hero section
   - Seção de benefícios
   - Seção de contato
   - Seção de propósito

3. **Configurar eventos de conversão no Google Analytics**
   - Definir metas baseadas nos eventos implementados
   - Configurar funis de conversão
   - Estabelecer valores de conversão

4. **Monitoramento e Otimização**
   - Análise semanal de performance
   - Testes A/B baseados nos dados
   - Otimização de CTAs com baixa conversão

## Benefícios Esperados

- **Visibilidade completa** do comportamento do usuário
- **Identificação precisa** de pontos de conversão
- **Otimização baseada em dados** do conteúdo
- **Análise multilíngue** detalhada
- **ROI mensurável** das iniciativas de marketing
- **Insights acionáveis** para melhorias do site

## Conformidade e Privacidade

- Todos os eventos respeitam LGPD/GDPR
- Dados anonimizados no Google Analytics
- Sem coleta de informações pessoais identificáveis
- Consentimento implícito através do uso do site