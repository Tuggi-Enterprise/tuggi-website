// SEO and Analytics utilities for multilingual support with enhanced keywords and structured data

import { generateHreflangUrls, getLocaleCode, getLocalizedPageUrl } from './routing';

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  canonicalUrl: string;
  hreflang: Array<{
    lang: string;
    url: string;
  }>;
  structuredData?: object;
}

export const generateSEOConfig = (
  page: string,
  language: string,
  baseUrl: string = 'https://tuggi.com'
): SEOConfig => {
  const seoData: Record<string, Record<string, Partial<SEOConfig>>> = {
    home: {
      EN: {
        title: 'Tuggi Drive - Transforming Journeys into Meaningful Experiences | B2B Tourism Technology',
        description: 'Transform your transportation business with Tuggi Drive Navigation Audio App. AI-powered cultural storytelling for professional drivers. Increase revenue and satisfaction.',
        keywords: 'AI travel guide for transport companies, B2B tourism technology, Tuggi Drive navigation audio app, transportation storytelling, fleet management software, cultural tourism tech',
        ogTitle: 'Tuggi Drive - Transforming Journeys into Meaningful Experiences',
        ogDescription: 'Cultural storytelling platform for transportation companies. Transform rides into memorable experiences with automatic narration and multilingual support.'
      },
      PT: {
        title: 'Tuggi Drive - Transformando Jornadas em Experiências Significativas | Tecnologia B2B Turismo',
        description: 'Transforme seu negócio de transporte com o App de Áudio Tuggi Drive. Narrativa cultural com IA para motoristas profissionais. Aumente receita e satisfação .',
        keywords: 'guia de viagem IA empresas transporte, tecnologia B2B turismo, app navegação áudio Tuggi Drive, narrativa transporte, software gestão frota, tecnologia turismo cultural',
        ogTitle: 'Tuggi Drive - Transformando Jornadas em Experiências Significativas',
        ogDescription: 'Plataforma de narrativa cultural para empresas de transporte. Transforme viagens em experiências memoráveis com narração automática e suporte multilíngue.'
      },
      ES: {
        title: 'Tuggi Drive - Transformando Viajes en Experiencias Significativas | Tecnología B2B Turismo',
        description: 'Transforme su negocio de transporte con la App de Audio Tuggi Drive. Narrativa cultural con IA para conductores profesionales. Aumente ingresos y satisfacción.',
        keywords: 'guía de viaje IA empresas transporte, tecnología B2B turismo, app navegación audio Tuggi Drive, narrativa transporte, software gestión flotas, tecnología turismo cultural',
        ogTitle: 'Tuggi Drive - Transformando Viajes en Experiencias Significativas',
        ogDescription: 'Plataforma de narrativa cultural para empresas de transporte. Transforme viajes en experiencias memorables con narración automática y soporte multilingüe.'
      }
    },
    products: {
      EN: {
        title: 'Tuggi Drive - Transforming Journeys into Meaningful Experiences | B2B Tourism Technology',
        description: 'Transform your transportation business with Tuggi Drive Navigation Audio App. AI-powered cultural storytelling for professional drivers. Increase revenue and satisfaction.',
        keywords: 'AI travel guide for transport companies, B2B tourism technology, Tuggi Drive navigation audio app, transportation storytelling, fleet management software, cultural tourism tech',
        ogTitle: 'Tuggi Drive - Transforming Journeys into Meaningful Experiences',
        ogDescription: 'Cultural storytelling platform for transportation companies. Transform rides into memorable experiences with automatic narration and multilingual support.'
      },
      PT: {
        title: 'Tuggi Drive - Transformando Jornadas em Experiências Significativas | Tecnologia B2B Turismo',
        description: 'Transforme seu negócio de transporte com o App de Áudio Tuggi Drive. Narrativa cultural com IA para motoristas profissionais. Aumente receita e satisfação .',
        keywords: 'guia de viagem IA empresas transporte, tecnologia B2B turismo, app navegação áudio Tuggi Drive, narrativa transporte, software gestão frota, tecnologia turismo cultural',
        ogTitle: 'Tuggi Drive - Transformando Jornadas em Experiências Significativas',
        ogDescription: 'Plataforma de narrativa cultural para empresas de transporte. Transforme viagens em experiências memoráveis com narração automática e suporte multilíngue.'
      },
      ES: {
        title: 'Tuggi Drive - Transformando Viajes en Experiencias Significativas | Tecnología B2B Turismo',
        description: 'Transforme su negocio de transporte con la App de Audio Tuggi Drive. Narrativa cultural con IA para conductores profesionales. Aumente ingresos y satisfacción.',
        keywords: 'guía de viaje IA empresas transporte, tecnología B2B turismo, app navegación audio Tuggi Drive, narrativa transporte, software gestión flotas, tecnología turismo cultural',
        ogTitle: 'Tuggi Drive - Transformando Viajes en Experiencias Significativas',
        ogDescription: 'Plataforma de narrativa cultural para empresas de transporte. Transforme viajes en experiencias memorables con narración automática y soporte multilingüe.'
      }
    },
    benefits: {
      EN: {
        title: 'Tuggi Drive - Transforming Journeys into Meaningful Experiences | B2B Tourism Technology',
        description: 'Transform your transportation business with Tuggi Drive Navigation Audio App. AI-powered cultural storytelling for professional drivers. Increase revenue and satisfaction.',
        keywords: 'AI travel guide for transport companies, B2B tourism technology, Tuggi Drive navigation audio app, transportation storytelling, fleet management software, cultural tourism tech',
        ogTitle: 'Tuggi Drive - Transforming Journeys into Meaningful Experiences',
        ogDescription: 'Cultural storytelling platform for transportation companies. Transform rides into memorable experiences with automatic narration and multilingual support.'
      },
      PT: {
        title: 'Tuggi Drive - Transformando Jornadas em Experiências Significativas | Tecnologia B2B Turismo',
        description: 'Transforme seu negócio de transporte com o App de Áudio Tuggi Drive. Narrativa cultural com IA para motoristas profissionais. Aumente receita e satisfação .',
        keywords: 'guia de viagem IA empresas transporte, tecnologia B2B turismo, app navegação áudio Tuggi Drive, narrativa transporte, software gestão frota, tecnologia turismo cultural',
        ogTitle: 'Tuggi Drive - Transformando Jornadas em Experiências Significativas',
        ogDescription: 'Plataforma de narrativa cultural para empresas de transporte. Transforme viagens em experiências memoráveis com narração automática e suporte multilíngue.'
      },
      ES: {
        title: 'Tuggi Drive - Transformando Viajes en Experiencias Significativas | Tecnología B2B Turismo',
        description: 'Transforme su negocio de transporte con la App de Audio Tuggi Drive. Narrativa cultural con IA para conductores profesionales. Aumente ingresos y satisfacción.',
        keywords: 'guía de viaje IA empresas transporte, tecnología B2B turismo, app navegación audio Tuggi Drive, narrativa transporte, software gestión flotas, tecnología turismo cultural',
        ogTitle: 'Tuggi Drive - Transformando Viajes en Experiencias Significativas',
        ogDescription: 'Plataforma de narrativa cultural para empresas de transporte. Transforme viajes en experiencias memorables con narración automática y soporte multilingüe.'
      }
    },
    contact: {
      EN: {
        title: 'Tuggi Drive - Transforming Journeys into Meaningful Experiences | B2B Tourism Technology',
        description: 'Transform your transportation business with Tuggi Drive Navigation Audio App. AI-powered cultural storytelling for professional drivers. Increase revenue and satisfaction.',
        keywords: 'AI travel guide for transport companies, B2B tourism technology, Tuggi Drive navigation audio app, transportation storytelling, fleet management software, cultural tourism tech',
        ogTitle: 'Tuggi Drive - Transforming Journeys into Meaningful Experiences',
        ogDescription: 'Cultural storytelling platform for transportation companies. Transform rides into memorable experiences with automatic narration and multilingual support.'
      },
      PT: {
        title: 'Tuggi Drive - Transformando Jornadas em Experiências Significativas | Tecnologia B2B Turismo',
        description: 'Transforme seu negócio de transporte com o App de Áudio Tuggi Drive. Narrativa cultural com IA para motoristas profissionais. Aumente receita e satisfação .',
        keywords: 'guia de viagem IA empresas transporte, tecnologia B2B turismo, app navegação áudio Tuggi Drive, narrativa transporte, software gestão frota, tecnologia turismo cultural',
        ogTitle: 'Tuggi Drive - Transformando Jornadas em Experiências Significativas',
        ogDescription: 'Plataforma de narrativa cultural para empresas de transporte. Transforme viagens em experiências memoráveis com narração automática e suporte multilíngue.'
      },
      ES: {
        title: 'Tuggi Drive - Transformando Viajes en Experiencias Significativas | Tecnología B2B Turismo',
        description: 'Transforme su negocio de transporte con la App de Audio Tuggi Drive. Narrativa cultural con IA para conductores profesionales. Aumente ingresos y satisfacción.',
        keywords: 'guía de viaje IA empresas transporte, tecnología B2B turismo, app navegación audio Tuggi Drive, narrativa transporte, software gestión flotas, tecnología turismo cultural',
        ogTitle: 'Tuggi Drive - Transformando Viajes en Experiencias Significativas',
        ogDescription: 'Plataforma de narrativa cultural para empresas de transporte. Transforme viajes en experiencias memorables con narración automática y soporte multilingüe.'
      }
    },
    purpose: {
      EN: {
        title: 'Tuggi Drive - Transforming Journeys into Meaningful Experiences | B2B Tourism Technology',
        description: 'Transform your transportation business with Tuggi Drive Navigation Audio App. AI-powered cultural storytelling for professional drivers. Increase revenue and satisfaction.',
        keywords: 'AI travel guide for transport companies, B2B tourism technology, Tuggi Drive navigation audio app, transportation storytelling, fleet management software, cultural tourism tech',
        ogTitle: 'Tuggi Drive - Transforming Journeys into Meaningful Experiences',
        ogDescription: 'Cultural storytelling platform for transportation companies. Transform rides into memorable experiences with automatic narration and multilingual support.'
      },
      PT: {
        title: 'Tuggi Drive - Transformando Jornadas em Experiências Significativas | Tecnologia B2B Turismo',
        description: 'Transforme seu negócio de transporte com o App de Áudio Tuggi Drive. Narrativa cultural com IA para motoristas profissionais. Aumente receita e satisfação .',
        keywords: 'guia de viagem IA empresas transporte, tecnologia B2B turismo, app navegação áudio Tuggi Drive, narrativa transporte, software gestão frota, tecnologia turismo cultural',
        ogTitle: 'Tuggi Drive - Transformando Jornadas em Experiências Significativas',
        ogDescription: 'Plataforma de narrativa cultural para empresas de transporte. Transforme viagens em experiências memoráveis com narração automática e suporte multilíngue.'
      },
      ES: {
        title: 'Tuggi Drive - Transformando Viajes en Experiencias Significativas | Tecnología B2B Turismo',
        description: 'Transforme su negocio de transporte con la App de Audio Tuggi Drive. Narrativa cultural con IA para conductores profesionales. Aumente ingresos y satisfacción.',
        keywords: 'guía de viaje IA empresas transporte, tecnología B2B turismo, app navegación audio Tuggi Drive, narrativa transporte, software gestión flotas, tecnología turismo cultural',
        ogTitle: 'Tuggi Drive - Transformando Viajes en Experiencias Significativas',
        ogDescription: 'Plataforma de narrativa cultural para empresas de transporte. Transforme viajes en experiencias memorables con narración automática y soporte multilingüe.'
      }
    },
    story: {
      EN: {
        title: 'Tuggi Drive - Transforming Journeys into Meaningful Experiences | B2B Tourism Technology',
        description: 'Transform your transportation business with Tuggi Drive Navigation Audio App. AI-powered cultural storytelling for professional drivers. Increase revenue and satisfaction.',
        keywords: 'AI travel guide for transport companies, B2B tourism technology, Tuggi Drive navigation audio app, transportation storytelling, fleet management software, cultural tourism tech',
        ogTitle: 'Tuggi Drive - Transforming Journeys into Meaningful Experiences',
        ogDescription: 'Cultural storytelling platform for transportation companies. Transform rides into memorable experiences with automatic narration and multilingual support.'
      },
      PT: {
        title: 'Tuggi Drive - Transformando Jornadas em Experiências Significativas | Tecnologia B2B Turismo',
        description: 'Transforme seu negócio de transporte com o App de Áudio Tuggi Drive. Narrativa cultural com IA para motoristas profissionais. Aumente receita e satisfação .',
        keywords: 'guia de viagem IA empresas transporte, tecnologia B2B turismo, app navegação áudio Tuggi Drive, narrativa transporte, software gestão frota, tecnologia turismo cultural',
        ogTitle: 'Tuggi Drive - Transformando Jornadas em Experiências Significativas',
        ogDescription: 'Plataforma de narrativa cultural para empresas de transporte. Transforme viagens em experiências memoráveis com narração automática e suporte multilíngue.'
      },
      ES: {
        title: 'Tuggi Drive - Transformando Viajes en Experiencias Significativas | Tecnología B2B Turismo',
        description: 'Transforme su negocio de transporte con la App de Audio Tuggi Drive. Narrativa cultural con IA para conductores profesionales. Aumente ingresos y satisfacción.',
        keywords: 'guía de viaje IA empresas transporte, tecnología B2B turismo, app navegación audio Tuggi Drive, narrativa transporte, software gestión flotas, tecnología turismo cultural',
        ogTitle: 'Tuggi Drive - Transformando Viajes en Experiencias Significativas',
        ogDescription: 'Plataforma de narrativa cultural para empresas de transporte. Transforme viajes en experiencias memorables con narración automática y soporte multilingüe.'
      }
    },
    privacy: {
      EN: {
        title: 'Tuggi Drive - Transforming Journeys into Meaningful Experiences | B2B Tourism Technology',
        description: 'Transform your transportation business with Tuggi Drive Navigation Audio App. AI-powered cultural storytelling for professional drivers. Increase revenue and satisfaction.',
        keywords: 'AI travel guide for transport companies, B2B tourism technology, Tuggi Drive navigation audio app, transportation storytelling, fleet management software, cultural tourism tech',
        ogTitle: 'Tuggi Drive - Transforming Journeys into Meaningful Experiences',
        ogDescription: 'Cultural storytelling platform for transportation companies. Transform rides into memorable experiences with automatic narration and multilingual support.'
      },
      PT: {
        title: 'Tuggi Drive - Transformando Jornadas em Experiências Significativas | Tecnologia B2B Turismo',
        description: 'Transforme seu negócio de transporte com o App de Áudio Tuggi Drive. Narrativa cultural com IA para motoristas profissionais. Aumente receita e satisfação .',
        keywords: 'guia de viagem IA empresas transporte, tecnologia B2B turismo, app navegação áudio Tuggi Drive, narrativa transporte, software gestão frota, tecnologia turismo cultural',
        ogTitle: 'Tuggi Drive - Transformando Jornadas em Experiências Significativas',
        ogDescription: 'Plataforma de narrativa cultural para empresas de transporte. Transforme viagens em experiências memoráveis com narração automática e suporte multilíngue.'
      },
      ES: {
        title: 'Tuggi Drive - Transformando Viajes en Experiencias Significativas | Tecnología B2B Turismo',
        description: 'Transforme su negocio de transporte con la App de Audio Tuggi Drive. Narrativa cultural con IA para conductores profesionales. Aumente ingresos y satisfacción.',
        keywords: 'guía de viaje IA empresas transporte, tecnología B2B turismo, app navegación audio Tuggi Drive, narrativa transporte, software gestión flotas, tecnología turismo cultural',
        ogTitle: 'Tuggi Drive - Transformando Viajes en Experiencias Significativas',
        ogDescription: 'Plataforma de narrativa cultural para empresas de transporte. Transforme viajes en experiencias memorables con narración automática y soporte multilingüe.'
      }
    },
    cookies: {
      EN: {
        title: 'Tuggi Drive - Transforming Journeys into Meaningful Experiences | B2B Tourism Technology',
        description: 'Transform your transportation business with Tuggi Drive Navigation Audio App. AI-powered cultural storytelling for professional drivers. Increase revenue and satisfaction.',
        keywords: 'AI travel guide for transport companies, B2B tourism technology, Tuggi Drive navigation audio app, transportation storytelling, fleet management software, cultural tourism tech',
        ogTitle: 'Tuggi Drive - Transforming Journeys into Meaningful Experiences',
        ogDescription: 'Cultural storytelling platform for transportation companies. Transform rides into memorable experiences with automatic narration and multilingual support.'
      },
      PT: {
        title: 'Tuggi Drive - Transformando Jornadas em Experiências Significativas | Tecnologia B2B Turismo',
        description: 'Transforme seu negócio de transporte com o App de Áudio Tuggi Drive. Narrativa cultural com IA para motoristas profissionais. Aumente receita e satisfação .',
        keywords: 'guia de viagem IA empresas transporte, tecnologia B2B turismo, app navegação áudio Tuggi Drive, narrativa transporte, software gestão frota, tecnologia turismo cultural',
        ogTitle: 'Tuggi Drive - Transformando Jornadas em Experiências Significativas',
        ogDescription: 'Plataforma de narrativa cultural para empresas de transporte. Transforme viagens em experiências memoráveis com narração automática e suporte multilíngue.'
      },
      ES: {
        title: 'Tuggi Drive - Transformando Viajes en Experiencias Significativas | Tecnología B2B Turismo',
        description: 'Transforme su negocio de transporte con la App de Audio Tuggi Drive. Narrativa cultural con IA para conductores profesionales. Aumente ingresos y satisfacción.',
        keywords: 'guía de viaje IA empresas transporte, tecnología B2B turismo, app navegación audio Tuggi Drive, narrativa transporte, software gestión flotas, tecnología turismo cultural',
        ogTitle: 'Tuggi Drive - Transformando Viajes en Experiencias Significativas',
        ogDescription: 'Plataforma de narrativa cultural para empresas de transporte. Transforme viajes en experiencias memorables con narración automática y soporte multilingüe.'
      }
    }
  };

  const pageData = seoData[page]?.[language] || seoData[page]?.['EN'] || seoData['home']['EN'];
  
  // Generate hreflang URLs for all supported languages
  const hreflang = generateHreflangUrls(page, baseUrl);

  // Generate structured data based on page type
  const structuredData = generateStructuredData(page, language, baseUrl);

  // Generate canonical URL with proper localized page URL
  const langCode = language === 'EN' ? 'en' : language === 'PT' ? 'pt' : 'es';
  const localizedPageUrl = getLocalizedPageUrl(page, language);
  const canonicalUrl = page === 'home' 
    ? `${baseUrl}/${langCode}/`
    : `${baseUrl}/${langCode}/${localizedPageUrl}`;

  return {
    title: pageData.title || 'Tuggi Drive - AI Travel Guide for Transport Companies',
    description: pageData.description || 'Transform your transportation business with AI-powered cultural storytelling technology.',
    keywords: pageData.keywords || 'AI travel guide for transport companies, B2B tourism technology, Tuggi Drive navigation audio app',
    ogTitle: pageData.ogTitle || pageData.title || 'Tuggi Drive - AI Travel Guide for Transport Companies',
    ogDescription: pageData.ogDescription || pageData.description || 'Transform your transportation business with AI-powered cultural storytelling technology.',
    canonicalUrl,
    hreflang,
    structuredData
  };
};

