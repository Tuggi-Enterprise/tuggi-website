import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import HeroSection from './components/HeroSection';
import ProductHighlights from './components/ProductHighlights';
import TrustSection from './components/TrustSection';
import CollaborateSection from './components/CollaborateSection';
import HowItWorksSection from './components/HowItWorksSection';
import RoadmapSection from './components/RoadmapSection';
import ExpansionSection from './components/ExpansionSection';
import PrivacySection from './components/PrivacySection';
import FinalCTASection from './components/FinalCTASection';
import PurposePage from './components/PurposePage';
import ContactPage from './components/ContactPage';
import InvestorsPage from './components/InvestorsPage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import TermsOfUsePage from './components/TermsOfUsePage';
import CookiePolicyPage from './components/CookiePolicyPage';
import { useSEO } from './hooks/useSEO';
import { initializeAnalytics, trackPerformanceMetrics, trackPageView, trackLanguageChange } from './utils/seo';
import { parseUrlPath, generateLocalizedUrl, getDefaultLanguage, isValidLanguage } from './utils/routing';

function App() {
  const [currentLanguage, setCurrentLanguage] = useState('PT');
  const [currentPage, setCurrentPage] = useState('home');
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize app with URL parsing and analytics
  useEffect(() => {
    // Parse current URL to determine language and page
    const { language, page } = parseUrlPath(window.location.pathname);
    
    // Set initial state
    setCurrentLanguage(language);
    setCurrentPage(page);
    
    // Initialize Google Analytics with enhanced multilingual tracking
    const measurementId = import.meta.env.VITE_GA4_MEASUREMENT_ID || 'G-LFFNJDG7TJ'; // Replace with actual GA4 Measurement ID
    initializeAnalytics(measurementId);
    
    // Initialize performance monitoring
    trackPerformanceMetrics();
    
    // Track initial page view
    trackPageView(page, language, measurementId);
    
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
    };
  }, []);

  // Update SEO when page or language changes
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
    
    console.log(`Language changed from ${previousLanguage} to ${lang}, URL: ${newUrl}`);
  };

  // Handle page navigation with proper URL routing and analytics
  const handlePageChange = (page: string) => {
    if (page === currentPage) return;
    
    const previousPage = currentPage;
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
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'page_navigation', {
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
          if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'browser_navigation', {
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
      'ES': 'es-ES'
    };
    return localeMap[language] || 'en-US';
  };

  // Helper function to get the correct form URL based on language
  const getFormURL = (language: string): string => {
    const formURLs = {
      'EN': 'https://forms.gle/35v8pMERdPqKSt5C6',   // English
      'PT': 'https://forms.gle/hMfqGLVrQeqFCd5F7',   // Portuguese
      'ES': 'https://forms.gle/Mcm3w7TSN71L33hh7'    // Spanish
    };
    return formURLs[language as keyof typeof formURLs] || formURLs['EN'];
  };

  // Enhanced CTA click handler with multilingual tracking and URL navigation
  const handleCTAClick = (ctaType: string, position: string = 'unknown') => {
    // Track analytics first
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'cta_click', {
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

    // Handle app store downloads
    const downloadCTAs = [
      'download_free',
      'app_store_download',
      'google_play_download'
    ];

    if (downloadCTAs.includes(ctaType)) {
      // TODO: Replace with actual app store links when available
      const downloadURLs = {
        'app_store_download': 'https://apps.apple.com/app/tuggi', // Placeholder
        'google_play_download': 'https://play.google.com/store/apps/details?id=com.tuggi.app', // Placeholder
        'download_free': 'https://apps.apple.com/app/tuggi' // Default to App Store
      };
      
      const url = downloadURLs[ctaType as keyof typeof downloadURLs];
      if (url) {
        window.open(url, '_blank');
      } else {
        // Fallback: show coming soon message
        alert('App disponível em breve! Em breve você poderá baixar o Tuggi nas lojas de aplicativos.');
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
      'start_implementation'
    ];

    if (demoCTAs.includes(ctaType)) {
      const formURL = getFormURL(currentLanguage);
      window.open(formURL, '_blank');
    }
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
        return <PrivacyPolicyPage currentLanguage={currentLanguage} />;
      case 'terms':
      case 'terms-of-use':
      case 'termos-de-uso':
      case 'terminos-de-uso':
        return <TermsOfUsePage currentLanguage={currentLanguage} />;
      case 'cookies':
      case 'cookie-policy':
      case 'politica-de-cookies':
        return <CookiePolicyPage currentLanguage={currentLanguage} />;
      case 'home':
      default:
        return (
          <>
            <HeroSection currentLanguage={currentLanguage} onCTAClick={handleCTAClick} />
            <ProductHighlights currentLanguage={currentLanguage} onCTAClick={handleCTAClick} />
            <TrustSection currentLanguage={currentLanguage} />
            <CollaborateSection currentLanguage={currentLanguage} onCTAClick={handleCTAClick} />
            <HowItWorksSection currentLanguage={currentLanguage} onCTAClick={handleCTAClick} />
            <RoadmapSection currentLanguage={currentLanguage} onCTAClick={handleCTAClick} />
            <ExpansionSection currentLanguage={currentLanguage} onCTAClick={handleCTAClick} />
            <PrivacySection currentLanguage={currentLanguage} onCTAClick={handleCTAClick} />
            
            {/* Final CTA Section */}
            <FinalCTASection 
              currentLanguage={currentLanguage}
              onCTAClick={handleCTAClick}
            />
          </>
        );
    }
  };

  // Simple localization function (can be expanded with proper i18n library)
  const getLocalizedText = (key: string, language: string): string => {
    const translations: Record<string, Record<string, string>> = {
      contact_specialists: {
        EN: 'Questions? Speak with our travel-tech specialists',
        PT: 'Dúvidas? Fale com nossos especialistas em tecnologia de viagem',
        ES: '¿Preguntas? Habla con nuestros especialistas en tecnología de viajes'
      },
      request_demo_aria: {
        EN: 'Request a demo of Tuggi Drive',
        PT: 'Solicitar uma demonstração do Tuggi Drive',
        ES: 'Solicitar una demostración de Tuggi Drive'
      },
      learn_more_aria: {
        EN: 'Join the Early Access Program for Tuggi Drive',
        PT: 'Participar do Programa de Acesso Antecipado do Tuggi Drive',
        ES: 'Unirse al Programa de Acceso Temprano de Tuggi Drive'
      },
      email_specialists_aria: {
        EN: 'Email our travel-tech specialists',
        PT: 'Envie email para nossos especialistas em tecnologia de viagem',
        ES: 'Envía email a nuestros especialistas en tecnología de viajes'
      },
      call_specialists_aria: {
        EN: 'Call our travel-tech specialists',
        PT: 'Ligue para nossos especialistas em tecnologia de viagem',
        ES: 'Llama a nuestros especialistas en tecnología de viajes'
      }
    };

    return translations[key]?.[language] || translations[key]?.['EN'] || key;
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
    >
      {renderPage()}
    </Layout>
  );
}

export default App;