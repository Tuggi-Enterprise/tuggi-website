import React, { useState } from 'react';
import { ShieldCheck, MapPin, ChevronDown, Globe } from 'lucide-react';
import { layout } from '../utils/designSystem';
import audioSamples from '../data/audio-samples.json';
import AudioCardMultilingual from './AudioCardMultilingual';

interface TrustSectionV2Props {
  currentLanguage?: string;
}

const TrustSectionV2: React.FC<TrustSectionV2Props> = ({ 
  currentLanguage = 'PT' 
}) => {
  const [showAllSamples, setShowAllSamples] = useState(false);
  // Localized content
  const getLocalizedContent = (language: string) => {
    const content: Record<string, any> = {
      PT: {
        title: 'Conteúdo verificado, narrado com responsabilidade',
        subtitle: 'Cada história vem de fontes oficiais e passa por validação humana antes de ser narrada.',
        features: [
          {
            icon: 'shield',
            title: 'Fontes oficiais e culturais',
            description: 'Conteúdo baseado em fontes oficiais, museus, instituições culturais e pesquisas acadêmicas verificadas.'
          },
          {
            icon: 'award',
            title: 'Revisão e validação humana',
            description: 'Cada narrativa passa por revisão de especialistas em história, cultura e turismo antes de ser publicada.'
          },
          {
            icon: 'users',
            title: 'Sem anúncios, sem pegadinhas',
            description: 'Plataforma 100% gratuita, sem anúncios ou conteúdo promocional. Foco exclusivo na experiência cultural.'
          }
        ],
        trustIndicators: [
          {
            icon: 'check',
            text: 'Conteúdo verificado por especialistas'
          },
          {
            icon: 'globe',
            text: 'Disponível em 3 idiomas'
          },
          {
            icon: 'star',
            text: 'Mais de 20 cidades ativas'
          }
        ],
        samplesTitle: 'Ouça um exemplo real',
        samplesSubtitle: 'Descubra como o Tuggi transforma lugares comuns em histórias extraordinárias.',
        bridgeText: 'E se quiser ouvir na prática, aqui estão algumas das histórias que você encontrará no Tuggi.',
        showMore: 'Ver mais exemplos',
        showLess: 'Ver menos'
      },
      EN: {
        title: 'Culture shouldn\'t be a destination — it should accompany you on the journey.',
        subtitle: 'We created Tuggi because we believe that every journey can be an opportunity for discovery.\nWe use technology to bring life to what would normally go unnoticed: streets, buildings, neighborhoods, landscapes.',
        features: [
          {
            icon: 'shield',
            title: 'Spontaneous discovery',
            description: 'Every place has a story. Our mission is to reveal these narratives while you live your routine, transforming the ordinary into extraordinary.'
          },
          {
            icon: 'award',
            title: 'Cultural connection',
            description: 'We believe that knowing the history and culture of places creates a deeper bond with the world around us.'
          },
          {
            icon: 'users',
            title: 'Freedom of exploration',
            description: 'No predefined routes or obligations. Culture emerges naturally, respecting your pace and choices.'
          }
        ],
        trustIndicators: [
          {
            icon: 'check',
            text: 'Content verified by experts'
          },
          {
            icon: 'globe',
            text: 'Available in 3 languages'
          },
          {
            icon: 'star',
            text: 'More than 20 active cities'
          }
        ]
      },
      ES: {
        title: 'Contenido verificado, narrado con responsabilidad',
        subtitle: 'Cada historia proviene de fuentes oficiales y pasa por validación humana antes de ser narrada.',
        features: [
          {
            icon: 'shield',
            title: 'Fuentes oficiales y culturales',
            description: 'Basado en datos de museos, organismos de turismo e instituciones culturales.'
          },
          {
            icon: 'award',
            title: 'Revisión y validación humana',
            description: 'Cada narrativa pasa por curaduría antes de ser publicada.'
          },
          {
            icon: 'users',
            title: 'Sin anuncios, sin trampas',
            description: 'Enfoque exclusivo en la experiencia cultural — sin publicidad ni interrupciones.'
          }
        ],
        trustIndicators: [
          {
            icon: 'check',
            text: 'Contenido verificado por especialistas'
          },
          {
            icon: 'globe',
            text: 'Disponible en 3 idiomas'
          },
          {
            icon: 'star',
            text: 'Más de 20 ciudades activas'
          }
        ],
        samplesTitle: 'Escucha un ejemplo real',
        samplesSubtitle: 'Descubre cómo Tuggi transforma lugares comunes en historias extraordinarias.',
        bridgeText: 'Y si quieres escucharlo en la práctica, aquí tienes algunas de las historias que encontrarás en Tuggi.',
        showMore: 'Ver más ejemplos',
        showLess: 'Ver menos'
      }
    };
    return content[language] || content['PT'];
  };

  const content = getLocalizedContent(currentLanguage);


  // Get samples to display (3 initially, 6 when showAllSamples is true)
  const getDisplaySamples = () => {
    if (showAllSamples) {
      return audioSamples.slice(0, 6); // Show 6 samples when expanded
    }
    // Show 3 samples initially
    return audioSamples.slice(0, 3);
  };


  return (
    <section 
      className="pt-24 pb-30 relative"
      style={{ 
        background: 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)',
        borderTop: '1px solid rgba(0,0,0,0.05)'
      }}
    >
      {/* Decorative Image */}
      <div className="absolute top-8 right-8 opacity-10">
        <Globe className="w-32 h-32 text-tuggi-primary" />
      </div>
      <div className={layout.container.base}>
        {/* Main Content */}
        <div className="text-center mb-8 lg:mb-12">
          <h2 
            className="font-bold mb-4 lg:mb-6 leading-tight"
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
          <div className="max-w-4xl mx-auto">
            <p 
              className="leading-relaxed mb-8"
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
        </div>

        {/* Badges de Credibilidade */}
        <div className="flex justify-center gap-4 flex-wrap mb-10">
          <div 
            className="flex items-center gap-2 px-4 py-3 rounded-xl"
            style={{ 
              background: '#F3F4F6',
              borderRadius: '12px',
              padding: '12px 16px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.08)'
            }}
          >
            <ShieldCheck className="w-4 h-4" style={{ color: '#00A8E8' }} />
            <span 
              style={{ 
                color: '#374151',
                fontFamily: 'var(--font-sans)',
                fontSize: '14px'
              }}
            >
              Verificado por especialistas
            </span>
          </div>
          
          <div 
            className="flex items-center gap-2 px-4 py-3 rounded-xl"
            style={{ 
              background: '#F3F4F6',
              borderRadius: '12px',
              padding: '12px 16px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.08)'
            }}
          >
            <Globe className="w-4 h-4" style={{ color: '#00A8E8' }} />
            <span 
              style={{ 
                color: '#374151',
                fontFamily: 'var(--font-sans)',
                fontSize: '14px'
              }}
            >
              Disponível em 3 idiomas
            </span>
          </div>
          
          <div 
            className="flex items-center gap-2 px-4 py-3 rounded-xl"
            style={{ 
              background: '#F3F4F6',
              borderRadius: '12px',
              padding: '12px 16px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.08)'
            }}
          >
            <MapPin className="w-4 h-4" style={{ color: '#00A8E8' }} />
            <span 
              style={{ 
                color: '#374151',
                fontFamily: 'var(--font-sans)',
                fontSize: '14px'
              }}
            >
              Mais de 20 cidades ativas
            </span>
          </div>
        </div>

        {/* Trust Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {content.features.map((feature: any, index: number) => (
            <div 
              key={index}
              className="text-center md:text-left"
              style={{ maxWidth: '320px', marginInline: 'auto' }}
            >
              {/* Content */}
              <h3 
                className="font-semibold mb-3"
                style={{ 
                  color: '#0F172A',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: '600',
                  fontSize: '18px',
                  marginBottom: '12px'
                }}
              >
                {feature.title}
              </h3>
              <p 
                className="leading-relaxed"
                style={{ 
                  color: '#4B5563',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '15px',
                  lineHeight: '1.6',
                  maxWidth: '320px',
                  marginInline: 'auto'
                }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Indireto */}
        <div className="text-center mt-12">
          <p 
            style={{ 
              color: 'var(--color-text-muted)',
              fontFamily: 'var(--font-sans)',
              fontSize: '16px',
              fontStyle: 'italic'
            }}
          >
            Ouça um exemplo real abaixo.
          </p>
        </div>

        {/* Bridge Text */}
        <div className="text-center mt-8">
          <p 
            style={{ 
              color: 'var(--color-text-muted)',
              fontFamily: 'var(--font-sans)',
              fontSize: '16px'
            }}
          >
            {content.bridgeText}
          </p>
        </div>

        {/* Audio Samples Section */}
        <div className="mt-12">
          <div className="text-center mb-8">
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
              {content.samplesTitle}
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
              {content.samplesSubtitle}
            </p>
          </div>

          {/* Audio Samples Grid - Unified Responsive */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getDisplaySamples().map((sample: any) => (
              <AudioCardMultilingual
                key={sample.id}
                sample={sample}
                currentLanguage={currentLanguage}
              />
            ))}
          </div>

          {/* Show More/Less Button */}
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAllSamples(!showAllSamples)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors duration-200"
              style={{ 
                background: 'transparent',
                color: '#374151',
                border: '1px solid #D1D5DB',
                borderRadius: '24px',
                padding: '12px 24px',
                fontFamily: 'var(--font-sans)',
                fontSize: '14px',
                fontWeight: '500'
              }}
            >
              {showAllSamples ? content.showLess : content.showMore}
              <ChevronDown 
                className={`w-4 h-4 transition-transform duration-200 ${
                  showAllSamples ? 'rotate-180' : ''
                }`} 
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSectionV2;
