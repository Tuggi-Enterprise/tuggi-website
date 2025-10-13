import React from 'react';
import { MapPin, CheckCircle, Globe, Users, TrendingUp } from 'lucide-react';
import { layout, getButtonClasses } from '../utils/designSystem';

interface CitiesV2Props {
  currentLanguage?: string;
  onCTAClick?: (ctaType: string, position?: string) => void;
}

const CitiesV2: React.FC<CitiesV2Props> = ({ 
  currentLanguage = 'PT',
  onCTAClick 
}) => {
  // Localized content
  const getLocalizedContent = (language: string) => {
    const content: Record<string, any> = {
      PT: {
        title: 'Sua cidade ainda não tem a Tuggi?',
        subtitle: 'Sua sugestão influencia nossos próximos destinos.',
        availableCities: [
          'São Paulo capital',
          'Interior de SP',
          'Rio de Janeiro',
          'Belo Horizonte',
          'Salvador',
          'Brasília'
        ],
        comingSoon: 'Sua cidade',
        ctaText: '🗳️ Quero a Tuggi na minha cidade',
        stats: {
          cities: '20+',
          citiesLabel: 'Cidades ativas',
          users: '5K+',
          usersLabel: 'Usuários',
          growth: '150%',
          growthLabel: 'Crescimento mensal'
        }
      },
      EN: {
        title: 'Your city doesn\'t have Tuggi yet?',
        subtitle: 'Your suggestion influences our next destinations.',
        availableCities: [
          'São Paulo capital',
          'São Paulo interior',
          'Rio de Janeiro',
          'Belo Horizonte',
          'Salvador',
          'Brasília'
        ],
        comingSoon: 'Your city',
        ctaText: '🗳️ I want Tuggi in my city',
        stats: {
          cities: '20+',
          citiesLabel: 'Active cities',
          users: '5K+',
          usersLabel: 'Users',
          growth: '150%',
          growthLabel: 'Monthly growth'
        }
      },
      ES: {
        title: '¿Tu ciudad aún no tiene Tuggi?',
        subtitle: 'Tu sugerencia influye en nuestros próximos destinos.',
        availableCities: [
          'São Paulo capital',
          'Interior de SP',
          'Río de Janeiro',
          'Belo Horizonte',
          'Salvador',
          'Brasília'
        ],
        comingSoon: 'Tu ciudad',
        ctaText: '🗳️ Quiero Tuggi en mi ciudad',
        stats: {
          cities: '20+',
          citiesLabel: 'Ciudades activas',
          users: '5K+',
          usersLabel: 'Usuarios',
          growth: '150%',
          growthLabel: 'Crecimiento mensual'
        }
      }
    };
    return content[language] || content['PT'];
  };

  const content = getLocalizedContent(currentLanguage);

  const handleVoteClick = () => {
    onCTAClick?.('request_city', 'cities_section');
  };

  return (
    <section className={`${layout.section.base} bg-white`}>
      <div className={layout.container.base}>
        <div className={`${layout.grid['2']} gap-8 lg:gap-12 items-center`}>
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              {content.title}
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 mb-6">
              {content.subtitle}
            </p>
            
            {/* Available Cities */}
            <div className="space-y-4 mb-6">
              {content.availableCities.map((city: string, index: number) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-neutral-700">{city}</span>
                </div>
              ))}
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-tuggi-primary flex-shrink-0" />
                <span className="text-neutral-700">{content.comingSoon}</span>
              </div>
            </div>

            {/* CTA Button */}
            <button 
              onClick={handleVoteClick}
              className={`${getButtonClasses('primary', 'lg')} inline-flex items-center gap-2`}
            >
              <span>{content.ctaText}</span>
            </button>
          </div>

          {/* Map Visualization */}
          <div className="relative">
            <div className="bg-gradient-to-br from-tuggi-primary/10 to-tuggi-secondary/10 rounded-2xl p-8">
              {/* Simple Map Representation */}
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">🗺️</div>
                <div className="text-2xl font-bold text-tuggi-primary mb-2">
                  {content.stats.cities}
                </div>
                <div className="text-neutral-600">{content.stats.citiesLabel}</div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-xl font-bold text-tuggi-primary mb-1">
                    {content.stats.cities}
                  </div>
                  <div className="text-xs text-neutral-600">
                    {content.stats.citiesLabel}
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-xl font-bold text-tuggi-secondary mb-1">
                    {content.stats.users}
                  </div>
                  <div className="text-xs text-neutral-600">
                    {content.stats.usersLabel}
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-xl font-bold text-green-500 mb-1">
                    {content.stats.growth}
                  </div>
                  <div className="text-xs text-neutral-600">
                    {content.stats.growthLabel}
                  </div>
                </div>
              </div>

              {/* Map Dots Visualization */}
              <div className="mt-6 relative h-32 bg-gradient-to-br from-tuggi-primary/5 to-tuggi-secondary/5 rounded-lg overflow-hidden">
                {/* Simulated map dots */}
                <div className="absolute top-4 left-4 w-3 h-3 bg-tuggi-primary rounded-full animate-pulse"></div>
                <div className="absolute top-8 right-6 w-2 h-2 bg-tuggi-secondary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-6 left-8 w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-4 right-4 w-2 h-2 bg-tuggi-primary rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-tuggi-secondary rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
                
                {/* Connection lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <line x1="20" y1="20" x2="50" y2="50" stroke="#00A8E8" strokeWidth="0.5" opacity="0.3" />
                  <line x1="80" y1="30" x2="50" y2="50" stroke="#FF6F00" strokeWidth="0.5" opacity="0.3" />
                  <line x1="30" y1="80" x2="50" y2="50" stroke="#10B981" strokeWidth="0.5" opacity="0.3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CitiesV2;
