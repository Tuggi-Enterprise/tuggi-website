/**
 * Security utilities for the Tuggi Drive B2B application
 * Provides validation, sanitization, and security helper functions
 */

/**
 * Validates if a URL is a legitimate Google Forms URL
 * @param url - The URL to validate
 * @returns boolean indicating if the URL is valid
 */
export const isValidGoogleFormUrl = (url: string): boolean => {
  try {
    const urlObj = new URL(url);
    const validHosts = [
      'forms.gle',
      'docs.google.com',
      'forms.google.com'
    ];
    
    return validHosts.includes(urlObj.hostname.toLowerCase());
  } catch {
    return false;
  }
};

/**
 * Validates if a URL is safe for external navigation
 * @param url - The URL to validate
 * @returns boolean indicating if the URL is safe
 */
export const isSafeExternalUrl = (url: string): boolean => {
  try {
    const urlObj = new URL(url);
    
    // Allow only HTTPS URLs (except localhost for development)
    if (urlObj.protocol !== 'https:' && !urlObj.hostname.includes('localhost')) {
      return false;
    }
    
    // Block potentially dangerous protocols
    const dangerousProtocols = ['javascript:', 'data:', 'vbscript:', 'file:'];
    if (dangerousProtocols.some(protocol => url.toLowerCase().startsWith(protocol))) {
      return false;
    }
    
    // Allow specific trusted domains
    const trustedDomains = [
      'forms.gle',
      'docs.google.com',
      'forms.google.com',
      'linkedin.com',
      'instagram.com',
      'youtube.com',
      'youtu.be',
      'tuggi.app',
      'tuggi.com'
    ];
    
    return trustedDomains.some(domain => 
      urlObj.hostname === domain || urlObj.hostname.endsWith('.' + domain)
    );
  } catch {
    return false;
  }
};

/**
 * Sanitizes text input to prevent XSS attacks
 * @param input - The text input to sanitize
 * @returns Sanitized text
 */
export const sanitizeTextInput = (input: string): string => {
  if (typeof input !== 'string') {
    return '';
  }
  
  return input
    .replace(/[<>"'&]/g, (match) => {
      const entityMap: Record<string, string> = {
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        '&': '&amp;'
      };
      return entityMap[match] || match;
    })
    .trim()
    .slice(0, 1000); // Limit length to prevent DoS
};

/**
 * Validates email format
 * @param email - The email to validate
 * @returns boolean indicating if email is valid
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email) && email.length <= 254;
};

/**
 * Validates if a string contains only safe characters for analytics
 * @param value - The value to validate
 * @returns boolean indicating if the value is safe
 */
