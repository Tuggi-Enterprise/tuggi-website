/**
 * YouTubeVideoCard Component
 * 
 * Individual video card component for YouTube videos
 */

import React from 'react';
import { Play, Clock, Eye, Calendar } from 'lucide-react';
import { ProcessedVideo } from '../types/youtube';
import { formatPublishedDate, trackVideoAnalytics } from '../utils/youtube';
import { gradients } from '../utils/designSystem';

interface YouTubeVideoCardProps {
  video: ProcessedVideo;
  onClick?: (video: ProcessedVideo) => void;
  showDescription?: boolean;
  currentLanguage?: string;
  className?: string;
  variant?: 'default' | 'compact' | 'featured';
}

const YouTubeVideoCard: React.FC<YouTubeVideoCardProps> = ({
  video,
  onClick,
  showDescription = true,
  currentLanguage = 'PT',
  className = '',
  variant = 'default'
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick(video);
      trackVideoAnalytics(video.videoId, 'click', currentLanguage);
    }
  };

  const handlePlayClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onClick) {
      onClick(video);
      trackVideoAnalytics(video.videoId, 'play', currentLanguage);
    }
  };

  // Truncate text helper
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
  };

  // Get localized labels
  const getLabels = (language: string) => {
    const labels: Record<string, any> = {
      PT: {
        watchVideo: 'Assistir vídeo',
        views: 'visualizações',
        publishedOn: 'Publicado em'
      },
      EN: {
        watchVideo: 'Watch video',
        views: 'views',
        publishedOn: 'Published on'
      },
      ES: {
        watchVideo: 'Ver video',
        views: 'visualizaciones',
        publishedOn: 'Publicado el'
      }
    };
    return labels[language] || labels['PT'];
  };

  const labels = getLabels(currentLanguage);

  // Compact variant
  if (variant === 'compact') {
    return (
      <div 
        className={`group flex space-x-4 p-4 bg-white rounded-xl border border-neutral-200 hover:shadow-lg transition-all duration-300 cursor-pointer hover:border-tuggi-primary/20 ${className}`}
        onClick={handleClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && handleClick()}
        aria-label={`${labels.watchVideo}: ${video.title}`}
      >
        {/* Thumbnail */}
        <div className="flex-shrink-0 relative">
          <div className="w-32 h-20 rounded-lg overflow-hidden bg-neutral-100">
            <img
              src={video.thumbnail.url}
              alt={video.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            
            {/* Play Overlay */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center">
                <Play className="w-4 h-4 text-tuggi-primary ml-0.5" fill="currentColor" />
              </div>
            </div>
            
            {/* Duration Badge */}
            {video.duration && (
              <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded">
                {video.duration}
              </div>
            )}
          </div>
        </div>
        
        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-neutral-900 group-hover:text-tuggi-primary transition-colors duration-300 line-clamp-2 mb-1">
            {truncateText(video.title, 80)}
          </h3>
          
          <p className="text-sm text-neutral-600 line-clamp-2 mb-2">
            {truncateText(video.description, 100)}
          </p>
          
          {/* Metadata */}
          <div className="flex items-center space-x-3 text-xs text-neutral-500">
            {video.viewCount && (
              <span className="flex items-center space-x-1">
                <Eye className="w-3 h-3" />
                <span>{video.viewCount} {labels.views}</span>
              </span>
            )}
            <span className="flex items-center space-x-1">
              <Calendar className="w-3 h-3" />
              <span>{formatPublishedDate(video.publishedAt, currentLanguage)}</span>
            </span>
          </div>
        </div>
      </div>
    );
  }

  // Featured variant
  if (variant === 'featured') {
    return (
      <div 
        className={`group relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 cursor-pointer hover:-translate-y-2 ${className}`}
        onClick={handleClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && handleClick()}
        aria-label={`${labels.watchVideo}: ${video.title}`}
      >
        {/* Background Image */}
        <div className="relative aspect-video">
          <img
            src={video.thumbnail.url}
            alt={video.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            loading="lazy"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          
          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={handlePlayClick}
              className="w-20 h-20 bg-white/90 hover:bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-2xl"
              aria-label={labels.watchVideo}
            >
              <Play className="w-8 h-8 text-tuggi-primary ml-1" fill="currentColor" />
            </button>
          </div>
          
          {/* Duration Badge */}
          {video.duration && (
            <div className="absolute top-4 right-4 bg-black/80 text-white text-sm px-3 py-1 rounded-full">
              <Clock className="w-4 h-4 inline mr-1" />
              {video.duration}
            </div>
          )}
        </div>
        
        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-xl font-bold mb-2 line-clamp-2">
            {video.title}
          </h3>
          
          {showDescription && (
            <p className="text-white/90 text-sm line-clamp-2 mb-3">
              {truncateText(video.description, 120)}
            </p>
          )}
          
          {/* Metadata */}
          <div className="flex items-center space-x-4 text-sm text-white/80">
            {video.viewCount && (
              <span className="flex items-center space-x-1">
                <Eye className="w-4 h-4" />
                <span>{video.viewCount}</span>
              </span>
            )}
            <span>{formatPublishedDate(video.publishedAt, currentLanguage)}</span>
          </div>
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div 
      className={`group relative rounded-2xl overflow-hidden bg-white shadow-lg border border-neutral-200 hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-2 hover:border-tuggi-primary/20 ${className}`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleClick()}
      aria-label={`${labels.watchVideo}: ${video.title}`}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video bg-neutral-100">
        <img
          src={video.thumbnail.url}
          alt={video.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        
        {/* Play Overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button
            onClick={handlePlayClick}
            className="w-16 h-16 bg-white/90 hover:bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg"
            aria-label={labels.watchVideo}
          >
            <Play className="w-6 h-6 text-tuggi-primary ml-0.5" fill="currentColor" />
          </button>
        </div>
        
        {/* Duration Badge */}
        {video.duration && (
          <div className="absolute bottom-2 right-2 bg-black/80 text-white text-sm px-2 py-1 rounded">
            {video.duration}
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="p-4">
        <h3 className="font-bold text-lg text-neutral-900 group-hover:text-tuggi-primary transition-colors duration-300 line-clamp-2 mb-2">
          {video.title}
        </h3>
        
        {showDescription && (
          <p className="text-neutral-600 text-sm line-clamp-3 mb-3 leading-relaxed">
            {video.description}
          </p>
        )}
        
        {/* Metadata */}
        <div className="flex items-center justify-between text-sm text-neutral-500">
          <div className="flex items-center space-x-3">
            {video.viewCount && (
              <span className="flex items-center space-x-1">
                <Eye className="w-4 h-4" />
                <span>{video.viewCount}</span>
              </span>
            )}
            <span className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>{formatPublishedDate(video.publishedAt, currentLanguage)}</span>
            </span>
          </div>
        </div>
      </div>
      
      {/* Hover Effect Background */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
        style={{ background: gradients.subtle }}
      ></div>
    </div>
  );
};

export default YouTubeVideoCard;