// URL routing utilities for multilingual support

export interface ParsedUrl {
  language: string;
  page: string;
}

// Supported languages with their URL codes
export const SUPPORTED_LANGUAGES = {
  'pt': 'PT',
  'en': 'EN', 
  'es': 'ES',
  'fr': 'FR',
  'de': 'DE',
  'it': 'IT'
} as const;

export const LANGUAGE_CODES = {
  'PT': 'pt',
  'EN': 'en',
  'ES': 'es',
  'FR': 'fr',
  'DE': 'de',
  'IT': 'it'
} as const;

// Valid page routes with multilingual URL mappings
export const VALID_PAGES = [
  'home',
  'contact',
  'purpose',
  'investors',
  'business',
  'empresas',
  'empresa',
  // New drivers landing page routes
  'drivers',
  'motoristas',
  'conductores',
  'chauffeurs',
  'fahrer',
  'autisti',
  // Legal and policy pages
  'privacy',
  'privacy-policy',
  'politica-de-privacidade',
  'politica-de-privacidad',
  'politique-de-confidentialite',
  'datenschutz',
  'informativa-privacy',
  'terms',
  'terms-of-use',
  'termos-de-uso',
  'terminos-de-uso',
  'conditions-d-utilisation',
  'nutzungsbedingungen',
  'termini-di-utilizzo',
  'cookies',
  'cookie-policy',
  'politica-de-cookies',
  'politique-cookies',
  'cookie-richtlinie',
  'informativa-cookie',
  'data-deletion',
  'exclusao-de-dados',
  'eliminacion-de-datos',
  'suppression-donnees',
  'datenloeschung',
  'cancellazione-dati',
  // Government/Municipal landing pages
  'gov'
] as const;

// Page URL mappings for different languages
export const PAGE_URL_MAPPINGS: Record<string, Record<string, string>> = {
  'investors': {
    'EN': 'investors',
    'PT': 'investidores',
    'ES': 'inversores',
    'FR': 'investisseurs',
    'DE': 'investoren',
    'IT': 'investitori'
  },
  'business': {
    'EN': 'business',
    'PT': 'empresas',
    'ES': 'empresas',
    'FR': 'entreprises',
    'DE': 'unternehmen',
    'IT': 'aziende'
  },
  // New drivers page localized mappings
  'drivers': {
    'EN': 'drivers',
    'PT': 'motoristas',
    'ES': 'conductores',
    'FR': 'chauffeurs',
    'DE': 'fahrer',
    'IT': 'autisti'
  },
  'privacy': {
    'EN': 'privacy-policy',
    'PT': 'politica-de-privacidade',
    'ES': 'politica-de-privacidad',
    'FR': 'politique-de-confidentialite',
    'DE': 'datenschutz',
    'IT': 'informativa-privacy'
  },
  'terms': {
    'EN': 'terms-of-use',
    'PT': 'termos-de-uso',
    'ES': 'terminos-de-uso',
    'FR': 'conditions-d-utilisation',
    'DE': 'nutzungsbedingungen',
    'IT': 'termini-di-utilizzo'
  },
  'cookies': {
    'EN': 'cookie-policy',
    'PT': 'politica-de-cookies',
    'ES': 'politica-de-cookies',
    'FR': 'politique-cookies',
    'DE': 'cookie-richtlinie',
    'IT': 'informativa-cookie'
  },
  'data-deletion': {
    'EN': 'data-deletion',
    'PT': 'exclusao-de-dados',
    'ES': 'eliminacion-de-datos',
    'FR': 'suppression-donnees',
    'DE': 'datenloeschung',
    'IT': 'cancellazione-dati'
  },
  // Government/Municipal landing pages
  'gov': {
    'EN': 'gov',
    'PT': 'gov',
    'ES': 'gov',
    'FR': 'gov',
    'DE': 'gov',
    'IT': 'gov'
  }
};