// Generate structured data (Schema.org) for different page types
export const generateStructuredData = (page: string, language: string, baseUrl: string) => {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Tuggi",
    "url": baseUrl,
    "logo": `${baseUrl}/logo.png`,
    "description": "AI travel guide technology for transport companies and B2B tourism businesses",
    "foundingDate": "2020",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-123-4567",
      "contactType": "customer service",
      "email": "hello@tuggi.app",
      "availableLanguage": ["English", "Portuguese", "Spanish"]
    },
    "sameAs": [
      "https://linkedin.com/company/tuggi",
      "https://instagram.com/tuggi"
    ],
    "industry": "Travel Technology",
    "numberOfEmployees": "50-100",
    "keywords": "AI travel guide, B2B tourism technology, transportation software, cultural storytelling",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "500",
      "bestRating": "5"
    },
    "offers": {
      "@type": "Offer",
      "name": "Tuggi Drive",
      "description": "AI-powered navigation audio app for transport companies",
      "category": "Software as a Service"
    }
  };

  switch (page) {
    case 'products':
      return {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Tuggi Drive",
        "description": "AI-powered navigation audio app for transport companies with cultural storytelling",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "iOS, Android, Web",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "USD",
          "price": "Contact for pricing",
          "availability": "https://schema.org/InStock"
        },
        "provider": organizationData,
        "featureList": [
          "AI-powered cultural storytelling",
          "GPS-triggered narration",
          "Multilingual support",
          "Fleet management dashboard",
          "Navigation app integration"
        ],
        "screenshot": `${baseUrl}/tuggi-drive-screenshot.png`,
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "ratingCount": "500",
          "bestRating": "5"
        },
        "inLanguage": getLocaleCode(language)
      };

    case 'contact':
      return {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact Tuggi",
        "description": "Contact Tuggi for AI travel guide technology demo and consultation",
        "mainEntity": organizationData,
        "inLanguage": getLocaleCode(language),
        "potentialAction": {
          "@type": "ContactAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": `${baseUrl}/${language.toLowerCase()}/contact`,
            "actionPlatform": [
              "http://schema.org/DesktopWebPlatform",
              "http://schema.org/MobileWebPlatform"
            ]
          }
        }
      };

    case 'benefits':
      return {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Business Benefits of AI Travel Guide Technology for Transport Companies",
        "description": "Proven ROI and business benefits of implementing AI travel guide technology in transportation businesses",
        "author": organizationData,
        "publisher": organizationData,
        "datePublished": "2024-01-01",
        "dateModified": new Date().toISOString().split('T')[0],
        "mainEntityOfPage": `${baseUrl}/${language.toLowerCase()}/benefits`,
        "articleSection": "Business Benefits",
        "keywords": "AI travel guide ROI, B2B tourism technology benefits, transportation revenue growth",
        "inLanguage": getLocaleCode(language)
      };

    case 'story':
      return {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "About Tuggi - Our Story & Team",
        "description": "Learn about Tuggi's story and meet the team behind AI travel guide technology for B2B tourism",
        "mainEntity": organizationData,
        "inLanguage": getLocaleCode(language),
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": ["h1", "h2", ".team-member"]
        }
      };

    case 'purpose':
      return {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "Our Purpose - Transforming Transportation with AI Travel Guide Technology",
        "description": "Discover Tuggi's mission to transform transportation into meaningful cultural experiences",
        "mainEntity": organizationData,
        "inLanguage": getLocaleCode(language),
        "about": {
          "@type": "Thing",
          "name": "AI Travel Guide Technology",
          "description": "Technology that transforms transportation into cultural experiences"
        }
      };

    case 'privacy':
      return {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Privacy Policy - Tuggi Drive",
        "description": "Privacy policy and data protection information for Tuggi Drive AI travel guide technology",
        "mainEntity": organizationData,
        "inLanguage": getLocaleCode(language),
        "about": {
          "@type": "Thing",
          "name": "Privacy Policy",
          "description": "Data protection and privacy rights information"
        },
        "datePublished": "2024-01-15",
        "dateModified": "2024-01-15"
      };

    case 'cookies':
      return {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Cookie Policy - Tuggi Drive",
        "description": "Cookie usage policy and privacy controls for Tuggi Drive AI travel guide technology",
        "mainEntity": organizationData,
        "inLanguage": getLocaleCode(language),
        "about": {
          "@type": "Thing",
          "name": "Cookie Policy",
          "description": "Cookie usage and privacy control information"
        },
        "datePublished": "2024-01-15",
        "dateModified": "2024-01-15"
      };

    default:
      return {
        ...organizationData,
        "inLanguage": getLocaleCode(language)
      };
  }
};

