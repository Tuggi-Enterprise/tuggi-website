import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

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
            q: 'É seguro usar enquanto dirijo?',
            a: [
              'Sim. O Tuggi foi desenhado para ser hands-free: as histórias tocam automaticamente por geolocalização.',
              'Ele funciona em segundo plano junto ao seu app de navegação (Waze, Google Maps), sem exigir interação com a tela.',
              'Mantenha sempre o foco na estrada e use o celular em um suporte veicular.'
            ]
          },
          {
            key: 'who_is_for',
            q: 'Para quem o Tuggi é indicado?',
            a: [
              'Para qualquer pessoa que queira transformar seus trajetos rotineiros ou viagens em descobertas culturais.',
              'Seja você um motorista do dia a dia ou alguém explorando uma nova cidade de carro, o Tuggi é seu copiloto cultural.'
            ]
          },
          {
            key: 'offline',
            q: 'Funciona sem internet?',
            a: [
              'Parte do conteúdo é carregada previamente e pode funcionar com sinal instável.',
              'Recomendamos o uso com conexão de dados ativa para garantir que todas as histórias sejam disparadas corretamente.'
            ]
          },
          {
            key: 'battery',
            q: 'Consome muita bateria?',
            a: [
              'O consumo é otimizado, semelhante ao de apps de mapas. Recomendamos o uso de carregador veicular em trajetos longos.'
            ]
          },
          {
            key: 'privacy',
            q: 'Minha privacidade está protegida?',
            a: [
              'Sim. Utilizamos sua localização apenas para disparar o áudio no momento certo.',
              'Não gravamos conversas nem compartilhamos seus dados de trajeto com terceiros para fins publicitários.'
            ]
          },
          {
            key: 'pricing',
            q: 'O app é gratuito?',
            a: [
              'O Tuggi pode ser baixado e utilizado gratuitamente.',
              'Novas funcionalidades e conteúdos premium podem ser oferecidos no futuro.'
            ]
          },
          {
            key: 'coverage',
            q: 'Onde está disponível?',
            a: [
              'Já cobrimos as principais vias e pontos históricos de São Paulo e Rio de Janeiro.',
              'Estamos expandindo constantemente para novas regiões.'
            ]
          }
        ],
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
              'Yes. Tuggi is designed to be hands-free: stories play automatically based on geolocation.',
              'It works in the background with your navigation app (Waze, Google Maps), requiring no screen interaction.',
              'Always keep your focus on the road and use a phone mount.'
            ]
          },
          {
            key: 'who_is_for',
            q: 'Who is Tuggi for?',
            a: [
              'For anyone who wants to turn their daily commutes or trips into cultural discoveries.',
              'Whether you are a daily driver or exploring a new city by car, Tuggi is your cultural copilot.'
            ]
          },
          {
            key: 'offline',
            q: 'Does it work without internet?',
            a: [
              'Some content is pre-loaded and can work with unstable signals.',
              'We recommend using an active data connection to ensure all stories trigger correctly.'
            ]
          },
          {
            key: 'battery',
            q: 'Does it consume a lot of battery?',
            a: [
              'Consumption is optimized, similar to map apps. We recommend using a car charger on long journeys.'
            ]
          },
          {
            key: 'privacy',
            q: 'Is my privacy protected?',
            a: [
              'Yes. We use your location only to trigger audio at the right time.',
              'We do not record conversations or share your route data with third parties for advertising purposes.'
            ]
          },
          {
            key: 'pricing',
            q: 'Is the app free?',
            a: [
              'Tuggi can be downloaded and used for free.',
              'New features and premium content may be offered in the future.'
            ]
          },
          {
            key: 'coverage',
            q: 'Where is it available?',
            a: [
              'We already cover the main roads and historical points of São Paulo and Rio de Janeiro.',
              'We are constantly expanding to new regions.'
            ]
          }
        ],
        contact_question: 'More questions? Contact us.',
        contact_button: 'Send email'
      },
      ES: {
        title: 'Preguntas frecuentes',
        subtitle: 'Respuestas a las principales preguntas sobre Tuggi.',
        faqs: [
          {
            key: 'safe_driving',
            q: '¿Es seguro usar mientras conduzco?',
            a: [
              'Sí. Tuggi está diseñado para ser manos libres: las historias se reproducen automáticamente por geolocalización.',
              'Funciona en segundo plano con tu app de navegación (Waze, Google Maps), sin requerir interacción con la pantalla.',
              'Mantén siempre el foco en la carretera y usa un soporte para el móvil.'
            ]
          },
          {
            key: 'who_is_for',
            q: '¿Para quién está indicado?',
            a: [
              'Para cualquier persona que quiera transformar sus trayectos diarios o viajes en descubrimientos culturales.',
              'Ya seas un conductor diario o estés explorando una nueva ciudad en coche, Tuggi es tu copiloto cultural.'
            ]
          },
          {
            key: 'offline',
            q: '¿Funciona sin internet?',
            a: [
              'Parte del contenido se precarga y puede funcionar con señales inestables.',
              'Recomendamos el uso con una conexión de datos activa para asegurar que todas las historias se activen correctamente.'
            ]
          },
          {
            key: 'battery',
            q: '¿Consume mucha batería?',
            a: [
              'El consumo está optimizado, similar al de las apps de mapas. Recomendamos el uso de un cargador vehicular en trayectos largos.'
            ]
          },
          {
            key: 'privacy',
            q: '¿Mi privacidad está protegida?',
            a: [
              'Sí. Utilizamos tu ubicación solo para activar el audio en el momento adecuado.',
              'No grabamos conversaciones ni compartimos tus datos de trayecto con terceros con fines publicitarios.'
            ]
          },
          {
            key: 'pricing',
            q: '¿Es gratuito?',
            a: [
              'Tuggi se puede descargar y utilizar de forma gratuita.',
              'En el futuro se podrían ofrecer nuevas funcionalidades y contenidos premium.'
            ]
          },
          {
            key: 'coverage',
            q: '¿Dónde está disponible?',
            a: [
              'Ya cubrimos las principales vías y puntos históricos de São Paulo y Río de Janeiro.',
              'Estamos expandiéndonos constantemente a nuevas regiones.'
            ]
          }
        ],
        contact_question: '¿Más preguntas? Contáctanos.',
        contact_button: 'Enviar correo'
      },
      FR: {
        title: 'Questions fréquentes',
        subtitle: 'Réponses aux principales questions sur Tuggi.',
        faqs: [
          {
            key: 'safe_driving',
            q: 'Est-ce sûr de l\'utiliser en conduisant ?',
            a: [
              'Oui. Tuggi est conçu pour être mains libres : les histoires se lancent automatiquement par géolocalisation.',
              'Il fonctionne en arrière-plan avec votre application de navigation (Waze, Google Maps), sans nécessiter d\'interaction avec l\'écran.',
              'Gardez toujours votre attention sur la route et utilisez un support pour téléphone.'
            ]
          },
          {
            key: 'who_is_for',
            q: 'À qui s\'adresse Tuggi ?',
            a: [
              'À toute personne souhaitant transformer ses trajets quotidiens ou ses voyages en découvertes culturelles.',
              'Que vous soyez un conducteur quotidien ou que vous exploriez une nouvelle ville en voiture, Tuggi est votre copilote culturel.'
            ]
          },
          {
            key: 'offline',
            q: 'Fonctionne-t-il sans internet ?',
            a: [
              'Une partie du contenu est préchargée et peut fonctionner avec un signal instable.',
              'Nous recommandons de l\'utiliser avec une connexion de données active pour garantir que toutes les histoires se déclenchent correctement.'
            ]
          },
          {
            key: 'battery',
            q: 'Consomme-t-il beaucoup de batterie ?',
            a: [
              'La consommation est optimisée, similaire aux applications de cartes. Nous recommandons l\'utilisation d\'un chargeur de voiture pour les longs trajets.'
            ]
          },
          {
            key: 'privacy',
            q: 'Ma vie privée est-elle protégée ?',
            a: [
              'Oui. Nous utilisons votre position uniquement pour déclencher l\'audio au bon moment.',
              'Nous n\'enregistrons pas les conversations et ne partageons pas vos données de trajet avec des tiers à des fins publicitaires.'
            ]
          },
          {
            key: 'pricing',
            q: 'L\'application est-elle gratuite ?',
            a: [
              'Tuggi peut être téléchargé et utilisé gratuitement.',
              'De nouvelles fonctionnalités et du contenu premium pourront être proposés à l\'avenir.'
            ]
          },
          {
            key: 'coverage',
            q: 'Où est-ce disponible ?',
            a: [
              'Nous couvrons déjà les principales routes et points historiques de São Paulo et Rio de Janeiro.',
              'Nous nous développons constamment vers de nouvelles régions.'
            ]
          }
        ],
        contact_question: 'Plus de questions ? Contactez-nous.',
        contact_button: 'Envoyer un email'
      },
      DE: {
        title: 'Häufig gestellte Fragen',
        subtitle: 'Antworten auf die wichtigsten Fragen zu Tuggi.',
        faqs: [
          {
            key: 'safe_driving',
            q: 'Ist die Nutzung während der Fahrt sicher?',
            a: [
              'Ja. Tuggi ist für die freihändige Nutzung konzipiert: Geschichten werden automatisch per Geolokalisierung abgespielt.',
              'Es funktioniert im Hintergrund mit Ihrer Navigations-App (Waze, Google Maps) und erfordert keine Bildschirminteraktion.',
              'Halten Sie Ihren Fokus immer auf der Straße und verwenden Sie eine Handyhalterung.'
            ]
          },
          {
            key: 'who_is_for',
            q: 'Für wen ist Tuggi geeignet?',
            a: [
              'Für jeden, der seine täglichen Fahrten oder Reisen in kulturelle Entdeckungen verwandeln möchte.',
              'Ob Alltagsfahrer oder Entdecker einer neuen Stadt mit dem Auto, Tuggi ist Ihr kultureller Copilot.'
            ]
          },
          {
            key: 'offline',
            q: 'Funktioniert es ohne Internet?',
            a: [
              'Ein Teil der Inhalte wird vorgeladen und kann bei instabilem Signal funktionieren.',
              'Wir empfehlen die Nutzung mit aktiver Datenverbindung, um sicherzustellen, dass alle Geschichten korrekt ausgelöst werden.'
            ]
          },
          {
            key: 'battery',
            q: 'Verbraucht es viel Akku?',
            a: [
              'Der Verbrauch ist optimiert, ähnlich wie bei Karten-Apps. Wir empfehlen die Verwendung eines Autoladegeräts bei längeren Fahrten.'
            ]
          },
          {
            key: 'privacy',
            q: 'Ist meine Privatsphäre geschützt?',
            a: [
              'Ja. Wir verwenden Ihren Standort nur, um das Audio zum richtigen Zeitpunkt auszulösen.',
              'Wir zeichnen keine Gespräche auf und teilen Ihre Routendaten nicht zu Werbezwecken mit Dritten.'
            ]
          },
          {
            key: 'pricing',
            q: 'Ist die App kostenlos?',
            a: [
              'Tuggi kann kostenlos heruntergeladen und genutzt werden.',
              'Neue Funktionen und Premium-Inhalte könnten in Zukunft angeboten werden.'
            ]
          },
          {
            key: 'coverage',
            q: 'Wo ist es verfügbar?',
            a: [
              'Wir decken bereits die wichtigsten Straßen und historischen Punkte von São Paulo und Rio de Janeiro ab.',
              'Wir expandieren ständig in neue Regionen.'
            ]
          }
        ],
        contact_question: 'Noch Fragen? Kontaktieren Sie uns.',
        contact_button: 'E-Mail senden'
      },
      IT: {
        title: 'Domande frequenti',
        subtitle: 'Risposte alle principali domande su Tuggi.',
        faqs: [
          {
            key: 'safe_driving',
            q: 'È sicuro da usare mentre guido?',
            a: [
              'Sì. Tuggi è progettato per essere hands-free: le storie vengono riprodotte automaticamente tramite geolocalizzazione.',
              'Funziona in background con la tua app di navigazione (Waze, Google Maps), senza richiedere interazione con lo schermo.',
              'Mantieni sempre la concentrazione sulla strada e usa un supporto per telefono.'
            ]
          },
          {
            key: 'who_is_for',
            q: 'Per chi è indicato Tuggi?',
            a: [
              'Per chiunque voglia trasformare i propri tragitti quotidiani o viaggi in scoperte culturali.',
              'Che tu sia un guidatore abituale o stia esplorando una nuova città in auto, Tuggi è il tuo copilota culturale.'
            ]
          },
          {
            key: 'offline',
            q: 'Funziona senza internet?',
            a: [
              'Parte del contenuto è precaricato e può funzionare con segnale instabile.',
              'Raccomandiamo l\'uso con connessione dati attiva per garantire che tutte le storie vengano attivate correttamente.'
            ]
          },
          {
            key: 'battery',
            q: 'Consuma molta batteria?',
            a: [
              'Il consumo è ottimizzato, simile alle app di mappe. Raccomandiamo l\'uso di un caricabatterie per auto nei tragitti lunghi.'
            ]
          },
          {
            key: 'privacy',
            q: 'La mia privacy è protetta?',
            a: [
              'Sì. Utilizziamo la tua posizione solo per attivare l\'audio al momento giusto.',
              'Non registriamo conversazioni né condividiamo i tuoi dati di percorso con terze parti per scopi pubblicitari.'
            ]
          },
          {
            key: 'pricing',
            q: 'L\'app è gratuita?',
            a: [
              'Tuggi può essere scaricato e utilizzato gratuitamente.',
              'Nuove funzionalità e contenuti premium potranno essere offerti in futuro.'
            ]
          },
          {
            key: 'coverage',
            q: 'Dove è disponibile?',
            a: [
              'Copriamo già le principali strade e punti storici di San Paolo e Rio de Janeiro.',
              'Ci stiamo espandendo costantemente verso nuove regioni.'
            ]
          }
        ],
        contact_question: 'Altre domande? Contattaci.',
        contact_button: 'Invia email'
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
            {content.faqs.map((faq: FAQItem) => (
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
