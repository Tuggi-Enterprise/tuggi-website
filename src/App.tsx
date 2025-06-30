import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import HeroSection from './components/HeroSection';
import ProductHighlights from './components/ProductHighlights';
import TrustSection from './components/TrustSection';
import RoadmapSection from './components/RoadmapSection';
import PurposePage from './components/PurposePage';
import StoryTeamPage from './components/StoryTeamPage';
import ProductsPage from './components/ProductsPage';
import BusinessBenefitsPage from './components/BusinessBenefitsPage';
import ContactPage from './components/ContactPage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import TermsOfUsePage from './components/TermsOfUsePage';
import CookiePolicyPage from './components/CookiePolicyPage';
import { useSEO } from './hooks/useSEO';
import { initializeAnalytics, trackPerformanceMetrics, trackPageView, trackLanguageChange } from './utils/seo';
import { parseUrlPath, generateLocalizedUrl, getDefaultLanguage, isValidLanguage } from './utils/routing';

function App() {
  const [currentLanguage, setCurrentLanguage] = useState('EN');
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

  // Enhanced CTA click handler with multilingual tracking
  const handleCTAClick = (ctaType: string, position: string = 'unknown') => {
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
      case 'story':
        return <StoryTeamPage currentLanguage={currentLanguage} onCTAClick={handleCTAClick} />;
      case 'products':
        return <ProductsPage currentLanguage={currentLanguage} onCTAClick={handleCTAClick} />;
      case 'benefits':
        return <BusinessBenefitsPage currentLanguage={currentLanguage} onCTAClick={handleCTAClick} />;
      case 'contact':
        return <ContactPage currentLanguage={currentLanguage} onCTAClick={handleCTAClick} />;
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
            <RoadmapSection currentLanguage={currentLanguage} onCTAClick={handleCTAClick} />
            
            {/* Final CTA Section with Enhanced Tracking */}
            <section className="py-20 bg-gradient-to-br from-tuggi-primary to-tuggi-primary-dark">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                  {getLocalizedText('final_cta_title', currentLanguage)}
                </h2>
                <p className="text-xl text-white max-w-3xl mx-auto mb-8">
                  {getLocalizedText('final_cta_description', currentLanguage)}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    className="bg-white hover:bg-neutral-100 text-tuggi-primary px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-tuggi-primary"
                    onClick={() => handleCTAClick('request_demo_home_final', 'final_section')}
                    aria-label={getLocalizedText('request_demo_aria', currentLanguage)}
                  >
                    {getLocalizedText('request_demo', currentLanguage)}
                  </button>
                  <button 
                    className="border-2 border-white text-white hover:bg-white hover:text-tuggi-primary px-8 py-4 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-tuggi-primary"
                    onClick={() => handleCTAClick('learn_more_home_final', 'final_section')}
                    aria-label={getLocalizedText('learn_more_aria', currentLanguage)}
                  >
                    {getLocalizedText('learn_more', currentLanguage)}
                  </button>
                </div>
                
                {/* Contact Info with Localized Content */}
                <div className="mt-12 pt-8 border-t border-tuggi-primary-light/30">
                  <p className="text-white mb-4">
                    {getLocalizedText('contact_specialists', currentLanguage)}
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-white">
                    <a 
                      href="mailto:hello@tuggi.app" 
                      className="hover:text-tuggi-primary-light transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-tuggi-primary rounded-lg px-2 py-1"
                      onClick={() => {
                        if (typeof window !== 'undefined' && (window as any).gtag) {
                          (window as any).gtag('event', 'contact_click', {
                            event_category: 'Contact',
                            event_label: 'email_home_final',
                            contact_method: 'email',
                            language: currentLanguage,
                            locale: getLocaleCode(currentLanguage)
                          });
                        }
                      }}
                      aria-label={getLocalizedText('email_specialists_aria', currentLanguage)}
                    >
                      📧 hello@tuggi.app
                    </a>
                    <a 
                      href="tel:+55 (11) 9.9471-8809" 
                      className="hover:text-tuggi-primary-light transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-tuggi-primary rounded-lg px-2 py-1"
                      onClick={() => {
                        if (typeof window !== 'undefined' && (window as any).gtag) {
                          (window as any).gtag('event', 'contact_click', {
                            event_category: 'Contact',
                            event_label: 'phone_home_final',
                            contact_method: 'phone',
                            language: currentLanguage,
                            locale: getLocaleCode(currentLanguage)
                          });
                        }
                      }}
                      aria-label={getLocalizedText('call_specialists_aria', currentLanguage)}
                    >
                      📞 +55 (11) 9.9471-8809
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </>
        );
    }
  };

  // Simple localization function (can be expanded with proper i18n library)
  const getLocalizedText = (key: string, language: string): string => {
    const translations: Record<string, Record<string, string>> = {
      final_cta_title: {
        EN: 'Ready to Help Shape the Future of Passenger Experiences?',
        PT: 'Pronto para Ajudar a Moldar o Futuro das Experiências de Passageiros?',
        ES: '¿Listo para Ayudar a Dar Forma al Futuro de las Experiencias de Pasajeros?'
      },
      final_cta_description: {
        EN: 'Join the visionary companies shaping the Tuggi Drive experience with us.',
        PT: 'Junte-se às empresas visionárias moldando a experiência Tuggi Drive conosco.',
        ES: 'Únete a las empresas visionarias que dan forma a la experiencia Tuggi Drive con nosotros.'
      },
      request_demo: {
        EN: 'Request Demo',
        PT: 'Solicitar Demo',
        ES: 'Solicitar Demo'
      },
      learn_more: {
        EN: 'Join the Early Access Program',
        PT: 'Participar do Programa de Acesso Antecipado',
        ES: 'Unirse al Programa de Acceso Temprano'
      },
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