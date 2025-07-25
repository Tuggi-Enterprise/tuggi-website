import React from 'react';
import { Shield, Award, Users } from 'lucide-react';
import { layout, gradients } from '../utils/designSystem';

interface TrustFeature {
  icon: string;
  title: string;
  description: string;
}

interface ContentLanguage {
  title: string;
  subtitle: string;
  features: TrustFeature[];
}

interface TrustSectionProps {
  currentLanguage?: string;
}

const TrustSection: React.FC<TrustSectionProps> = ({ 
  currentLanguage = 'PT'
}) => {
  // Localized content
  const getLocalizedContent = (language: string): ContentLanguage => {
    const content: Record<string, ContentLanguage> = {
      PT: {
        title: 'Cultura não deveria ser um destino — ela deveria acompanhar você no caminho.',
        subtitle: 'Criamos a Tuggi porque acreditamos que cada trajeto pode ser uma oportunidade de descoberta.\nUsamos tecnologia para dar vida àquilo que normalmente passaria despercebido: ruas, edifícios, bairros, paisagens.',
        features: [
          {
            icon: 'shield',
            title: 'Descoberta espontânea',
            description: 'Cada lugar tem uma história. Nossa missão é revelar essas narrativas enquanto você vive sua rotina, transformando o comum em extraordinário.'
          },
          {
            icon: 'award',
            title: 'Conexão cultural',
            description: 'Acreditamos que conhecer a história e cultura dos lugares cria um vínculo mais profundo com o mundo ao nosso redor.'
          },
          {
            icon: 'users',
            title: 'Liberdade de exploração',
            description: 'Sem rotas predefinidas ou obrigações. A cultura surge naturalmente, respeitando seu ritmo e suas escolhas.'
          }
        ]
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
        ]
      },
      ES: {
        title: 'La cultura no debería ser un destino — debería acompañarte en el camino.',
        subtitle: 'Creamos Tuggi porque creemos que cada trayecto puede ser una oportunidad de descubrimiento.\nUsamos tecnología para dar vida a lo que normalmente pasaría desapercibido: calles, edificios, barrios, paisajes.',
        features: [
          {
            icon: 'shield',
            title: 'Descubrimiento espontáneo',
            description: 'Cada lugar tiene una historia. Nuestra misión es revelar estas narrativas mientras vives tu rutina, transformando lo común en extraordinario.'
          },
          {
            icon: 'award',
            title: 'Conexión cultural',
            description: 'Creemos que conocer la historia y cultura de los lugares crea un vínculo más profundo con el mundo que nos rodea.'
          },
          {
            icon: 'users',
            title: 'Libertad de exploración',
            description: 'Sin rutas predefinidas u obligaciones. La cultura surge naturalmente, respetando tu ritmo y tus decisiones.'
          }
        ]
      }
    };
    return content[language] || content['PT'];
  };

  const content = getLocalizedContent(currentLanguage);

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'shield':
        return <Shield className="w-7 h-7 text-white" />;
      case 'award':
        return <Award className="w-7 h-7 text-white" />;
      case 'users':
        return <Users className="w-7 h-7 text-white" />;
      default:
        return <Shield className="w-7 h-7 text-white" />;
    }
  };

  return (
    <section className={`${layout.section.base}`} style={{ background: gradients.subtle }}>
      <div className={layout.container.base}>
        {/* Main Content */}
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-4 lg:mb-6 leading-tight">
            {content.title}
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mb-4 lg:mb-6 whitespace-pre-line">
              {content.subtitle}
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className={`${layout.grid['3']} gap-6 mt-8 lg:mt-12`}>
          {content.features.map((feature: TrustFeature, index: number) => (
            <div 
              key={index}
              className="group text-center"
            >
              {/* Icon */}
              <div className="inline-flex w-16 h-16 rounded-full items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg" style={{ background: gradients.ocean }}>
                {getIcon(feature.icon)}
              </div>

              {/* Content */}
              <h3 className="text-lg lg:text-xl font-bold text-neutral-900 mb-3 group-hover:text-tuggi-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;