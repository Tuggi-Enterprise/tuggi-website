// Utility for managing GDPR-compliant cookie consent
export interface CookieConsent {
  analytics: boolean;
  clarity: boolean;
  essential: boolean; // Always true
}

export const CONSENT_KEY = 'tuggi_cookie_consent_v1';

export const getConsent = (): CookieConsent | null => {
  if (typeof window === 'undefined') return null;
  const stored = localStorage.getItem(CONSENT_KEY);
  if (!stored) return null;
  try {
    return JSON.parse(stored);
  } catch (e) {
    return null;
  }
};

export const setConsent = (consent: CookieConsent) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
  // Dispatch a custom event to notify the application
  window.dispatchEvent(new CustomEvent('tuggi_consent_updated', { detail: consent }));
};

export const hasGivenConsent = (): boolean => {
  return getConsent() !== null;
};
