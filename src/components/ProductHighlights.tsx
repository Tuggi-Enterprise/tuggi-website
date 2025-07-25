import React from 'react';
import { Headphones, MapPin, Clock, Heart } from 'lucide-react';

interface ProductHighlightsProps {
  currentLanguage?: string;
  onCTAClick?: (ctaType: string, language: string) => void;
}

const ProductHighlights: React.FC<ProductHighlightsProps> = ({ 
  currentLanguage = 'EN',
  onCTAClick 
}) => {
  // Localized content
  const getLocalizedContent = (language: string) => {
    const content: Record<string, any> = {
      PT: {
        title: 'A Tuggi é um copiloto cultural.',
        description: 'Enquanto você se movimenta pela cidade — caminhando, dirigindo ou de transporte — o app narra histórias e curiosidades sobre o que está ao seu redor, em tempo real e sem distrações.',
        features: [
          {
            icon: 'headphones',
            title: 'Narrativas em tempo real',
            description: 'Histórias e curiosidades são narradas automaticamente conforme você se move pela cidade, sem precisar parar ou procurar informações.'
          },
          {
            icon: 'map',
            title: 'Sem rotas fixas',
            description: 'Não precisa seguir um caminho predefinido. O conteúdo surge naturalmente conforme você explora, no seu próprio ritmo.'
          },
          {
            icon: 'clock',
            title: 'Sem distrações',
            description: 'O app funciona em segundo plano, permitindo que você continue suas atividades enquanto absorve conhecimento cultural.'
          },
          {
            icon: 'heart',
            title: 'Experiência personalizada',
            description: 'O conteúdo se adapta ao seu movimento e localização, criando uma experiência única a cada trajeto.'
          }
        ]
      },
      EN: {
        title: 'Tuggi is a cultural copilot.',
        description: 'While you move through the city — walking, driving or using transport — the app narrates stories and curiosities about what\'s around you, in real-time and without distractions.',
        features: [
          {
            icon: 'headphones',
            title: 'Real-time narratives',
            description: 'Stories and curiosities are automatically narrated as you move through the city, without needing to stop or search for information.'
          },
          {
            icon: 'map',
            title: 'No fixed routes',
            description: 'No need to follow a predefined path. Content emerges naturally as you explore, at your own pace.'
          },
          {
            icon: 'clock',
            title: 'No distractions',
            description: 'The app works in the background, allowing you to continue your activities while absorbing cultural knowledge.'
          },
          {
            icon: 'heart',
            title: 'Personalized experience',
            description: 'Content adapts to your movement and location, creating a unique experience with every journey.'
          }
        ]
      },
      ES: {
        title: 'Tuggi es un copiloto cultural.',
        description: 'Mientras te mueves por la ciudad — caminando, conduciendo o en transporte — la app narra historias y curiosidades sobre lo que te rodea, en tiempo real y sin distracciones.',
        features: [
          {
            icon: 'headphones',
            title: 'Narrativas en tiempo real',
            description: 'Historias y curiosidades se narran automáticamente mientras te mueves por la ciudad, sin necesidad de parar o buscar información.'
          },
          {
            icon: 'map',
            title: 'Sin rutas fijas',
            description: 'No necesitas seguir un camino predefinido. El contenido surge naturalmente mientras exploras, a tu propio ritmo.'
          },
          {
            icon: 'clock',
            title: 'Sin distracciones',
            description: 'La app funciona en segundo plano, permitiéndote continuar tus actividades mientras absorbes conocimiento cultural.'
          },
          {
            icon: 'heart',
            title: 'Experiencia personalizada',
            description: 'El contenido se adapta a tu movimiento y ubicación, creando una experiencia única en cada trayecto.'
          }
        ]
      }
    };
    return content[language] || content['PT'];
  };

  const content = getLocalizedContent(currentLanguage);

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'headphones':
        return <Headphones className="w-8 h-8 text-white" />;
      case 'map':
        return <MapPin className="w-8 h-8 text-white" />;
      case 'clock':
        return <Clock className="w-8 h-8 text-white" />;
      case 'heart':
        return <Heart className="w-8 h-8 text-white" />;
      default:
        return <Headphones className="w-8 h-8 text-white" />;
    }
  };

  return (
    <section className="py-8 lg:py-12 xl:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-6 lg:mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-3 lg:mb-4">
            {content.title}
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 max-w-4xl mx-auto leading-relaxed">
            {content.description}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 xl:gap-8">
          {content.features.map((feature: any, index: number) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-neutral-50 to-white border border-neutral-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-tuggi-primary/20"
            >
              {/* Icon */}
                              <div className="w-14 h-14 rounded-2xl bg-gradient-ocean flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                {getIcon(feature.icon)}
              </div>

              {/* Content */}
              <h3 className="text-lg lg:text-xl font-bold text-neutral-900 mb-3 group-hover:text-tuggi-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-tuggi-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductHighlights;