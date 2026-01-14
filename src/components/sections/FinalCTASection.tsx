import React from 'react';
import { layout, gradients } from '../../utils/designSystem';

interface ContentLanguage {
  title: string;
  description: string;
  appStore: string;
  googlePlay: string;
  comingSoon: string;
}

interface FinalCTASectionProps {
  currentLanguage?: string;
  onCTAClick?: (ctaType: string, language: string) => void;
}

const FinalCTASection: React.FC<FinalCTASectionProps> = ({ 
  currentLanguage = 'PT',
  onCTAClick 
}) => {
  // Localized content
  const getLocalizedContent = (language: string): ContentLanguage => {
    const content: Record<string, ContentLanguage> = {
      PT: {
        title: 'Baixe o Tuggi nas lojas oficiais.',
        description: 'Escolha sua plataforma.',
        appStore: 'App Store',
        googlePlay: 'Google Play',
        comingSoon: ''
      },
      EN: {
        title: 'Download Tuggi from official stores.',
        description: 'Choose your platform.',
        appStore: 'App Store',
        googlePlay: 'Google Play',
        comingSoon: ''
      },
      ES: {
        title: 'Descarga Tuggi en las tiendas oficiales.',
        description: 'Elige tu plataforma.',
        appStore: 'App Store',
        googlePlay: 'Google Play',
        comingSoon: ''
      }
    };
    return content[language] || content['PT'];
  };

  const content = getLocalizedContent(currentLanguage);

  const handleCTAClick = (ctaType: string) => {
    onCTAClick?.(ctaType, currentLanguage);
  };

  const storeUrls = {
    apple: 'https://apps.apple.com/br/app/tuggi-explore-ao-dirigir/id6744379818',
    google: 'https://play.google.com/store/apps/details?id=com.tuggidrive.app'
  };

  return (
    <section className={`${layout.section.compact}`} style={{ background: gradients.ocean }}>
      <div className={`${layout.container.base} text-center`}>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 lg:mb-4">
          {content.title}
        </h2>
        <p className="text-base sm:text-lg text-white max-w-3xl mx-auto mb-6 lg:mb-8">
          {content.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center">
          <a 
            href={storeUrls.apple}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleCTAClick('app_store_download')}
            className="bg-white text-tuggi-primary px-8 lg:px-10 py-4 rounded-xl font-bold transition-all duration-300 inline-flex items-center gap-3 hover:bg-gray-50 hover:scale-105 transform shadow-xl"
          >
            <span className="text-xl">📱</span>
            <span>{content.appStore}</span>
          </a>
          <a 
            href={storeUrls.google}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleCTAClick('google_play_download')}
            className="bg-white text-tuggi-primary px-8 lg:px-10 py-4 rounded-xl font-bold transition-all duration-300 inline-flex items-center gap-3 hover:bg-gray-50 hover:scale-105 transform shadow-xl"
          >
            <span className="text-xl">🤖</span>
            <span>{content.googlePlay}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;