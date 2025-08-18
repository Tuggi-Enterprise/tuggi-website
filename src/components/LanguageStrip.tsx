import React, { useEffect, useRef } from 'react';
import { Globe } from 'lucide-react';
import { layout } from '../utils/designSystem';
import { getFlagAccessibilityProps } from '../utils/routing';

interface LanguageStripProps {
  currentLanguage?: string;
}

const LanguageStrip: React.FC<LanguageStripProps> = ({ 
  currentLanguage = 'PT' 
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const hasTrackedView = useRef(false);

  // Track language badge view when it appears in viewport
  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTrackedView.current) {
            hasTrackedView.current = true;
            
            // GA4 tracking for language badge view
            if (typeof window !== 'undefined' && window.gtag) {
              window.gtag('event', 'language_badge_view', {
                event_category: 'Language',
                event_label: 'language_strip_viewport',
                language: currentLanguage,
                viewport_percentage: Math.round(entry.intersectionRatio * 100)
              });
            }
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% visible
        rootMargin: '0px'
      }
    );

    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, [currentLanguage]);

  // Handle language badge click
  const handleLanguageBadgeClick = (languageCode: string, languageLabel: string) => {
    // GA4 tracking for language badge click
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'language_badge_click', {
        event_category: 'Language',
        event_label: 'language_strip_interaction',
        language: currentLanguage,
        clicked_language: languageCode,
        clicked_language_label: languageLabel
      });
    }
  };
  // Localized content
  const getLocalizedContent = (language: string) => {
    const content: Record<string, any> = {
      PT: {
        title: 'Idiomas disponíveis',
        pt_br: 'Português (Brasil)',
        es_es: 'Español (España)',
        en_us: 'English (US)',
        soon: 'Mais idiomas em breve.',
        available: 'Disponível'
      },
      EN: {
        title: 'Available languages',
        pt_br: 'Portuguese (Brazil)',
        es_es: 'Spanish (Spain)',
        en_us: 'English (US)',
        soon: 'More languages coming soon.',
        available: 'Available'
      },
      ES: {
        title: 'Idiomas disponibles',
        pt_br: 'Portugués (Brasil)',
        es_es: 'Español (España)',
        en_us: 'Inglés (EE.UU.)',
        soon: 'Más idiomas próximamente.',
        available: 'Disponible'
      }
    };
    return content[language] || content['PT'];
  };

  const content = getLocalizedContent(currentLanguage);

  const languages = [
    {
      code: 'pt-br',
      flag: '🇧🇷',
      label: content.pt_br,
      available: true
    },
    {
      code: 'es-es', 
      flag: '🇪🇸',
      label: content.es_es,
      available: true
    },
    {
      code: 'en-us',
      flag: '🇺🇸', 
      label: content.en_us,
      available: true
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className={`${layout.section.base} bg-gradient-to-br from-tuggi-primary/5 via-white to-tuggi-secondary/5`}
    >
      <div className={layout.container.base}>
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-tuggi-primary/10 text-tuggi-primary px-4 py-2 rounded-full mb-6">
            <Globe className="w-5 h-5" />
            <span className="font-semibold text-sm">{content.title}</span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            {languages.map((language) => (
              <div 
                key={language.code}
                className="flex items-center justify-center gap-3 bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() => handleLanguageBadgeClick(language.code, language.label)}
              >
                <span 
                  className="text-3xl" 
                  {...getFlagAccessibilityProps(
                    language.code === 'pt-br' ? 'PT' : 
                    language.code === 'es-es' ? 'ES' : 'EN'
                  )}
                >
                  {language.flag}
                </span>
                <div className="text-left">
                  <p className="font-semibold text-neutral-900 text-lg">
                    {language.label}
                  </p>
                  {language.available && (
                    <div className="flex items-center gap-1 mt-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-green-600 text-sm font-medium">{content.available}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-neutral-600 font-medium">
            {content.soon}
          </p>
        </div>
      </div>
    </section>
  );
};

export default LanguageStrip;