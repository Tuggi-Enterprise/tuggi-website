import React from 'react';
import { Car, MapPin, Star, Globe, DollarSign, ThumbsUp, Navigation, CheckCircle, Clock, Shield, Wifi, Headphones } from 'lucide-react';
import { layout } from '../utils/designSystem';

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

interface BenefitsV2Props {
  currentLanguage?: string;
}

const BenefitsV2: React.FC<BenefitsV2Props> = ({ 
  currentLanguage = 'PT'
}) => {
  // Localized content
  const getLocalizedContent = (language: string) => {
    const content: Record<string, any> = {
      PT: {
        title: 'Por que escolher a Tuggi?',
        subtitle: 'Transforme cada trajeto em uma jornada de descoberta.',
        drivers: {
          title: 'Para Motoristas Profissionais',
          subtitle: 'Aumente o engajamento, as avaliações e as gorjetas\n— enquanto o Tuggi faz o resto.',
          benefits: [
            {
              icon: 'car',
              title: 'Conteúdo adaptado\nao ritmo do trânsito.',
              description: 'Narrações disparam sozinhas durante o trajeto,\ncom interface 100% hands-free e sem distrações.'
            },
            {
              icon: 'thumbs-up',
              title: 'Melhore suas avaliações\ne o engajamento dos passageiros.',
              description: 'Motoristas que utilizam o Tuggi oferecem uma\nexperiência diferenciada e melhores notas.'
            },
            {
              icon: 'dollar-sign',
              title: 'Mais gorjetas\ne fidelização',
              description: 'Cada corrida se transforma em uma experiência\ncultural. Passageiros lembram e recompensam.'
            },
            {
              icon: 'navigation',
              title: 'Funciona junto com\nWaze e Google Maps.',
              description: 'O Tuggi funciona em segundo plano junto ao\nWaze, Google Maps e outros apps sem interferência.'
            }
          ]
        },
        tourists: {
          title: 'Para Turistas',
          subtitle: 'Explore com contexto, curiosidade e liberdade.\nDescubra histórias autênticas em cada esquina.',
          benefits: [
            {
              icon: 'map',
              title: 'Descubra histórias autênticas\nsem roteiros.',
              description: 'Encontre histórias em cada esquina,\nsem precisar seguir roteiros fixos.'
            },
            {
              icon: 'globe',
              title: 'Contexto cultural\nautêntico',
              description: 'Entenda a origem, história e significado\ndos lugares que visita.'
            },
            {
              icon: 'star',
              title: 'Conteúdo cultural\nem 3 idiomas.',
              description: 'O app adapta o conteúdo ao seu idioma,\nritmo e preferências.'
            },
            {
              icon: 'check-circle',
              title: 'Perfeito para explorar\npor conta própria.',
              description: 'Todo o conteúdo é validado e livre\nde anúncios ou promoções.'
            }
          ]
        }
      },
      EN: {
        title: 'Why choose Tuggi?',
        subtitle: 'Transform every journey into a discovery adventure.',
        drivers: {
          title: 'For Professional Drivers',
          subtitle: 'Increase engagement, ratings, and tips\n— while Tuggi does the rest.',
          benefits: [
            {
              icon: 'car',
              title: 'Automatic and\nsafe audio',
              description: 'Narrations trigger automatically during the journey,\nwith 100% hands-free interface and no distractions.'
            },
            {
              icon: 'thumbs-up',
              title: 'Increase your\nratings',
              description: 'Drivers who use Tuggi offer a differentiated\nexperience and better ratings from passengers.'
            },
            {
              icon: 'dollar-sign',
              title: 'More tips\nand loyalty',
              description: 'Each ride becomes a cultural experience.\nPassengers remember and reward.'
            },
            {
              icon: 'navigation',
              title: 'Compatible with\nnavigation apps',
              description: 'Tuggi works in the background with Waze,\nGoogle Maps, and other apps without interference.'
            }
          ]
        },
        tourists: {
          title: 'For Tourists',
          subtitle: 'Explore with context, curiosity, and freedom.\nDiscover authentic stories on every corner.',
          benefits: [
            {
              icon: 'map',
              title: 'Spontaneous\ndiscovery',
              description: 'Find stories on every corner,\nwithout needing to follow fixed itineraries.'
            },
            {
              icon: 'globe',
              title: 'Authentic cultural\ncontext',
              description: 'Understand the origin, history, and meaning\nof the places you visit.'
            },
            {
              icon: 'star',
              title: 'Personalized\nexperience',
              description: 'The app adapts content to your language,\npace, and preferences.'
            },
            {
              icon: 'check-circle',
              title: 'Reliable\nnarratives',
              description: 'All content is validated and free\nfrom ads or promotions.'
            }
          ]
        }
      },
      ES: {
        title: '¿Por qué elegir Tuggi?',
        subtitle: 'Transforma cada trayecto en una aventura de descubrimiento.',
        drivers: {
          title: 'Para Conductores Profesionales',
          subtitle: 'Aumenta el compromiso, las calificaciones y las propinas\n— mientras Tuggi hace el resto.',
          benefits: [
            {
              icon: 'car',
              title: 'Audio automático\ny seguro',
              description: 'Las narraciones se activan solas durante el trayecto,\ncon interfaz 100% manos libres y sin distracciones.'
            },
            {
              icon: 'thumbs-up',
              title: 'Aumenta tus\ncalificaciones',
              description: 'Los conductores que usan Tuggi ofrecen una\nexperiencia diferenciada y mejores calificaciones.'
            },
            {
              icon: 'dollar-sign',
              title: 'Más propinas\ny fidelización',
              description: 'Cada viaje se convierte en una experiencia\ncultural. Los pasajeros recuerdan y recompensan.'
            },
            {
              icon: 'navigation',
              title: 'Compatible con apps\nde navegación',
              description: 'Tuggi funciona en segundo plano junto a Waze,\nGoogle Maps y otras apps sin interferencia.'
            }
          ]
        },
        tourists: {
          title: 'Para Turistas',
          subtitle: 'Explora con contexto, curiosidad y libertad.\nDescubre historias auténticas en cada esquina.',
          benefits: [
            {
              icon: 'map',
              title: 'Descubrimiento\nespontáneo',
              description: 'Encuentra historias en cada esquina,\nsin necesidad de seguir itinerarios fijos.'
            },
            {
              icon: 'globe',
              title: 'Contexto cultural\nauténtico',
              description: 'Entiende el origen, historia y significado\nde los lugares que visitas.'
            },
            {
              icon: 'star',
              title: 'Experiencia\npersonalizada',
              description: 'La app adapta el contenido a tu idioma,\nritmo y preferencias.'
            },
            {
              icon: 'check-circle',
              title: 'Narrativas\nconfiables',
              description: 'Todo el contenido está validado y libre\nde anuncios o promociones.'
            }
          ]
        }
      }
    };
    return content[language] || content['PT'];
  };

  const content = getLocalizedContent(currentLanguage);

  const getIcon = (iconType: string, cardType: 'drivers' | 'tourists' = 'drivers') => {
    const iconColor = cardType === 'drivers' ? '#00A8E8' : '#FF6F00';
    const iconProps = { className: "w-5 h-5", style: { color: iconColor } };
    
    switch (iconType) {
      case 'car':
        return <Car {...iconProps} />;
      case 'map':
        return <MapPin {...iconProps} />;
      case 'clock':
        return <Clock {...iconProps} />;
      case 'globe':
        return <Globe {...iconProps} />;
      case 'star':
        return <Star {...iconProps} />;
      case 'shield':
        return <Shield {...iconProps} />;
      case 'thumbs-up':
        return <ThumbsUp {...iconProps} />;
      case 'dollar-sign':
        return <DollarSign {...iconProps} />;
      case 'navigation':
        return <Navigation {...iconProps} />;
      case 'wifi':
        return <Wifi {...iconProps} />;
      case 'check-circle':
        return <CheckCircle {...iconProps} />;
      default:
        return <Headphones {...iconProps} />;
    }
  };

  return (
    <section className={`${layout.section.base}`} style={{ background: '#F9FAFB' }}>
      <div className={layout.container.base}>
        <div className="text-center mb-8 lg:mb-12">
          {/* Micro Headline */}
          <p 
            className="text-sm font-medium mb-2"
            style={{ 
              color: '#6B7280',
              fontFamily: 'var(--font-sans)',
              fontSize: '14px',
              fontWeight: '500',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}
          >
            Duas experiências, um mesmo propósito.
          </p>
          
          <h2 
            className="font-bold mb-4 leading-tight"
            style={{ 
              color: '#0F172A',
              fontFamily: 'var(--font-sans)',
              fontWeight: '700',
              fontSize: '32px',
              letterSpacing: '-0.01em'
            }}
          >
            {content.title}
          </h2>
          <p 
            className="max-w-2xl mx-auto leading-relaxed"
            style={{ 
              color: '#374151',
              fontFamily: 'var(--font-sans)',
              fontSize: '18px',
              fontWeight: '500'
            }}
          >
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Drivers Section */}
          <div 
            className="bg-white rounded-3xl p-12 shadow-sm border border-gray-100 transition-all duration-200 hover:transform hover:-translate-y-1.5 hover:shadow-lg"
            style={{ 
              background: '#FFFFFF',
              borderRadius: '24px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
              padding: '48px 40px',
              transition: 'transform 0.2s ease'
            }}
          >
            <div className="text-center mb-8">
              <div 
                className="w-18 h-18 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ 
                  width: '72px',
                  height: '72px',
                  background: '#00A8E8',
                  color: '#FFF'
                }}
              >
                <Car className="w-8 h-8 text-white" />
              </div>
              <h3 
                className="font-bold mb-3 leading-tight"
                style={{ 
                  color: '#0F172A',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: '700',
                  fontSize: '20px',
                  letterSpacing: '-0.01em'
                }}
              >
                {content.drivers.title}
              </h3>
              <p 
                className="leading-relaxed whitespace-pre-line"
                style={{ 
                  color: '#374151',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '16px',
                  fontWeight: '500'
                }}
              >
                {content.drivers.subtitle}
              </p>
            </div>

            <div className="space-y-6">
              {content.drivers.benefits.map((benefit: Benefit, index: number) => (
                <div key={index} className="flex items-start gap-4">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ 
                      background: 'rgba(0,168,232,0.1)',
                      opacity: 0.6
                    }}
                  >
                    {getIcon(benefit.icon, 'drivers')}
                  </div>
                  <div className="flex-1">
                    <h4 
                      className="font-semibold mb-2 leading-tight whitespace-pre-line"
                      style={{ 
                        color: '#0F172A',
                        fontFamily: 'var(--font-sans)',
                        fontWeight: '600',
                        fontSize: '18px'
                      }}
                    >
                      {benefit.title}
                    </h4>
                    <p 
                      className="leading-relaxed whitespace-pre-line"
                      style={{ 
                        color: '#4B5563',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '15px',
                        lineHeight: '1.6',
                        minHeight: '60px'
                      }}
                    >
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tourists Section */}
          <div 
            className="bg-white rounded-3xl p-12 shadow-sm border border-gray-100 transition-all duration-200 hover:transform hover:-translate-y-1.5 hover:shadow-lg"
            style={{ 
              background: '#FFFFFF',
              borderRadius: '24px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
              padding: '48px 40px',
              transition: 'transform 0.2s ease'
            }}
          >
            <div className="text-center mb-8">
              <div 
                className="w-18 h-18 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ 
                  width: '72px',
                  height: '72px',
                  background: '#FF6F00',
                  color: '#FFF'
                }}
              >
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 
                className="font-bold mb-3 leading-tight"
                style={{ 
                  color: '#0F172A',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: '700',
                  fontSize: '20px',
                  letterSpacing: '-0.01em'
                }}
              >
                {content.tourists.title}
              </h3>
              <p 
                className="leading-relaxed whitespace-pre-line"
                style={{ 
                  color: '#374151',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '16px',
                  fontWeight: '500'
                }}
              >
                {content.tourists.subtitle}
              </p>
            </div>

            <div className="space-y-6">
              {content.tourists.benefits.map((benefit: Benefit, index: number) => (
                <div key={index} className="flex items-start gap-4">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ 
                      background: 'rgba(255,111,0,0.1)',
                      opacity: 0.6
                    }}
                  >
                    {getIcon(benefit.icon, 'tourists')}
                  </div>
                  <div className="flex-1">
                    <h4 
                      className="font-semibold mb-2 leading-tight whitespace-pre-line"
                      style={{ 
                        color: '#0F172A',
                        fontFamily: 'var(--font-sans)',
                        fontWeight: '600',
                        fontSize: '18px'
                      }}
                    >
                      {benefit.title}
                    </h4>
                    <p 
                      className="leading-relaxed whitespace-pre-line"
                      style={{ 
                        color: '#4B5563',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '15px',
                        lineHeight: '1.6',
                        minHeight: '60px'
                      }}
                    >
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsV2;
