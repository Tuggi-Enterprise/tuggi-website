import React, { useState } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { layout } from '../utils/designSystem';

interface VideoV2Props {
  currentLanguage?: string;
  onCTAClick?: (ctaType: string, position?: string) => void;
}

const VideoV2: React.FC<VideoV2Props> = ({ 
  currentLanguage = 'PT',
  onCTAClick 
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  // Localized content
  const getLocalizedContent = (language: string) => {
    const content: Record<string, any> = {
      PT: {
        title: 'Veja em ação',
        subtitle: 'Cena real no carro com narração automática.',
        description: 'O Tuggi fala, você descobre.',
        videoTitle: '45s: Tuggi em uso real',
        videoDescription: 'Demonstração real do Tuggi em uso durante um trajeto urbano',
        youtubeId: 'XvQfdfWDpVQ' // Tuggi demo video
      },
      EN: {
        title: 'See it in action',
        subtitle: 'Real scene in the car with automatic narration.',
        description: 'Tuggi speaks, you discover.',
        videoTitle: '45s: Tuggi in real use',
        videoDescription: 'Real demonstration of Tuggi in use during an urban journey',
        youtubeId: 'XvQfdfWDpVQ'
      },
      ES: {
        title: 'Vélo en acción',
        subtitle: 'Escena real en el auto con narración automática.',
        description: 'Tuggi habla, tú descubres.',
        videoTitle: '45s: Tuggi en uso real',
        videoDescription: 'Demostración real de Tuggi en uso durante un trayecto urbano',
        youtubeId: 'XvQfdfWDpVQ'
      }
    };
    return content[language] || content['PT'];
  };

  const content = getLocalizedContent(currentLanguage);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    onCTAClick?.('video_play', 'demo_section');
  };

  const handleMuteToggle = () => {
    setIsMuted(!isMuted);
  };

  return (
    <section className={`${layout.section.base}`} style={{ background: 'linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)' }}>
      <div className={layout.container.base}>
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
            {content.title}
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto mb-6">
            {content.subtitle}
          </p>
          <p className="text-lg font-medium text-tuggi-primary italic">
            {content.description}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-2xl p-4 shadow-xl border border-neutral-200">
            {/* Video Container */}
            <div className="relative aspect-video bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-xl overflow-hidden">
              {/* YouTube Video Embed */}
              <iframe
                src={`https://www.youtube.com/embed/${content.youtubeId}?rel=0&modestbranding=1&showinfo=0`}
                title={content.videoTitle}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              ></iframe>
              
              {/* Custom Play Overlay (for when video is not loaded) */}
              {!isPlaying && (
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <button
                    onClick={handlePlayPause}
                    className="w-20 h-20 bg-tuggi-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg"
                  >
                    <Play className="w-8 h-8 text-white ml-1" />
                  </button>
                </div>
              )}

              {/* Video Controls Overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePlayPause}
                    className="w-10 h-10 bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/80 transition-colors duration-200"
                  >
                    {isPlaying ? (
                      <Pause className="w-4 h-4 text-white" />
                    ) : (
                      <Play className="w-4 h-4 text-white ml-0.5" />
                    )}
                  </button>
                  
                  <button
                    onClick={handleMuteToggle}
                    className="w-10 h-10 bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/80 transition-colors duration-200"
                  >
                    {isMuted ? (
                      <VolumeX className="w-4 h-4 text-white" />
                    ) : (
                      <Volume2 className="w-4 h-4 text-white" />
                    )}
                  </button>
                </div>

                <div className="bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                  {content.videoTitle}
                </div>
              </div>
            </div>

            {/* Video Description */}
            <div className="mt-4 text-center">
              <p className="text-sm text-neutral-600">
                {content.videoDescription}
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <button
            onClick={() => onCTAClick?.('video_demo_cta', 'video_section')}
            className="inline-flex items-center gap-2 bg-tuggi-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-tuggi-primary-dark transition-colors duration-200"
          >
            <Play className="w-4 h-4" />
            Experimente agora
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoV2;
