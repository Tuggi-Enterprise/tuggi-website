/**
 * Beta Drivers Landing Page (/beta-drivers)
 *
 * High-converting "Intention Landing Page" for driver acquisition in Brazil and Italy.
 * Introduces "good friction": users must understand the product and apply to be Beta Testers.
 *
 * Features:
 * - Exclusive Beta positioning
 * - Clear value proposition for drivers
 * - Technical explanation (app runs in background with Waze/Spotify)
 * - Audio sample preview
 * - Lead capture form with WhatsApp (crucial for onboarding)
 * - Mobile-first design (optimized for Meta ads traffic)
 */

import React, { useState, useRef } from 'react';
import {
  Star,
  Wallet,
  ShieldCheck,
  Bluetooth,
  Smartphone,
  Music,
  Play,
  Pause,
  Volume2,
  CheckCircle2,
  AlertCircle,
  Download,
  Sparkles,
} from 'lucide-react';
import { layout } from '../utils/designSystem';
import { betaDriversContent, type BetaDriversContent } from '../data/betaDriversContent';

interface BetaDriversProps {
  currentLanguage?: 'PT' | 'IT' | 'EN' | 'ES' | 'FR' | 'DE';
  onCTAClick?: (ctaType: string, position?: string) => void;
}

interface FormData {
  name: string;
  email: string;
  whatsapp: string;
  agreedToFeedback: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  whatsapp?: string;
  agreedToFeedback?: string;
}

