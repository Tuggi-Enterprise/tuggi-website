import React from 'react';
import { layout } from '../utils/designSystem';

interface LanguagePreviewProps {
  currentLanguage?: string;
}

const LanguagePreview: React.FC<LanguagePreviewProps> = ({ 
  currentLanguage = 'PT' 
}) => {
  // Localized content
  const getLocalizedContent = (language: string) => {
    const content: Record<string, any> = {
      PT: {
        preview_title: 'Como você escolhe o idioma no app',
        preview_alt: 'Seleção de idioma no app (Português, Español, English)'
      },
      EN: {
        preview_title: 'How you choose the language in the app',
        preview_alt: 'Language selection in the app (Português, Español, English)'
      },
      ES: {
        preview_title: 'Cómo eliges el idioma en la app',
        preview_alt: 'Selección de idioma en la app (Português, Español, English)'
      }
    };
    return content[language] || content['PT'];
  };

  const content = getLocalizedContent(currentLanguage);

  return (
    <section className={`${layout.section.base} bg-gradient-to-br from-neutral-50 to-white`}>
      <div className={layout.container.base}>
        <div className="text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-12">
            {content.preview_title}
          </h3>
          
          <div className="max-w-md mx-auto">
            <div className="relative bg-white rounded-3xl p-6 shadow-2xl border border-neutral-200">
              {/* Placeholder for language selector screenshot */}
              <div className="aspect-[9/16] bg-gradient-to-br from-tuggi-primary/10 to-tuggi-secondary/10 rounded-2xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-tuggi-primary/20 rounded-full mx-auto flex items-center justify-center">
                    <span className="text-2xl">🌍</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 bg-white rounded-xl p-3 shadow-sm">
                      <span className="text-xl">🇧🇷</span>
                      <span className="font-medium text-neutral-900">Português</span>
                    </div>
                    <div className="flex items-center gap-3 bg-white rounded-xl p-3 shadow-sm">
                      <span className="text-xl">🇪🇸</span>
                      <span className="font-medium text-neutral-900">Español</span>
                    </div>
                    <div className="flex items-center gap-3 bg-white rounded-xl p-3 shadow-sm">
                      <span className="text-xl">🇺🇸</span>
                      <span className="font-medium text-neutral-900">English</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Note: This would be replaced with actual screenshot when available */}
              {/* <img 
                src="/images/language-selector-preview.png" 
                alt={content.preview_alt}
                className="w-full h-auto rounded-2xl"
              /> */}
            </div>
          </div>
          
          <p className="text-neutral-600 mt-6 text-sm">
            * Interface de demonstração - a imagem real será adicionada quando disponível
          </p>
        </div>
      </div>
    </section>
  );
};

export default LanguagePreview;