export const updatePageSEO = (seoConfig: SEOConfig) => {
  // Update document title
  document.title = seoConfig.title;

  // Update meta tags
  const updateMetaTag = (name: string, content: string, property?: boolean) => {
    const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
    let meta = document.querySelector(selector) as HTMLMetaElement;
    
    if (!meta) {
      meta = document.createElement('meta');
      if (property) {
        meta.setAttribute('property', name);
      } else {
        meta.setAttribute('name', name);
      }
      document.head.appendChild(meta);
    }
    
    meta.setAttribute('content', content);
  };

  // Update basic meta tags
  updateMetaTag('description', seoConfig.description);
  updateMetaTag('keywords', seoConfig.keywords);
  updateMetaTag('robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
  updateMetaTag('author', 'Tuggi Technologies');

  // Update Open Graph tags
  updateMetaTag('og:title', seoConfig.ogTitle, true);
  updateMetaTag('og:description', seoConfig.ogDescription, true);
  updateMetaTag('og:url', seoConfig.canonicalUrl, true);
  updateMetaTag('og:type', 'website', true);
  updateMetaTag('og:site_name', 'Tuggi', true);
  updateMetaTag('og:image', `${new URL(seoConfig.canonicalUrl).origin}/og-image.png`, true);
  updateMetaTag('og:image:width', '1200', true);
  updateMetaTag('og:image:height', '630', true);
  updateMetaTag('og:image:alt', 'Tuggi Drive - AI Travel Guide for Transport Companies', true);

  // Update Twitter Card tags
  updateMetaTag('twitter:card', 'summary_large_image');
  updateMetaTag('twitter:title', seoConfig.ogTitle);
  updateMetaTag('twitter:description', seoConfig.ogDescription);
  updateMetaTag('twitter:image', `${new URL(seoConfig.canonicalUrl).origin}/og-image.png`);
  updateMetaTag('twitter:site', '@tuggi');
  updateMetaTag('twitter:creator', '@tuggi');

  // Update canonical URL
  let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', seoConfig.canonicalUrl);

  // Update hreflang tags
  const existingHreflang = document.querySelectorAll('link[rel="alternate"][hreflang]');
  existingHreflang.forEach(link => link.remove());

  seoConfig.hreflang.forEach(({ lang, url }) => {
    const hreflangLink = document.createElement('link');
    hreflangLink.setAttribute('rel', 'alternate');
    hreflangLink.setAttribute('hreflang', lang);
    hreflangLink.setAttribute('href', url);
    document.head.appendChild(hreflangLink);
  });

  // Add x-default hreflang (pointing to English version)
  const xDefaultLink = document.createElement('link');
  xDefaultLink.setAttribute('rel', 'alternate');
  xDefaultLink.setAttribute('hreflang', 'x-default');
  xDefaultLink.setAttribute('href', seoConfig.hreflang.find(h => h.lang === 'en-US')?.url || seoConfig.canonicalUrl);
  document.head.appendChild(xDefaultLink);

  // Update structured data
  if (seoConfig.structuredData) {
    let structuredDataScript = document.querySelector('script[type="application/ld+json"]');
    if (!structuredDataScript) {
      structuredDataScript = document.createElement('script');
      structuredDataScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(structuredDataScript);
    }
    structuredDataScript.textContent = JSON.stringify(seoConfig.structuredData);
  }

  // Update viewport and mobile optimization
  let viewport = document.querySelector('meta[name="viewport"]') as HTMLMetaElement;
  if (!viewport) {
    viewport = document.createElement('meta');
    viewport.setAttribute('name', 'viewport');
    document.head.appendChild(viewport);
  }
  viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, viewport-fit=cover');

  // Add theme color for mobile browsers
  updateMetaTag('theme-color', '#00A8E8');
  updateMetaTag('msapplication-TileColor', '#00A8E8');
  updateMetaTag('apple-mobile-web-app-capable', 'yes');
  updateMetaTag('apple-mobile-web-app-status-bar-style', 'default');
};

// Enhanced Google Analytics tracking with multilingual support
export const trackPageView = (page: string, language: string, measurementId?: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    const locale = getLocaleCode(language);
    
    // Track Core Web Vitals with language context
    const trackWebVitals = () => {
      if (typeof window !== 'undefined') {
        // Use dynamic import to avoid build-time dependency issues
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          getCLS((metric) => {
            (window as any).gtag('event', 'web_vitals', {
              event_category: 'Performance',
              event_label: 'CLS',
              value: Math.round(metric.value * 1000),
              language: language,
              locale: locale,
              page_type: page
            });
          });

          getFID((metric) => {
            (window as any).gtag('event', 'web_vitals', {
              event_category: 'Performance',
              event_label: 'FID',
              value: Math.round(metric.value),
              language: language,
              locale: locale,
              page_type: page
            });
          });

          getFCP((metric) => {
            (window as any).gtag('event', 'web_vitals', {
              event_category: 'Performance',
              event_label: 'FCP',
              value: Math.round(metric.value),
              language: language,
              locale: locale,
              page_type: page
            });
          });

          getLCP((metric) => {
            (window as any).gtag('event', 'web_vitals', {
              event_category: 'Performance',
              event_label: 'LCP',
              value: Math.round(metric.value),
              language: language,
              locale: locale,
              page_type: page
            });
          });

          getTTFB((metric) => {
            (window as any).gtag('event', 'web_vitals', {
              event_category: 'Performance',
              event_label: 'TTFB',
              value: Math.round(metric.value),
              language: language,
              locale: locale,
              page_type: page
            });
          });
        }).catch((error) => {
          console.warn('Web Vitals library not available:', error);
        });
      }
    };

    // Enhanced page view tracking with multilingual context
    if (measurementId) {
      (window as any).gtag('config', measurementId, {
        page_title: document.title,
        page_location: window.location.href,
        language: language,
        locale: locale,
        custom_map: {
          custom_parameter_1: 'language',
          custom_parameter_2: 'page_type',
          custom_parameter_3: 'locale',
          custom_parameter_4: 'user_engagement',
          custom_parameter_5: 'conversion_funnel'
        }
      });
    }

    (window as any).gtag('event', 'page_view', {
      language: language,
      locale: locale,
      page_type: page,
      page_title: document.title,
      page_location: window.location.href,
      timestamp: new Date().toISOString(),
      user_agent: navigator.userAgent,
      screen_resolution: `${screen.width}x${screen.height}`,
      viewport_size: `${window.innerWidth}x${window.innerHeight}`,
      referrer: document.referrer,
      is_mobile: /Mobi|Android/i.test(navigator.userAgent),
      connection_type: (navigator as any).connection?.effectiveType || 'unknown'
    });

    // Track performance metrics with language context
    setTimeout(trackWebVitals, 1000);

    // Track scroll depth with multilingual context
    let maxScrollDepth = 0;
    const trackScrollDepth = () => {
      const scrollDepth = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      if (scrollDepth > maxScrollDepth && scrollDepth % 25 === 0) {
        maxScrollDepth = scrollDepth;
        (window as any).gtag('event', 'scroll_depth', {
          event_category: 'User Engagement',
          event_label: `${scrollDepth}%`,
          page_type: page,
          language: language,
          locale: locale
        });
      }
    };

    window.addEventListener('scroll', trackScrollDepth, { passive: true });

    // Track time on page with multilingual context
    const startTime = Date.now();
    const trackTimeOnPage = () => {
      const timeOnPage = Math.round((Date.now() - startTime) / 1000);
      (window as any).gtag('event', 'time_on_page', {
        event_category: 'User Engagement',
        value: timeOnPage,
        page_type: page,
        language: language,
        locale: locale
      });
    };

    window.addEventListener('beforeunload', trackTimeOnPage);
    
    // Also track time on page when user switches tabs
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        trackTimeOnPage();
      }
    });
  }
};

