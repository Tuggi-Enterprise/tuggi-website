import React from 'react';
import { Car, MapPin, Star, ThumbsUp, Navigation, CheckCircle, Headphones } from 'lucide-react';
import { layout } from '../../utils/designSystem';

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
        title: 'Feito para quem dirige',
        subtitle: 'Simplicidade e segurança para transformar seu trajeto.',
        benefits: [
          {
            icon: 'headphones',
            title: 'Narração em áudio',
            description: 'Experiência mãos livres para você manter o foco na estrada.'
          },
          {
            icon: 'map',
            title: 'Conteúdo contextual',
            description: 'Histórias que surgem no momento certo, baseadas na sua localização.'
          },
          {
            icon: 'thumbs-up',
            title: 'Controle e simplicidade',
            description: 'Interface intuitiva feita para uso veicular.'
          },
          {
            icon: 'navigation',
            title: 'Compatibilidade total',
            description: 'Funciona em segundo plano com Waze e Google Maps.'
          }
        ]
      },
      EN: {
        title: 'Built for drivers',
        subtitle: 'Simplicity and safety to transform your journey.',
        benefits: [
          {
            icon: 'headphones',
            title: 'Audio narration',
            description: 'Hands-free experience so you can keep your focus on the road.'
          },
          {
            icon: 'map',
            title: 'Contextual content',
            description: 'Stories that appear at the right time, based on your location.'
          },
          {
            icon: 'thumbs-up',
            title: 'Control and simplicity',
            description: 'Intuitive interface designed for in-vehicle use.'
          },
          {
            icon: 'navigation',
            title: 'Full compatibility',
            description: 'Works in the background with Waze and Google Maps.'
          }
        ]
      },
      ES: {
        title: 'Hecho para conductores',
        subtitle: 'Simplicidad y seguridad para transformar tu trayecto.',
        benefits: [
          {
            icon: 'headphones',
            title: 'Narración en audio',
            description: 'Experiencia manos libres para que mantengas el foco en la carretera.'
          },
          {
            icon: 'map',
            title: 'Contenido contextual',
            description: 'Historias que surgen en el momento justo, basadas en tu ubicación.'
          },
          {
            icon: 'thumbs-up',
            title: 'Control y simplicidad',
            description: 'Interfaz intuitiva diseñada para uso vehicular.'
          },
          {
            icon: 'navigation',
            title: 'Compatibilidad total',
            description: 'Funciona en segundo plano con Waze y Google Maps.'
          }
        ]
      },
      FR: {
        title: 'Conçu pour les conducteurs',
        subtitle: 'Simplicité et sécurité pour transformer votre trajet.',
        benefits: [
          {
            icon: 'headphones',
            title: 'Narration audio',
            description: 'Expérience mains libres pour garder votre attention sur la route.'
          },
          {
            icon: 'map',
            title: 'Contenu contextuel',
            description: 'Des histoires qui surgissent au bon moment, basées sur votre position.'
          },
          {
            icon: 'thumbs-up',
            title: 'Contrôle et simplicité',
            description: 'Interface intuitive conçue pour un usage en véhicule.'
          },
          {
            icon: 'navigation',
            title: 'Compatibilité totale',
            description: 'Fonctionne en arrière-plan avec Waze et Google Maps.'
          }
        ]
      },
      DE: {
        title: 'Für Autofahrer gemacht',
        subtitle: 'Einfachheit und Sicherheit, um Ihre Fahrt zu verändern.',
        benefits: [
          {
            icon: 'headphones',
            title: 'Audio-Erzählung',
            description: 'Freihändiges Erlebnis, damit Sie sich auf die Straße konzentrieren können.'
          },
          {
            icon: 'map',
            title: 'Kontextbezogener Inhalt',
            description: 'Geschichten, die zum richtigen Zeitpunkt basierend auf Ihrem Standort erscheinen.'
          },
          {
            icon: 'thumbs-up',
            title: 'Kontrolle und Einfachheit',
            description: 'Intuitive Benutzeroberfläche für die Nutzung im Fahrzeug.'
          },
          {
            icon: 'navigation',
            title: 'Volle Kompatibilität',
            description: 'Funktioniert im Hintergrund mit Waze und Google Maps.'
          }
        ]
      },
      IT: {
        title: 'Fatto per chi guida',
        subtitle: 'Semplicità e sicurezza per trasformare il tuo viaggio.',
        benefits: [
          {
            icon: 'headphones',
            title: 'Narrazione audio',
            description: 'Esperienza vivavoce per mantenere la concentrazione sulla strada.'
          },
          {
            icon: 'map',
            title: 'Contenuto contestuale',
            description: 'Storie che appaiono al momento giusto, basate sulla tua posizione.'
          },
          {
            icon: 'thumbs-up',
            title: 'Controllo e semplicità',
            description: 'Interfaccia intuitiva progettata per l\'uso veicolare.'
          },
          {
            icon: 'navigation',
            title: 'Compatibilità totale',
            description: 'Funziona in background con Waze e Google Maps.'
          }
        ]
      }
    };
    return content[language] || content['PT'];
  };

  const content = getLocalizedContent(currentLanguage);

  const getIcon = (iconType: string) => {
    const iconColor = '#00A8E8';
    const iconProps = { className: "w-6 h-6", style: { color: iconColor } };
    
    switch (iconType) {
      case 'car':
        return <Car {...iconProps} />;
      case 'map':
        return <MapPin {...iconProps} />;
      case 'headphones':
        return <Headphones {...iconProps} />;
      case 'thumbs-up':
        return <ThumbsUp {...iconProps} />;
      case 'navigation':
        return <Navigation {...iconProps} />;
      case 'check-circle':
        return <CheckCircle {...iconProps} />;
      default:
        return <Star {...iconProps} />;
    }
  };

  return (
    <section className={`${layout.section.base}`} style={{ background: '#F9FAFB' }}>
      <div className={layout.container.base}>
        <div className="text-center mb-8 lg:mb-12">

          
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {content.benefits.map((benefit: Benefit, index: number) => (
            <div 
              key={index}
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 transition-all duration-200 hover:transform hover:-translate-y-1 hover:shadow-md h-full flex flex-col items-center text-center"
              style={{ 
                background: '#FFFFFF',
                borderRadius: '24px',
                padding: '32px 24px',
                transition: 'transform 0.2s ease'
              }}
            >
              <div 
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                style={{ 
                  background: 'rgba(0,168,232,0.06)',
                  color: '#00A8E8'
                }}
              >
                {getIcon(benefit.icon)}
              </div>
              <h3 
                className="font-bold mb-3 leading-tight"
                style={{ 
                  color: '#0F172A',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: '700',
                  fontSize: '18px',
                  letterSpacing: '-0.01em'
                }}
              >
                {benefit.title}
              </h3>
              <p 
                className="leading-relaxed"
                style={{ 
                  color: '#6B7280',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '15px'
                }}
              >
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsV2;
