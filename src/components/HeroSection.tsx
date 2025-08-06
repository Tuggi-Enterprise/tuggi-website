import React, { useState, useEffect } from 'react';
import { Download, Play, MapPin } from 'lucide-react';
import { getButtonClasses, layout, gradients } from '../utils/designSystem';

interface Features {
  realTime: string;
  offline: string;
  personalized: string;
}

interface ContentLanguage {
  title: string;
  subtitle: string;
  downloadFree: string;
  howItWorks: string;
  availability: string;
  comingSoon: string;
  features: Features;
}

interface HeroSectionProps {
  currentLanguage?: string;
  onCTAClick?: (ctaType: string, language: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  currentLanguage = 'EN',
  onCTAClick 
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const screenshots = [
    '/home-screenshot.png',
    '/home-screenshot-2.png'
  ];

  // Auto-cycle through screenshots every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex(prev => (prev + 1) % screenshots.length);
        setIsTransitioning(false);
      }, 150);
    }, 4000);

    return () => clearInterval(interval);
  }, [screenshots.length]);

  // Localized content
  const getLocalizedContent = (language: string): ContentLanguage => {
    const content: Record<string, ContentLanguage> = {
      PT: {
        title: 'Descubra. Ouça. Construa cultura com a Tuggi.',
        subtitle: 'Explore no seu ritmo, sem rotas fixas.\nA Tuggi transforma qualquer trajeto em uma experiência sonora de conhecimento.\nDurante o beta, o app é gratuito — e você pode nos ajudar a melhorar.',
        downloadFree: 'Baixar gratuitamente',
        howItWorks: 'Como funciona',
        availability: 'Disponível em São Paulo e cidades do interior. Novos lugares em breve.',
        comingSoon: 'Em breve',
        features: {
          realTime: 'Narrativas em tempo real',
          offline: 'Offline',
          personalized: 'Personalizado'
        }
      },
      EN: {
        title: 'Discover. Listen. Build culture with Tuggi.',
        subtitle: 'Explore at your own pace, without fixed routes.\nTuggi transforms any journey into a sound experience of knowledge.\nDuring beta, the app is free — and you can help us improve.',
        downloadFree: 'Download for free',
        howItWorks: 'How it works',
        availability: 'Available in São Paulo and interior cities. New places coming soon.',
        comingSoon: 'Coming soon',
        features: {
          realTime: 'Real-time narratives',
          offline: 'Offline',
          personalized: 'Personalized'
        }
      },
      ES: {
        title: 'Descubre. Escucha. Construye cultura con Tuggi.',
        subtitle: 'Explora a tu ritmo, sin rutas fijas.\nTuggi transforma cualquier trayecto en una experiencia sonora de conocimiento.\nDurante la beta, la app es gratuita — y puedes ayudarnos a mejorar.',
        downloadFree: 'Descargar gratis',
        howItWorks: 'Cómo funciona',
        availability: 'Disponible en São Paulo y ciudades del interior. Nuevos lugares próximamente.',
        comingSoon: 'Próximamente',
        features: {
          realTime: 'Narrativas en tiempo real',
          offline: 'Offline',
          personalized: 'Personalizado'
        }
      }
    };
    return content[language] || content['PT'];
  };

  const content = getLocalizedContent(currentLanguage);

  const handleCTAClick = (ctaType: string) => {
    onCTAClick?.(ctaType, currentLanguage);
  };

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center" style={{ background: gradients.hero }}>
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%2300A8E8%22 fill-opacity=%220.04%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      {/* Enhanced floating geometric elements for visual interest */}
      <div className="absolute top-20 left-4 w-8 h-8 bg-tuggi-primary/15 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
      <div className="absolute top-32 right-8 w-6 h-6 bg-tuggi-secondary/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-32 left-8 w-4 h-4 bg-tuggi-primary/25 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      <div className="absolute top-1/2 right-4 w-3 h-3 bg-tuggi-secondary/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className={`${layout.container.base} w-full`}>
        <div className={`${layout.grid['2']} gap-8 lg:gap-12 xl:gap-16 items-center`}>
          {/* Content */}
          <div className="animate-slide-up space-y-6">
            {/* Enhanced title with better mobile hierarchy */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-neutral-900 leading-[1.1] tracking-tight">
                <span className="bg-gradient-to-r from-tuggi-primary to-tuggi-secondary bg-clip-text text-transparent">
                  {content.title.split('.').slice(0, 2).join('.') + '.'}
                </span>
                <br />
                <span className="text-neutral-900">
                  {content.title.split('.').slice(2).join('.').trim()}
                </span>
              </h1>
            </div>
            
            <p className="text-lg sm:text-xl text-neutral-700 leading-relaxed font-medium max-w-2xl">
              {content.subtitle.split('\n')[0]} {content.subtitle.split('\n')[1].split('.')[0]}.
              <span className="text-tuggi-primary font-semibold">
                {content.subtitle.split('\n')[1].split('.').slice(1).join('.').trim()}
              </span>
            </p>
            
            {/* Beta highlight */}
            <div className="inline-flex items-center gap-2 bg-tuggi-primary/10 text-tuggi-primary px-4 py-2 rounded-full text-sm font-semibold">
              <div className="w-2 h-2 bg-tuggi-primary rounded-full animate-pulse"></div>
              {content.subtitle.split('\n')[2]}
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                disabled
                className="group bg-gradient-to-r from-neutral-400 via-neutral-500 to-neutral-600 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 inline-flex items-center justify-center gap-3 cursor-not-allowed opacity-75"
              >
                <Download className="w-5 h-5" />
                <span>{content.downloadFree}</span>
                <span className="ml-2 bg-white/20 px-2 py-1 rounded-full text-xs font-medium">{content.comingSoon}</span>
              </button>
            </div>

            {/* Enhanced Availability Note */}
            <div className="flex items-start gap-3 bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-tuggi-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-tuggi-primary" />
                </div>
              </div>
              <div>
                 <p className="text-neutral-700 font-medium leading-relaxed">
                   {content.availability}
                 </p>
               </div>
            </div>
          </div>

          {/* Enhanced Mobile App Mockup */}
          <div className="relative animate-fade-in">
            {/* Glowing background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-tuggi-primary/20 to-tuggi-secondary/20 rounded-3xl blur-3xl transform scale-110"></div>
            
            <div className="relative bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-white/30 shadow-2xl">
              {/* Mobile App Screenshot with Enhanced Animation */}
              <div className="mx-auto relative">
                <div className="relative w-48 sm:w-56 lg:w-64 mx-auto">
                  {/* Phone frame effect */}
                   <div className="absolute inset-0 bg-gradient-to-b from-neutral-800 to-neutral-900 rounded-[2.5rem] p-2 shadow-2xl animate-glow-pulse">
                    <div className="w-full h-full bg-black rounded-[2rem] overflow-hidden relative">
                      {/* Screen content */}
                      {screenshots.map((screenshot, index) => (
                        <img 
                          key={screenshot}
                          src={screenshot} 
                          alt={`Tuggi Drive mobile app screenshot ${index + 1}`}
                          className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
                            index === currentImageIndex && !isTransitioning
                              ? 'opacity-100 scale-100'
                              : 'opacity-0 scale-105'
                          }`}
                        />
                      ))}
                      
                      {/* Screen overlay for realism */}
                      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 pointer-events-none"></div>
                    </div>
                    
                    {/* Phone details */}
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-neutral-600 rounded-full"></div>
                    <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-neutral-700 rounded-full"></div>
                  </div>
                  
                  {/* Placeholder for aspect ratio */}
                  <div className="w-full" style={{ aspectRatio: '9/19.5' }}></div>
                </div>
              </div>
              
              {/* Enhanced Floating Elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-tuggi-secondary to-tuggi-secondary/70 rounded-2xl opacity-30 rotate-12 animate-pulse shadow-lg"></div>
              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-gradient-to-br from-tuggi-primary to-tuggi-primary/70 rounded-2xl opacity-25 -rotate-12 animate-pulse shadow-lg" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 -right-4 w-8 h-8 bg-gradient-to-br from-tuggi-primary/40 to-tuggi-secondary/40 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;