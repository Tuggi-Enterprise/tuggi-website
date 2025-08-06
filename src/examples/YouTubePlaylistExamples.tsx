/**
 * YouTube Playlist Component Usage Examples
 * 
 * This file demonstrates how to use the YouTubePlaylistSection component
 * in different scenarios and pages throughout the application.
 */

import React from 'react';
import YouTubePlaylistSection from '../components/YouTubePlaylistSection';

// Example 1: Basic usage on Home Page
export const HomePageVideoSection: React.FC = () => {
  return (
    <YouTubePlaylistSection
      playlistId="YOUR_PLAYLIST_ID_HERE" // Replace with actual playlist ID
      title="Como o Tuggi Funciona"
      description="Descubra como nossa plataforma pode transformar a gestão de documentos da sua empresa com estes vídeos tutoriais."
      maxResults={6}
      showDescription={true}
      showViewAll={true}
      layout="grid"
      variant="default"
      currentLanguage="PT"
    />
  );
};

// Example 2: Compact version for sidebar or secondary sections
export const CompactVideoSection: React.FC = () => {
  return (
    <YouTubePlaylistSection
      playlistId="YOUR_PLAYLIST_ID_HERE"
      title="Vídeos Relacionados"
      maxResults={4}
      showDescription={false}
      showViewAll={true}
      layout="list"
      variant="compact"
      currentLanguage="PT"
      className="bg-neutral-50 rounded-2xl p-6"
    />
  );
};

// Example 3: Featured video section with carousel
export const FeaturedVideoCarousel: React.FC = () => {
  return (
    <YouTubePlaylistSection
      playlistId="YOUR_PLAYLIST_ID_HERE"
      title="Destaques em Vídeo"
      description="Conheça os principais recursos do Tuggi através destes vídeos em destaque."
      maxResults={3}
      showDescription={true}
      showViewAll={false}
      layout="carousel"
      variant="featured"
      currentLanguage="PT"
      customContent={
        <div className="text-center mb-8">
          <p className="text-lg text-neutral-600">
            Assista aos nossos vídeos tutoriais e aprenda a usar o Tuggi de forma eficiente.
          </p>
        </div>
      }
    />
  );
};

// Example 4: Products page integration
export const ProductsPageVideoSection: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* Main tutorial section */}
      <YouTubePlaylistSection
        playlistId="YOUR_PLAYLIST_ID_HERE"
        title="Tutoriais Completos"
        description="Aprenda a usar todas as funcionalidades do Tuggi com nossos tutoriais passo a passo."
        maxResults={9}
        showDescription={true}
        showViewAll={true}
        layout="grid"
        variant="default"
        currentLanguage="PT"
      />
      
      {/* Quick tips section */}
      <YouTubePlaylistSection
        playlistId="YOUR_QUICK_TIPS_PLAYLIST_ID"
        title="Dicas Rápidas"
        description="Dicas práticas para otimizar seu uso do Tuggi."
        maxResults={6}
        showDescription={false}
        showViewAll={true}
        layout="grid"
        variant="compact"
        currentLanguage="PT"
        className="bg-gradient-to-br from-tuggi-primary/5 to-tuggi-secondary/5 rounded-3xl p-8"
      />
    </div>
  );
};

// Example 5: Multilingual support
export const MultilingualVideoSection: React.FC<{ language: string }> = ({ language }) => {
  const getContent = (lang: string) => {
    const content: Record<string, any> = {
      PT: {
        title: "Como o Tuggi Funciona",
        description: "Descubra como nossa plataforma pode transformar a gestão de documentos da sua empresa."
      },
      EN: {
        title: "How Tuggi Works",
        description: "Discover how our platform can transform your company's document management."
      },
      ES: {
        title: "Cómo Funciona Tuggi",
        description: "Descubre cómo nuestra plataforma puede transformar la gestión de documentos de tu empresa."
      }
    };
    return content[lang] || content['PT'];
  };

  const content = getContent(language);

  return (
    <YouTubePlaylistSection
      playlistId="YOUR_PLAYLIST_ID_HERE"
      title={content.title}
      description={content.description}
      maxResults={6}
      showDescription={true}
      showViewAll={true}
      layout="grid"
      variant="default"
      currentLanguage={language}
    />
  );
};

