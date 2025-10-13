import React, { useState, useEffect } from 'react';
import { Download, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FloatingCTAProps {
  currentLanguage?: string;
  onCTAClick?: (ctaType: string, position?: string) => void;
}

const FloatingCTA: React.FC<FloatingCTAProps> = ({ 
  currentLanguage = 'PT',
  onCTAClick 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  // Localized content
  const getLocalizedContent = (language: string) => {
    const content: Record<string, any> = {
      PT: {
        text: 'Baixar o App',
        cta: 'Baixar grátis'
      },
      EN: {
        text: 'Download the App',
        cta: 'Download free'
      },
      ES: {
        text: 'Descargar la App',
        cta: 'Descargar gratis'
      }
    };
    return content[language] || content['PT'];
  };

  const content = getLocalizedContent(currentLanguage);

  // Show floating CTA after user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const shouldShow = scrollY > 800 && !isDismissed;
      setIsVisible(shouldShow);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleDownload = () => {
    onCTAClick?.('floating_download', 'floating_cta');
  };

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-50 md:hidden"
        >
          <div className="relative">
            {/* Main CTA Button */}
            <motion.button
              onClick={handleDownload}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-tuggi-primary to-tuggi-secondary text-white px-6 py-4 rounded-2xl font-bold text-sm shadow-2xl flex items-center gap-3 min-w-[140px]"
            >
              <Download className="w-5 h-5" />
              <span>{content.cta}</span>
            </motion.button>

            {/* Dismiss Button */}
            <motion.button
              onClick={handleDismiss}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute -top-2 -right-2 w-6 h-6 bg-neutral-600 text-white rounded-full flex items-center justify-center text-xs hover:bg-neutral-700 transition-colors duration-200"
            >
              <X className="w-3 h-3" />
            </motion.button>

            {/* Pulse Animation */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-tuggi-primary rounded-2xl -z-10"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;
