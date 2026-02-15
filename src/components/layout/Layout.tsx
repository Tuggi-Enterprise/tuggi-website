import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  currentLanguage?: string;
  onLanguageChange?: (lang: string) => void;
  currentPage?: string;
  onPageChange?: (page: string) => void;
  hideHeader?: boolean;
  minimalHeader?: boolean;
  hideFooter?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  currentLanguage, 
  onLanguageChange,
  currentPage,
  onPageChange,
  hideHeader = false,
  minimalHeader = false,
  hideFooter = false
}) => {
  useEffect(() => {
    // Set document language attribute for accessibility
    const langMap: Record<string, string> = {
      'PT': 'pt-BR',
      'ES': 'es',
      'FR': 'fr',
      'DE': 'de',
      'IT': 'it',
      'EN': 'en'
    };
    document.documentElement.lang = langMap[currentLanguage || 'EN'] || 'en';
    
    // Set document direction (all supported languages are LTR)
    document.documentElement.dir = 'ltr';
    
    // Update page class for CSS targeting
    document.body.className = `page-${currentPage} lang-${currentLanguage?.toLowerCase()}`;
  }, [currentLanguage, currentPage]);

  return (
    <div className="min-h-screen flex flex-col">
      {!hideHeader && (
        <Header 
          currentLanguage={currentLanguage}
          onLanguageChange={onLanguageChange}
          currentPage={currentPage}
          onPageChange={onPageChange}
          minimal={minimalHeader}
        />
      )}
      <main 
        id="main-content"
        className="flex-1 pt-14 lg:pt-18"
        role="main"
        aria-label="Main content"
      >
        {children}
      </main>
      {!hideFooter && (
        <Footer 
          currentLanguage={currentLanguage}
          onLanguageChange={onLanguageChange}
          currentPage={currentPage}
          onPageChange={onPageChange}
        />
      )}
    </div>
  );
};

export default Layout;