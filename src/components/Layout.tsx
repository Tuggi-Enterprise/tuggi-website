import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  currentLanguage?: string;
  onLanguageChange?: (lang: string) => void;
  currentPage?: string;
  onPageChange?: (page: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  currentLanguage, 
  onLanguageChange,
  currentPage,
  onPageChange
}) => {
  useEffect(() => {
    // Set document language attribute for accessibility
    document.documentElement.lang = currentLanguage === 'PT' ? 'pt-BR' : 
                                   currentLanguage === 'ES' ? 'es' : 'en';
    
    // Set document direction (all supported languages are LTR)
    document.documentElement.dir = 'ltr';
    
    // Update page class for CSS targeting
    document.body.className = `page-${currentPage} lang-${currentLanguage?.toLowerCase()}`;
  }, [currentLanguage, currentPage]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        currentLanguage={currentLanguage}
        onLanguageChange={onLanguageChange}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
      <main 
        id="main-content"
        className="flex-1 pt-12 sm:pt-12 lg:pt-16"
        role="main"
        aria-label="Main content"
      >
        {children}
      </main>
      <Footer 
        currentLanguage={currentLanguage}
        onLanguageChange={onLanguageChange}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default Layout;