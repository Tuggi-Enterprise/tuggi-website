import React from 'react';
import { MapPin, Navigation, Globe, Zap } from 'lucide-react';

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
      EN: {
        badge: '✨ Product Highlights',
        title: 'Powerful Features for Modern Transportation',
        subtitle: 'Start delivering cultural journeys with cutting-edge technology — now available for selected partners in early rollout.',
        seeAllFeatures: 'See All Features',
        technicalDocs: 'Technical Documentation',
        features: [
          {
            title: 'Location-based Automatic Narration',
            description: 'AI-powered storytelling that activates based on GPS coordinates, delivering contextual cultural insights and historical narratives at the perfect moment.',
            color: 'from-tuggi-primary to-blue-600',
            bgColor: 'bg-tuggi-primary/10',
            borderColor: 'border-tuggi-primary/20'
          },
          {
            title: 'Background Compatibility with Navigation Apps',
            description: 'Seamlessly integrates with Google Maps, Waze, and other navigation platforms without interrupting turn-by-turn directions or route guidance.',
            color: 'from-tuggi-secondary to-orange-600',
            bgColor: 'bg-tuggi-secondary/10',
            borderColor: 'border-tuggi-secondary/20'
          },
          {
            title: 'Multilingual Support for Passengers',
            description: 'Dynamic language switching supporting Portuguese, English, Spanish, and more, ensuring every passenger enjoys the experience in their preferred language.',
            color: 'from-green-500 to-emerald-600',
            bgColor: 'bg-green-50',
            borderColor: 'border-green-200'
          },
          {
            title: 'Simple Setup and Activation',
            description: 'One-click installation and instant activation. No complex configurations or technical expertise required. Get your fleet storytelling-ready in minutes.',
            color: 'from-purple-500 to-violet-600',
            bgColor: 'bg-purple-50',
            borderColor: 'border-purple-200'
          }
        ]
      },
      PT: {
        badge: '✨ Destaques do Produto',
        title: 'Recursos Poderosos para Transporte Moderno',
        subtitle: 'Comece a entregar jornadas culturais com tecnologia de ponta — agora disponível para parceiros selecionados em lançamento inicial.',
        seeAllFeatures: 'Ver Todos os Recursos',
        technicalDocs: 'Documentação Técnica',
        features: [
          {
            title: 'Narração Automática Baseada em Localização',
            description: 'Narrativa com IA que ativa baseada em coordenadas GPS, entregando insights culturais contextuais e narrativas históricas no momento perfeito.',
            color: 'from-tuggi-primary to-blue-600',
            bgColor: 'bg-tuggi-primary/10',
            borderColor: 'border-tuggi-primary/20'
          },
          {
            title: 'Compatibilidade em Segundo Plano com Apps de Navegação',
            description: 'Integra perfeitamente com Google Maps, Waze e outras plataformas de navegação sem interromper direções passo a passo ou orientação de rota.',
            color: 'from-tuggi-secondary to-orange-600',
            bgColor: 'bg-tuggi-secondary/10',
            borderColor: 'border-tuggi-secondary/20'
          },
          {
            title: 'Suporte Multilíngue para Passageiros',
            description: 'Troca dinâmica de idiomas suportando português, inglês, espanhol e mais, garantindo que cada passageiro desfrute da experiência em seu idioma preferido.',
            color: 'from-green-500 to-emerald-600',
            bgColor: 'bg-green-50',
            borderColor: 'border-green-200'
          },
          {
            title: 'Configuração e Ativação Simples',
            description: 'Instalação com um clique e ativação instantânea. Sem configurações complexas ou expertise técnica necessária. Deixe sua frota pronta para narrativas em minutos.',
            color: 'from-purple-500 to-violet-600',
            bgColor: 'bg-purple-50',
            borderColor: 'border-purple-200'
          }
        ]
      },
      ES: {
        badge: '✨ Características del Producto',
        title: 'Características Poderosas para Transporte Moderno',
        subtitle: 'Comience a entregar viajes culturales con tecnología de vanguardia — ahora disponible para socios seleccionados en lanzamiento inicial.',
        seeAllFeatures: 'Ver Todas las Características',
        technicalDocs: 'Documentación Técnica',
        features: [
          {
            title: 'Narración Automática Basada en Ubicación',
            description: 'Narrativa con IA que se activa basada en coordenadas GPS, entregando perspectivas culturales contextuales y narrativas históricas en el momento perfecto.',
            color: 'from-tuggi-primary to-blue-600',
            bgColor: 'bg-tuggi-primary/10',
            borderColor: 'border-tuggi-primary/20'
          },
          {
            title: 'Compatibilidad en Segundo Plano con Apps de Navegación',
            description: 'Se integra perfectamente con Google Maps, Waze y otras plataformas de navegación sin interrumpir direcciones paso a paso o guía de ruta.',
            color: 'from-tuggi-secondary to-orange-600',
            bgColor: 'bg-tuggi-secondary/10',
            borderColor: 'border-tuggi-secondary/20'
          },
          {
            title: 'Soporte Multilingüe para Pasajeros',
            description: 'Cambio dinámico de idiomas soportando portugués, inglés, español y más, asegurando que cada pasajero disfrute la experiencia en su idioma preferido.',
            color: 'from-green-500 to-emerald-600',
            bgColor: 'bg-green-50',
            borderColor: 'border-green-200'
          },
          {
            title: 'Configuración y Activación Simple',
            description: 'Instalación con un clic y activación instantánea. Sin configuraciones complejas o experiencia técnica requerida. Prepare su flota para narrativas en minutos.',
            color: 'from-purple-500 to-violet-600',
            bgColor: 'bg-purple-50',
            borderColor: 'border-purple-200'
          }
        ]
      }
    };
    return content[language] || content['EN'];
  };

  const content = getLocalizedContent(currentLanguage);

  const handleCTAClick = (ctaType: string) => {
    onCTAClick?.(ctaType, currentLanguage);
  };

  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-tuggi-primary/10 rounded-full mb-6">
            <span className="text-tuggi-primary font-semibold text-sm">
              {content.badge}
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-6">
            {content.title}
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {content.features.map((feature: any, index: number) => (
            <div 
              key={index}
              className={`group relative ${feature.bgColor} ${feature.borderColor} border-2 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
            >
              {/* Early Access Badge */}
              {/* <div className="absolute top-4 left-4 bg-tuggi-secondary/20 text-tuggi-secondary-dark px-3 py-1 rounded-full text-xs font-bold border border-tuggi-secondary/30">
                🧪 Early Access
              </div> */}

              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {index === 0 && <MapPin className="w-8 h-8 text-white" />}
                {index === 1 && <Navigation className="w-8 h-8 text-white" />}
                {index === 2 && <Globe className="w-8 h-8 text-white" />}
                {index === 3 && <Zap className="w-8 h-8 text-white" />}
              </div>

              {/* Content */}
              <h3 className="text-xl lg:text-2xl font-bold text-neutral-900 mb-4 group-hover:text-tuggi-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        {/* <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => handleCTAClick('see_all_features')}
              className="bg-tuggi-primary hover:bg-tuggi-primary-dark text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:shadow-xl transform hover:-translate-y-1"
            >
              {content.seeAllFeatures}
            </button>
            <button 
              onClick={() => handleCTAClick('technical_docs')}
              className="border-2 border-tuggi-primary text-tuggi-primary hover:bg-tuggi-primary hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200"
            >
              {content.technicalDocs}
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ProductHighlights;