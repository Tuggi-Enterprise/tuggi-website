import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import audioSamples from '../../data/audio-samples.json';
import AudioCardMultilingual from '../features/AudioCardMultilingual';

interface AudioSamplesSectionProps {
  currentLanguage?: string;
  title?: string;
  subtitle?: string;
}

const AudioSamplesSection: React.FC<AudioSamplesSectionProps> = ({ 
  currentLanguage = 'PT',
  title,
  subtitle
}) => {
  const [showAllSamples, setShowAllSamples] = useState(false);

  const translations = {
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
    }
  };

  const t = translations[currentLanguage as keyof typeof translations] || translations.PT;

  const displayTitle = title || t.samplesTitle;
  const displaySubtitle = subtitle || t.samplesSubtitle;

  const getDisplaySamples = () => {
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
          />
        ))}
      </div>

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
    </div>
  );
};

export default AudioSamplesSection;