// Example 6: Custom video click handler
export const CustomVideoHandlerSection: React.FC = () => {
  const handleVideoClick = (video: any) => {
    // Custom analytics or tracking
    // Video clicked
    
    // You could also navigate to a custom video page
    // navigate(`/videos/${video.videoId}`);
    
    // Or trigger custom modals/actions
    // showCustomModal(video);
  };

  return (
    <YouTubePlaylistSection
      playlistId="YOUR_PLAYLIST_ID_HERE"
      title="Vídeos Interativos"
      description="Clique nos vídeos para uma experiência personalizada."
      maxResults={6}
      showDescription={true}
      showViewAll={true}
      layout="grid"
      variant="default"
      currentLanguage="PT"
      onVideoClick={handleVideoClick}
    />
  );
};

// Example 7: Integration with existing page sections
export const IntegratedPageExample: React.FC = () => {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-4xl font-bold mb-6">Aprenda a Usar o Tuggi</h1>
        <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
          Transforme a gestão de documentos da sua empresa com nossa plataforma intuitiva.
        </p>
      </section>

      {/* Featured Video */}
      <FeaturedVideoCarousel />

      {/* Main Tutorials */}
      <HomePageVideoSection />

      {/* Quick Tips */}
      <section className="bg-neutral-50 py-16 rounded-3xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CompactVideoSection />
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-16">
        <h2 className="text-3xl font-bold mb-6">Pronto para Começar?</h2>
        <p className="text-lg text-neutral-600 mb-8">
          Experimente o Tuggi gratuitamente e veja como podemos ajudar sua empresa.
        </p>
        <button className="px-8 py-3 bg-tuggi-primary text-white rounded-lg hover:bg-tuggi-primary/90 transition-colors duration-200">
          Começar Agora
        </button>
      </section>
    </div>
  );
};

// Configuration helper for different environments
export const getPlaylistConfig = (environment: 'development' | 'production') => {
  const configs = {
    development: {
      mainPlaylist: 'PLrAXtmRdnEQy8Q8Q8Q8Q8Q8Q8Q8Q8Q8Q', // Example playlist ID
      quickTipsPlaylist: 'PLrAXtmRdnEQy9Q9Q9Q9Q9Q9Q9Q9Q9Q9Q',
      featuredPlaylist: 'PLrAXtmRdnEQy7Q7Q7Q7Q7Q7Q7Q7Q7Q7Q'
    },
    production: {
      mainPlaylist: 'YOUR_PRODUCTION_MAIN_PLAYLIST_ID',
      quickTipsPlaylist: 'YOUR_PRODUCTION_TIPS_PLAYLIST_ID', 
      featuredPlaylist: 'YOUR_PRODUCTION_FEATURED_PLAYLIST_ID'
    }
  };
  
  return configs[environment];
};

// Usage instructions and best practices
export const USAGE_INSTRUCTIONS = {
  setup: [
    '1. Obtenha uma chave da API do YouTube Data v3 no Google Cloud Console',
    '2. Configure a variável de ambiente VITE_YOUTUBE_API_KEY',
    '3. Substitua os IDs de playlist de exemplo pelos IDs reais',
    '4. Teste os componentes em diferentes tamanhos de tela',
    '5. Configure analytics personalizados se necessário'
  ],
  
  bestPractices: [
    'Use maxResults entre 3-12 para melhor performance',
    'Considere usar variant="compact" em espaços limitados',
    'Implemente tratamento de erro personalizado para melhor UX',
    'Use currentLanguage para suporte multilíngue',
    'Configure analytics para rastrear engajamento com vídeos',
    'Teste a responsividade em diferentes dispositivos',
    'Use customContent para adicionar contexto específico da página'
  ],
  
  performance: [
    'Os componentes usam lazy loading para thumbnails',
    'Vídeos são carregados apenas quando o modal é aberto',
    'Use React.memo() se necessário para otimizar re-renders',
    'Configure cache adequado para requisições da API',
    'Monitore o uso da quota da API do YouTube'
  ]
};