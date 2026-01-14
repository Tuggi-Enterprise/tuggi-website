// Enhanced SEO utilities for Tuggi with multilingual support and comprehensive tracking

import { generateHreflangUrls, getLocaleCode, getLocalizedPageUrl } from './routing';

// Geographic location interface
export interface UserLocation {
  country?: string;
  countryCode?: string;
  region?: string;
  regionCode?: string;
  city?: string;
  latitude?: number;
  longitude?: number;
  timezone?: string;
  isp?: string;
  source: 'geolocation' | 'ip' | 'fallback';
}

// IP-based location service response
interface IPLocationResponse {
  country?: string;
  country_code?: string;
  region?: string;
  region_code?: string;
  city?: string;
  latitude?: number;
  longitude?: number;
  timezone?: string;
  isp?: string;
}

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
  structuredData?: object | object[];
  ogImage?: string;
  twitterImage?: string;
  ogImageAlt?: string;
}

export const generateSEOConfig = (
  page: string,
  language: string,
  baseUrl: string = 'https://tuggi.app'
): SEOConfig => {
  const seoData: Record<string, Record<string, Partial<SEOConfig>>> = {
    home: {
      EN: {
        title: 'Tuggi | Cultural copilot for your drive — discover stories',
        description: 'Tuggi is an automatic cultural narration app that transforms journeys into experiences. Simple, safe, and designed for drivers.',
        keywords: 'Tuggi, cultural audio guide, tourism app, local stories, automatic narrations, cultural curiosities, explore cities, travel app, audio copilot, culture on the go',
        ogTitle: 'Tuggi — Discover stories while driving',
        ogDescription: 'Transform your journeys into cultural experiences with automatic narrations. Simple and safe for every driver.'
      },
      PT: {
        title: 'Tuggi | Copiloto cultural para quem está dirigindo',
        description: 'O Tuggi narra o mundo ao seu redor automaticamente. Cultura e contexto no seu trajeto com foco em segurança.',
        keywords: 'Tuggi, copiloto cultural, guias de áudio, histórias ao dirigir, curiosidades culturais, segurança no trânsito, explorar cidades, narração automática',
        ogTitle: 'Tuggi — Copiloto cultural para quem está dirigindo',
        ogDescription: 'Transforme seus trajetos em descobertas. Narração automática de histórias e curiosidades culturais enquanto você dirige.'
      },
      ES: {
        title: 'Tuggi | Copiloto cultural para quien conduce — descubre historias',
        description: 'Tuggi es una app de narraciones culturales automáticas que transforma trayectos en descubrimientos. Simple, segura y hecha para conductores.',
        keywords: 'Tuggi, guía de audio cultural, app de turismo, historias locales, narraciones automáticas, curiosidades culturales, explorar ciudades, aplicación de viaje, copiloto de audio, cultura en el trayecto',
        ogTitle: 'Tuggi — Descubre historias mientras conduces',
        ogDescription: 'Transforma tus trayectos en descubrimientos culturales con narrativas automáticas. Simple y seguro para el conductor.'
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
        title: 'Our Purpose | Tuggi — More than a route',
        description: 'Tuggi\'s manifesto: democratizing access to culture and transforming journeys into discoveries. Cultural copilot for drivers and passengers.',
        keywords: 'tuggi purpose, cultural discovery mission, audio guide app, local stories, driver assistance, mobility culture',
        ogTitle: 'Our Purpose | Tuggi — More than a route',
        ogDescription: 'Tuggi\'s manifesto: democratizing access to culture and transforming journeys into discoveries.'
      },
      PT: {
        title: 'Nossa razão de existir | Tuggi — Além do trajeto',
        description: 'O manifesto da Tuggi: democratizando o acesso à cultura e transformando trajetos em descobertas. Copiloto cultural para motoristas e passageiros.',
        keywords: 'propósito tuggi, manifesto cultural, histórias ao dirigir, copiloto cultural, mobilidade urbana, cultura em movimento',
        ogTitle: 'Nossa razão de existir | Tuggi — Além do trajeto',
        ogDescription: 'O manifesto da Tuggi: democratizando o acesso à cultura e transformando trajetos em descobertas.'
      },
      ES: {
        title: 'Nuestro Propósito | Tuggi — Más que una ruta',
        description: 'El manifiesto de Tuggi: democratizar el acceso a la cultura y transformar los trayectos en descubrimientos. Copiloto cultural para conductores y pasajeros.',
        keywords: 'propósito tuggi, manifiesto cultural, historias al conducir, copiloto cultural, movilidad urbana, cultura en movimiento',
        ogTitle: 'Nuestro Propósito | Tuggi — Más que una ruta',
        ogDescription: 'El manifiesto de Tuggi: democratizar el acceso a la cultura y transformar los trayectos en descubrimientos.'
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
    },
    drivers: {
      EN: {
        title: 'Tuggi Drivers | Earn more and offer cultural experiences in your rides',
        description: 'Increase your value as a ride-hailing driver with Tuggi. Offer cultural narrations to passengers, improve ratings and stand out without changing your routine.',
        keywords: 'ride-hailing driver, earn more driving, app for drivers, increase ratings, added value transportation, monetize journeys, audio guides, cultural experience for passengers, Uber, 99, Cabify, inDrive',
        ogTitle: 'Tuggi Drivers — Earn more on rides with cultural experiences',
        ogDescription: 'Increase the value of your rides with Tuggi. Offer local stories, improve ratings and create a unique experience for your passengers.'
      },
      PT: {
        title: 'Tuggi Motoristas | Ganhe mais e ofereça experiências culturais nas suas corridas',
        description: 'Aumente seu valor como motorista de app com o Tuggi. Ofereça narrativas culturais aos passageiros, melhore avaliações e destaque-se sem mudar sua rotina.',
        keywords: 'Tuggi motoristas, ganhar mais dirigindo, aumentar gorjeta, motorista de aplicativo, valor agregado transporte, audioguia para motoristas, experiência de corrida, narrações culturais automáticas',
        ogTitle: 'Tuggi Motoristas — Ganhe mais com experiências culturais',
        ogDescription: 'Ofereça narrações culturais automáticas e encante seus passageiros. Melhore avaliações e gere valor sem mudar sua rotina.'
      },
      ES: {
        title: 'Tuggi Conductores | Gana más y ofrece experiencias culturales en tus viajes',
        description: 'Aumenta tu valor como conductor de app con Tuggi. Ofrece narraciones culturales a los pasajeros, mejora valoraciones y destácate sin cambiar tu rutina.',
        keywords: 'conductor de aplicación, ganar más conduciendo, app para conductores, aumentar valoraciones, valor agregado transporte, monetizar trayectos, guías de audio, experiencia cultural para pasajeros, Uber, 99, Cabify, inDrive',
        ogTitle: 'Tuggi Conductores — Gana más en los viajes con experiencias culturales',
        ogDescription: 'Aumenta el valor de tus viajes con Tuggi. Ofrece historias locales, mejora valoraciones y crea una experiencia única para tus pasajeros.'
      }
    },
    business: {
      EN: {
        title: 'For Businesses | Tuggi — Cultural Data & Narratives',
        description: 'Licensing and integration of cultural audio content and POI metadata for mobility, tourism, and education. Enrich your product with local stories.',
        keywords: 'tuggi for business, cultural data license, poi metadata api, mobility content, tourism narratives, audio guide api, cultural discovery b2b',
        ogTitle: 'For Businesses | Tuggi — Cultural Data & Narratives',
        ogDescription: 'Licensing and integration of cultural audio content and POI metadata for mobility, tourism, and education.'
      },
      PT: {
        title: 'Para empresas — Tuggi',
        description: 'Licenciamento e integração de conteúdo cultural em áudio e metadados de pontos de interesse para mobilidade, turismo e educação.',
        keywords: 'Tuggi empresas, licenciamento de dados, metadados POI, conteúdo para mobilidade, narrativas de turismo, API de audioguia, dados culturais B2B',
        ogTitle: 'Para empresas — Tuggi',
        ogDescription: 'Licenciamento e integração de conteúdo cultural em áudio e metadados de pontos de interesse.'
      },
      ES: {
        title: 'Para empresas | Tuggi — Datos Culturales y Narrativas',
        description: 'Licenciamiento e integración de contenido cultural en audio y metadatos de POIs para movilidad, turismo y educación. Enriquece tu producto con historias.',
        keywords: 'tuggi para empresas, licencia de datos culturales, api metadatos poi, contenido movilidad, narrativas turismo, api audioguía, datos culturales b2b',
        ogTitle: 'Para empresas | Tuggi — Datos Culturales y Narrativas',
        ogDescription: 'Licenciamiento e integración de contenido cultural en audio y metadatos de POIs para movilidad, turismo y educación.'
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

  // Define og:image per page with fallback
  const defaultOgImage = page === 'drivers' ? `${baseUrl}/og/drivers.jpg` : 
                         page === 'business' ? `${baseUrl}/og/business.jpg` : 
                         `${baseUrl}/og/home.jpg`;
  const ogImageAltByLang: Record<string, string> = {
    EN: 'Tuggi - Cultural discovery and local stories app',
    PT: 'Tuggi - App de descoberta cultural e histórias locais',
    ES: 'Tuggi - App de descubrimiento cultural e historias locales'
  };

  return {
    title: pageData.title || 'Tuggi – Discover culture and stories wherever you go',
    description: pageData.description || 'Explore the city with Tuggi: an app that narrates, through audio and in real-time, cultural curiosities and stories about the places around you.',
    keywords: pageData.keywords || 'cultural tourism app, audio guide, local stories, cultural curiosities, urban exploration, real-time narrative',
    ogTitle: pageData.ogTitle || pageData.title || 'Tuggi – Discover culture and stories wherever you go',
    ogDescription: pageData.ogDescription || pageData.description || 'Explore the city with Tuggi: an app that narrates, through audio and in real-time, cultural curiosities and stories about the places around you.',
    canonicalUrl,
    hreflang,
    structuredData,
    ogImage: defaultOgImage,
    twitterImage: defaultOgImage,
    ogImageAlt: ogImageAltByLang[language] || ogImageAltByLang.EN
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
      "email": "contato@tuggi.app",
      "availableLanguage": ["Portuguese", "English", "Spanish"]
    },
    "sameAs": [
      "https://linkedin.com/company/tuggi",
      "https://instagram.com/tuggi"
    ],
    "industry": "Travel Technology",
    "numberOfEmployees": "1-10",
    "keywords": "cultural tourism app, audio guide, local stories, cultural curiosities, urban exploration, real-time narrative",
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

    case 'drivers':
      const driversFaqData: Record<string, Array<{"@type": string, name: string, acceptedAnswer: {"@type": string, text: string}}>> = {
        PT: [
          {"@type":"Question","name":"Como o Tuggi ajuda motoristas de aplicativo?","acceptedAnswer":{"@type":"Answer","text":"O Tuggi transforma suas corridas em experiências culturais, oferecendo narrações automáticas que encantam passageiros e melhoram avaliações."}},
          {"@type":"Question","name":"Preciso mudar minha rotina para usar o Tuggi?","acceptedAnswer":{"@type":"Answer","text":"Não. O Tuggi funciona em segundo plano, junto com seu app de navegação, e narra histórias automaticamente."}},
          {"@type":"Question","name":"O Tuggi aumenta meus ganhos?","acceptedAnswer":{"@type":"Answer","text":"Sim. Ao oferecer uma experiência diferenciada aos passageiros, motoristas tendem a receber melhores avaliações e mais gorjetas."}}
        ],
        EN: [
          {"@type":"Question","name":"How does Tuggi help ride-hailing drivers?","acceptedAnswer":{"@type":"Answer","text":"Tuggi allows drivers to offer cultural experiences during rides, increasing ratings and building passenger loyalty."}},
          {"@type":"Question","name":"Can I use Tuggi with Waze or Google Maps?","acceptedAnswer":{"@type":"Answer","text":"Yes. Tuggi works in the background, automatically narrating while the driver uses the navigation app."}},
          {"@type":"Question","name":"Does Tuggi help earn more?","acceptedAnswer":{"@type":"Answer","text":"Yes. Drivers who offer differentiated experiences are more likely to receive tips and better ratings."}}
        ],
        ES: [
          {"@type":"Question","name":"¿Cómo ayuda Tuggi a los conductores de apps?","acceptedAnswer":{"@type":"Answer","text":"Tuggi permite que los conductores ofrezcan experiencias culturales durante los viajes, aumentando las valoraciones y fidelizando pasajeros."}},
          {"@type":"Question","name":"¿Puedo usar Tuggi junto con Waze o Google Maps?","acceptedAnswer":{"@type":"Answer","text":"Sí. Tuggi funciona en segundo plano, narrando automáticamente mientras el conductor usa la app de navegación."}},
          {"@type":"Question","name":"¿Tuggi ayuda a ganar más?","acceptedAnswer":{"@type":"Answer","text":"Sí. Los conductores que ofrecen experiencias diferenciadas tienen más posibilidades de recibir propinas y mejores valoraciones."}}
        ]
      };
      
      return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": driversFaqData[language] || driversFaqData.PT,
        "inLanguage": getLocaleCode(language),
        "about": organizationData
      };

    case 'business':
      const businessFaqData: Record<string, Array<{"@type": string, name: string, acceptedAnswer: {"@type": string, text: string}}>> = {
        PT: [
          {"@type":"Question","name":"Como o Tuggi pode ajudar minha empresa?","acceptedAnswer":{"@type":"Answer","text":"O Tuggi permite integrar experiências culturais em rotas e trajetos, agregando valor à jornada dos clientes e reforçando o posicionamento da marca."}},
          {"@type":"Question","name":"Quais empresas podem se beneficiar?","acceptedAnswer":{"@type":"Answer","text":"Empresas de transporte, turismo, hotelaria e mobilidade urbana que desejam oferecer uma experiência diferenciada e cultural aos clientes."}},
          {"@type":"Question","name":"O Tuggi pode ser personalizado para minha marca?","acceptedAnswer":{"@type":"Answer","text":"Sim. O Tuggi oferece opções de personalização e integração com identidade visual e narrativas específicas de parceiros corporativos."}}
        ],
        EN: [
          {"@type":"Question","name":"How can Tuggi help my business?","acceptedAnswer":{"@type":"Answer","text":"Tuggi offers partnerships for transportation and tourism companies, allowing them to offer differentiated cultural experiences to customers."}},
          {"@type":"Question","name":"What types of businesses can benefit?","acceptedAnswer":{"@type":"Answer","text":"Transportation companies, tourism agencies, bus operators, shuttle services and any business that wants to offer cultural value to customers."}},
          {"@type":"Question","name":"How does partnership with Tuggi work?","acceptedAnswer":{"@type":"Answer","text":"We offer customized solutions to integrate Tuggi into your company's services, creating unique and differentiated experiences."}}
        ],
        ES: [
          {"@type":"Question","name":"¿Cómo puede ayudar Tuggi a mi empresa?","acceptedAnswer":{"@type":"Answer","text":"Tuggi ofrece alianzas para empresas de transporte y turismo, permitiendo que ofrezcan experiencias culturales diferenciadas a los clientes."}},
          {"@type":"Question","name":"¿Qué tipos de empresas pueden beneficiarse?","acceptedAnswer":{"@type":"Answer","text":"Empresas de transporte, agencias de turismo, operadores de autobuses, servicios de shuttle y cualquier negocio que quiera ofrecer valor cultural a los clientes."}},
          {"@type":"Question","name":"¿Cómo funciona la alianza con Tuggi?","acceptedAnswer":{"@type":"Answer","text":"Ofrecemos soluciones personalizadas para integrar Tuggi a los servicios de su empresa, creando experiencias únicas y diferenciadas."}}
        ]
      };
      
      return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": businessFaqData[language] || businessFaqData.PT,
        "inLanguage": getLocaleCode(language),
        "about": organizationData
      };

    case 'home':
      const faqData: Record<string, Array<{"@type": string, name: string, acceptedAnswer: {"@type": string, text: string}}>> = {
        PT: [
          {"@type":"Question","name":"O que é o Tuggi?","acceptedAnswer":{"@type":"Answer","text":"O Tuggi é um aplicativo de guia de áudio cultural que narra automaticamente histórias e curiosidades sobre lugares próximos a você."}},
          {"@type":"Question","name":"Em quais idiomas o Tuggi está disponível?","acceptedAnswer":{"@type":"Answer","text":"O Tuggi está disponível em português, inglês e espanhol."}},
          {"@type":"Question","name":"O Tuggi funciona sem internet?","acceptedAnswer":{"@type":"Answer","text":"Parte do conteúdo é cacheado e pode ser acessado offline, mas o uso completo requer conexão ativa."}}
        ],
        EN: [
          {"@type":"Question","name":"What is Tuggi?","acceptedAnswer":{"@type":"Answer","text":"Tuggi is a cultural audio guide app that automatically narrates stories about places around you while you drive or explore."}},
          {"@type":"Question","name":"Do I need to follow a route?","acceptedAnswer":{"@type":"Answer","text":"No. Tuggi works at your pace, without fixed routes — it identifies the location and narrates automatically."}},
          {"@type":"Question","name":"What languages is Tuggi available in?","acceptedAnswer":{"@type":"Answer","text":"The app is available in Portuguese, English and Spanish, with more languages in development."}}
        ],
        ES: [
          {"@type":"Question","name":"¿Qué es Tuggi?","acceptedAnswer":{"@type":"Answer","text":"Tuggi es una app de guía de audio cultural que narra automáticamente historias sobre los lugares a tu alrededor mientras conduces o exploras."}},
          {"@type":"Question","name":"¿Necesito seguir una ruta?","acceptedAnswer":{"@type":"Answer","text":"No. Tuggi funciona a tu ritmo, sin rutas fijas — identifica la ubicación y narra automáticamente."}},
          {"@type":"Question","name":"¿En qué idiomas está disponible Tuggi?","acceptedAnswer":{"@type":"Answer","text":"La app está disponible en portugués, inglés y español, con más idiomas en desarrollo."}}
        ]
      };
      
      // Organization Schema
      const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Tuggi",
        "url": "https://www.tuggi.app/",
        "logo": "https://www.tuggi.app/og/logo.png",
        "contactPoint": [{
          "@type": "ContactPoint",
          "email": "contato@tuggi.app",
          "contactType": "customer support",
          "areaServed": "BR"
        }]
      };
      
      // MobileApplication Schema
      const mobileAppSchema = {
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
        "url": "https://www.tuggi.app/",
        "installUrl": "APP_STORE_URL"
      };
      
      // FAQ Schema
      const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqData[language] || faqData.PT,
        "inLanguage": getLocaleCode(language),
        "about": organizationData
      };
      
      // Return array of schemas for home page
      return [organizationSchema, mobileAppSchema, faqSchema];

    default:
      return {
        ...organizationData,
        "inLanguage": getLocaleCode(language)
      };
  }
};

