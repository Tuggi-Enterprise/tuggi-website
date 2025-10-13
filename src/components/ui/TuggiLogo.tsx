import React from 'react';

interface TuggiLogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  language?: string;
}

const TuggiLogo: React.FC<TuggiLogoProps> = ({ 
  size = 'md', 
  className = '',
  language = 'PT'
}) => {
  const sizes = {
    sm: { height: 32 },
    md: { height: 40 },
    lg: { height: 48 }
  };

  const currentSize = sizes[size];

  // Localized alt text
  const getAltText = (lang: string) => {
    const altTexts = {
      PT: 'Logo da Tuggi',
      EN: 'Tuggi Logo',
      ES: 'Logo de Tuggi'
    };
    return altTexts[lang as keyof typeof altTexts] || altTexts.PT;
  };

  return (
    <img 
      src="/tuggi-logo.png"
      alt={getAltText(language)}
      height={currentSize.height}
      className={`h-auto ${className}`}
      style={{ height: `${currentSize.height}px` }}
    />
  );
};

export default TuggiLogo; 