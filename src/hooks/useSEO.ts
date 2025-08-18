import { useEffect } from 'react';
import { generateSEOConfig, updatePageSEO, trackPageView } from '../utils/seo';

export const useSEO = (page: string, language: string) => {
  useEffect(() => {
    console.log('useSEO called with:', { page, language });
    const seoConfig = generateSEOConfig(page, language);
    console.log('Generated SEO config:', seoConfig);
    updatePageSEO(seoConfig);
    trackPageView(page, language);
  }, [page, language]);
};