// Reverse mappings for URL parsing
export const URL_TO_PAGE_MAPPINGS: Record<string, string> = {
  'investors': 'investors',
  'investidores': 'investors',
  'inversores': 'investors',
  'investisseurs': 'investors',
  'investoren': 'investors',
  'investitori': 'investors',
  
  'business': 'business',
  'empresas': 'business',
  'empresa': 'business',
  'entreprises': 'business',
  'unternehmen': 'business',
  'aziende': 'business',
  
  // New drivers reverse mappings
  'drivers': 'drivers',
  'motoristas': 'drivers',
  'conductores': 'drivers',
  'chauffeurs': 'drivers',
  'fahrer': 'drivers',
  'autisti': 'drivers',
  
  'privacy-policy': 'privacy',
  'politica-de-privacidade': 'privacy',
  'politica-de-privacidad': 'privacy',
  'politique-de-confidentialite': 'privacy',
  'datenschutz': 'privacy',
  'informativa-privacy': 'privacy',
  
  'terms-of-use': 'terms',
  'termos-de-uso': 'terms',
  'terminos-de-uso': 'terms',
  'conditions-d-utilisation': 'terms',
  'nutzungsbedingungen': 'terms',
  'termini-di-utilizzo': 'terms',
  
  'cookie-policy': 'cookies',
  'politica-de-cookies': 'cookies',
  'politique-cookies': 'cookies',
  'cookie-richtlinie': 'cookies',
  'informativa-cookie': 'cookies',
  
  'data-deletion': 'data-deletion',
  'exclusao-de-dados': 'data-deletion',
  'eliminacion-de-datos': 'data-deletion',
  'suppression-donnees': 'data-deletion',
  'datenloeschung': 'data-deletion',
  'cancellazione-dati': 'data-deletion',
  
  // Government/Municipal landing pages
  'gov': 'gov'
};

/**
 * Parse URL path to extract language and page
 * Examples:
 * /pt/politica-de-privacidade -> { language: 'PT', page: 'privacy' }
 * /en/privacy-policy -> { language: 'EN', page: 'privacy' }
 * /es/politica-de-cookies -> { language: 'ES', page: 'cookies' }
 * /en/ -> { language: 'EN', page: 'home' }
 * / -> { language: 'EN', page: 'home' } (default)
 */
export const parseUrlPath = (pathname: string): ParsedUrl => {
  console.log('parseUrlPath called with pathname:', pathname);
  // Remove leading and trailing slashes, split by '/'
  const segments = pathname.replace(/^\/+|\/+$/g, '').split('/').filter(Boolean);
  console.log('parseUrlPath segments:', segments);
  
  let language = 'EN'; // Default language changed from PT to EN
  let page = 'home'; // Default page
  
  if (segments.length === 0) {
    return { language, page };
  }
  
  // 1. Find the first segment that is a language code
  let langSegmentIndex = -1;
  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i].toLowerCase();
    if (segment in SUPPORTED_LANGUAGES) {
      language = SUPPORTED_LANGUAGES[segment as keyof typeof SUPPORTED_LANGUAGES];
      langSegmentIndex = i;
      break; // Use the first valid language code found
    }
  }
  
  // 2. Find the page segment
  // If we found a language segment, look at the segments AFTER it first
  // If not, look from the beginning
  const startSearchIndex = langSegmentIndex !== -1 ? langSegmentIndex + 1 : 0;
  
  // Check for composite paths first (e.g., "gov/portugal")
  // Join remaining segments and check if it matches a composite mapping
  if (startSearchIndex < segments.length) {
    const remainingPath = segments.slice(startSearchIndex).join('/').toLowerCase();
    if (remainingPath in URL_TO_PAGE_MAPPINGS) {
      page = URL_TO_PAGE_MAPPINGS[remainingPath];
    } else {
      // Fall back to checking individual segments
      for (let i = startSearchIndex; i < segments.length; i++) {
        const segment = segments[i].toLowerCase();
        
        // Check if it's a localized URL that maps to a standard page
        if (segment in URL_TO_PAGE_MAPPINGS) {
          page = URL_TO_PAGE_MAPPINGS[segment];
          break;
        } else if ((VALID_PAGES as readonly string[]).includes(segment)) {
          page = segment;
          break;
        }
      }
    }
  }
  
  // Special case: if no page found after language but there were segments before it (unlikely)
  // or if we want to search the entire path for a page if not found yet
  if (page === 'home' && segments.length > 0) {
    for (let i = 0; i < segments.length; i++) {
      if (i === langSegmentIndex) continue;
      const segment = segments[i].toLowerCase();
      if (segment in URL_TO_PAGE_MAPPINGS) {
        page = URL_TO_PAGE_MAPPINGS[segment];
        break;
      } else if ((VALID_PAGES as readonly string[]).includes(segment)) {
        page = segment;
        break;
      }
    }
  }
  
  const result = { language, page };
  console.log('parseUrlPath result:', result);
  return result;
};

