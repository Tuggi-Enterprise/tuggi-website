import React from 'react';

interface TuggiLogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const TuggiLogo: React.FC<TuggiLogoProps> = ({ 
  size = 'md', 
  className = ''
}) => {
  const sizes = {
    sm: { height: 32 },
    md: { height: 40 },
    lg: { height: 48 }
  };

  const currentSize = sizes[size];

  return (
    <img 
      src="/tuggi-logo.png"
      alt="Tuggi"
      height={currentSize.height}
      className={`h-auto ${className}`}
      style={{ height: `${currentSize.height}px` }}
    />
  );
};

export default TuggiLogo; 