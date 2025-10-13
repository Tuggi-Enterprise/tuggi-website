import React, { useState, useEffect } from 'react';
import { Download, MapPin, Headphones, Star, Play, Globe, CheckCircle } from 'lucide-react';
import { getButtonClasses, layout, gradients } from '../utils/designSystem';

interface HomeV2Props {
  currentLanguage?: string;
  onCTAClick?: (ctaType: string, language: string) => void;
}

const HomeV2: React.FC<HomeV2Props> = ({ 
  currentLanguage = 'PT',
  onCTAClick 
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-cycle through screenshots every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex(prev => (prev + 1) % 2);
        setIsTransitioning(false);
      }, 150);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Localized content with 3 variations per language
  const getLocalizedContent = (language: string, variation: 'A' | 'B' | 'C' = 'A') => {
    const content: Record<string, Record<string, any>> = {
      PT: {
        A: {
          headline: 'Descubra histórias enquanto dirige.',
          subheadline: 'O Tuggi narra curiosidades sobre os lugares ao seu redor, em tempo real.',
          ctaPrimary: 'Baixar no iOS',
          ctaSecondary: 'Entrar no Beta Android',
          betaLabel: 'Beta aberto – Grátis'
        },
        B: {
          headline: 'Explore sem roteiros fixos.',
          subheadline: 'Áudio automático sobre lugares que você passa, no seu ritmo.',
          ctaPrimary: 'Baixar no iOS',
          ctaSecondary: 'Entrar no Beta Android',
          betaLabel: 'Beta aberto – Grátis'
        },
        C: {
          headline: 'GPS + Áudio = Descobertas.',
          subheadline: 'Histórias automáticas sobre onde você está, sem complicação.',
          ctaPrimary: 'Baixar no iOS',
          ctaSecondary: 'Entrar no Beta Android',
          betaLabel: 'Beta aberto – Grátis'
        }
      },
      EN: {
        A: {
          headline: 'Discover stories while you drive.',
          subheadline: 'Tuggi narrates curiosities about places around you, in real-time.',
          ctaPrimary: 'Download on iOS',
          ctaSecondary: 'Join Android Beta',
          betaLabel: 'Open Beta – Free'
        },
        B: {
          headline: 'Explore without fixed routes.',
          subheadline: 'Automatic audio about places you pass, at your pace.',
          ctaPrimary: 'Download on iOS',
          ctaSecondary: 'Join Android Beta',
          betaLabel: 'Open Beta – Free'
        },
        C: {
          headline: 'GPS + Audio = Discoveries.',
          subheadline: 'Automatic stories about where you are, no complexity.',
          ctaPrimary: 'Download on iOS',
          ctaSecondary: 'Join Android Beta',
          betaLabel: 'Open Beta – Free'
        }
      },
      ES: {
        A: {
          headline: 'Descubre historias mientras conduces.',
          subheadline: 'Tuggi narra curiosidades sobre los lugares a tu alrededor, en tiempo real.',
          ctaPrimary: 'Descargar en iOS',
          ctaSecondary: 'Unirse al Beta Android',
          betaLabel: 'Beta abierto – Gratis'
        },
        B: {
          headline: 'Explora sin rutas fijas.',
          subheadline: 'Audio automático sobre lugares que pasas, a tu ritmo.',
          ctaPrimary: 'Descargar en iOS',
          ctaSecondary: 'Unirse al Beta Android',
          betaLabel: 'Beta abierto – Gratis'
        },
        C: {
          headline: 'GPS + Audio = Descubrimientos.',
          subheadline: 'Historias automáticas sobre dónde estás, sin complicación.',
          ctaPrimary: 'Descargar en iOS',
          ctaSecondary: 'Unirse al Beta Android',
          betaLabel: 'Beta abierto – Gratis'
        }
      }
    };
    
    return content[language]?.[variation] || content['PT']['A'];
  };

  const content = getLocalizedContent(currentLanguage, 'A'); // TODO: Make variation dynamic via A/B testing

  const handleCTAClick = (ctaType: string) => {
    console.log('HomeV2 handleCTAClick called with:', ctaType);
    console.log('onCTAClick function exists:', !!onCTAClick);
    console.log('currentLanguage:', currentLanguage);
    if (onCTAClick) {
      onCTAClick(ctaType, currentLanguage);
    } else {
      console.error('onCTAClick is not defined!');
    }
  };

  return (
    <>
      {/* Section 1: Hero de Valor + Prova Visual */}
      <section className="relative overflow-hidden pt-20 pb-16" style={{ background: gradients.hero }}>
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%2300A8E8%22 fill-opacity=%220.04%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        
        <div className={`${layout.container.base} w-full`}>
          <div className={`${layout.grid['2']} gap-8 lg:gap-12 xl:gap-16 items-center`}>
            {/* Content */}
            <div className="animate-slide-up space-y-6">
              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-neutral-900 leading-[1.1] tracking-tight">
                <span className="bg-gradient-to-r from-tuggi-primary to-tuggi-secondary bg-clip-text text-transparent">
                  {content.headline}
                </span>
              </h1>
              
              {/* Sub-headline */}
              <p className="text-lg sm:text-xl text-neutral-700 leading-relaxed font-medium max-w-2xl">
                {content.subheadline}
              </p>
              
              {/* Beta Label */}
              <div className="inline-flex items-center gap-2 bg-tuggi-primary/10 text-tuggi-primary px-4 py-2 rounded-full text-sm font-semibold">
                <div className="w-2 h-2 bg-tuggi-primary rounded-full animate-pulse"></div>
                {content.betaLabel}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4" style={{ position: 'relative', zIndex: 1000 }}>
                <button 
                  onClick={() => handleCTAClick('ios_download')}
                  className="group bg-gradient-to-r from-tuggi-primary via-tuggi-primary to-tuggi-secondary text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 inline-flex items-center justify-center gap-3 hover:shadow-xl hover:scale-105 transform"
                >
                  <Download className="w-5 h-5" />
                  <span>{content.ctaPrimary}</span>
                </button>
                
                {/* Test Button */}
                <div 
                  onClick={() => {
                    alert('DIV clicked!');
                    console.log('DIV clicked!');
                    handleCTAClick('android_beta');
                  }}
                  style={{
                    background: 'red',
                    color: 'white',
                    padding: '16px 32px',
                    borderRadius: '16px',
                    fontWeight: 'bold',
                    fontSize: '18px',
                    cursor: 'pointer',
                    position: 'relative',
                    zIndex: 9999,
                    pointerEvents: 'auto'
                  }}
                >
                  TEST CLICK
                </div>
                
                <button 
                  onClick={() => {
                    alert('Button clicked!');
                    console.log('Button clicked!');
                    handleCTAClick('android_beta');
                  }}
                  style={{
                    background: 'white',
                    color: '#00A8E8',
                    border: '2px solid #00A8E8',
                    padding: '16px 32px',
                    borderRadius: '16px',
                    fontWeight: 'bold',
                    fontSize: '18px',
                    cursor: 'pointer',
                    position: 'relative',
                    zIndex: 9999,
                    pointerEvents: 'auto'
                  }}
                  className="inline-flex items-center justify-center gap-3"
                >
                  <Download className="w-5 h-5" />
                  <span>{content.ctaSecondary}</span>
                </button>
              </div>
            </div>

            {/* Mobile App Mockup */}
            <div className="relative animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-r from-tuggi-primary/20 to-tuggi-secondary/20 rounded-3xl blur-3xl transform scale-110"></div>
              
              <div className="relative bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-white/30 shadow-2xl">
                <div className="mx-auto relative">
                  <div className="relative w-48 sm:w-56 lg:w-64 mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-b from-neutral-800 to-neutral-900 rounded-[2.5rem] p-2 shadow-2xl animate-glow-pulse">
                      <div className="w-full h-full bg-black rounded-[2rem] overflow-hidden relative">
                        {/* Screen content */}
                        <img 
                          src="/tuggi-herobannerv2.webp" 
                          alt="Tuggi Drive mobile app in use"
                          className="w-full h-full object-cover"
                        />
                        
                        {/* Screen overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 pointer-events-none"></div>
                      </div>
                      
                      {/* Phone details */}
                      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-neutral-600 rounded-full"></div>
                      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-neutral-700 rounded-full"></div>
                    </div>
                    
                    <div className="w-full" style={{ aspectRatio: '9/19.5' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Como Funciona (3 Passos) */}
      <section className={`${layout.section.base} bg-white`}>
        <div className={layout.container.base}>
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-4 lg:mb-6">
              Usar é simples.
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 max-w-4xl mx-auto leading-relaxed">
              Sem rotas fixas. Você define o caminho.
            </p>
          </div>

          <div className={`${layout.grid['3']} gap-6 lg:gap-8`}>
            {/* Step 1 */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-tuggi-primary to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">Ligar GPS</h3>
              <p className="text-sm text-neutral-600">Permita localização para conteúdo contextual</p>
            </div>

            {/* Step 2 */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-tuggi-secondary to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Headphones className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">Ouvir narrativas</h3>
              <p className="text-sm text-neutral-600">Áudio automático conforme você se move</p>
            </div>

            {/* Step 3 */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">Salvar/Explorar</h3>
              <p className="text-sm text-neutral-600">Guarde lugares interessantes para depois</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Veja em Ação (Vídeo) */}
      <section className={`${layout.section.base}`} style={{ background: gradients.subtle }}>
        <div className={layout.container.base}>
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              Veja em ação
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto">
              Cena real no carro com narração automática.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative bg-white rounded-2xl p-4 shadow-xl">
              {/* TODO: Replace with actual video component */}
              <div className="aspect-video bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-xl flex items-center justify-center">
                <button 
                  onClick={() => handleCTAClick('XvQfdfWDpVQ?si=gk1XjaeCIad2tRR1')}
                  className="w-20 h-20 bg-tuggi-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg"
                >
                  <Play className="w-8 h-8 text-white ml-1" />
                </button>
              </div>
              <p className="text-center text-sm text-neutral-600 mt-4">
                45s: Tuggi em uso real
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Section 5: Diferenciais de Produto */}
      <section className={`${layout.section.base}`} style={{ background: gradients.subtle }}>
        <div className={layout.container.base}>
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              Por que escolher a Tuggi?
            </h2>
          </div>

          <div className={`${layout.grid['2']} gap-6 lg:gap-8`}>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-tuggi-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-tuggi-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">Áudio geolocalizado</h3>
                  <p className="text-neutral-600">Conteúdo baseado na sua localização exata</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-tuggi-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Headphones className="w-6 h-6 text-tuggi-secondary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">Modo Drive/Walk</h3>
                  <p className="text-neutral-600">Funciona dirigindo ou caminhando</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">Curadoria cultural</h3>
                  <p className="text-neutral-600">Conteúdo verificado e atualizado</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">Multilíngue</h3>
                  <p className="text-neutral-600">PT-BR, EN-US, ES-ES</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Prova Social */}
     

      {/* Section 7: FAQ Curto */}
      <section className={`${layout.section.base}`} style={{ background: gradients.subtle }}>
        <div className={layout.container.base}>
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              Dúvidas frequentes
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-neutral-900 mb-2">É seguro usar dirigindo?</h3>
              <p className="text-neutral-600">Sim, as narrações tocam automaticamente. Evite interações enquanto dirige.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-neutral-900 mb-2">Funciona sem internet?</h3>
              <p className="text-neutral-600">Parte do áudio é cacheada offline, mas recomendamos conexão para atualizações.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-neutral-900 mb-2">Consome muita bateria?</h3>
              <p className="text-neutral-600">O app é otimizado para uso eficiente de bateria durante o uso.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: CTA Final Forte */}
      <section className={`${layout.section.compact}`} style={{ background: gradients.ocean }}>
        <div className={`${layout.container.base} text-center`}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Comece sua jornada cultural agora.
          </h2>
          <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto mb-6">
            Baixe grátis e explore o mundo ao seu redor.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
            <button 
              onClick={() => handleCTAClick('ios_download_final')}
              className="bg-white text-tuggi-primary px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 inline-flex items-center justify-center gap-3 hover:bg-gray-50 hover:scale-105 transform shadow-lg"
            >
              <Download className="w-5 h-5" />
              <span>{content.ctaPrimary}</span>
            </button>
            
            <button 
              onClick={(e) => {
                e.preventDefault();
                console.log('Final button clicked!');
                handleCTAClick('android_beta_final');
              }}
              className="bg-tuggi-primary/20 text-white border-2 border-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 inline-flex items-center justify-center gap-3 hover:bg-white hover:text-tuggi-primary hover:scale-105 transform cursor-pointer relative z-10"
            >
              <Download className="w-5 h-5" />
              <span>{content.ctaSecondary}</span>
            </button>
          </div>

          <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            {content.betaLabel}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeV2;