/**
 * Generate localized URL for given language and page
 * Examples:
 * generateLocalizedUrl('PT', 'privacy') -> '/pt/politica-de-privacidade'
 * generateLocalizedUrl('EN', 'privacy') -> '/en/privacy-policy'
 * generateLocalizedUrl('ES', 'cookies') -> '/es/politica-de-cookies'
 * generateLocalizedUrl('EN', 'home') -> '/en/'
 */
export const generateLocalizedUrl = (language: string, page: string): string => {
  const langCode = LANGUAGE_CODES[language as keyof typeof LANGUAGE_CODES] || 'en';
  
  if (page === 'home') {
    return `/${langCode}/`;
  }
  
  // Check if page has localized URL mapping
  if (page in PAGE_URL_MAPPINGS && language in PAGE_URL_MAPPINGS[page]) {
    const localizedPage = PAGE_URL_MAPPINGS[page][language];
    return `/${langCode}/${localizedPage}`;
  }
  
  return `/${langCode}/${page}`;
};

/**
 * Get default language based on browser preferences or fallback
 */
export const getDefaultLanguage = (): string => {
  if (typeof window === 'undefined') return 'EN';
  
  const browserLang = navigator.language.toLowerCase();
  
  // Map browser language to our supported languages
  if (browserLang.startsWith('pt')) return 'PT';
  if (browserLang.startsWith('es')) return 'ES';
  if (browserLang.startsWith('fr')) return 'FR';
  if (browserLang.startsWith('de')) return 'DE';
  if (browserLang.startsWith('it')) return 'IT';
  
  return 'EN'; // Default fallback
};

/**
 * Check if language code is valid
 */
export const isValidLanguage = (language: string): boolean => {
  return language in LANGUAGE_CODES;
};

/**
 * Check if page is valid
 */
export const isValidPage = (page: string): boolean => {
  return (VALID_PAGES as readonly string[]).includes(page) || Object.values(URL_TO_PAGE_MAPPINGS).includes(page);
};

/**
 * Get language name for display
 */
export const getLanguageName = (language: string): string => {
  const names: Record<string, string> = {
    'EN': 'English',
    'PT': 'Português', 
    'ES': 'Español',
    'FR': 'Français',
    'DE': 'Deutsch',
    'IT': 'Italiano'
  };
  return names[language] || 'English';
};

/**
 * Get locale code for analytics and SEO
 */
export const getLocaleCode = (language: string): string => {
  const localeCodes: Record<string, string> = {
    'PT': 'pt-PT',
    'EN': 'en-US',
    'ES': 'es-ES',
    'FR': 'fr-FR',
    'DE': 'de-DE',
    'IT': 'it-IT'
  };
  
  return localeCodes[language] || 'en-US';
};

/**
 * Generate all localized URLs for a page (for hreflang)
 */
export const generateHreflangUrls = (page: string, baseUrl: string = 'https://tuggi.app'): Array<{lang: string, url: string}> => {
  return Object.entries(LANGUAGE_CODES).map(([language, _code]) => ({
    lang: getLocaleCode(language),
    url: `${baseUrl}${generateLocalizedUrl(language, page)}`
  }));
};

/**
 * Redirect to localized URL if needed
 */
export const redirectToLocalizedUrl = (currentPath: string, preferredLanguage?: string): string | null => {
  const { language, page } = parseUrlPath(currentPath);
  const targetLanguage = preferredLanguage || getDefaultLanguage();
  
  // If already on correct language, no redirect needed
  if (language === targetLanguage) return null;
  
  // Generate new URL with preferred language
  return generateLocalizedUrl(targetLanguage, page);
};

/**
 * Extract page and language from current URL for analytics
 */
export const getCurrentPageInfo = (): { page: string, language: string, locale: string } => {
  const { language, page } = parseUrlPath(window.location.pathname);
  return {
    page,
    language,
    locale: getLocaleCode(language)
  };
};

/**
 * Get canonical page name from localized URL
 */
export const getCanonicalPageName = (urlPage: string): string => {
  return URL_TO_PAGE_MAPPINGS[urlPage] || urlPage;
};

/**
 * Get localized page URL for a specific language
 */
export const getLocalizedPageUrl = (page: string, language: string): string => {
  if (page in PAGE_URL_MAPPINGS && language in PAGE_URL_MAPPINGS[page]) {
    return PAGE_URL_MAPPINGS[page][language];
  }
  return page;
};