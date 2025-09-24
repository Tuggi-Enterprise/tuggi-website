import React, { useEffect, useState } from 'react';
import { DollarSign, Star, Users, Zap, Smartphone, Navigation, Mic, X } from 'lucide-react';
import CTAButton from './CTAButton';
import { generateLocalizedUrl } from '../utils/routing';

interface DriversLandingPageProps {
  currentLanguage?: 'PT' | 'EN' | 'ES';
  onCTAClick?: (ctaType: string, position?: string) => void;
}

const DriversLandingPage: React.FC<DriversLandingPageProps> = ({ currentLanguage = 'PT', onCTAClick }) => {
  const content = {
    PT: {
      heroTitle: 'Ganhe mais oferecendo uma experiência diferente aos passageiros',
      heroSubtitle: 'O Tuggi é um copiloto cultural que roda junto com seu app de corridas. Simples, automático e sem esforço extra.',
      cta: 'Quero ganhar mais dirigindo',
      benefits: [
        {
          icon: DollarSign,
          title: 'Mais gorjetas',
          description: 'Onde houver cultura de gorjeta'
        },
        {
          icon: Star,
          title: 'Notas melhores',
          description: 'Experiência mais positiva'
        },
        {
          icon: Users,
          title: 'Passageiros fidelizados',
          description: 'Lembram de você'
        },
        {
          icon: Zap,
          title: 'Sem esforço extra',
          description: 'Ative e dirija'
        }
      ],
      howItWorksTitle: 'Como funciona',
      howItWorksSteps: [
        'Baixe o app e configure seu perfil',
        'Ative o Tuggi antes de começar a dirigir',
        'Dirija normalmente enquanto o Tuggi enriquece a experiência'
      ],
      globalValueTitle: 'Pronto para transformar suas corridas?',
      globalValueDescription: 'Junte-se aos motoristas que já estão oferecendo experiências únicas e colhendo os benefícios. Estamos liberando acesso antecipado para motoristas interessados.',
      legalNote: 'O Tuggi funciona em paralelo com aplicativos de mobilidade, sem vínculo ou parceria oficial com essas marcas.'
    },
    EN: {
      heroTitle: 'Earn more by offering passengers a different experience',
      heroSubtitle: 'Tuggi is a cultural co-pilot that runs alongside your ride-hailing app. Simple, automatic, and effortless.',
      cta: 'I want to earn more driving',
      benefits: [
        {
          icon: DollarSign,
          title: 'More tips',
          description: 'Where tipping applies'
        },
        {
          icon: Star,
          title: 'Better ratings',
          description: 'More positive rides'
        },
        {
          icon: Users,
          title: 'Loyal riders',
          description: 'They remember you'
        },
        {
          icon: Zap,
          title: 'No extra effort',
          description: 'Turn on and drive'
        }
      ],
      howItWorksTitle: 'How it works',
      howItWorksSteps: [
        'Download the app and set up your profile',
        'Turn on Tuggi before you start driving',
        'Drive normally while Tuggi enriches the experience'
      ],
      globalValueTitle: 'Ready to transform your rides?',
      globalValueDescription: 'Join drivers who are already offering unique experiences and reaping the benefits. We\'re opening early access for interested drivers.',
      legalNote: 'Tuggi works alongside ride-hailing apps without any official partnership or endorsement.'
    },
    ES: {
      heroTitle: 'Gana más ofreciendo a tus pasajeros una experiencia diferente',
      heroSubtitle: 'Tuggi es un copiloto cultural que funciona junto con tu app de movilidad. Simple, automático y sin esfuerzo.',
      cta: 'Quiero ganar más conduciendo',
      benefits: [
        {
          icon: DollarSign,
          title: 'Más propinas',
          description: 'Donde aplica'
        },
        {
          icon: Star,
          title: 'Mejores calificaciones',
          description: 'Viajes más positivos'
        },
        {
          icon: Users,
          title: 'Pasajeros fidelizados',
          description: 'Te recuerdan'
        },
        {
          icon: Zap,
          title: 'Sin esfuerzo extra',
          description: 'Activa y conduce'
        }
      ],
      howItWorksTitle: 'Cómo funciona',
      howItWorksSteps: [
        'Descarga la app y configura tu perfil',
        'Activa Tuggi antes de empezar a conducir',
        'Conduce normalmente mientras Tuggi enriquece la experiencia'
      ],
      globalValueTitle: '¿Listo para transformar tus viajes?',
      globalValueDescription: 'Únete a los conductores que ya están ofreciendo experiencias únicas y cosechando los beneficios. Estamos abriendo acceso anticipado para conductores interesados.',
      legalNote: 'Tuggi funciona junto a las apps de movilidad, sin vínculo ni alianza oficial.'
    },
  } as const;

  const t = content[currentLanguage];

  // Sticky CTA state and microcopy variant per session
  const [showStickyCTA, setShowStickyCTA] = useState<boolean>(false);
  const [stickyCTAText, setStickyCTAText] = useState<string>(t.cta);

  useEffect(() => {
    try {
      const hidden = sessionStorage.getItem('sticky_cta_hidden');
      if (hidden !== 'true') {
        setShowStickyCTA(true);
      }
    } catch (e) {
      setShowStickyCTA(true);
    }
    // Unify microcopy across CTAs: use page-level cta text for current language
    setStickyCTAText(t.cta);
  }, [currentLanguage, t.cta]);

  const handleDismissSticky = () => {
    try {
      sessionStorage.setItem('sticky_cta_hidden', 'true');
    } catch (e) {}
    setShowStickyCTA(false);
  };

  return (
    <div className="w-full bg-white pb-20 md:pb-0">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight mb-6 max-w-4xl mx-auto">
              {t.heroTitle}
            </h1>
            <p className="text-xl sm:text-2xl text-neutral-600 leading-relaxed mb-10 max-w-3xl mx-auto">
              {t.heroSubtitle}
            </p>
            
            <div className="mb-12">
              <CTAButton
                 variant="primary"
                 size="lg"
                 googleFormUrl="https://forms.gle/B5VWqtDgjEKEiHv1A"
                 ctaText={{ EN: content.EN.cta, PT: content.PT.cta, ES: content.ES.cta }}
                 trackingContext={{ section: 'hero', position: 'hero_primary' }}
                 currentLanguage={currentLanguage}
                 currentPage="drivers"
                 attention
                 className="!bg-[#00A8E8] hover:!bg-[#FF6F00] !text-white !text-xl !px-12 !py-4"
               />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-neutral-50 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-[#00A8E8]/10 rounded-full flex items-center justify-center">
                  <benefit.icon className="w-10 h-10 text-[#00A8E8]" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 text-center mb-12">
            {t.howItWorksTitle}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {t.howItWorksSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-8">
                  <div className="w-16 h-16 mx-auto bg-[#00A8E8] rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                    {index + 1}
                  </div>
                  {index < t.howItWorksSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-neutral-200 transform translate-x-8" />
                  )}
                </div>
                <p className="text-lg text-neutral-700 leading-relaxed max-w-xs mx-auto">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Value Proposition */}
      <section className="bg-gradient-to-br from-[#00A8E8] to-[#0088CC] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            {t.globalValueTitle}
          </h2>
          <p className="text-xl text-white/90 leading-relaxed mb-10">
            {t.globalValueDescription}
          </p>
          
          <CTAButton
             variant="secondary"
             size="lg"
             googleFormUrl="https://forms.gle/B5VWqtDgjEKEiHv1A"
             ctaText={{ EN: content.EN.cta, PT: content.PT.cta, ES: content.ES.cta }}
             trackingContext={{ section: 'global_value', position: 'global_cta' }}
             currentLanguage={currentLanguage}
             currentPage="drivers"
             className="!bg-white !text-[#00A8E8] hover:!bg-[#FF6F00] hover:!text-white !text-xl !px-12 !py-4 transform hover:scale-105"
           />
        </div>
      </section>

      {/* Legal Disclaimer */}
      <section className="bg-neutral-50 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-neutral-500 text-sm leading-relaxed max-w-4xl mx-auto">
            {t.legalNote}
            {' '}
            {currentLanguage === 'PT' && (
              <>
                · Leia nossos{' '}
                <a href={generateLocalizedUrl('PT', 'terms')} className="underline hover:text-neutral-700 transition-colors">Termos de Uso</a>
                {' '}e{' '}
                <a href={generateLocalizedUrl('PT', 'privacy')} className="underline hover:text-neutral-700 transition-colors">Política de Privacidade</a>.
              </>
            )}
            {currentLanguage === 'EN' && (
              <>
                · Read our{' '}
                <a href={generateLocalizedUrl('EN', 'terms')} className="underline hover:text-neutral-700 transition-colors">Terms of Use</a>
                {' '}and{' '}
                <a href={generateLocalizedUrl('EN', 'privacy')} className="underline hover:text-neutral-700 transition-colors">Privacy Policy</a>.
              </>
            )}
            {currentLanguage === 'ES' && (
              <>
                · Lee nuestros{' '}
                <a href={generateLocalizedUrl('ES', 'terms')} className="underline hover:text-neutral-700 transition-colors">Términos de Uso</a>
                {' '}y{' '}
                <a href={generateLocalizedUrl('ES', 'privacy')} className="underline hover:text-neutral-700 transition-colors">Política de Privacidad</a>.
              </>
            )}
          </p>
        </div>
      </section>
      {/* Sticky Mobile CTA (mobile-only) */}
      {showStickyCTA && (
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
          <div
            className="relative bg-white/90 backdrop-blur-md shadow-[0_-4px_12px_rgba(0,0,0,0.06)] px-4 py-3"
            style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
          >
            <button
              type="button"
              aria-label={currentLanguage === 'PT' ? 'Fechar' : currentLanguage === 'ES' ? 'Cerrar' : 'Close'}
              onClick={handleDismissSticky}
              className="absolute top-2 right-3 p-2 rounded-full bg-white/80 hover:bg-white shadow-sm border border-white/60"
            >
              <X className="w-4 h-4 text-neutral-700" />
            </button>
            <div className="max-w-6xl mx-auto">
              <CTAButton
                variant="primary"
                size="lg"
                googleFormUrl="https://forms.gle/B5VWqtDgjEKEiHv1A"
                ctaText={{
                  EN: content.EN.cta,
                  PT: stickyCTAText,
                  ES: content.ES.cta
                }}
                trackingContext={{ section: 'sticky_mobile', position: 'footer_fixed_cta' }}
                currentLanguage={currentLanguage}
                currentPage="drivers"
                attention
                className="w-full !bg-[#00A8E8] hover:!bg-[#FF6F00] !text-white !text-base !px-6 !py-3"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DriversLandingPage;