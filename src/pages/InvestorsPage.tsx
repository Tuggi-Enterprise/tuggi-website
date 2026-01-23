import React from 'react';
import { 
  BarChart3, 
  Target, 
  Zap, 
  ShieldCheck, 
  Handshake, 
  ChevronRight
} from 'lucide-react';
import { 
  getCardClasses, 
  layout 
} from '../utils/designSystem';

interface InvestorsPageProps {
  currentLanguage: string;
  onCTAClick?: (ctaType: string, position?: string) => void;
}

const InvestorsPage: React.FC<InvestorsPageProps> = ({ 
  currentLanguage = 'PT',
  onCTAClick 
}) => {
  const getLocalizedContent = (language: string) => {
    const content: Record<string, any> = {
      PT: {
        hero: {
          title: 'Para investidores',
          subtitle: 'Tuggi é um copiloto cultural em áudio para trajetos de carro — com potencial de distribuição via motoristas de aplicativo.'
        },
        thesis: {
          title: 'Tese',
          items: [
            {
              title: 'Cultura no trajeto',
              text: 'Histórias curtas, contextuais e acionadas por localização.'
            },
            {
              title: 'Baixa fricção',
              text: 'Experiência em áudio, com foco em simplicidade e segurança.'
            },
            {
              title: 'Distribuição',
              text: 'Motoristas de aplicativo como canal natural de adoção.'
            }
          ]
        },
        product: {
          title: 'Produto hoje',
          description: 'O app entrega narrações automáticas em pontos do caminho para quem está dirigindo. O conteúdo é curado e evolui continuamente.',
          cta: 'Ver o produto'
        },
        businessModel: {
          title: 'Modelo de negócio',
          cardA: {
            title: 'B2C (usuário final)',
            text: 'Acesso ao app com planos e evolução de funcionalidades ao longo do tempo.'
          },
          cardB: {
            title: 'B2B (dados e integração)',
            text: 'Licenciamento de conteúdo e metadados de POIs para produtos de mobilidade, turismo e educação.',
            cta: 'Ver página para empresas'
          }
        },
        reliability: {
          title: 'Confiabilidade',
          items: [
            'Conteúdo curado com apoio de validações automatizadas e revisão contínua.',
            'Parte do conteúdo é contexto histórico e cultural, não ‘fato’ absoluto.',
            'Canal para correções e revisão mediante feedback.'
          ],
          cta: 'Reportar correção'
        },
        seeking: {
          title: 'O que buscamos',
          items: [
            'Investidores e aceleradoras com experiência em marketplaces, mobilidade ou travel.',
            'Apoio em distribuição, parcerias e estruturação comercial.',
            'Conexões para pilotos comerciais B2B (quando aplicável) e canais de aquisição.'
          ]
        },
        contact: {
          title: 'Vamos conversar',
          description: 'Envie um e-mail com uma breve descrição do seu perfil e interesse.',
          primary: 'investidores@tuggi.app',
          secondary: 'contato@tuggi.app'
        },
        footnote: 'Materiais complementares (deck, métricas e roadmap) disponíveis sob solicitação.'
      },
      EN: {
        hero: {
          title: 'For Investors',
          subtitle: 'Tuggi is a cultural audio copilot for car journeys — with distribution potential via rideshare drivers.'
        },
        thesis: {
          title: 'Thesis',
          items: [
            {
              title: 'Culture on the way',
              text: 'Short, contextual, location-triggered stories.'
            },
            {
              title: 'Low friction',
              text: 'Audio experience focused on simplicity and safety.'
            },
            {
              title: 'Distribution',
              text: 'Rideshare drivers as a natural adoption channel.'
            }
          ]
        },
        product: {
          title: 'Product Today',
          description: 'The app delivers automatic narrations at points along the way for drivers. Content is curated and constantly evolving.',
          cta: 'See Product'
        },
        businessModel: {
          title: 'Business Model',
          cardA: {
            title: 'B2C (end user)',
            text: 'App access with plans and evolving features over time.'
          },
          cardB: {
            title: 'B2B (data & integration)',
            text: 'Content licensing and POI metadata for mobility, tourism, and education products.',
            cta: 'See Business Page'
          }
        },
        reliability: {
          title: 'Reliability',
          items: [
            'Curated content supported by automated validation and continuous review.',
            'Part of the content is historical and cultural context, not absolute \'fact\'.',
            'Channel for corrections and review through feedback.'
          ],
          cta: 'Report Correction'
        },
        seeking: {
          title: 'What we are looking for',
          items: [
            'Investors and accelerators with experience in marketplaces, mobility, or travel.',
            'Support in distribution, partnerships, and commercial structuring.',
            'Connections for B2B commercial pilots (where applicable) and acquisition channels.'
          ]
        },
        contact: {
          title: 'Let\'s talk',
          description: 'Send an email with a brief description of your profile and interest.',
          primary: 'investidores@tuggi.app',
          secondary: 'contato@tuggi.app'
        },
        footnote: 'Complementary materials (deck, metrics, and roadmap) available upon request.'
      },
      ES: {
        hero: {
          title: 'Para inversores',
          subtitle: 'Tuggi es un copiloto cultural en audio para trayectos en coche, con potencial de distribución a través de conductores de aplicaciones.'
        },
        thesis: {
          title: 'Tesis',
          items: [
            {
              title: 'Cultura en el trayecto',
              text: 'Historias cortas, contextuales y activadas por ubicación.'
            },
            {
              title: 'Baja fricción',
              text: 'Experiencia de audio enfocada en la simplicidad y la seguridad.'
            },
            {
              title: 'Distribución',
              text: 'Conductores de aplicaciones como canal natural de adopción.'
            }
          ]
        },
        product: {
          title: 'Producto hoy',
          description: 'La aplicación ofrece narraciones automáticas en puntos del camino para quienes conducen. El contenido es curado y evoluciona continuamente.',
          cta: 'Ver producto'
        },
        businessModel: {
          title: 'Modelo de negocio',
          cardA: {
            title: 'B2C (usuario final)',
            text: 'Acceso a la aplicación con planes y evolución de funcionalidades a lo largo del tiempo.'
          },
          cardB: {
            title: 'B2B (datos e integración)',
            text: 'Licenciamiento de contenido y metadatos de POIs para productos de movilidad, turismo y educación.',
            cta: 'Ver página para empresas'
          }
        },
        reliability: {
          title: 'Confiabilidad',
          items: [
            'Contenido curado con apoyo de validaciones automatizadas y revisión continua.',
            'Parte del contenido es contexto histórico y cultural, no "hecho" absoluto.',
            'Canal para correcciones y revisión mediante comentarios.'
          ],
          cta: 'Reportar corrección'
        },
        seeking: {
          title: 'Qué buscamos',
          items: [
            'Inversores y aceleradoras con experiencia en marketplaces, movilidad o viajes.',
            'Apoyo en distribución, asociaciones y estructuración comercial.',
            'Conexiones para pilotos comerciales B2B (cuando corresponda) y canales de adquisición.'
          ]
        },
        contact: {
          title: 'Hablemos',
          description: 'Envíe un correo electrónico con una breve descripción de su perfil e interés.',
          primary: 'investidores@tuggi.app',
          secondary: 'contato@tuggi.app'
        },
        footnote: 'Materiales complementarios (deck, métricas y roadmap) disponibles bajo solicitud.'
      },
      FR: {
        hero: {
          title: 'Pour les investisseurs',
          subtitle: 'Tuggi est un copilote culturel audio pour les trajets en voiture — avec un potentiel de distribution via les chauffeurs VTC.'
        },
        thesis: {
          title: 'Thèse',
          items: [
            {
              title: 'Culture sur le trajet',
              text: 'Histoires courtes, contextuelles et déclenchées par la localisation.'
            },
            {
              title: 'Faible friction',
              text: 'Expérience audio axée sur la simplicité et la sécurité.'
            },
            {
              title: 'Distribution',
              text: 'Les chauffeurs VTC comme canal naturel d\'adoption.'
            }
          ]
        },
        product: {
          title: 'Produit aujourd\'hui',
          description: 'L\'application délivre des narrations automatiques aux points du trajet pour ceux qui conduisent. Le contenu est curé et évolue continuellement.',
          cta: 'Voir le produit'
        },
        businessModel: {
          title: 'Modèle d\'affaires',
          cardA: {
            title: 'B2C (utilisateur final)',
            text: 'Accès à l\'application avec des plans et une évolution des fonctionnalités au fil du temps.'
          },
          cardB: {
            title: 'B2B (données et intégration)',
            text: 'Licences de contenu et métadonnées de POI pour les produits de mobilité, tourisme et éducation.',
            cta: 'Voir la page entreprises'
          }
        },
        reliability: {
          title: 'Fiabilité',
          items: [
            'Contenu curé avec l\'appui de validations automatisées et d\'une révision continue.',
            'Une partie du contenu est un contexte historique et culturel, pas un \'fait\' absolu.',
            'Canal pour corrections et révision via feedback.'
          ],
          cta: 'Signaler une correction'
        },
        seeking: {
          title: 'Ce que nous recherchons',
          items: [
            'Investisseurs et accélérateurs avec expérience dans les marketplaces, la mobilité ou le voyage.',
            'Soutien dans la distribution, les partenariats et la structuration commerciale.',
            'Connexions pour des pilotes commerciaux B2B (le cas échéant) et des canaux d\'acquisition.'
          ]
        },
        contact: {
          title: 'Parlons-en',
          description: 'Envoyez un e-mail avec une brève description de votre profil et de votre intérêt.',
          primary: 'investidores@tuggi.app',
          secondary: 'contato@tuggi.app'
        },
        footnote: 'Matériaux complémentaires (deck, métriques et roadmap) disponibles sur demande.'
      },
      DE: {
        hero: {
          title: 'Für Investoren',
          subtitle: 'Tuggi ist ein kultureller Audio-Copilot für Autofahrten — mit Vertriebspotenzial über App-Fahrer.'
        },
        thesis: {
          title: 'These',
          items: [
            {
              title: 'Kultur auf dem Weg',
              text: 'Kurze, kontextbezogene und standortgesteuerte Geschichten.'
            },
            {
              title: 'Geringe Reibung',
              text: 'Audio-Erlebnis mit Fokus auf Einfachheit und Sicherheit.'
            },
            {
              title: 'Vertrieb',
              text: 'App-Fahrer als natürlicher Kanal für die Adoption.'
            }
          ]
        },
        product: {
          title: 'Produkt heute',
          description: 'Die App liefert automatische Erzählungen an Punkten entlang des Weges für Fahrer. Der Inhalt wird kuratiert und entwickelt sich ständig weiter.',
          cta: 'Produkt sehen'
        },
        businessModel: {
          title: 'Geschäftsmodell',
          cardA: {
            title: 'B2C (Endnutzer)',
            text: 'App-Zugang mit Plänen und Funktionsentwicklung im Laufe der Zeit.'
          },
          cardB: {
            title: 'B2B (Daten & Integration)',
            text: 'Lizenzierung von Inhalten und POI-Metadaten für Mobilitäts-, Tourismus- und Bildungsprodukte.',
            cta: 'Seite für Unternehmen sehen'
          }
        },
        reliability: {
          title: 'Zuverlässigkeit',
          items: [
            'Kuratierte Inhalte unterstützt durch automatisierte Validierungen und kontinuierliche Überprüfung.',
            'Ein Teil des Inhalts ist historischer und kultureller Kontext, kein absoluter \'Fakt\'.',
            'Kanal für Korrekturen und Überprüfung durch Feedback.'
          ],
          cta: 'Korrektur melden'
        },
        seeking: {
          title: 'Was wir suchen',
          items: [
            'Investoren und Acceleratoren mit Erfahrung in Marktplätzen, Mobilität oder Reisen.',
            'Unterstützung bei Vertrieb, Partnerschaften und kommerzieller Strukturierung.',
            'Verbindungen für kommerzielle B2B-Piloten (wo zutreffend) und Akquisitionskanäle.'
          ]
        },
        contact: {
          title: 'Lassen Sie uns sprechen',
          description: 'Senden Sie eine E-Mail mit einer kurzen Beschreibung Ihres Profils und Interesses.',
          primary: 'investidores@tuggi.app',
          secondary: 'contato@tuggi.app'
        },
        footnote: 'Ergänzende Materialien (Deck, Metriken und Roadmap) auf Anfrage erhältlich.'
      },
      IT: {
        hero: {
          title: 'Per gli investitori',
          subtitle: 'Tuggi è un copilota culturale audio per viaggi in auto — con potenziale di distribuzione tramite autisti di app.'
        },
        thesis: {
          title: 'Tesi',
          items: [
            {
              title: 'Cultura sul tragitto',
              text: 'Storie brevi, contestuali e attivate dalla posizione.'
            },
            {
              title: 'Bassa frizione',
              text: 'Esperienza audio focalizzata su semplicità e sicurezza.'
            },
            {
              title: 'Distribuzione',
              text: 'Autisti di app come canale naturale di adozione.'
            }
          ]
        },
        product: {
          title: 'Prodotto oggi',
          description: 'L\'app fornisce narrazioni automatiche nei punti lungo il percorso per chi guida. Il contenuto è curato ed evoluto continuamente.',
          cta: 'Vedi prodotto'
        },
        businessModel: {
          title: 'Modello di business',
          cardA: {
            title: 'B2C (utente finale)',
            text: 'Accesso all\'app con piani ed evoluzione delle funzionalità nel tempo.'
          },
          cardB: {
            title: 'B2B (dati e integrazione)',
            text: 'Licenza di contenuti e metadati di POI per prodotti di mobilità, turismo ed istruzione.',
            cta: 'Vedi pagina per aziende'
          }
        },
        reliability: {
          title: 'Affidabilità',
          items: [
            'Contenuto curato con supporto di validazioni automatizzate e revisione continua.',
            'Parte del contenuto è contesto storico e culturale, non \'fatto\' assoluto.',
            'Canale per correzioni e revisione tramite feedback.'
          ],
          cta: 'Segnala correzione'
        },
        seeking: {
          title: 'Cosa cerchiamo',
          items: [
            'Investitori e acceleratori con esperienza in marketplace, mobilità o viaggi.',
            'Supporto nella distribuzione, partnership e strutturazione commerciale.',
            'Connessioni per piloti commerciali B2B (dove applicabile) e canali di acquisizione.'
          ]
        },
        contact: {
          title: 'Parliamone',
          description: 'Invia un\'email con una breve descrizione del tuo profilo e interesse.',
          primary: 'investidores@tuggi.app',
          secondary: 'contato@tuggi.app'
        },
        footnote: 'Materiali complementari (deck, metriche e roadmap) disponibili su richiesta.'
      }
    };
    return content[language] || content['PT'];
  };

  const content = getLocalizedContent(currentLanguage);

  const handleCTAClick = (ctaType: string) => {
    onCTAClick?.(ctaType, 'investors_page');
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* SECTION 1 — HERO */}
      <section className={`${layout.section.hero} bg-neutral-50 border-b border-neutral-100`}>
        <div className={layout.container.narrow}>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-neutral-900">
            {content.hero.title}
          </h1>
          <p className="text-xl lg:text-2xl text-neutral-600 leading-relaxed">
            {content.hero.subtitle}
          </p>
        </div>
      </section>

      {/* SECTION 2 — TESE */}
      <section className={layout.section.base}>
        <div className={layout.container.narrow}>
          <div className="flex items-center gap-3 mb-10">
            <BarChart3 className="w-8 h-8 text-tuggi-primary" />
            <h2 className="text-3xl font-bold">{content.thesis.title}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.thesis.items.map((item: any, idx: number) => (
              <div key={idx} className={`${getCardClasses()} p-8 h-full`}>
                <h3 className="text-xl font-bold mb-4 text-tuggi-primary">{item.title}</h3>
                <p className="text-neutral-600 leading-relaxed font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — PRODUTO HOJE */}
      <section className={`${layout.section.base} bg-neutral-50`}>
        <div className={layout.container.narrow}>
          <div className="flex items-center gap-3 mb-8">
            <Zap className="w-8 h-8 text-tuggi-primary" />
            <h2 className="text-3xl font-bold">{content.product.title}</h2>
          </div>
          <p className="text-lg text-neutral-700 leading-relaxed mb-8 max-w-2xl font-medium">
            {content.product.description}
          </p>
          <a 
            href={`/${currentLanguage.toLowerCase()}/`}
            className="inline-flex items-center gap-2 text-tuggi-primary font-bold hover:underline"
            onClick={() => handleCTAClick('see_product')}
          >
            {content.product.cta}
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* SECTION 4 — MODELO DE NEGÓCIO */}
      <section className={layout.section.base}>
        <div className={layout.container.narrow}>
          <div className="flex items-center gap-3 mb-10">
            <Target className="w-8 h-8 text-tuggi-primary" />
            <h2 className="text-3xl font-bold">{content.businessModel.title}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className={`${getCardClasses()} p-8 border border-neutral-100`}>
              <h3 className="text-xl font-bold mb-4">{content.businessModel.cardA.title}</h3>
              <p className="text-neutral-600 leading-relaxed font-medium mb-6">
                {content.businessModel.cardA.text}
              </p>
            </div>
            <div className={`${getCardClasses()} p-8 border border-neutral-100`}>
              <h3 className="text-xl font-bold mb-4">{content.businessModel.cardB.title}</h3>
              <p className="text-neutral-600 leading-relaxed font-medium mb-6">
                {content.businessModel.cardB.text}
              </p>
              <a 
                href={`/${currentLanguage.toLowerCase()}/empresas`}
                className="inline-flex items-center gap-2 text-tuggi-primary font-bold hover:underline"
                onClick={() => handleCTAClick('see_business')}
              >
                {content.businessModel.cardB.cta}
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — CONFIABILIDADE */}
      <section className={`${layout.section.base} bg-neutral-50`}>
        <div className={layout.container.narrow}>
          <div className="flex items-center gap-3 mb-10">
            <ShieldCheck className="w-8 h-8 text-tuggi-primary" />
            <h2 className="text-3xl font-bold">{content.reliability.title}</h2>
          </div>
          <div className="space-y-6 mb-10">
            {content.reliability.items.map((item: string, idx: number) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-tuggi-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-tuggi-primary"></div>
                </div>
                <p className="text-lg text-neutral-700 font-medium">{item}</p>
              </div>
            ))}
          </div>
          <a 
            href={`/${currentLanguage.toLowerCase()}/contato`}
            className="inline-flex items-center gap-2 text-tuggi-primary font-bold hover:underline"
            onClick={() => handleCTAClick('report_correction')}
          >
            {content.reliability.cta}
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* SECTION 6 — O QUE BUSCAMOS */}
      <section className={layout.section.base}>
        <div className={layout.container.narrow}>
          <div className="flex items-center gap-3 mb-10">
            <Handshake className="w-8 h-8 text-tuggi-primary" />
            <h2 className="text-3xl font-bold">{content.seeking.title}</h2>
          </div>
          <div className="space-y-8">
            {content.seeking.items.map((item: string, idx: number) => (
              <div key={idx} className="flex items-start gap-5">
                <div className="p-2 rounded-lg bg-tuggi-primary/5">
                  <div className="w-3 h-3 rounded-full bg-tuggi-primary"></div>
                </div>
                <p className="text-xl text-neutral-700 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — CONTATO */}
      <section className={`${layout.section.base} bg-tuggi-primary text-white border-t border-tuggi-primary/10`}>
        <div className={layout.container.narrow}>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">{content.contact.title}</h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed font-medium">
            {content.contact.description}
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a 
              href={`mailto:${content.contact.primary}?subject=Investimento%20%E2%80%94%20Tuggi`}
              className="bg-white text-tuggi-primary px-10 py-4 rounded-xl font-bold text-lg hover:bg-neutral-50 transition-colors shadow-2xl"
              onClick={() => handleCTAClick('contact_investors')}
            >
              {content.contact.primary}
            </a>
            <a 
              href={`mailto:${content.contact.secondary}`}
              className="text-white/80 font-bold hover:text-white transition-colors"
              onClick={() => handleCTAClick('contact_general')}
            >
              {content.contact.secondary}
            </a>
          </div>
        </div>
      </section>

      {/* FOOTNOTE */}
      <footer className="py-12 border-t border-neutral-100">
        <div className={layout.container.narrow}>
          <p className="text-sm text-neutral-400 italic font-medium">
            {content.footnote}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default InvestorsPage;