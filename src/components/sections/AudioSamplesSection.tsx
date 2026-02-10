import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import audioSamples from '../../data/audio-samples.json';
import AudioCardMultilingual from '../features/AudioCardMultilingual';

interface AudioSamplesSectionProps {
  currentLanguage?: string;
  title?: string;
  subtitle?: string;
  hideImages?: boolean;
  limit?: number;
  hideShowMore?: boolean;
}

const AudioSamplesSection: React.FC<AudioSamplesSectionProps> = ({ 
  currentLanguage = 'PT',
  title,
  subtitle,
  hideImages = false,
  limit,
  hideShowMore = false
}) => {
  const [showAllSamples, setShowAllSamples] = useState(false);

  const translations: Record<string, any> = {
    PT: {
      samplesTitle: 'Ouça um exemplo real',
      samplesSubtitle: 'Histórias curtas e contextuais para ouvir enquanto dirige.',
      showMore: 'Ver mais exemplos',
      showLess: 'Ver menos'
    },
    EN: {
      samplesTitle: 'Listen to a real example',
      samplesSubtitle: 'Short, contextual stories to listen to while driving.',
      showMore: 'Show more examples',
      showLess: 'Show less'
    },
    ES: {
      samplesTitle: 'Escucha un ejemplo real',
      samplesSubtitle: 'Historias cortas y contextuales para escuchar mientras conduces.',
      showMore: 'Ver más ejemplos',
      showLess: 'Ver menos'
    },
    FR: {
      samplesTitle: 'Écoutez un exemple réel',
      samplesSubtitle: 'De courtes histoires contextuelles à écouter tout en conduisant.',
      showMore: 'Voir plus d\'exemples',
      showLess: 'Voir moins'
    },
    DE: {
      samplesTitle: 'Hören Sie ein echtes Beispiel',
      samplesSubtitle: 'Kurze, kontextbezogene Geschichten, die Sie während der Fahrt hören können.',
      showMore: 'Mehr Beispiele anzeigen',
      showLess: 'Weniger anzeigen'
    },
    IT: {
      samplesTitle: 'Ascolta un esempio reale',
      samplesSubtitle: 'Brevi storie contestuali da ascoltare durante la guida.',
      showMore: 'Vedi altri esempi',
      showLess: 'Vedi meno'
    }
  };

  const t = translations[currentLanguage as keyof typeof translations] || translations.EN;

  const displayTitle = title || t.samplesTitle;
  const displaySubtitle = subtitle || t.samplesSubtitle;

  const getDisplaySamples = () => {
    if (limit) return audioSamples.slice(0, limit);
    return showAllSamples ? audioSamples.slice(0, 6) : audioSamples.slice(0, 3);
  };

  return (
    <div className="mb-24">
      <div className="text-center mb-8">
        <h2 
          className="font-bold mb-4 leading-tight text-[#0F172A] text-[32px] tracking-tight"
          style={{ 
            fontFamily: 'var(--font-sans)',
            fontWeight: '700',
          }}
        >
          {displayTitle}
        </h2>
        <p 
          className="max-w-2xl mx-auto leading-relaxed text-[#374151] font-medium text-lg"
          style={{ 
            fontFamily: 'var(--font-sans)',
          }}
        >
          {displaySubtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {getDisplaySamples().map((sample: any) => (
          <AudioCardMultilingual
            key={sample.id}
            sample={sample}
            currentLanguage={currentLanguage}
            hideImage={hideImages}
          />
        ))}
      </div>

      {!limit && !hideShowMore && (
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAllSamples(!showAllSamples)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors duration-200"
            style={{ 
              background: 'transparent',
              color: '#374151',
              border: '1px solid #D1D5DB',
              borderRadius: '24px',
              padding: '12px 24px',
              fontFamily: 'var(--font-sans)',
              fontSize: '14px',
              fontWeight: '500'
            }}
          >
            {showAllSamples ? t.showLess : t.showMore}
            <ChevronDown 
              className={`w-4 h-4 transition-transform duration-200 ${
                showAllSamples ? 'rotate-180' : ''
              }`} 
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default AudioSamplesSection;
