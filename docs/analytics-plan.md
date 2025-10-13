# Plano de Analytics & Experimentos - Tuggi

## GA4 Eventos Essenciais

### Eventos de Conversão (Alta Prioridade)

#### 1. Download iOS
```javascript
// Evento: click_download_ios
{
  event_category: 'App Download',
  event_label: 'iOS Download',
  page_type: 'home',
  language: 'PT',
  cta_position: 'hero|banner|footer',
  conversion_value: 100
}
```

#### 2. Beta Android
```javascript
// Evento: click_beta_android
{
  event_category: 'App Download',
  event_label: 'Android Beta',
  page_type: 'home',
  language: 'PT',
  cta_position: 'hero|footer',
  conversion_value: 80
}
```

#### 3. Vote em Nova Cidade
```javascript
// Evento: open_city_form
{
  event_category: 'Form Interaction',
  event_label: 'City Request Form',
  page_type: 'home',
  language: 'PT',
  form_type: 'city_request',
  conversion_value: 50
}
```

#### 4. Vídeo Demo
```javascript
// Evento: view_video_demo
{
  event_category: 'Content Engagement',
  event_label: 'Video Demo',
  page_type: 'home',
  language: 'PT',
  video_duration: 15,
  conversion_value: 30
}
```

### Eventos de Engajamento

#### 5. Scroll Depth
```javascript
// Evento: scroll_depth
{
  event_category: 'User Engagement',
  event_label: '25%|50%|75%|100%',
  page_type: 'home',
  language: 'PT',
  scroll_percentage: 25
}
```

#### 6. FAQ Expand
```javascript
// Evento: faq_expand
{
  event_category: 'Content Engagement',
  event_label: 'FAQ Question',
  page_type: 'home',
  language: 'PT',
  question_id: 'privacy|battery|offline'
}
```

#### 7. Language Switch
```javascript
// Evento: lang_switch
{
  event_category: 'User Interaction',
  event_label: 'PT_to_EN|EN_to_ES',
  page_type: 'home',
  language: 'PT',
  previous_language: 'EN'
}
```

### Eventos de Navegação

#### 8. CTA Hero
```javascript
// Evento: cta_hero
{
  event_category: 'CTA Interaction',
  event_label: 'Hero CTA',
  page_type: 'home',
  language: 'PT',
  cta_type: 'download|beta'
}
```

#### 9. CTA Footer
```javascript
// Evento: cta_footer
{
  event_category: 'CTA Interaction',
  event_label: 'Footer CTA',
  page_type: 'home',
  language: 'PT',
  cta_type: 'download|beta'
}
```

#### 10. Outbound to Store
```javascript
// Evento: outbound_to_store
{
  event_category: 'External Navigation',
  event_label: 'App Store|Google Play',
  page_type: 'home',
  language: 'PT',
  store_type: 'ios|android'
}
```

## Implementação de Eventos

### Helper de Analytics
```typescript
// src/lib/analytics.ts
export const trackEvent = (eventName: string, parameters: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: parameters.category || 'General',
      event_label: parameters.label || '',
      ...parameters
    });
  }
};

export const trackConversion = (conversionType: string, value: number, parameters: Record<string, any> = {}) => {
  trackEvent('conversion', {
    event_category: 'Conversion',
    event_label: conversionType,
    value: value,
    currency: 'USD',
    ...parameters
  });
};

export const trackCTAClick = (ctaType: string, position: string, page: string, language: string) => {
  trackEvent('cta_click', {
    event_category: 'CTA Interaction',
    event_label: ctaType,
    cta_position: position,
    page_type: page,
    language: language,
    conversion_value: getCTAValue(ctaType)
  });
};

const getCTAValue = (ctaType: string): number => {
  const values: Record<string, number> = {
    'ios_download': 100,
    'android_beta': 80,
    'city_form': 50,
    'video_demo': 30
  };
  return values[ctaType] || 10;
};
```

### Chamadas nos Componentes

#### HomeV2.tsx
```typescript
// Hero Section CTAs
const handleIOSDownload = () => {
  trackCTAClick('ios_download', 'hero', 'home', currentLanguage);
  trackConversion('ios_download', 100, { language: currentLanguage });
  window.open('https://apps.apple.com/us/app/tuggi-drive/id6744379818?l=pt-BR', '_blank');
};

const handleAndroidBeta = () => {
  trackCTAClick('android_beta', 'hero', 'home', currentLanguage);
  trackConversion('android_beta', 80, { language: currentLanguage });
  // Open Google Forms or show beta signup
};

// Video Demo
const handleVideoPlay = () => {
  trackEvent('view_video_demo', {
    event_category: 'Content Engagement',
    event_label: 'Video Demo',
    page_type: 'home',
    language: currentLanguage,
    video_duration: 15
  });
};

// City Form
const handleCityForm = () => {
  trackEvent('open_city_form', {
    event_category: 'Form Interaction',
    event_label: 'City Request Form',
    page_type: 'home',
    language: currentLanguage,
    form_type: 'city_request'
  });
  window.open('https://forms.gle/B5VWqtDgjEKEiHv1A', '_blank');
};
```

