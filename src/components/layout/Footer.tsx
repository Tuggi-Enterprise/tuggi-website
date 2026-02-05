import React, { useState } from 'react';
import { Mail, MapPin, ChevronDown, Globe } from 'lucide-react';
import { getLanguageName, getLocaleCode } from '../../utils/routing';
import LocationDisplay from '../ui/LocationDisplay';
import { useAnalytics } from '../../hooks/useAnalytics';

interface FooterProps {
  currentLanguage?: string;
  onLanguageChange?: (lang: string) => void;
  currentPage?: string;
  onPageChange?: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ 
  currentLanguage = 'PT',
  onLanguageChange,
  currentPage = 'home',
  onPageChange 
}) => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [email, setEmail] = useState('');
  const currentYear = new Date().getFullYear();
  
  // Analytics tracking
  const {
    trackFooterClick,
    trackLanguageSwitch,
    trackNewsletterSignup
  } = useAnalytics(currentPage, currentLanguage);

  const languages = [
    { code: 'PT', label: getLanguageName('PT') },
    { code: 'EN', label: getLanguageName('EN') },
    { code: 'ES', label: getLanguageName('ES') },
  ];

  const currentLang = languages.find(lang => lang.code === currentLanguage) || languages[1];

  // Localized content
  const getLocalizedContent = (language: string) => {
    const content: Record<string, any> = {
      EN: {
        aboutTitle: 'About Tuggi',
        aboutDescription: 'Tuggi is a cultural copilot that turns your journeys into moments of discovery. Through automatic location-based narration, we deliver knowledge and stories about the places around you — while you move freely.',
        contactTitle: 'Contact',
        quickLinksTitle: 'Quick Links',
        quickLinks: [
          { label: 'Home', page: 'home' },
          { label: 'Our Purpose', page: 'purpose' },
          { label: 'For Business', page: 'empresas' },
          { label: 'Contact', page: 'contact' },
          { label: 'Investors', page: 'investors' }
        ],
        languageTitle: 'Language',
        newsletterTitle: 'Stay Updated',
        newsletterDescription: 'Stay updated with our news and launches.',
        emailPlaceholder: 'Enter your email',
        subscribe: 'Subscribe',
        allRightsReserved: 'All rights reserved.',
        privacyPolicy: 'Privacy Policy',
        termsOfUse: 'Terms of Use',
        dataDeletion: 'Data Deletion',
        logoAlt: 'Tuggi Logo'
      },
      PT: {
        aboutTitle: 'Sobre a Tuggi',
        aboutDescription: 'A Tuggi é um copiloto cultural que transforma deslocamentos em experiências de descoberta. Por meio de narração automática baseada em localização, oferecemos conhecimento e histórias sobre o que está ao seu redor — enquanto você se move com liberdade.',
        contactTitle: 'Contato',
        quickLinksTitle: 'Links Rápidos',
        quickLinks: [
          { label: 'Início', page: 'home' },
          { label: 'Nosso Propósito', page: 'purpose' },
          { label: 'Para Empresas', page: 'empresas' },
          { label: 'Contato', page: 'contact' },
          { label: 'Investidores', page: 'investors' }
        ],
        languageTitle: 'Idioma',
        newsletterTitle: 'Mantenha-se Atualizado',
        newsletterDescription: 'Receba atualizações sobre nossas novidades e lançamentos.',
        emailPlaceholder: 'Digite seu email',
        subscribe: 'Inscrever-se',
        allRightsReserved: 'Todos os direitos reservados.',
        privacyPolicy: 'Política de Privacidade',
        termsOfUse: 'Termos de Uso',
        dataDeletion: 'Exclusão de Dados',
        logoAlt: 'Logo da Tuggi'
      },
      ES: {
        aboutTitle: 'Acerca de Tuggi',
        aboutDescription: 'Tuggi es un copiloto cultural que transforma tus desplazamientos en experiencias de descubrimiento. A través de narraciones automáticas basadas en tu ubicación, te ofrecemos conocimiento e historias sobre lo que te rodea — mientras te mueves con libertad.',
        contactTitle: 'Contacto',
        quickLinksTitle: 'Enlaces Rápidos',
        quickLinks: [
          { label: 'Inicio', page: 'home' },
          { label: 'Nuestro Propósito', page: 'purpose' },
          { label: 'Para Empresas', page: 'empresas' },
          { label: 'Contacto', page: 'contact' },
          { label: 'Inversores', page: 'investors' }
        ],
        languageTitle: 'Idioma',
        newsletterTitle: 'Mantente Actualizado',
        newsletterDescription: 'Mantente actualizado con nuestras noticias y lanzamientos.',
        emailPlaceholder: 'Ingresa tu email',
        subscribe: 'Suscribirse',
        allRightsReserved: 'Todos los derechos reservados.',
        privacyPolicy: 'Política de Privacidad',
        termsOfUse: 'Términos de Uso',
        dataDeletion: 'Eliminación de Datos',
        logoAlt: 'Logo de Tuggi'
      },
      FR: {
        aboutTitle: 'À propos de Tuggi',
        aboutDescription: 'Tuggi est un copilote culturel qui transforme vos trajets en moments de découverte. Grâce à une narration automatique géolocalisée, nous vous apportons connaissances et histoires sur les lieux qui vous entourent — tout en vous laissant libre de vos mouvements.',
        contactTitle: 'Contact',
        quickLinksTitle: 'Liens Rapides',
        quickLinks: [
          { label: 'Accueil', page: 'home' },
          { label: 'Notre Raison d\'être', page: 'purpose' },
          { label: 'Pour les Entreprises', page: 'empresas' },
          { label: 'Contact', page: 'contact' },
          { label: 'Investisseurs', page: 'investors' }
        ],
        languageTitle: 'Langue',
        newsletterTitle: 'Restez Informé',
        newsletterDescription: 'Recevez nos actualités et lancements.',
        emailPlaceholder: 'Entrez votre email',
        subscribe: 'S\'abonner',
        allRightsReserved: 'Tous droits réservés.',
        privacyPolicy: 'Politique de Confidentialité',
        termsOfUse: 'Conditions d\'Utilisation',
        dataDeletion: 'Suppression des Données',
        logoAlt: 'Logo Tuggi'
      },
      DE: {
        aboutTitle: 'Über Tuggi',
        aboutDescription: 'Tuggi ist ein kultureller Copilot, der Ihre Fahrten in Entdeckungsreisen verwandelt. Durch automatische standortbezogene Erzählungen liefern wir Wissen und Geschichten über die Orte um Sie herum – während Sie sich frei bewegen.',
        contactTitle: 'Kontakt',
        quickLinksTitle: 'Schnelllinks',
        quickLinks: [
          { label: 'Startseite', page: 'home' },
          { label: 'Unser Ziel', page: 'purpose' },
          { label: 'Für Unternehmen', page: 'empresas' },
          { label: 'Kontakt', page: 'contact' },
          { label: 'Investoren', page: 'investors' }
        ],
        languageTitle: 'Sprache',
        newsletterTitle: 'Auf dem Laufenden bleiben',
        newsletterDescription: 'Bleiben Sie über unsere Neuigkeiten und Starts informiert.',
        emailPlaceholder: 'E-Mail eingeben',
        subscribe: 'Abonnieren',
        allRightsReserved: 'Alle Rechte vorbehalten.',
        privacyPolicy: 'Datenschutzrichtlinie',
        termsOfUse: 'Nutzungsbedingungen',
        dataDeletion: 'Datenlöschung',
        logoAlt: 'Tuggi Logo'
      },
      IT: {
        aboutTitle: 'Su Tuggi',
        aboutDescription: 'Tuggi è un copilota culturale che trasforma i tuoi viaggi in momenti di scoperta. Attraverso la narrazione automatica basata sulla posizione, ti offriamo conoscenze e storie sui luoghi che ti circondano — mentre ti muovi liberamente.',
        contactTitle: 'Contatti',
        quickLinksTitle: 'Link Rapidi',
        quickLinks: [
          { label: 'Home', page: 'home' },
          { label: 'Il Nostro Scopo', page: 'purpose' },
          { label: 'Per le Aziende', page: 'empresas' },
          { label: 'Contatti', page: 'contact' },
          { label: 'Investitori', page: 'investors' }
        ],
        languageTitle: 'Lingua',
        newsletterTitle: 'Resta Aggiornato',
        newsletterDescription: 'Resta aggiornato con le nostre notizie e lanci.',
        emailPlaceholder: 'Inserisci la tua email',
        subscribe: 'Iscriviti',
        allRightsReserved: 'Tutti i diritti riservati.',
        privacyPolicy: 'Informativa sulla Privacy',
        termsOfUse: 'Termini di Utilizzo',
        dataDeletion: 'Cancellazione Dati',
        logoAlt: 'Logo Tuggi'
      }
    };
    return content[language] || content['EN'];
  };

  const content = getLocalizedContent(currentLanguage);

  const handleNavClick = (page: string, linkText: string) => {
    onPageChange?.(page);
    
    // Track footer navigation with enhanced analytics
    trackFooterClick(linkText, `/${page === 'home' ? '' : page}`);
  };

  const handleLanguageChange = (langCode: string) => {
    if (langCode !== currentLanguage) {
      onLanguageChange?.(langCode);
      setIsLanguageOpen(false);
      
      // Track language change with enhanced analytics
      trackLanguageSwitch(langCode);
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    
    // Simulate newsletter signup (replace with actual implementation)
    const success = email.includes('@') && email.includes('.');
    
    // Track newsletter signup
    trackNewsletterSignup(email, success);
    
    if (success) {
      setEmail('');
      // Show success message (you can add a toast notification here)
    }
  };

  const handleEmailClick = () => {
    trackFooterClick('Email Contact', 'mailto:contato@tuggi.app');
  };

  return (
    <footer className="bg-neutral-900 text-neutral-300" role="contentinfo">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* About Tuggi */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img src="/logo-tuggi-white.png" alt={content.logoAlt} className="h-10 lg:h-12 w-auto" />
            </div>
            
            <h3 className="text-white font-semibold text-base mb-4">
              {content.aboutTitle}
            </h3>
            <p className="text-neutral-400 mb-6 leading-relaxed text-sm">
              {content.aboutDescription}
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <h4 className="text-white font-semibold text-sm mb-3">
                {content.contactTitle}
              </h4>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-tuggi-primary flex-shrink-0" />
                <a 
                  href="mailto:contato@tuggi.app" 
                  onClick={handleEmailClick}
                  className="text-sm hover:text-tuggi-primary transition-colors duration-200"
                >
                  contato@tuggi.app
                </a>
              </div>
              
              {/* User Location Display */}
              <LocationDisplay 
                language={currentLanguage} 
                className="mt-3"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4">
              {content.quickLinksTitle}
            </h3>
            <ul className="space-y-3">
              {content.quickLinks.map((link: any) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.page, link.label)}
                    className="text-neutral-400 hover:text-tuggi-primary transition-colors duration-200 text-sm block text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Language Selector & Newsletter */}
          <div>
            {/* Language Selector */}
            <div className="mb-8">
              <h3 className="text-white font-semibold text-base mb-4">
                <Globe className="w-4 h-4 inline-block mr-2" />
                {content.languageTitle}
              </h3>
              <div className="relative">
                <button
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                  className="flex items-center space-x-3 px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg hover:border-tuggi-primary transition-all duration-200 w-full"
                  aria-label={`Select Language - Current: ${currentLang.label}`}
                  aria-expanded={isLanguageOpen}
                >
                  <span className="text-sm font-medium text-white flex-1 text-left">
                    {currentLang.label}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-neutral-400 transition-transform duration-200 ${isLanguageOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isLanguageOpen && (
                  <div className="absolute bottom-full mb-2 left-0 py-2 w-full bg-neutral-800 rounded-lg shadow-xl border border-neutral-700 z-10">
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

            {/* Newsletter */}
            {/* <div>
              <h3 className="text-white font-semibold text-base mb-3">
                {content.newsletterTitle}
              </h3>
              <p className="text-neutral-400 mb-4 text-sm">
                {content.newsletterDescription}
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={content.emailPlaceholder}
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:border-tuggi-primary focus:outline-none focus:ring-1 focus:ring-tuggi-primary transition-colors duration-200 text-sm"
                  aria-label={content.emailPlaceholder}
                  required
                />
                <button 
                  type="submit"
                  className="w-full bg-tuggi-primary hover:bg-tuggi-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 text-sm hover:shadow-lg"
                >
                  {content.subscribe}
                </button>
              </form>
            </div> */}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            {/* Copyright */}
            <div className="text-neutral-500 text-sm">
              © {currentYear} Tuggi. {content.allRightsReserved}
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <button 
                onClick={() => handleNavClick('privacy-policy', content.privacyPolicy)}
                className="text-neutral-500 hover:text-tuggi-primary transition-colors duration-200"
              >
                {content.privacyPolicy}
              </button>
              <span className="text-neutral-600">|</span>
              <button 
                onClick={() => handleNavClick('terms-of-use', content.termsOfUse)}
                className="text-neutral-500 hover:text-tuggi-primary transition-colors duration-200"
              >
                {content.termsOfUse}
              </button>
              <span className="text-neutral-600">|</span>
              <button 
                onClick={() => handleNavClick('data-deletion', content.dataDeletion)}
                className="text-neutral-500 hover:text-tuggi-primary transition-colors duration-200"
              >
                {content.dataDeletion}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;