// Track language changes with detailed analytics
export const trackLanguageChange = (newLanguage: string, previousLanguage: string, page: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'language_change', {
      event_category: 'User Interaction',
      event_label: `${previousLanguage}_to_${newLanguage}`,
      language: newLanguage,
      previous_language: previousLanguage,
      locale: getLocaleCode(newLanguage),
      previous_locale: getLocaleCode(previousLanguage),
      page_type: page,
      timestamp: new Date().toISOString(),
      user_preference: 'manual_selection'
    });

    // Track language preference for future sessions
    localStorage.setItem('tuggi_preferred_language', newLanguage);
    
    // Track conversion funnel impact of language change
    (window as any).gtag('event', 'conversion_funnel', {
      event_category: 'Language Optimization',
      event_label: `language_switch_${page}`,
      language: newLanguage,
      locale: getLocaleCode(newLanguage),
      funnel_impact: 'language_localization'
    });
  }
};

// Enhanced CTA tracking with conversion funnel data and multilingual context
export const trackCTAClick = (ctaType: string, page: string, language: string, additionalData?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    const locale = getLocaleCode(language);
    
    (window as any).gtag('event', 'cta_click', {
      event_category: 'CTA Interaction',
      event_label: ctaType,
      page_type: page,
      language: language,
      locale: locale,
      cta_type: ctaType,
      timestamp: new Date().toISOString(),
      conversion_step: getConversionStep(ctaType),
      user_journey_stage: getUserJourneyStage(page),
      localized_content: true,
      ...additionalData
    });

    // Track conversion funnel progression with language context
    (window as any).gtag('event', 'conversion_funnel', {
      event_category: 'Conversion Tracking',
      event_label: `${page}_to_${ctaType}`,
      funnel_step: getConversionStep(ctaType),
      language: language,
      locale: locale,
      page_type: page,
      multilingual_journey: true
    });

    // Track high-value conversions
    const conversionValue = getCTAValue(ctaType);
    if (conversionValue >= 100) {
      (window as any).gtag('event', 'conversion', {
        event_category: 'High Value Conversion',
        event_label: ctaType,
        value: conversionValue,
        currency: 'USD',
        language: language,
        locale: locale
      });
    }
  }
};

