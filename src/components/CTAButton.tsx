import React from 'react';
import { useAnalytics } from '../hooks/useAnalytics';
import { getCurrentPageInfo } from '../utils/routing';

interface CTAButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  googleFormUrl?: string;
  ctaText?: {
    EN: string;
    PT: string;
    ES: string;
  };
  className?: string;
  trackingContext?: {
    section: string;
    position: string;
    campaign?: string;
  };
  currentLanguage?: string;
  currentPage?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({
  variant = 'primary',
  size = 'md',
  googleFormUrl = 'https://forms.gle/example',
  ctaText = {
    EN: 'Get Started',
    PT: 'Comece Agora',
    ES: 'Empezar Ahora'
  },
  className = '',
  trackingContext = {
    section: 'unknown',
    position: 'unknown'
  },
  currentLanguage,
  currentPage
}) => {
  // Get current page and language info
  const pageInfo = getCurrentPageInfo();
  const language = currentLanguage || pageInfo.language;
  const page = currentPage || pageInfo.page;
  
  const {
    trackButtonClick,
    trackFormInteraction,
    trackCTAClickEvent
  } = useAnalytics(page, language);

  const handleCTAClick = () => {
    const buttonText = ctaText[language as keyof typeof ctaText];
    
    // Track the CTA click with detailed context
    trackCTAClickEvent(buttonText, googleFormUrl, {
      cta_type: 'google_form_cta',
      cta_variant: variant,
      cta_size: size,
      section: trackingContext.section,
      position: trackingContext.position,
      campaign: trackingContext.campaign,
      conversion_funnel: 'awareness_to_interest',
      user_journey_stage: 'consideration'
    });
    
    // Track the button click
    trackButtonClick(buttonText, googleFormUrl);
    
    // Track Google Form interaction (opening) - main conversion goal
    trackFormInteraction('open', 'registration_form', {
      source_element: buttonText,
      source_section: trackingContext.section,
      source_page: page,
      cta_variant: variant
    });
    
    // Open Google Form in new tab
    window.open(googleFormUrl, '_blank', 'noopener,noreferrer');
  };

  const getButtonClasses = () => {
    const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
    
    const variantClasses = {
      primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 shadow-lg hover:shadow-xl',
      secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500 shadow-lg hover:shadow-xl',
      outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500'
    };
    
    const sizeClasses = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg'
    };
    
    return `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  };

  return (
    <button
      onClick={handleCTAClick}
      className={getButtonClasses()}
      data-analytics-cta="google-form"
      data-analytics-section={trackingContext.section}
      data-analytics-position={trackingContext.position}
    >
      {ctaText[language as keyof typeof ctaText]}
      <svg
        className="ml-2 w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
        />
      </svg>
    </button>
  );
};

export default CTAButton;

// Exemplo de uso em outros componentes:
/*
// Hero Section
<CTAButton
  variant="primary"
  size="lg"
  googleFormUrl="https://forms.gle/tuggi-registration"
  trackingContext={{
    section: 'hero',
    position: 'primary_cta',
    campaign: 'homepage_hero'
  }}
/>

// Features Section
<CTAButton
  variant="outline"
  size="md"
  googleFormUrl="https://forms.gle/tuggi-registration"
  trackingContext={{
    section: 'features',
    position: 'secondary_cta',
    campaign: 'features_conversion'
  }}
/>

// Footer
<CTAButton
  variant="secondary"
  size="sm"
  googleFormUrl="https://forms.gle/tuggi-registration"
  trackingContext={{
    section: 'footer',
    position: 'footer_cta',
    campaign: 'footer_conversion'
  }}
/>
*/