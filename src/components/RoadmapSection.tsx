import React from 'react';
import { Globe, Crown, Route, Mic, ArrowRight } from 'lucide-react';
import StatusBadge from './StatusBadge';

interface RoadmapSectionProps {
  currentLanguage?: string;
  onCTAClick?: (ctaType: string, language: string) => void;
}

const RoadmapSection: React.FC<RoadmapSectionProps> = ({ 
  currentLanguage = 'PT',
  onCTAClick 
}) => {
  // Localized content
  const getLocalizedContent = (language: string) => {
    const content: Record<string, any> = {
      PT: {
        title: 'Estamos apenas começando.',
        description: 'Nos próximos meses, a Tuggi vai ganhar suporte a outros idiomas, planos premium com novos recursos e formas de contribuição mais diretas dos usuários.',
        subtitle: 'Também teremos roteiros culturais temáticos, vozes personalizadas e novas formas de explorar com ainda mais profundidade.',
        cta: 'Seja um dos primeiros',
        features: [
          {
            icon: 'globe',
            title: 'Suporte multilíngue',
            description: 'Narrativas em inglês, espanhol, francês e outros idiomas para turistas e imigrantes.',
            timeline: 'Próximos meses',
            color: 'from-tuggi-primary to-blue-600'
          },
          {
            icon: 'crown',
            title: 'Planos premium',
            description: 'Recursos exclusivos, conteúdo especializado e experiências personalizadas para assinantes.',
            timeline: 'Em breve',
            color: 'from-tuggi-secondary to-orange-600'
          },
          {
            icon: 'route',
            title: 'Roteiros temáticos',
            description: 'Percursos culturais organizados por temas: arquitetura, gastronomia, música, história.',
            timeline: 'Em desenvolvimento',
            color: 'from-green-500 to-emerald-600'
          },
          {
            icon: 'mic',
            title: 'Vozes personalizadas',
            description: 'Escolha entre diferentes narradores e estilos de narrativa para sua experiência ideal.',
            timeline: 'Planejado',
            color: 'from-purple-500 to-violet-600'
          }
        ]
      },
      EN: {
        title: 'We\'re just getting started.',
        description: 'In the coming months, Tuggi will gain support for other languages, premium plans with new features and more direct ways for users to contribute.',
        subtitle: 'We\'ll also have thematic cultural routes, personalized voices and new ways to explore with even more depth.',
        cta: 'Be one of the first',
        features: [
          {
            icon: 'globe',
            title: 'Multilingual support',
            description: 'Narratives in English, Spanish, French and other languages for tourists and immigrants.',
            timeline: 'Coming months',
            color: 'from-tuggi-primary to-blue-600'
          },
          {
            icon: 'crown',
            title: 'Premium plans',
            description: 'Exclusive features, specialized content and personalized experiences for subscribers.',
            timeline: 'Coming soon',
            color: 'from-tuggi-secondary to-orange-600'
          },
          {
            icon: 'route',
            title: 'Thematic routes',
            description: 'Cultural routes organized by themes: architecture, gastronomy, music, history.',
            timeline: 'In development',
            color: 'from-green-500 to-emerald-600'
          },
          {
            icon: 'mic',
            title: 'Personalized voices',
            description: 'Choose between different narrators and narrative styles for your ideal experience.',
            timeline: 'Planned',
            color: 'from-purple-500 to-violet-600'
          }
        ]
      },
      ES: {
        title: 'Solo estamos empezando.',
        description: 'En los próximos meses, Tuggi ganará soporte para otros idiomas, planes premium con nuevas funciones y formas más directas de contribución de los usuarios.',
        subtitle: 'También tendremos rutas culturales temáticas, voces personalizadas y nuevas formas de explorar con aún más profundidad.',
        cta: 'Sé uno de los primeros',
        features: [
          {
            icon: 'globe',
            title: 'Soporte multilingüe',
            description: 'Narrativas en inglés, español, francés y otros idiomas para turistas e inmigrantes.',
            timeline: 'Próximos meses',
            color: 'from-tuggi-primary to-blue-600'
          },
          {
            icon: 'crown',
            title: 'Planes premium',
            description: 'Funciones exclusivas, contenido especializado y experiencias personalizadas para suscriptores.',
            timeline: 'Próximamente',
            color: 'from-tuggi-secondary to-orange-600'
          },
          {
            icon: 'route',
            title: 'Rutas temáticas',
            description: 'Rutas culturales organizadas por temas: arquitectura, gastronomía, música, historia.',
            timeline: 'En desarrollo',
            color: 'from-green-500 to-emerald-600'
          },
          {
            icon: 'mic',
            title: 'Voces personalizadas',
            description: 'Elige entre diferentes narradores y estilos narrativos para tu experiencia ideal.',
            timeline: 'Planificado',
            color: 'from-purple-500 to-violet-600'
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

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'globe':
        return <Globe className="w-8 h-8 text-white" />;
      case 'crown':
        return <Crown className="w-8 h-8 text-white" />;
      case 'route':
        return <Route className="w-8 h-8 text-white" />;
      case 'mic':
        return <Mic className="w-8 h-8 text-white" />;
      default:
        return <Globe className="w-8 h-8 text-white" />;
    }
  };

  return (
    <section className="py-12 lg:py-16 xl:py-20 bg-gradient-to-br from-neutral-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-4 lg:mb-6">
            {content.title}
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mb-3 lg:mb-4">
              {content.description}
            </p>
            <p className="text-sm sm:text-base text-neutral-700 font-medium leading-relaxed">
              {content.subtitle}
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 xl:gap-8 mb-8 lg:mb-12">
          {content.features.map((feature: any, index: number) => (
            <div 
              key={index}
              className="group relative bg-white border border-neutral-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Timeline Badge */}
              <div className="absolute top-4 right-4">
                <StatusBadge 
                  status={feature.timeline === 'Disponível' ? 'success' : 'pending'}
                  text={feature.timeline}
                  size="sm"
                />
              </div>

              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {getIcon(feature.icon)}
              </div>

              {/* Content */}
              <h3 className="text-lg lg:text-xl font-bold text-neutral-900 mb-3 group-hover:text-tuggi-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-tuggi-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button 
            onClick={() => handleCTAClick('early_access')}
            className="bg-tuggi-primary hover:bg-tuggi-primary-dark text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center space-x-2 group"
          >
            <span>{content.cta}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;