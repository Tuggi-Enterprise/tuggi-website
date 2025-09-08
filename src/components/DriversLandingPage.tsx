import React from 'react';
import { Car, Smartphone, Navigation, Mic, Sparkles, Gift, Coins, Handshake, Smile } from 'lucide-react';
import CTAButton from './CTAButton';
import { generateLocalizedUrl } from '../utils/routing';
import VideoTutorialsSection from './VideoTutorialsSection';

interface DriversLandingPageProps {
  currentLanguage?: 'PT' | 'EN' | 'ES';
  onCTAClick?: (ctaType: string, position?: string) => void;
}

const DriversLandingPage: React.FC<DriversLandingPageProps> = ({ currentLanguage = 'PT', onCTAClick }) => {
  const content = {
    EN: {
      heroTitle: 'Turn your rides into unique experiences with Tuggi',
      heroSubtitle: 'While you drive, Tuggi narrates stories and fun facts about the city for your passengers. A simple touch that can make a real difference in your day.',
      cta: 'I want to join for free',
      whatIsTitle: 'What is Tuggi',
      whatIsParagraphs: [
        'Tuggi is an app that works like a cultural co-pilot.',
        'It runs in the background alongside Uber, 99, inDrive or Cabify and automatically shares curiosities about the places you pass by.',
        'You keep driving as usual. Your passengers get a new kind of experience.'
      ],
      benefitsTitle: 'Benefits for you',
      benefits: [
        { icon: Sparkles, text: 'Stand out from other drivers' },
        { icon: Gift, text: 'Surprise your passengers with something new' },
        { icon: Coins, text: 'Increase your chances of getting tips' },
        { icon: Handshake, text: 'Win riders who will want to travel with you again' },
        { icon: Smartphone, text: 'Easy to use: just turn it on and drive' },
      ],
      howTitle: 'How it works',
      howSteps: [
        { icon: Smartphone, title: 'Turn on Tuggi on your phone before the ride' },
        { icon: Navigation, title: 'Keep using Uber, 99, inDrive or Cabify as usual' },
        { icon: Mic, title: 'Tuggi narrates local stories along the way' },
        { icon: Smile, title: 'Your passengers are delighted — you score extra points' },
      ],
      whoTitle: 'Who can join',
      whoParagraphs: [
        'Any ride-hailing driver can use it: Uber, 99, inDrive, Cabify and others.',
        'For now, access is open to drivers in Brazil.',
        'Participation is 100% free during the testing period.'
      ],
      finalCallTitle: 'Join the drivers testing Tuggi',
      finalCallParagraph: 'Offer a unique experience to your passengers. It’s simple, free, and can make your rides truly special.',
      legalNote: 'Tuggi works alongside ride-hailing apps without any official partnership or endorsement from those brands.'
    },
    PT: {
      heroTitle: 'Transforme suas corridas em experiências únicas com o Tuggi',
      heroSubtitle: 'Enquanto você dirige, o Tuggi narra histórias e curiosidades da cidade para os passageiros. Um diferencial simples que pode fazer toda a diferença no seu dia a dia.',
      cta: 'Quero participar gratuitamente',
      whatIsTitle: 'O que é o Tuggi',
      whatIsParagraphs: [
        'O Tuggi é um aplicativo que funciona como um copiloto cultural.',
        'Ele roda em segundo plano junto com o Uber, 99, InDrive ou Cabify e conta automaticamente curiosidades sobre os lugares por onde você passa.',
        'Você continua dirigindo normalmente. Seus passageiros vivem uma experiência nova.'
      ],
      benefitsTitle: 'Benefícios para você',
      benefits: [
        { icon: Sparkles, text: 'Diferencie-se dos outros motoristas' },
        { icon: Gift, text: 'Surpreenda seus passageiros com algo novo' },
        { icon: Coins, text: 'Aumente as chances de ganhar gorjeta' },
        { icon: Handshake, text: 'Conquiste clientes que vão querer viajar de novo com você' },
        { icon: Smartphone, text: 'Fácil de usar: basta ligar o app e dirigir' },
      ],
      howTitle: 'Como funciona',
      howSteps: [
        { icon: Smartphone, title: 'Ative o Tuggi no seu celular antes da corrida' },
        { icon: Navigation, title: 'Continue usando normalmente o Uber, 99, InDrive ou Cabify' },
        { icon: Mic, title: 'O Tuggi narra curiosidades sobre os lugares no caminho' },
        { icon: Smile, title: 'Seus passageiros se surpreendem — e você ganha pontos extras' },
      ],
      whoTitle: 'Quem pode participar',
      whoParagraphs: [
        'Qualquer motorista de aplicativo pode usar: Uber, 99, InDrive, Cabify e outros.',
        'Neste momento, o acesso está aberto para motoristas no Brasil.',
        'A participação é 100% gratuita durante o período de testes.'
      ],
      finalCallTitle: 'Junte-se aos motoristas que estão testando o Tuggi',
      finalCallParagraph: 'Ofereça uma experiência única para seus passageiros. É simples, gratuito e pode transformar suas corridas em algo muito mais especial.',
      legalNote: 'Tuggi funciona junto com apps de corrida, sem vínculo ou parceria oficial com essas marcas.'
    },
    ES: {
      heroTitle: 'Transforma tus viajes en experiencias únicas con Tuggi',
      heroSubtitle: 'Mientras conduces, Tuggi narra historias y curiosidades de la ciudad para tus pasajeros. Un toque sencillo que puede marcar una gran diferencia en tu día a día.',
      cta: 'Quiero participar gratis',
      whatIsTitle: 'Qué es Tuggi',
      whatIsParagraphs: [
        'Tuggi es una app que funciona como un copiloto cultural.',
        'Funciona en segundo plano junto con Uber, 99, inDrive o Cabify y comparte automáticamente curiosidades sobre los lugares por donde pasas.',
        'Tú sigues conduciendo normalmente. Tus pasajeros viven una experiencia nueva.'
      ],
      benefitsTitle: 'Beneficios para ti',
      benefits: [
        { icon: Sparkles, text: 'Diferénciate de otros conductores' },
        { icon: Gift, text: 'Sorprende a tus pasajeros con algo nuevo' },
        { icon: Coins, text: 'Aumenta tus posibilidades de recibir propina' },
        { icon: Handshake, text: 'Gana pasajeros que querrán viajar de nuevo contigo' },
        { icon: Smartphone, text: 'Fácil de usar: solo enciéndelo y conduce' },
      ],
      howTitle: 'Cómo funciona',
      howSteps: [
        { icon: Smartphone, title: 'Enciende Tuggi en tu teléfono antes del viaje' },
        { icon: Navigation, title: 'Sigue usando Uber, 99, inDrive o Cabify con normalidad' },
        { icon: Mic, title: 'Tuggi narra curiosidades sobre los lugares en el camino' },
        { icon: Smile, title: 'Tus pasajeros se sorprenden — y tú sumas puntos extra' },
      ],
      whoTitle: 'Quién puede participar',
      whoParagraphs: [
        'Cualquier conductor de apps puede usarlo: Uber, 99, inDrive, Cabify y otros.',
        'Por ahora, el acceso está abierto para conductores en Brasil.',
        'La participación es 100% gratuita durante el período de pruebas.'
      ],
      finalCallTitle: 'Únete a los conductores que están probando Tuggi',
      finalCallParagraph: 'Ofrece una experiencia única a tus pasajeros. Es simple, gratis y puede hacer que tus viajes sean mucho más especiales.',
      legalNote: 'Tuggi funciona junto con apps de viaje, sin vínculo ni asociación oficial con esas marcas.'
    },
  } as const;

  const t = content[currentLanguage];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight mb-4">
                {t.heroTitle}
              </h1>
              <p className="text-neutral-600 text-base sm:text-lg leading-relaxed mb-6">
                {t.heroSubtitle}
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-3 sm:space-y-0">
                {/* Unified CTA Button */}
                <CTAButton
                  variant="primary"
                  size="lg"
                  googleFormUrl="https://forms.gle/B5VWqtDgjEKEiHv1A"
                  ctaText={{ EN: content.EN.cta, PT: content.PT.cta, ES: content.ES.cta }}
                  trackingContext={{ section: 'hero', position: 'hero_primary' }}
                  currentLanguage={currentLanguage}
                  currentPage="drivers"
                  className="bg-tuggi-primary hover:bg-tuggi-secondary text-white"
                />
                <div className="flex items-center text-neutral-500 text-sm">
                  <Car className="w-5 h-5 mr-2 text-tuggi-primary" />
                  <span>Uber • 99 • inDrive • Cabify</span>
                </div>
              </div>
            </div>

            {/* Illustration */}
            <div className="relative">
              <div className="aspect-[4/3] md:aspect-[5/4] w-full bg-gradient-to-br from-tuggi-primary/10 to-tuggi-secondary/10 rounded-2xl border border-neutral-200 shadow-lg flex items-center justify-center overflow-hidden">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-tuggi-primary/20 rounded-full blur-xl" />
                <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-tuggi-secondary/20 rounded-full blur-2xl" />
                <div className="relative z-10 grid grid-cols-3 gap-4 p-6 sm:p-8">
                  <div className="col-span-2 bg-white rounded-xl shadow-md border border-neutral-200 p-4">
                    <div className="flex items-center space-x-3">
                      <Car className="w-8 h-8 text-tuggi-primary" />
                      <span className="font-semibold text-neutral-800">Tuggi in Ride</span>
                    </div>
                    <div className="mt-3 h-2 w-3/4 bg-neutral-100 rounded" />
                    <div className="mt-2 h-2 w-2/3 bg-neutral-100 rounded" />
                    <div className="mt-2 h-2 w-1/2 bg-neutral-100 rounded" />
                  </div>
                  <div className="bg-white rounded-xl shadow-md border border-neutral-200 p-4 flex flex-col items-center justify-center">
                    <Smartphone className="w-10 h-10 text-tuggi-secondary" />
                    <span className="mt-2 text-sm font-medium text-neutral-700">App</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Tuggi */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 mb-4">{t.whatIsTitle}</h2>
          <div className="text-neutral-600 text-base sm:text-lg max-w-3xl space-y-4">
            {t.whatIsParagraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 mb-8">{t.benefitsTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.benefits.map((b, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-neutral-200 p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-tuggi-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <b.icon className="w-6 h-6 text-tuggi-primary" />
                  </div>
                  <p className="text-neutral-700 font-medium leading-relaxed">{b.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 mb-8">{t.howTitle}</h2>
          <ol className="grid grid-cols-1 md:grid-cols-4 gap-6 list-decimal [&>li]:list-none">
            {t.howSteps.map((step, idx) => (
              <li key={idx} className="bg-white rounded-xl border border-neutral-200 p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-tuggi-primary text-white font-semibold mr-3">{idx + 1}</span>
                  <div className="w-10 h-10 rounded-xl bg-tuggi-secondary/10 flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-tuggi-secondary" />
                  </div>
                </div>
                <p className="text-neutral-700 font-medium leading-relaxed">{step.title}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Video Tutorials */}
      <VideoTutorialsSection currentLanguage={currentLanguage} onCTAClick={onCTAClick} />

      {/* Who can participate */}
      <section className="bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 mb-6">{t.whoTitle}</h2>
          <div className="space-y-3 text-neutral-700">
            {t.whoParagraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-18 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 mb-4 max-w-3xl mx-auto">{t.finalCallTitle}</h2>
          <p className="text-neutral-600 text-base sm:text-lg mb-6 max-w-2xl mx-auto">{t.finalCallParagraph}</p>
          <CTAButton
            variant="primary"
            size="lg"
            googleFormUrl="https://forms.gle/B5VWqtDgjEKEiHv1A"
            ctaText={{ EN: content.EN.cta, PT: content.PT.cta, ES: content.ES.cta }}
            trackingContext={{ section: 'final_call', position: 'final_cta' }}
            currentLanguage={currentLanguage}
            currentPage="drivers"
            className="bg-tuggi-primary hover:bg-tuggi-secondary text-white"
          />
        </div>
      </section>

      {/* Legal note */}
      <section className="bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-neutral-500 text-xs sm:text-sm">
            {t.legalNote}
            {' '}
            {currentLanguage === 'PT' && (
              <>
                · Leia nossos{' '}
                <a href={generateLocalizedUrl('PT', 'terms')} className="underline hover:text-neutral-700">Termos de Uso</a>
                {' '}e{' '}
                <a href={generateLocalizedUrl('PT', 'privacy')} className="underline hover:text-neutral-700">Política de Privacidade</a>.
              </>
            )}
            {currentLanguage === 'EN' && (
              <>
                · Read our{' '}
                <a href={generateLocalizedUrl('EN', 'terms')} className="underline hover:text-neutral-700">Terms of Use</a>
                {' '}and{' '}
                <a href={generateLocalizedUrl('EN', 'privacy')} className="underline hover:text-neutral-700">Privacy Policy</a>.
              </>
            )}
            {currentLanguage === 'ES' && (
              <>
                · Lee nuestros{' '}
                <a href={generateLocalizedUrl('ES', 'terms')} className="underline hover:text-neutral-700">Términos de Uso</a>
                {' '}y{' '}
                <a href={generateLocalizedUrl('ES', 'privacy')} className="underline hover:text-neutral-700">Política de Privacidad</a>.
              </>
            )}
          </p>
        </div>
      </section>
    </div>
  );
};

export default DriversLandingPage;