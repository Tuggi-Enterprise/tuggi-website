/**
 * YouTube Data API v3 Types
 * 
 * TypeScript interfaces for YouTube API responses and video data
 */

// YouTube API Response Types
export interface YouTubeApiResponse {
  kind: string;
  etag: string;
  nextPageToken?: string;
  prevPageToken?: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: YouTubePlaylistItem[];
}

export interface YouTubePlaylistItem {
  kind: string;
  etag: string;
  id: string;
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: YouTubeThumbnails;
    channelTitle: string;
    playlistId: string;
    position: number;
    resourceId: {
      kind: string;
      videoId: string;
    };
    videoOwnerChannelTitle?: string;
    videoOwnerChannelId?: string;
  };
  contentDetails?: {
    videoId: string;
    startAt?: string;
    endAt?: string;
    note?: string;
    videoPublishedAt: string;
  };
}

export interface YouTubeThumbnails {
  default: YouTubeThumbnail;
  medium: YouTubeThumbnail;
  high: YouTubeThumbnail;
  standard?: YouTubeThumbnail;
  maxres?: YouTubeThumbnail;
}

export interface YouTubeThumbnail {
  url: string;
  width: number;
  height: number;
}

// Processed Video Data Types
export interface ProcessedVideo {
  id: string;
  videoId: string;
  title: string;
  description: string;
  thumbnail: {
    url: string;
    width: number;
    height: number;
  };
  publishedAt: string;
  channelTitle: string;
  duration?: string;
  viewCount?: string;
  likeCount?: string;
  url: string;
  embedUrl: string;
}

// Component Props Types
export interface YouTubePlaylistSectionProps {
  playlistId: string;
  title?: string;
  description?: string;
  maxResults?: number;
  showDescription?: boolean;
  showViewAll?: boolean;
  layout?: 'grid' | 'list' | 'carousel';
  variant?: 'default' | 'compact' | 'featured';
  currentLanguage?: string;
  className?: string;
  onVideoClick?: (video: ProcessedVideo) => void;
  customContent?: React.ReactNode;
}

export interface YouTubeVideoCardProps {
  video: ProcessedVideo;
  onClick?: (video: ProcessedVideo) => void;
  showDescription?: boolean;
  className?: string;
}

export interface YouTubeVideoModalProps {
  video: ProcessedVideo | null;
  isOpen: boolean;
  onClose: () => void;
  currentLanguage?: string;
}

// Hook Types
export interface UseYouTubePlaylistOptions {
  playlistId: string;
  maxResults?: number;
  apiKey: string;
}

export interface UseYouTubePlaylistReturn {
  videos: ProcessedVideo[];
  loading: boolean;
  error: string | null;
  hasNextPage: boolean;
  totalResults: number | null;
  refetch: () => void;
}

// API Configuration
export interface YouTubeApiConfig {
  apiKey: string;
  baseUrl: string;
  defaultMaxResults: number;
}

// Error Types
export interface YouTubeApiError {
  code: number;
  message: string;
  errors?: Array<{
    domain: string;
    reason: string;
    message: string;
  }>;
}

// Localized Content Types
export interface YouTubeLocalizedContent {
  title: string;
  description?: string;
  loadMore: string;
  watchVideo: string;
  closeModal: string;
  publishedOn: string;
  duration: string;
  viewCount: string;
  errorTitle: string;
  errorMessage: string;
  retryButton: string;
  loadingMessage: string;
  noVideosMessage: string;
}

// Skeleton Types
export interface YouTubeVideoSkeletonProps {
  count?: number;
  variant?: 'default' | 'compact' | 'featured';
  layout?: 'grid' | 'list';
  className?: string;
}

// Analytics Types
export interface YouTubeVideoAnalytics {
  videoId: string;
  action: 'view' | 'click' | 'play' | 'share';
  timestamp: string;
  language: string;
  source: string;
}