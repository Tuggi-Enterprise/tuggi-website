import React from 'react';
import { X, Download } from 'lucide-react';

interface IOSBannerProps {
  currentLanguage?: string;
  onCTAClick?: (ctaType: string, ctaText?: string, destination?: string) => void;
  onClose?: () => void;
}

const IOSBanner: React.FC<IOSBannerProps> = ({ 
  currentLanguage = 'PT', 
  onCTAClick,
  onClose 
}) => {
  const getLocalizedContent = (language: string) => {
    const content: Record<string, any> = {
      PT: {
        text: 'Agora no iOS • Android em breve',
        buttonText: 'Baixar iOS',
        ariaLabel: 'Fechar banner'
      },
      EN: {
        text: 'Now on iOS • Android coming soon',
        buttonText: 'Download iOS',
        ariaLabel: 'Close banner'
      },
      ES: {
        text: 'Ahora en iOS • Android próximamente',
        buttonText: 'Descargar iOS',
        ariaLabel: 'Cerrar banner'
      }
    };
    return content[language] || content['PT'];
  };

  const content = getLocalizedContent(currentLanguage);

  const handleDownloadClick = () => {
    onCTAClick?.('ios_download', content.buttonText, 'https://apps.apple.com/app/tuggi');
    // Open App Store link
    window.open('https://apps.apple.com/app/tuggi', '_blank');
  };

  return (
    <div className="bg-gradient-to-r from-tuggi-primary to-tuggi-secondary text-white py-3 px-4 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-4">
        <div className="flex items-center gap-3">
          <Download className="w-5 h-5" />
          <span className="text-sm font-medium">{content.text}</span>
        </div>
        
        <button
          onClick={handleDownloadClick}
          className="bg-white text-tuggi-primary px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-neutral-100 transition-colors duration-200 flex items-center gap-2"
        >
          <Download className="w-4 h-4" />
          {content.buttonText}
        </button>
        
        {onClose && (
          <button
            onClick={onClose}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white transition-colors duration-200"
            aria-label={content.ariaLabel}
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
};

export default IOSBanner;