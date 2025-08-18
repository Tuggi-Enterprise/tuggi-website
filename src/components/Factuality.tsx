import React from 'react';
import { Shield, CheckCircle, Search, MessageCircle } from 'lucide-react';
import { layout } from '../utils/designSystem';

interface FactualityProps {
  currentLanguage?: string;
}

const Factuality: React.FC<FactualityProps> = ({ 
  currentLanguage = 'PT' 
}) => {
  // Localized content
  const getLocalizedContent = (language: string) => {
    const content: Record<string, any> = {
      PT: {
        title: 'Conteúdo verificado',
        text: 'As descrições da Tuggi passam por verificação automática de fatos — como datas, nomes e eventos — cruzando múltiplas fontes confiáveis. Nosso objetivo é oferecer informação interessante, contextual e alicerçada em evidências.',
        note: 'A curadoria é contínua. Caso encontre algo que possa melhorar, envie seu review no app.'
      },
      EN: {
        title: 'Verified content',
        text: 'Tuggi descriptions undergo automatic fact-checking — such as dates, names and events — cross-referencing multiple reliable sources. Our goal is to offer interesting, contextual information grounded in evidence.',
        note: 'Curation is ongoing. If you find something that could be improved, send your review in the app.'
      },
      ES: {
        title: 'Contenido verificado',
        text: 'Las descripciones de Tuggi pasan por verificación automática de hechos — como fechas, nombres y eventos — cruzando múltiples fuentes confiables. Nuestro objetivo es ofrecer información interesante, contextual y basada en evidencias.',
        note: 'La curaduría es continua. Si encuentras algo que pueda mejorar, envía tu reseña en la app.'
      }
    };
    return content[language] || content['PT'];
  };

  const content = getLocalizedContent(currentLanguage);

  const features = [
    {
      icon: <Search className="w-6 h-6" />,
      title: currentLanguage === 'PT' ? 'Verificação automática' : currentLanguage === 'ES' ? 'Verificación automática' : 'Automatic verification',
      description: currentLanguage === 'PT' ? 'Cruzamento de múltiplas fontes' : currentLanguage === 'ES' ? 'Cruce de múltiples fuentes' : 'Cross-referencing multiple sources'
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: currentLanguage === 'PT' ? 'Fontes confiáveis' : currentLanguage === 'ES' ? 'Fuentes confiables' : 'Reliable sources',
      description: currentLanguage === 'PT' ? 'Informação baseada em evidências' : currentLanguage === 'ES' ? 'Información basada en evidencias' : 'Evidence-based information'
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: currentLanguage === 'PT' ? 'Curadoria contínua' : currentLanguage === 'ES' ? 'Curaduría continua' : 'Continuous curation',
      description: currentLanguage === 'PT' ? 'Melhorias baseadas no feedback' : currentLanguage === 'ES' ? 'Mejoras basadas en feedback' : 'Feedback-based improvements'
    }
  ];

  return (
    <section className={`${layout.section.base} bg-gradient-to-br from-tuggi-primary/5 via-white to-tuggi-secondary/5`}>
      <div className={layout.container.base}>
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-tuggi-primary/10 text-tuggi-primary px-4 py-2 rounded-full mb-6">
            <Shield className="w-5 h-5" />
            <span className="font-semibold text-sm">{content.title}</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-8">
            {content.title}
          </h2>
          
          <p className="text-xl text-neutral-700 leading-relaxed max-w-4xl mx-auto mb-12">
            {content.text}
          </p>
          
          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-tuggi-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-tuggi-primary">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="font-bold text-neutral-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* Note */}
          <div className="bg-tuggi-primary/5 border border-tuggi-primary/20 rounded-2xl p-6 max-w-3xl mx-auto">
            <div className="flex items-start gap-3">
              <MessageCircle className="w-5 h-5 text-tuggi-primary flex-shrink-0 mt-0.5" />
              <p className="text-tuggi-primary font-medium text-left">
                {content.note}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Factuality;