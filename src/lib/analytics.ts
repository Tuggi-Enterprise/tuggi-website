import LogRocket from 'logrocket';

/**
 * Analytics Helper - GA4 Events
 * 
 * Centralized analytics tracking for institutional Home V2
 */

export const initAnalytics = () => {
  // Use Vite's way to detect production or check if not on localhost
  const isProduction = import.meta.env.PROD || (typeof window !== 'undefined' && window.location.hostname !== 'localhost');

  if (isProduction) {
    LogRocket.init('yhyg9h/tuggi-site');
    console.log('🚀 LogRocket initialized');
  }
};

// Function for analytics tracking
export const track = (event: string, params?: Record<string, any>) => {
  // In development, log to console
  if (import.meta.env.DEV) {
    console.log('📊 Analytics Event:', event, params);
  }

  // Send to LogRocket
  if (import.meta.env.PROD || window.location.hostname !== 'localhost') {
    LogRocket.track(event, params);
  }

  // In production, send to GA4
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', event, {
      event_category: 'Home V2',
      ...params
    });
  }
};

// Specific event helpers for Home V2
export const trackHomeView = () => {
  track('view_home', {
    page_type: 'home_v2',
    timestamp: new Date().toISOString()
  });
};

export const trackHeroCTA = (ctaType: 'ios' | 'android', position: string = 'hero') => {
  track('hero_cta_click', {
    cta_type: ctaType,
    cta_position: position,
    timestamp: new Date().toISOString()
  });
};

export const trackGuaranteeView = () => {
  track('hero_guarantee_view', {
    element: 'guarantee_line',
    timestamp: new Date().toISOString()
  });
};

export const trackTrustSectionView = () => {
  track('trust_section_view', {
    section: 'trust_indicators',
    timestamp: new Date().toISOString()
  });
};

export const trackTrustCTA = () => {
  track('trust_cta_click', {
    cta_type: 'audio_sample',
    timestamp: new Date().toISOString()
  });
};

export const trackAudioPlay = (locationId: string, locale: string) => {
  track('play_sample', {
    location_id: locationId,
    locale: locale,
    timestamp: new Date().toISOString()
  });
};

export const trackVideoPlay = () => {
  track('video_play', {
    video_type: 'demo',
    timestamp: new Date().toISOString()
  });
};

export const trackCityVote = () => {
  track('city_vote_click', {
    cta_type: 'request_city',
    timestamp: new Date().toISOString()
  });
};

export const trackFAQExpand = (questionId: string) => {
  track('faq_expand', {
    question_id: questionId,
    timestamp: new Date().toISOString()
  });
};

export const trackFinalCTA = (ctaType: 'ios' | 'android') => {
  track('final_cta_click', {
    cta_type: ctaType,
    cta_position: 'final_section',
    timestamp: new Date().toISOString()
  });
};

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}
