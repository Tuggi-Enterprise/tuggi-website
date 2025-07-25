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
    <section className="relative overflow-hidden" style={{ background: gradients.hero }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%2300A8E8%22 fill-opacity=%220.03%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      <div className={`${layout.container.base} ${layout.section.hero}`}>
        <div className={`${layout.grid['2']} gap-6 lg:gap-8 xl:gap-12 items-center`}>
          {/* Content */}
          <div className="animate-slide-up">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-neutral-900 leading-tight mb-2 lg:mb-3">
              {content.title}
            </h1>
            
            <p className="text-base sm:text-lg text-neutral-600 mb-3 lg:mb-4 font-medium leading-relaxed whitespace-pre-line">
              {content.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <button 
                onClick={() => handleCTAClick('download_free')}
                className={`${getButtonClasses('primary', 'lg')} inline-flex items-center gap-2`}
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>{content.downloadFree}</span>
              </button>
              
              {/* <button 
                onClick={() => handleCTAClick('how_it_works')}
                className={`${getButtonClasses('outline', 'lg')} inline-flex items-center gap-2`}
              >
                <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>{content.howItWorks}</span>
              </button> */}
            </div>

            {/* Availability Note */}
            <div className="flex items-start gap-3 text-neutral-600">
              <MapPin className="w-5 h-5 mt-0.5 text-tuggi-primary flex-shrink-0" />
              <p className="text-sm leading-relaxed">
                {content.availability}
              </p>
            </div>
          </div>

          {/* Mobile App Mockup */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-3xl p-4 sm:p-6 lg:p-8 overflow-hidden" style={{ background: gradients.subtle }}>
              {/* Mobile App Screenshot with Animation */}
              <div className="mx-auto relative overflow-hidden">
                <div className="relative w-40 sm:w-48 lg:w-56 mx-auto overflow-hidden">
                  {screenshots.map((screenshot, index) => (
                    <img 
                      key={screenshot}
                      src={screenshot} 
                      alt={`Tuggi Drive mobile app screenshot ${index + 1}`}
                      className={`absolute top-0 left-0 w-full h-auto rounded-2xl sm:rounded-3xl shadow-2xl transition-opacity duration-600 ease-in-out object-contain ${
                        index === currentImageIndex && !isTransitioning
                          ? 'opacity-100'
                          : 'opacity-0'
                      }`}
                      style={{
                        transition: 'opacity 0.6s ease-in-out',
                        aspectRatio: '9/16'
                      }}
                    />
                  ))}
                  {/* Placeholder to maintain aspect ratio */}
                  <div className="w-full rounded-2xl sm:rounded-3xl" style={{ aspectRatio: '9/16' }}></div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 bg-tuggi-secondary rounded-2xl opacity-20 rotate-12 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 sm:w-16 sm:h-16 bg-tuggi-primary rounded-2xl opacity-20 -rotate-12 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;