// Helper functions for enhanced tracking
const getConversionStep = (ctaType: string): number => {
  const conversionMap: Record<string, number> = {
    'learn_more': 1,
    'view_features': 2,
    'request_demo': 3,
    'contact_sales': 4,
    'schedule_call': 5,
    'start_trial': 6
  };
  return conversionMap[ctaType] || 1;
};

const getUserJourneyStage = (page: string): string => {
  const stageMap: Record<string, string> = {
    'home': 'awareness',
    'products': 'consideration',
    'benefits': 'evaluation',
    'contact': 'conversion',
    'purpose': 'awareness',
    'story': 'trust_building',
    'privacy': 'legal_compliance',
    'cookies': 'legal_compliance'
  };
  return stageMap[page] || 'unknown';
};

const getCTAValue = (ctaType: string): number => {
  const valueMap: Record<string, number> = {
    'request_demo': 100,
    'contact_sales': 150,
    'schedule_call': 120,
    'learn_more': 25,
    'view_features': 50,
    'download_case_study': 75
  };
  return valueMap[ctaType] || 10;
};

// Enhanced form tracking with lead scoring and multilingual context
export const trackFormSubmission = (formType: string, success: boolean, formData?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    const leadScore = calculateLeadScore(formData);
    const language = formData?.language || 'EN';
    const locale = getLocaleCode(language);
    
    (window as any).gtag('event', 'form_submission', {
      event_category: 'Form Interaction',
      event_label: formType,
      success: success,
      form_type: formType,
      language: language,
      locale: locale,
      timestamp: new Date().toISOString(),
      lead_score: leadScore,
      company_size: getCompanySize(formData?.companyName),
      industry_vertical: getIndustryVertical(formData?.message),
      country: formData?.country || 'unknown',
      multilingual_form: true,
      ...formData
    });

    // Track as conversion if successful
    if (success) {
      (window as any).gtag('event', 'conversion', {
        event_category: 'Lead Generation',
        event_label: formType,
        value: leadScore,
        currency: 'USD',
        language: language,
        locale: locale,
        lead_quality: leadScore > 70 ? 'high' : leadScore > 40 ? 'medium' : 'low'
      });

      // Track high-quality leads separately
      if (leadScore > 70) {
        (window as any).gtag('event', 'high_quality_lead', {
          event_category: 'Premium Lead Generation',
          event_label: formType,
          value: leadScore,
          language: language,
          locale: locale,
          company_name: formData?.companyName,
          country: formData?.country
        });
      }
    }
  }
};

