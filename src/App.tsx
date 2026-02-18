import { useState, useEffect } from 'react';
import Layout from './components/layout/Layout';
import PurposePage from './pages/PurposePage';
import ContactPage from './pages/ContactPage';
import InvestorsPage from './pages/InvestorsPage';
import PrivacyPolicyPage from './pages/legal/PrivacyPolicyPage';
import CookiePolicyPage from './pages/legal/CookiePolicyPage';
import TermsOfUsePage from './pages/legal/TermsOfUsePage';
import BusinessPage from './pages/BusinessPage';
import DataDeletionPage from './pages/legal/DataDeletionPage';
import { parseUrlPath, generateLocalizedUrl, isValidLanguage } from './utils/routing';
import { useSEO } from './hooks/useSEO';
import { trackPageView, trackLanguageChange, trackUserLocation, initAllTracking } from './utils/seo';
import CookieConsent from './components/ui/CookieConsent';
import DriversLandingPageC from './pages/DriversLandingPageC';
import DriversLandingPageE from './pages/DriversLandingPageE';
import GovPage from './pages/GovPage';
import GovPrivacyPolicyPage from './pages/legal/GovPrivacyPolicyPage';
import GovTermsOfUsePage from './pages/legal/GovTermsOfUsePage';
import TermsOfUseDriversPage from './pages/legal/TermsOfUseDriversPage';
import HomeV2 from './pages/HomeV2';
import BetaDrivers from './pages/BetaDrivers';

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
  }
}

