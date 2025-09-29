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
    cta_variant_text?: string; // explicit CTA text variant for analytics
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
    
    // Verificar se as variáveis de ambiente estão configuradas
    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
      console.error('❌ Variáveis de ambiente do Supabase não configuradas');
      console.error('VITE_SUPABASE_URL:', SUPABASE_URL ? 'Configurada' : 'Não configurada');
      console.error('VITE_SUPABASE_ANON_KEY:', SUPABASE_ANON_KEY ? 'Configurada' : 'Não configurada');
      return { ok: false, reason: 'missing_env', details: 'Variáveis do Supabase não configuradas' };
    }

    // Verificar se as URLs são válidas
    if (!SUPABASE_URL.startsWith('https://') || !SUPABASE_URL.includes('.supabase.co')) {
      console.error('❌ URL do Supabase inválida:', SUPABASE_URL);
      return { ok: false, reason: 'invalid_url', details: 'URL do Supabase inválida' };
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
      cta_variant_text: trackingContext?.cta_variant_text || ctaText[language as keyof typeof ctaText],
      user_agent: navigator.userAgent,
      created_at: new Date().toISOString()
    };

    console.log('🔄 Enviando dados para Supabase...');
    console.log('Supabase URL:', SUPABASE_URL);
    console.log('Payload:', JSON.stringify(payload, null, 2));
    
    try {
      const url = `${SUPABASE_URL}/rest/v1/driver_email_leads`;
      console.log('📡 URL completa:', url);
      
      const resp = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          'Accept-Profile': 'campaign',
          'Content-Profile': 'campaign',
          'Prefer': 'return=minimal'
        },
        body: JSON.stringify(payload)
      });
      
      console.log('📊 Response status:', resp.status);
      console.log('📋 Response headers:', Object.fromEntries(resp.headers.entries()));
      
      if (resp.ok) {
        console.log('✅ Dados enviados com sucesso para o Supabase');
        return { ok: true };
      }
      
      const text = await resp.text();
      console.error('❌ Erro na resposta do Supabase:', text);
      
      // Tratamento específico de erros comuns
      if (resp.status === 401) {
        return { ok: false, reason: 'unauthorized', details: 'Chave de API inválida' };
      } else if (resp.status === 403) {
        return { ok: false, reason: 'forbidden', details: 'Permissões insuficientes' };
      } else if (resp.status === 404) {
        return { ok: false, reason: 'not_found', details: 'Tabela não encontrada' };
      } else if (resp.status === 422) {
        return { ok: false, reason: 'validation_error', details: 'Dados inválidos' };
      } else {
        return { ok: false, reason: 'server_error', details: `Erro ${resp.status}: ${text}` };
      }
    } catch (e: any) {
      console.error('❌ Erro de rede:', e);
      if (e.name === 'TypeError' && e.message.includes('fetch')) {
        return { ok: false, reason: 'network_error', details: 'Erro de conexão com o Supabase' };
      }
      return { ok: false, reason: 'unknown_error', details: e?.message || 'Erro desconhecido' };
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
      cta_variant_text: trackingContext?.cta_variant_text || buttonText,
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
      
      // Definir mensagem de erro específica baseada no tipo de erro
      let errorKey = 'unknown_error';
      if (result.reason === 'missing_env') {
        errorKey = 'config_error';
      } else if (result.reason === 'network_error') {
        errorKey = 'network_error';
      } else if (result.reason === 'unauthorized' || result.reason === 'forbidden') {
        errorKey = 'auth_error';
      } else if (result.reason === 'validation_error') {
        errorKey = 'validation_error';
      }
      
      setSubmitError(errorKey);
      
      // Track failed submission
      trackFormInteraction('abandon', 'email_capture', {
        source_element: ctaText[language as keyof typeof ctaText],
        source_section: trackingContext.section,
        source_page: page,
        cta_variant: variant,
        error_reason: result.reason,
        error_details: result.details
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
        <form onSubmit={handleEmailSubmit} className="space-y-3">
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
            <p className="mt-1 text-xs text-neutral-500">
              {language === 'PT'
                ? 'Sem spam. Você pode descadastrar quando quiser.'
                : language === 'ES'
                ? 'Sin spam. Puedes darte de baja cuando quieras.'
                : 'No spam. You can unsubscribe anytime.'}
            </p>
            {submitError === 'email_invalid' && (
              <p className="mt-1 text-sm text-red-600">
                {language === 'PT' ? 'Por favor, insira um email válido' : language === 'ES' ? 'Por favor, ingresa un email válido' : 'Please enter a valid email'}
              </p>
            )}
            {submitError === 'config_error' && (
              <p className="mt-1 text-sm text-red-600">
                {language === 'PT' 
                  ? 'Erro de configuração. Entre em contato com o suporte.' 
                  : language === 'ES' 
                  ? 'Error de configuración. Contacta con soporte.' 
                  : 'Configuration error. Please contact support.'}
              </p>
            )}
            {submitError === 'network_error' && (
              <p className="mt-1 text-sm text-red-600">
                {language === 'PT' 
                  ? 'Erro de conexão. Verifique sua internet e tente novamente.' 
                  : language === 'ES' 
                  ? 'Error de conexión. Verifica tu internet e inténtalo de nuevo.' 
                  : 'Connection error. Check your internet and try again.'}
              </p>
            )}
            {submitError === 'auth_error' && (
              <p className="mt-1 text-sm text-red-600">
                {language === 'PT' 
                  ? 'Erro de autenticação. Entre em contato com o suporte.' 
                  : language === 'ES' 
                  ? 'Error de autenticación. Contacta con soporte.' 
                  : 'Authentication error. Please contact support.'}
              </p>
            )}
            {submitError === 'validation_error' && (
              <p className="mt-1 text-sm text-red-600">
                {language === 'PT' 
                  ? 'Dados inválidos. Verifique as informações e tente novamente.' 
                  : language === 'ES' 
                  ? 'Datos inválidos. Verifica la información e inténtalo de nuevo.' 
                  : 'Invalid data. Please check the information and try again.'}
              </p>
            )}
            {submitError === 'unknown_error' && (
              <p className="mt-1 text-sm text-red-600">
                {language === 'PT' 
                  ? 'Erro inesperado. Tente novamente em alguns instantes.' 
                  : language === 'ES' 
                  ? 'Error inesperado. Inténtalo de nuevo en unos momentos.' 
                  : 'Unexpected error. Please try again in a few moments.'}
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