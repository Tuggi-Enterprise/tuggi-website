import React, { useState, useEffect, useRef } from 'react';
import { useAnalytics } from '../hooks/useAnalytics';

interface LeadCaptureFormProps {
  className?: string;
  currentLanguage?: string;
}

interface FormData {
  bestContact: 'email' | 'whatsapp';
  email: string;
  phone: string;
  consent: boolean;
}

interface FormErrors {
  email?: string;
  phone?: string;
  consent?: string;
}

interface UTMData {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  fbclid?: string;
  gclid?: string;
  city_hint?: string;
}

export const LeadCaptureForm: React.FC<LeadCaptureFormProps> = ({ 
  className = '',
  currentLanguage = 'PT'
}) => {
  // Localized content
  const getLocalizedContent = (language: string) => {
    const content: Record<string, any> = {
      PT: {
        // Success page
        success_title: 'Cadastro realizado com sucesso!',
        success_subtitle: 'Nossa equipe entrará em contato em até',
        success_time: '24 horas',
        success_description: 'Enquanto isso, descubra como o Tuggi pode transformar sua experiência como motorista',
        success_cta: 'Conhecer a plataforma',
        
        // Form header
        form_title: 'Maximize seus ganhos como motorista',
        form_subtitle: 'Acesso antecipado • Sem custo inicial • Aumento comprovado de receita',
        
        // Contact preference
        contact_legend: 'Qual a melhor forma de contato?',
        contact_email: 'E-mail',
        contact_whatsapp: 'WhatsApp',
        
        // Form fields
        email_label: 'Endereço de e-mail',
        email_placeholder: 'seu@email.com',
        phone_label: 'Número do WhatsApp',
        phone_placeholder: '+55 (11) 9____-____',
        
        // Consent
        consent_text: 'Autorizo contato do Tuggi',
        consent_description: 'por e-mail/WhatsApp para receber informações sobre como ganhar mais dirigindo.',
        privacy_policy: 'Política de Privacidade',
        terms: 'Termos',
        
        // CTA
        cta_text: 'Quero começar a ganhar mais!',
        cta_loading: 'Enviando...',
        
        // Trust indicators
        trust_text: 'Seus dados estão seguros • Sem spam • Cancelar a qualquer momento',
        
        // Validation errors
        email_required: 'E-mail é obrigatório',
        email_invalid: 'E-mail inválido',
        phone_required: 'Telefone é obrigatório',
        phone_invalid: 'Telefone inválido',
        consent_required: 'É necessário autorizar o contato'
      },
      EN: {
        // Success page
        success_title: 'Registration completed successfully!',
        success_subtitle: 'Our team will contact you within',
        success_time: '24 hours',
        success_description: 'Meanwhile, discover how Tuggi can transform your experience as a driver',
        success_cta: 'Learn about the platform',
        
        // Form header
        form_title: 'Maximize your earnings as a driver',
        form_subtitle: 'Early access • No initial cost • Proven revenue increase',
        
        // Contact preference
        contact_legend: 'What\'s the best way to contact you?',
        contact_email: 'Email',
        contact_whatsapp: 'WhatsApp',
        
        // Form fields
        email_label: 'Email address',
        email_placeholder: 'your@email.com',
        phone_label: 'WhatsApp number',
        phone_placeholder: '+1 (555) ___-____',
        
        // Consent
        consent_text: 'I authorize Tuggi to contact me',
        consent_description: 'via email/WhatsApp to receive information about how to earn more driving.',
        privacy_policy: 'Privacy Policy',
        terms: 'Terms',
        
        // CTA
        cta_text: 'I want to start earning more!',
        cta_loading: 'Sending...',
        
        // Trust indicators
        trust_text: 'Your data is secure • No spam • Cancel anytime',
        
        // Validation errors
        email_required: 'Email is required',
        email_invalid: 'Invalid email',
        phone_required: 'Phone is required',
        phone_invalid: 'Invalid phone',
        consent_required: 'Contact authorization is required'
      },
      ES: {
        // Success page
        success_title: '¡Registro completado con éxito!',
        success_subtitle: 'Nuestro equipo se pondrá en contacto contigo en',
        success_time: '24 horas',
        success_description: 'Mientras tanto, descubre cómo Tuggi puede transformar tu experiencia como conductor',
        success_cta: 'Conocer la plataforma',
        
        // Form header
        form_title: 'Maximiza tus ganancias como conductor',
        form_subtitle: 'Acceso anticipado • Sin costo inicial • Aumento comprobado de ingresos',
        
        // Contact preference
        contact_legend: '¿Cuál es la mejor forma de contactarte?',
        contact_email: 'Email',
        contact_whatsapp: 'WhatsApp',
        
        // Form fields
        email_label: 'Dirección de email',
        email_placeholder: 'tu@email.com',
        phone_label: 'Número de WhatsApp',
        phone_placeholder: '+34 6__ __ __ __',
        
        // Consent
        consent_text: 'Autorizo a Tuggi a contactarme',
        consent_description: 'por email/WhatsApp para recibir información sobre cómo ganar más conduciendo.',
        privacy_policy: 'Política de Privacidad',
        terms: 'Términos',
        
        // CTA
        cta_text: '¡Quiero empezar a ganar más!',
        cta_loading: 'Enviando...',
        
        // Trust indicators
        trust_text: 'Tus datos están seguros • Sin spam • Cancelar en cualquier momento',
        
        // Validation errors
        email_required: 'El email es obligatorio',
        email_invalid: 'Email inválido',
        phone_required: 'El teléfono es obligatorio',
        phone_invalid: 'Teléfono inválido',
        consent_required: 'Es necesario autorizar el contacto'
      }
    };
    return content[language] || content['PT'];
  };

  const content = getLocalizedContent(currentLanguage);

  const [formData, setFormData] = useState<FormData>({
    bestContact: 'email',
    email: '',
    phone: '',
    consent: false
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [utmData, setUtmData] = useState<UTMData>({});
  
  const emailInputRef = useRef<HTMLInputElement>(null);
  const phoneInputRef = useRef<HTMLInputElement>(null);
  const { trackCTAClickEvent } = useAnalytics('drivers_lp', 'pt-BR');

  // Capturar UTMs e parâmetros de atribuição na montagem
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const pathname = window.location.pathname;
    
    const utms: UTMData = {
      utm_source: urlParams.get('utm_source') || undefined,
      utm_medium: urlParams.get('utm_medium') || undefined,
      utm_campaign: urlParams.get('utm_campaign') || undefined,
      utm_content: urlParams.get('utm_content') || undefined,
      fbclid: urlParams.get('fbclid') || undefined,
      gclid: urlParams.get('gclid') || undefined,
    };

    // City hint baseado na URL ou parâmetros
    let cityHint = urlParams.get('city') || '';
    if (!cityHint) {
      if (pathname.includes('/sp') || urlParams.get('city_hint') === 'sp') {
        cityHint = 'sp';
      } else if (pathname.includes('/rj') || urlParams.get('city_hint') === 'rj') {
        cityHint = 'rj';
      }
    }
    
    if (cityHint) {
      utms.city_hint = cityHint;
    }

    setUtmData(utms);
  }, []);

  // Focar no campo ativo quando alternar entre email/whatsapp
  useEffect(() => {
    if (formData.bestContact === 'email' && emailInputRef.current) {
      emailInputRef.current.focus();
    } else if (formData.bestContact === 'whatsapp' && phoneInputRef.current) {
      phoneInputRef.current.focus();
    }
  }, [formData.bestContact]);

  // Máscara para telefone
  const formatPhone = (value: string): string => {
    // Remove tudo exceto dígitos e +
    const cleaned = value.replace(/[^\d+]/g, '');
    
    // Se não começar com +, adiciona +55
    let formatted = cleaned;
    if (!formatted.startsWith('+')) {
      formatted = '+55' + formatted;
    }
    
    // Aplica máscara brasileira básica
    if (formatted.startsWith('+55')) {
      const digits = formatted.slice(3);
      if (digits.length <= 2) {
        return `+55 (${digits}`;
      } else if (digits.length <= 7) {
        return `+55 (${digits.slice(0, 2)}) ${digits.slice(2)}`;
      } else {
        return `+55 (${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
      }
    }
    
    return formatted;
  };

  // Validação de e-mail
  const validateEmail = (email: string): string | undefined => {
    if (!email.trim()) {
      return content.email_required;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return content.email_invalid;
    }
    return undefined;
  };

  const validatePhone = (phone: string): string | undefined => {
    if (!phone.trim()) {
      return content.phone_required;
    }
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
    if (!phoneRegex.test(cleanPhone) || cleanPhone.length < 8) {
      return content.phone_invalid;
    }
    return undefined;
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    // Validate email only if Email is selected
    if (formData.bestContact === 'email') {
      const emailError = validateEmail(formData.email);
      if (emailError) {
        newErrors.email = emailError;
      }
    }
    
    // Validate phone only if WhatsApp is selected
    if (formData.bestContact === 'whatsapp') {
      const phoneError = validatePhone(formData.phone);
      if (phoneError) {
        newErrors.phone = phoneError;
      }
    }
    
    // Validate consent
    if (!formData.consent) {
      newErrors.consent = content.consent_required;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Manipular mudanças nos campos
  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Limpar erro quando usuário começar a digitar
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  // Manipular mudança no telefone com máscara
  const handlePhoneChange = (value: string) => {
    const formatted = formatPhone(value);
    handleInputChange('phone', formatted);
  };

  // Obter informações do dispositivo
  const getDeviceInfo = () => {
    const userAgent = navigator.userAgent;
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    const isTablet = /iPad|Android(?!.*Mobile)/i.test(userAgent);
    
    return {
      isMobile,
      isTablet,
      isDesktop: !isMobile && !isTablet,
      userAgent: userAgent.substring(0, 200) // Limitar tamanho
    };
  };

  // Submeter formulário
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const deviceInfo = getDeviceInfo();
      
  // Converter telefone para formato E.164
  const convertToE164 = (phone: string): string => {
    // Remove todos os caracteres não numéricos exceto +
    const cleaned = phone.replace(/[^\d+]/g, '');
    
    // Se já está no formato E.164, retorna como está
    if (cleaned.startsWith('+') && cleaned.length >= 10) {
      return cleaned;
    }
    
    // Se não tem código do país, assume Brasil (+55)
    if (!cleaned.startsWith('+')) {
      // Remove zeros à esquerda se houver
      const digits = cleaned.replace(/^0+/, '');
      
      // Se tem 11 dígitos (celular brasileiro com DDD)
      if (digits.length === 11) {
        return `+55${digits}`;
      }
      // Se tem 10 dígitos (telefone fixo brasileiro com DDD)
      else if (digits.length === 10) {
        return `+55${digits}`;
      }
      // Se tem 9 dígitos (celular sem DDD, assume São Paulo)
      else if (digits.length === 9) {
        return `+5511${digits}`;
      }
      // Se tem 8 dígitos (fixo sem DDD, assume São Paulo)
      else if (digits.length === 8) {
        return `+5511${digits}`;
      }
    }
    
    return cleaned;
  };

  // Preparar payload conforme esperado pela API
      const payload = {
        source: 'lp_form',
        best_contact: formData.bestContact,
        email: formData.bestContact === 'email' ? formData.email : '',
        phone_e164: formData.bestContact === 'whatsapp' ? convertToE164(formData.phone) : '',
        consent: formData.consent,
        timestamp: new Date().toISOString(),
        ...utmData,
        lang: currentLanguage,
        device: deviceInfo.isMobile ? 'mobile' : deviceInfo.isTablet ? 'tablet' : 'desktop',
        page: '/motorista'
      };

      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Erro ao enviar dados');
      }

      // Disparar evento de analytics sem PII
      trackCTAClickEvent('lead_submit', '', {
        source: 'lp_form',
        best_contact: formData.bestContact,
        city_hint: utmData.city_hint || '',
        utm_source: utmData.utm_source || '',
        utm_medium: utmData.utm_medium || '',
        utm_campaign: utmData.utm_campaign || '',
        device: getDeviceInfo(),
        page: 'drivers_lp'
      });

      setIsSubmitted(true);
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      // Em caso de erro, mostrar mensagem genérica
      alert('Erro ao enviar dados. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className={`bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-auto text-center ${className}`}>
        <div className="mb-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {content.success_title}
          </h2>
          <p className="text-gray-600 mb-1">
            {content.success_subtitle}
          </p>
          <p className="text-2xl font-bold text-blue-600 mb-4">
            {content.success_time}
          </p>
          <p className="text-gray-600 mb-6">
            {content.success_description}
          </p>
        </div>
        
        <button
          onClick={() => window.open('https://www.tuggi.app', '_blank')}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
        >
          {content.success_cta}
        </button>
        
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              Dados seguros
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              Suporte 24/7
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-auto ${className}`}>
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          {content.form_title}
        </h2>
        <p className="text-sm text-gray-600 leading-relaxed">
          {content.form_subtitle}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Contact Preference */}
        <fieldset className="space-y-3">
          <legend className="text-sm font-medium text-gray-700 mb-3">
            {content.contact_legend}
          </legend>
          <div className="space-y-2">
            <label className="flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
              <input
                type="radio"
                name="bestContact"
                value="email"
                checked={formData.bestContact === 'email'}
                onChange={(e) => handleInputChange('bestContact', e.target.value as 'email' | 'whatsapp')}
                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <span className="ml-3 text-sm font-medium text-gray-700">
                {content.contact_email}
              </span>
            </label>
            <label className="flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
              <input
                type="radio"
                name="bestContact"
                value="whatsapp"
                checked={formData.bestContact === 'whatsapp'}
                onChange={(e) => handleInputChange('bestContact', e.target.value as 'email' | 'whatsapp')}
                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <span className="ml-3 text-sm font-medium text-gray-700">
                {content.contact_whatsapp}
              </span>
            </label>
          </div>
        </fieldset>

        {/* Email Field - Only show if Email is selected */}
        {formData.bestContact === 'email' && (
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              {content.email_label}
            </label>
            <input
              ref={emailInputRef}
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder={content.email_placeholder}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300'
              }`}
              required
            />
            {errors.email && (
              <p className="text-sm text-red-600 flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {errors.email}
              </p>
            )}
          </div>
        )}

        {/* Phone Field - Only show if WhatsApp is selected */}
        {formData.bestContact === 'whatsapp' && (
          <div className="space-y-2">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              {content.phone_label}
            </label>
            <input
              ref={phoneInputRef}
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={(e) => handlePhoneChange(e.target.value)}
              placeholder={content.phone_placeholder}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                errors.phone ? 'border-red-300 bg-red-50' : 'border-gray-300'
              }`}
              required
            />
            {errors.phone && (
              <p className="text-sm text-red-600 flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {errors.phone}
              </p>
            )}
          </div>
        )}

        {/* Consent Checkbox */}
        <div className="space-y-2">
          <label className="flex items-start space-x-3 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.consent}
              onChange={(e) => handleInputChange('consent', e.target.checked)}
              className={`mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 ${
                errors.consent ? 'border-red-300' : ''
              }`}
              required
            />
            <span className="text-sm text-gray-600 leading-relaxed">
              <span className="font-medium">{content.consent_text}</span>{' '}
              {content.consent_description}{' '}
              <a href="/privacy-policy" target="_blank" className="text-blue-600 hover:text-blue-800 underline">
                {content.privacy_policy}
              </a>{' '}
              e{' '}
              <a href="/terms-of-use" target="_blank"  className="text-blue-600 hover:text-blue-800 underline">
                {content.terms}
              </a>.
            </span>
          </label>
          {errors.consent && (
            <p className="text-sm text-red-600 flex items-center ml-7">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {errors.consent}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02] disabled:scale-100 shadow-lg hover:shadow-xl"
        >
          {isSubmitting ? content.cta_loading : content.cta_text}
        </button>

        {/* Trust Indicators */}
        <div className="pt-4 border-t border-gray-100">
          <p className="text-xs text-gray-500 text-center leading-relaxed">
            {content.trust_text}
          </p>
        </div>
      </form>
    </div>
  );
};