## A/B Testing - Experimentos Propostos

### Experimento 1: Headlines
**Hipótese:** Headlines focadas em benefício convertem melhor que headlines culturais

**Variantes:**
- **A (Atual):** "Descubra cultura onde você estiver."
- **B (Benefício):** "Descubra histórias enquanto dirige."
- **C (Liberdade):** "Explore sem roteiros fixos."

**Métricas:**
- CTR no CTA principal
- Taxa de download iOS
- Tempo na página
- Scroll depth

**Duração:** 2 semanas
**Tráfego:** 50% para cada variante

### Experimento 2: Vídeo vs Imagem Estática
**Hipótese:** Vídeo de demonstração aumenta conversão

**Variantes:**
- **A:** Imagem estática do app
- **B:** Vídeo de 15s com autoplay
- **C:** Vídeo com thumbnail e play button

**Métricas:**
- Taxa de visualização do vídeo
- Taxa de download após visualização
- Tempo na seção
- Taxa de rejeição

**Duração:** 3 semanas

### Experimento 3: Ordem das Seções
**Hipótese:** Seções de prova social antes dos diferenciais convertem melhor

**Variantes:**
- **A (Atual):** Hero → Como Funciona → Vídeo → Cidades → Diferenciais → Prova Social → FAQ → CTA
- **B:** Hero → Como Funciona → Prova Social → Vídeo → Cidades → Diferenciais → FAQ → CTA
- **C:** Hero → Prova Social → Como Funciona → Vídeo → Cidades → Diferenciais → FAQ → CTA

**Métricas:**
- Scroll depth
- Taxa de conversão por seção
- Tempo até primeiro CTA
- Taxa de rejeição

**Duração:** 4 semanas

### Experimento 4: CTA Wording
**Hipótese:** CTAs com urgência convertem melhor

**Variantes:**
- **A:** "Baixar no iOS" / "Entrar no Beta Android"
- **B:** "Baixar Grátis" / "Lista de Espera Android"
- **C:** "Começar Agora" / "Reservar Vaga"

**Métricas:**
- CTR nos CTAs
- Taxa de conversão
- Taxa de abandono

**Duração:** 2 semanas

## Métricas de Sucesso

### Conversão Primária
- **Taxa de Download iOS:** Meta: 5% dos visitantes
- **Taxa de Inscrição Beta Android:** Meta: 3% dos visitantes
- **Taxa de Preenchimento de Formulários:** Meta: 2% dos visitantes

### Engajamento
- **Scroll Depth:** Meta: 75% dos visitantes chegam a 75% da página
- **Tempo na Página:** Meta: 2+ minutos
- **Taxa de Rejeição:** Meta: <60%

### Performance
- **Core Web Vitals:** LCP <2.5s, FID <100ms, CLS <0.1
- **Taxa de Carregamento:** Meta: <3s
- **Taxa de Erro:** Meta: <1%

## Dashboard de Analytics

### KPIs Principais
1. **Conversões por Dia/Semana/Mês**
2. **Taxa de Conversão por Idioma**
3. **Fonte de Tráfego vs Conversão**
4. **Funil de Conversão Completo**
5. **Performance por Dispositivo**

### Relatórios Automáticos
- **Relatório Semanal:** Conversões, tráfego, performance
- **Relatório Mensal:** Tendências, insights, recomendações
- **Relatório de Experimentos:** Resultados de A/B tests

## Implementação Técnica

### Configuração GA4
```javascript
// Configuração inicial
gtag('config', 'G-LFFNJDG7TJ', {
  // Enhanced measurement
  enhanced_measurement: {
    scrolls: true,
    outbound_clicks: true,
    site_search: true,
    video_engagement: true,
    file_downloads: true
  },
  
  // Custom dimensions
  custom_map: {
    custom_parameter_1: 'language',
    custom_parameter_2: 'page_type',
    custom_parameter_3: 'cta_position',
    custom_parameter_4: 'conversion_funnel'
  }
});
```

### Eventos Personalizados
```javascript
// Configuração de eventos personalizados
gtag('event', 'page_view_enhanced', {
  language: 'PT',
  page_type: 'home',
  user_journey_stage: 'awareness'
});

gtag('event', 'conversion_funnel', {
  funnel_step: 1,
  step_name: 'home_visit',
  language: 'PT'
});
```

## Próximos Passos

### Fase 1: Implementação Básica (Semana 1)
1. Implementar eventos essenciais
2. Configurar conversões no GA4
3. Testar tracking em desenvolvimento

### Fase 2: Experimentos (Semana 2-6)
1. Implementar A/B testing framework
2. Executar experimento de headlines
3. Monitorar resultados

### Fase 3: Otimização (Semana 7-8)
1. Analisar resultados dos experimentos
2. Implementar vencedores
3. Configurar relatórios automáticos

---

**Objetivo:** Transformar dados em insights acionáveis para otimizar conversão e experiência do usuário.


