import React from 'react';
import { MapPin, Globe, ArrowRight } from 'lucide-react';

interface ExpansionSectionProps {
  currentLanguage?: string;
  onCTAClick?: (ctaType: string, language: string) => void;
}

const ExpansionSection: React.FC<ExpansionSectionProps> = ({ 
  currentLanguage = 'PT',
  onCTAClick 
}) => {
  // Localized content
  const getLocalizedContent = (language: string) => {
    const content: Record<string, any> = {
      PT: {
        title: 'Sua cidade ainda não tem a Tuggi?',
        subtitle: 'Estamos começando por São Paulo e algumas cidades do interior — mas queremos saber onde há interesse.',
        description: 'Conte pra gente qual cidade, estado ou país você gostaria de ver mapeado.\nSua indicação nos ajuda a decidir para onde levar a Tuggi nos próximos lançamentos.',
        cta: 'Quero a Tuggi na minha cidade',
        features: [
          {
            icon: 'map',
            title: 'Cobertura atual',
            description: 'São Paulo capital e cidades do interior paulista já têm conteúdo disponível'
          },
          {
            icon: 'globe',
            title: 'Expansão planejada',
            description: 'Sua sugestão influencia diretamente nossos próximos destinos'
          }
        ]
      },
      EN: {
        title: 'Your city doesn\'t have Tuggi yet?',
        subtitle: 'We\'re starting with São Paulo and some interior cities — but we want to know where there\'s interest.',
        description: 'Tell us which city, state or country you\'d like to see mapped.\nYour suggestion helps us decide where to take Tuggi in the next launches.',
        cta: 'I want Tuggi in my city',
        features: [
          {
            icon: 'map',
            title: 'Current coverage',
            description: 'São Paulo capital and cities in the interior of São Paulo already have content available'
          },
          {
            icon: 'globe',
            title: 'Planned expansion',
            description: 'Your suggestion directly influences our next destinations'
          }
        ]
      },
      ES: {
        title: '¿Tu ciudad aún no tiene Tuggi?',
        subtitle: 'Estamos empezando con São Paulo y algunas ciudades del interior — pero queremos saber dónde hay interés.',
        description: 'Cuéntanos qué ciudad, estado o país te gustaría ver mapeado.\nTu sugerencia nos ayuda a decidir dónde llevar Tuggi en los próximos lanzamientos.',
        cta: 'Quiero Tuggi en mi ciudad',
        features: [
          {
            icon: 'map',
            title: 'Cobertura actual',
            description: 'São Paulo capital y ciudades del interior paulista ya tienen contenido disponible'
          },
          {
            icon: 'globe',
            title: 'Expansión planificada',
            description: 'Tu sugerencia influye directamente en nuestros próximos destinos'
          }
        ]
      }
    };
    return content[language] || content['PT'];
  };

  const content = getLocalizedContent(currentLanguage);

  const handleCTAClick = (ctaType: string) => {
    onCTAClick?.(ctaType, currentLanguage);
  };

  return (
    <section className="py-12 lg:py-16 xl:py-20 bg-gradient-to-br from-tuggi-primary/10 to-tuggi-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-3 lg:mb-4">
              {content.title}
            </h2>
            <p className="text-base sm:text-lg text-neutral-700 font-medium mb-3 lg:mb-4">
              {content.subtitle}
            </p>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-4 lg:mb-6 whitespace-pre-line">
              {content.description}
            </p>

            {/* Features */}
            <div className="space-y-3 mb-6">
              {content.features.map((feature: any, index: number) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-tuggi-primary/10 flex items-center justify-center flex-shrink-0">
                    {feature.icon === 'map' ? (
                      <MapPin className="w-5 h-5 text-tuggi-primary" />
                    ) : (
                      <Globe className="w-5 h-5 text-tuggi-primary" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-neutral-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-neutral-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button 
              onClick={() => handleCTAClick('request_city')}
              className="bg-tuggi-primary hover:bg-tuggi-primary-dark text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center space-x-2 group"
            >
              <span>{content.cta}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 border border-white/20 shadow-xl">
              {/* Map Visualization */}
              <div className="aspect-square bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-2xl p-8 relative overflow-hidden">
                {/* São Paulo - Current */}
                <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-4 h-4 bg-tuggi-primary rounded-full animate-pulse"></div>
                  <div className="text-xs font-semibold text-tuggi-primary mt-1 whitespace-nowrap">São Paulo</div>
                </div>

                {/* Future Cities - Placeholder dots */}
                <div className="absolute top-1/4 left-1/3">
                  <div className="w-3 h-3 bg-neutral-400 rounded-full opacity-40"></div>
                  <div className="text-xs text-neutral-500 mt-1">?</div>
                </div>
                <div className="absolute bottom-1/3 right-1/4">
                  <div className="w-3 h-3 bg-neutral-400 rounded-full opacity-40"></div>
                  <div className="text-xs text-neutral-500 mt-1">?</div>
                </div>
                <div className="absolute top-1/2 right-1/3">
                  <div className="w-3 h-3 bg-neutral-400 rounded-full opacity-40"></div>
                  <div className="text-xs text-neutral-500 mt-1">?</div>
                </div>

                {/* Map Grid Background */}
                <div className="absolute inset-0 opacity-10">
                  <div className="h-full w-full" style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='grid' width='20' height='20' patternUnits='userSpaceOnUse'%3e%3cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='%23000' stroke-width='1'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100' height='100' fill='url(%23grid)' /%3e%3c/svg%3e")`,
                    backgroundSize: '20px 20px'
                  }}></div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-tuggi-primary">1</div>
                  <div className="text-sm text-neutral-600">Estado ativo</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-neutral-400">+∞</div>
                  <div className="text-sm text-neutral-600">Possibilidades</div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-tuggi-secondary/20 rounded-2xl rotate-12"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-tuggi-primary/20 rounded-2xl -rotate-12"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpansionSection; 