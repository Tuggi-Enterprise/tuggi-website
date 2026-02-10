import React, { useState, useEffect } from 'react';
import { 
  X, 
  ChevronDown, 
  ChevronUp, 
  Check,
  Play,
  MapPin,
  Headphones,
  Car,
  Globe,
  Star,
  Lock,
  Smartphone
} from 'lucide-react';
import { layout } from '../utils/designSystem';
import TuggiLogo from '../components/ui/TuggiLogo';
import AudioSamplesSection from '../components/sections/AudioSamplesSection';

// Mock AudioSamplesSection if not reused to ensure custom behavior or styling
// But prompt says "Reuse existing site components if they match...". 
// AudioSamplesSection matches well enough, but the prompt asks for specific content "Player com 2 amostras". 
// The existing component pulls from JSON. I'll implement a custom one to be safe and exact.

interface DriversLandingPageEProps {
  currentLanguage?: 'PT' | 'EN' | 'ES' | 'FR' | 'DE' | 'IT';
  onCTAClick?: (ctaType: string, position?: string) => void;
}

const DriversLandingPageE: React.FC<DriversLandingPageEProps> = ({ 
  currentLanguage = 'PT', 
  onCTAClick 
}) => {
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);
  const [showDownloadSheet, setShowDownloadSheet] = useState(false);
  const [openFaqItems, setOpenFaqItems] = useState<Set<string>>(new Set());

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderScrolled(window.scrollY > 120);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const trackClick = (ctaType: string, position: string) => {
    onCTAClick?.(ctaType, position);
    // Simple console log for simulated tracking
    console.log(`[Tracking] Event: ${ctaType} | Origin: ${position}`);
  };

  const handleStoreClick = (store: 'apple' | 'google', position: string) => {
    const urls = {
      apple: 'https://apps.apple.com/br/app/tuggi-explore-ao-dirigir/id6744379818',
      google: 'https://play.google.com/store/apps/details?id=com.tuggidrive.app'
    };
    window.open(urls[store], '_blank');
    trackClick(store === 'apple' ? 'cta_appstore_click' : 'cta_playstore_click', position);
    setShowDownloadSheet(false);
  };

  const toggleFaq = (key: string) => {
    const newOpen = new Set(openFaqItems);
    if (newOpen.has(key)) newOpen.delete(key);
    else newOpen.add(key);
    setOpenFaqItems(newOpen);
  };

  // Translations & Content
  const content = {
    PT: {
      hero: {
        eyebrow: 'Guia em áudio por geolocalização',
        h1: 'Descubra as histórias do lugar onde você está passando.',
        sub: 'O Tuggi toca histórias curtas e relevantes automaticamente enquanto você anda, dirige ou viaja.',
        bullets: [
          'Toca sozinho conforme você se move',
          'Funciona com Maps e Spotify',
          'Offline no Premium para economizar dados'
        ],
        microcopy: '5 histórias grátis por dia • Sem cartão de crédito',
        visual: {
          nowPlaying: 'Agora tocando: Porta Romana – 1:12',
          next: 'Próxima história em 350 m'
        }
      },
      howItWorks: {
        title: 'Como o Tuggi funciona',
        steps: [
          { title: 'Abra e deixe rodar', desc: 'Não precisa configurar nada. Só abra o app.' },
          { title: 'Histórias do que está ao redor', desc: 'O GPS detecta lugares interessantes e o áudio começa.' },
          { title: 'Você segue sua vida', desc: 'Funciona em segundo plano com seu navegador e música.' }
        ],
        cta: 'Baixar agora'
      },
      sample: {
        title: 'Ouça um exemplo real',
        desc: 'Histórias curtas, claras, feitas para deslocamento.',
        samples: [
          { id: '1', title: 'Avenida Paulista', duration: '1:15' },
          { id: '2', title: 'Cristo Redentor', duration: '0:58' }
        ]
      },
      useCases: {
        title: 'Feito para qualquer forma de viajar',
        cards: [
          { title: 'Turistas', desc: 'Descubra as cidades com total liberdade. Perfeito para usar no carro, táxi, ônibus de turismo ou em caminhadas. Conheça segredos locais sem depender de roteiros engessados.' },
          { title: 'Motoristas', desc: 'Torne o trânsito útil e aprenda algo novo todo dia. Se você é motorista de aplicativo, surpreenda seus passageiros com histórias incríveis sobre a região.' },
          { title: 'Dia a dia', desc: 'Redescubra seu trajeto para o trabalho ou faculdade. No dia a dia ou em viagens curtas, sempre há algo novo para ouvir por onde você passa.' }
        ]
      },
      plans: {
        title: 'Comece grátis. Faça upgrade quando quiser.',
        micro: 'Valores podem variar conforme impostos da loja.',
        items: {
          free: { title: 'Grátis', price: 'R$ 0', features: ['Histórias livres diariamente', 'Idioma do sistema', 'Reprodução em background'] },
          travel: { title: 'Premium 7 dias', price: 'R$ 14,90', sub: 'Não renova automaticamente', features: ['Acesso Ilimitado', 'Modo Offline (sem internet)', 'Narrações com IA Contextual', 'Ideal para turistas'] },
          monthly: { title: 'Premium Mensal', price: 'R$ 39,90', sub: 'Renova mensalmente', features: ['Acesso Ilimitado', 'Modo Offline (sem internet)', 'Narrações com IA Contextual', 'Ideal para motoristas'] }
        },
        ctaFree: 'Baixe grátis',
        ctaActivate: 'Ativar no app'
      },
      freedom: {
        title: 'Menos tela. Mais caminho.',
        cards: [
          { 
            title: 'Você faz o roteiro', 
            desc: 'O Tuggi não te prende a rotas fixas. Ele se adapta ao seu caminho e conta as histórias de onde você passar, independente do trajeto.',
            icon: 'Map'
          },
          { 
            title: 'Segundo plano real', 
            desc: 'Funciona 100% em segundo plano. Mantenha o Waze, Google Maps ou Spotify abertos e o telefone no bolso.',
            icon: 'Smartphone'
          },
          { 
            title: 'Privacidade Total', 
            desc: 'Sua localização é usada apenas para disparar os áudios. Jamais vendemos seus dados ou te rastreamos fora do uso.',
            icon: 'Lock'
          }
        ],
        links: { privacy: 'Política de privacidade', terms: 'Termos de uso' }
      },
      proof: {
        title: 'O que as pessoas dizem',
        items: [
          { name: 'Ricardo M.', city: 'São Paulo', txt: 'Mudou meu trajeto pro trabalho. Aprendi coisa que passei na frente 10 anos e não sabia.' },
          { name: 'Fernanda L.', city: 'Lisboa', txt: 'Usei na viagem e foi incrível não precisar ficar lendo guia o tempo todo.' },
          { name: 'Carlos S.', city: 'Rio de Janeiro', txt: 'A qualidade do áudio é excelente. Parece documentário.' }
        ]
      },
      faq: {
        title: 'Perguntas frequentes',
        items: [
          { q: 'Preciso seguir um roteiro?', a: 'Não. O Tuggi funciona livremente enquanto você se move por onde quiser. Você faz o seu caminho.' },
          { q: 'Funciona com Google Maps e Spotify?', a: 'Sim, perfeitamente em segundo plano. O áudio do Tuggi abaixa o volume da música suavemente e volta depois.' },
          { q: 'Consome muita internet?', a: 'O áudio é leve. O modo Premium Offline permite baixar cidades inteiras e economizar 100% dos dados durante o uso.' },
          { q: 'Funciona andando?', a: 'Sim! Funciona caminhando, dirigindo, de bicicleta ou transporte público.' },
          { q: 'Quantos idiomas tem?', a: 'A versão gratuita usa o idioma do seu celular. O Premium libera 8 idiomas: Português, Inglês, Espanhol, Francês, Alemão, Italiano, entre outros.' },
          { q: 'Onde assino e cancelo?', a: 'Tudo é gerenciado direto pela sua loja de aplicativos (Apple ou Google), sem burocracia ou dificuldade.' }
        ]
      },
      footer: {
        title: 'Pronto para ouvir a cidade?',
        sub: 'Baixe grátis • Sem adição de cartão'
      }
    },
    EN: {
      hero: {
        eyebrow: 'Geolocation audio guide',
        h1: 'Discover stories of the places you pass by.',
        sub: 'Tuggi plays short, relevant stories automatically while you walk, drive, or travel.',
        bullets: [
          'Plays automatically as you move',
          'Works with Maps and Spotify',
          'Offline in Premium to save data'
        ],
        microcopy: '5 free stories per day • No credit card',
        visual: {
          nowPlaying: 'Now Playing: Brooklyn Bridge – 1:12',
          next: 'Next story in 350 m'
        }
      },
      howItWorks: {
        title: 'How Tuggi works',
        steps: [
          { title: 'Open and let it run', desc: 'No setup needed. Just open the app.' },
          { title: 'Stories around you', desc: 'GPS detects interesting places and audio starts.' },
          { title: 'Go on with your life', desc: 'Works in background with navigation and music.' }
        ],
        cta: 'Download now'
      },
      sample: {
        title: 'Hear a real example',
        desc: 'Short, clear stories made for moving.',
        samples: [
          { id: '1', title: 'Central Park', duration: '1:15' },
          { id: '2', title: 'Eiffel Tower', duration: '0:58' }
        ]
      },
      useCases: {
        title: 'Made for any way of travel',
        cards: [
          { title: 'Tourists', desc: 'Discover cities with total freedom. Perfect for use in the car, taxi, tour bus or on walks. Know local secrets without depending on fixed itineraries.' },
          { title: 'Drivers', desc: 'Make traffic useful and learn something new every day. If you are a ride-share driver, surprise your passengers with amazing stories about the region.' },
          { title: 'Daily Life', desc: 'Rediscover your commute to work or college. On a daily basis or on short trips, there is always something new to hear wherever you go.' }
        ]
      },
      plans: {
        title: 'Start free. Upgrade anytime.',
        micro: 'Prices may vary by store taxes.',
        items: {
          free: { title: 'Free', price: '$ 0', features: ['Daily discovery stories', 'System default language', 'Background playback'] },
          travel: { title: 'Premium 7 days', price: '$ 9.99', sub: 'Does not auto-renew', features: ['Unlimited Access', 'Offline Mode', 'Contextual AI Narration', 'Perfect for tourists'] },
          monthly: { title: 'Premium Monthly', price: '$ 24.99', sub: 'Renews monthly', features: ['Unlimited Access', 'Offline Mode', 'Contextual AI Narration', 'Ideal for professional drivers'] }
        },
        ctaFree: 'Download free',
        ctaActivate: 'Activate in app'
      },
      freedom: {
        title: 'Less screen. More path.',
        cards: [
          { 
            title: 'Your own route', 
            desc: 'Tuggi doesn\'t tie you to fixed routes. It adapts to your path and tells stories of where you pass, regardless of the trajectory.',
            icon: 'Map'
          },
          { 
            title: 'True background', 
            desc: 'Works 100% in the background. Keep Waze, Google Maps, or Spotify open and your phone in your pocket.',
            icon: 'Smartphone'
          },
          { 
            title: 'Total Privacy', 
            desc: 'Your location is used only to trigger audio. We never sell your data or track you outside of usage.',
            icon: 'Lock'
          }
        ],
        links: { privacy: 'Privacy Polcy', terms: 'Terms of Use' }
      },
      proof: {
        title: 'What people say',
        items: [
          { name: 'Richard M.', city: 'New York', txt: 'Changed my commute. Learned things I passed by for 10 years.' },
          { name: 'Sarah L.', city: 'London', txt: 'Used it on a trip, amazing not to need a guidebook.' },
          { name: 'Bruno S.', city: 'Rio', txt: 'Audio quality is excellent. Like a documentary.' }
        ]
      },
      faq: {
        title: 'Frequently Asked Questions',
        items: [
          { q: 'Do I need a route?', a: 'No. Tuggi works freely as you move. You make your own path.' },
          { q: 'Works with Google Maps and Spotify?', a: 'Yes, perfectly in background. Tuggi lowers music volume gently and returns after.' },
          { q: 'Data consumption?', a: 'Audio is light. Premium Offline mode lets you download whole cities and save 100% data.' },
          { q: 'Works walking?', a: 'Yes! Walking, driving, cycling, public transport.' },
          { q: 'How many languages?', a: 'Free version uses device language. Premium unlocks 8 languages: Portuguese, English, Spanish, French, German, Italian, etc.' },
          { q: 'How to subscribe/cancel?', a: 'Managed directly via App Store or Google Play settings.' }
        ]
      },
      footer: {
        title: 'Ready to listen to the city?',
        sub: 'Download free • No credit card required'
      }
    }
  };

  // Locale Pricing Helper
  const getLocalizedPricing = () => {
    // Default to PT structure first to get keys, then overwrite prices
    const base = JSON.parse(JSON.stringify(t.plans.items)); // deep copy
    
    if (currentLanguage === 'EN') {
      // Already correct in t if EN is selected
      return base;
    }
    
    if (['ES', 'FR', 'DE', 'IT'].includes(currentLanguage)) {
      base.travel.price = '€ 9,99';
      base.monthly.price = '€ 24,99';
    } 
    // PT default is BRL (R$ 14,90 / 39,90) - handled by default t
    
    return base;
  };

  const t = content[currentLanguage === 'EN' ? 'EN' : 'PT']; // Default to PT for any non-EN for text structure (simplified for prompt)
  const prices = getLocalizedPricing();

  const handleDownloadSheet = () => {
    setShowDownloadSheet(true);
  };

  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-neutral-900 overflow-x-hidden selection:bg-blue-600 selection:text-white pb-24 lg:pb-0">
      
      {/* 1) HEADER FIXO */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isHeaderScrolled ? 'bg-white/95 backdrop-blur shadow-sm border-neutral-200 py-2' : 'bg-white border-transparent py-3'}`}>
        <div className={layout.container.base}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
               <TuggiLogo size="sm" language={currentLanguage} />
               <div className="hidden sm:flex items-center gap-1 text-xs font-bold text-neutral-500 bg-neutral-100 px-2 py-1 rounded">
                  <Globe className="w-3 h-3" />
                  {currentLanguage}
               </div>
            </div>

            <div className="flex items-center gap-6">
               <nav className="hidden md:flex gap-6 text-sm font-medium text-neutral-600">
                  <a href="#como-funciona" className="hover:text-blue-600">Como funciona</a>
                  <a href="#planos" className="hover:text-blue-600">Planos</a>
               </nav>
               <button 
                 onClick={handleDownloadSheet}
                 className="bg-neutral-900 text-white px-4 py-2 rounded-lg text-sm font-bold active:scale-95 transition-transform"
               >
                 Baixar
               </button>
            </div>
          </div>
        </div>
      </header>

      {/* 2) HERO */}
      <section className="pt-20 pb-10 lg:pt-36 lg:pb-24 relative overflow-hidden bg-gradient-to-b from-blue-50/50 to-white">
        <div className={layout.container.base}>
           <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
              
              {/* Copy */}
              <div className="flex-1 text-center lg:text-left z-10 w-full">
                 <span className="inline-block text-blue-600 font-bold text-[10px] uppercase tracking-widest mb-3 bg-blue-100 px-3 py-1 rounded-full">{t.hero.eyebrow}</span>
                 <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 leading-tight mb-4">
                    {t.hero.h1}
                 </h1>
                 <p className="text-base lg:text-xl text-neutral-600 mb-6 max-w-lg mx-auto lg:mx-0 font-medium leading-relaxed">
                    {t.hero.sub}
                 </p>
                 
                 <ul className="space-y-2 mb-6 text-left max-w-xs mx-auto lg:mx-0">
                    {t.hero.bullets.map((b: string, i: number) => (
                      <li key={i} className="flex items-center gap-2 text-neutral-700 font-medium text-sm">
                         <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 text-blue-600">
                            <Check className="w-2.5 h-2.5" />
                         </div>
                         {b}
                      </li>
                    ))}
                 </ul>

                 <div className="flex flex-col gap-2 max-w-xs mx-auto lg:mx-0">
                    <button onClick={() => handleStoreClick('apple', 'hero')} className="w-full bg-neutral-900 text-white hover:bg-black transition-colors py-3.5 px-6 rounded-xl font-bold flex items-center justify-center gap-3 shadow-lg active:scale-95">
                       <svg className="w-5 h-5" viewBox="0 0 384 512" fill="currentColor"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
                       <span className="text-sm sm:text-base">Baixar no iPhone/iPad</span>
                    </button>
                    <button onClick={() => handleStoreClick('google', 'hero')} className="w-full bg-white text-neutral-900 border border-neutral-200 hover:bg-neutral-50 transition-colors py-3.5 px-6 rounded-xl font-bold flex items-center justify-center gap-3 shadow-sm active:scale-95">
                       <svg className="w-5 h-5" viewBox="0 0 512 512" fill="currentColor"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
                       <span className="text-sm sm:text-base">Baixar no Android</span>
                    </button>
                 </div>
                 <p className="text-[10px] sm:text-xs text-neutral-400 mt-3 font-semibold tracking-wide uppercase opacity-80">{t.hero.microcopy}</p>
              </div>

              {/* Visual Proof */}
              <div className="flex-1 w-full max-w-[280px] mx-auto lg:max-w-none relative mt-4 lg:mt-0">
                 <div className="relative">
                    {/* Mockup */}
                    <div className="relative mx-auto rounded-[2.5rem] border-[6px] border-neutral-800 overflow-hidden shadow-xl bg-neutral-900 w-[240px] h-[480px] lg:w-[280px] lg:h-[580px]">
                       <div className="absolute inset-0 bg-neutral-100 flex flex-col">
                          {/* Top Bar */}
                          <div className="bg-white h-16 lg:h-24 p-4 lg:p-6 flex flex-col justify-end shadow-sm z-10">
                             <h3 className="font-bold text-neutral-900 text-xs lg:text-base">Tuggi Drive</h3>
                          </div>
                          {/* Map Area Placeholder */}
                          <div className="flex-1 bg-blue-50 relative">
                             {/* Route Line */}
                             <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.5 }}>
                                <path d="M80,480 C100,400 60,300 120,200 C160,120 100,50 120,0" stroke="#3B82F6" strokeWidth="6" fill="none" strokeDasharray="10 5" />
                             </svg>
                             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                             </div>
                             {/* Pins */}
                             <div className="absolute top-1/4 left-1/4 text-neutral-800 opacity-40"><MapPin className="fill-current w-6 h-6" /></div>
                          </div>
                          {/* Visual Player */}
                          <div className="bg-white p-3 pb-6 lg:p-4 lg:pb-8 rounded-t-2xl lg:rounded-t-3xl shadow-top">
                             <div className="flex items-center gap-3 lg:gap-4 mb-3 lg:mb-4">
                                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-neutral-200 rounded-lg flex-shrink-0 flex items-center justify-center">
                                   <Car className="w-6 h-6 text-neutral-400" />
                                </div>
                                <div>
                                   <div className="text-[10px] font-bold text-blue-600 uppercase tracking-wide">Tocando agora</div>
                                   <div className="font-bold text-neutral-900 text-[11px] lg:text-sm leading-tight truncate w-32">Porta Romana</div>
                                </div>
                             </div>
                             <div className="w-full bg-neutral-100 h-1 rounded-full mb-2 overflow-hidden">
                                <div className="w-2/3 bg-blue-600 h-full rounded-full"></div>
                             </div>
                             <div className="flex justify-between text-[9px] lg:text-xs text-neutral-400 font-medium">
                                <span>1:12</span>
                                <span>-0:35</span>
                             </div>
                             <div className="mt-3 bg-blue-50/50 rounded-lg p-2 flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-[10px] font-bold text-neutral-600">{t.hero.visual.next}</span>
                             </div>
                          </div>
                       </div>
                    </div>
                    {/* Shadow Decor element */}
                    <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[400px] bg-blue-500/10 blur-[40px] rounded-full"></div>
                 </div>
              </div>

           </div>
        </div>
      </section>

      {/* 3) COMO FUNCIONA */}
      <section id="como-funciona" className="py-20 bg-white relative overflow-hidden">
        <div className={layout.container.base}>
           <h2 className="text-4xl font-black text-center mb-20 text-neutral-900 tracking-tighter text-balance">
              {t.howItWorks.title}
           </h2>
           
           <div className="relative max-w-sm mx-auto">
              {/* Vertical line connecting steps */}
              <div className="absolute left-[27px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-blue-100 via-blue-200 to-transparent"></div>
              
              <div className="space-y-16">
                 {/* Step 1 */}
                 <div className="relative flex gap-6 items-start group">
                    <div className="relative z-10 flex-shrink-0">
                       <div className="w-14 h-14 bg-white border-4 border-white rounded-2xl shadow-[0_4px_12px_rgba(59,130,246,0.15)] flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-6 h-6 fill-current" />
                       </div>
                       <div className="absolute -top-2 -right-2 w-7 h-7 bg-blue-600 text-white text-[11px] font-black rounded-full flex items-center justify-center border-2 border-white shadow-sm italic">
                          1
                       </div>
                    </div>
                    <div className="pt-2">
                       <h3 className="text-xl font-extrabold mb-1 text-neutral-900 leading-tight tracking-tight">Abra e dê o play</h3>
                       <p className="text-neutral-500 font-medium leading-relaxed text-sm">Escolha sua região e ative o guia. É simples e rápido.</p>
                    </div>
                 </div>

                 {/* Step 2 */}
                 <div className="relative flex gap-6 items-start group">
                    <div className="relative z-10 flex-shrink-0">
                       <div className="w-14 h-14 bg-white border-4 border-white rounded-2xl shadow-[0_4px_12px_rgba(59,130,246,0.15)] flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform duration-300">
                          <MapPin className="w-6 h-6 fill-current" />
                       </div>
                       <div className="absolute -top-2 -right-2 w-7 h-7 bg-blue-600 text-white text-[11px] font-black rounded-full flex items-center justify-center border-2 border-white shadow-sm italic">
                          2
                       </div>
                    </div>
                    <div className="pt-2">
                       <h3 className="text-xl font-extrabold mb-1 text-neutral-900 leading-tight tracking-tight">Histórias ao seu redor</h3>
                       <p className="text-neutral-500 font-medium leading-relaxed text-sm">O GPS detecta lugares de interesse e o áudio começa sozinho.</p>
                    </div>
                 </div>

                 {/* Step 3 */}
                 <div className="relative flex gap-6 items-start group">
                    <div className="relative z-10 flex-shrink-0">
                       <div className="w-14 h-14 bg-white border-4 border-white rounded-2xl shadow-[0_4px_12px_rgba(59,130,246,0.15)] flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform duration-300">
                          <Headphones className="w-6 h-6 fill-current" />
                       </div>
                       <div className="absolute -top-2 -right-2 w-7 h-7 bg-blue-600 text-white text-[11px] font-black rounded-full flex items-center justify-center border-2 border-white shadow-sm italic">
                          3
                       </div>
                    </div>
                    <div className="pt-2">
                       <h3 className="text-xl font-extrabold mb-1 text-neutral-900 leading-tight tracking-tight">Você segue sua vida</h3>
                       <p className="text-neutral-500 font-medium leading-relaxed text-sm">Funciona em segundo plano com seu mapa (Waze, G Maps) e música.</p>
                    </div>
                 </div>
              </div>
           </div>
           
           <div className="text-center mt-20">
              <button 
                onClick={handleDownloadSheet}
                className="w-full max-w-xs py-5 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-[20px] font-black text-lg shadow-[0_12px_24px_-8px_rgba(37,99,235,0.4)] hover:shadow-[0_12px_32px_-8px_rgba(37,99,235,0.5)] active:scale-95 transition-all outline-none ring-4 ring-blue-600/10"
              >
                {t.howItWorks.cta}
              </button>
           </div>
        </div>
      </section>

      {/* 4) AUDIO SAMPLE */}
      <section className="py-20 bg-neutral-50 border-y border-neutral-200">
         <div className={layout.container.base}>
            <AudioSamplesSection 
              currentLanguage={currentLanguage}
              limit={2}
              hideImages={false}
              title={t.sample.title}
              subtitle={t.sample.desc}
            />
            
            <div className="text-center mt-8">
               <button onClick={handleDownloadSheet} className="text-sm font-bold text-neutral-500 hover:text-blue-600 flex items-center justify-center gap-2 mx-auto">
                  <Headphones className="w-4 h-4" />
                  <span>Ouvir mais no app</span>
               </button>
            </div>
         </div>
      </section>

      {/* 5) USE CASES */}
      <section className="py-20 bg-white">
         <div className={layout.container.base}>
            <h2 className="text-3xl font-extrabold text-center mb-16 px-4">{t.useCases.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {t.useCases.cards.map((card: any, i: number) => {
                 const Icons = [Globe, Car, MapPin];
                 const Icon = Icons[i];
                 return (
                   <div key={i} className="bg-neutral-50 p-6 lg:p-8 rounded-3xl border border-neutral-100 flex flex-col">
                      <div className="flex items-center gap-4 mb-6">
                         <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-neutral-900 shadow-sm border border-neutral-100">
                            <Icon className="w-6 h-6" />
                         </div>
                         <h3 className="text-xl font-extrabold text-neutral-900">{card.title}</h3>
                      </div>
                      <p className="text-neutral-600 font-medium leading-relaxed text-sm">{card.desc}</p>
                   </div>
                 )
               })}
            </div>

            <div className="text-center mt-12">
               <button 
                 onClick={handleDownloadSheet}
                 className="bg-neutral-900 text-white px-10 py-4 rounded-xl font-bold hover:bg-black transition-colors shadow-lg active:scale-95"
               >
                 Explore hoje
               </button>
            </div>
         </div>
      </section>

      {/* 6) PLANS */}
      <section id="planos" className="py-20 bg-neutral-900 text-white">
         <div className={layout.container.base}>
            <div className="text-center mb-16">
               <h2 className="text-4xl font-black mb-4 text-white tracking-tight">{t.plans.title}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
               
               {/* Free */}
               <div className="bg-neutral-800 rounded-3xl p-8 border border-neutral-700 flex flex-col">
                  <div className="mb-6">
                     <h3 className="text-xl font-bold text-neutral-400 mb-2">{prices.free.title}</h3>
                     <div className="text-4xl font-black">{prices.free.price}</div>
                  </div>
                  <ul className="space-y-4 mb-8 flex-1">
                     {prices.free.features.map((f: string, idx: number) => (
                       <li key={idx} className="flex items-center gap-3 text-neutral-300 font-medium text-sm">
                          <Check className="w-4 h-4 text-neutral-500" />
                          {f}
                       </li>
                     ))}
                  </ul>
                  <button onClick={handleDownloadSheet} className="w-full py-4 rounded-xl font-bold bg-neutral-700 hover:bg-neutral-600 transition-colors">
                     {t.plans.ctaFree}
                  </button>
               </div>

               {/* Travel 7 Days - Highlight */}
               <div className="bg-blue-600 rounded-3xl p-8 border border-blue-500 flex flex-col relative shadow-2xl transform md:-translate-y-4">
                  <div className="absolute top-0 right-0 bg-white text-blue-600 text-xs font-black uppercase px-3 py-1 rounded-bl-xl rounded-tr-2xl tracking-wider">Turismo</div>
                  <div className="mb-6">
                     <h3 className="text-xl font-bold text-blue-100 mb-2">{prices.travel.title}</h3>
                     <div className="text-4xl font-black mb-1">{prices.travel.price}</div>
                     <p className="text-xs text-blue-200 font-bold opacity-80">{prices.travel.sub}</p>
                  </div>
                  <ul className="space-y-4 mb-8 flex-1">
                     {prices.travel.features.map((f: string, idx: number) => (
                       <li key={idx} className="flex items-center gap-3 text-white font-medium text-sm">
                          <Check className="w-4 h-4 text-blue-200" />
                          {f}
                       </li>
                     ))}
                  </ul>
                  <button onClick={handleDownloadSheet} className="w-full py-4 rounded-xl font-bold bg-white text-blue-600 hover:bg-blue-50 transition-colors">
                     {t.plans.ctaActivate}
                  </button>
               </div>

               {/* Monthly */}
               <div className="bg-neutral-800 rounded-3xl p-8 border border-neutral-700 flex flex-col">
                  <div className="mb-6">
                     <h3 className="text-xl font-bold text-neutral-400 mb-2">{prices.monthly.title}</h3>
                     <div className="text-4xl font-black mb-1">{prices.monthly.price}</div>
                     <p className="text-xs text-neutral-500 font-bold">{prices.monthly.sub}</p>
                  </div>
                  <ul className="space-y-4 mb-8 flex-1">
                     {prices.monthly.features.map((f: string, idx: number) => (
                       <li key={idx} className="flex items-center gap-3 text-neutral-300 font-medium text-sm">
                          <Check className="w-4 h-4 text-neutral-500" />
                          {f}
                       </li>
                     ))}
                  </ul>
                  <button onClick={handleDownloadSheet} className="w-full py-4 rounded-xl font-bold bg-neutral-700 hover:bg-neutral-600 transition-colors">
                     {t.plans.ctaActivate}
                  </button>
               </div>

            </div>
            
            <p className="text-center text-xs text-neutral-500 mt-8">{t.plans.micro}</p>
         </div>
      </section>

      {/* 7) FREEDOM & PRIVACY (Combined) */}
      <section className="py-24 bg-white">
         <div className={layout.container.base}>
            <div className="text-center mb-16 px-4">
               <h2 className="text-4xl font-black text-neutral-900 tracking-tighter mb-4 text-balance">
                  {t.freedom.title}
               </h2>
               <p className="text-neutral-500 font-medium max-w-xl mx-auto italic">
                  Liberdade total para você dirigir, caminhar ou explorar.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {t.freedom.cards.map((card: any, i: number) => {
                 const Icons = [Globe, Smartphone, Lock];
                 const Icon = Icons[i];
                 return (
                   <div key={i} className="group p-8 rounded-[32px] bg-neutral-50 border border-neutral-100 hover:bg-white hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300">
                      <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-blue-600 mb-6 shadow-sm border border-neutral-100 group-hover:scale-110 transition-transform">
                         <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-extrabold text-neutral-900 mb-3">{card.title}</h3>
                      <p className="text-neutral-500 font-medium leading-relaxed text-sm lg:text-base">
                         {card.desc}
                      </p>
                   </div>
                 )
               })}
            </div>

            <div className="flex justify-center gap-8 mt-16 text-xs font-bold text-neutral-400 uppercase tracking-widest px-4">
               <a href="/privacy" className="hover:text-blue-600 transition-colors">{t.freedom.links.privacy}</a>
               <a href="/terms" className="hover:text-blue-600 transition-colors">{t.freedom.links.terms}</a>
            </div>
         </div>
      </section>

      {/* 9) SOCIAL PROOF */}
      <section className="py-20 bg-neutral-50 border-y border-neutral-200">
         <div className={layout.container.base}>
            <h2 className="text-3xl font-extrabold text-center mb-12">{t.proof.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {t.proof.items.map((item: any, i: number) => (
                  <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100">
                     <div className="flex text-yellow-400 mb-4 gap-0.5">
                        {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-current" />)}
                     </div>
                     <p className="text-neutral-800 font-medium mb-6 leading-relaxed">"{item.txt}"</p>
                     <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full text-white flex items-center justify-center font-bold text-xs">
                           {item.name.charAt(0)}
                        </div>
                        <div className="text-sm">
                           <div className="font-bold text-neutral-900">{item.name}</div>
                           <div className="text-neutral-500">{item.city}</div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 10) FAQ */}
      <section className="py-20 bg-white">
         <div className={layout.container.narrow}>
            <h2 className="text-3xl font-extrabold text-center mb-12">{t.faq.title}</h2>
            <div className="space-y-3">
               {t.faq.items.map((item: any, i: number) => (
                 <div key={i} className="border-b border-neutral-100 last:border-0">
                    <button 
                      onClick={() => toggleFaq('faq'+i)}
                      className="w-full flex justify-between items-center py-5 text-left font-bold text-neutral-900 hover:text-blue-600 transition-colors"
                    >
                       {item.q}
                       {openFaqItems.has('faq'+i) ? <ChevronUp className="w-5 h-5 text-neutral-400" /> : <ChevronDown className="w-5 h-5 text-neutral-400" />}
                    </button>
                    {openFaqItems.has('faq'+i) && (
                       <div className="pb-6 text-neutral-600 leading-relaxed font-medium animate-in slide-in-from-top-2 duration-200">
                          {item.a}
                       </div>
                    )}
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* 11) FOOTER CTA */}
      <section className="pt-24 pb-0 bg-neutral-900 text-white text-center">
         <div className={layout.container.base}>
            <h2 className="text-4xl font-black mb-4 tracking-tight !text-white">{t.footer.title}</h2>
            <p className="text-neutral-400 font-medium mb-10">{t.footer.sub}</p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto pb-24">
                <button onClick={() => handleStoreClick('apple', 'footer')} className="w-full bg-white text-neutral-900 hover:bg-neutral-100 transition-colors py-4 px-6 rounded-xl font-bold flex items-center justify-center gap-3 shadow-lg">
                   <svg className="w-6 h-6" viewBox="0 0 384 512" fill="currentColor"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
                   <span>Baixar no iPhone</span>
                </button>
                <button onClick={() => handleStoreClick('google', 'footer')} className="w-full bg-neutral-800 border border-neutral-700 text-white hover:bg-neutral-700 transition-colors py-4 px-6 rounded-xl font-bold flex items-center justify-center gap-3 shadow-lg">
                   <svg className="w-6 h-6" viewBox="0 0 512 512" fill="currentColor"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
                   <span>Baixar no Android</span>
                </button>
            </div>
         </div>
      </section>

      {/* BOTTOM SHEET MODAL */}
      {showDownloadSheet && (
         <div className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center p-4 animate-in fade-in duration-200">
            <div 
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setShowDownloadSheet(false)}
            ></div>
            <div className="bg-white w-full max-w-sm rounded-[2rem] p-6 relative shadow-2xl animate-in slide-in-from-bottom-10 zoom-in-95 duration-300">
               <button onClick={() => setShowDownloadSheet(false)} className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-neutral-900 bg-neutral-100 rounded-full">
                  <X className="w-5 h-5" />
               </button>
               <h3 className="text-xl font-extrabold text-center mb-2">Baixar Tuggi Grátis</h3>
               <p className="text-center text-neutral-500 font-medium mb-6 text-sm">Escolha sua loja de aplicativos</p>
               
               <div className="flex flex-col gap-3">
                  <button onClick={() => handleStoreClick('apple', 'modal')} className="w-full bg-neutral-900 text-white hover:bg-black py-4 px-6 rounded-xl font-bold flex items-center justify-center gap-3">
                     <svg className="w-6 h-6" viewBox="0 0 384 512" fill="currentColor"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
                     <span>iPhone / iPad</span>
                  </button>
                  <button onClick={() => handleStoreClick('google', 'modal')} className="w-full bg-white text-neutral-900 border border-neutral-200 hover:bg-neutral-50 py-4 px-6 rounded-xl font-bold flex items-center justify-center gap-3">
                     <svg className="w-6 h-6" viewBox="0 0 512 512" fill="currentColor"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
                     <span>Android</span>
                  </button>
               </div>
            </div>
         </div>
      )}

    </div>
  );
};

export default DriversLandingPageE;