export const updatePageSEO = (seoConfig: SEOConfig) => {
  // Update document title
  console.log('updatePageSEO called with title:', seoConfig.title);
  document.title = seoConfig.title;
  console.log('document.title set to:', document.title);

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
  updateMetaTag('og:image', seoConfig.ogImage || 'https://www.tuggi.app/og/home.jpg', true);
  updateMetaTag('og:image:width', '1200', true);
  updateMetaTag('og:image:height', '630', true);
  updateMetaTag('og:image:alt', seoConfig.ogImageAlt || 'Tuggi — cultura em movimento', true);

  // Update Twitter Card tags
  updateMetaTag('twitter:card', 'summary_large_image');
  updateMetaTag('twitter:title', seoConfig.ogTitle);
  updateMetaTag('twitter:description', seoConfig.ogDescription);
  updateMetaTag('twitter:image', seoConfig.twitterImage || 'https://www.tuggi.app/og/home.jpg');
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
    // Remove existing structured data scripts
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => script.remove());
    
    // Handle both single objects and arrays of schemas
    const schemas = Array.isArray(seoConfig.structuredData) ? seoConfig.structuredData : [seoConfig.structuredData];
    
    // Create a script tag for each schema
    schemas.forEach(schema => {
      const structuredDataScript = document.createElement('script');
      structuredDataScript.setAttribute('type', 'application/ld+json');
      structuredDataScript.textContent = JSON.stringify(schema);
      document.head.appendChild(structuredDataScript);
    });
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

