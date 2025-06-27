import { useEffect } from 'react';
import { generateSEOConfig, updatePageSEO, trackPageView } from '../utils/seo';

export const useSEO = (page: string, language: string) => {
  useEffect(() => {
    const seoConfig = generateSEOConfig(page, language);
    updatePageSEO(seoConfig);
    trackPageView(page, language);
  }, [page, language]);
};