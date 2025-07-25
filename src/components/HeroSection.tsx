import React, { useState, useEffect } from 'react';
import { Download, Play, MapPin } from 'lucide-react';

interface HeroSectionProps {
  currentLanguage?: string;
  onCTAClick?: (ctaType: string, language: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  currentLanguage = 'EN',
  onCTAClick 
}) => {
  // State for image animation
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    '/home-screenshot.png',
    '/home-screenshot-2.png'
  ];

  // Animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  // Localized content
  const getLocalizedContent = (language: string) => {
    const content: Record<string, any> = {
      PT: {
        title: 'Descubra. Ouça. Construa cultura com a Tuggi.',
        subtitle: 'Explore no seu ritmo, sem rotas fixas.\nA Tuggi transforma qualquer trajeto em uma experiência sonora de conhecimento.\nDurante o beta, o app é gratuito — e você pode nos ajudar a melhorar.',
        downloadFree: 'Baixar gratuitamente',
        howItWorks: 'Como funciona',
        availability: 'Disponível em São Paulo e cidades do interior. Novos lugares em breve.',
        features: {
          realTime: 'Narrativas em tempo real',
          noRoutes: 'Sem rotas fixas',
          cultural: 'Experiência cultural'
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
          noRoutes: 'No fixed routes',
          cultural: 'Cultural experience'
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
          noRoutes: 'Sin rutas fijas',
          cultural: 'Experiencia cultural'
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
    <section className="relative bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%2300A8E8%22 fill-opacity=%220.03%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-12 xl:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-12 items-center">
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
                className="bg-tuggi-primary hover:bg-tuggi-primary-dark text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-200 hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2 group text-sm sm:text-base"
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>{content.downloadFree}</span>
              </button>
              
              <button 
                onClick={() => handleCTAClick('how_it_works')}
                className="border-2 border-neutral-300 hover:border-tuggi-primary text-neutral-700 hover:text-tuggi-primary px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 group bg-white/80 backdrop-blur-sm text-sm sm:text-base"
              >
                <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>{content.howItWorks}</span>
              </button>
            </div>

            {/* Availability Note */}
            <div className="flex items-start space-x-3 text-neutral-600">
              <MapPin className="w-5 h-5 mt-0.5 text-tuggi-primary flex-shrink-0" />
              <p className="text-sm leading-relaxed">
                {content.availability}
              </p>
            </div>
          </div>

          {/* Mobile App Mockup */}
          <div className="relative animate-fade-in">
            <div className="relative bg-gradient-subtle rounded-3xl p-6 lg:p-8">
              {/* Mobile App Screenshot */}
              <div className="mx-auto relative">
                {images.map((image, index) => (
                  <img 
                    key={image}
                    src={image} 
                    alt="Tuggi Drive mobile app screenshot" 
                    className={`w-48 h-auto rounded-3xl shadow-2xl mx-auto absolute top-0 left-1/2 transform -translate-x-1/2 transition-opacity duration-1000 ease-in-out ${
                      index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ zIndex: index === currentImageIndex ? 2 : 1 }}
                  />
                ))}
                {/* Spacer to maintain height */}
                <div className="w-48 h-auto invisible">
                  <img 
                    src={images[0]} 
                    alt="" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-tuggi-secondary rounded-2xl opacity-20 rotate-12"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-tuggi-primary rounded-2xl opacity-20 -rotate-12"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;