// Enhanced Google Analytics tracking with multilingual support for SPAs
export const trackPageView = (page: string, language: string, measurementId?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    const locale = getLocaleCode(language);
    
    // Generate proper page path for SPA tracking
    const generatePagePath = (page: string, language: string): string => {
      const langPrefix = language === 'EN' ? '' : `/${language.toLowerCase()}`;
      const pagePath = page === 'home' ? '' : `/${page}`;
      return `${langPrefix}${pagePath}` || '/';
    };

    // Generate page title based on page and language
    const generatePageTitle = (page: string, language: string): string => {
      console.log('generatePageTitle called with:', { page, language });
      const titles: Record<string, Record<string, string>> = {
        home: {
          EN: 'Tuggi - Drive with your cultural copilot',
          PT: 'Tuggi - Copiloto cultural para quem está dirigindo',
          ES: 'Tuggi - Conduce con tu copiloto cultural'
        },
        purpose: {
          EN: 'Our Purpose - Tuggi',
          PT: 'Nosso Propósito - Tuggi',
          ES: 'Nuestro Propósito - Tuggi'
        },
        business: {
          EN: 'For Businesses - Tuggi',
          PT: 'Para Empresas - Tuggi',
          ES: 'Para Empresas - Tuggi'
        },
        contact: {
          EN: 'Contact - Tuggi',
          PT: 'Contato - Tuggi',
          ES: 'Contacto - Tuggi'
        },
        investors: {
          EN: 'Investors - Tuggi',
          PT: 'Investidores - Tuggi',
          ES: 'Inversores - Tuggi'
        },
        privacy: {
          EN: 'Privacy Policy - Tuggi',
          PT: 'Política de Privacidade - Tuggi',
          ES: 'Política de Privacidad - Tuggi'
        },
        terms: {
          EN: 'Terms of Use - Tuggi',
          PT: 'Termos de Uso - Tuggi',
          ES: 'Términos de Uso - Tuggi'
        },
        cookies: {
          EN: 'Cookie Policy - Tuggi',
          PT: 'Política de Cookies - Tuggi',
          ES: 'Política de Cookies - Tuggi'
        },
        drivers: {
          EN: 'For Drivers - Tuggi',
          PT: 'Para Motoristas - Tuggi',
          ES: 'Para Conductores - Tuggi'
        }
      };
      
      const result = titles[page]?.[language] || titles.home[language] || titles.home.EN;
      console.log('generatePageTitle result:', result);
      return result;
    };

    const pagePath = generatePagePath(page, language);
    const pageTitle = generatePageTitle(page, language);
    
    // Track Core Web Vitals with language context
    const trackWebVitals = () => {
      if (typeof window !== 'undefined') {
        const currentLanguage = language;
        const currentLocale = getLocaleCode(language);
        // Use dynamic import to avoid build-time dependency issues
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          getCLS((metric) => {
            if (window.gtag) {
              window.gtag('event', 'web_vitals', {
                event_category: 'Performance',
                event_label: 'CLS',
                value: Math.round(metric.value * 1000),
                language: currentLanguage,
                locale: currentLocale,
                page_type: page
              });
            }
          });

          getFID((metric) => {
            if (window.gtag) {
              window.gtag('event', 'web_vitals', {
                event_category: 'Performance',
                event_label: 'FID',
                value: Math.round(metric.value),
                language: currentLanguage,
                locale: currentLocale,
                page_type: page
              });
            }
          });

          getFCP((metric) => {
            if (window.gtag) {
              window.gtag('event', 'web_vitals', {
                event_category: 'Performance',
                event_label: 'FCP',
                value: Math.round(metric.value),
                language: currentLanguage,
                locale: currentLocale,
                page_type: page
              });
            }
          });

          getLCP((metric) => {
            if (window.gtag) {
              window.gtag('event', 'web_vitals', {
                event_category: 'Performance',
                event_label: 'LCP',
                value: Math.round(metric.value),
                language: currentLanguage,
                locale: currentLocale,
                page_type: page
              });
            }
          });

          getTTFB((metric) => {
            if (window.gtag) {
              window.gtag('event', 'web_vitals', {
                event_category: 'Performance',
                event_label: 'TTFB',
                value: Math.round(metric.value),
                language: currentLanguage,
                locale: currentLocale,
                page_type: page
              });
            }
          });
        }).catch(() => {
          // Web Vitals library not available
        });
      }
    };

    // CRITICAL: Use gtag config for proper SPA page tracking
    // This is the correct way to track page views in SPAs
    if (measurementId && window.gtag) {
      window.gtag('config', measurementId, {
        page_path: pagePath,
        page_title: pageTitle,
        page_location: window.location.origin + pagePath,
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

    // Send additional custom event for enhanced tracking
    window.gtag('event', 'page_view_enhanced', {
      language: language,
      locale: locale,
      page_type: page,
      page_path: pagePath,
      page_title: pageTitle,
      page_location: window.location.origin + pagePath,
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
        if (window.gtag) {
          if (window.gtag) {
          window.gtag('event', 'scroll_depth', {
            event_category: 'User Engagement',
            event_label: `${scrollDepth}%`,
            page_type: page,
            language: language,
            locale: locale
          });
        }
        }
      }
    };

    window.addEventListener('scroll', trackScrollDepth, { passive: true });

    // Track time on page with multilingual context
    const startTime = Date.now();
    const trackTimeOnPage = () => {
      const timeOnPage = Math.round((Date.now() - startTime) / 1000);
      if (window.gtag) {
        window.gtag('event', 'time_on_page', {
          event_category: 'User Engagement',
          value: timeOnPage,
          page_type: page,
          language: language,
          locale: locale
        });
      }
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

// Simple session ID for basic tracking
const getSessionId = (): string => {
  let sessionId = sessionStorage.getItem('tuggi_session_id');
  if (!sessionId) {
    sessionId = `tuggi_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    sessionStorage.setItem('tuggi_session_id', sessionId);
  }
  return sessionId;
};

// Track Google Forms interactions (simplified - click tracking only)
export const trackGoogleFormInteraction = (action: 'open' | 'start_fill' | 'submit' | 'abandon', formType: string, page: string, language: string, additionalData?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    const locale = getLocaleCode(language);
    const sessionId = getSessionId();
    
    // Track the specific form interaction
    window.gtag('event', 'google_form_interaction', {
      event_category: 'Form Conversion',
      event_label: `${action}_${formType}`,
      form_action: action,
      form_type: formType,
      page_type: page,
      language: language,
      locale: locale,
      timestamp: new Date().toISOString(),
      session_id: sessionId,
      conversion_value: action === 'open' ? 50 : 10,
      ...additionalData
    });

    // Track as conversion when form is opened (main conversion goal)
    if (action === 'open') {
      window.gtag('event', 'conversion', {
        event_category: 'Primary Conversion',
        event_label: 'google_form_opened',
        value: 50,
        currency: 'USD',
        language: language,
        locale: locale,
        page_type: page,
        conversion_type: 'form_engagement',
        session_id: sessionId
      });
    }
  }
};



// Track all button and link clicks with detailed analytics
export const trackElementClick = (elementType: 'button' | 'link' | 'cta', elementText: string, destination: string, page: string, language: string, additionalData?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    const locale = getLocaleCode(language);
    const isExternal = destination && !destination.includes(window.location.hostname) && destination.startsWith('http');
    const isGoogleForm = destination.includes('forms.gle') || destination.includes('docs.google.com/forms');
    
    window.gtag('event', 'element_click', {
      event_category: 'User Interaction',
      event_label: `${elementType}_${elementText.toLowerCase().replace(/\s+/g, '_')}`,
      element_type: elementType,
      element_text: elementText,
      destination: destination,
      page_type: page,
      language: language,
      locale: locale,
      is_external: isExternal,
      is_google_form: isGoogleForm,
      timestamp: new Date().toISOString(),
      ...additionalData
    });

    // Special tracking for Google Forms
    if (isGoogleForm) {
      trackGoogleFormInteraction('open', 'registration_form', page, language, {
        source_element: elementText,
        source_page: page
      });
    }

    // Track external link clicks
    if (isExternal) {
      window.gtag('event', 'external_link_click', {
        event_category: 'External Navigation',
        event_label: destination,
        page_type: page,
        language: language,
        locale: locale
      });
    }
  }
};

// Track user engagement patterns
export const trackUserEngagement = (engagementType: 'scroll_milestone' | 'time_milestone' | 'interaction_burst' | 'return_visit', value: number, page: string, language: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    const locale = getLocaleCode(language);
    
    window.gtag('event', 'user_engagement', {
      event_category: 'Engagement Metrics',
      event_label: engagementType,
      engagement_type: engagementType,
      engagement_value: value,
      page_type: page,
      language: language,
      locale: locale,
      timestamp: new Date().toISOString(),
      session_quality: value > 80 ? 'high' : value > 50 ? 'medium' : 'low'
    });
  }
};

// Track page sections visibility (for institutional site optimization)
export const trackSectionVisibility = (sectionName: string, visibilityPercentage: number, timeVisible: number, page: string, language: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    const locale = getLocaleCode(language);
    
    window.gtag('event', 'section_visibility', {
      event_category: 'Content Engagement',
      event_label: sectionName,
      section_name: sectionName,
      visibility_percentage: visibilityPercentage,
      time_visible: timeVisible,
      page_type: page,
      language: language,
      locale: locale,
      engagement_quality: timeVisible > 5 && visibilityPercentage > 50 ? 'high' : 'low'
    });
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
    // Initializing Google Analytics
    
    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    
    // Add load and error event listeners
    script.onload = () => {
      // Google Analytics script loaded successfully
    };
    
    script.onerror = () => {
      // Failed to load Google Analytics script
    };
    
    document.head.appendChild(script);
    // GA script added to document head

    // Initialize gtag with enhanced multilingual configuration
    window.dataLayer = window.dataLayer || [];
    window.gtag = function(...args: unknown[]) {
      // gtag call executed
      window.dataLayer?.push(args);
    };
    window.gtag('js', new Date());
    // gtag function initialized
    
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

/**
 * Get user's geographic location using multiple methods
 * Priority: 1) Browser Geolocation API, 2) IP-based detection, 3) Fallback
 */
export const getUserLocation = async (): Promise<UserLocation> => {
  // Try browser geolocation first (most accurate)
  try {
    const position = await getCurrentPosition();
    if (position) {
      const location = await reverseGeocode(position.coords.latitude, position.coords.longitude);
      return {
        ...location,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        source: 'geolocation'
      };
    }
  } catch (error) {
    // Geolocation failed, continue to IP-based detection
  }

  // Fallback to IP-based location
  try {
    const ipLocation = await getLocationByIP();
    return {
      ...ipLocation,
      source: 'ip'
    };
  } catch (error) {
    // IP detection failed, use fallback
  }

  // Final fallback - basic detection from browser/timezone
  return getFallbackLocation();
};

/**
 * Get current position using browser's Geolocation API
 */
const getCurrentPosition = (): Promise<GeolocationPosition | null> => {
  return new Promise((resolve) => {
    if (!navigator.geolocation) {
      resolve(null);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => resolve(position),
      () => resolve(null),
      {
        timeout: 10000,
        maximumAge: 300000, // 5 minutes
        enableHighAccuracy: false
      }
    );
  });
};

/**
 * Reverse geocode coordinates to get location details
 */
const reverseGeocode = async (lat: number, lng: number): Promise<Partial<UserLocation>> => {
  try {
    // Using a free geocoding service (you can replace with your preferred service)
    const response = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`
    );
    
    if (!response.ok) throw new Error('Geocoding failed');
    
    const data = await response.json();
    
    return {
      country: data.countryName,
      countryCode: data.countryCode,
      region: data.principalSubdivision,
      regionCode: data.principalSubdivisionCode,
      city: data.city || data.locality,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
    };
  } catch (error) {
    return {};
  }
};

/**
 * Get location based on IP address
 */
const getLocationByIP = async (): Promise<UserLocation> => {
  try {
    // Using ipapi.co (free tier available)
    const response = await fetch('https://ipapi.co/json/');
    
    if (!response.ok) throw new Error('IP location failed');
    
    const data: IPLocationResponse = await response.json();
    
    return {
      country: data.country,
      countryCode: data.country_code,
      region: data.region,
      regionCode: data.region_code,
      city: data.city,
      latitude: data.latitude,
      longitude: data.longitude,
      timezone: data.timezone,
      isp: data.isp,
      source: 'ip'
    };
  } catch (error) {
    // Fallback to alternative IP service
    try {
      const response = await fetch('https://api.country.is/');
      const data = await response.json();
      
      return {
        country: data.country,
        countryCode: data.country,
        source: 'ip'
      };
    } catch (fallbackError) {
      throw new Error('All IP location services failed');
    }
  }
};

/**
 * Fallback location detection using browser/timezone info
 */
const getFallbackLocation = (): UserLocation => {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  
  // Basic country detection from timezone
  let country = 'Unknown';
  let countryCode = 'XX';
  
  if (timezone.includes('America/Sao_Paulo') || timezone.includes('America/Fortaleza')) {
    country = 'Brazil';
    countryCode = 'BR';
  } else if (timezone.includes('America/New_York') || timezone.includes('America/Los_Angeles')) {
    country = 'United States';
    countryCode = 'US';
  } else if (timezone.includes('Europe/Madrid')) {
    country = 'Spain';
    countryCode = 'ES';
  } else if (timezone.includes('Europe/London')) {
    country = 'United Kingdom';
    countryCode = 'GB';
  }
  
  return {
    country,
    countryCode,
    timezone,
    source: 'fallback'
  };
};

/**
 * Track user location for analytics
 */
export const trackUserLocation = async (language: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    try {
      const location = await getUserLocation();
      
      window.gtag('event', 'user_location_detected', {
        event_category: 'Geographic',
        event_label: location.source,
        country: location.country,
        country_code: location.countryCode,
        region: location.region,
        city: location.city,
        timezone: location.timezone,
        detection_method: location.source,
        language: language,
        locale: getLocaleCode(language)
      });
      
      // Store location in localStorage for future use
      localStorage.setItem('tuggi_user_location', JSON.stringify(location));
      
      return location;
    } catch (error) {
      // Track location detection failure
      window.gtag('event', 'location_detection_failed', {
        event_category: 'Geographic',
        event_label: 'detection_error',
        language: language
      });
      
      return getFallbackLocation();
    }
  }
  
  return getFallbackLocation();
};

/**
 * Get cached user location from localStorage
 */
export const getCachedUserLocation = (): UserLocation | null => {
  try {
    const cached = localStorage.getItem('tuggi_user_location');
    return cached ? JSON.parse(cached) : null;
  } catch (error) {
    return null;
  }
};

/**
 * Check if location data is fresh (less than 1 hour old)
 */
export const isLocationDataFresh = (): boolean => {
  try {
    const timestamp = localStorage.getItem('tuggi_location_timestamp');
    if (!timestamp) return false;
    
    const oneHour = 60 * 60 * 1000; // 1 hour in milliseconds
    return (Date.now() - parseInt(timestamp)) < oneHour;
  } catch (error) {
    return false;
  }
};

/**
 * Get user location with caching
 */
export const getUserLocationCached = async (): Promise<UserLocation> => {
  // Check if we have fresh cached data
  if (isLocationDataFresh()) {
    const cached = getCachedUserLocation();
    if (cached) return cached;
  }
  
  // Get fresh location data
  const location = await getUserLocation();
  
  // Cache the result with timestamp
  localStorage.setItem('tuggi_user_location', JSON.stringify(location));
  localStorage.setItem('tuggi_location_timestamp', Date.now().toString());
  
  return location;
};