import React from 'react';
import { Navigation, Map, ArrowRight, AlertTriangle } from 'lucide-react';
import { getButtonClasses, layout } from '../utils/designSystem';

interface ExploreWaysProps {
  currentLanguage?: string;
  onCTAClick?: (ctaType: string, language: string) => void;
}

const ExploreWays: React.FC<ExploreWaysProps> = ({ 
  currentLanguage = 'PT',
  onCTAClick 
}) => {
  // Localized content
  const getLocalizedContent = (language: string) => {
    const content: Record<string, any> = {
      PT: {
        title: 'Duas formas de explorar',
        on_route_title: 'No caminho',
        on_route_text: 'Ative a localização e siga seu trajeto. As narrações tocam automaticamente quando você se aproxima de pontos relevantes.',
        on_map_title: 'No mapa',
        on_map_text: 'Prefere escolher? Abra o mapa no app, veja os pontos, leia as descrições e escute os áudios quando quiser — agora em PT-BR, ES-ES e EN-US.',
        cta_map: 'Conheça o Mapa no app',
        preview_title: 'Como você escolhe o idioma no app',
        preview_alt: 'Seleção de idioma no app (Português, Español, English)',
        safety_note: 'Para sua segurança, evite interações com o app enquanto estiver dirigindo.'
      },
      EN: {
        title: 'Two ways to explore',
        on_route_title: 'On the route',
        on_route_text: 'Enable location and follow your route. Narrations play automatically when you approach relevant points.',
        on_map_title: 'On the map',
        on_map_text: 'Prefer to choose? Open the map in the app, see the points, read descriptions and listen to audio when you want — now in PT-BR, ES-ES and EN-US.',
        cta_map: 'Discover the Map in the app',
        preview_title: 'How you choose the language in the app',
        preview_alt: 'Language selection in the app (Português, Español, English)',
        safety_note: 'For your safety, avoid interacting with the app while driving.'
      },
      ES: {
        title: 'Dos formas de explorar',
        on_route_title: 'En el camino',
        on_route_text: 'Activa la ubicación y sigue tu ruta. Las narraciones suenan automáticamente cuando te acercas a puntos relevantes.',
        on_map_title: 'En el mapa',
        on_map_text: '¿Prefieres elegir? Abre el mapa en la app, ve los puntos, lee las descripciones y escucha los audios cuando quieras — ahora en PT-BR, ES-ES y EN-US.',
        cta_map: 'Conoce el Mapa en la app',
        preview_title: 'Cómo eliges el idioma en la app',
        preview_alt: 'Selección de idioma en la app (Português, Español, English)',
        safety_note: 'Por tu seguridad, evita interacciones con la app mientras conduces.'
      }
    };
    return content[language] || content['PT'];
  };

  const content = getLocalizedContent(currentLanguage);

  const handleCTAClick = (ctaType: string) => {
    onCTAClick?.(ctaType, currentLanguage);
    
    // GA4 tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'cta_explore_map_click', {
        event_category: 'CTA',
        event_label: 'explore_map_section',
        language: currentLanguage
      });
    }
  };

  return (
    <section className={`${layout.section.base} bg-white`}>
      <div className={layout.container.base}>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
            {content.title}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* No caminho */}
          <div className="relative">
            <div className="bg-gradient-to-br from-tuggi-primary/5 to-tuggi-primary/10 rounded-3xl p-8 lg:p-10 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-tuggi-primary/20 rounded-2xl flex items-center justify-center">
                  <Navigation className="w-8 h-8 text-tuggi-primary" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900">
                  {content.on_route_title}
                </h3>
              </div>
              
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                {content.on_route_text}
              </p>
              
              {/* Safety note */}
              <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4">
                <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="text-amber-800 text-sm font-medium">
                  {content.safety_note}
                </p>
              </div>
            </div>
          </div>
          
          {/* No mapa */}
          <div className="relative">
            <div className="bg-gradient-to-br from-tuggi-secondary/5 to-tuggi-secondary/10 rounded-3xl p-8 lg:p-10 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-tuggi-secondary/20 rounded-2xl flex items-center justify-center">
                  <Map className="w-8 h-8 text-tuggi-secondary" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900">
                  {content.on_map_title}
                </h3>
              </div>
              
              <p className="text-lg text-neutral-700 leading-relaxed mb-8">
                {content.on_map_text}
              </p>
              
              <button 
                onClick={() => handleCTAClick('cta_explore_map_click')}
                className={`${getButtonClasses('primary', 'lg')} w-full group`}
              >
                <span>{content.cta_map}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreWays;