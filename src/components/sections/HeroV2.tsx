import React, { useState } from 'react';
import { Download, Smartphone, Navigation, Headphones, X, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
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
  const [showDownloadOptions, setShowDownloadOptions] = useState(false);
  const { ref: heroRef, isInView: heroInView } = useScrollAnimation();
  const { ref: stepsRef, isInView: stepsInView } = useScrollAnimation();


  // Localized content with institutional tone
  const getLocalizedContent = (language: string) => {
    const content: Record<string, any> = {
      PT: {
        headline: 'Um copiloto cultural para quem está dirigindo.',
        subheadline: 'Histórias e contexto surgem automaticamente ao longo do trajeto, com foco em simplicidade e segurança.',
        ctaPrimary: 'Baixar o app',
        ctaSecondary: 'Como funciona',
        microBenefits: [
          'Áudio automático e contextual',
          'Foco total na direção',
          'Simplicidade e segurança'
        ],
        heroImageAlt: 'Tuggi em funcionamento no painel do carro, narrando histórias durante o trajeto',
        stepsTitle: 'Como funciona',
        stepsSubtitle: 'Você dirige. O Tuggi identifica pontos no caminho e conta a história em áudio.',
        step1Title: 'Instale e escolha idioma/voz',
        step1Description: 'Download nas lojas oficiais',
        step2Title: 'Inicie o modo de viagem',
        step2Description: 'Ative e siga seu trajeto',
        step3Title: 'O áudio toca automaticamente',
        step3Description: 'Ouça histórias ao passar pelos pontos',
        safetyNote: 'Use com o celular fixo e atenção total ao trânsito.',
        downloadTitle: 'Escolha sua plataforma',
        downloadAndroid: 'Baixar no Google Play',
        downloadIOS: 'Baixar na App Store',
        androidUrl: 'https://play.google.com/store/apps/details?id=com.tuggidrive.app&pcampaignid=web_share',
        iosUrl: 'https://apps.apple.com/br/app/tuggi-explore-ao-dirigir/id6744379818'
      },
      EN: {
        headline: 'A cultural copilot for your drive.',
        subheadline: 'Stories and context appear automatically along your route, focusing on simplicity and safety.',
        ctaPrimary: 'Download the app',
        ctaSecondary: 'How it works',
        microBenefits: [
          'Automatic contextual audio',
          'Full focus on driving',
          'Simplicity and safety'
        ],
        heroImageAlt: 'Tuggi active on car dashboard, narrating stories during the journey',
        stepsTitle: 'How it works',
        stepsSubtitle: 'You drive. Tuggi identifies points on your path and tells the story in audio.',
        step1Title: 'Install and choose language/voice',
        step1Description: 'Download from official stores',
        step2Title: 'Start journey mode',
        step2Description: 'Activate and follow your route',
        step3Title: 'Audio plays automatically',
        step3Description: 'Hear stories as you pass by locations',
        safetyNote: 'Use with your phone mounted and full attention to traffic.',
        downloadTitle: 'Choose your platform',
        downloadAndroid: 'Download on Google Play',
        downloadIOS: 'Download on App Store',
        androidUrl: 'https://play.google.com/store/apps/details?id=com.tuggidrive.app&pcampaignid=web_share',
        iosUrl: 'https://apps.apple.com/br/app/tuggi-explore-ao-dirigir/id6744379818'
      },
      ES: {
        headline: 'Un copiloto cultural para quien conduce.',
        subheadline: 'Historias y contexto surgen automáticamente durante el trayecto, con enfoque en simplicidad y seguridad.',
        ctaPrimary: 'Descargar app',
        ctaSecondary: 'Cómo funciona',
        microBenefits: [
          'Audio automático y contextual',
          'Foco total en la conducción',
          'Simplicidad y seguridad'
        ],
        heroImageAlt: 'Tuggi funcionando en el panel del auto, narrando historias durante el trayecto',
        stepsTitle: 'Cómo funciona',
        stepsSubtitle: 'Tú conduces. Tuggi identifica puntos en el camino y cuenta la historia en audio.',
        step1Title: 'Instala y elige idioma/voz',
        step1Description: 'Descarga en tiendas oficiales',
        step2Title: 'Inicia el modo de viaje',
        step2Description: 'Activa y sigue tu trayecto',
        step3Title: 'El audio suena automáticamente',
        step3Description: 'Escucha historias al pasar por los puntos',
        safetyNote: 'Usa con el celular fijo y atención total al tránsito.',
        downloadTitle: 'Elige tu plataforma',
        downloadAndroid: 'Bajar en Google Play',
        downloadIOS: 'Bajar en App Store',
        androidUrl: 'https://play.google.com/store/apps/details?id=com.tuggidrive.app&pcampaignid=web_share',
        iosUrl: 'https://apps.apple.com/br/app/tuggi-explore-ao-dirigir/id6744379818'
      },
      FR: {
        headline: 'Un copilote culturel pour votre conduite.',
        subheadline: 'Histoires et contexte surgissent automatiquement sur votre trajet, axés sur la simplicité et la sécurité.',
        ctaPrimary: 'Télécharger l\'app',
        ctaSecondary: 'Comment ça marche',
        microBenefits: [
          'Audio contextuel automatique',
          'Concentration totale sur la conduite',
          'Simplicité et sécurité'
        ],
        heroImageAlt: 'Tuggi en fonctionnement sur le tableau de bord, narrant des histoires pendant le trajet',
        stepsTitle: 'Comment ça marche',
        stepsSubtitle: 'Vous conduisez. Tuggi identifie des points sur le chemin et raconte l\'histoire en audio.',
        step1Title: 'Installez et choisissez langue/voix',
        step1Description: 'Téléchargement sur les stores officiels',
        step2Title: 'Lancez le mode voyage',
        step2Description: 'Activez et suivez votre trajet',
        step3Title: 'L\'audio se lance automatiquement',
        step3Description: 'Écoutez des histoires en passant près des lieux',
        safetyNote: 'Utilisez avec le téléphone fixé et attention totale à la circulation.',
        downloadTitle: 'Choisissez votre plateforme',
        downloadAndroid: 'Télécharger sur Google Play',
        downloadIOS: 'Télécharger sur l\'App Store',
        androidUrl: 'https://play.google.com/store/apps/details?id=com.tuggidrive.app&pcampaignid=web_share',
        iosUrl: 'https://apps.apple.com/br/app/tuggi-explore-ao-dirigir/id6744379818'
      },
      DE: {
        headline: 'Ein kultureller Copilot für Ihre Fahrt.',
        subheadline: 'Geschichten und Kontext erscheinen automatisch entlang Ihrer Route – einfach und sicher.',
        ctaPrimary: 'App herunterladen',
        ctaSecondary: 'Wie es funktioniert',
        microBenefits: [
          'Automatisches kontextbezogenes Audio',
          'Voller Fokus auf das Fahren',
          'Einfachheit und Sicherheit'
        ],
        heroImageAlt: 'Tuggi aktiv auf dem Armaturenbrett, erzählt Geschichten während der Fahrt',
        stepsTitle: 'Wie es funktioniert',
        stepsSubtitle: 'Sie fahren. Tuggi erkennt Punkte auf Ihrem Weg und erzählt die Geschichte per Audio.',
        step1Title: 'Installieren und Sprache/Stimme wählen',
        step1Description: 'Download in offiziellen Stores',
        step2Title: 'Reisemodus starten',
        step2Description: 'Aktivieren und Route folgen',
        step3Title: 'Audio spielt automatisch',
        step3Description: 'Hören Sie Geschichten, wenn Sie an Orten vorbeifahren',
        safetyNote: 'Nutzen Sie die App mit Handyhalterung und voller Aufmerksamkeit auf den Verkehr.',
        downloadTitle: 'Wählen Sie Ihre Plattform',
        downloadAndroid: 'Bei Google Play laden',
        downloadIOS: 'Im App Store laden',
        androidUrl: 'https://play.google.com/store/apps/details?id=com.tuggidrive.app&pcampaignid=web_share',
        iosUrl: 'https://apps.apple.com/br/app/tuggi-explore-ao-dirigir/id6744379818'
      },
      IT: {
        headline: 'Un copilota culturale per la tua guida.',
        subheadline: 'Storie e contesto appaiono automaticamente lungo il percorso, puntando su semplicità e sicurezza.',
        ctaPrimary: 'Scarica l\'app',
        ctaSecondary: 'Come funziona',
        microBenefits: [
          'Audio contestuale automatico',
          'Focus totale sulla guida',
          'Semplicità e sicurezza'
        ],
        heroImageAlt: 'Tuggi attivo sul cruscotto, narra storie durante il tragitto',
        stepsTitle: 'Come funziona',
        stepsSubtitle: 'Tu guidi. Tuggi identifica i punti sul percorso e racconta la storia in audio.',
        step1Title: 'Installa e scegli lingua/voce',
        step1Description: 'Scarica dagli store ufficiali',
        step2Title: 'Avvia la modalità viaggio',
        step2Description: 'Attiva e segui il tuo tragitto',
        step3Title: 'L\'audio parte automaticamente',
        step3Description: 'Ascolta le storie passando vicino ai luoghi',
        safetyNote: 'Usa con il telefono fissato e massima attenzione al traffico.',
        downloadTitle: 'Scegli la tua piattaforma',
        downloadAndroid: 'Scarica su Google Play',
        downloadIOS: 'Scarica su App Store',
        androidUrl: 'https://play.google.com/store/apps/details?id=com.tuggidrive.app&pcampaignid=web_share',
        iosUrl: 'https://apps.apple.com/br/app/tuggi-explore-ao-dirigir/id6744379818'
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
              
              {/* Micro-benefits bullets */}
              <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8">
                {content.microBenefits?.map((benefit: string, idx: number) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-tuggi-primary"></div>
                    <span 
                      style={{ 
                        fontSize: '14px', 
                        fontWeight: '600', 
                        color: '#4B5563',
                        fontFamily: 'var(--font-sans)'
                      }}
                    >
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <button 
                  onClick={() => setShowDownloadOptions(true)}
                  className="btn-primary inline-flex items-center justify-center gap-3 text-lg min-h-[48px]"
                  style={{ 
                    height: '48px', 
                    padding: '0 32px',
                    minHeight: '48px'
                  }}
                >
                  <Download className="w-5 h-5" />
                  <span>{content.ctaPrimary}</span>
                </button>
                
                <button 
                  onClick={() => {
                    const stepsElement = document.getElementById('como-funciona');
                    stepsElement?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center gap-2 text-lg font-semibold hover:underline"
                  style={{ 
                    height: '48px', 
                    padding: '0 12px',
                    color: '#00A8E8'
                  }}
                >
                  <span>{content.ctaSecondary}</span>
                </button>
              </div>

              {/* Removed Beta Labels */}
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
              

              
              <figcaption className="sr-only">
                Aplicativo funcionando em segundo plano enquanto dirige
              </figcaption>
            </motion.figure>
          </motion.div>
        </div>
      </section>

      <section 
        id="como-funciona"
        className="py-12 lg:py-20"
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
            {/* Safety Note */}
            <motion.div 
              variants={fadeInUp}
              className="mt-16 text-center"
            >
              <p 
                style={{ 
                  color: '#6B7280',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '14px',
                  fontStyle: 'italic'
                }}
              >
                {content.safetyNote}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Download Modal */}
      <AnimatePresence>
        {showDownloadOptions && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowDownloadOptions(false)}
              className="absolute inset-0 bg-neutral-900/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              <button 
                onClick={() => setShowDownloadOptions(false)}
                className="absolute top-6 right-6 p-2 text-neutral-400 hover:text-neutral-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <h3 className="text-2xl font-bold text-neutral-900 mb-6 pr-8">
                {content.downloadTitle}
              </h3>

              <div className="space-y-4">
                <a 
                  href={content.iosUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full p-4 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-tuggi-primary hover:bg-tuggi-primary/5 transition-all group"
                  onClick={() => handleCTAClick('ios_download')}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-neutral-900 flex items-center justify-center text-white">
                      <Smartphone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-neutral-900">{content.downloadIOS}</p>
                      <p className="text-sm text-neutral-500">App Store</p>
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-neutral-300 group-hover:text-tuggi-primary transition-colors" />
                </a>

                <a 
                  href={content.androidUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full p-4 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-tuggi-primary hover:bg-tuggi-primary/5 transition-all group"
                  onClick={() => handleCTAClick('google_play_download')}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-neutral-900 flex items-center justify-center text-white">
                      <Smartphone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-neutral-900">{content.downloadAndroid}</p>
                      <p className="text-sm text-neutral-500">Google Play</p>
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-neutral-300 group-hover:text-tuggi-primary transition-colors" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </>
  );
};

export default HeroV2;
