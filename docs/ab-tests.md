# A/B Tests - Experimentos para Tuggi

## Experimento 1: Headlines - Benefício vs Cultura

### Hipótese
Headlines focadas em benefício imediato convertem melhor que headlines culturais abstratas.

### Variantes

#### Variante A (Controle - Atual)
**PT-BR:** "Descubra cultura onde você estiver."
**EN-US:** "Discover. Listen. Build culture with Tuggi."
**ES-ES:** "Descubre. Escucha. Construye cultura con Tuggi."

#### Variante B (Benefício Direto)
**PT-BR:** "Descubra histórias enquanto dirige."
**EN-US:** "Discover stories while you drive."
**ES-ES:** "Descubre historias mientras conduces."

#### Variante C (Liberdade)
**PT-BR:** "Explore sem roteiros fixos."
**EN-US:** "Explore without fixed routes."
**ES-ES:** "Explora sin rutas fijas."

### Métricas de Sucesso
- **Primária:** Taxa de download iOS
- **Secundárias:** 
  - CTR no CTA principal
  - Tempo na página
  - Scroll depth
  - Taxa de rejeição

### Configuração
- **Duração:** 14 dias
- **Tráfego:** 33% para cada variante
- **Segmentação:** Todos os usuários
- **Significância:** 95%

### Implementação
```typescript
// src/utils/abTesting.ts
export const getHeadlineVariant = (): 'A' | 'B' | 'C' => {
  const userId = getUserId();
  const hash = hashString(userId + 'headlines');
  const variant = hash % 3;
  
  switch (variant) {
    case 0: return 'A';
    case 1: return 'B';
    case 2: return 'C';
    default: return 'A';
  }
};

// src/pages/HomeV2.tsx
const headlineVariant = getHeadlineVariant();
const content = getLocalizedContent(currentLanguage, headlineVariant);

// Track variant assignment
trackEvent('ab_test_assignment', {
  experiment_name: 'headlines',
  variant: headlineVariant,
  user_id: getUserId()
});
```

### Critérios de Sucesso
- **Vencedor:** Variante com maior taxa de download iOS
- **Mínimo:** 100 conversões por variante
- **Significância:** p < 0.05

---

## Experimento 2: Vídeo vs Imagem Estática

### Hipótese
Vídeo de demonstração aumenta engajamento e conversão comparado a imagem estática.

### Variantes

#### Variante A (Controle - Imagem)
- Mockup estático do app
- Sem interação
- Foco no design

#### Variante B (Vídeo com Autoplay)
- Vídeo de 15s com autoplay
- Som automático (respeitando preferências)
- Foco na demonstração

#### Variante C (Vídeo com Thumbnail)
- Thumbnail atrativo
- Play button destacado
- Foco na escolha do usuário

### Métricas de Sucesso
- **Primária:** Taxa de download iOS
- **Secundárias:**
  - Taxa de visualização do vídeo
  - Tempo na seção
  - Taxa de rejeição
  - Engajamento com o conteúdo

### Configuração
- **Duração:** 21 dias
- **Tráfego:** 33% para cada variante
- **Segmentação:** Todos os usuários
- **Significância:** 95%

### Implementação
```typescript
// src/components/VideoSection.tsx
const videoVariant = getVideoVariant();

const renderVideoSection = () => {
  switch (videoVariant) {
    case 'A':
      return <StaticImageMockup />;
    case 'B':
      return <AutoplayVideo />;
    case 'C':
      return <ThumbnailVideo />;
  }
};

// Track video interactions
const handleVideoPlay = () => {
  trackEvent('video_play', {
    experiment_name: 'video_vs_image',
    variant: videoVariant,
    video_duration: 15
  });
};
```

### Critérios de Sucesso
- **Vencedor:** Variante com maior taxa de conversão
- **Mínimo:** 50 visualizações de vídeo por variante
- **Significância:** p < 0.05

---

## Experimento 3: Ordem das Seções

### Hipótese
Seções de prova social antes dos diferenciais constroem confiança e aumentam conversão.

### Variantes

#### Variante A (Controle - Atual)
1. Hero
2. Como Funciona
3. Vídeo
4. Cidades
5. Diferenciais
6. Prova Social
7. FAQ
8. CTA Final

#### Variante B (Prova Social Cedo)
1. Hero
2. Como Funciona
3. Prova Social
4. Vídeo
5. Cidades
6. Diferenciais
7. FAQ
8. CTA Final

#### Variante C (Prova Social Muito Cedo)
1. Hero
2. Prova Social
3. Como Funciona
4. Vídeo
5. Cidades
6. Diferenciais
7. FAQ
8. CTA Final

### Métricas de Sucesso
- **Primária:** Taxa de conversão geral
- **Secundárias:**
  - Scroll depth
  - Tempo até primeiro CTA
  - Taxa de rejeição
  - Engajamento por seção

### Configuração
- **Duração:** 28 dias
- **Tráfego:** 33% para cada variante
- **Segmentação:** Todos os usuários
- **Significância:** 95%

