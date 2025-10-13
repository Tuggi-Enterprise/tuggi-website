import React from 'react';
import { Download, Smartphone, Navigation, Headphones } from 'lucide-react';
import { motion } from 'framer-motion';
import { layout } from '../../utils/designSystem';
import { useScrollAnimation, fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../../hooks/useScrollAnimation';

interface HeroV2Props {
  currentLanguage?: string;
  onCTAClick?: (ctaType: string, position?: string) => void;
}

const HeroV2: React.FC<HeroV2Props> = ({ 
  currentLanguage = 'PT',
  onCTAClick 
}) => {
  const { ref: heroRef, isInView: heroInView } = useScrollAnimation();
  const { ref: stepsRef, isInView: stepsInView } = useScrollAnimation();


  // Localized content with institutional tone
  const getLocalizedContent = (language: string) => {
    const content: Record<string, any> = {
      PT: {
        headline: 'Descubra histórias enquanto dirige.',
        subheadline: 'O Tuggi transforma seu trajeto em descobertas culturais narradas em tempo real.',
        guarantee: 'Sem anúncios. Sem pegadinhas. Conteúdo verificado.',
        ctaPrimary: 'Entrar no Beta Android',
        ctaSecondary: 'Baixar no iOS',
        betaLabel: '🚀 Beta aberto – São Paulo e Rio de Janeiro',
        ariaLabelAndroid: 'Baixar Tuggi para Android - Versão Beta',
        ariaLabelIOS: 'Baixar Tuggi para iOS',
        heroImageAlt: 'Tuggi em funcionamento no painel do carro, narrando histórias durante o trajeto',
        stepsTitle: 'Em 3 passos, o Tuggi guia você',
        stepsSubtitle: 'Sem rotas fixas, sem distrações. Você escolhe o caminho, o Tuggi conta a história.',
        step1Title: 'Instale o Tuggi no seu iOS ou Android.',
        step1Description: 'Download rápido e instalação simples',
        step2Title: 'Permita localização e inicie sua jornada.',
        step2Description: 'Ative o guia e comece a dirigir',
        step3Title: 'Descubra o que há ao seu redor.',
        step3Description: 'Ouça narrativas automáticas'
      },
      EN: {
        headline: 'Discover stories while you drive.',
        subheadline: 'Tuggi transforms your journey into narrated cultural discoveries in real-time.',
        guarantee: 'No ads. No tricks. Verified content.',
        ctaPrimary: 'Join Android Beta',
        ctaSecondary: 'Download on iOS',
        betaLabel: '🚀 Open Beta – São Paulo and Rio de Janeiro',
        ariaLabelAndroid: 'Download Tuggi for Android - Beta Version',
        ariaLabelIOS: 'Download Tuggi for iOS',
        heroImageAlt: 'Tuggi running on car dashboard, narrating stories during the journey',
        stepsTitle: 'In 3 steps, Tuggi guides you',
        stepsSubtitle: 'No fixed routes, no distractions. You choose the path, Tuggi tells the story.',
        step1Title: 'Install Tuggi on your iOS or Android.',
        step1Description: 'Quick download and simple installation',
        step2Title: 'Allow location and start your journey.',
        step2Description: 'Activate the guide and start driving',
        step3Title: 'Discover what\'s around you.',
        step3Description: 'Listen to automatic narratives'
      },
      ES: {
        headline: 'Descubre historias mientras conduces.',
        subheadline: 'Tuggi transforma tu trayecto en descubrimientos culturales narrados en tiempo real.',
        guarantee: 'Sin anuncios. Sin trucos. Contenido verificado.',
        ctaPrimary: 'Unirse al Beta Android',
        ctaSecondary: 'Descargar en iOS',
        betaLabel: '🚀 Beta abierto – São Paulo y Río de Janeiro',
        ariaLabelAndroid: 'Descargar Tuggi para Android - Versión Beta',
        ariaLabelIOS: 'Descargar Tuggi para iOS',
        heroImageAlt: 'Tuggi funcionando en el tablero del auto, narrando historias durante el trayecto',
        stepsTitle: 'En 3 pasos, Tuggi te guía',
        stepsSubtitle: 'Sin rutas fijas, sin distracciones. Tú eliges el camino, Tuggi cuenta la historia.',
        step1Title: 'Instala Tuggi en tu iOS o Android.',
        step1Description: 'Descarga rápida e instalación simple',
        step2Title: 'Permite la ubicación e inicia tu viaje.',
        step2Description: 'Activa la guía y comienza a conducir',
        step3Title: 'Descubre lo que hay a tu alrededor.',
        step3Description: 'Escucha narraciones automáticas'
      }
    };
    
    return content[language] || content['PT'];
  };

  const content = getLocalizedContent(currentLanguage);

  const handleCTAClick = (ctaType: string) => {
    console.log('HeroV2 handleCTAClick called with:', ctaType);
    console.log('HeroV2 onCTAClick exists:', !!onCTAClick);
    if (onCTAClick) {
      onCTAClick(ctaType, 'hero');
    } else {
      console.error('HeroV2 onCTAClick is not defined!');
    }
  };

  return (
    <>
      {/* Section 1: Hero de Valor + Prova Visual */}
      <section 
        className="relative overflow-hidden hero-section pt-20 md:pt-6"
        style={{ 
          paddingBlock: '24px',
          background: 'linear-gradient(90deg, #ffffff 0%, #ffffff 60%, #F8FAFC 100%)'
        }}
      >
        
        <div className={`${layout.container.base} w-full`}>
          <motion.div 
            ref={heroRef}
            initial="initial"
            animate={heroInView ? "animate" : "initial"}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-16 items-center"
          >
            {/* Content */}
            <motion.div variants={fadeInLeft} className="space-y-4">
              {/* Headline */}
              <h1 
                className="font-bold leading-[1.1] tracking-tight mb-4"
                style={{ 
                  fontSize: 'clamp(32px, 5vw, 56px)',
                  color: '#0F172A',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: '700',
                  letterSpacing: '-0.01em'
                }}
              >
                {content.headline}
              </h1>
              
              {/* Sub-headline */}
              <p 
                className="leading-relaxed font-medium max-w-2xl mb-6"
                style={{ 
                  fontSize: '18px',
                  color: '#374151',
                  fontFamily: 'var(--font-sans)'
                }}
              >
                {content.subheadline}
              </p>
              
              {/* Guarantee Line */}
              <p 
                className="mb-7"
                style={{ 
                  fontSize: '15px',
                  color: '#4B5563',
                  fontFamily: 'var(--font-sans)'
                }}
              >
                {content.guarantee}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <button 
                  onClick={() => {
                    console.log('HeroV2 Android button clicked!');
                    handleCTAClick('android_beta');
                  }}
                  className="btn-primary inline-flex items-center justify-center gap-3 text-lg min-h-[48px]"
                  aria-label={content.ariaLabelAndroid}
                  style={{ 
                    height: '48px', 
                    padding: '0 20px',
                    minHeight: '48px' // Touch target minimum
                  }}
                >
                  <Download className="w-5 h-5" />
                  <span>{content.ctaPrimary}</span>
                </button>
                
                <button 
                  onClick={() => handleCTAClick('ios_download')}
                  className="btn-secondary inline-flex items-center justify-center gap-3 text-lg min-h-[48px]"
                  aria-label={content.ariaLabelIOS}
                  style={{ 
                    height: '48px', 
                    padding: '0 20px',
                    minHeight: '48px' // Touch target minimum
                  }}
                >
                  <Download className="w-5 h-5" />
                  <span>{content.ctaSecondary}</span>
                </button>
              </div>

              {/* Beta Label */}
              <div className="inline-flex items-center gap-2 bg-tuggi-primary/10 text-tuggi-primary px-4 py-2 rounded-full text-sm font-semibold mt-4">
                <div className="w-2 h-2 bg-tuggi-primary rounded-full animate-pulse"></div>
                {content.betaLabel}
              </div>
            </motion.div>

            {/* Hero Visual */}
            <motion.figure variants={fadeInRight} className="relative">
              <div 
                className="relative rounded-xl overflow-hidden"
                style={{ 
                  boxShadow: '0 8px 24px rgba(0,0,0,0.08)'
                }}
              >
                <img 
                  src="/tuggi-herobannerv2.webp" 
                  alt={content.heroImageAlt}
                  className="w-full h-auto block"
                  style={{
                    filter: 'saturate(0.95) contrast(1.05)',
                    maxWidth: '560px'
                  }}
                  srcSet="/tuggi-herobannerv2.webp 800w, /tuggi-herobannerv2.webp 1200w, /tuggi-herobannerv2.webp 1600w"
                  sizes="(min-width:1024px) 45vw, 92vw"
                  loading="eager"
                  decoding="async"
                />
                
                {/* Sobreposição sutil para integração */}
                <div 
                  className="absolute inset-0 pointer-events-none rounded-xl"
                  style={{
                    background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(248,250,252,0.35) 100%)'
                  }}
                ></div>
                
                {/* Reflexo suave no topo */}
                <div 
                  className="absolute left-0 right-0 top-0 pointer-events-none rounded-t-xl"
                  style={{
                    height: '18%',
                    background: 'linear-gradient(180deg, rgba(255,255,255,0.35), rgba(255,255,255,0))'
                  }}
                ></div>
              </div>
              
              {/* Badge Beta */}
              <div 
                className="absolute top-4 left-4"
                style={{
                  background: 'rgba(255,255,255,0.85)',
                  backdropFilter: 'blur(6px)',
                  border: '1px solid #E5E7EB',
                  color: '#111827',
                  borderRadius: '999px',
                  padding: '6px 12px',
                  fontSize: '13px',
                  fontWeight: '600'
                }}
              >
                Beta aberto — SP e RJ
              </div>
              
              <figcaption className="sr-only">
                Aplicativo funcionando em segundo plano enquanto dirige
              </figcaption>
            </motion.figure>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Como Funciona (3 Passos) */}
      <section 
        className="py-4 lg:py-8"
        style={{ 
          background: '#F9FAFB',
          boxShadow: 'inset 0 -1px 0 rgba(0,0,0,0.05)'
        }}
      >
        <div className={layout.container.base}>
          <motion.div 
            ref={stepsRef}
            initial="initial"
            animate={stepsInView ? "animate" : "initial"}
            variants={staggerContainer}
            className="text-center mb-14"
          >
            <motion.h2 
              variants={fadeInUp} 
              className="font-bold mb-6"
              style={{ 
                color: '#0F172A',
                fontFamily: 'var(--font-sans)',
                fontWeight: '700',
                fontSize: '40px',
                letterSpacing: '-0.01em',
                marginBottom: '24px'
              }}
            >
              {content.stepsTitle}
            </motion.h2>
            <motion.p 
              variants={fadeInUp} 
              className="max-w-4xl mx-auto leading-relaxed"
              style={{ 
                color: '#374151',
                fontFamily: 'var(--font-sans)',
                fontSize: '18px',
                fontWeight: '500'
              }}
            >
              {content.stepsSubtitle}
            </motion.p>
          </motion.div>

          <motion.div 
            initial="initial"
            animate={stepsInView ? "animate" : "initial"}
            variants={staggerContainer}
            className="relative"
          >
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {/* Step 1 */}
            <motion.div variants={fadeInUp} className="text-center group">
              {/* Numeric Marker */}
              <div 
                className="rounded-full flex items-center justify-center mx-auto mb-2"
                style={{ 
                  width: '32px',
                  height: '32px',
                  background: '#F3F4F6',
                  color: '#111827',
                  fontWeight: '600',
                  fontSize: '16px'
                }}
              >
                1
              </div>
              
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="w-18 h-18 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ 
                  width: '72px',
                  height: '72px',
                  background: 'rgba(0,168,232,0.06)',
                  border: '1px solid rgba(0,168,232,0.1)',
                  borderRadius: '50%',
                  padding: '12px',
                  transition: 'transform 0.15s ease'
                }}
              >
                <Smartphone 
                  className="w-8 h-8" 
                  style={{ 
                    color: '#0092CC',
                    transition: 'transform 0.15s ease'
                  }} 
                />
              </motion.div>
              <h3 
                className="font-semibold mb-2"
                style={{ 
                  color: '#0F172A',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: '600',
                  fontSize: '20px'
                }}
              >
                {content.step1Title}
              </h3>
              <p 
                className="max-w-xs mx-auto"
                style={{ 
                  color: '#4B5563',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '16px',
                  lineHeight: '1.6'
                }}
              >
                {content.step1Description}
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div variants={fadeInUp} className="text-center group">
              {/* Numeric Marker */}
              <div 
                className="rounded-full flex items-center justify-center mx-auto mb-2"
                style={{ 
                  width: '32px',
                  height: '32px',
                  background: '#F3F4F6',
                  color: '#111827',
                  fontWeight: '600',
                  fontSize: '16px'
                }}
              >
                2
              </div>
              
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="w-18 h-18 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ 
                  width: '72px',
                  height: '72px',
                  background: 'rgba(0,168,232,0.06)',
                  border: '1px solid rgba(0,168,232,0.1)',
                  borderRadius: '50%',
                  padding: '12px',
                  transition: 'transform 0.15s ease'
                }}
              >
                <Navigation 
                  className="w-8 h-8" 
                  style={{ 
                    color: '#0092CC',
                    transition: 'transform 0.15s ease'
                  }} 
                />
              </motion.div>
              <h3 
                className="font-semibold mb-2"
                style={{ 
                  color: '#0F172A',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: '600',
                  fontSize: '20px'
                }}
              >
                {content.step2Title}
              </h3>
              <p 
                className="max-w-xs mx-auto"
                style={{ 
                  color: '#4B5563',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '16px',
                  lineHeight: '1.6'
                }}
              >
                {content.step2Description}
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div variants={fadeInUp} className="text-center group">
              {/* Numeric Marker */}
              <div 
                className="rounded-full flex items-center justify-center mx-auto mb-2"
                style={{ 
                  width: '32px',
                  height: '32px',
                  background: '#F3F4F6',
                  color: '#111827',
                  fontWeight: '600',
                  fontSize: '16px'
                }}
              >
                3
              </div>
              
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="w-18 h-18 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ 
                  width: '72px',
                  height: '72px',
                  background: 'rgba(0,168,232,0.06)',
                  border: '1px solid rgba(0,168,232,0.1)',
                  borderRadius: '50%',
                  padding: '12px',
                  transition: 'transform 0.15s ease'
                }}
              >
                <Headphones 
                  className="w-8 h-8" 
                  style={{ 
                    color: '#0092CC',
                    transition: 'transform 0.15s ease'
                  }} 
                />
              </motion.div>
              <h3 
                className="font-semibold mb-2"
                style={{ 
                  color: '#0F172A',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: '600',
                  fontSize: '20px'
                }}
              >
                {content.step3Title}
              </h3>
              <p 
                className="max-w-xs mx-auto"
                style={{ 
                  color: '#4B5563',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '16px',
                  lineHeight: '1.6'
                }}
              >
                {content.step3Description}
              </p>
            </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

    </>
  );
};

export default HeroV2;
