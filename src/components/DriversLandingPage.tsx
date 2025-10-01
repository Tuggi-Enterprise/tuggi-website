import React, { useEffect, useState, useRef } from 'react';
import { DollarSign, Star, Users, Zap, Smartphone, Navigation, Mic, X } from 'lucide-react';
import { LeadCaptureForm } from './LeadCaptureForm';
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

  // Ref para o formulário do hero
  const heroFormRef = useRef<HTMLDivElement>(null);

  // Sticky CTA state and microcopy variant per session
  const [showStickyCTA, setShowStickyCTA] = useState<boolean>(false);
  const [stickyCTAText, setStickyCTAText] = useState<string>(t.cta);
  // Hero CTA variant state (A/B testing for PT)
  const [heroCTAText, setHeroCTAText] = useState<string>(t.cta);

  // Função para fazer scroll suave até o formulário
  const scrollToHeroForm = () => {
    if (heroFormRef.current) {
      heroFormRef.current.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
      });
      
      // Opcional: focar no primeiro input após o scroll
      setTimeout(() => {
        const firstInput = heroFormRef.current?.querySelector('input, select, textarea') as HTMLElement;
        if (firstInput) {
          firstInput.focus();
        }
      }, 500);
    }
  };

  // Pick and persist PT CTA variant for the session
  useEffect(() => {
    if (currentLanguage !== 'PT') {
      setHeroCTAText(t.cta);
      return;
    }
    try {
      const key = 'pt_cta_variant_hero';
      const stored = sessionStorage.getItem(key);
      const variants = ['Quero ganhar mais dirigindo', 'Quero aumentar minhas gorjetas'];
      let chosen = stored;
      if (!chosen || !variants.includes(chosen)) {
        chosen = variants[Math.random() < 0.5 ? 0 : 1];
        sessionStorage.setItem(key, chosen);
      }
      setHeroCTAText(chosen);
    } catch {
      setHeroCTAText(t.cta);
    }
  }, [currentLanguage, t.cta]);

  // Atualiza a microcopy do CTA conforme o idioma (sticky usa versão curta em PT)
  useEffect(() => {
    if (currentLanguage === 'PT') {
      setStickyCTAText('Começar agora');
    } else {
      setStickyCTAText(t.cta);
    }
  }, [currentLanguage, t.cta]);

  // Exibe o Sticky CTA após intenção (scroll) ou tempo de permanência
  useEffect(() => {
    let timeoutId: number | undefined;

    const shouldShow = () => {
      try {
        const hidden = sessionStorage.getItem('sticky_cta_hidden');
        return hidden !== 'true';
      } catch {
        return true;
      }
    };

    const onScroll = () => {
      if (!shouldShow()) return;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const depth = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      if (depth >= 30) {
        setShowStickyCTA(true);
        window.removeEventListener('scroll', onScroll);
        if (timeoutId) window.clearTimeout(timeoutId);
      }
    };

    timeoutId = window.setTimeout(() => {
      if (!shouldShow()) return;
      setShowStickyCTA(true);
      window.removeEventListener('scroll', onScroll);
    }, 7000);

    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, []);

  const handleDismissSticky = () => {
    try {
      sessionStorage.setItem('sticky_cta_hidden', 'true');
    } catch (e) {}
    setShowStickyCTA(false);
  };

  return (
    <div className="w-full bg-white pb-16 md:pb-0">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-16">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-neutral-900 leading-tight mb-3 sm:mb-4 max-w-4xl mx-auto">
              {t.heroTitle}
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-neutral-600 leading-relaxed mb-4 sm:mb-6 max-w-3xl mx-auto">
              {t.heroSubtitle}
            </p>
            
            <div className="mb-3 sm:mb-4" ref={heroFormRef}>
              <LeadCaptureForm className="max-w-md mx-auto" currentLanguage={currentLanguage} />
            </div>
            
            {/* Trust Bar */}
            <div className="flex justify-center items-center space-x-4 mb-8 text-sm text-neutral-600">
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-500 mr-1" />
                <span>{currentLanguage === 'PT' ? 'NPS 4.8/5' : currentLanguage === 'ES' ? 'NPS 4.8/5' : 'NPS 4.8/5'}</span>
              </div>
              <div className="w-1 h-1 bg-neutral-300 rounded-full"></div>
              <div className="flex items-center">
                <Users className="w-4 h-4 text-blue-500 mr-1" />
                <span>{currentLanguage === 'PT' ? '10+ cidades' : currentLanguage === 'ES' ? '10+ ciudades' : '10+ cities'}</span>
              </div>
              <div className="w-1 h-1 bg-neutral-300 rounded-full"></div>
              <div className="flex items-center">
                <Zap className="w-4 h-4 text-green-500 mr-1" />
                <span>{currentLanguage === 'PT' ? 'Ative e dirija' : currentLanguage === 'ES' ? 'Activa y conduce' : 'Activate and drive'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-neutral-50 py-14 md:py-18">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
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
      <section id="como-funciona" className="bg-white py-16 md:py-20">
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

      {/* Video Section */}
      <section className="bg-neutral-50 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            {/* <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
              {currentLanguage === 'PT' ? 'Veja o Tuggi em ação' : 
               currentLanguage === 'ES' ? 'Ve Tuggi en acción' : 
               'See Tuggi in action'}
            </h2>
            <p className="text-xl text-neutral-600 leading-relaxed">
              {currentLanguage === 'PT' ? 'Descubra como o Tuggi transforma a experiência de dirigir' : 
               currentLanguage === 'ES' ? 'Descubre cómo Tuggi transforma la experiencia de conducir' : 
               'Discover how Tuggi transforms the driving experience'}
            </p> */}
          </div>
          
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-neutral-900">
            <iframe
              src="https://www.youtube.com/embed/0wcdWElwkRM?rel=0&modestbranding=1&showinfo=0&controls=1&fs=1&cc_load_policy=0&iv_load_policy=3&autohide=0"
              title={currentLanguage === 'PT' ? 'Descubra o Tuggi - Seu Copiloto Cultural' : 
                     currentLanguage === 'ES' ? 'Descubre Tuggi - Tu Copiloto Cultural' : 
                     'Discover Tuggi - Your Cultural Co-pilot'}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              loading="lazy"
              className="absolute inset-0 w-full h-full"
            />
          </div>
          
          <div className="text-center mt-8">
            <a
              href="https://youtu.be/0wcdWElwkRM"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#00A8E8] hover:text-[#0088CC] font-semibold transition-colors duration-200"
            >
              {currentLanguage === 'PT' ? 'Assistir no YouTube' : 
               currentLanguage === 'ES' ? 'Ver en YouTube' : 
               'Watch on YouTube'}
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
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
          
          <button
            onClick={scrollToHeroForm}
            className="bg-white text-[#00A8E8] hover:bg-[#FF6F00] hover:text-white text-xl px-8 py-3 transform hover:scale-105 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            {currentLanguage === 'PT' ? 'Quero ativar o Tuggi' : 
             currentLanguage === 'ES' ? content.ES.cta : 
             content.EN.cta}
          </button>
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
                <a href={generateLocalizedUrl('PT', 'terms-of-use')} className="underline hover:text-neutral-700 transition-colors">Termos de Uso</a>
              {' e '}
              <a href={generateLocalizedUrl('PT', 'privacy-policy')} className="underline hover:text-neutral-700 transition-colors">Política de Privacidade</a>.
              </>
            )}
            {currentLanguage === 'EN' && (
              <>
                · Read our{' '}
                <a href={generateLocalizedUrl('EN', 'terms-of-use')} className="underline hover:text-neutral-700 transition-colors">Terms of Use</a>
              {' and '}
              <a href={generateLocalizedUrl('EN', 'privacy-policy')} className="underline hover:text-neutral-700 transition-colors">Privacy Policy</a>.
              </>
            )}
            {currentLanguage === 'ES' && (
              <>
                · Lee nuestros{' '}
                <a href={generateLocalizedUrl('ES', 'terms-of-use')} className="underline hover:text-neutral-700 transition-colors">Términos de Uso</a>
              {' y '}
              <a href={generateLocalizedUrl('ES', 'privacy-policy')} className="underline hover:text-neutral-700 transition-colors">Política de Privacidad</a>.
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
              <button
                onClick={scrollToHeroForm}
                className="w-full bg-[#00A8E8] hover:bg-[#FF6F00] text-white text-base font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
              >
                {stickyCTAText}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DriversLandingPage;