import React from 'react';
import { MessageSquare, Users, Lightbulb, ArrowRight } from 'lucide-react';

interface CollaborateSectionProps {
  currentLanguage?: string;
  onCTAClick?: (ctaType: string, language: string) => void;
}

const CollaborateSection: React.FC<CollaborateSectionProps> = ({ 
  currentLanguage = 'PT',
  onCTAClick 
}) => {
  // Localized content
  const getLocalizedContent = (language: string) => {
    const content: Record<string, any> = {
      PT: {
        title: 'Colabore com a Tuggi',
        subtitle: 'Durante a fase beta, você pode ir além de explorar.',
        description: 'No final de cada trajeto, é possível enviar feedback sobre as narrações, sugerir correções e nos ajudar a melhorar os pontos de interesse.',
        closing: 'Essa é uma construção coletiva — e sua participação torna a Tuggi melhor a cada dia.',
        joinBeta: 'Participar do Beta',
        features: [
          {
            icon: 'message',
            title: 'Feedback sobre narrações',
            description: 'Avalie as histórias, sugira melhorias e ajude a aprimorar o conteúdo cultural de cada local.'
          },
          {
            icon: 'lightbulb',
            title: 'Sugestão de correções',
            description: 'Identifique informações imprecisas ou desatualizadas e contribua para manter o conteúdo sempre relevante.'
          },
          {
            icon: 'users',
            title: 'Construção coletiva',
            description: 'Faça parte de uma comunidade que está construindo a maior plataforma de cultura urbana do Brasil.'
          }
        ]
      },
      EN: {
        title: 'Collaborate with Tuggi',
        subtitle: 'During the beta phase, you can go beyond exploring.',
        description: 'At the end of each journey, you can send feedback about the narratives, suggest corrections and help us improve points of interest.',
        closing: 'This is a collective construction — and your participation makes Tuggi better every day.',
        joinBeta: 'Join Beta',
        features: [
          {
            icon: 'message',
            title: 'Narrative feedback',
            description: 'Rate stories, suggest improvements and help enhance the cultural content of each location.'
          },
          {
            icon: 'lightbulb',
            title: 'Correction suggestions',
            description: 'Identify inaccurate or outdated information and contribute to keeping content always relevant.'
          },
          {
            icon: 'users',
            title: 'Collective construction',
            description: 'Be part of a community that is building Brazil\'s largest urban culture platform.'
          }
        ]
      },
      ES: {
        title: 'Colabora con Tuggi',
        subtitle: 'Durante la fase beta, puedes ir más allá de explorar.',
        description: 'Al final de cada trayecto, puedes enviar feedback sobre las narraciones, sugerir correcciones y ayudarnos a mejorar los puntos de interés.',
        closing: 'Esta es una construcción colectiva — y tu participación hace que Tuggi mejore cada día.',
        joinBeta: 'Unirse al Beta',
        features: [
          {
            icon: 'message',
            title: 'Feedback sobre narraciones',
            description: 'Evalúa las historias, sugiere mejoras y ayuda a mejorar el contenido cultural de cada lugar.'
          },
          {
            icon: 'lightbulb',
            title: 'Sugerencias de correcciones',
            description: 'Identifica información inexacta o desactualizada y contribuye a mantener el contenido siempre relevante.'
          },
          {
            icon: 'users',
            title: 'Construcción colectiva',
            description: 'Forma parte de una comunidad que está construyendo la mayor plataforma de cultura urbana de Brasil.'
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
      case 'message':
        return <MessageSquare className="w-8 h-8 text-white" />;
      case 'lightbulb':
        return <Lightbulb className="w-8 h-8 text-white" />;
      case 'users':
        return <Users className="w-8 h-8 text-white" />;
      default:
        return <MessageSquare className="w-8 h-8 text-white" />;
    }
  };

  return (
    <section className="py-12 lg:py-16 xl:py-20 bg-gradient-to-br from-tuggi-primary/5 to-tuggi-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-3 lg:mb-4">
            {content.title}
          </h2>
          <p className="text-base sm:text-lg text-neutral-700 font-medium mb-3 lg:mb-4 max-w-3xl mx-auto">
            {content.subtitle}
          </p>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-4 lg:mb-6 max-w-4xl mx-auto">
            {content.description}
          </p>
          <p className="text-sm sm:text-base text-neutral-700 font-medium max-w-3xl mx-auto">
            {content.closing}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mb-8 lg:mb-10">
          {content.features.map((feature: any, index: number) => (
            <div 
              key={index}
              className="group text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="inline-flex w-14 h-14 rounded-2xl bg-gradient-to-br from-tuggi-primary to-tuggi-primary-dark items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                {getIcon(feature.icon)}
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-neutral-900 mb-3 group-hover:text-tuggi-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button 
            onClick={() => handleCTAClick('join_beta')}
            className="bg-tuggi-primary hover:bg-tuggi-primary-dark text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center space-x-2 group"
          >
            <span>{content.joinBeta}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CollaborateSection; 