function App() {
  // Parse current URL to determine language and page on initial load
  const { language: initialLang, page: initialPage } = parseUrlPath(window.location.pathname);
  
  const [currentLanguage, setCurrentLanguage] = useState(initialLang);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize app with URL parsing and analytics
  useEffect(() => {
    // Initialize tracking if consent exists
    const measurementId = import.meta.env.VITE_GA4_MEASUREMENT_ID || 'G-LFFNJDG7TJ';
    const clarityId = 'vfsv6axr3i';
    
    initAllTracking(measurementId, clarityId);
    
    // Track initial page view (tracking will be blocked if no consent exists)
    trackPageView(currentPage, currentLanguage, measurementId);
    
    // Listen for consent updates
    const handleConsentUpdate = () => {
      initAllTracking(measurementId, clarityId);
      // Re-track page view now that we have consent
      trackPageView(currentPage, currentLanguage, measurementId);
    };
    window.addEventListener('tuggi_consent_updated', handleConsentUpdate);
    
    // Track user location for geographic analytics
    trackUserLocation(currentLanguage).catch(() => {
      // Location tracking failed, but continue normally
    });
    
    // Set up intersection observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);
    
    // Observe elements with animation classes
    const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');
    animatedElements.forEach(el => observer.observe(el));
    
    setIsInitialized(true);
    
    return () => {
      observer.disconnect();
      window.removeEventListener('tuggi_consent_updated', handleConsentUpdate);
    };
  }, []);

  // Update SEO when page or language changes
  console.log('App.tsx - calling useSEO with:', { currentPage, currentLanguage });
  useSEO(currentPage, currentLanguage);

  // Handle language change with proper URL routing and analytics
  const handleLanguageChange = (lang: string) => {
    if (!isValidLanguage(lang) || lang === currentLanguage) return;
    
    const previousLanguage = currentLanguage;
    setCurrentLanguage(lang);
    
    // Generate new localized URL
    const newUrl = generateLocalizedUrl(lang, currentPage);
    
    // Update browser URL without page reload
    window.history.pushState(
      { page: currentPage, language: lang }, 
      '', 
      newUrl
    );
    
    // Track language change with detailed analytics
    trackLanguageChange(lang, previousLanguage, currentPage);
    
    // Track page view for new language
    trackPageView(currentPage, lang, import.meta.env.VITE_GA4_MEASUREMENT_ID || 'G-XXXXXXXXXX');
    
    // Language changed successfully
  };

  // Handle page navigation with proper URL routing and analytics
  const handlePageChange = (page: string) => {
    console.log('handlePageChange called with:', page);
    console.log('currentPage:', currentPage);
    if (page === currentPage) {
      console.log('Same page, returning early');
      return;
    }
    
    const previousPage = currentPage;
    console.log('Setting new page:', page);
    setCurrentPage(page);
    
    // Generate new localized URL
    const newUrl = generateLocalizedUrl(currentLanguage, page);
    
    // Update browser URL without page reload
    window.history.pushState(
      { page: page, language: currentLanguage }, 
      '', 
      newUrl
    );
    
    // Scroll to top on page change
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Track page navigation with detailed analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_navigation', {
        event_category: 'Navigation',
        event_label: page,
        language: currentLanguage,
        navigation_type: 'internal',
        previous_page: previousPage,
        timestamp: new Date().toISOString(),
        user_journey: `${previousPage}_to_${page}`,
        locale: getLocaleCode(currentLanguage)
      });
    }
    
    // Track page view for new page
    trackPageView(page, currentLanguage, import.meta.env.VITE_GA4_MEASUREMENT_ID || 'G-XXXXXXXXXX');
  };

  // Handle browser back/forward navigation
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (event.state) {
        const { language, page } = event.state;
        if (language && page) {
          setCurrentPage(page);
          setCurrentLanguage(language);
          
          // Track back/forward navigation
          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'browser_navigation', {
              event_category: 'Navigation',
              event_label: 'back_forward',
              page_type: page,
              language: language,
              navigation_type: 'browser',
              locale: getLocaleCode(language)
            });
          }
          
          trackPageView(page, language, import.meta.env.VITE_GA4_MEASUREMENT_ID || 'G-XXXXXXXXXX');
        }
      } else {
        // Fallback: parse URL if no state
        const { language, page } = parseUrlPath(window.location.pathname);
        setCurrentPage(page);
        setCurrentLanguage(language);
        trackPageView(page, language, import.meta.env.VITE_GA4_MEASUREMENT_ID || 'G-XXXXXXXXXX');
      }
    };
    
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Helper function to get locale code for analytics
  const getLocaleCode = (language: string): string => {
    const localeMap: Record<string, string> = {
      'EN': 'en-US',
      'PT': 'pt-BR',
      'ES': 'es-ES',
      'FR': 'fr-FR',
      'DE': 'de-DE',
      'IT': 'it-IT'
    };
    return localeMap[language] || 'en-US';
  };

  // Helper function to get the correct form URL based on language
  const getFormURL = (language: string): string => {
    const formURLs = {
      'EN': 'https://forms.gle/B5VWqtDgjEKEiHv1A',
      'PT': 'https://forms.gle/B5VWqtDgjEKEiHv1A',
      'ES': 'https://forms.gle/B5VWqtDgjEKEiHv1A',
      'FR': 'https://forms.gle/B5VWqtDgjEKEiHv1A',
      'DE': 'https://forms.gle/B5VWqtDgjEKEiHv1A',
      'IT': 'https://forms.gle/B5VWqtDgjEKEiHv1A'
    };
    return formURLs[language as keyof typeof formURLs] || formURLs['EN'];
  };

  // Enhanced CTA click handler with multilingual tracking and URL navigation
  const handleCTAClick = (ctaType: string, position: string = 'unknown') => {
    // Track analytics first
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'cta_click', {
        event_category: 'CTA Interaction',
        event_label: ctaType,
        page_type: currentPage,
        language: currentLanguage,
        cta_position: position,
        locale: getLocaleCode(currentLanguage),
        timestamp: new Date().toISOString(),
        user_journey_stage: getUserJourneyStage(currentPage),
        conversion_value: getCTAValue(ctaType)
      });
    }

    // Track Custom Event in Microsoft Clarity (for Smart Events)
    if (typeof window !== 'undefined' && window.clarity) {
      window.clarity("event", ctaType);
    }

    // Handle app store downloads
    const downloadCTAs = [
      'download_free',
      'app_store_download',
      'google_play_download',
      'ios_download'
    ];

    if (downloadCTAs.includes(ctaType)) {
      // Track iOS download click specifically
      if (ctaType === 'ios_download' && typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'cta_ios_download_click', {
          event_category: 'App Download',
          event_label: 'iOS Banner Download',
          page_type: currentPage,
          language: currentLanguage,
          cta_position: position,
          locale: getLocaleCode(currentLanguage),
          timestamp: new Date().toISOString()
        });
      }
      
      // Smart App Store Logic
      const ua = typeof navigator !== 'undefined' ? navigator.userAgent || navigator.vendor : '';
      const isAndroid = /android/i.test(ua);

      const downloadURLs = {
        'app_store_download': 'https://apps.apple.com/us/app/tuggi-drive/id6744379818?l=pt-BR',
        'google_play_download': 'https://play.google.com/store/apps/details?id=com.tuggidrive.app&pcampaignid=web_share',
        'ios_download': 'https://apps.apple.com/us/app/tuggi-drive/id6744379818?l=pt-BR'
      };
      
      let url = downloadURLs[ctaType as keyof typeof downloadURLs];

      // Fallback/Generic handling for 'download_free'
      if (!url && ctaType === 'download_free') {
        url = isAndroid 
          ? downloadURLs.google_play_download 
          : downloadURLs.app_store_download;
      }

      if (url) {
        // Use location.href for store links to avoid popup blockers and maintain user intent on mobile
        window.location.href = url;
      }
      return;
    }

    // Handle URL navigation for demo and early access CTAs
    const demoCTAs = [
      // Main demo requests
      'request_demo',
      'request_demo_hero',
      'request_demo_roadmap', 
      'request_demo_home_final',
      
      // Early access and beta programs  
      'request_early_access',
      'join_early_access_program',
      'apply_early_access',
      'join_beta_program',
      'join_early_partners_program',
      'join_beta',
      'early_access',
      
      // Demo scheduling
      'schedule_live_demo',
      'schedule_demo_call',
      'schedule_partnership_call',
      'schedule_consultation',
      'schedule_call_story',
      
      // Pilot and trial programs
      'join_pilot_hero',
      'start_free_trial',
      
      // Waitlist programs
      'join_tuggi_walk_waitlist',
      'join_tuggi_walk_waitlist_bottom',
      
      // Business and partnership CTAs
      'join_founding_partner',
      'get_started',
      'start_implementation',
      
      // City expansion and contact forms
      'expansion_form',
      'request_city'
    ];

    // Handle business contact CTA
    if (ctaType === 'business_contact') {
      // This will be handled by the BusinessPage component itself
      return;
    }

    // Handle legal page navigation CTAs
    const legalCTAs = [
      'privacy_policy',
      'terms_of_use',
      'data_deletion'
    ];

    if (legalCTAs.includes(ctaType)) {
      // Se estiver no contexto GOV, redireciona para as versões gov
      if (['gov', 'govPrivacy', 'govTerms'].includes(currentPage)) {
        const govPageMap: Record<string, string> = {
          'privacy_policy': 'govPrivacy',
          'terms_of_use': 'govTerms',
          'data_deletion': 'data-deletion' // Mantém o padrão para deleção
        };
        const targetPage = govPageMap[ctaType];
         if (targetPage) {
          handlePageChange(targetPage);
          return;
        }
      }

      const pageMap: Record<string, string> = {
        'privacy_policy': 'privacy',
        'terms_of_use': 'terms',
        'data_deletion': 'data-deletion'
      };
      const targetPage = pageMap[ctaType];
      if (targetPage) {
        handlePageChange(targetPage);
      }
      return;
    }

    // Handle Driver Terms
    if (ctaType === 'driver_terms') {
      const termsMap: Record<string, string> = {
        'PT': 'termos-motoristas',
        'EN': 'drivers-terms',
        'ES': 'terminos-conductores',
        'FR': 'conditions-chauffeurs',
        'DE': 'fahrer-bedingungen',
        'IT': 'termini-driver'
      };
      handlePageChange(termsMap[currentLanguage] || 'drivers-terms');
      return;
    }

    // Handle investors page navigation
    if (ctaType === 'investors_page') {
      handlePageChange('investors');
      return;
    }

    // Handle Android beta navigation to drivers page
    if (ctaType === 'android_beta' || ctaType === 'android_beta_final') {
      console.log('Android beta CTA clicked, navigating to motoristas');
      handlePageChange('motoristas');
      return;
    }

    // Handle video play CTA
    if (ctaType === 'video_play') {
      console.log('Video play CTA clicked');
      // Just track the event, no navigation needed
      return;
    }

    // Handle video demo CTA - scroll to final CTA section
    if (ctaType === 'video_demo_cta') {
      console.log('Video demo CTA clicked, scrolling to final CTA section');
      // Scroll to the final CTA section
      const finalCTASection = document.querySelector('[data-section="final-cta"]');
      if (finalCTASection) {
        finalCTASection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      } else {
        // Fallback: scroll to bottom of page
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth'
        });
      }
      return;
    }


    if (demoCTAs.includes(ctaType)) {
      const formURL = getFormURL(currentLanguage);
      window.open(formURL, '_blank');
      return;
    }

    // Handle external social media links
    const socialCTAs = [
      'linkedin_leandro_ramos',
      'linkedin_pedro_silva',
      'linkedin_ana_costa',
      'view_open_positions'
    ];

    if (socialCTAs.some(social => ctaType.startsWith(social.split('_')[0]))) {
      // Social media links are handled directly in components with their own href
      // This is just for analytics tracking
      return;
    }

    // Handle email contact (analytics only)
    if (ctaType === 'email_contact') {
      // Email links are handled directly in components with mailto:
      // This is just for analytics tracking
      return;
    }

    // For any unhandled CTA types, log for debugging
    // Unhandled CTA type
  };

  // Helper functions for enhanced analytics
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

  // Render page content based on current page
  const renderPage = () => {
    switch (currentPage) {
      case 'purpose':
        return <PurposePage currentLanguage={currentLanguage} onCTAClick={handleCTAClick} />;
      case 'contact':
        return <ContactPage currentLanguage={currentLanguage} onCTAClick={handleCTAClick} />;
      case 'investors':
      case 'investidores':
      case 'inversores':
        return <InvestorsPage currentLanguage={currentLanguage} onCTAClick={handleCTAClick} />;
      case 'privacy':
      case 'privacy-policy':
      case 'politica-de-privacidade':
      case 'politica-de-privacidad':
      case 'politique-de-confidentialite':
      case 'datenschutz':
      case 'informativa-privacy':
        return <PrivacyPolicyPage currentLanguage={currentLanguage} />;
      case 'terms':
      case 'terms-of-use':
      case 'termos-de-uso':
      case 'terminos-de-uso':
      case 'conditions-d-utilisation':
      case 'nutzungsbedingungen':
      case 'termini-di-utilizzo':
        return <TermsOfUsePage currentLanguage={currentLanguage} />;
      case 'drivers-terms':
      case 'termos-motoristas':
      case 'terminos-conductores':
      case 'conditions-chauffeurs':
      case 'fahrer-bedingungen':
      case 'termini-driver':
        return <TermsOfUseDriversPage currentLanguage={currentLanguage} />;
      case 'cookies':
      case 'cookie-policy':
      case 'politica-de-cookies':
      case 'politique-cookies':
      case 'cookie-richtlinie':
      case 'informativa-cookie':
        return <CookiePolicyPage currentLanguage={currentLanguage} />;
      case 'data-deletion':
      case 'exclusao-de-dados':
      case 'eliminacion-de-datos':
      case 'suppression-donnees':
      case 'datenloeschung':
      case 'cancellazione-dati':
        return <DataDeletionPage currentLanguage={currentLanguage} onCTAClick={handleCTAClick} />;
      case 'business':
      case 'empresas':
      case 'empresa':
        return <BusinessPage currentLanguage={currentLanguage} onCTAClick={handleCTAClick} />;
      case 'drivers':
      case 'motoristas':
      case 'conductores':
      case 'chauffeurs':
      case 'fahrer':
      case 'autisti':
      case 'motoristas-a':
      case 'motoristas-b':
      case 'motoristas-c':
      case 'motoristas-d':
        return <DriversLandingPageC currentLanguage={currentLanguage as 'PT' | 'EN' | 'ES' | 'FR' | 'DE' | 'IT'} onCTAClick={handleCTAClick} />;
      case 'motoristas-e': // Variant E (Free Interpretation / Dark Mode)
        return <DriversLandingPageE currentLanguage={currentLanguage as 'PT' | 'EN' | 'ES' | 'FR' | 'DE' | 'IT'} onCTAClick={handleCTAClick} />;
      case 'beta-drivers': // Beta Drivers - Intention Landing Page
      case 'beta-motoristas':
      case 'beta-autisti':
        return <BetaDrivers currentLanguage={currentLanguage as 'PT' | 'IT'} onCTAClick={handleCTAClick} />;
      case 'govPrivacy':
        return <GovPrivacyPolicyPage currentLanguage={currentLanguage} onBack={() => handlePageChange('gov')} />;
      case 'govTerms':
        return <GovTermsOfUsePage currentLanguage={currentLanguage} onBack={() => handlePageChange('gov')} />;
      case 'gov':
        return <GovPage currentLanguage={currentLanguage} onCTAClick={handleCTAClick} />;
      case 'home':
      default:
        return (
          <HomeV2 currentLanguage={currentLanguage} onCTAClick={handleCTAClick} />
        );
    }
  };

  if (!isInitialized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-50 to-tuggi-primary/5">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-tuggi-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-neutral-600">Loading Tuggi Drive...</p>
        </div>
      </div>
    );
  }

  return (
    <Layout 
      currentLanguage={currentLanguage}
      onLanguageChange={handleLanguageChange}
      currentPage={currentPage}
      onPageChange={handlePageChange}
      hideFooter={
        currentPage === 'gov' ||
        currentPage === 'govPrivacy' ||
        currentPage === 'govTerms' ||
        currentPage.includes('motoristas') ||
        currentPage.includes('drivers') ||
        currentPage.includes('conductores') ||
        currentPage.includes('chauffeurs') ||
        currentPage.includes('fahrer') ||
        currentPage.includes('autisti') ||
        currentPage.includes('beta-') ||
        currentPage === 'drivers-terms' ||
        currentPage === 'termos-motoristas' ||
        currentPage === 'terminos-conductores' ||
        currentPage === 'conditions-chauffeurs' ||
        currentPage === 'fahrer-bedingungen' ||
        currentPage === 'termini-driver'
      }
      hideHeader={['govPrivacy', 'govTerms'].includes(currentPage)}
      minimalHeader={currentPage.includes('motoristas') || currentPage.includes('drivers') || currentPage.includes('beta-')}
    >
      {renderPage()}
      {/* <CookieConsent currentLanguage={currentLanguage} /> */}
    </Layout>
  );
}

export default App;