const BetaDrivers: React.FC<BetaDriversProps> = ({
  currentLanguage = 'PT',
  onCTAClick
}) => {
  // Ensure we have valid content for the current language, otherwise fallback to PT
  const supportedLanguages = ['PT', 'IT', 'EN', 'ES', 'FR', 'DE'];
  const validLanguage = supportedLanguages.includes(currentLanguage) ? currentLanguage : 'PT';
  const content: BetaDriversContent = betaDriversContent[validLanguage as keyof typeof betaDriversContent];

  // Form state
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    whatsapp: '',
    agreedToFeedback: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Audio player state
  const [currentlyPlaying, setCurrentlyPlaying] = useState<string | null>(null);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const audioRefs = useRef<{ [key: string]: HTMLAudioElement }>({});

  // Refs for smooth scrolling
  const formSectionRef = useRef<HTMLDivElement>(null);

  // UTM and Attribution state
  const [utmData, setUtmData] = useState({
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    utm_content: '',
    utm_term: '',
    fbclid: '',
    gclid: ''
  });

  // Capture UTMs on mount
  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setUtmData({
      utm_source: params.get('utm_source') || '',
      utm_medium: params.get('utm_medium') || '',
      utm_campaign: params.get('utm_campaign') || '',
      utm_content: params.get('utm_content') || '',
      utm_term: params.get('utm_term') || '',
      fbclid: params.get('fbclid') || '',
      gclid: params.get('gclid') || ''
    });
  }, []);

  // Icon mapping
  const iconMap: { [key: string]: React.ElementType } = {
    Star,
    Wallet,
    ShieldCheck,
    Bluetooth,
    Smartphone,
    Music,
  };

  // Smooth scroll to form
  const scrollToForm = () => {
    formSectionRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    
    // Track micro-conversion: Intent to sign up
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'beta_hero_cta_click', {
        'event_category': 'engagement',
        'event_label': 'scroll_to_form'
      });
    }

    onCTAClick?.('scroll_to_form', 'hero');
  };

  // Tracking helper (replicates drivers-cc logic)
  const trackConversion = (position: string, eventName: string = 'beta_cta_click') => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-17947921261/r66NCJzUkvkbEO2Wnu5C'
      });
    }
    onCTAClick?.(eventName, position);
  };

  // Audio player handlers
  const toggleAudio = (sampleId: string) => {
    const audio = audioRefs.current[sampleId];
    if (!audio) return;

    if (currentlyPlaying === sampleId) {
      audio.pause();
      setCurrentlyPlaying(null);
    } else {
      // Pause any currently playing audio
      Object.values(audioRefs.current).forEach(a => a.pause());
      
      // Track micro-conversion: Audio engagement (High Interest)
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'beta_audio_play', {
           'event_category': 'engagement',
           'event_label': sampleId
        });
      }
      
      // Reset track index for the new sample
      setCurrentTrackIndex(0);
      setCurrentlyPlaying(sampleId);
      
      // We need to wait for state update to propagate to src attribute, 
      // but we can force the first track immediately if needed, 
      // however React's render cycle will update the src, then we play.
      // Better to use useEffect for playing to ensure src is ready.
    }
  };

  // Effect to handle playback when currentlyPlaying or track index changes
  React.useEffect(() => {
    if (currentlyPlaying) {
      const audio = audioRefs.current[currentlyPlaying];
      if (audio) {
        // Find the sample to check if it's an array and get the correct URL
        const sample = content.audioSample.audioSamples.find(s => s.id === currentlyPlaying);
        if (sample) {
          const url = Array.isArray(sample.url) ? sample.url[currentTrackIndex] : sample.url;
          // Ensure we don't reload the same absolute URL unnecessarily, but handle empty initial states
          if (url && (audio.src === '' || !audio.src.includes(url))) {
             audio.src = url;
             audio.load();
          }
          
          const playPromise = audio.play();
          if (playPromise !== undefined) {
            playPromise.catch(error => console.log('Playback prevented:', error));
          }
        }
      }
    }
  }, [currentlyPlaying, currentTrackIndex, content.audioSample.audioSamples]);

  // Handle audio ended event
  const handleAudioEnded = (sampleId: string) => {
    if (currentlyPlaying === sampleId) {
      const sample = content.audioSample.audioSamples.find(s => s.id === sampleId);
      if (sample && Array.isArray(sample.url) && currentTrackIndex < sample.url.length - 1) {
        // Play next track in sequence
        setCurrentTrackIndex(prev => prev + 1);
      } else {
        // End of sequence or single file
        setCurrentlyPlaying(null);
        setCurrentTrackIndex(0);
      }
    }
  };

  // Form validation
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = content.betaForm.validation.nameRequired;
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = content.betaForm.validation.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = content.betaForm.validation.emailInvalid;
    }

    // WhatsApp validation (optional)
    if (formData.whatsapp.trim() && !/^\+?[\d\s\-\(\)]{8,}$/.test(formData.whatsapp)) {
      newErrors.whatsapp = content.betaForm.validation.whatsappInvalid;
    }

    // Checkbox validation
    if (!formData.agreedToFeedback) {
      newErrors.agreedToFeedback = content.betaForm.validation.checkboxRequired;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Form submission handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Prepare attribution data
    const getDeviceInfo = () => {
      const ua = navigator.userAgent;
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua)) return 'mobile';
      if (/iPad|Android(?!.*Mobile)/i.test(ua)) return 'tablet';
      return 'desktop';
    };

    const convertToE164 = (phone: string): string => {
      const cleaned = phone.replace(/[^\d+]/g, '');
      if (cleaned.startsWith('+')) return cleaned;
      if (!cleaned) return '';
      
      // Default DDI based on language
      const ddiMap: Record<string, string> = {
        'IT': '39',
        'ES': '34',
        'FR': '33',
        'DE': '49',
        'EN': '1',
        'PT': '55'
      };
      
      const digits = cleaned.replace(/^0+/, '');
      const ddi = ddiMap[validLanguage] || '55';
      return `+${ddi}${digits}`;
    };

    try {
      // Map Beta form to campaign.driver_email_leads schema
      const payload = {
        source: 'beta_drivers_lp',
        page: window.location.pathname,
        section: 'beta_form',
        position: 'bottom',
        lang: validLanguage,
        email: formData.email,
        phone_e164: convertToE164(formData.whatsapp),
        best_contact: formData.whatsapp ? 'whatsapp' : 'email',
        notes: `Name: ${formData.name}`,
        device: getDeviceInfo(),
        user_agent: navigator.userAgent,
        referrer: document.referrer,
        ...utmData
      };

      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://tysnkzmljlmmqpbotkxv.supabase.co';
      const response = await fetch(`${supabaseUrl}/functions/v1/lead-capture`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'apikey': import.meta.env.VITE_SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error('Failed to save lead');
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Update URL for 'URL contains' tracking
      if (typeof window !== 'undefined') {
        const url = new URL(window.location.href);
        url.searchParams.set('submission', 'success');
        window.history.pushState({}, '', url.toString());
      }

      trackConversion('form', 'beta_form_success');
    } catch (error) {
      console.error('Error submitting form:', error);
      // Fallback for user experience
      setIsSubmitting(false);
      setIsSubmitted(true); // Don't block the user on secondary errors
    }
  };

  // Handle input changes
  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-tuggi-neutral-50 to-white">
      {/* 1. HERO SECTION - Full height with background */}
      <section className="min-h-[80vh] relative overflow-hidden bg-[image:var(--background-image-gradient-ocean)] text-white flex flex-col justify-center pt-20 pb-12">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
        </div>

        <div className={`${layout.container.base} relative z-10`}>
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 mb-8">
              <Star className="w-4 h-4 text-white fill-white" />
              <span className="text-sm font-bold text-white uppercase tracking-wider">
                {content.hero.badge}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight text-white">
              {content.hero.title}
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-blue-50 mb-10 max-w-2xl mx-auto leading-relaxed">
              {content.hero.subtitle}
            </p>

            {/* CTA Button */}
            <button
              onClick={() => {
                scrollToForm();
                trackConversion('hero', 'beta_hero_cta_click');
              }}
              className="bg-white text-tuggi-primary px-8 py-4 rounded-2xl font-black text-lg hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl active:scale-95 flex items-center justify-center gap-3 mx-auto"
            >
              {content.hero.ctaButton}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>



      {/* 2. HOW IT WORKS - Step-by-step Timeline */}
      <section className="py-20 bg-gradient-to-b from-neutral-50 to-white">
        <div className={layout.container.narrow}>
          <h2 className="text-3xl md:text-4xl font-black text-center mb-4 text-neutral-900">
            {content.howItWorks.title}
          </h2>
          <p className="text-center text-neutral-600 mb-16 max-w-2xl mx-auto">
            O Tuggi foi projetado para funcionar perfeitamente em segundo plano
          </p>

          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-tuggi-primary via-tuggi-primary-light to-tuggi-primary/20"></div>

            <div className="space-y-12">
              {content.howItWorks.steps.map((step, index) => {
                const stepIcons = [Download, Bluetooth, Smartphone, Sparkles];
                const StepIcon = stepIcons[index] || Star;
                const isMagicStep = step.stepNumber === 4;

                return (
                  <div key={index} className="relative flex gap-6 md:gap-8 group">
                    {/* Step number circle */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white font-black text-lg md:text-xl shadow-lg border-4 border-white transition-transform duration-300 group-hover:scale-110 ${
                        isMagicStep ? 'bg-tuggi-secondary' : 'bg-tuggi-primary'
                      }`}>
                        {step.stepNumber}
                      </div>
                    </div>

                    {/* Step content */}
                    <div className={`flex-1 bg-white p-6 md:p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border group-hover:border-tuggi-primary/20 ${
                      isMagicStep ? 'border-tuggi-secondary/20 bg-tuggi-secondary/5' : 'border-tuggi-secondary/10'
                    }`}>
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                          isMagicStep ? 'bg-tuggi-secondary/20' : 'bg-tuggi-primary/10'
                        }`}>
                          <StepIcon className={`w-6 h-6 ${
                            isMagicStep ? 'text-tuggi-secondary' : 'text-tuggi-primary'
                          }`} />
                        </div>
                        <div>
                          <h3 className={`text-xl md:text-2xl font-bold mb-2 ${
                            isMagicStep ? 'text-tuggi-secondary' : 'text-neutral-900'
                          }`}>
                            {step.title}
                          </h3>
                          <p className="text-neutral-600 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE PROOF - Interactive Audio Sample */}
      <section className="py-20 bg-tuggi-neutral-900 text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-tuggi-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-tuggi-secondary rounded-full blur-3xl"></div>
        </div>

        <div className={`${layout.container.base} relative z-10`}>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Volume2 className="w-12 h-12 text-tuggi-secondary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-white">
              {content.audioSample.title}
            </h2>
            <p className="text-blue-100 text-lg">
              {content.audioSample.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {content.audioSample.audioSamples.map((sample) => {
              const isPlaying = currentlyPlaying === sample.id;

              return (
                <div
                  key={sample.id}
                  className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <button
                      onClick={() => toggleAudio(sample.id)}
                      className="w-14 h-14 bg-tuggi-secondary hover:bg-tuggi-secondary-dark rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-110 flex-shrink-0 shadow-lg shadow-tuggi-secondary/20"
                      aria-label={isPlaying ? 'Pausar' : 'Reproduzir'}
                    >
                      {isPlaying ? (
                        <Pause className="w-6 h-6 text-white" />
                      ) : (
                        <Play className="w-6 h-6 text-white ml-1" />
                      )}
                    </button>

                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-1 text-white">{sample.title}</h3>
                      <p className="text-blue-200 text-sm">{sample.duration}</p>
                    </div>
                  </div>

                  {/* Audio element (hidden) - src is managed by the effect for arrays */}
                  <audio
                    ref={(el) => {
                      if (el) audioRefs.current[sample.id] = el;
                    }}
                    // Initial src can be the first one, but effect will take over
                    src={Array.isArray(sample.url) ? sample.url[0] : sample.url}
                    onEnded={() => handleAudioEnded(sample.id)}
                    preload="metadata"
                  />

                  {/* Visual waveform indicator */}
                  <div className="flex items-center gap-1 h-8">
                    {[...Array(20)].map((_, i) => (
                      <div
                        key={i}
                        className={`flex-1 rounded-full transition-all duration-300 ${
                          isPlaying
                            ? 'bg-tuggi-secondary animate-pulse'
                            : 'bg-white/20'
                        }`}
                        style={{
                          height: `${20 + Math.random() * 80}%`,
                          animationDelay: `${i * 50}ms`,
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. VALUE PROPOSITION - Benefits Grid */}
      <section className="py-20 bg-white">
        <div className={layout.container.base}>
          <h2 className="text-3xl md:text-4xl font-black text-center mb-4 text-neutral-900">
            {content.valueProp.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {content.valueProp.benefits.map((benefit, index) => {
              const Icon = iconMap[benefit.icon] || Star;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl border border-tuggi-neutral-200 hover:border-tuggi-primary/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex items-start gap-5"
                >
                  <div className="w-12 h-12 flex-shrink-0 bg-tuggi-primary/10 rounded-xl flex items-center justify-center group-hover:bg-tuggi-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-tuggi-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-neutral-900 mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. THE BETA AGREEMENT & LEAD CAPTURE FORM */}
      <section
        ref={formSectionRef}
        className="py-20 bg-gradient-to-br from-tuggi-neutral-50 to-tuggi-primary/5"
        id="beta-form"
      >
        <div className={layout.container.base}>
          <div className="max-w-2xl mx-auto">
            {!isSubmitted ? (
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-tuggi-neutral-200">
                {/* Form Header */}
                <div className="bg-tuggi-primary p-6 md:p-8 text-white">
                  <div className="flex items-center gap-5 md:gap-6">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center flex-shrink-0">
                      <Star className="w-7 h-7 md:w-8 md:h-8 text-tuggi-secondary fill-tuggi-secondary" />
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-black text-white leading-tight">
                        {content.betaForm.sectionTitle}
                      </h2>
                      <p className="text-blue-100 text-sm md:text-base mt-2 opacity-90">
                        {content.betaForm.agreement}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Form Body */}
                <form onSubmit={handleSubmit} className="p-8 space-y-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-neutral-700 mb-2">
                      {content.betaForm.form.nameLabel}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      autoComplete="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder={content.betaForm.form.namePlaceholder}
                      className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-200 ${
                        errors.name
                          ? 'border-tuggi-error-light bg-tuggi-error/5 focus:ring-tuggi-error'
                          : 'border-tuggi-neutral-300 focus:ring-tuggi-primary focus:border-tuggi-primary'
                      }`}
                    />
                    {errors.name && (
                      <div className="flex items-center gap-2 mt-2 text-tuggi-error text-sm">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.name}</span>
                      </div>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-neutral-700 mb-2">
                      {content.betaForm.form.emailLabel}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder={content.betaForm.form.emailPlaceholder}
                      className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-200 ${
                        errors.email
                          ? 'border-tuggi-error-light bg-tuggi-error/5 focus:ring-tuggi-error'
                          : 'border-tuggi-neutral-300 focus:ring-tuggi-primary focus:border-tuggi-primary'
                      }`}
                    />
                    {errors.email && (
                      <div className="flex items-center gap-2 mt-2 text-tuggi-error text-sm">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.email}</span>
                      </div>
                    )}
                  </div>

                  {/* WhatsApp Field */}
                  <div>
                    <label htmlFor="whatsapp" className="block text-sm font-bold text-neutral-700 mb-2">
                      {content.betaForm.form.whatsappLabel}
                    </label>
                    <input
                      type="tel"
                      id="whatsapp"
                      name="phone"
                      autoComplete="tel"
                      value={formData.whatsapp}
                      onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                      placeholder={content.betaForm.form.whatsappPlaceholder}
                      className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-200 ${
                        errors.whatsapp
                          ? 'border-tuggi-error-light bg-tuggi-error/5 focus:ring-tuggi-error'
                          : 'border-tuggi-neutral-300 focus:ring-tuggi-primary focus:border-tuggi-primary'
                      }`}
                    />
                    {errors.whatsapp && (
                      <div className="flex items-center gap-2 mt-2 text-tuggi-error text-sm">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.whatsapp}</span>
                      </div>
                    )}
                  </div>

                  {/* Checkbox Agreement */}
                  <div className="bg-tuggi-neutral-50 rounded-xl p-4 border border-tuggi-neutral-200">
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={formData.agreedToFeedback}
                        onChange={(e) => handleInputChange('agreedToFeedback', e.target.checked)}
                        className={`mt-1 w-5 h-5 rounded border-2 text-tuggi-primary focus:ring-2 focus:ring-tuggi-primary cursor-pointer ${
                          errors.agreedToFeedback ? 'border-red-500' : 'border-tuggi-neutral-300'
                        }`}
                      />
                      <span className="text-sm text-tuggi-neutral-700 leading-relaxed group-hover:text-tuggi-neutral-900 transition-colors">
                        {content.betaForm.form.checkboxLabel}
                      </span>
                    </label>
                    {errors.agreedToFeedback && (
                      <div className="flex items-center gap-2 mt-2 text-tuggi-error text-sm px-1">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.agreedToFeedback}</span>
                      </div>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    onClick={() => trackConversion('form_submit', 'beta_submit_attempt')}
                    className="w-full bg-tuggi-secondary hover:bg-tuggi-secondary-dark text-white font-black py-4 rounded-2xl text-xl shadow-xl shadow-tuggi-secondary/20 transition-all duration-300 transform active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-3">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        {content.betaForm.form.submittingButton}
                      </span>
                    ) : (
                      content.betaForm.form.submitButton
                    )}
                  </button>

                  {/* Trust indicators */}
                  <div className="text-center pt-4 border-t border-tuggi-neutral-100">
                    <p className="text-xs text-tuggi-neutral-500 flex items-center justify-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-tuggi-success" />
                      Seus dados estão protegidos e serão usados apenas para este programa
                    </p>
                  </div>
                </form>
              </div>
            ) : (
              // Success State
              <div className="bg-white rounded-3xl shadow-2xl p-12 text-center border border-tuggi-neutral-200">
                <div className="w-20 h-20 bg-tuggi-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-tuggi-success" />
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-tuggi-neutral-900 mb-4">
                  {content.betaForm.successState.title}
                </h2>
                <p className="text-lg text-tuggi-neutral-600 mb-8 leading-relaxed max-w-md mx-auto">
                  {content.betaForm.successState.message}
                </p>
                <div className="inline-flex items-center gap-2 bg-tuggi-success/10 text-tuggi-success-dark px-6 py-3 rounded-xl border border-tuggi-success/20">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="font-semibold">Inscrição confirmada</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Legal Disclaimer */}
      <section className="py-8 bg-tuggi-neutral-50 border-t border-tuggi-neutral-200">
        <div className={layout.container.base}>
          <p className="text-xs text-tuggi-neutral-500 text-center max-w-4xl mx-auto leading-relaxed opacity-80">
            {content.legalDisclaimer}
          </p>
        </div>
      </section>
    </div>
  );
};

export default BetaDrivers;
