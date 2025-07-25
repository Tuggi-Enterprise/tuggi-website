import React from 'react';
import { Download, MapPin, Headphones, Star } from 'lucide-react';
import { layout, gradients } from '../utils/designSystem';

interface HowItWorksSectionProps {
  currentLanguage?: string;
  onCTAClick?: (ctaType: string, language: string) => void;
}

const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ 
  currentLanguage = 'PT',
  onCTAClick 
}) => {
  // Localized content
  const getLocalizedContent = (language: string) => {
    const content: Record<string, any> = {
      PT: {
        title: 'Usar a Tuggi é simples.',
        description: 'Você instala o app, ativa a localização e segue seu caminho — sem rotas fixas nem instruções.\nAs narrações acontecem automaticamente conforme você se movimenta.\nNo final da sessão, você pode avaliar a experiência e nos ajudar a evoluir.',
        steps: [
          {
            number: '01',
            icon: 'download',
            title: 'Instale o app',
            description: 'Baixe gratuitamente na App Store ou Google Play. A instalação é rápida e simples.',
            color: 'from-tuggi-primary to-blue-600'
          },
          {
            number: '02',
            icon: 'location',
            title: 'Ative a localização',
            description: 'Permita que o app saiba onde você está para oferecer conteúdo contextual relevante.',
            color: 'from-tuggi-secondary to-orange-600'
          },
          {
            number: '03',
            icon: 'headphones',
            title: 'Siga seu caminho',
            description: 'Vá para onde quiser. As narrativas surgem automaticamente conforme você se move pela cidade.',
            color: 'from-green-500 to-emerald-600'
          },
          {
            number: '04',
            icon: 'star',
            title: 'Avalie a experiência',
            description: 'No final, compartilhe seu feedback e ajude a Tuggi a evoluir com sua experiência.',
            color: 'from-purple-500 to-violet-600'
          }
        ]
      },
      EN: {
        title: 'Using Tuggi is simple.',
        description: 'You install the app, activate location and follow your path — without fixed routes or instructions.\nNarratives happen automatically as you move.\nAt the end of the session, you can rate the experience and help us evolve.',
        steps: [
          {
            number: '01',
            icon: 'download',
            title: 'Install the app',
            description: 'Download for free from the App Store or Google Play. Installation is quick and simple.',
            color: 'from-tuggi-primary to-blue-600'
          },
          {
            number: '02',
            icon: 'location',
            title: 'Activate location',
            description: 'Allow the app to know where you are to offer relevant contextual content.',
            color: 'from-tuggi-secondary to-orange-600'
          },
          {
            number: '03',
            icon: 'headphones',
            title: 'Follow your path',
            description: 'Go wherever you want. Narratives emerge automatically as you move through the city.',
            color: 'from-green-500 to-emerald-600'
          },
          {
            number: '04',
            icon: 'star',
            title: 'Rate the experience',
            description: 'At the end, share your feedback and help Tuggi evolve with your experience.',
            color: 'from-purple-500 to-violet-600'
          }
        ]
      },
      ES: {
        title: 'Usar Tuggi es simple.',
        description: 'Instalas la app, activas la ubicación y sigues tu camino — sin rutas fijas ni instrucciones.\nLas narraciones suceden automáticamente mientras te mueves.\nAl final de la sesión, puedes evaluar la experiencia y ayudarnos a evolucionar.',
        steps: [
          {
            number: '01',
            icon: 'download',
            title: 'Instala la app',
            description: 'Descarga gratis en App Store o Google Play. La instalación es rápida y simple.',
            color: 'from-tuggi-primary to-blue-600'
          },
          {
            number: '02',
            icon: 'location',
            title: 'Activa la ubicación',
            description: 'Permite que la app sepa dónde estás para ofrecer contenido contextual relevante.',
            color: 'from-tuggi-secondary to-orange-600'
          },
          {
            number: '03',
            icon: 'headphones',
            title: 'Sigue tu camino',
            description: 'Ve a donde quieras. Las narraciones surgen automáticamente mientras te mueves por la ciudad.',
            color: 'from-green-500 to-emerald-600'
          },
          {
            number: '04',
            icon: 'star',
            title: 'Evalúa la experiencia',
            description: 'Al final, comparte tu feedback y ayuda a Tuggi a evolucionar con tu experiencia.',
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
      case 'download':
        return <Download className="w-8 h-8 text-white" />;
      case 'location':
        return <MapPin className="w-8 h-8 text-white" />;
      case 'headphones':
        return <Headphones className="w-8 h-8 text-white" />;
      case 'star':
        return <Star className="w-8 h-8 text-white" />;
      default:
        return <Download className="w-8 h-8 text-white" />;
    }
  };

  return (
    <section className={`${layout.section.base} bg-white`}>
      <div className={layout.container.base}>
        {/* Section Header */}
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-4 lg:mb-6">
            {content.title}
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 max-w-4xl mx-auto leading-relaxed whitespace-pre-line">
            {content.description}
          </p>
        </div>

        {/* Steps */}
        <div className={`${layout.grid['4']} gap-4 lg:gap-6`}>
          {content.steps.map((step: any, index: number) => (
            <div 
              key={index}
              className="group relative"
            >
              {/* Step Number */}
              <div className="text-5xl font-bold text-neutral-100 absolute -top-3 left-0 z-0">
                {step.number}
              </div>
              
              {/* Card */}
              <div className="relative z-10 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group-hover:border-tuggi-primary/20" style={{ background: gradients.subtle }}>
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl`} style={{ background: gradients.ocean }}>
                  {getIcon(step.icon)}
                </div>

                {/* Content */}
                <h3 className="text-lg lg:text-xl font-bold text-neutral-900 mb-3 group-hover:text-tuggi-primary transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connecting Line (except for last item) */}
              {index < content.steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-tuggi-primary/40 to-transparent transform -translate-y-1/2 z-0"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection; 