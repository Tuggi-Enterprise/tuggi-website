import React, { useState } from 'react';
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
  attention?: boolean; // enables subtle attention animation
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
  currentPage,
  attention = false
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

  const [showEmailForm, setShowEmailForm] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const saveEmailToSupabase = async (email: string) => {
    const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
    const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;
    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
      return { ok: false, reason: 'missing_env' };
    }
    
    const payload = {
      email,
      language,
      page,
      section: trackingContext.section,
      position: trackingContext.position,
      campaign: trackingContext.campaign || null,
      cta_variant: variant,
      cta_size: size,
      button_text: ctaText[language as keyof typeof ctaText],
      user_agent: navigator.userAgent,
      created_at: new Date().toISOString()
    };

    console.log('Supabase URL:', SUPABASE_URL);
    console.log('Payload:', JSON.stringify(payload, null, 2));
    
    try {
      const resp = await fetch(`${SUPABASE_URL}/rest/v1/campaign.driver_email_leads`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          'Prefer': 'return=minimal'
        },
        body: JSON.stringify(payload)
      });
      
      console.log('Response status:', resp.status);
      console.log('Response headers:', Object.fromEntries(resp.headers.entries()));
      
      if (resp.ok) return { ok: true };
      const text = await resp.text();
      console.log('Error response:', text);
      return { ok: false, reason: text || 'insert_failed' };
    } catch (e: any) {
      console.error('Network error:', e);
      return { ok: false, reason: e?.message || 'network_error' };
    }
  };

  const handleInitialCTAClick = () => {
    const buttonText = ctaText[language as keyof typeof ctaText];
    
    // Track the CTA click
    trackCTAClickEvent(buttonText, googleFormUrl, {
      cta_type: 'email_capture_cta',
      cta_variant: variant,
      cta_size: size,
      section: trackingContext.section,
      position: trackingContext.position,
      campaign: trackingContext.campaign,
      conversion_funnel: 'awareness_to_interest',
      user_journey_stage: 'consideration'
    });
    trackButtonClick(buttonText, googleFormUrl);

    setShowEmailForm(true);
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setSubmitError('email_invalid');
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    const result = await saveEmailToSupabase(email);

    if (result.ok) {
      setSubmitted(true);
      setIsSubmitting(false);
      // Track successful email submission
      trackFormInteraction('submit', 'email_capture', {
        source_element: ctaText[language as keyof typeof ctaText],
        source_section: trackingContext.section,
        source_page: page,
        cta_variant: variant,
        email_domain: email.split('@')[1] || 'unknown'
      });
    } else {
      // Show error message to user
      setIsSubmitting(false);
      setSubmitError(result.reason || 'unknown_error');
      // Track failed submission
      trackFormInteraction('abandon', 'email_capture', {
        source_element: ctaText[language as keyof typeof ctaText],
        source_section: trackingContext.section,
        source_page: page,
        cta_variant: variant,
        error_reason: result.reason
      });
    }
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
    
    const hoverPulse = 'hover:scale-[1.02] active:scale-[0.99]';
    const attentionClass = attention ? 'cta-attention' : '';
    const disabledClasses = submitted || isSubmitting ? 'opacity-80 cursor-not-allowed' : '';
    return `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${hoverPulse} ${attentionClass} ${disabledClasses} ${className}`;
  };

  const getEmailInputClasses = () => {
    const baseClasses = 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent';
    return baseClasses;
  };

  const getSubmitButtonClasses = () => {
    const baseClasses = 'w-full px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200';
    const disabledClasses = isSubmitting ? 'opacity-80 cursor-not-allowed' : '';
    return `${baseClasses} ${disabledClasses}`;
  };

  // Thank you message after successful submission
  if (submitted) {
    return (
      <div className="text-center p-6 bg-green-50 border border-green-200 rounded-lg">
        <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-green-100 rounded-full">
          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-green-800 mb-2">
          {language === 'PT' ? 'Obrigado!' : language === 'ES' ? '¡Gracias!' : 'Thank you!'}
        </h3>
        <p className="text-green-700">
          {language === 'PT' 
            ? 'Recebemos seu interesse! Em breve entraremos em contato.' 
            : language === 'ES' 
            ? '¡Recibimos tu interés! Pronto nos pondremos en contacto.' 
            : 'We received your interest! We\'ll be in touch soon.'}
        </p>
      </div>
    );
  }

  // Email form after initial CTA click
  if (showEmailForm) {
    return (
      <div className="w-full max-w-md mx-auto">
        <form onSubmit={handleEmailSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              {language === 'PT' ? 'Seu email:' : language === 'ES' ? 'Tu email:' : 'Your email:'}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={language === 'PT' ? 'seu@email.com' : language === 'ES' ? 'tu@email.com' : 'your@email.com'}
              className={getEmailInputClasses()}
              autoComplete="email"
              autoCapitalize="none"
              autoCorrect="off"
              spellCheck="false"
              required
              autoFocus
            />
            {submitError === 'email_invalid' && (
              <p className="mt-1 text-sm text-red-600">
                {language === 'PT' ? 'Por favor, insira um email válido' : language === 'ES' ? 'Por favor, ingresa un email válido' : 'Please enter a valid email'}
              </p>
            )}
            {submitError && submitError !== 'email_invalid' && (
              <p className="mt-1 text-sm text-red-600">
                {language === 'PT' 
                  ? 'Erro ao enviar. Tente novamente em alguns instantes.' 
                  : language === 'ES' 
                  ? 'Error al enviar. Inténtalo de nuevo en unos momentos.' 
                  : 'Error sending. Please try again in a few moments.'}
              </p>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={getSubmitButtonClasses()}
          >
            {isSubmitting 
              ? (language === 'PT' ? 'Enviando...' : language === 'ES' ? 'Enviando...' : 'Sending...') 
              : (language === 'PT' ? 'Enviar' : language === 'ES' ? 'Enviar' : 'Send')}
          </button>
        </form>
      </div>
    );
  }

  // Initial CTA button
  return (
    <button
      onClick={handleInitialCTAClick}
      className={getButtonClasses()}
      data-analytics-cta="email-capture"
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