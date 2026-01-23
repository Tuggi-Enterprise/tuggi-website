import React from 'react';
import { 
  ShieldCheck, 
  MessageSquare, 
  Heart, 
  Sliders, 
  Car,
  ChevronRight
} from 'lucide-react';
import { 
  getCardClasses, 
  layout 
} from '../utils/designSystem';
import { generateLocalizedUrl } from '../utils/routing';
import AudioSamplesSection from '../components/sections/AudioSamplesSection';
import TestimonialsV2 from '../components/sections/TestimonialsV2';

interface DriversLandingPageProps {
  currentLanguage?: 'PT' | 'EN' | 'ES' | 'FR' | 'DE' | 'IT';
  onCTAClick?: (ctaType: string, position?: string) => void;
}

const DriversLandingPage: React.FC<DriversLandingPageProps> = ({ currentLanguage = 'PT', onCTAClick }) => {
  const content = {
    PT: {
      hero: {
        title: 'Deixe a corrida mais interessante com histórias no trajeto.',
        subtitle: 'O Tuggi narra histórias curtas sobre os lugares no caminho, baseado na sua localização.',
        bullets: [
          'Áudio automático no caminho',
          'Roda junto com Waze e Uber',
          'Menos tela, mais foco'
        ],
        setup: 'Instale → abra → inicie o modo de viagem.',
        trust: 'Use com o celular fixo e atenção total ao trânsito.',
        secondaryCTA: 'Como usar durante a corrida'
      },
      benefits: {
        title: 'Por que motoristas usam',
        items: [
          {
            title: 'Cria assunto com o passageiro',
            description: 'Histórias curtas para a viagem render.'
          },
          {
            title: 'Experiência mais agradável',
            description: 'O trajeto fica mais leve e interessante.'
          },
          {
            title: 'Áudio por localização',
            description: 'As histórias tocam automaticamente ao passar pelos pontos.'
          },
          {
            title: 'Feito para o carro',
            description: 'Pensado para áudio, sem exigir tela.'
          }
        ]
      },
      howItWorks: {
        title: 'Como usar durante a corrida',
        steps: [
          'Baixe o app e escolha idioma/voz',
          'Inicie o modo de viagem',
          'Ao passar por pontos, o áudio toca'
        ],
        safety: 'Não mexa no celular dirigindo.'
      },
      privacy: {
        title: 'Privacidade por design',
        items: [
          'Localização usada para disparar histórias no trajeto.',
          'Não gravamos conversas; não fazemos ‘escuta’ passiva.',
          'Você controla permissões e pode revogar quando quiser.'
        ],
        links: {
          privacy: 'Política de Privacidade',
          deletion: 'Exclusão de Dados'
        }
      },
      finalCTA: {
        title: 'Pronto para usar no seu próximo trajeto?',
        subtitle: 'Baixe o Tuggi e teste em uma corrida.'
      },
      legalNote: 'O Tuggi funciona em segundo plano junto com Waze, Maps e apps de mobilidade.'
    },
    EN: {
      hero: {
        title: 'Make the ride more interesting with stories on the way.',
        subtitle: 'Tuggi narrates short stories about places on the way, based on your location.',
        bullets: [
          'Automatic audio on the way',
          'Works with Waze and Uber',
          'Less screen, more focus'
        ],
        setup: 'Install → open → start travel mode.',
        trust: 'Use with phone fixed and full attention to traffic.',
        secondaryCTA: 'How to use during the ride'
      },
      benefits: {
        title: 'Why drivers use it',
        items: [
          {
            title: 'Creates conversation',
            description: 'Short stories to make the trip flow better.'
          },
          {
            title: 'More pleasant experience',
            description: 'The journey feels lighter and more interesting.'
          },
          {
            title: 'Location-based audio',
            description: 'Stories play automatically as you pass points.'
          },
          {
            title: 'Made for the car',
            description: 'Designed for audio, no screen interaction required.'
          }
        ]
      },
      howItWorks: {
        title: 'How to use during the ride',
        steps: [
          'Download the app and choose language/voice',
          'Start travel mode',
          'Audio plays as you pass points'
        ],
        safety: 'Do not handle your phone while driving.'
      },
      privacy: {
        title: 'Privacy by design',
        items: [
          'Location used to trigger stories along the way.',
          'We do not record conversations; no passive listening.',
          'You control permissions and can revoke them anytime.'
        ],
        links: {
          privacy: 'Privacy Policy',
          deletion: 'Data Deletion'
        }
      },
      finalCTA: {
        title: 'Ready for your next trip?',
        subtitle: 'Download Tuggi and test it in a ride.'
      },
      legalNote: 'Tuggi runs in the background alongside Waze, Maps, and mobility apps.'
    },
    ES: {
      hero: {
        title: 'Haz el viaje más interesante con historias en el camino.',
        subtitle: 'Tuggi narra historias cortas sobre los lugares en el camino, basado en su ubicación.',
        bullets: [
          'Audio automático en el camino',
          'Funciona con Waze, Maps y Uber',
          'Menos pantalla, más foco'
        ],
        setup: 'Instala → abre → inicia el modo de viaje.',
        trust: 'Usa con el celular fijo y atención total al tráfico.',
        secondaryCTA: 'Cómo usar durante el viaje'
      },
      benefits: {
        title: 'Por qué lo usan los conductores',
        items: [
          {
            title: 'Crea conversación',
            description: 'Historias cortas para que el viaje fluya.'
          },
          {
            title: 'Experiencia más agradable',
            description: 'El trayecto se siente más ligero e interesante.'
          },
          {
            title: 'Audio por ubicación',
            description: 'Las historias suenan automáticamente al pasar por los puntos.'
          },
          {
            title: 'Hecho para el coche',
            description: 'Diseñado para audio, sin interacción con la pantalla.'
          }
        ]
      },
      howItWorks: {
        title: 'Cómo usar durante el viaje',
        steps: [
          'Descarga la app y elige idioma/voz',
          'Inicia el modo de viaje',
          'Al pasar por puntos, el audio suena'
        ],
        safety: 'No manipules el móvil mientras conduces.'
      },
      privacy: {
        title: 'Privacidad por diseño',
        items: [
          'Ubicación usada para activar historias en el trayecto.',
          'No grabamos conversaciones; sin escucha pasiva.',
          'Controlas los permisos y puedes revocarlos cuando quieras.'
        ],
        links: {
          privacy: 'Política de Privacidad',
          deletion: 'Eliminación de Datos'
        }
      },
      finalCTA: {
        title: '¿Listo para tu próximo trayecto?',
        subtitle: 'Descarga Tuggi y pruébalo en un viaje.'
      },
      legalNote: 'Tuggi funciona en segundo plano junto con Waze, Maps y apps de movilidad.'
    },
    FR: {
      hero: {
        title: 'Rendez le trajet plus intéressant avec des histoires sur la route.',
        subtitle: 'Tuggi raconte de courtes histoires sur les lieux du parcours, basées sur votre localisation.',
        bullets: [
          'Audio automatique sur la route',
          'Fonctionne avec Waze, Maps et Uber',
          'Moins d\'écran, plus de concentration'
        ],
        setup: 'Installez → ouvrez → lancez le mode voyage.',
        trust: 'Utilisez avec le téléphone fixé et une attention totale à la circulation.',
        secondaryCTA: 'Comment utiliser pendant la course'
      },
      benefits: {
        title: 'Pourquoi les conducteurs l\'utilisent',
        items: [
          {
            title: 'Crée de la conversation',
            description: 'De courtes histoires pour rendre le voyage fluide.'
          },
          {
            title: 'Expérience plus agréable',
            description: 'Le trajet semble plus léger et plus intéressant.'
          },
          {
            title: 'Audio par localisation',
            description: 'Les histoires se jouent automatiquement lorsque vous passez des points.'
          },
          {
            title: 'Fait pour la voiture',
            description: 'Conçu pour l\'audio, aucune interaction avec l\'écran requise.'
          }
        ]
      },
      howItWorks: {
        title: 'Comment utiliser pendant la course',
        steps: [
          'Téléchargez l\'app et choisissez la langue/voix',
          'Lancez le mode voyage',
          'L\'audio se joue en passant les points'
        ],
        safety: 'Ne manipulez pas votre téléphone en conduisant.'
      },
      privacy: {
        title: 'Confidentialité dès la conception',
        items: [
          'Localisation utilisée pour déclencher des histoires sur le trajet.',
          'Nous n\'enregistrons pas les conversations ; pas d\'écoute passive.',
          'Vous contrôlez les permissions et pouvez les révoquer à tout moment.'
        ],
        links: {
          privacy: 'Politique de Confidentialité',
          deletion: 'Suppression des Données'
        }
      },
      finalCTA: {
        title: 'Prêt pour votre prochain trajet ?',
        subtitle: 'Téléchargez Tuggi et testez-le lors d’une course.'
      },
      legalNote: 'Tuggi fonctionne en arrière-plan avec Waze, Maps et les apps de mobilité.'
    },
    DE: {
      hero: {
        title: 'Machen Sie die Fahrt interessanter mit Geschichten auf dem Weg.',
        subtitle: 'Tuggi erzählt kurze Geschichten über Orte auf dem Weg, basierend auf Ihrem Standort.',
        bullets: [
          'Automatisches Audio auf dem Weg',
          'Funktioniert mit Waze, Maps und Uber',
          'Weniger Bildschirm, mehr Fokus'
        ],
        setup: 'Installieren → öffnen → Reisemodus starten.',
        trust: 'Nutzen Sie es mit festem Handy und voller Aufmerksamkeit auf den Verkehr.',
        secondaryCTA: 'Wie man es während der Fahrt nutzt'
      },
      benefits: {
        title: 'Warum Fahrer es nutzen',
        items: [
          {
            title: 'Schafft Gesprächsstoff',
            description: 'Kurze Geschichten, damit die Reise fließt.'
          },
          {
            title: 'Angenehmeres Erlebnis',
            description: 'Die Fahrt fühlt sich leichter und interessanter an.'
          },
          {
            title: 'Audio nach Standort',
            description: 'Geschichten spielen automatisch ab, wenn Sie Punkte passieren.'
          },
          {
            title: 'Für das Auto gemacht',
            description: 'Für Audio konzipiert, keine Bildschirminteraktion erforderlich.'
          }
        ]
      },
      howItWorks: {
        title: 'Wie man es während der Fahrt nutzt',
        steps: [
          'App laden und Sprache/Stimme wählen',
          'Reisemodus starten',
          'Audio spielt beim Passieren von Punkten'
        ],
        safety: 'Bedienen Sie Ihr Telefon nicht während der Fahrt.'
      },
      privacy: {
        title: 'Datenschutz durch Design',
        items: [
          'Standort genutzt, um Geschichten auf dem Weg auszulösen.',
          'Wir zeichnen keine Gespräche auf; kein passives Zuhören.',
          'Sie kontrollieren Berechtigungen und können sie jederzeit widerrufen.'
        ],
        links: {
          privacy: 'Datenschutzrichtlinie',
          deletion: 'Datenlöschung'
        }
      },
      finalCTA: {
        title: 'Bereit für Ihre nächste Fahrt?',
        subtitle: 'Laden Sie Tuggi und testen Sie es auf einer Fahrt.'
      },
      legalNote: 'Tuggi läuft im Hintergrund zusammen mit Waze, Maps und Mobilitäts-Apps.'
    },
    IT: {
      hero: {
        title: 'Rendi la corsa più interessante con storie lungo il tragitto.',
        subtitle: 'Tuggi narra brevi storie sui luoghi lungo il percorso, in base alla tua posizione.',
        bullets: [
          'Audio automatico lungo il percorso',
          'Funziona con Waze, Maps e Uber',
          'Meno schermo, più focus'
        ],
        setup: 'Installa → apri → avvia modalità viaggio.',
        trust: 'Usa con il cellulare fissato e massima attenzione al traffico.',
        secondaryCTA: 'Come usare durante la corsa'
      },
      benefits: {
        title: 'Perché i conducenti lo usano',
        items: [
          {
            title: 'Crea conversazione',
            description: 'Brevi storie per far scorrere meglio il viaggio.'
          },
          {
            title: 'Esperienza più piacevole',
            description: 'Il tragitto sembra più leggero e interessante.'
          },
          {
            title: 'Audio per posizione',
            description: 'Le storie partono automaticamente quando passi i punti.'
          },
          {
            title: 'Fatto per l\'auto',
            description: 'Progettato per l\'audio, nessuna interazione con lo schermo richiesta.'
          }
        ]
      },
      howItWorks: {
        title: 'Come usare durante la corsa',
        steps: [
          'Scarica l\'app e scegli lingua/voce',
          'Avvia modalità viaggio',
          'L\'audio parte passando i punti'
        ],
        safety: 'Non maneggiare il telefono mentre guidi.'
      },
      privacy: {
        title: 'Privacy by design',
        items: [
          'Posizione usata per attivare storie lungo il tragitto.',
          'Non registriamo conversazioni; nessun ascolto passivo.',
          'Tu controlli i permessi e puoi revocarli quando vuoi.'
        ],
        links: {
          privacy: 'Informativa sulla Privacy',
          deletion: 'Cancellazione Dati'
        }
      },
      finalCTA: {
        title: 'Pronto per il tuo prossimo viaggio?',
        subtitle: 'Scarica Tuggi e provalo in una corsa.'
      },
      legalNote: 'Tuggi funziona in background insieme a Waze, Maps e app di mobilità.'
    }
  } as const;

  const t = content[currentLanguage];

  const handleCTAClick = (ctaType: string) => {
    onCTAClick?.(ctaType, 'drivers_page');
  };

  const storeUrls = {
    apple: 'https://apps.apple.com/br/app/tuggi-explore-ao-dirigir/id6744379818?utm_source=meta&utm_medium=paid_social&utm_campaign=drivers&utm_content=ad',
    google: 'https://play.google.com/store/apps/details?id=com.tuggidrive.app&utm_source=meta&utm_medium=paid_social&utm_campaign=drivers&utm_content=ad'
  };

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-900 overflow-x-hidden">
      {/* SECTION 1 — HERO */}
      <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-32 bg-neutral-50 border-b border-neutral-100">
        <div className={layout.container.base}>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-neutral-900 leading-[1.1] mb-8 tracking-tight">
              {t.hero.title}
            </h1>
            <p className="text-xl sm:text-2xl text-neutral-600 leading-relaxed mb-10 max-w-3xl mx-auto font-medium">
              {t.hero.subtitle}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-12">
              {t.hero.bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-neutral-200 shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-tuggi-primary"></div>
                  <span className="text-sm sm:text-base font-bold text-neutral-700 whitespace-nowrap">{bullet}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center mb-4">
              <a 
                href={storeUrls.apple}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleCTAClick('app_store_download_hero')}
                className="bg-neutral-900 text-white px-8 lg:px-10 py-4 rounded-xl font-bold transition-all duration-300 inline-flex items-center gap-3 hover:bg-black hover:scale-105 transform shadow-xl justify-center text-lg"
              >
                <svg viewBox="0 0 384 512" className="w-6 h-6 fill-current">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                </svg>
                <span>App Store</span>
              </a>
              <a 
                href={storeUrls.google}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleCTAClick('google_play_download_hero')}
                className="bg-neutral-900 text-white px-8 lg:px-10 py-4 rounded-xl font-bold transition-all duration-300 inline-flex items-center gap-3 hover:bg-black hover:scale-105 transform shadow-xl justify-center text-lg"
              >
                <svg viewBox="0 0 512 512" className="w-6 h-6 fill-current">
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                </svg>
                <span>Google Play</span>
              </a>
            </div>

            <p className="text-sm font-bold text-tuggi-primary mb-8 px-4 py-2 bg-tuggi-primary/5 inline-block rounded-full">
              {t.hero.setup}
            </p>

            <p className="text-xs font-bold text-neutral-400 mb-8 max-w-xs mx-auto">
              {t.hero.trust}
            </p>

            <button 
              onClick={() => document.getElementById('como-funciona')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-tuggi-primary font-bold flex items-center gap-2 mx-auto hover:underline"
            >
              {t.hero.secondaryCTA}
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 2 — BENEFÍCIOS */}
      <section className={layout.section.base}>
        <div className={layout.container.base}>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-16 tracking-tight">
            {t.benefits.title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.benefits.items.map((item, idx) => {
              const icons = [MessageSquare, Heart, Sliders, Car];
              const Icon = icons[idx];
              return (
                <div key={idx} className={`${getCardClasses()} p-8 flex flex-col items-center text-center h-full hover:border-tuggi-primary/30 transition-colors border-neutral-100`}>
                  <div className="w-16 h-16 rounded-2xl bg-tuggi-primary/5 flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-tuggi-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-neutral-600 leading-relaxed font-medium">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 2.5 — EXEMPLOS DE ÁUDIO */}
      <section className={layout.section.base}>
        <div className={layout.container.base}>
          <AudioSamplesSection currentLanguage={currentLanguage} />
        </div>
      </section>

      {/* SECTION 3 — COMO FUNCIONA */}
      <section id="como-funciona" className={`${layout.section.base} bg-white border-y border-neutral-100`}>
        <div className={layout.container.base}>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-16 tracking-tight text-neutral-900">
            {t.howItWorks.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
            {t.howItWorks.steps.map((step, idx) => (
              <div key={idx} className="relative group">
                <div className="text-[120px] font-black text-neutral-100 absolute -top-20 -left-6 select-none group-hover:text-tuggi-primary/10 transition-colors pointer-events-none">
                  0{idx + 1}
                </div>
                <div className="relative">
                  <div className="w-12 h-12 rounded-full border-2 border-tuggi-primary flex items-center justify-center text-xl font-bold mb-6 text-tuggi-primary bg-white">
                    {idx + 1}
                  </div>
                  <p className="text-xl lg:text-2xl font-bold leading-snug text-neutral-800">
                    {step}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <p className="inline-block px-4 py-2 bg-neutral-100 rounded-full text-neutral-500 font-bold uppercase tracking-widest text-xs">
              {t.howItWorks.safety}
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4 — VÍDEO */}
      <section className={layout.section.base}>
        <div className={layout.container.narrow}>
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-neutral-900 border-8 border-white">
            <iframe
              src="https://www.youtube.com/embed/0wcdWElwkRM?rel=0&modestbranding=1&showinfo=0&controls=1&fs=1"
              title="Tuggi Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
          <p className="text-center mt-6 text-neutral-400 font-bold">
             Veja em 30 segundos.
          </p>
        </div>
      </section>

      {/* SECTION 4.5 — DEPOIMENTOS */}
      <TestimonialsV2 currentLanguage={currentLanguage} />

      {/* SECTION 5 — PRIVACIDADE E SEGURANÇA */}
      <section className={`${layout.section.base} bg-neutral-50`}>
        <div className={layout.container.base}>
          <div className="max-w-3xl mx-auto bg-white p-10 lg:p-16 rounded-[40px] shadow-sm border border-neutral-100">
            <div className="flex items-center gap-4 mb-8">
              <ShieldCheck className="w-10 h-10 text-tuggi-primary" />
              <h2 className="text-3xl font-extrabold tracking-tight">
                {t.privacy.title}
              </h2>
            </div>
            <div className="space-y-6 mb-12">
              {t.privacy.items.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-tuggi-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-tuggi-primary"></div>
                  </div>
                  <p className="text-lg text-neutral-700 font-medium">{item}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-6 border-t border-neutral-100 pt-8">
              <a 
                href={generateLocalizedUrl(currentLanguage, 'privacy')} 
                onClick={(e) => { e.preventDefault(); onCTAClick?.('privacy_policy', 'drivers_page'); }}
                className="text-tuggi-primary font-bold hover:underline"
              >
                {t.privacy.links.privacy}
              </a>
              <a 
                href={generateLocalizedUrl(currentLanguage, 'data-deletion')}
                onClick={(e) => { e.preventDefault(); onCTAClick?.('data_deletion', 'drivers_page'); }}
                className="text-tuggi-primary font-bold hover:underline"
              >
                {t.privacy.links.deletion}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — FINAL CTA */}
      <section className={`${layout.section.base} bg-tuggi-primary text-white overflow-hidden relative`}>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className={layout.container.base}>
          <div className="max-w-4xl mx-auto text-center relative">
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight">
              {t.finalCTA.title}
            </h2>
            <p className="text-xl text-white/90 mb-12 font-medium">
              {t.finalCTA.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center mb-8">
              <a 
                href={storeUrls.apple}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleCTAClick('app_store_download_footer')}
                className="bg-white text-tuggi-primary px-10 py-5 rounded-2xl font-black transition-all duration-300 inline-flex items-center gap-3 hover:bg-neutral-50 hover:scale-105 transform shadow-2xl justify-center text-lg uppercase tracking-wider"
              >
                <svg viewBox="0 0 384 512" className="w-6 h-6 fill-current">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                </svg>
                <span>Baixar na App Store</span>
              </a>
              <a 
                href={storeUrls.google}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleCTAClick('google_play_download_footer')}
                className="bg-white text-tuggi-primary px-10 py-5 rounded-2xl font-black transition-all duration-300 inline-flex items-center gap-3 hover:bg-neutral-50 hover:scale-105 transform shadow-2xl justify-center text-lg uppercase tracking-wider"
              >
                <svg viewBox="0 0 512 512" className="w-6 h-6 fill-current">
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                </svg>
                <span>Baixar no Google Play</span>
              </a>
            </div>
            <p className="text-sm text-white/70 font-bold max-w-sm mx-auto">
              {t.legalNote}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DriversLandingPage;