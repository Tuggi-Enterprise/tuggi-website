/**
 * YouTubeVideoModal Component
 * 
 * Modal component for playing YouTube videos with enhanced UX
 */

import React, { useEffect, useRef, useState } from 'react';
import { X, ExternalLink, Share2, ThumbsUp, Eye, Calendar, Clock } from 'lucide-react';
import { ProcessedVideo } from '../types/youtube';
import { formatPublishedDate, trackVideoAnalytics } from '../utils/youtube';

interface YouTubeVideoModalProps {
  video: ProcessedVideo | null;
  isOpen: boolean;
  onClose: () => void;
  currentLanguage?: string;
  autoplay?: boolean;
}

const YouTubeVideoModal: React.FC<YouTubeVideoModalProps> = ({
  video,
  isOpen,
  onClose,
  currentLanguage = 'PT',
  autoplay = true
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showShareMenu, setShowShareMenu] = useState(false);

  // Get localized labels
  const getLabels = (language: string) => {
    const labels: Record<string, any> = {
      PT: {
        closeModal: 'Fechar modal',
        openOnYouTube: 'Abrir no YouTube',
        shareVideo: 'Compartilhar vídeo',
        copyLink: 'Copiar link',
        linkCopied: 'Link copiado!',
        views: 'visualizações',
        likes: 'curtidas',
        publishedOn: 'Publicado em',
        duration: 'Duração',
        loading: 'Carregando vídeo...'
      },
      EN: {
        closeModal: 'Close modal',
        openOnYouTube: 'Open on YouTube',
        shareVideo: 'Share video',
        copyLink: 'Copy link',
        linkCopied: 'Link copied!',
        views: 'views',
        likes: 'likes',
        publishedOn: 'Published on',
        duration: 'Duration',
        loading: 'Loading video...'
      },
      ES: {
        closeModal: 'Cerrar modal',
        openOnYouTube: 'Abrir en YouTube',
        shareVideo: 'Compartir video',
        copyLink: 'Copiar enlace',
        linkCopied: '¡Enlace copiado!',
        views: 'visualizaciones',
        likes: 'me gusta',
        publishedOn: 'Publicado el',
        duration: 'Duración',
        loading: 'Cargando video...'
      }
    };
    return labels[language] || labels['PT'];
  };

  const labels = getLabels(currentLanguage);

  // Handle escape key and outside click
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
      
      // Track modal open
      if (video) {
        trackVideoAnalytics(video.videoId, 'modal_open', currentLanguage);
      }
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, video, currentLanguage]);

  // Reset loading state when video changes
  useEffect(() => {
    if (video) {
      setIsLoading(true);
    }
  }, [video]);

  // Handle iframe load
  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  // Handle share functionality
  const handleShare = async () => {
    if (!video) return;

    const shareData = {
      title: video.title,
      text: video.description,
      url: `https://www.youtube.com/watch?v=${video.videoId}`
    };

    if (navigator.share && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
        trackVideoAnalytics(video.videoId, 'share_native', currentLanguage);
      } catch (error) {
        console.log('Share cancelled');
      }
    } else {
      setShowShareMenu(!showShareMenu);
    }
  };

  // Copy link to clipboard
  const copyLink = async () => {
    if (!video) return;

    try {
      await navigator.clipboard.writeText(`https://www.youtube.com/watch?v=${video.videoId}`);
      trackVideoAnalytics(video.videoId, 'copy_link', currentLanguage);
      
      // Show feedback
      const button = document.getElementById('copy-link-btn');
      if (button) {
        const originalText = button.textContent;
        button.textContent = labels.linkCopied;
        setTimeout(() => {
          button.textContent = originalText;
        }, 2000);
      }
    } catch (error) {
      console.error('Failed to copy link:', error);
    }
  };

  // Open on YouTube
  const openOnYouTube = () => {
    if (!video) return;
    
    window.open(`https://www.youtube.com/watch?v=${video.videoId}`, '_blank');
    trackVideoAnalytics(video.videoId, 'open_youtube', currentLanguage);
  };

  if (!isOpen || !video) {
    return null;
  }

  const embedUrl = `https://www.youtube.com/embed/${video.videoId}?${new URLSearchParams({
    autoplay: autoplay ? '1' : '0',
    rel: '0',
    modestbranding: '1',
    playsinline: '1'
  }).toString()}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div 
        ref={modalRef}
        className="relative w-full max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300"
        role="dialog"
        aria-modal="true"
        aria-labelledby="video-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-neutral-200">
          <div className="flex-1 min-w-0 mr-4">
            <h2 id="video-title" className="text-lg font-bold text-neutral-900 truncate">
              {video.title}
            </h2>
            <div className="flex items-center space-x-4 mt-1 text-sm text-neutral-600">
              {video.viewCount && (
                <span className="flex items-center space-x-1">
                  <Eye className="w-4 h-4" />
                  <span>{video.viewCount} {labels.views}</span>
                </span>
              )}
              {video.likeCount && (
                <span className="flex items-center space-x-1">
                  <ThumbsUp className="w-4 h-4" />
                  <span>{video.likeCount} {labels.likes}</span>
                </span>
              )}
              <span className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{formatPublishedDate(video.publishedAt, currentLanguage)}</span>
              </span>
              {video.duration && (
                <span className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{video.duration}</span>
                </span>
              )}
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            <button
              onClick={handleShare}
              className="p-2 text-neutral-600 hover:text-tuggi-primary hover:bg-neutral-100 rounded-lg transition-colors duration-200"
              aria-label={labels.shareVideo}
            >
              <Share2 className="w-5 h-5" />
            </button>
            
            <button
              onClick={openOnYouTube}
              className="p-2 text-neutral-600 hover:text-tuggi-primary hover:bg-neutral-100 rounded-lg transition-colors duration-200"
              aria-label={labels.openOnYouTube}
            >
              <ExternalLink className="w-5 h-5" />
            </button>
            
            <button
              onClick={onClose}
              className="p-2 text-neutral-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
              aria-label={labels.closeModal}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Share Menu */}
        {showShareMenu && (
          <div className="absolute top-16 right-4 bg-white rounded-lg shadow-lg border border-neutral-200 p-2 z-10">
            <button
              id="copy-link-btn"
              onClick={copyLink}
              className="w-full text-left px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-100 rounded transition-colors duration-200"
            >
              {labels.copyLink}
            </button>
          </div>
        )}

        {/* Video Container */}
        <div className="relative bg-black">
          {/* Loading State */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-neutral-100">
              <div className="text-center">
                <div className="w-12 h-12 border-4 border-tuggi-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-neutral-600">{labels.loading}</p>
              </div>
            </div>
          )}
          
          {/* YouTube Iframe */}
          <iframe
            src={embedUrl}
            title={video.title}
            className="w-full aspect-video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            onLoad={handleIframeLoad}
          />
        </div>

        {/* Description */}
        {video.description && (
          <div className="p-4 border-t border-neutral-200 max-h-32 overflow-y-auto">
            <p className="text-sm text-neutral-700 leading-relaxed whitespace-pre-wrap">
              {video.description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default YouTubeVideoModal;