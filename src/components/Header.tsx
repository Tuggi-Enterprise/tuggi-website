import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { getLanguageFlag, getLanguageName } from '../utils/routing';
import TuggiLogo from './TuggiLogo';

interface HeaderProps {
  currentLanguage?: string;
  onLanguageChange?: (lang: string) => void;
  currentPage?: string;
  onPageChange?: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ 
  currentLanguage = 'EN', 
  onLanguageChange,
  currentPage = 'home',
  onPageChange
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.language-selector')) {
        setIsLanguageOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Localized navigation items
  const getNavigationItems = (language: string) => {
    const navItems: Record<string, Array<{label: string, page: string}>> = {
      EN: [
        { label: 'Home', page: 'home' },
        { label: 'Our Purpose', page: 'purpose' },
        { label: 'Our Story & Team', page: 'story' },
        { label: 'Products', page: 'products' },
        { label: 'Business Benefits', page: 'benefits' },
        { label: 'Contact', page: 'contact' },
      ],
      PT: [
        { label: 'Início', page: 'home' },
        { label: 'Nosso Propósito', page: 'purpose' },
        { label: 'Nossa História', page: 'story' },
        { label: 'Produtos', page: 'products' },
        { label: 'Benefícios', page: 'benefits' },
        { label: 'Contato', page: 'contact' },
      ],
      ES: [
        { label: 'Inicio', page: 'home' },
        { label: 'Nuestro Propósito', page: 'purpose' },
        { label: 'Nuestra Historia', page: 'story' },
        { label: 'Productos', page: 'products' },
        { label: 'Beneficios', page: 'benefits' },
        { label: 'Contacto', page: 'contact' },
      ]
    };
    
    return navItems[language] || navItems['EN'];
  };

  const navigationItems = getNavigationItems(currentLanguage);

  const languages = [
    { code: 'PT', label: getLanguageName('PT'), flag: getLanguageFlag('PT') },
    { code: 'EN', label: getLanguageName('EN'), flag: getLanguageFlag('EN') },
    { code: 'ES', label: getLanguageName('ES'), flag: getLanguageFlag('ES') },
  ];

  const currentLang = languages.find(lang => lang.code === currentLanguage) || languages[1];

  const handleNavClick = (page: string) => {
    onPageChange?.(page);
    setIsMenuOpen(false);
    
    // Track navigation with multilingual context
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'navigation_click', {
        event_category: 'Navigation',
        event_label: page,
        language: currentLanguage,
        navigation_type: 'header_menu',
        from_page: currentPage,
        to_page: page
      });
    }
  };

  const handleLanguageClick = (langCode: string) => {
    if (langCode !== currentLanguage) {
      onLanguageChange?.(langCode);
      setIsLanguageOpen(false);
      
      // Track language selection
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'language_selector_click', {
          event_category: 'Language Selection',
          event_label: `${currentLanguage}_to_${langCode}`,
          language: langCode,
          previous_language: currentLanguage,
          selection_method: 'header_dropdown'
        });
      }
    }
  };

  return (
    // Fixed wrapper for header only
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Header */}
      <header
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-neutral-100'
            : 'bg-white/90 backdrop-blur-sm'
        }`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <div className="flex-shrink-0">
              <button 
                onClick={() => handleNavClick('home')}
                className="group"
                aria-label={`Tuggi Home - ${currentLang.label}`}
              >
                <TuggiLogo 
                  size="md" 
                  className="group-hover:scale-105 transition-transform duration-200"
                />
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1" role="navigation" aria-label="Main navigation">
              {navigationItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`px-4 py-2 font-medium transition-all duration-200 relative group rounded-lg hover:bg-tuggi-primary/5 ${
                    currentPage === item.page
                      ? 'text-tuggi-primary'
                      : 'text-neutral-700 hover:text-tuggi-primary'
                  }`}
                  aria-current={currentPage === item.page ? 'page' : undefined}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-tuggi-primary transition-all duration-200 rounded-full ${
                    currentPage === item.page ? 'w-6' : 'w-0 group-hover:w-6'
                  }`}></span>
                </button>
              ))}
            </nav>

            {/* Language Selector & Mobile Menu */}
            <div className="flex items-center space-x-3">
              {/* Language Selector */}
              <div className="relative language-selector">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsLanguageOpen(!isLanguageOpen);
                  }}
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg border border-neutral-200 hover:border-tuggi-primary hover:bg-tuggi-primary/5 transition-all duration-200 min-w-[80px]"
                  aria-label={`Select Language - Current: ${currentLang.label}`}
                  aria-expanded={isLanguageOpen}
                  aria-haspopup="true"
                >
                  <span className="text-lg" role="img" aria-label={`${currentLang.label} flag`}>
                    {currentLang.flag}
                  </span>
                  <span className="text-sm font-medium text-neutral-700 hidden sm:inline">
                    {currentLang.code}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-neutral-600 transition-transform duration-200 ${isLanguageOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isLanguageOpen && (
                  <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-xl shadow-xl border border-neutral-200 z-20 animate-fade-in">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageClick(lang.code)}
                        className={`flex items-center space-x-3 w-full text-left px-4 py-3 text-sm transition-colors duration-150 ${
                          currentLanguage === lang.code
                            ? 'bg-tuggi-primary/10 text-tuggi-primary'
                            : 'text-neutral-700 hover:bg-tuggi-primary/5 hover:text-tuggi-primary'
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

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-neutral-700 hover:bg-neutral-100 hover:text-tuggi-primary transition-all duration-200"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-neutral-200 animate-fade-in">
              <nav className="flex flex-col space-y-1" role="navigation" aria-label="Mobile navigation">
                {navigationItems.map((item) => (
                  <button
                    key={item.page}
                    onClick={() => handleNavClick(item.page)}
                    className={`text-left font-medium py-3 px-4 rounded-lg transition-all duration-200 ${
                      currentPage === item.page
                        ? 'text-tuggi-primary bg-tuggi-primary/5'
                        : 'text-neutral-700 hover:text-tuggi-primary hover:bg-tuggi-primary/5'
                    }`}
                    aria-current={currentPage === item.page ? 'page' : undefined}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;