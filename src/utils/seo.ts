// Enhanced SEO utilities for Tuggi with multilingual support and comprehensive tracking

import { generateHreflangUrls, getLocaleCode, getLocalizedPageUrl } from './routing';

// Extend Window interface for Google Analytics
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/**
 * Comprehensive SEO metadata interface supporting multiple languages
 */
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
        title: 'Tuggi – Discover culture and stories wherever you go',
        description: 'Explore the city with Tuggi: an app that narrates, through audio and in real-time, cultural curiosities and stories about the places around you. Freedom to walk, drive and discover.',
        keywords: 'cultural tourism app, audio guide, local stories, cultural curiosities, urban exploration, real-time narrative, place discovery',
        ogTitle: 'Tuggi – Discover culture and stories wherever you go',
        ogDescription: 'Explore the city with Tuggi: an app that narrates, through audio and in real-time, cultural curiosities and stories about the places around you. Freedom to walk, drive and discover.'
      },
      PT: {
        title: 'Tuggi – Descubra cultura e histórias por onde você passa',
        description: 'Explore a cidade com a Tuggi: um app que narra, por áudio e em tempo real, curiosidades culturais e histórias sobre os lugares ao seu redor. Liberdade para caminhar, dirigir e descobrir.',
        keywords: 'app de turismo cultural, guia de áudio, histórias locais, curiosidades culturais, exploração urbana, narrativa em tempo real, descoberta de lugares',
        ogTitle: 'Tuggi – Descubra cultura e histórias por onde você passa',
        ogDescription: 'Explore a cidade com a Tuggi: um app que narra, por áudio e em tempo real, curiosidades culturais e histórias sobre os lugares ao seu redor. Liberdade para caminhar, dirigir e descobrir.'
      },
      ES: {
        title: 'Tuggi – Descubre cultura e historias donde vayas',
        description: 'Explora la ciudad con Tuggi: una app que narra, por audio y en tiempo real, curiosidades culturales e historias sobre los lugares a tu alrededor. Libertad para caminar, conducir y descubrir.',
        keywords: 'app de turismo cultural, guía de audio, historias locales, curiosidades culturales, exploración urbana, narrativa en tiempo real, descubrimiento de lugares',
        ogTitle: 'Tuggi – Descubre cultura e historias donde vayas',
        ogDescription: 'Explora la ciudad con Tuggi: una app que narra, por audio y en tiempo real, curiosidades culturales e historias sobre los lugares a tu alrededor. Libertad para caminar, conducir y descubrir.'
      }
    },
    contact: {
      EN: {
        title: 'Contact Us - Tuggi – Discover culture and stories wherever you go',
        description: 'Get in touch with Tuggi to learn more about our cultural discovery app. Explore cities with real-time audio stories and cultural curiosities.',
        keywords: 'contact tuggi, cultural app support, audio guide app, local stories app, cultural tourism app',
        ogTitle: 'Contact Us - Tuggi – Discover culture and stories wherever you go',
        ogDescription: 'Get in touch with Tuggi to learn more about our cultural discovery app. Explore cities with real-time audio stories and cultural curiosities.'
      },
      PT: {
        title: 'Entre em Contato - Tuggi – Descubra cultura e histórias por onde você passa',
        description: 'Entre em contato com a Tuggi para saber mais sobre nosso app de descoberta cultural. Explore cidades com histórias em áudio em tempo real e curiosidades culturais.',
        keywords: 'contato tuggi, suporte app cultural, app guia de áudio, app histórias locais, app turismo cultural',
        ogTitle: 'Entre em Contato - Tuggi – Descubra cultura e histórias por onde você passa',
        ogDescription: 'Entre em contato com a Tuggi para saber mais sobre nosso app de descoberta cultural. Explore cidades com histórias em áudio em tempo real e curiosidades culturais.'
      },
      ES: {
        title: 'Contáctanos - Tuggi – Descubre cultura e historias donde vayas',
        description: 'Ponte en contacto con Tuggi para conocer más sobre nuestra app de descubrimiento cultural. Explora ciudades con historias de audio en tiempo real y curiosidades culturales.',
        keywords: 'contacto tuggi, soporte app cultural, app guía de audio, app historias locales, app turismo cultural',
        ogTitle: 'Contáctanos - Tuggi – Descubre cultura e historias donde vayas',
        ogDescription: 'Ponte en contacto con Tuggi para conocer más sobre nuestra app de descubrimiento cultural. Explora ciudades con historias de audio en tiempo real y curiosidades culturales.'
      }
    },
    purpose: {
      EN: {
        title: 'Our Purpose - Tuggi – Discover culture and stories wherever you go',
        description: 'Learn about Tuggi\'s mission to connect people with local culture through real-time audio stories and cultural discovery.',
        keywords: 'tuggi purpose, cultural discovery mission, local stories app, cultural tourism app, audio guide app',
        ogTitle: 'Our Purpose - Tuggi – Discover culture and stories wherever you go',
        ogDescription: 'Learn about Tuggi\'s mission to connect people with local culture through real-time audio stories and cultural discovery.'
      },
      PT: {
        title: 'Nosso Propósito - Tuggi – Descubra cultura e histórias por onde você passa',
        description: 'Conheça a missão da Tuggi de conectar pessoas com a cultura local através de histórias em áudio em tempo real e descoberta cultural.',
        keywords: 'propósito tuggi, missão descoberta cultural, app histórias locais, app turismo cultural, app guia de áudio',
        ogTitle: 'Nosso Propósito - Tuggi – Descubra cultura e histórias por onde você passa',
        ogDescription: 'Conheça a missão da Tuggi de conectar pessoas com a cultura local através de histórias em áudio em tempo real e descoberta cultural.'
      },
      ES: {
        title: 'Nuestro Propósito - Tuggi – Descubre cultura e historias donde vayas',
        description: 'Conoce la misión de Tuggi de conectar personas con la cultura local a través de historias de audio en tiempo real y descubrimiento cultural.',
        keywords: 'propósito tuggi, misión descubrimiento cultural, app historias locales, app turismo cultural, app guía de audio',
        ogTitle: 'Nuestro Propósito - Tuggi – Descubre cultura e historias donde vayas',
        ogDescription: 'Conoce la misión de Tuggi de conectar personas con la cultura local a través de historias de audio en tiempo real y descubrimiento cultural.'
      }
    },
    privacy: {
      EN: {
        title: 'Privacy Policy - Tuggi – Discover culture and stories wherever you go',
        description: 'Learn about how Tuggi protects your privacy and data while you explore cities with our cultural discovery app.',
        keywords: 'tuggi privacy policy, data protection, cultural app privacy, audio guide privacy, local stories app privacy',
        ogTitle: 'Privacy Policy - Tuggi – Discover culture and stories wherever you go',
        ogDescription: 'Learn about how Tuggi protects your privacy and data while you explore cities with our cultural discovery app.'
      },
      PT: {
        title: 'Política de Privacidade - Tuggi – Descubra cultura e histórias por onde você passa',
        description: 'Saiba como a Tuggi protege sua privacidade e dados enquanto você explora cidades com nosso app de descoberta cultural.',
        keywords: 'política privacidade tuggi, proteção dados, privacidade app cultural, privacidade guia áudio, privacidade app histórias locais',
        ogTitle: 'Política de Privacidade - Tuggi – Descubra cultura e histórias por onde você passa',
        ogDescription: 'Saiba como a Tuggi protege sua privacidade e dados enquanto você explora cidades com nosso app de descoberta cultural.'
      },
      ES: {
        title: 'Política de Privacidad - Tuggi – Descubre cultura e historias donde vayas',
        description: 'Conoce cómo Tuggi protege tu privacidad y datos mientras exploras ciudades con nuestra app de descubrimiento cultural.',
        keywords: 'política privacidad tuggi, protección datos, privacidad app cultural, privacidad guía audio, privacidad app historias locales',
        ogTitle: 'Política de Privacidad - Tuggi – Descubre cultura e historias donde vayas',
        ogDescription: 'Conoce cómo Tuggi protege tu privacidad y datos mientras exploras ciudades con nuestra app de descubrimiento cultural.'
      }
    },
    cookies: {
      EN: {
        title: 'Cookie Policy - Tuggi – Discover culture and stories wherever you go',
        description: 'Learn about how Tuggi uses cookies to enhance your cultural discovery experience and improve our app.',
        keywords: 'tuggi cookie policy, cookie usage, cultural app cookies, audio guide cookies, local stories app cookies',
        ogTitle: 'Cookie Policy - Tuggi – Discover culture and stories wherever you go',
        ogDescription: 'Learn about how Tuggi uses cookies to enhance your cultural discovery experience and improve our app.'
      },
      PT: {
        title: 'Política de Cookies - Tuggi – Descubra cultura e histórias por onde você passa',
        description: 'Saiba como a Tuggi usa cookies para melhorar sua experiência de descoberta cultural e aprimorar nosso app.',
        keywords: 'política cookies tuggi, uso cookies, cookies app cultural, cookies guia áudio, cookies app histórias locais',
        ogTitle: 'Política de Cookies - Tuggi – Descubra cultura e histórias por onde você passa',
        ogDescription: 'Saiba como a Tuggi usa cookies para melhorar sua experiência de descoberta cultural e aprimorar nosso app.'
      },
      ES: {
        title: 'Política de Cookies - Tuggi – Descubre cultura e historias donde vayas',
        description: 'Conoce cómo Tuggi usa cookies para mejorar tu experiencia de descubrimiento cultural y mejorar nuestra app.',
        keywords: 'política cookies tuggi, uso cookies, cookies app cultural, cookies guía audio, cookies app historias locales',
        ogTitle: 'Política de Cookies - Tuggi – Descubre cultura e historias donde vayas',
        ogDescription: 'Conoce cómo Tuggi usa cookies para mejorar tu experiencia de descubrimiento cultural y mejorar nuestra app.'
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
    title: pageData.title || 'Tuggi – Discover culture and stories wherever you go',
    description: pageData.description || 'Explore the city with Tuggi: an app that narrates, through audio and in real-time, cultural curiosities and stories about the places around you.',
    keywords: pageData.keywords || 'cultural tourism app, audio guide, local stories, cultural curiosities, urban exploration, real-time narrative',
    ogTitle: pageData.ogTitle || pageData.title || 'Tuggi – Discover culture and stories wherever you go',
    ogDescription: pageData.ogDescription || pageData.description || 'Explore the city with Tuggi: an app that narrates, through audio and in real-time, cultural curiosities and stories about the places around you.',
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
    "description": "Cultural discovery and local stories app that narrates real-time audio stories about places around you",
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
      "email": "hello@tuggi.app",
      "availableLanguage": ["Portuguese", "English", "Spanish"]
    },
    "sameAs": [
      "https://linkedin.com/company/tuggi",
      "https://instagram.com/tuggi"
    ],
    "industry": "Travel Technology",
    "numberOfEmployees": "1-10",
    "keywords": "cultural tourism app, audio guide, local stories, cultural curiosities, urban exploration, real-time narrative",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "500",
      "bestRating": "5"
    },
    "offers": {
      "@type": "Offer",
      "name": "Tuggi",
      "description": "Cultural discovery and local stories app with real-time audio narration",
      "category": "Mobile Application"
    }
  };

  switch (page) {
    case 'contact':
      return {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact Tuggi",
        "description": "Contact Tuggi to learn more about our cultural discovery app and real-time audio stories",
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

    case 'purpose':
      return {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "Our Purpose - Connecting People with Local Culture",
        "description": "Discover Tuggi's mission to connect people with local culture through real-time audio stories and cultural discovery",
        "mainEntity": organizationData,
        "inLanguage": getLocaleCode(language),
        "about": {
          "@type": "Thing",
          "name": "Cultural Discovery Technology",
          "description": "Technology that connects people with local culture through audio stories"
        }
      };

    case 'privacy':
      return {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Privacy Policy - Tuggi",
        "description": "Privacy policy and data protection information for Tuggi cultural discovery app",
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
        "name": "Cookie Policy - Tuggi",
        "description": "Cookie usage policy and privacy controls for Tuggi cultural discovery app",
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
  if (typeof window !== 'undefined' && window.gtag) {
    const locale = getLocaleCode(language);
    
    // Track Core Web Vitals with language context
    const trackWebVitals = () => {
      if (typeof window !== 'undefined') {
        // Use dynamic import to avoid build-time dependency issues
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          getCLS((metric) => {
            window.gtag('event', 'web_vitals', {
              event_category: 'Performance',
              event_label: 'CLS',
              value: Math.round(metric.value * 1000),
              language: language,
              locale: locale,
              page_type: page
            });
          });

          getFID((metric) => {
            window.gtag('event', 'web_vitals', {
              event_category: 'Performance',
              event_label: 'FID',
              value: Math.round(metric.value),
              language: language,
              locale: locale,
              page_type: page
            });
          });

          getFCP((metric) => {
            window.gtag('event', 'web_vitals', {
              event_category: 'Performance',
              event_label: 'FCP',
              value: Math.round(metric.value),
              language: language,
              locale: locale,
              page_type: page
            });
          });

          getLCP((metric) => {
            window.gtag('event', 'web_vitals', {
              event_category: 'Performance',
              event_label: 'LCP',
              value: Math.round(metric.value),
              language: language,
              locale: locale,
              page_type: page
            });
          });

          getTTFB((metric) => {
            window.gtag('event', 'web_vitals', {
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
      window.gtag('config', measurementId, {
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

    window.gtag('event', 'page_view', {
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
        window.gtag('event', 'scroll_depth', {
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
      window.gtag('event', 'time_on_page', {
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
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'language_change', {
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
    window.gtag('event', 'conversion_funnel', {
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
  if (typeof window !== 'undefined' && window.gtag) {
    const locale = getLocaleCode(language);
    
    window.gtag('event', 'cta_click', {
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
    window.gtag('event', 'conversion_funnel', {
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
      window.gtag('event', 'conversion', {
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
    'contact': 'conversion',
    'purpose': 'awareness',
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
  if (typeof window !== 'undefined' && window.gtag) {
    const leadScore = calculateLeadScore(formData);
    const language = formData?.language || 'EN';
    const locale = getLocaleCode(language);
    
    window.gtag('event', 'form_submission', {
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
      window.gtag('event', 'conversion', {
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
        window.gtag('event', 'high_quality_lead', {
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
  if (typeof window !== 'undefined' && window.gtag) {
    const locale = getLocaleCode(language);
    
    window.gtag('event', 'link_click', {
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
    window.dataLayer = window.dataLayer || [];
    window.gtag = function(...args: unknown[]) {
      window.dataLayer?.push(args);
    };
    window.gtag('js', new Date());
    
    // Enhanced configuration for multilingual tracking
    window.gtag('config', measurementId, {
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
    window.gtag('config', measurementId, {
      currency: 'USD',
      country: 'US',
      language: 'en'
    });

    // Track initial language preference
    const preferredLanguage = localStorage.getItem('tuggi_preferred_language');
    if (preferredLanguage) {
      window.gtag('event', 'returning_user_language', {
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
        
        if (window.gtag && perfData) {
          // Get current language from URL
          const currentLanguage = window.location.pathname.split('/')[1] || 'en';
          const language = currentLanguage === 'pt' ? 'PT' : currentLanguage === 'es' ? 'ES' : 'EN';
          
          window.gtag('event', 'performance_metrics', {
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