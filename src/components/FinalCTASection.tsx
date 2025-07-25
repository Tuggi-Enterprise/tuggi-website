import React from 'react';
import { layout, gradients, getButtonClasses } from '../utils/designSystem';

interface FinalCTASectionProps {
  currentLanguage?: string;
  onCTAClick?: (ctaType: string, language: string) => void;
}

const FinalCTASection: React.FC<FinalCTASectionProps> = ({ 
  currentLanguage = 'PT',
  onCTAClick 
}) => {
  // Localized content
  const getLocalizedContent = (language: string) => {
    const content: Record<string, any> = {
      PT: {
        title: 'Comece sua jornada cultural agora mesmo.',
        description: 'Baixe o app gratuitamente, explore o mundo ao seu redor e nos ajude a construir a Tuggi.',
        appStore: 'App Store',
        googlePlay: 'Google Play'
      },
      EN: {
        title: 'Start your cultural journey right now.',
        description: 'Download the app for free, explore the world around you and help us build Tuggi.',
        appStore: 'App Store',
        googlePlay: 'Google Play'
      },
      ES: {
        title: 'Comienza tu viaje cultural ahora mismo.',
        description: 'Descarga la app gratis, explora el mundo a tu alrededor y ayúdanos a construir Tuggi.',
        appStore: 'App Store',
        googlePlay: 'Google Play'
      }
    };
    return content[language] || content['PT'];
  };

  const content = getLocalizedContent(currentLanguage);

  const handleCTAClick = (ctaType: string) => {
    onCTAClick?.(ctaType, currentLanguage);
  };

  return (
    <section className={`${layout.section.compact}`} style={{ background: gradients.ocean }}>
      <div className={`${layout.container.base} text-center`}>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 lg:mb-4">
          {content.title}
        </h2>
        <p className="text-base sm:text-lg text-white max-w-3xl mx-auto mb-4 lg:mb-6">
          {content.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center">
          <button 
            className="bg-white hover:bg-neutral-100 text-tuggi-primary px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-200 hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-tuggi-primary inline-flex items-center gap-2 text-sm sm:text-base"
            onClick={() => handleCTAClick('app_store_download')}
          >
            <span>📱</span>
            <span>{content.appStore}</span>
          </button>
          <button 
            className="bg-white hover:bg-neutral-100 text-tuggi-primary px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-200 hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-tuggi-primary inline-flex items-center gap-2 text-sm sm:text-base"
            onClick={() => handleCTAClick('google_play_download')}
          >
            <span>🤖</span>
            <span>{content.googlePlay}</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection; 