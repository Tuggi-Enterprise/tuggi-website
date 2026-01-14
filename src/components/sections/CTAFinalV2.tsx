import React from 'react';
import { Download, ArrowRight, CheckCircle } from 'lucide-react';

interface CTAFinalV2Props {
  currentLanguage?: string;
  onCTAClick?: (ctaType: string, position?: string) => void;
}

const CTAFinalV2: React.FC<CTAFinalV2Props> = ({ 
  currentLanguage = 'PT',
  onCTAClick 
}) => {
  // Localized content
  const getLocalizedContent = (language: string) => {
    const content: Record<string, any> = {
      PT: {
        title: 'Dirija com o seu novo copiloto cultural.',
        subtitle: 'Ouça as histórias da cidade e descubra o mundo ao seu redor sem tirar os olhos da estrada.',
        ctaPrimary: 'Baixar no iOS',
        ctaSecondary: 'Baixar no Android',
        features: [
          'Narração automática',
          'Foco na direção',
          'Uso mãos livres'
        ],
        socialProof: '⭐ 4.8 de avaliação • Disponível nas principais lojas',
        ariaLabelIOS: 'Baixar Tuggi para iOS',
        ariaLabelAndroid: 'Baixar Tuggi para Android'
      },
      EN: {
        title: 'Drive with your new cultural copilot.',
        subtitle: 'Listen to the city\'s stories and discover the world around you without taking your eyes off the road.',
        ctaPrimary: 'Download on iOS',
        ctaSecondary: 'Download on Android',
        features: [
          'Automatic narration',
          'Focus on driving',
          'Hands-free use'
        ],
        socialProof: '⭐ 4.8 rating • Available in major stores',
        ariaLabelIOS: 'Download Tuggi for iOS',
        ariaLabelAndroid: 'Download Tuggi for Android'
      },
      ES: {
        title: 'Conduce con tu nuevo copiloto cultural.',
        subtitle: 'Escucha las historias de la ciudad y descubre el mundo que te rodea sin quitar la vista de la carretera.',
        ctaPrimary: 'Descargar en iOS',
        ctaSecondary: 'Descargar en Android',
        features: [
          'Narración automática',
          'Foco en la conducción',
          'Uso manos libres'
        ],
        socialProof: '⭐ 4.8 de calificación • Disponible en las principales tiendas',
        ariaLabelIOS: 'Descargar Tuggi para iOS',
        ariaLabelAndroid: 'Descargar Tuggi para Android'
      }
    };
    return content[language] || content['PT'];
  };

  const content = getLocalizedContent(currentLanguage);

  const handleCTAClick = (ctaType: string) => {
    console.log('CTAFinalV2 handleCTAClick called with:', ctaType);
    console.log('CTAFinalV2 onCTAClick exists:', !!onCTAClick);
    if (onCTAClick) {
      onCTAClick(ctaType, 'final_cta');
    } else {
      console.error('CTAFinalV2 onCTAClick is not defined!');
    }
  };

  return (
    <section 
      className="relative overflow-hidden"
      data-section="final-cta"
      style={{ 
        background: 'linear-gradient(180deg, rgba(0,168,232,0.9) 0%, rgba(0,143,209,0.9) 100%), url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1200 600\'%3E%3Cdefs%3E%3Cpattern id=\'car\' patternUnits=\'userSpaceOnUse\' width=\'200\' height=\'100\'%3E%3Crect width=\'200\' height=\'100\' fill=\'%23f3f4f6\'/%3E%3Cpath d=\'M50 60 L150 60 L150 80 L50 80 Z\' fill=\'%23e5e7eb\'/%3E%3Ccircle cx=\'70\' cy=\'80\' r=\'8\' fill=\'%23d1d5db\'/%3E%3Ccircle cx=\'130\' cy=\'80\' r=\'8\' fill=\'%23d1d5db\'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\'1200\' height=\'600\' fill=\'url(%23car)\' opacity=\'0.1\'/%3E%3C/svg%3E")',
        paddingBlock: '120px'
      }}
    >
      {/* Top White Curve */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 fill-white">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {content.title}
          </h2>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto mb-10">
            {content.subtitle}
          </p>
          
          {/* Features - Only 2 badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {content.features.map((feature: string, index: number) => (
              <div key={index} className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium">
                <CheckCircle className="w-4 h-4" />
                {feature}
              </div>
            ))}
          </div>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-10">
            <button 
              onClick={() => {
                console.log('CTAFinal iOS button clicked!');
                handleCTAClick('ios_download');
              }}
              className="group bg-white text-tuggi-primary px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 inline-flex items-center justify-center gap-3 hover:bg-gray-50 hover:scale-105 transform shadow-lg min-h-[56px]"
              aria-label={content.ariaLabelIOS}
              style={{ minHeight: '56px' }}
            >
              <Download className="w-5 h-5" />
              <span>{content.ctaPrimary}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            
            <button 
              onClick={() => {
                console.log('CTAFinal Android button clicked!');
                handleCTAClick('google_play_download');
              }}
              className="group bg-tuggi-primary/20 text-white border-2 border-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 inline-flex items-center justify-center gap-3 hover:bg-white hover:text-tuggi-primary hover:scale-105 transform min-h-[56px]"
              aria-label={content.ariaLabelAndroid}
              style={{ minHeight: '56px' }}
            >
              <Download className="w-5 h-5" />
              <span>{content.ctaSecondary}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>

          {/* Social Proof */}
          <div className="text-white/90 text-sm">
            {content.socialProof}
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 fill-white">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default CTAFinalV2;