export const isSafeAnalyticsValue = (value: string): boolean => {
  if (typeof value !== 'string') {
    return false;
  }
  
  // Allow alphanumeric, spaces, hyphens, underscores, and common punctuation
  const safePattern = /^[a-zA-Z0-9\s\-_.,!?()\[\]{}:;"'@#$%^&*+=|\\/<>~`]*$/;
  return safePattern.test(value) && value.length <= 100;
};

/**
 * Securely opens external URLs with proper security attributes
 * @param url - The URL to open
 * @param trackingCallback - Optional callback for analytics tracking
 */
export const secureExternalNavigation = (
  url: string, 
  trackingCallback?: (url: string) => void
): void => {
  if (!isSafeExternalUrl(url)) {
    console.warn('Blocked navigation to potentially unsafe URL:', url);
    return;
  }
  
  // Track the navigation if callback provided
  if (trackingCallback) {
    try {
      trackingCallback(url);
    } catch (error) {
      console.warn('Analytics tracking failed:', error);
    }
  }
  
  // Open with security attributes
  window.open(url, '_blank', 'noopener,noreferrer,nofollow');
};

/**
 * Validates and sanitizes analytics event data
 * @param eventData - The event data object
 * @returns Sanitized event data
 */
export const sanitizeAnalyticsData = (eventData: Record<string, any>): Record<string, any> => {
  const sanitized: Record<string, any> = {};
  
  for (const [key, value] of Object.entries(eventData)) {
    // Sanitize key
    const safeKey = sanitizeTextInput(key).replace(/[^a-zA-Z0-9_]/g, '_');
    
    if (safeKey && typeof value === 'string') {
      // Sanitize string values
      const safeValue = sanitizeTextInput(value);
      if (isSafeAnalyticsValue(safeValue)) {
        sanitized[safeKey] = safeValue;
      }
    } else if (typeof value === 'number' && isFinite(value)) {
      // Allow finite numbers
      sanitized[safeKey] = value;
    } else if (typeof value === 'boolean') {
      // Allow booleans
      sanitized[safeKey] = value;
    }
  }
  
  return sanitized;
};

/**
 * Rate limiting utility for preventing abuse
 */
class RateLimiter {
  private attempts: Map<string, number[]> = new Map();
  private readonly maxAttempts: number;
  private readonly windowMs: number;
  
  constructor(maxAttempts: number = 10, windowMs: number = 60000) {
    this.maxAttempts = maxAttempts;
    this.windowMs = windowMs;
  }
  
  /**
   * Check if an action is allowed for a given key
   * @param key - Identifier for the rate limit (e.g., IP, user ID)
   * @returns boolean indicating if action is allowed
   */
  isAllowed(key: string): boolean {
    const now = Date.now();
    const attempts = this.attempts.get(key) || [];
    
    // Remove old attempts outside the window
    const validAttempts = attempts.filter(time => now - time < this.windowMs);
    
    if (validAttempts.length >= this.maxAttempts) {
      return false;
    }
    
    // Record this attempt
    validAttempts.push(now);
    this.attempts.set(key, validAttempts);
    
    return true;
  }
  
  /**
   * Reset attempts for a given key
   * @param key - Identifier to reset
   */
  reset(key: string): void {
    this.attempts.delete(key);
  }
}

// Export a default rate limiter instance
export const defaultRateLimiter = new RateLimiter();

/**
 * Security configuration object
 */
export const securityConfig = {
  // Maximum lengths for various inputs
  maxLengths: {
    email: 254,
    name: 100,
    message: 1000,
    url: 2048,
    analyticsValue: 100
  },
  
  // Trusted domains for external navigation
  trustedDomains: [
    'forms.gle',
    'docs.google.com',
    'forms.google.com',
    'linkedin.com',
    'instagram.com',
    'youtube.com',
    'youtu.be',
    'tuggi.app',
    'tuggi.com'
  ],
  
  // Rate limiting settings
  rateLimits: {
    formSubmission: { maxAttempts: 5, windowMs: 300000 }, // 5 attempts per 5 minutes
    analytics: { maxAttempts: 100, windowMs: 60000 }, // 100 events per minute
    navigation: { maxAttempts: 50, windowMs: 60000 } // 50 navigations per minute
  }
} as const;

/**
 * Validates the current environment for security
 * @returns Object with security status information
 */
export const validateSecurityEnvironment = () => {
  const isProduction = window.location.hostname !== 'localhost';
  const isHTTPS = window.location.protocol === 'https:';
  const hasCSP = document.querySelector('meta[http-equiv="Content-Security-Policy"]') !== null;
  
  return {
    isProduction,
    isHTTPS,
    hasCSP,
    isSecure: isProduction ? isHTTPS && hasCSP : true, // Allow HTTP on localhost
    warnings: [
      ...(!isHTTPS && isProduction ? ['Site not served over HTTPS'] : []),
      ...(!hasCSP ? ['Content Security Policy not found'] : [])
    ]
  };
};

/**
 * Initialize security monitoring
 */
export const initializeSecurity = () => {
  const securityStatus = validateSecurityEnvironment();
  
  if (!securityStatus.isSecure) {
    console.warn('Security warnings detected:', securityStatus.warnings);
  }
  
  // Log security status in development
  if (import.meta.env.DEV) {
    console.log('Security status:', securityStatus);
  }
  
  return securityStatus;
};