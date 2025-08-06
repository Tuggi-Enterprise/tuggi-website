/**
 * YouTubePlaylistSection Component
 * 
 * Main component for displaying YouTube playlist videos with various layouts and features
 */

import React, { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight, Grid, List, Play, ExternalLink, RefreshCw } from 'lucide-react';
import { useYouTubePlaylist } from '../hooks/useYouTubePlaylist';
import { ProcessedVideo, YouTubePlaylistSectionProps } from '../types/youtube';
import YouTubeVideoCard from './YouTubeVideoCard';
import YouTubeVideoModal from './YouTubeVideoModal';
import YouTubeVideoSkeleton from './YouTubeVideoSkeleton';
import { trackVideoAnalytics } from '../utils/youtube';
import { layout, gradients } from '../utils/designSystem';

const YouTubePlaylistSection: React.FC<YouTubePlaylistSectionProps> = ({
  playlistId,
  title,
  description,
  maxResults = 6,
  showDescription = true,
  showViewAll = true,
  layout: layoutType = 'grid',
  variant = 'default',
  currentLanguage = 'PT',
  className = '',
  onVideoClick,
  customContent
}) => {
  const [selectedVideo, setSelectedVideo] = useState<ProcessedVideo | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>(layoutType === 'carousel' ? 'grid' : layoutType);

  // Fetch playlist data
  const { 
    videos, 
    loading, 
    error, 
    hasNextPage, 
    totalResults, 
    refetch 
  } = useYouTubePlaylist({
    playlistId: playlistId!,
    maxResults: layoutType === 'carousel' ? maxResults : Math.min(maxResults, 50),
    apiKey: import.meta.env.VITE_YOUTUBE_API_KEY || ''
  });

  // Get localized labels
  const getLabels = (language: string) => {
    const labels: Record<string, any> = {
      PT: {
        viewAll: 'Ver todos',
        viewOnYouTube: 'Ver no YouTube',
        refresh: 'Atualizar',
        toggleGrid: 'Visualização em grade',
        toggleList: 'Visualização em lista',
        previous: 'Anterior',
        next: 'Próximo',
        noVideos: 'Nenhum vídeo encontrado',
        errorLoading: 'Erro ao carregar vídeos',
        tryAgain: 'Tentar novamente',
        showingResults: 'Mostrando {current} de {total} vídeos',
        loadMore: 'Carregar mais'
      },
      EN: {
        viewAll: 'View all',
        viewOnYouTube: 'View on YouTube',
        refresh: 'Refresh',
        toggleGrid: 'Grid view',
        toggleList: 'List view',
        previous: 'Previous',
        next: 'Next',
        noVideos: 'No videos found',
        errorLoading: 'Error loading videos',
        tryAgain: 'Try again',
        showingResults: 'Showing {current} of {total} videos',
        loadMore: 'Load more'
      },
      ES: {
        viewAll: 'Ver todos',
        viewOnYouTube: 'Ver en YouTube',
        refresh: 'Actualizar',
        toggleGrid: 'Vista de cuadrícula',
        toggleList: 'Vista de lista',
        previous: 'Anterior',
        next: 'Siguiente',
        noVideos: 'No se encontraron videos',
        errorLoading: 'Error al cargar videos',
        tryAgain: 'Intentar de nuevo',
        showingResults: 'Mostrando {current} de {total} videos',
        loadMore: 'Cargar más'
      }
    };
    return labels[language] || labels['PT'];
  };

  const labels = getLabels(currentLanguage);

  // Handle video click
  const handleVideoClick = (video: ProcessedVideo) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
    
    if (onVideoClick) {
      onVideoClick(video);
    }
  };

  // Handle modal close
  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

  // Pagination for carousel
  const itemsPerPage = layoutType === 'carousel' ? Math.min(maxResults, 3) : maxResults;
  const totalPages = Math.ceil(videos.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentVideos = layoutType === 'carousel' ? videos.slice(startIndex, endIndex) : videos;

  // Handle pagination
  const handlePrevious = () => {
    setCurrentPage(prev => Math.max(1, prev - 1));
  };

  const handleNext = () => {
    setCurrentPage(prev => Math.min(totalPages, prev + 1));
  };

  // View all playlist on YouTube
  const viewAllOnYouTube = () => {
    window.open(`https://www.youtube.com/playlist?list=${playlistId}`, '_blank');
    trackVideoAnalytics(playlistId!, 'view_all_youtube', currentLanguage);
  };

  // Refresh playlist
  const handleRefresh = () => {
    refetch();
    trackVideoAnalytics(playlistId!, 'refresh', currentLanguage);
  };

  // Get grid classes based on variant and view mode
  const getGridClasses = () => {
    if (viewMode === 'list') {
      return 'space-y-4';
    }
    
    if (layoutType === 'carousel') {
      return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6';
    }
    
    switch (variant) {
      case 'compact':
        return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4';
      case 'featured':
        return 'grid grid-cols-1 md:grid-cols-2 gap-8';
      default:
        return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6';
    }
  };

  return (
    <section className={`py-16 lg:py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div className="flex-1">
            {title && (
              <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
                {title}
              </h2>
            )}
            {description && showDescription && (
              <p className="text-lg text-neutral-600 max-w-3xl leading-relaxed">
                {description}
              </p>
            )}
          </div>
          
          {/* Controls */}
          <div className="flex items-center space-x-3 mt-4 lg:mt-0">
            {/* View Mode Toggle */}
            {layoutType !== 'carousel' && (
              <div className="flex items-center bg-neutral-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded transition-colors duration-200 ${
                    viewMode === 'grid'
                      ? 'bg-white text-tuggi-primary shadow-sm'
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                  aria-label={labels.toggleGrid}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded transition-colors duration-200 ${
                    viewMode === 'list'
                      ? 'bg-white text-tuggi-primary shadow-sm'
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                  aria-label={labels.toggleList}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            )}
            
            {/* Refresh Button */}
            <button
              onClick={handleRefresh}
              disabled={loading}
              className="p-2 text-neutral-600 hover:text-tuggi-primary hover:bg-neutral-100 rounded-lg transition-colors duration-200 disabled:opacity-50"
              aria-label={labels.refresh}
            >
              <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
            </button>
            
            {/* View All Button */}
            {showViewAll && (
              <button
                onClick={viewAllOnYouTube}
                className="flex items-center space-x-2 px-4 py-2 bg-tuggi-primary text-white rounded-lg hover:bg-tuggi-primary/90 transition-colors duration-200"
              >
                <ExternalLink className="w-4 h-4" />
                <span>{labels.viewAll}</span>
              </button>
            )}
          </div>
        </div>

        {/* Custom Content */}
        {customContent && (
          <div className="mb-8">
            {customContent}
          </div>
        )}

        {/* Content */}
        {loading ? (
          <YouTubeVideoSkeleton 
              count={maxResults} 
              variant={variant}
              layout={viewMode}
            />
        ) : error ? (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ExternalLink className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                {labels.errorLoading}
              </h3>
              <p className="text-neutral-600 mb-4">
                {error}
              </p>
              <button
                onClick={handleRefresh}
                className="px-6 py-2 bg-tuggi-primary text-white rounded-lg hover:bg-tuggi-primary/90 transition-colors duration-200"
              >
                {labels.tryAgain}
              </button>
            </div>
          </div>
        ) : videos.length === 0 ? (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="w-8 h-8 text-neutral-400" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                {labels.noVideos}
              </h3>
            </div>
          </div>
        ) : (
          <>
            {/* Videos Grid/List */}
            <div className={getGridClasses()}>
              {currentVideos.map((video) => (
                <YouTubeVideoCard
                  key={video.videoId}
                  video={video}
                  onClick={handleVideoClick}
                  showDescription={showDescription}
                  currentLanguage={currentLanguage}
                  variant={viewMode === 'list' ? 'compact' : variant}
                />
              ))}
            </div>

            {/* Carousel Navigation */}
            {layoutType === 'carousel' && totalPages > 1 && (
              <div className="flex items-center justify-center space-x-4 mt-8">
                <button
                  onClick={handlePrevious}
                  disabled={currentPage === 1}
                  className="p-2 text-neutral-600 hover:text-tuggi-primary hover:bg-neutral-100 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label={labels.previous}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                
                <div className="flex items-center space-x-2">
                  {Array.from({ length: totalPages }, (_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                        currentPage === i + 1
                          ? 'bg-tuggi-primary'
                          : 'bg-neutral-300 hover:bg-neutral-400'
                      }`}
                      aria-label={`Página ${i + 1}`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={handleNext}
                  disabled={currentPage === totalPages}
                  className="p-2 text-neutral-600 hover:text-tuggi-primary hover:bg-neutral-100 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label={labels.next}
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}

            {/* Results Info */}
            {totalResults && layoutType !== 'carousel' && (
              <div className="text-center mt-8 text-sm text-neutral-600">
                {labels.showingResults
                  .replace('{current}', videos.length.toString())
                  .replace('{total}', totalResults.toString())}
              </div>
            )}
          </>
        )}
      </div>

      {/* Video Modal */}
      <YouTubeVideoModal
        video={selectedVideo}
        isOpen={isModalOpen}
        onClose={handleModalClose}
        currentLanguage={currentLanguage}
      />
    </section>
  );
};

export default YouTubePlaylistSection;