/**
 * VideoTutorialsSection Component
 * 
 * Integrated video tutorials section for the home page
 * Shows how Tuggi works through YouTube videos
 */

import React from 'react';
import YouTubePlaylistSection from './YouTubePlaylistSection';

interface VideoTutorialsSectionProps {
  currentLanguage?: string;
  onCTAClick?: (ctaType: string, language: string) => void;
}

const VideoTutorialsSection: React.FC<VideoTutorialsSectionProps> = ({
  currentLanguage = 'PT',
  onCTAClick
}) => {
  // Get playlist ID from environment variables
  const getPlaylistId = () => {
    return import.meta.env.VITE_YOUTUBE_MAIN_PLAYLIST_ID || 'PLrAXtmRdnEQy8Q8Q8Q8Q8Q8Q8Q8Q8Q8Q';
  };

  // Get localized content
  const getLocalizedContent = (language: string) => {
    const content: Record<string, any> = {
      PT: {
        title: 'Veja o Tuggi em Ação',
        description: 'Descubra como nossa plataforma pode transformar a experiência de viagem dos seus passageiros. Assista aos nossos vídeos reais e veja o Tuggi funcionando na prática.',
        customIntro: 'Nossos vídeos mostram casos reais de uso do Tuggi Drive, desde a configuração inicial até a experiência completa do passageiro. Veja como empresas de transporte estão revolucionando suas operações.'
      },
      EN: {
        title: 'See Tuggi in Action',
        description: 'Discover how our platform can transform your passengers\' travel experience. Watch our real videos and see Tuggi working in practice.',
        customIntro: 'Our videos show real use cases of Tuggi Drive, from initial setup to the complete passenger experience. See how transportation companies are revolutionizing their operations.'
      },
      ES: {
        title: 'Ve Tuggi en Acción',
        description: 'Descubre cómo nuestra plataforma puede transformar la experiencia de viaje de tus pasajeros. Mira nuestros videos reales y ve Tuggi funcionando en la práctica.',
        customIntro: 'Nuestros videos muestran casos reales de uso de Tuggi Drive, desde la configuración inicial hasta la experiencia completa del pasajero. Ve cómo las empresas de transporte están revolucionando sus operaciones.'
      }
    };
    return content[language] || content['PT'];
  };

  const content = getLocalizedContent(currentLanguage);

  // Handle video click for analytics
  const handleVideoClick = (video: any) => {
    if (onCTAClick) {
      onCTAClick('video_tutorial_click', currentLanguage);
    }
  };

  // Custom content for the video section
  const customContent = (
    <div className="text-center mb-12">
      <div className="max-w-4xl mx-auto">
        {/* <p className="text-lg text-neutral-600 leading-relaxed mb-8">
          {content.customIntro}
        </p> */}
        
        {/* Video highlights */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="text-center p-6 bg-white rounded-xl border border-neutral-200 shadow-sm">
            <div className="w-12 h-12 bg-tuggi-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🚗</span>
            </div>
            <h3 className="font-semibold text-neutral-900 mb-2">
              {currentLanguage === 'PT' ? 'Configuração Simples' : 
               currentLanguage === 'EN' ? 'Simple Setup' : 'Configuración Simple'}
            </h3>
            <p className="text-sm text-neutral-600">
              {currentLanguage === 'PT' ? 'Veja como configurar o Tuggi em minutos' : 
               currentLanguage === 'EN' ? 'See how to set up Tuggi in minutes' : 'Ve cómo configurar Tuggi en minutos'}
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl border border-neutral-200 shadow-sm">
            <div className="w-12 h-12 bg-tuggi-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">👥</span>
            </div>
            <h3 className="font-semibold text-neutral-900 mb-2">
              {currentLanguage === 'PT' ? 'Experiência do Passageiro' : 
               currentLanguage === 'EN' ? 'Passenger Experience' : 'Experiencia del Pasajero'}
            </h3>
            <p className="text-sm text-neutral-600">
              {currentLanguage === 'PT' ? 'Acompanhe uma viagem completa com narração' : 
               currentLanguage === 'EN' ? 'Follow a complete journey with narration' : 'Sigue un viaje completo con narración'}
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl border border-neutral-200 shadow-sm">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="font-semibold text-neutral-900 mb-2">
              {currentLanguage === 'PT' ? 'Resultados Reais' : 
               currentLanguage === 'EN' ? 'Real Results' : 'Resultados Reales'}
            </h3>
            <p className="text-sm text-neutral-600">
              {currentLanguage === 'PT' ? 'Veja o impacto nos negócios dos nossos parceiros' : 
               currentLanguage === 'EN' ? 'See the business impact on our partners' : 'Ve el impacto en los negocios de nuestros socios'}
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );

  return (
    <YouTubePlaylistSection
      playlistId={getPlaylistId()}
      title={content.title}
      description={content.description}
      maxResults={6}
      showDescription={true}
      showViewAll={true}
      layout="grid"
      variant="default"
      currentLanguage={currentLanguage}
      onVideoClick={handleVideoClick}
      customContent={customContent}
      className="bg-gradient-to-br from-neutral-50 to-tuggi-primary/5"
    />
  );
};

export default VideoTutorialsSection;