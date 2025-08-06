import { useCallback } from 'react';
import {
  trackElementClick,
  trackGoogleFormInteraction,
  trackUserEngagement,
  trackSectionVisibility,
  trackCTAClick,
  trackLinkClick
} from '../utils/seo';

/**
 * Custom hook for analytics tracking
 * Provides easy-to-use functions for tracking user interactions
 */
export const useAnalytics = (currentPage: string, currentLanguage: string) => {
  // Track button clicks
  const trackButtonClick = useCallback((buttonText: string, destination?: string, additionalData?: Record<string, any>) => {
    trackElementClick('button', buttonText, destination || '', currentPage, currentLanguage, additionalData);
  }, [currentPage, currentLanguage]);

  // Track link clicks
  const trackLinkClickEvent = useCallback((linkText: string, destination: string, additionalData?: Record<string, any>) => {
    trackElementClick('link', linkText, destination, currentPage, currentLanguage, additionalData);
  }, [currentPage, currentLanguage]);

  // Track CTA clicks
  const trackCTAClickEvent = useCallback((ctaText: string, destination?: string, additionalData?: Record<string, any>) => {
    trackElementClick('cta', ctaText, destination || '', currentPage, currentLanguage, additionalData);
  }, [currentPage, currentLanguage]);

  // Track Google Form interactions
  const trackFormInteraction = useCallback((action: 'open' | 'start_fill' | 'submit' | 'abandon', formType: string = 'registration_form', additionalData?: Record<string, any>) => {
    trackGoogleFormInteraction(action, formType, currentPage, currentLanguage, additionalData);
  }, [currentPage, currentLanguage]);

  // Track user engagement milestones
  const trackEngagement = useCallback((engagementType: 'scroll_milestone' | 'time_milestone' | 'interaction_burst' | 'return_visit', value: number) => {
    trackUserEngagement(engagementType, value, currentPage, currentLanguage);
  }, [currentPage, currentLanguage]);

  // Track section visibility
  const trackSection = useCallback((sectionName: string, visibilityPercentage: number, timeVisible: number) => {
    trackSectionVisibility(sectionName, visibilityPercentage, timeVisible, currentPage, currentLanguage);
  }, [currentPage, currentLanguage]);

  // Track navigation events
  const trackNavigation = useCallback((destination: string, navigationText: string) => {
    trackLinkClick('navigation', destination, currentLanguage, {
      navigation_text: navigationText,
      source_page: currentPage
    });
  }, [currentPage, currentLanguage]);

  // Track footer interactions
  const trackFooterClick = useCallback((elementText: string, destination?: string) => {
    trackElementClick('link', elementText, destination || '', currentPage, currentLanguage, {
      section: 'footer'
    });
  }, [currentPage, currentLanguage]);

  // Track header interactions
  const trackHeaderClick = useCallback((elementText: string, destination?: string) => {
    trackElementClick('link', elementText, destination || '', currentPage, currentLanguage, {
      section: 'header'
    });
  }, [currentPage, currentLanguage]);

  // Track language change
  const trackLanguageSwitch = useCallback((newLanguage: string) => {
    trackElementClick('button', 'language_switch', '', currentPage, currentLanguage, {
      new_language: newLanguage,
      previous_language: currentLanguage
    });
  }, [currentPage, currentLanguage]);

  // Track newsletter signup
  const trackNewsletterSignup = useCallback((email: string, success: boolean) => {
    trackElementClick('button', 'newsletter_signup', '', currentPage, currentLanguage, {
      email_domain: email.split('@')[1] || 'unknown',
      signup_success: success
    });
  }, [currentPage, currentLanguage]);

  return {
    trackButtonClick,
    trackLinkClickEvent,
    trackCTAClickEvent,
    trackFormInteraction,
    trackEngagement,
    trackSection,
    trackNavigation,
    trackFooterClick,
    trackHeaderClick,
    trackLanguageSwitch,
    trackNewsletterSignup
  };
};

/**
 * Hook for automatic scroll and time tracking
 */
export const useEngagementTracking = (currentPage: string, currentLanguage: string) => {
  const { trackEngagement } = useAnalytics(currentPage, currentLanguage);

  // Set up automatic scroll tracking
  const setupScrollTracking = useCallback(() => {
    let maxScroll = 0;
    const milestones = [25, 50, 75, 90, 100];
    const trackedMilestones = new Set<number>();

    const handleScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        
        milestones.forEach(milestone => {
          if (scrollPercent >= milestone && !trackedMilestones.has(milestone)) {
            trackedMilestones.add(milestone);
            trackEngagement('scroll_milestone', milestone);
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [trackEngagement]);

  // Set up automatic time tracking
  const setupTimeTracking = useCallback(() => {
    const startTime = Date.now();
    const milestones = [30, 60, 120, 300]; // seconds
    const trackedMilestones = new Set<number>();

    const interval = setInterval(() => {
      const timeSpent = Math.floor((Date.now() - startTime) / 1000);
      
      milestones.forEach(milestone => {
        if (timeSpent >= milestone && !trackedMilestones.has(milestone)) {
          trackedMilestones.add(milestone);
          trackEngagement('time_milestone', milestone);
        }
      });
    }, 10000); // Check every 10 seconds

    return () => {
      clearInterval(interval);
    };
  }, [trackEngagement]);

  return {
    setupScrollTracking,
    setupTimeTracking
  };
};

/**
 * Hook for section visibility tracking using Intersection Observer
 */
export const useSectionTracking = (currentPage: string, currentLanguage: string) => {
  const { trackSection } = useAnalytics(currentPage, currentLanguage);

  const observeSection = useCallback((sectionRef: React.RefObject<HTMLElement>, sectionName: string) => {
    if (!sectionRef.current) return;

    let startTime: number | null = null;
    let maxVisibility = 0;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const visibilityPercentage = Math.round(entry.intersectionRatio * 100);
          
          if (entry.isIntersecting) {
            if (startTime === null) {
              startTime = Date.now();
            }
            maxVisibility = Math.max(maxVisibility, visibilityPercentage);
          } else {
            if (startTime !== null) {
              const timeVisible = Math.round((Date.now() - startTime) / 1000);
              if (timeVisible > 1) { // Only track if visible for more than 1 second
                trackSection(sectionName, maxVisibility, timeVisible);
              }
              startTime = null;
              maxVisibility = 0;
            }
          }
        });
      },
      {
        threshold: [0, 0.25, 0.5, 0.75, 1.0],
        rootMargin: '0px'
      }
    );

    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, [trackSection]);

  return {
    observeSection
  };
};