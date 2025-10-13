import React from 'react';
import HeroV2 from './HeroV2';
import TrustSectionV2 from './TrustSectionV2';
import BenefitsV2 from './BenefitsV2';
import VideoV2 from './VideoV2';
import TestimonialsV2 from './TestimonialsV2';
import FAQV2 from './FAQV2';
import CTAFinalV2 from './CTAFinalV2';

interface HomeV2Props {
  currentLanguage?: string;
  onCTAClick?: (ctaType: string, position?: string) => void;
}

const HomeV2: React.FC<HomeV2Props> = ({ 
  currentLanguage = 'PT',
  onCTAClick 
}) => {
  return (
    <>
      {/* Section 1: Hero + Como Funciona */}
      <HeroV2 
        currentLanguage={currentLanguage} 
        onCTAClick={onCTAClick} 
      />

      {/* Section 2: Confiança */}
      <TrustSectionV2 
        currentLanguage={currentLanguage} 
      />


      {/* Section 4: Benefícios */}
      <BenefitsV2 
        currentLanguage={currentLanguage} 
      />

      {/* Section 5: Vídeo */}
      <VideoV2 
        currentLanguage={currentLanguage} 
        onCTAClick={onCTAClick} 
      />


      {/* Section 7: Depoimentos */}
      <TestimonialsV2 
        currentLanguage={currentLanguage} 
      />

      {/* Section 8: FAQ */}
      <FAQV2 
        currentLanguage={currentLanguage} 
      />

      {/* Section 9: CTA Final */}
      <CTAFinalV2 
        currentLanguage={currentLanguage} 
        onCTAClick={onCTAClick} 
      />
    </>
  );
};

export default HomeV2;
