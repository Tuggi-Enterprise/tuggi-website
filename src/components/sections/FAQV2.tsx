import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { layout } from '../../utils/designSystem';

interface FAQItem {
  key: string;
  q: string;
  a: string[];
}

interface FAQV2Props {
  currentLanguage?: string;
}

const FAQV2: React.FC<FAQV2Props> = ({ 
  currentLanguage = 'PT'
}) => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  // Localized content
  const getLocalizedContent = (language: string) => {
    const content: Record<string, any> = {
      PT: {
        title: 'Dúvidas frequentes',
        subtitle: 'Respostas para as principais perguntas sobre o Tuggi.',
        faqs: [
          {
            key: 'safe_driving',
            q: 'É seguro usar dirigindo?',
            a: [
              'Sim. O Tuggi é hands-free: as narrações tocam automaticamente por geolocalização.',
              'Funciona em segundo plano junto do Waze/Google Maps, sem exigir toques na tela.',
              'Use o celular em suporte e mantenha o volume em nível confortável.'
            ]
          },
          {
            key: 'who_is_for',
            q: 'Para quem é indicado?',
            a: [
              'Motoristas profissionais: experiência diferenciada que aumenta engajamento e avaliações; áudio automático e seguro; compatível com seu app de navegação.',
              'Turistas: descoberta espontânea sem roteiros rígidos; contexto cultural confiável; conteúdo em 3 idiomas.'
            ]
          },
          {
            key: 'offline',
            q: 'Funciona sem internet?',
            a: [
              'Parte do conteúdo é cacheada e continua disponível sem sinal.',
              'O modo offline completo está em desenvolvimento; em áreas sem cobertura, algumas narrativas podem não tocar.'
            ]
          },
          {
            key: 'battery',
            q: 'Consome muita bateria?',
            a: [
              'Não. O consumo é otimizado para uso contínuo de GPS e áudio.',
              'Dicas: usar carregador veicular, reduzir brilho e fechar apps em segundo plano.'
            ]
          },
          {
            key: 'data_usage',
            q: 'Consome muitos dados (internet)?',
            a: [
              'Baixo. As narrativas são curtas e utilizam compactação e pré-carregamento quando possível.',
              'O consumo é semelhante ao de um app de navegação com voz.'
            ]
          },
          {
            key: 'privacy',
            q: 'Meus dados estão seguros?',
            a: [
              'Sim. Seguimos boas práticas de privacidade e segurança.',
              'Não gravamos sua voz. Coletamos apenas dados necessários ao funcionamento e melhoria do serviço.',
              'Detalhes na Política de Privacidade.'
            ]
          },
          {
            key: 'no_ads',
            q: 'O app tem anúncios?',
            a: [
              'Não exibimos anúncios nem conteúdo promocional em narrativas.',
              'Foco exclusivo na experiência cultural.'
            ]
          },
          {
            key: 'pricing',
            q: 'É gratuito?',
            a: [
              'Durante a fase beta, o Tuggi é 100% grátis.',
              'Planos pagos podem ser oferecidos no futuro; avisaremos com antecedência.',
              'Baixe agora na seção de download acima.'
            ]
          },
          {
            key: 'coverage',
            q: 'Onde está disponível?',
            a: [
              'Piloto ativo em São Paulo e Rio de Janeiro.',
              'Estamos expandindo gradualmente; acompanhe atualizações no site e nas redes sociais.'
            ]
          }
        ]
      },
      EN: {
        title: 'Frequently asked questions',
        subtitle: 'Answers to the main questions about Tuggi.',
        faqs: [
          {
            key: 'safe_driving',
            q: 'Is it safe to use while driving?',
            a: [
              'Yes. Tuggi is hands-free: narrations play automatically through geolocation.',
              'Works in the background alongside Waze/Google Maps, without requiring screen touches.',
              'Use your phone in a mount and keep the volume at a comfortable level.'
            ]
          },
          {
            key: 'who_is_for',
            q: 'Who is it for?',
            a: [
              'Professional drivers: differentiated experience that increases engagement and ratings; automatic and safe audio; compatible with your navigation app.',
              'Tourists: spontaneous discovery without rigid itineraries; reliable cultural context; content in 3 languages.'
            ]
          },
          {
            key: 'offline',
            q: 'Does it work without internet?',
            a: [
              'Part of the content is cached and remains available without signal.',
              'Complete offline mode is in development; in areas without coverage, some narratives may not play.'
            ]
          },
          {
            key: 'battery',
            q: 'Does it consume a lot of battery?',
            a: [
              'No. Consumption is optimized for continuous GPS and audio use.',
              'Tips: use car charger, reduce brightness and close background apps.'
            ]
          },
          {
            key: 'data_usage',
            q: 'Does it consume a lot of data (internet)?',
            a: [
              'Low. Narratives are short and use compression and pre-loading when possible.',
              'Consumption is similar to a voice navigation app.'
            ]
          },
          {
            key: 'privacy',
            q: 'Is my data safe?',
            a: [
              'Yes. We follow good privacy and security practices.',
              'We do not record your voice. We only collect data necessary for operation and service improvement.',
              'Details in the Privacy Policy.'
            ]
          },
          {
            key: 'no_ads',
            q: 'Does the app have ads?',
            a: [
              'We do not display ads or promotional content in narratives.',
              'Exclusive focus on cultural experience.'
            ]
          },
          {
            key: 'pricing',
            q: 'Is it free?',
            a: [
              'During the beta phase, Tuggi is 100% free.',
              'Paid plans may be offered in the future; we will notify in advance.'
            ]
          },
          {
            key: 'coverage',
            q: 'Where is it available?',
            a: [
              'Active pilot in São Paulo and Rio de Janeiro.',
              'We are expanding gradually; follow updates on the website and social media.'
            ]
          }
        ]
      },
      ES: {
        title: 'Preguntas frecuentes',
        subtitle: 'Respuestas a las principales preguntas sobre Tuggi.',
        faqs: [
          {
            key: 'safe_driving',
            q: '¿Es seguro usar mientras conduces?',
            a: [
              'Sí. Tuggi es manos libres: las narraciones se reproducen automáticamente por geolocalización.',
              'Funciona en segundo plano junto con Waze/Google Maps, sin requerir toques en pantalla.',
              'Usa el teléfono en un soporte y mantén el volumen en un nivel cómodo.'
            ]
          },
          {
            key: 'who_is_for',
            q: '¿Para quién está indicado?',
            a: [
              'Conductores profesionales: experiencia diferenciada que aumenta el compromiso y las calificaciones; audio automático y seguro; compatible con tu app de navegación.',
              'Turistas: descubrimiento espontáneo sin itinerarios rígidos; contexto cultural confiable; contenido en 3 idiomas.'
            ]
          },
          {
            key: 'offline',
            q: '¿Funciona sin internet?',
            a: [
              'Parte del contenido está en caché y permanece disponible sin señal.',
              'El modo offline completo está en desarrollo; en áreas sin cobertura, algunas narraciones pueden no reproducirse.'
            ]
          },
          {
            key: 'battery',
            q: '¿Consume mucha batería?',
            a: [
              'No. El consumo está optimizado para uso continuo de GPS y audio.',
              'Consejos: usar cargador vehicular, reducir brillo y cerrar apps en segundo plano.'
            ]
          },
          {
            key: 'data_usage',
            q: '¿Consume muchos datos (internet)?',
            a: [
              'Bajo. Las narraciones son cortas y utilizan compresión y precarga cuando es posible.',
              'El consumo es similar al de una app de navegación con voz.'
            ]
          },
          {
            key: 'privacy',
            q: '¿Mis datos están seguros?',
            a: [
              'Sí. Seguimos buenas prácticas de privacidad y seguridad.',
              'No grabamos tu voz. Solo recopilamos datos necesarios para el funcionamiento y mejora del servicio.',
              'Detalles en la Política de Privacidad.'
            ]
          },
          {
            key: 'no_ads',
            q: '¿La app tiene anuncios?',
            a: [
              'No mostramos anuncios ni contenido promocional en narraciones.',
              'Enfoque exclusivo en la experiencia cultural.'
            ]
          },
          {
            key: 'pricing',
            q: '¿Es gratuito?',
            a: [
              'Durante la fase beta, Tuggi es 100% gratuito.',
              'Los planes pagos pueden ofrecerse en el futuro; avisaremos con anticipación.'
            ]
          },
          {
            key: 'coverage',
            q: '¿Dónde está disponible?',
            a: [
              'Piloto activo en São Paulo y Río de Janeiro.',
              'Estamos expandiendo gradualmente; sigue las actualizaciones en el sitio web y redes sociales.'
            ]
          }
        ],
        // Contact section
        contact_question: 'Mais perguntas? Fale conosco.',
        contact_button: 'Enviar e-mail'
      },
      EN: {
        title: 'Frequently asked questions',
        subtitle: 'Answers to the main questions about Tuggi.',
        faqs: [
          {
            key: 'safe_driving',
            q: 'Is it safe to use while driving?',
            a: [
              'Yes. Tuggi is hands-free: narrations play automatically through geolocation.',
              'Works in the background alongside Waze/Google Maps, without requiring screen touches.',
              'Use your phone in a mount and keep the volume at a comfortable level.'
            ]
          },
          {
            key: 'who_is_for',
            q: 'Who is it for?',
            a: [
              'Professional drivers: differentiated experience that increases engagement and ratings; automatic and safe audio; compatible with your navigation app.',
              'Tourists: spontaneous discovery without rigid itineraries; reliable cultural context; content in 3 languages.'
            ]
          },
          {
            key: 'offline',
            q: 'Does it work without internet?',
            a: [
              'Part of the content is cached and remains available without signal.',
              'Complete offline mode is in development; in areas without coverage, some narratives may not play.'
            ]
          },
          {
            key: 'battery',
            q: 'Does it consume a lot of battery?',
            a: [
              'No. Consumption is optimized for continuous GPS and audio use.',
              'Tips: use car charger, reduce brightness and close background apps.'
            ]
          },
          {
            key: 'data_usage',
            q: 'Does it consume a lot of data (internet)?',
            a: [
              'Low. Narratives are short and use compression and pre-loading when possible.',
              'Consumption is similar to a voice navigation app.'
            ]
          },
          {
            key: 'privacy',
            q: 'Is my data safe?',
            a: [
              'Yes. We follow good privacy and security practices.',
              'We do not record your voice. We only collect data necessary for operation and service improvement.',
              'Details in the Privacy Policy.'
            ]
          },
          {
            key: 'no_ads',
            q: 'Does the app have ads?',
            a: [
              'We do not display ads or promotional content in narratives.',
              'Exclusive focus on cultural experience.'
            ]
          },
          {
            key: 'pricing',
            q: 'Is it free?',
            a: [
              'During the beta phase, Tuggi is 100% free.',
              'Paid plans may be offered in the future; we will notify in advance.'
            ]
          },
          {
            key: 'coverage',
            q: 'Where is it available?',
            a: [
              'Active pilot in São Paulo and Rio de Janeiro.',
              'We are expanding gradually; follow updates on the website and social media.'
            ]
          }
        ],
        // Contact section
        contact_question: 'More questions? Contact us.',
        contact_button: 'Send email'
      },
      ES: {
        title: 'Preguntas frecuentes',
        subtitle: 'Respuestas a las principales preguntas sobre Tuggi.',
        faqs: [
          {
            key: 'safe_driving',
            q: '¿Es seguro usar mientras conduces?',
            a: [
              'Sí. Tuggi es manos libres: las narraciones se reproducen automáticamente por geolocalización.',
              'Funciona en segundo plano junto con Waze/Google Maps, sin requerir toques en pantalla.',
              'Usa el teléfono en un soporte y mantén el volumen en un nivel cómodo.'
            ]
          },
          {
            key: 'who_is_for',
            q: '¿Para quién está indicado?',
            a: [
              'Conductores profesionales: experiencia diferenciada que aumenta el compromiso y las calificaciones; audio automático y seguro; compatible con tu app de navegación.',
              'Turistas: descubrimiento espontáneo sin itinerarios rígidos; contexto cultural confiable; contenido en 3 idiomas.'
            ]
          },
          {
            key: 'offline',
            q: '¿Funciona sin internet?',
            a: [
              'Parte del contenido está en caché y permanece disponible sin señal.',
              'El modo offline completo está en desarrollo; en áreas sin cobertura, algunas narraciones pueden no reproducirse.'
            ]
          },
          {
            key: 'battery',
            q: '¿Consume mucha batería?',
            a: [
              'No. El consumo está optimizado para uso continuo de GPS y audio.',
              'Consejos: usar cargador vehicular, reducir brillo y cerrar apps en segundo plano.'
            ]
          },
          {
            key: 'data_usage',
            q: '¿Consume muchos datos (internet)?',
            a: [
              'Bajo. Las narraciones son cortas y utilizan compresión y precarga cuando es posible.',
              'El consumo es similar al de una app de navegación con voz.'
            ]
          },
          {
            key: 'privacy',
            q: '¿Mis datos están seguros?',
            a: [
              'Sí. Seguimos buenas prácticas de privacidad y seguridad.',
              'No grabamos tu voz. Solo recopilamos datos necesarios para el funcionamiento y mejora del servicio.',
              'Detalles en la Política de Privacidad.'
            ]
          },
          {
            key: 'no_ads',
            q: '¿La app tiene anuncios?',
            a: [
              'No mostramos anuncios ni contenido promocional en narraciones.',
              'Enfoque exclusivo en la experiencia cultural.'
            ]
          },
          {
            key: 'pricing',
            q: '¿Es gratuito?',
            a: [
              'Durante la fase beta, Tuggi es 100% gratuito.',
              'Los planes pagos pueden ofrecerse en el futuro; avisaremos con anticipación.'
            ]
          },
          {
            key: 'coverage',
            q: '¿Dónde está disponible?',
            a: [
              'Piloto activo en São Paulo y Río de Janeiro.',
              'Estamos expandiendo gradualmente; sigue las actualizaciones en el sitio web y redes sociales.'
            ]
          }
        ],
        // Contact section
        contact_question: '¿Más preguntas? Contáctanos.',
        contact_button: 'Enviar correo'
      }
    };
    return content[language] || content['PT'];
  };

  const content = getLocalizedContent(currentLanguage);

  const toggleItem = (itemKey: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(itemKey)) {
      newOpenItems.delete(itemKey);
    } else {
      newOpenItems.add(itemKey);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section 
      className="py-12 lg:py-16"
      style={{ background: 'var(--color-bg-alt)' }}
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 
            className="text-3xl lg:text-4xl font-bold mb-4"
            style={{ 
              color: 'var(--color-text)',
              fontFamily: 'var(--font-sans)',
              fontSize: '32px',
              fontWeight: '700'
            }}
          >
            {content.title}
          </h2>
          <p 
            className="text-lg"
            style={{ 
              color: 'var(--color-text-muted)',
              fontFamily: 'var(--font-sans)'
            }}
          >
            {content.subtitle}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {content.faqs.map((faq: FAQItem, index: number) => (
              <div 
                key={faq.key}
                className="bg-white rounded-xl overflow-hidden"
                style={{
                  background: '#fff',
                  borderRadius: '12px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                  padding: '16px 18px'
                }}
              >
                <button
                  onClick={() => toggleItem(faq.key)}
                  className="w-full text-left flex items-center justify-between hover:bg-neutral-50 transition-colors duration-200"
                  aria-expanded={openItems.has(faq.key)}
                  aria-controls={`faq-answer-${faq.key}`}
                >
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{
                        background: 'rgba(0,168,232,0.10)',
                        color: 'var(--color-primary)',
                        borderRadius: '999px'
                      }}
                    >
                      <HelpCircle className="w-4 h-4" />
                    </div>
                    <h3 
                      className="font-semibold pr-4"
                      style={{ 
                        fontWeight: '600',
                        color: 'var(--color-text)'
                      }}
                    >
                      {faq.q}
                    </h3>
                  </div>
                  {openItems.has(faq.key) ? (
                    <ChevronUp className="w-5 h-5 text-neutral-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-neutral-500 flex-shrink-0" />
                  )}
                </button>
                
                {openItems.has(faq.key) && (
                  <div 
                    id={`faq-answer-${faq.key}`}
                    role="region"
                    aria-labelledby={`faq-question-${faq.key}`}
                    className="mt-4"
                    style={{ paddingTop: '8px' }}
                  >
                    <div className="space-y-2">
                      {faq.a.map((answer: string, answerIndex: number) => (
                        <p 
                          key={answerIndex}
                          className="leading-relaxed"
                          style={{ 
                            color: 'var(--color-text-muted)',
                            lineHeight: '1.6'
                          }}
                        >
                          {answer}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center mt-12">
          <p 
            className="text-sm mb-4"
            style={{ 
              color: 'var(--color-text-muted)',
              fontFamily: 'var(--font-sans)',
              fontSize: '14px'
            }}
          >
            {content.contact_question}
          </p>
          <a 
            href="mailto:contato@tuggi.com.br"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-colors duration-200"
            style={{ 
              background: 'var(--color-primary)',
              color: '#fff',
              borderRadius: '12px',
              padding: '12px 24px',
              fontSize: '14px',
              fontWeight: '500'
            }}
          >
            {content.contact_button}
          </a>
        </div>

      </div>
    </section>
  );
};

export default FAQV2;
