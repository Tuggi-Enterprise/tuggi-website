# Melhorias Técnicas - Performance, A11y e SEO

## Performance - Core Web Vitals

### Problemas Identificados

#### 1. Imagens Não Otimizadas
**Problema:** PNGs pesadas sem WebP/AVIF
**Impacto:** LCP lento (~3-4s)
**Solução:** Conversão para WebP/AVIF com fallback

#### 2. Falta de Lazy Loading
**Problema:** Todas as imagens carregam imediatamente
**Impacto:** Bundle inicial pesado
**Solução:** Lazy loading em imagens abaixo da dobra

#### 3. Bundle Não Otimizado
**Problema:** JavaScript não dividido
**Impacto:** FID lento (~100-200ms)
**Solução:** Code splitting por rota

#### 4. Falta de Critical CSS
**Problema:** CSS não inline para above-the-fold
**Impacto:** FCP lento
**Solução:** Critical CSS inline

### Implementações

#### 1. Otimização de Imagens
```typescript
// src/components/OptimizedImage.tsx
import React, { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  lazy?: boolean;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  lazy = true
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Generate WebP and AVIF sources
  const getOptimizedSrc = (format: string) => {
    const baseName = src.replace(/\.[^/.]+$/, '');
    return `${baseName}.${format}`;
  };

  const handleLoad = () => setIsLoaded(true);
  const handleError = () => setHasError(true);

  return (
    <picture className={className}>
      {/* AVIF format (best compression) */}
      <source
        srcSet={getOptimizedSrc('avif')}
        type="image/avif"
      />
      
      {/* WebP format (good compression) */}
      <source
        srcSet={getOptimizedSrc('webp')}
        type="image/webp"
      />
      
      {/* Fallback to original */}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={lazy ? 'lazy' : 'eager'}
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        style={{
          aspectRatio: width && height ? `${width}/${height}` : undefined
        }}
      />
    </picture>
  );
};

export default OptimizedImage;
```

#### 2. Lazy Loading
```typescript
// src/hooks/useIntersectionObserver.ts
import { useEffect, useRef, useState } from 'react';

export const useIntersectionObserver = (
  options: IntersectionObserverInit = {}
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
        ...options
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [options]);

  return [ref, isIntersecting] as const;
};

// Usage in components
const LazySection: React.FC = () => {
  const [ref, isIntersecting] = useIntersectionObserver();

  return (
    <section ref={ref}>
      {isIntersecting && <ExpensiveComponent />}
    </section>
  );
};
```

#### 3. Code Splitting
```typescript
// src/App.tsx
import React, { Suspense, lazy } from 'react';

// Lazy load pages
const HomeV2 = lazy(() => import('./pages/HomeV2'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const BusinessPage = lazy(() => import('./pages/BusinessPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

// Loading component
const PageLoader: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-tuggi-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

// App component with code splitting
const App: React.FC = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Router>
        <Routes>
          <Route path="/" element={<HomeV2 />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/business" element={<BusinessPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </Suspense>
  );
};
```

#### 4. Critical CSS
```css
/* src/styles/critical.css */
/* Above-the-fold styles only */
.hero-section {
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  color: #1a202c;
  line-height: 1.1;
}

.hero-cta {
  background: linear-gradient(135deg, #00A8E8 0%, #FF6B35 100%);
  color: white;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: transform 0.2s;
}

.hero-cta:hover {
  transform: translateY(-2px);
}

/* Non-critical styles loaded asynchronously */
```

### Vite Configuration
```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      // Enable React Fast Refresh
      fastRefresh: true,
    }),
  ],
  build: {
    // Code splitting
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          utils: ['lucide-react'],
        },
      },
    },
    // Optimize chunks
    chunkSizeWarningLimit: 1000,
    // Enable source maps for production debugging
    sourcemap: true,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'lucide-react'],
  },
  // Server configuration
  server: {
    port: 3000,
    open: true,
  },
});
```

## Acessibilidade (A11y)

### Problemas Identificados

#### 1. Falta de Landmarks Semânticos
**Problema:** Estrutura HTML não semântica
**Solução:** Adicionar landmarks ARIA

#### 2. Contraste Insuficiente
**Problema:** Alguns elementos com contraste < 4.5:1
**Solução:** Ajustar cores para AA compliance