// Lead scoring algorithm with multilingual considerations
const calculateLeadScore = (formData?: Record<string, any>): number => {
  let score = 0;
  
  if (formData?.companyName) score += 20;
  if (formData?.email?.includes('.com') || formData?.email?.includes('.org')) score += 15;
  if (formData?.phone) score += 10;
  if (formData?.message?.length > 50) score += 15;
  
  // Geographic scoring
  const highValueCountries = ['United States', 'Canada', 'United Kingdom', 'Germany', 'Australia'];
  if (highValueCountries.includes(formData?.country)) score += 10;
  
  // Industry keywords boost
  const industryKeywords = ['transport', 'taxi', 'fleet', 'tour', 'travel', 'bus', 'shuttle', 'logistics'];
  const messageText = formData?.message?.toLowerCase() || '';
  industryKeywords.forEach(keyword => {
    if (messageText.includes(keyword)) score += 5;
  });
  
  // Language preference scoring (indicates market reach)
  const language = formData?.language || 'EN';
  if (language === 'PT') score += 5; // Brazilian market opportunity
  if (language === 'ES') score += 5; // Spanish-speaking market opportunity
  
  return Math.min(score, 100);
};

const getCompanySize = (companyName?: string): string => {
  if (!companyName) return 'unknown';
  const name = companyName.toLowerCase();
  if (name.includes('enterprise') || name.includes('corporation') || name.includes('group')) return 'enterprise';
  if (name.includes('llc') || name.includes('inc') || name.includes('ltd')) return 'medium';
  return 'small';
};

