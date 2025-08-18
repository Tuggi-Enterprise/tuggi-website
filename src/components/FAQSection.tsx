import React from 'react';

interface FAQSectionProps {
  currentLanguage?: string;
}

const FAQSection: React.FC<FAQSectionProps> = ({ 
  currentLanguage = 'PT' 
}) => {
  const getLocalizedContent = (language: string) => {
    const content: Record<string, any> = {
      PT: {
        title: 'Perguntas Frequentes',
        subtitle: 'Tire suas dúvidas sobre a Tuggi',
        faqs: [
          {
            question: 'Preciso seguir um roteiro?',
            answer: 'Não. A Tuggi funciona no seu ritmo — no trajeto ou pelo mapa.'
          },
          {
            question: 'Quais idiomas estão disponíveis?',
            answer: 'PT-BR, ES-ES e EN-US. Mais idiomas em breve.'
          },
          {
            question: 'Funciona sem internet?',
            answer: 'Parte do áudio é cacheada, mas recomendamos conexão para atualizações.'
          },
          {
            question: 'É seguro usar dirigindo?',
            answer: 'Evite interações enquanto dirige. As narrações tocam automaticamente.'
          },
          {
            question: 'Como a Tuggi garante fatos corretos?',
            answer: 'Aplicamos checagens automáticas de datas/entidades e curadoria contínua.'
          }
        ]
      },
      EN: {
        title: 'Frequently Asked Questions',
        subtitle: 'Get answers about Tuggi',
        faqs: [
          {
            question: 'Do I need to follow a route?',
            answer: 'No. Tuggi works at your pace — on the go or through the map.'
          },
          {
            question: 'What languages are available?',
            answer: 'PT-BR, ES-ES and EN-US. More languages coming soon.'
          },
          {
            question: 'Does it work without internet?',
            answer: 'Part of the audio is cached, but we recommend connection for updates.'
          },
          {
            question: 'Is it safe to use while driving?',
            answer: 'Avoid interactions while driving. Narrations play automatically.'
          },
          {
            question: 'How does Tuggi ensure correct facts?',
            answer: 'We apply automatic checks on dates/entities and continuous curation.'
          }
        ]
      },
      ES: {
        title: 'Preguntas Frecuentes',
        subtitle: 'Resuelve tus dudas sobre Tuggi',
        faqs: [
          {
            question: '¿Necesito seguir una ruta?',
            answer: 'No. Tuggi funciona a tu ritmo — en el trayecto o por el mapa.'
          },
          {
            question: '¿Qué idiomas están disponibles?',
            answer: 'PT-BR, ES-ES y EN-US. Más idiomas próximamente.'
          },
          {
            question: '¿Funciona sin internet?',
            answer: 'Parte del audio está en caché, pero recomendamos conexión para actualizaciones.'
          },
          {
            question: '¿Es seguro usar mientras conduces?',
            answer: 'Evita interacciones mientras conduces. Las narraciones se reproducen automáticamente.'
          },
          {
            question: '¿Cómo garantiza Tuggi hechos correctos?',
            answer: 'Aplicamos verificaciones automáticas de fechas/entidades y curación continua.'
          }
        ]
      }
    };
    
    return content[language] || content.PT;
  };

  const content = getLocalizedContent(currentLanguage);
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {content.title}
          </h2>
          <p className="text-lg text-gray-600">
            {content.subtitle}
          </p>
        </div>
        
        <div className="space-y-4">
          {content.faqs.map((faq: any, index: number) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-medium text-gray-900 pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-500 transform transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;