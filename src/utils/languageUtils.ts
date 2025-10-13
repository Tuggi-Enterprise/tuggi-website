// Language utility functions for audio samples

export const getLanguageLabel = (lang: string): string => {
  const labels = {
    'PT': 'Ouvir em Português',
    'EN': 'Listen in English', 
    'ES': 'Escuchar en Español'
  };
  return labels[lang] || 'Play';
};

export const getLanguageName = (lang: string): string => {
  const names = {
    'PT': 'Português',
    'EN': 'English',
    'ES': 'Español'
  };
  return names[lang] || lang;
};

export const getFlag = (lang: string): string => {
  const flags = {
    'PT': '🇧🇷',
    'EN': '🇺🇸', 
    'ES': '🇪🇸'
  };
  return flags[lang] || '🌐';
};

export const getLocalizedText = (key: string, language: string = 'PT'): string => {
  const texts = {
    'PT': {
      'compare_languages': 'Comparar idiomas',
      'available_languages': 'Idiomas disponíveis',
      'active': 'ativo'
    },
    'EN': {
      'compare_languages': 'Compare languages',
      'available_languages': 'Available languages',
      'active': 'active'
    },
    'ES': {
      'compare_languages': 'Comparar idiomas',
      'available_languages': 'Idiomas disponibles',
      'active': 'activo'
    }
  };
  
  return texts[language]?.[key] || texts['PT'][key] || key;
};
