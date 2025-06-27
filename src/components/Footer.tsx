import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Instagram, Globe, ChevronDown } from 'lucide-react';
import { getLanguageFlag, getLanguageName, getLocaleCode } from '../utils/routing';
import TuggiLogo from './TuggiLogo';

interface FooterProps {
  currentLanguage?: string;
  onLanguageChange?: (lang: string) => void;
  currentPage?: string;
  onPageChange?: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ 
  currentLanguage = 'EN', 
  onLanguageChange,
  currentPage,
  onPageChange
}) => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  // Localized footer sections
  const getFooterSections = (language: string) => {
    const sections: Record<string, Array<{title: string, links: Array<{label: string, page: string}>}>> = {
      EN: [
        {
          title: 'Company',
          links: [
            { label: 'Home', page: 'home' },
            { label: 'Our Purpose', page: 'purpose' },
            { label: 'Our Story & Team', page: 'story' },
            { label: 'Products', page: 'products' },
            { label: 'Business Benefits', page: 'benefits' },
            { label: 'Contact', page: 'contact' },
          ],
        },
        {
          title: 'Solutions',
          links: [
            { label: 'Tuggi Drive', page: 'drive' },
            { label: 'Tuggi Walk', page: 'walk' },
            { label: 'Enterprise Solutions', page: 'enterprise' },
            { label: 'API Documentation', page: 'api' },
            { label: 'Integration Support', page: 'integration' },
          ],
        },
        {
          title: 'Industries',
          links: [
            { label: 'Transportation', page: 'transportation' },
            { label: 'Tourism', page: 'tourism' },
            { label: 'Hospitality', page: 'hospitality' },
            { label: 'Fleet Management', page: 'fleet' },
            { label: 'Travel Agencies', page: 'agencies' },
          ],
        },
        {
          title: 'Resources',
          links: [
            { label: 'Documentation', page: 'docs' },
            { label: 'Case Studies', page: 'cases' },
            { label: 'White Papers', page: 'papers' },
            { label: 'Support Center', page: 'support' },
            { label: 'Training', page: 'training' },
          ],
        },
      ],
      PT: [
        {
          title: 'Empresa',
          links: [
            { label: 'Início', page: 'home' },
            { label: 'Nosso Propósito', page: 'purpose' },
            { label: 'Nossa História', page: 'story' },
            { label: 'Produtos', page: 'products' },
            { label: 'Benefícios', page: 'benefits' },
            { label: 'Contato', page: 'contact' },
          ],
        },
        {
          title: 'Soluções',
          links: [
            { label: 'Tuggi Drive', page: 'drive' },
            { label: 'Tuggi Walk', page: 'walk' },
            { label: 'Soluções Enterprise', page: 'enterprise' },
            { label: 'Documentação API', page: 'api' },
            { label: 'Suporte Integração', page: 'integration' },
          ],
        },
        {
          title: 'Indústrias',
          links: [
            { label: 'Transporte', page: 'transportation' },
            { label: 'Turismo', page: 'tourism' },
            { label: 'Hospitalidade', page: 'hospitality' },
            { label: 'Gestão de Frota', page: 'fleet' },
            { label: 'Agências de Viagem', page: 'agencies' },
          ],
        },
        {
          title: 'Recursos',
          links: [
            { label: 'Documentação', page: 'docs' },
            { label: 'Casos de Estudo', page: 'cases' },
            { label: 'White Papers', page: 'papers' },
            { label: 'Central de Suporte', page: 'support' },
            { label: 'Treinamento', page: 'training' },
          ],
        },
      ],
      ES: [
        {
          title: 'Empresa',
          links: [
            { label: 'Inicio', page: 'home' },
            { label: 'Nuestro Propósito', page: 'purpose' },
            { label: 'Nuestra Historia', page: 'story' },
            { label: 'Productos', page: 'products' },
            { label: 'Beneficios', page: 'benefits' },
            { label: 'Contacto', page: 'contact' },
          ],
        },
        {
          title: 'Soluciones',
          links: [
            { label: 'Tuggi Drive', page: 'drive' },
            { label: 'Tuggi Walk', page: 'walk' },
            { label: 'Soluciones Enterprise', page: 'enterprise' },
            { label: 'Documentación API', page: 'api' },
            { label: 'Soporte Integración', page: 'integration' },
          ],
        },
        {
          title: 'Industrias',
          links: [
            { label: 'Transporte', page: 'transportation' },
            { label: 'Turismo', page: 'tourism' },
            { label: 'Hospitalidad', page: 'hospitality' },
            { label: 'Gestión de Flotas', page: 'fleet' },
            { label: 'Agencias de Viajes', page: 'agencies' },
          ],
        },
        {
          title: 'Recursos',
          links: [
            { label: 'Documentación', page: 'docs' },
            { label: 'Casos de Estudio', page: 'cases' },
            { label: 'White Papers', page: 'papers' },
            { label: 'Centro de Soporte', page: 'support' },
            { label: 'Entrenamiento', page: 'training' },
          ],
        },
      ]
    };
    
    return sections[language] || sections['EN'];
  };

  const footerSections = getFooterSections(currentLanguage);

  const languages = [
    { code: 'PT', label: getLanguageName('PT'), flag: getLanguageFlag('PT') },
    { code: 'EN', label: getLanguageName('EN'), flag: getLanguageFlag('EN') },
    { code: 'ES', label: getLanguageName('ES'), flag: getLanguageFlag('ES') },
  ];

  const currentLang = languages.find(lang => lang.code === currentLanguage) || languages[1];

  // Localized text
  const getLocalizedText = (key: string) => {
    const translations: Record<string, Record<string, string>> = {
      company_description: {
        EN: 'Empowering businesses worldwide with innovative technology solutions for digital transformation, enhanced performance, and sustainable growth.',
        PT: 'Capacitando empresas mundialmente com soluções tecnológicas inovadoras para transformação digital, performance aprimorada e crescimento sustentável.',
        ES: 'Empoderando empresas mundialmente con soluciones tecnológicas innovadoras para transformación digital, rendimiento mejorado y crecimiento sostenible.'
      },
      follow_us: {
        EN: 'Follow us:',
        PT: 'Siga-nos:',
        ES: 'Síguenos:'
      },
      growing: {
        EN: 'We\'re Growing',
        PT: 'Estamos Crescendo',
        ES: 'Estamos Creciendo'
      },
      join_mission: {
        EN: 'Join our mission to transform travel experiences. We\'re always looking for passionate individuals who share our vision.',
        PT: 'Junte-se à nossa missão de transformar experiências de viagem. Sempre procuramos indivíduos apaixonados que compartilham nossa visão.',
        ES: 'Únete a nuestra misión de transformar experiencias de viaje. Siempre buscamos individuos apasionados que compartan nuestra visión.'
      },
      view_positions: {
        EN: 'View Open Positions',
        PT: 'Ver Vagas Abertas',
        ES: 'Ver Posiciones Abiertas'
      },
      stay_informed: {
        EN: 'Stay Informed',
        PT: 'Mantenha-se Informado',
        ES: 'Mantente Informado'
      },
      newsletter_description: {
        EN: 'Get the latest insights, updates, and industry trends delivered to your inbox.',
        PT: 'Receba as últimas insights, atualizações e tendências da indústria em sua caixa de entrada.',
        ES: 'Recibe las últimas perspectivas, actualizaciones y tendencias de la industria en tu bandeja de entrada.'
      },
      email_placeholder: {
        EN: 'Enter your business email',
        PT: 'Digite seu email empresarial',
        ES: 'Ingresa tu email empresarial'
      },
      subscribe: {
        EN: 'Subscribe',
        PT: 'Inscrever-se',
        ES: 'Suscribirse'
      },
      language: {
        EN: 'Language',
        PT: 'Idioma',
        ES: 'Idioma'
      },
      all_rights_reserved: {
        EN: 'All rights reserved.',
        PT: 'Todos os direitos reservados.',
        ES: 'Todos los derechos reservados.'
      },
      privacy_policy: {
        EN: 'Privacy Policy',
        PT: 'Política de Privacidade',
        ES: 'Política de Privacidad'
      },
      terms_of_use: {
        EN: 'Terms of Use',
        PT: 'Termos de Uso',
        ES: 'Términos de Uso'
      },
      cookie_policy: {
        EN: 'Cookie Policy',
        PT: 'Política de Cookies',
        ES: 'Política de Cookies'
      },
      security: {
        EN: 'Security',
        PT: 'Segurança',
        ES: 'Seguridad'
      },
      systems_operational: {
        EN: 'All systems operational',
        PT: 'Todos os sistemas operacionais',
        ES: 'Todos los sistemas operacionales'
      }
    };

    return translations[key]?.[currentLanguage] || translations[key]?.['EN'] || key;
  };

  const trustIndicators = [
    { label: 'ISO 27001 Certified', icon: '🔒' },
    { label: 'GDPR Compliant', icon: '🛡️' },
    { label: '99.9% Uptime SLA', icon: '⚡' },
    { label: '24/7 Support', icon: '🕐' },
  ];

  const socialLinks = [
    { 
      icon: Linkedin, 
      href: 'https://linkedin.com/company/tuggi', 
      label: 'LinkedIn',
      hoverColor: 'hover:text-[#0077B5]'
    },
    { 
      icon: Instagram, 
      href: 'https://instagram.com/tuggi', 
      label: 'Instagram',
      hoverColor: 'hover:text-[#E4405F]'
    },
  ];

  const handleNavClick = (page: string) => {
    onPageChange?.(page);
    
    // Track footer navigation
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'footer_navigation', {
        event_category: 'Navigation',
        event_label: page,
        language: currentLanguage,
        locale: getLocaleCode(currentLanguage),
        navigation_type: 'footer_link'
      });
    }
  };

  const handleLanguageChange = (langCode: string) => {
    if (langCode !== currentLanguage) {
      onLanguageChange?.(langCode);
      setIsLanguageOpen(false);
      
      // Track language change from footer
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'language_change_footer', {
          event_category: 'Language Selection',
          event_label: `${currentLanguage}_to_${langCode}`,
          language: langCode,
          previous_language: currentLanguage,
          selection_method: 'footer_dropdown'
        });
      }
    }
  };

  const handleSocialClick = (platform: string, url: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'social_media_click', {
        event_category: 'Social Media',
        event_label: platform,
        language: currentLanguage,
        locale: getLocaleCode(currentLanguage),
        destination: url
      });
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Track newsletter signup
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'newsletter_signup', {
        event_category: 'Lead Generation',
        event_label: 'footer_newsletter',
        language: currentLanguage,
        locale: getLocaleCode(currentLanguage)
      });
    }
  };

  return (
    <footer className="bg-neutral-900 text-neutral-300" role="contentinfo">
      {/* Trust Indicators Bar */}
      <div className="bg-neutral-800 border-b border-neutral-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {trustIndicators.map((indicator, index) => (
              <div key={index} className="flex items-center space-x-2 text-sm">
                <span className="text-lg" role="img" aria-label={indicator.label}>{indicator.icon}</span>
                <span className="text-neutral-400 font-medium">{indicator.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <TuggiLogo 
                size="lg" 
                className=""
              />
            </div>
            
            <p className="text-neutral-400 mb-6 leading-relaxed text-sm">
              {getLocalizedText('company_description')}
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-tuggi-primary flex-shrink-0" />
                <a 
                  href="mailto:hello@tuggi.com" 
                  className="text-sm hover:text-tuggi-primary transition-colors duration-200"
                  onClick={() => handleSocialClick('email', 'mailto:hello@tuggi.com')}
                >
                  hello@tuggi.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-tuggi-primary flex-shrink-0" />
                <a 
                  href="tel:+1-555-123-4567" 
                  className="text-sm hover:text-tuggi-primary transition-colors duration-200"
                  onClick={() => handleSocialClick('phone', 'tel:+1-555-123-4567')}
                >
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-tuggi-primary flex-shrink-0" />
                <span className="text-neutral-400 text-sm">
                  San Francisco, CA • Global Operations
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-neutral-500 font-medium">{getLocalizedText('follow_us')}</span>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className={`p-2 rounded-lg bg-neutral-800 text-neutral-400 ${social.hoverColor} hover:bg-neutral-700 transition-all duration-200 hover:scale-105`}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleSocialClick(social.label.toLowerCase(), social.href)}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={section.title} className="lg:col-span-1">
              <h3 className="text-white font-semibold text-base mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleNavClick(link.page)}
                      className="text-neutral-400 hover:text-tuggi-primary transition-colors duration-200 text-sm block text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter & Language Selector */}
        <div className="mt-12 pt-8 border-t border-neutral-800">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            {/* Newsletter */}
            <div className="max-w-md">
              <h3 className="text-white font-semibold text-base mb-3">
                {getLocalizedText('stay_informed')}
              </h3>
              <p className="text-neutral-400 mb-4 text-sm">
                {getLocalizedText('newsletter_description')}
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder={getLocalizedText('email_placeholder')}
                  className="flex-1 px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:border-tuggi-primary focus:outline-none focus:ring-1 focus:ring-tuggi-primary transition-colors duration-200 text-sm"
                  aria-label={getLocalizedText('email_placeholder')}
                  required
                />
                <button 
                  type="submit"
                  className="bg-tuggi-primary hover:bg-tuggi-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 whitespace-nowrap text-sm hover:shadow-lg"
                >
                  {getLocalizedText('subscribe')}
                </button>
              </form>
            </div>

            {/* Language Selector */}
            <div className="relative">
              <label className="block text-white font-semibold text-sm mb-3">
                {getLocalizedText('language')}
              </label>
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-3 px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg hover:border-tuggi-primary transition-all duration-200 min-w-[160px]"
                aria-label={`Select Language - Current: ${currentLang.label}`}
                aria-expanded={isLanguageOpen}
              >
                <span className="text-lg" role="img" aria-label={`${currentLang.label} flag`}>
                  {currentLang.flag}
                </span>
                <span className="text-sm font-medium text-white flex-1 text-left">
                  {currentLang.label}
                </span>
                <ChevronDown className={`w-4 h-4 text-neutral-400 transition-transform duration-200 ${isLanguageOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isLanguageOpen && (
                <div className="absolute bottom-full mb-2 right-0 py-2 w-full bg-neutral-800 rounded-lg shadow-xl border border-neutral-700 z-10">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`flex items-center space-x-3 w-full text-left px-4 py-3 text-sm transition-colors duration-150 ${
                        currentLanguage === lang.code
                          ? 'bg-tuggi-primary/20 text-tuggi-primary'
                          : 'text-neutral-300 hover:bg-neutral-700 hover:text-white'
                      }`}
                      aria-current={currentLanguage === lang.code ? 'true' : undefined}
                    >
                      <span className="text-lg" role="img" aria-label={`${lang.label} flag`}>
                        {lang.flag}
                      </span>
                      <span className="font-medium">{lang.label}</span>
                      {currentLanguage === lang.code && (
                        <div className="ml-auto w-2 h-2 bg-tuggi-primary rounded-full"></div>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            {/* Copyright */}
            <div className="text-neutral-500 text-sm">
              © {currentYear} Tuggi Technologies. {getLocalizedText('all_rights_reserved')}
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <button 
                onClick={() => handleNavClick('privacy')}
                className="text-neutral-500 hover:text-tuggi-primary transition-colors duration-200 font-medium"
              >
                {getLocalizedText('privacy_policy')}
              </button>
              <button 
                onClick={() => handleNavClick('terms')}
                className="text-neutral-500 hover:text-tuggi-primary transition-colors duration-200 font-medium"
              >
                {getLocalizedText('terms_of_use')}
              </button>
              <button 
                onClick={() => handleNavClick('cookies')}
                className="text-neutral-500 hover:text-tuggi-primary transition-colors duration-200 font-medium"
              >
                {getLocalizedText('cookie_policy')}
              </button>
              <button 
                onClick={() => handleNavClick('security')}
                className="text-neutral-500 hover:text-tuggi-primary transition-colors duration-200 font-medium"
              >
                {getLocalizedText('security')}
              </button>
            </div>

            {/* Performance Badge */}
            <div className="flex items-center space-x-2 text-xs text-neutral-500">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>{getLocalizedText('systems_operational')}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;