const getIndustryVertical = (message?: string): string => {
  if (!message) return 'unknown';
  const text = message.toLowerCase();
  if (text.includes('taxi') || text.includes('rideshare')) return 'taxi_rideshare';
  if (text.includes('tour') || text.includes('sightseeing')) return 'tourism';
  if (text.includes('bus') || text.includes('transit')) return 'public_transport';
  if (text.includes('fleet') || text.includes('logistics')) return 'fleet_management';
  if (text.includes('hotel') || text.includes('resort')) return 'hospitality';
  return 'general_transport';
};

// Enhanced link tracking with multilingual context
export const trackLinkClick = (linkType: string, destination: string, language: string, additionalData?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    const locale = getLocaleCode(language);
    
    (window as any).gtag('event', 'link_click', {
      event_category: 'Link Interaction',
      event_label: linkType,
      destination: destination,
      link_type: linkType,
      language: language,
      locale: locale,
      timestamp: new Date().toISOString(),
      is_external: !destination.includes(window.location.hostname),
      multilingual_context: true,
      ...additionalData
    });
  }
};

// Initialize Google Analytics with enhanced multilingual configuration
export const initializeAnalytics = (measurementId: string) => {
  if (typeof window !== 'undefined') {
    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);

    // Initialize gtag with enhanced multilingual configuration
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).gtag = function() {
      (window as any).dataLayer.push(arguments);
    };
    (window as any).gtag('js', new Date());
    
    // Enhanced configuration for multilingual tracking
    (window as any).gtag('config', measurementId, {
      page_title: document.title,
      page_location: window.location.href,
      // Enhanced custom dimensions for multilingual tracking
      custom_map: {
        custom_parameter_1: 'language',
        custom_parameter_2: 'locale',
        custom_parameter_3: 'page_type',
        custom_parameter_4: 'cta_type',
        custom_parameter_5: 'lead_score',
        custom_parameter_6: 'user_journey_stage',
        custom_parameter_7: 'conversion_funnel',
        custom_parameter_8: 'industry_vertical',
        custom_parameter_9: 'company_size',
        custom_parameter_10: 'multilingual_journey'
      },
      // Enhanced measurement settings
      enhanced_measurement: {
        scrolls: true,
        outbound_clicks: true,
        site_search: true,
        video_engagement: true,
        file_downloads: true
      },
      // Cookie settings for GDPR compliance
      cookie_flags: 'SameSite=None;Secure',
      anonymize_ip: true,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
      // Multilingual content grouping
      content_group1: 'Language Version',
      content_group2: 'Page Type',
      content_group3: 'User Journey Stage'
    });

    // Set up enhanced ecommerce tracking with multilingual context
    (window as any).gtag('config', measurementId, {
      currency: 'USD',
      country: 'US',
      language: 'en'
    });

    // Track initial language preference
    const preferredLanguage = localStorage.getItem('tuggi_preferred_language');
    if (preferredLanguage) {
      (window as any).gtag('event', 'returning_user_language', {
        event_category: 'User Preference',
        event_label: preferredLanguage,
        language: preferredLanguage,
        locale: getLocaleCode(preferredLanguage)
      });
    }
  }
};

// Performance monitoring with multilingual context
export const trackPerformanceMetrics = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if ((window as any).gtag && perfData) {
          // Get current language from URL
          const currentLanguage = window.location.pathname.split('/')[1] || 'en';
          const language = currentLanguage === 'pt' ? 'PT' : currentLanguage === 'es' ? 'ES' : 'EN';
          
          (window as any).gtag('event', 'performance_metrics', {
            event_category: 'Performance',
            dns_time: Math.round(perfData.domainLookupEnd - perfData.domainLookupStart),
            connect_time: Math.round(perfData.connectEnd - perfData.connectStart),
            response_time: Math.round(perfData.responseEnd - perfData.requestStart),
            dom_load_time: Math.round(perfData.domContentLoadedEventEnd - perfData.fetchStart),
            window_load_time: Math.round(perfData.loadEventEnd - perfData.fetchStart),
            page_type: window.location.pathname.split('/').pop() || 'home',
            language: language,
            locale: getLocaleCode(language),
            connection_type: (navigator as any).connection?.effectiveType || 'unknown'
          });
        }
      }, 1000);
    });
  }
};