### Implementação
```typescript
// src/pages/HomeV2.tsx
const sectionOrder = getSectionOrderVariant();

const renderSections = () => {
  const sections = {
    hero: <HeroSection />,
    howItWorks: <HowItWorksSection />,
    video: <VideoSection />,
    cities: <CitiesSection />,
    differentiators: <DifferentiatorsSection />,
    socialProof: <SocialProofSection />,
    faq: <FAQSection />,
    finalCTA: <FinalCTASection />
  };

  return sectionOrder.map(sectionKey => sections[sectionKey]);
};
```

### Critérios de Sucesso
- **Vencedor:** Variante com maior taxa de conversão
- **Mínimo:** 200 visitantes por variante
- **Significância:** p < 0.05

---

## Experimento 4: CTA Wording

### Hipótese
CTAs com urgência e clareza convertem melhor que CTAs genéricos.

### Variantes

#### Variante A (Controle - Atual)
**iOS:** "Baixar no iOS"
**Android:** "Entrar no Beta Android"

#### Variante B (Urgência)
**iOS:** "Baixar Grátis"
**Android:** "Lista de Espera Android"

#### Variante C (Ação Clara)
**iOS:** "Começar Agora"
**Android:** "Reservar Vaga"

### Métricas de Sucesso
- **Primária:** CTR nos CTAs
- **Secundárias:**
  - Taxa de conversão
  - Taxa de abandono
  - Tempo até clique

### Configuração
- **Duração:** 14 dias
- **Tráfego:** 33% para cada variante
- **Segmentação:** Todos os usuários
- **Significância:** 95%

### Implementação
```typescript
// src/components/CTAButton.tsx
const ctaVariant = getCTAVariant();

const getCTAText = (type: 'ios' | 'android') => {
  const variants = {
    A: { ios: 'Baixar no iOS', android: 'Entrar no Beta Android' },
    B: { ios: 'Baixar Grátis', android: 'Lista de Espera Android' },
    C: { ios: 'Começar Agora', android: 'Reservar Vaga' }
  };
  
  return variants[ctaVariant][type];
};
```

### Critérios de Sucesso
- **Vencedor:** Variante com maior CTR
- **Mínimo:** 100 cliques por variante
- **Significância:** p < 0.05

---

## Framework de A/B Testing

### Utilitários
```typescript
// src/utils/abTesting.ts
export class ABTesting {
  private static experiments: Map<string, any> = new Map();

  static assignVariant(experimentName: string, variants: string[]): string {
    const userId = this.getUserId();
    const hash = this.hashString(userId + experimentName);
    const variantIndex = hash % variants.length;
    
    const variant = variants[variantIndex];
    this.trackAssignment(experimentName, variant);
    
    return variant;
  }

  static trackConversion(experimentName: string, variant: string, value: number) {
    trackEvent('ab_test_conversion', {
      experiment_name: experimentName,
      variant: variant,
      conversion_value: value
    });
  }

  private static getUserId(): string {
    let userId = localStorage.getItem('tuggi_user_id');
    if (!userId) {
      userId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem('tuggi_user_id', userId);
    }
    return userId;
  }

  private static hashString(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return Math.abs(hash);
  }

  private static trackAssignment(experimentName: string, variant: string) {
    trackEvent('ab_test_assignment', {
      experiment_name: experimentName,
      variant: variant,
      user_id: this.getUserId()
    });
  }
}
```

### Configuração de Experimentos
```typescript
// src/config/experiments.ts
export const EXPERIMENTS = {
  headlines: {
    name: 'Headlines - Benefício vs Cultura',
    variants: ['A', 'B', 'C'],
    duration: 14, // days
    traffic: 33, // percentage per variant
    significance: 95
  },
  video: {
    name: 'Vídeo vs Imagem Estática',
    variants: ['A', 'B', 'C'],
    duration: 21,
    traffic: 33,
    significance: 95
  },
  sectionOrder: {
    name: 'Ordem das Seções',
    variants: ['A', 'B', 'C'],
    duration: 28,
    traffic: 33,
    significance: 95
  },
  ctaWording: {
    name: 'CTA Wording',
    variants: ['A', 'B', 'C'],
    duration: 14,
    traffic: 33,
    significance: 95
  }
};
```

## Análise de Resultados

### Métricas de Sucesso
1. **Taxa de Conversão:** % de visitantes que convertem
2. **CTR:** % de cliques nos CTAs
3. **Engajamento:** Tempo na página, scroll depth
4. **Qualidade:** Taxa de rejeição, bounce rate

### Critérios de Decisão
- **Significância Estatística:** p < 0.05
- **Tamanho da Amostra:** Mínimo 100 conversões por variante
- **Duração:** Mínimo 7 dias para estabilizar
- **Consistência:** Resultados consistentes ao longo do tempo

### Relatórios
- **Relatório Diário:** Conversões, tráfego, performance
- **Relatório Semanal:** Tendências, insights
- **Relatório Final:** Resultados, recomendações, próximos passos

---

**Objetivo:** Otimizar sistematicamente a conversão através de experimentos controlados e dados acionáveis.


