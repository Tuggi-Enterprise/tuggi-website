import React, { useState, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';
import { getFlag } from '../../utils/languageUtils';
import { trackAudioPlay } from '../../lib/analytics';

interface AudioSample {
  id: string;
  city: string;
  image: string;
  verified: boolean;
  audios: {
    PT: {
      name: string;
      url: string;
      duration: string;
      description: string;
    };
    EN: {
      name: string;
      url: string;
      duration: string;
      description: string;
    };
    ES: {
      name: string;
      url: string;
      duration: string;
      description: string;
    };
  };
}

interface AudioCardMultilingualProps {
  sample: AudioSample;
  currentLanguage: string;
}

const AudioCardMultilingual: React.FC<AudioCardMultilingualProps> = ({ 
  sample, 
  currentLanguage 
}) => {
  const [playingLanguage, setPlayingLanguage] = useState<string | null>(null);
  const [activeLanguage, setActiveLanguage] = useState<string>(currentLanguage);
  const [audioRefs, setAudioRefs] = useState<{ [key: string]: HTMLAudioElement | null }>({});
  const [loadingLanguage, setLoadingLanguage] = useState<string | null>(null);
  
  // Audio padrão baseado no idioma do site
  const availableLanguages = Object.keys(sample.audios);
  
  const handlePlayAudio = async (language: string) => {
    try {
      // Pausar todos os outros audios
      Object.values(audioRefs).forEach(audio => {
        if (audio && !audio.paused) {
          audio.pause();
        }
      });
      
      if (playingLanguage === language) {
        // Pausar se já está tocando
        setPlayingLanguage(null);
        return;
      }
      
      // Mostrar loading
      setLoadingLanguage(language);
      setActiveLanguage(language);
      
      // Criar ou usar audio element
      let audio = audioRefs[language];
      if (!audio) {
        audio = new Audio(sample.audios[language as 'PT' | 'EN' | 'ES'].url);
        setAudioRefs(prev => ({ ...prev, [language]: audio }));
        
        // Configurar eventos do audio
        audio.oncanplaythrough = () => {
          setLoadingLanguage(null);
        };
        
        audio.onended = () => {
          setPlayingLanguage(null);
        };
        
        audio.onerror = () => {
          console.error(`Erro ao carregar áudio para ${language}`);
          setPlayingLanguage(null);
          setLoadingLanguage(null);
        };
      }
      
      // Reproduzir
      await audio.play();
      setPlayingLanguage(language);
      setLoadingLanguage(null);
      
      // Analytics
      trackAudioPlay(sample.id, language);
      
    } catch (error) {
      console.error('Erro ao reproduzir áudio:', error);
      setPlayingLanguage(null);
      setLoadingLanguage(null);
    }
  };
  
  const getCurrentAudio = () => sample.audios[activeLanguage as 'PT' | 'EN' | 'ES'];
  
  const getLocalizedSource = (lang: string) => {
    switch (lang) {
      case 'EN': return 'Source: cultural content validated by experts';
      case 'ES': return 'Fuente: contenido cultural validado por expertos';
      default: return 'Fonte: conteúdo cultural validado por especialistas';
    }
  };
  
  // Cleanup audio elements on unmount
  useEffect(() => {
    return () => {
      Object.values(audioRefs).forEach(audio => {
        if (audio) {
          audio.pause();
          audio.src = '';
        }
      });
    };
  }, []);
  
  return (
    <div 
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
      style={{
        borderRadius: '16px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
      }}
    >
      {/* Image with Overlay */}
      <div className="relative">
        <img 
          src={sample.image} 
          alt={getCurrentAudio().name}
          className="w-full h-48 object-cover"
        />
        
        {/* Overlay with Location and Title */}
        <div 
          className="absolute bottom-0 left-0 right-0 p-4"
          style={{
            background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.85) 100%)'
          }}
        >
          {/* Location */}
          <div className="flex items-center gap-2 mb-1">
            <span className="text-sm text-white font-medium"> {sample.city}</span>
          </div>
          
          {/* Title */}
          <h3 
            className="font-bold text-lg leading-tight text-white"
            style={{ 
              fontFamily: 'var(--font-sans)',
              textShadow: '0 2px 4px rgba(0,0,0,0.5)'
            }}
          >
            {getCurrentAudio().name}
          </h3>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        
        {/* Language Flags with Play Buttons */}
        <div className="flex items-center gap-3 mb-4">
          {availableLanguages.map((lang) => (
            <button
              key={lang}
              onClick={() => handlePlayAudio(lang)}
              className={`flex items-center gap-2 px-4 py-3 rounded-full transition-all duration-200 min-h-[44px] ${
                activeLanguage === lang 
                  ? 'bg-blue-50 border-2 border-blue-200' 
                  : 'bg-gray-50 border-2 border-transparent hover:bg-gray-100'
              }`}
              style={{
                borderRadius: '20px',
                minHeight: '44px' // Touch target minimum
              }}
            >
              <span className="text-lg">{getFlag(lang)}</span>
              <span className="text-sm font-medium">
                {loadingLanguage === lang ? (
                  <div className="w-4 h-4 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
                ) : playingLanguage === lang ? (
                  <Pause className="w-4 h-4" />
                ) : (
                  <Play className="w-4 h-4" />
                )}
              </span>
            </button>
          ))}
        </div>
        
        {/* Description */}
        <p 
          className="text-sm leading-relaxed mb-3"
          style={{ 
            color: '#4B5563',
            fontFamily: 'var(--font-sans)',
            lineHeight: '1.6'
          }}
        >
          {getCurrentAudio().description}
        </p>
        
        
        {/* Source Note */}
        <p 
          className="text-xs mt-3"
          style={{ 
            color: '#9CA3AF',
            fontStyle: 'italic'
          }}
        >
          {getLocalizedSource(activeLanguage)}
        </p>
      </div>
    </div>
  );
};


export default AudioCardMultilingual;