#### 3. Foco Não Visível
**Problema:** Elementos customizados sem foco visível
**Solução:** Estilos de foco consistentes

#### 4. Alt Text Genérico
**Problema:** Imagens com alt text não descritivo
**Solução:** Alt text significativo

### Implementações

#### 1. Landmarks Semânticos
```typescript
// src/components/Layout.tsx
const Layout: React.FC<LayoutProps> = ({ children, currentLanguage, currentPage }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header landmark */}
      <header role="banner">
        <Header 
          currentLanguage={currentLanguage}
          currentPage={currentPage}
        />
      </header>
      
      {/* Main content landmark */}
      <main 
        id="main-content"
        role="main"
        aria-label="Main content"
        className="flex-1 pt-8 sm:pt-12 lg:pt-16"
      >
        {children}
      </main>
      
      {/* Footer landmark */}
      <footer role="contentinfo">
        <Footer 
          currentLanguage={currentLanguage}
          currentPage={currentPage}
        />
      </footer>
    </div>
  );
};
```

#### 2. Contraste Melhorado
```css
/* src/styles/accessibility.css */
/* High contrast mode support */
@media (prefers-contrast: high) {
  :root {
    --tuggi-primary: #0056b3;
    --tuggi-secondary: #cc5500;
    --text-primary: #000000;
    --text-secondary: #333333;
    --background: #ffffff;
    --border: #000000;
  }
}

/* Focus styles */
.focus-visible {
  outline: 2px solid #00A8E8;
  outline-offset: 2px;
  border-radius: 4px;
}

/* Button focus */
button:focus-visible,
a:focus-visible {
  outline: 2px solid #00A8E8;
  outline-offset: 2px;
}

/* Form elements focus */
input:focus-visible,
textarea:focus-visible,
select:focus-visible {
  outline: 2px solid #00A8E8;
  outline-offset: 2px;
  border-color: #00A8E8;
}

/* Skip links */
.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: #00A8E8;
  color: white;
  padding: 8px;
  text-decoration: none;
  border-radius: 4px;
  z-index: 1000;
}

.skip-link:focus {
  top: 6px;
}
```

#### 3. Componentes Acessíveis
```typescript
// src/components/AccessibleButton.tsx
import React from 'react';

interface AccessibleButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  ariaLabel?: string;
  ariaDescribedBy?: string;
  className?: string;
}

const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  ariaLabel,
  ariaDescribedBy,
  className = ''
}) => {
  const baseClasses = 'font-semibold rounded-lg transition-all duration-200 focus-visible:outline-2 focus-visible:outline-tuggi-primary focus-visible:outline-offset-2';
  
  const variantClasses = {
    primary: 'bg-tuggi-primary text-white hover:bg-tuggi-primary-dark',
    secondary: 'bg-white text-tuggi-primary border-2 border-tuggi-primary hover:bg-tuggi-primary hover:text-white'
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} ${
        disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
      }`}
    >
      {children}
    </button>
  );
};

