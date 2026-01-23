import { ArrowRight } from 'lucide-react';
import { 
  getButtonClasses, 
  getCardClasses, 
  layout,
  gradients
} from '../utils/designSystem';

interface PurposePageProps {
  currentLanguage?: string;
  onCTAClick?: (ctaType: string, language: string) => void;
}

const PurposePage: React.FC<PurposePageProps> = ({ 
  currentLanguage = 'PT',
  onCTAClick 
}) => {
  // Localized content
  const getLocalizedContent = (language: string) => {
    const content: Record<string, any> = {
      PT: {
        hero: {
          title: 'Nossa razão de existir',
          subtitle: 'Cultura não deveria ficar presa a roteiros e salas de aula. A Tuggi existe para colocar histórias no caminho — de forma leve, em áudio, enquanto você dirige.'
        },
        block1: {
          title: 'Cultura em movimento',
          text: 'Acreditamos que a cultura vive no trajeto. Em vez de te prender a um roteiro, a Tuggi revela contexto e histórias no momento em que você passa pelos lugares.'
        },
        block2: {
          title: 'O que é a Tuggi hoje',
          text: 'Hoje, a Tuggi é um copiloto cultural em áudio para quem está dirigindo. Ela identifica pontos no caminho e narra histórias curtas e contextuais, sem exigir atenção à tela.'
        },
        targetAudience: {
          drivers: {
            title: 'Motoristas de aplicativo',
            text: 'Uma forma simples de tornar a viagem mais interessante para o passageiro — com controle de quando tocar e pausar.',
            link: 'Ver para motoristas'
          },
          daily: {
            title: 'Quem dirige no dia a dia',
            text: 'Transforme deslocamentos e viagens em descobertas culturais, no seu tempo.'
          }
        },
        values: {
          title: 'Nossos valores fundamentais',
          items: [
            { id: 'trajeto', title: 'Descoberta no trajeto', description: 'Histórias no caminho, no tempo certo.' },
            { id: 'contexto', title: 'Clareza e contexto', description: 'Conteúdo curto, direto e bem explicado.' },
            { id: 'autonomia', title: 'Autonomia do usuário', description: 'Você decide quando ouvir e pausar.' },
            { id: 'simplicidade', title: 'Segurança e simplicidade', description: 'Áudio em primeiro lugar, pouca tela.' },
            { id: 'dados', title: 'Responsabilidade com dados', description: 'Privacidade e controle nas suas mãos.' }
          ]
        },
        whatWeAreNot: {
          title: 'O que a Tuggi não é',
          bullets: [
            'Não é um guia que exige ficar olhando para a tela.',
            'Não é rádio contínuo: você controla quando ouvir.',
            'Não grava conversas e não faz \'escuta\' passiva.'
          ]
        },
        responsibility: {
          title: 'Responsabilidade',
          safety: {
            title: 'Segurança',
            text: 'A experiência é pensada para áudio e uso com o celular fixo. Atenção total ao trânsito.'
          },
          privacy: {
            title: 'Privacidade por design',
            bullets: [
              'Localização usada apenas para disparar histórias ao longo do trajeto.',
              'Não gravamos conversas; não fazemos \'escuta\' passiva.',
              'Você controla permissões e pode revogar quando quiser.',
              'Você pode solicitar exclusão de dados.'
            ],
            links: {
              privacy: 'Política de Privacidade',
              dataDeletion: 'Exclusão de Dados'
            }
          }
        },
        community: {
          title: 'Construído com a comunidade',
          text: 'Quer sugerir pontos, reportar algo incorreto ou enviar uma ideia? A gente lê e prioriza melhorias continuamente.',
          cta: 'Falar com a gente'
        },
        finalCta: {
          title: 'Comece sua jornada cultural no trajeto.',
          subtitle: 'Baixe o app nas lojas oficiais.'
        }
      },
      EN: {
        hero: {
          title: 'Our reason for being',
          subtitle: 'Culture should not be confined to books or classrooms. Tuggi exists to put stories along your path — lightly, via audio, while you drive.'
        },
        block1: {
          title: 'Culture in motion',
          text: 'We believe that culture lives in the journey. Instead of pinning you to a route, Tuggi reveals context and stories the moment you pass by places.'
        },
        block2: {
          title: 'What Tuggi is today',
          text: 'Today, Tuggi is a cultural audio copilot for those driving. It identifies points along the path and narrates short, contextual stories without requiring screen attention.'
        },
        targetAudience: {
          drivers: {
            title: 'Rideshare Drivers',
            text: 'A simple way to make the trip more interesting for the passenger — with control over when to play and pause.',
            link: 'View for drivers'
          },
          daily: {
            title: 'Daily Drivers',
            text: 'Transform commutes and trips into cultural discoveries, on your own time.'
          }
        },
        values: {
          title: 'Our core values',
          items: [
            { id: 'trajeto', title: 'Discovery on the go', description: 'Stories on the way, at the right time.' },
            { id: 'contexto', title: 'Clarity and context', description: 'Short, direct, and well-explained content.' },
            { id: 'autonomia', title: 'User autonomy', description: 'You decide when to listen and pause.' },
            { id: 'simplicidade', title: 'Safety and simplicity', description: 'Audio first, minimal screen time.' },
            { id: 'dados', title: 'Data responsibility', description: 'Privacy and control in your hands.' }
          ]
        },
        whatWeAreNot: {
          title: 'What Tuggi is NOT',
          bullets: [
            'It is not a guide that requires looking at a screen.',
            'It is not continuous radio: you control when to listen.',
            'It does not record conversations and does not perform passive listening.'
          ]
        },
        responsibility: {
          title: 'Responsibility',
          safety: {
            title: 'Safety',
            text: 'The experience is designed for audio and hands-free use. Full attention on the road.'
          },
          privacy: {
            title: 'Privacy by design',
            bullets: [
              'Location used only to trigger stories along the route.',
              'No recording conversations; no passive listening.',
              'You control permissions and can revoke at any time.',
              'You can request data deletion.'
            ],
            links: {
              privacy: 'Privacy Policy',
              dataDeletion: 'Data Deletion'
            }
          }
        },
        community: {
          title: 'Built with the community',
          text: 'Want to suggest points, report something incorrect, or send an idea? We read and prioritize improvements continuously.',
          cta: 'Talk to us'
        },
        finalCta: {
          title: 'Start your cultural journey on the road.',
          subtitle: 'Download the app on official stores.'
        }
      },
      ES: {
        hero: {
          title: 'Nuestra razón de ser',
          subtitle: 'La cultura no debería estar limitada a libros o aulas. Tuggi existe para poner historias en el camino — de forma ligera, en audio, mientras conduces.'
        },
        block1: {
          title: 'Cultura en movimiento',
          text: 'Creemos que la cultura vive en el trayecto. En lugar de atarte a una ruta, Tuggi revela contexto e historias en el momento en que pasas por los lugares.'
        },
        block2: {
          title: 'Qué es Tuggi hoy',
          text: 'Hoy, Tuggi es un copiloto cultural en audio para quienes conducen. Identifica puntos en el camino y narra historias cortas y contextuales, sin exigir atención a la pantalla.'
        },
        targetAudience: {
          drivers: {
            title: 'Conductores de apps',
            text: 'Una forma sencilla de hacer el viaje más interesante para el pasajero — con control de cuándo reproducir y pausar.',
            link: 'Ver para conductores'
          },
          daily: {
            title: 'Quienes conducen a diario',
            text: 'Transforma desplazamientos y viajes en descubrimientos culturales, a tu ritmo.'
          }
        },
        values: {
          title: 'Nuestros valores fundamentales',
          items: [
            { id: 'trajeto', title: 'Descubrimiento en el camino', description: 'Historias en el camino, en el momento justo.' },
            { id: 'contexto', title: 'Claridad y contexto', description: 'Contenido corto, directo y bien explicado.' },
            { id: 'autonomia', title: 'Autonomía del usuario', description: 'Tú decides cuándo escuchar y pausar.' },
            { id: 'simplicidade', title: 'Seguridad y sencillez', description: 'Audio en primer lugar, poca pantalla.' },
            { id: 'dados', title: 'Responsabilidad con los datos', description: 'Privacidad y control en tus manos.' }
          ]
        },
        whatWeAreNot: {
          title: 'Lo que Tuggi NO es',
          bullets: [
            'No es una guía que exija mirar la pantalla.',
            'No es radio continua: tú controlas cuándo escuchar.',
            'No graba conversaciones y no hace escucha pasiva.'
          ]
        },
        responsibility: {
          title: 'Responsabilidad',
          safety: {
            title: 'Seguridad',
            text: 'La experiencia está pensada para audio y uso con el móvil fijo. Atención total al tráfico.'
          },
          privacy: {
            title: 'Privacidad por diseño',
            bullets: [
              'Ubicación usada solo para activar historias a lo largo del trayecto.',
              'No grabamos conversaciones; no hacemos escucha pasiva.',
              'Tú controlas los permisos y puedes revocarlos cuando quieras.',
              'Puedes solicitar la eliminación de datos.'
            ],
            links: {
              privacy: 'Política de Privacidad',
              dataDeletion: 'Eliminación de Datos'
            }
          }
        },
        community: {
          title: 'Construido con la comunidad',
          text: '¿Quieres sugerir puntos, reportar algo incorrecto o enviar una idea? Leemos y priorizamos mejoras continuamente.',
          cta: 'Habla con nosotros'
        },
        finalCta: {
          title: 'Comienza tu viaje cultural en el camino.',
          subtitle: 'Descarga el app en las tiendas oficiales.'
        }
      },
      FR: {
        hero: {
          title: 'Notre raison d\'être',
          subtitle: 'La culture ne devrait pas être confinée aux livres ou aux salles de classe. Tuggi existe pour mettre des histoires sur votre chemin — légèrement, en audio, pendant que vous conduisez.'
        },
        block1: {
          title: 'Culture en mouvement',
          text: 'Nous croyons que la culture vit dans le trajet. Au lieu de vous lier à un itinéraire, Tuggi révèle contexte et histoires au moment où vous passez par les lieux.'
        },
        block2: {
          title: 'Qu\'est-ce que Tuggi aujourd\'hui',
          text: 'Aujourd\'hui, Tuggi est un copilote culturel audio pour ceux qui conduisent. Il identifie des points sur le chemin et narre des histoires courtes et contextuelles, sans exiger d\'attention à l\'écran.'
        },
        targetAudience: {
          drivers: {
            title: 'Chauffeurs VTC',
            text: 'Une façon simple de rendre le trajet plus intéressant pour le passager — avec contrôle sur lecture et pause.',
            link: 'Voir pour chauffeurs'
          },
          daily: {
            title: 'Ceux qui conduisent au quotidien',
            text: 'Transformez déplacements et voyages en découvertes culturelles, à votre rythme.'
          }
        },
        values: {
          title: 'Nos valeurs fondamentales',
          items: [
            { id: 'trajeto', title: 'Découverte sur le trajet', description: 'Histoires sur le chemin, au bon moment.' },
            { id: 'contexto', title: 'Clarté et contexte', description: 'Contenu court, direct et bien expliqué.' },
            { id: 'autonomia', title: 'Autonomie de l\'utilisateur', description: 'Vous décidez quand écouter et mettre en pause.' },
            { id: 'simplicidade', title: 'Sécurité et simplicité', description: 'Audio d\'abord, peu d\'écran.' },
            { id: 'dados', title: 'Responsabilité des données', description: 'Confidentialité et contrôle entre vos mains.' }
          ]
        },
        whatWeAreNot: {
          title: 'Ce que Tuggi N\'EST PAS',
          bullets: [
            'Ce n\'est pas un guide qui exige de regarder l\'écran.',
            'Ce n\'est pas une radio continue : vous contrôlez quand écouter.',
            'Il n\'enregistre pas les conversations et ne fait pas d\'écoute passive.'
          ]
        },
        responsibility: {
          title: 'Responsabilité',
          safety: {
            title: 'Sécurité',
            text: 'L\'expérience est pensée pour l\'audio et l\'utilisation avec le téléphone fixé. Attention totale à la circulation.'
          },
          privacy: {
            title: 'Confidentialité dès la conception',
            bullets: [
              'Position utilisée uniquement pour déclencher des histoires le long du trajet.',
              'Nous n\'enregistrons pas les conversations ; nous ne faisons pas d\'écoute passive.',
              'Vous contrôlez les permissions et pouvez les révoquer quand vous voulez.',
              'Vous pouvez demander la suppression des données.'
            ],
            links: {
              privacy: 'Politique de Confidentialité',
              dataDeletion: 'Suppression des Données'
            }
          }
        },
        community: {
          title: 'Construit avec la communauté',
          text: 'Vous voulez suggérer des points, signaler quelque chose d\'incorrect ou envoyer une idée ? Nous lisons et priorisons les améliorations continuellement.',
          cta: 'Parler avec nous'
        },
        finalCta: {
          title: 'Commencez votre voyage culturel sur la route.',
          subtitle: 'Téléchargez l\'app sur les stores officiels.'
        }
      },
      DE: {
        hero: {
          title: 'Unser Daseinszweck',
          subtitle: 'Kultur sollte nicht auf Bücher oder Klassenzimmer beschränkt sein. Tuggi existiert, um Geschichten auf Ihren Weg zu bringen — leicht, per Audio, während Sie fahren.'
        },
        block1: {
          title: 'Kultur in Bewegung',
          text: 'Wir glauben, dass Kultur auf dem Weg lebt. Anstatt Sie an eine Route zu binden, enthüllt Tuggi Kontext und Geschichten in dem Moment, in dem Sie an Orten vorbeikommen.'
        },
        block2: {
          title: 'Was Tuggi heute ist',
          text: 'Heute ist Tuggi ein kultureller Audio-Copilot für Autofahrer. Es identifiziert Punkte auf dem Weg und erzählt kurze, kontextbezogene Geschichten, ohne Aufmerksamkeit auf den Bildschirm zu erfordern.'
        },
        targetAudience: {
          drivers: {
            title: 'App-Fahrer',
            text: 'Ein einfacher Weg, die Fahrt für den Fahrgast interessanter zu machen — mit Kontrolle über Wiedergabe und Pause.',
            link: 'Für Fahrer ansehen'
          },
          daily: {
            title: 'Tägliche Fahrer',
            text: 'Verwandeln Sie Pendelfahrten und Reisen in kulturelle Entdeckungen, in Ihrem eigenen Tempo.'
          }
        },
        values: {
          title: 'Unsere Grundwerte',
          items: [
            { id: 'trajeto', title: 'Entdeckung auf dem Weg', description: 'Geschichten auf dem Weg, zur richtigen Zeit.' },
            { id: 'contexto', title: 'Klarheit und Kontext', description: 'Kurzer, direkter und gut erklärter Inhalt.' },
            { id: 'autonomia', title: 'Nutzerautonomie', description: 'Sie entscheiden, wann Sie zuhören und pausieren.' },
            { id: 'simplicidade', title: 'Sicherheit und Einfachheit', description: 'Audio zuerst, wenig Bildschirm.' },
            { id: 'dados', title: 'Datenverantwortung', description: 'Datenschutz und Kontrolle in Ihren Händen.' }
          ]
        },
        whatWeAreNot: {
          title: 'Was Tuggi NICHT ist',
          bullets: [
            'Es ist kein Reiseführer, der verlangt, auf den Bildschirm zu schauen.',
            'Es ist kein ständiges Radio: Sie steuern, wann Sie zuhören.',
            'Es zeichnet keine Gespräche auf und hört nicht passiv zu.'
          ]
        },
        responsibility: {
          title: 'Verantwortung',
          safety: {
            title: 'Sicherheit',
            text: 'Das Erlebnis ist für Audio und Nutzung mit fester Handyhalterung konzipiert. Volle Aufmerksamkeit auf den Verkehr.'
          },
          privacy: {
            title: 'Datenschutz durch Design',
            bullets: [
              'Standort nur verwendet, um Geschichten entlang der Route auszulösen.',
              'Wir zeichnen keine Gespräche auf; wir hören nicht passiv zu.',
              'Sie kontrollieren Berechtigungen und können diese jederzeit widerrufen.',
              'Sie können Datenlöschung beantragen.'
            ],
            links: {
              privacy: 'Datenschutzrichtlinie',
              dataDeletion: 'Datenlöschung'
            }
          }
        },
        community: {
          title: 'Mit der Community gebaut',
          text: 'Möchten Sie Punkte vorschlagen, etwas Falsches melden oder eine Idee senden? Wir lesen und priorisieren Verbesserungen kontinuierlich.',
          cta: 'Sprechen Sie mit uns'
        },
        finalCta: {
          title: 'Starten Sie Ihre kulturelle Reise auf der Straße.',
          subtitle: 'Laden Sie die App in den offiziellen Stores herunter.'
        }
      },
      IT: {
        hero: {
          title: 'La nostra ragion d\'essere',
          subtitle: 'La cultura non dovrebbe essere confinata a libri o aule. Tuggi esiste per mettere storie sul tuo cammino — in modo leggero, via audio, mentre guidi.'
        },
        block1: {
          title: 'Cultura in movimento',
          text: 'Crediamo che la cultura viva nel tragitto. Invece di legarti a un percorso, Tuggi rivela contesto e storie nel momento in cui passi per i luoghi.'
        },
        block2: {
          title: 'Cos\'è Tuggi oggi',
          text: 'Oggi, Tuggi è un copilota culturale audio per chi guida. Identifica punti sul percorso e narra storie brevi e contestuali, senza richiedere attenzione allo schermo.'
        },
        targetAudience: {
          drivers: {
            title: 'Autisti di app',
            text: 'Un modo semplice per rendere il viaggio più interessante per il passeggero — con controllo su riproduzione e pausa.',
            link: 'Vedi per autisti'
          },
          daily: {
            title: 'Chi guida quotidianamente',
            text: 'Trasforma spostamenti e viaggi in scoperte culturali, con i tuoi tempi.'
          }
        },
        values: {
          title: 'I nostri valori fondamentali',
          items: [
            { id: 'trajeto', title: 'Scoperta sul tragitto', description: 'Storie lungo il cammino, al momento giusto.' },
            { id: 'contexto', title: 'Chiarezza e contesto', description: 'Contenuto breve, diretto e ben spiegato.' },
            { id: 'autonomia', title: 'Autonomia dell\'utente', description: 'Tu decidi quando ascoltare e mettere in pausa.' },
            { id: 'simplicidade', title: 'Sicurezza e semplicità', description: 'Audio al primo posto, poco schermo.' },
            { id: 'dados', title: 'Responsabilità sui dati', description: 'Privacy e controllo nelle tue mani.' }
          ]
        },
        whatWeAreNot: {
          title: 'Cosa Tuggi NON è',
          bullets: [
            'Non è una guida che richiede di guardare lo schermo.',
            'Non è radio continua: tu controlli quando ascoltare.',
            'Non registra conversazioni e non fa ascolto passivo.'
          ]
        },
        responsibility: {
          title: 'Responsabilità',
          safety: {
            title: 'Sicurezza',
            text: 'L\'esperienza è pensata per l\'audio e l\'uso con telefono fissato. Massima attenzione al traffico.'
          },
          privacy: {
            title: 'Privacy by design',
            bullets: [
              'Posizione usata solo per attivare storie lungo il percorso.',
              'Non registriamo conversazioni; non facciamo ascolto passivo.',
              'Tu controlli le autorizzazioni e puoi revocarle quando vuoi.',
              'Puoi richiedere la cancellazione dei dati.'
            ],
            links: {
              privacy: 'Informativa sulla Privacy',
              dataDeletion: 'Cancellazione Dati'
            }
          }
        },
        community: {
          title: 'Costruito con la community',
          text: 'Vuoi suggerire punti, segnalare qualcosa di errato o inviare un\'idea? Leggiamo e priorizziamo miglioramenti continuamente.',
          cta: 'Parla con noi'
        },
        finalCta: {
          title: 'Inizia il tuo viaggio culturale su strada.',
          subtitle: 'Scarica l\'app negli store ufficiali.'
        }
      }
    };
    return content[language] || content['PT'];
  };

  const handleCTAClick = (ctaType: string) => {
    onCTAClick?.(ctaType, currentLanguage);
  };

  const content = getLocalizedContent(currentLanguage);

  return (
    <div className="min-h-screen bg-white">
      {/* SECTION 1 — HERO (manifesto) */}
      <section 
        className={`${layout.section.hero} relative overflow-hidden flex flex-col items-center justify-center text-center`}
        style={{ background: gradients.hero }}
      >
        <div className={layout.container.narrow}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
            {content.hero.title}
          </h1>
          <p className="text-xl lg:text-2xl text-neutral-700 leading-relaxed mb-8">
            {content.hero.subtitle}
          </p>
          <button 
            onClick={() => {
              const footerCta = document.getElementById('footer-cta');
              footerCta?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`${getButtonClasses('secondary', 'md')} mt-4`}
          >
            Baixar o app
          </button>
        </div>
      </section>

      {/* SECTION 2 — CULTURA EM MOVIMENTO */}
      <section className={`${layout.section.base} bg-white`}>
        <div className={layout.container.narrow}>
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-6 text-center">
            {content.block1.title}
          </h2>
          <p className="text-lg lg:text-xl text-neutral-700 leading-relaxed text-center">
            {content.block1.text}
          </p>
        </div>
      </section>

      {/* SECTION 3 — O QUE É A TUGGI HOJE */}
      <section className={`${layout.section.base} bg-white`}>
        <div className={layout.container.narrow}>
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-6 text-center">
            {content.block2.title}
          </h2>
          <p className="text-lg lg:text-xl text-neutral-700 leading-relaxed text-center">
            {content.block2.text}
          </p>
        </div>
      </section>

      {/* SECTION 4 — PARA QUEM EXISTE */}
      <section className={`${layout.section.base} bg-white`}>
        <div className={layout.container.base}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card A */}
            <div className={`${getCardClasses()} p-8 border border-neutral-200`}>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                {content.targetAudience.drivers.title}
              </h3>
              <p className="text-neutral-700 mb-6">
                {content.targetAudience.drivers.text}
              </p>
              <button 
                onClick={() => handleCTAClick('android_beta')}
                className="text-tuggi-primary font-semibold inline-flex items-center group"
              >
                <span>{content.targetAudience.drivers.link}</span>
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            {/* Card B */}
            <div className={`${getCardClasses()} p-8 border border-neutral-200`}>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                {content.targetAudience.daily.title}
              </h3>
              <p className="text-neutral-700">
                {content.targetAudience.daily.text}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — NOSSOS VALORES FUNDAMENTAIS */}
      <section className={`${layout.section.base} bg-white`}>
        <div className={layout.container.base}>
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center text-neutral-900">
            {content.values.title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.values.items.map((item: any) => (
              <div key={item.id} className={`${getCardClasses()} p-6 border border-neutral-200`}>
                <h3 className="text-xl font-bold text-tuggi-primary mb-2">{item.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRANSITION LINE */}
      <div className={layout.container.narrow}>
        <p className="text-center text-neutral-500 font-medium py-8 italic">
          “Para manter a experiência simples e segura, fazemos escolhas claras.”
        </p>
      </div>

      {/* SECTION 6 — O QUE NÃO SOMOS */}
      <section className={`${layout.section.base} bg-white pt-0`}>
        <div className={layout.container.narrow}>
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-8 text-center">
            {content.whatWeAreNot.title}
          </h2>
          <ul className="space-y-4 max-w-2xl mx-auto">
            {content.whatWeAreNot.bullets.map((bullet: string, idx: number) => (
              <li key={idx} className="flex items-start">
                <span className="text-tuggi-primary mr-3">•</span>
                <span className="text-lg text-neutral-700">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SECTION 7 — RESPONSABILIDADE */}
      <section className={`${layout.section.base} bg-white relative z-10 border-t border-neutral-100`}>
        <div className={layout.container.base}>
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-12 text-center">
            {content.responsibility.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-tuggi-primary">
                {content.responsibility.safety.title}
              </h3>
              <p className="text-lg text-neutral-700">
                {content.responsibility.safety.text}
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-tuggi-primary">
                {content.responsibility.privacy.title}
              </h3>
              <ul className="space-y-3 mb-6">
                {content.responsibility.privacy.bullets.map((bullet: string, idx: number) => (
                  <li key={idx} className="flex items-start text-neutral-700">
                    <span className="text-tuggi-primary mr-2 font-bold">✓</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => handleCTAClick('privacy_policy')}
                  className="text-tuggi-primary hover:underline text-sm font-medium"
                >
                  {content.responsibility.privacy.links.privacy}
                </button>
                <button 
                  onClick={() => handleCTAClick('data_deletion')}
                  className="text-tuggi-primary hover:underline text-sm font-medium"
                >
                  {content.responsibility.privacy.links.dataDeletion}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 — COMUNIDADE */}
      <section className={`${layout.section.base} bg-white`}>
        <div className={layout.container.narrow}>
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-6 text-center">
            {content.community.title}
          </h2>
          <p className="text-lg text-neutral-700 text-center mb-10">
            {content.community.text}
          </p>
          <div className="flex justify-center">
            <button 
              onClick={() => handleCTAClick('contact_sales')}
              className={`${getButtonClasses('secondary', 'lg')}`}
            >
              {content.community.cta}
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 9 — FOOTER CTA */}
      <section id="footer-cta" className={`${layout.section.base} bg-neutral-900 text-white text-center`}>
        <div className={layout.container.narrow}>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
            {content.finalCta.title}
          </h2>
          <p className="text-neutral-300 mb-10">
            {content.finalCta.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://apps.apple.com/br/app/tuggi-explore-ao-dirigir/id6744379818"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-neutral-100 transition-colors w-full sm:w-auto"
            >
              App Store
            </a>
            <a 
              href="https://play.google.com/store/apps/details?id=com.tuggidrive.app"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-neutral-800 text-white border border-white/20 px-8 py-4 rounded-xl font-bold hover:bg-neutral-700 transition-colors w-full sm:w-auto"
            >
              Google Play
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PurposePage;