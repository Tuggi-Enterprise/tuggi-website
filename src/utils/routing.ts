// URL routing utilities for multilingual support

export interface ParsedUrl {
  language: string;
  page: string;
}

// Supported languages with their URL codes
export const SUPPORTED_LANGUAGES = {
  'pt': 'PT',
  'en': 'EN', 
  'es': 'ES'
} as const;

export const LANGUAGE_CODES = {
  'PT': 'pt',
  'EN': 'en',
  'ES': 'es'
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
  'privacy',
  'privacy-policy',
  'politica-de-privacidade',
  'politica-de-privacidad',
  'terms',
  'terms-of-use',
  'termos-de-uso',
  'terminos-de-uso',
  'cookies',
  'cookie-policy',
  'politica-de-cookies'
] as const;

// Page URL mappings for different languages
export const PAGE_URL_MAPPINGS: Record<string, Record<string, string>> = {
  'investors': {
    'EN': 'investors',
    'PT': 'investidores',
    'ES': 'inversores'
  },
  'business': {
    'EN': 'business',
    'PT': 'empresas',
    'ES': 'empresas'
  },
  'privacy': {
    'EN': 'privacy-policy',
    'PT': 'politica-de-privacidade',
    'ES': 'politica-de-privacidad'
  },
  'terms': {
    'EN': 'terms-of-use',
    'PT': 'termos-de-uso',
    'ES': 'terminos-de-uso'
  },
  'cookies': {
    'EN': 'cookie-policy',
    'PT': 'politica-de-cookies',
    'ES': 'politica-de-cookies'
  }
};

// Reverse mappings for URL parsing
export const URL_TO_PAGE_MAPPINGS: Record<string, string> = {
  'investors': 'investors',
  'investidores': 'investors',
  'inversores': 'investors',
  'business': 'business',
  'empresas': 'business',
  'empresa': 'business',
  'privacy-policy': 'privacy',
  'politica-de-privacidade': 'privacy',
  'politica-de-privacidad': 'privacy',
  'terms-of-use': 'terms',
  'termos-de-uso': 'terms',
  'terminos-de-uso': 'terms',
  'cookie-policy': 'cookies',
  'politica-de-cookies': 'cookies'
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
  
  let language = 'PT'; // Default language
  let page = 'home'; // Default page
  
  if (segments.length === 0) {
    // Root path: / -> default to EN/home
    return { language, page };
  }
  
  const firstSegment = segments[0].toLowerCase();
  
  // Check if first segment is a language code
  if (firstSegment in SUPPORTED_LANGUAGES) {
    language = SUPPORTED_LANGUAGES[firstSegment as keyof typeof SUPPORTED_LANGUAGES];
    
    // Check if there's a page segment
    if (segments.length > 1) {
      const pageSegment = segments[1].toLowerCase();
      
      // Check if it's a localized URL that maps to a standard page
      if (pageSegment in URL_TO_PAGE_MAPPINGS) {
        page = URL_TO_PAGE_MAPPINGS[pageSegment];
      } else if ((VALID_PAGES as readonly string[]).includes(pageSegment)) {
        page = pageSegment;
      }
    }
  } else {
    // First segment might be a page without language prefix
    if (firstSegment in URL_TO_PAGE_MAPPINGS) {
      page = URL_TO_PAGE_MAPPINGS[firstSegment];
    } else if ((VALID_PAGES as readonly string[]).includes(firstSegment)) {
      page = firstSegment;
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
    'ES': 'Español'
  };
  return names[language] || 'English';
};

/**
 * Get language flag emoji
 */
export const getLanguageFlag = (language: string): string => {
  const flags: Record<string, string> = {
    'EN': '🇺🇸',
    'PT': '🇧🇷',
    'ES': '🇪🇸'
  };
  return flags[language] || '🇺🇸';
};

/**
 * Get flag accessibility attributes with full language name
 */
export const getFlagAccessibilityProps = (language: string): { role: string; 'aria-label': string } => {
  const fullNames: Record<string, string> = {
    'EN': 'English (United States)',
    'PT': 'Português (Brasil)',
    'ES': 'Español (España)'
  };
  
  return {
    role: 'img',
    'aria-label': `${fullNames[language] || fullNames['EN']} flag`
  };
};

/**
 * Get locale code for analytics and SEO
 */
export const getLocaleCode = (language: string): string => {
  const localeCodes: Record<string, string> = {
    'PT': 'pt-BR',
    'EN': 'en-US',
    'ES': 'es-ES'
  };
  
  return localeCodes[language] || 'en-US';
};

/**
 * Generate all localized URLs for a page (for hreflang)
 */
export const generateHreflangUrls = (page: string, baseUrl: string = 'https://tuggi.app'): Array<{lang: string, url: string}> => {
  return Object.entries(LANGUAGE_CODES).map(([language, code]) => ({
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