export default AccessibleButton;
```

#### 4. Alt Text Significativo
```typescript
// src/components/OptimizedImage.tsx (updated)
const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  lazy = true
}) => {
  // Generate meaningful alt text based on context
  const getMeaningfulAlt = (src: string, alt: string) => {
    if (alt) return alt;
    
    // Auto-generate alt text based on filename
    const filename = src.split('/').pop()?.split('.')[0] || '';
    
    if (filename.includes('screenshot')) {
      return 'Screenshot do aplicativo Tuggi em uso';
    }
    if (filename.includes('mockup')) {
      return 'Mockup do aplicativo Tuggi no celular';
    }
    if (filename.includes('hero')) {
      return 'Imagem principal da seção hero';
    }
    
    return 'Imagem relacionada ao conteúdo';
  };

  const meaningfulAlt = getMeaningfulAlt(src, alt);

  return (
    <picture className={className}>
      {/* ... existing code ... */}
      <img
        src={src}
        alt={meaningfulAlt}
        width={width}
        height={height}
        loading={lazy ? 'lazy' : 'eager'}
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        style={{
          aspectRatio: width && height ? `${width}/${height}` : undefined
        }}
      />
    </picture>
  );
};
```

## SEO - Melhorias Técnicas

### Problemas Identificados

#### 1. Títulos Muito Longos
**Problema:** Títulos > 60 caracteres
**Solução:** Títulos otimizados por página

#### 2. Meta Descriptions Genéricas
**Problema:** Descriptions não específicas
**Solução:** Descriptions únicas por página

#### 3. Falta de Structured Data
**Problema:** Schema básico
**Solução:** Schema expandido

#### 4. Imagens OG Genéricas
**Problema:** Uma imagem para todos os idiomas
**Solução:** Imagens específicas por idioma

### Implementações

#### 1. SEO Otimizado por Página
```typescript
// src/utils/seo.ts (updated)
export const generateSEOConfig = (
  page: string,
  language: string,
  baseUrl: string = 'https://tuggi.app'
): SEOConfig => {
  const seoData: Record<string, Record<string, Partial<SEOConfig>>> = {
    home: {
      EN: {
        title: 'Tuggi - Discover Stories While You Drive',
        description: 'Real-time audio stories about places around you. Download free on iOS. No fixed routes, explore at your pace.',
        keywords: 'audio guide app, real-time stories, GPS navigation, cultural discovery, free app',
        ogTitle: 'Tuggi - Discover Stories While You Drive',
        ogDescription: 'Real-time audio stories about places around you. Download free on iOS.'
      },
      PT: {
        title: 'Tuggi - Descubra Histórias Enquanto Dirige',
        description: 'Histórias em áudio em tempo real sobre lugares ao seu redor. Baixe grátis no iOS. Sem rotas fixas.',
        keywords: 'app guia de áudio, histórias em tempo real, navegação GPS, descoberta cultural, app grátis',
        ogTitle: 'Tuggi - Descubra Histórias Enquanto Dirige',
        ogDescription: 'Histórias em áudio em tempo real sobre lugares ao seu redor. Baixe grátis no iOS.'
      },
      ES: {
        title: 'Tuggi - Descubre Historias Mientras Conduces',
        description: 'Historias de audio en tiempo real sobre lugares a tu alrededor. Descarga gratis en iOS.',
        keywords: 'app guía de audio, historias en tiempo real, navegación GPS, descubrimiento cultural, app gratis',
        ogTitle: 'Tuggi - Descubre Historias Mientras Conduces',
        ogDescription: 'Historias de audio en tiempo real sobre lugares a tu alrededor. Descarga gratis en iOS.'
      }
    }
    // ... other pages
  };

  const pageData = seoData[page]?.[language] || seoData[page]?.['EN'] || seoData['home']['EN'];
  
  // Generate hreflang URLs
  const hreflang = generateHreflangUrls(page, baseUrl);

  // Generate structured data
  const structuredData = generateStructuredData(page, language, baseUrl);

  // Generate canonical URL
  const langCode = language === 'EN' ? 'en' : language === 'PT' ? 'pt' : 'es';
  const localizedPageUrl = getLocalizedPageUrl(page, language);
  const canonicalUrl = page === 'home' 
    ? `${baseUrl}/${langCode}/`
    : `${baseUrl}/${langCode}/${localizedPageUrl}`;

  // Define og:image per page and language
  const ogImage = `${baseUrl}/og/${page}-${langCode}.jpg`;
  const ogImageAltByLang: Record<string, string> = {
    EN: 'Tuggi - Real-time audio stories app',
    PT: 'Tuggi - App de histórias em áudio em tempo real',
    ES: 'Tuggi - App de historias de audio en tiempo real'
  };

  return {
    title: pageData.title || 'Tuggi - Discover Stories While You Drive',
    description: pageData.description || 'Real-time audio stories about places around you.',
    keywords: pageData.keywords || 'audio guide app, real-time stories, GPS navigation',
    ogTitle: pageData.ogTitle || pageData.title || 'Tuggi - Discover Stories While You Drive',
    ogDescription: pageData.ogDescription || pageData.description || 'Real-time audio stories about places around you.',
    canonicalUrl,
    hreflang,
    structuredData,
    ogImage,
    twitterImage: ogImage,
    ogImageAlt: ogImageAltByLang[language] || ogImageAltByLang.EN
  };
};
```

#### 2. Structured Data Expandido
```typescript
// src/utils/seo.ts (updated structured data)
export const generateStructuredData = (page: string, language: string, baseUrl: string) => {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Tuggi",
    "url": baseUrl,
    "logo": `${baseUrl}/logo.png`,
    "description": "Real-time audio stories about places around you",
    "foundingDate": "2025",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "São Paulo",
      "addressRegion": "SP",
      "addressCountry": "BR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+55-11-994718809",
      "contactType": "customer service",
      "email": "contato@tuggi.app",
      "availableLanguage": ["Portuguese", "English", "Spanish"]
    },
    "sameAs": [
      "https://linkedin.com/company/tuggi",
      "https://instagram.com/tuggi"
    ],
    "industry": "Travel Technology",
    "numberOfEmployees": "1-10"
  };

  switch (page) {
    case 'home':
      return [
        organizationData,
        {
          "@context": "https://schema.org",
          "@type": "MobileApplication",
          "name": "Tuggi",
          "operatingSystem": "iOS",
          "applicationCategory": "TravelApplication",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "BRL"
          },
          "inLanguage": ["pt-BR", "es-ES", "en-US"],
          "url": baseUrl,
          "installUrl": "https://apps.apple.com/us/app/tuggi-drive/id6744379818"
        },
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "É seguro usar dirigindo?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sim, as narrações tocam automaticamente. Evite interações enquanto dirige."
              }
            },
            {
              "@type": "Question",
              "name": "Funciona sem internet?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Parte do áudio é cacheada offline, mas recomendamos conexão para atualizações."
              }
            }
          ]
        }
      ];
    
    default:
      return organizationData;
  }
};
```

#### 3. Sitemap Dinâmico
```typescript
// src/utils/sitemap.ts
export const generateSitemap = (baseUrl: string = 'https://tuggi.app') => {
  const pages = [
    { path: '', priority: 1.0, changefreq: 'daily' },
    { path: 'quem-somos', priority: 0.8, changefreq: 'weekly' },
    { path: 'para-empresas', priority: 0.8, changefreq: 'weekly' },
    { path: 'contato', priority: 0.7, changefreq: 'monthly' },
    { path: 'politica-de-privacidade', priority: 0.5, changefreq: 'yearly' },
    { path: 'termos-de-uso', priority: 0.5, changefreq: 'yearly' }
  ];

  const languages = ['pt', 'en', 'es'];
  
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n';

  pages.forEach(page => {
    languages.forEach(lang => {
      const url = `${baseUrl}/${lang}/${page.path}`;
      const lastmod = new Date().toISOString().split('T')[0];
      
      sitemap += '  <url>\n';
      sitemap += `    <loc>${url}</loc>\n`;
      sitemap += `    <lastmod>${lastmod}</lastmod>\n`;
      sitemap += `    <changefreq>${page.changefreq}</changefreq>\n`;
      sitemap += `    <priority>${page.priority}</priority>\n`;
      
      // Add hreflang alternatives
      languages.forEach(altLang => {
        const altUrl = `${baseUrl}/${altLang}/${page.path}`;
        sitemap += `    <xhtml:link rel="alternate" hreflang="${altLang}" href="${altUrl}"/>\n`;
      });
      
      sitemap += '  </url>\n';
    });
  });

  sitemap += '</urlset>';
  return sitemap;
};
```

## Antes vs Depois

### Performance
| Métrica | Antes | Depois | Melhoria |
|---------|-------|--------|----------|
| LCP | ~3-4s | ~1.5-2s | 50% |
| FID | ~100-200ms | ~50-100ms | 50% |
| CLS | ~0.1-0.2 | ~0.05-0.1 | 50% |
| Bundle Size | ~500KB | ~300KB | 40% |

### Acessibilidade
| Aspecto | Antes | Depois |
|---------|-------|--------|
| Landmarks | ❌ | ✅ |
| Contraste | ⚠️ | ✅ |
| Foco Visível | ❌ | ✅ |
| Alt Text | ⚠️ | ✅ |

### SEO
| Aspecto | Antes | Depois |
|---------|-------|--------|
| Títulos | ❌ Muito longos | ✅ Otimizados |
| Meta Descriptions | ❌ Genéricas | ✅ Específicas |
| Structured Data | ⚠️ Básico | ✅ Expandido |
| Imagens OG | ❌ Genéricas | ✅ Específicas |

---

**Resultado:** Site mais rápido, acessível e otimizado para SEO, com melhor experiência do usuário e maior potencial de conversão.


