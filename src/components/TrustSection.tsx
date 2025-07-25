import React from 'react';
import { Eye, Heart, Compass } from 'lucide-react';

interface TrustSectionProps {
  currentLanguage?: string;
}

const TrustSection: React.FC<TrustSectionProps> = ({ currentLanguage = 'PT' }) => {
  // Localized content
  const getLocalizedContent = (language: string) => {
    const content: Record<string, any> = {
      PT: {
        mainTitle: 'Cultura não deveria ser um destino — ela deveria acompanhar você no caminho.',
        description: 'Criamos a Tuggi porque acreditamos que cada trajeto pode ser uma oportunidade de descoberta.\nUsamos tecnologia para dar vida àquilo que normalmente passaria despercebido: ruas, edifícios, bairros, paisagens.',
        closing: 'Com narrações envolventes e conteúdo contextual, ajudamos você a enxergar — e ouvir — o mundo com outros olhos.',
        values: [
          {
            icon: 'eye',
            title: 'Descoberta espontânea',
            description: 'Cada lugar tem uma história. Nossa missão é revelar essas narrativas enquanto você vive sua rotina, transformando o comum em extraordinário.'
          },
          {
            icon: 'heart',
            title: 'Conexão cultural',
            description: 'Acreditamos que conhecer a história e cultura dos lugares cria um vínculo mais profundo com o mundo ao nosso redor.'
          },
          {
            icon: 'compass',
            title: 'Liberdade de exploração',
            description: 'Sem rotas predefinidas ou obrigações. A cultura surge naturalmente, respeitando seu ritmo e suas escolhas.'
          }
        ]
      },
      EN: {
        mainTitle: 'Culture shouldn\'t be a destination — it should accompany you on the journey.',
        description: 'We created Tuggi because we believe that every journey can be an opportunity for discovery.\nWe use technology to bring life to what would normally go unnoticed: streets, buildings, neighborhoods, landscapes.',
        closing: 'With engaging narratives and contextual content, we help you see — and hear — the world with different eyes.',
        values: [
          {
            icon: 'eye',
            title: 'Spontaneous discovery',
            description: 'Every place has a story. Our mission is to reveal these narratives while you live your routine, transforming the ordinary into extraordinary.'
          },
          {
            icon: 'heart',
            title: 'Cultural connection',
            description: 'We believe that knowing the history and culture of places creates a deeper bond with the world around us.'
          },
          {
            icon: 'compass',
            title: 'Freedom of exploration',
            description: 'No predefined routes or obligations. Culture emerges naturally, respecting your pace and choices.'
          }
        ]
      },
      ES: {
        mainTitle: 'La cultura no debería ser un destino — debería acompañarte en el camino.',
        description: 'Creamos Tuggi porque creemos que cada trayecto puede ser una oportunidad de descubrimiento.\nUsamos tecnología para dar vida a lo que normalmente pasaría desapercibido: calles, edificios, barrios, paisajes.',
        closing: 'Con narraciones envolventes y contenido contextual, te ayudamos a ver — y escuchar — el mundo con otros ojos.',
        values: [
          {
            icon: 'eye',
            title: 'Descubrimiento espontáneo',
            description: 'Cada lugar tiene una historia. Nuestra misión es revelar estas narrativas mientras vives tu rutina, transformando lo común en extraordinario.'
          },
          {
            icon: 'heart',
            title: 'Conexión cultural',
            description: 'Creemos que conocer la historia y cultura de los lugares crea un vínculo más profundo con el mundo que nos rodea.'
          },
          {
            icon: 'compass',
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
      case 'eye':
        return <Eye className="w-7 h-7 text-white" />;
      case 'heart':
        return <Heart className="w-7 h-7 text-white" />;
      case 'compass':
        return <Compass className="w-7 h-7 text-white" />;
      default:
        return <Eye className="w-7 h-7 text-white" />;
    }
  };

  return (
    <section className="py-12 lg:py-16 xl:py-20 bg-gradient-to-br from-neutral-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-4 lg:mb-6 leading-tight">
            {content.mainTitle}
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mb-4 lg:mb-6 whitespace-pre-line">
              {content.description}
            </p>
            <p className="text-base sm:text-lg text-neutral-700 font-medium leading-relaxed">
              {content.closing}
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8 lg:mt-12">
          {content.values.map((value: any, index: number) => (
            <div 
              key={index}
              className="group text-center"
            >
              {/* Icon */}
                             <div className="inline-flex w-16 h-16 rounded-full bg-gradient-to-br from-tuggi-primary to-tuggi-primary-dark items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                {getIcon(value.icon)}
              </div>

              {/* Content */}
                             <h3 className="text-lg lg:text-xl font-bold text-neutral-900 mb-3 group-hover:text-tuggi-primary transition-colors duration-300">
                 {value.title}
               </h3>
               <p className="text-sm text-neutral-600 leading-relaxed">
                 {value.description}
               </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;