/**
 * YouTube API Utilities
 * 
 * Helper functions for YouTube Data API v3 integration
 */

import {
  YouTubeApiResponse,
  YouTubePlaylistItem,
  ProcessedVideo,
  YouTubeApiError,
  YouTubeApiConfig
} from '../types/youtube';

// API Configuration
const YOUTUBE_API_CONFIG: YouTubeApiConfig = {
  apiKey: import.meta.env.VITE_YOUTUBE_API_KEY || '',
  baseUrl: 'https://www.googleapis.com/youtube/v3',
  defaultMaxResults: 12
};

/**
 * Fetch playlist items from YouTube Data API v3
 */
export async function fetchPlaylistItems(
  playlistId: string,
  maxResults: number = YOUTUBE_API_CONFIG.defaultMaxResults,
  pageToken?: string
): Promise<YouTubeApiResponse> {
  if (!YOUTUBE_API_CONFIG.apiKey) {
    throw new Error('YouTube API key is not configured. Please set VITE_YOUTUBE_API_KEY in your environment variables.');
  }

  const params = new URLSearchParams({
    part: 'snippet,contentDetails',
    playlistId,
    key: YOUTUBE_API_CONFIG.apiKey,
    maxResults: maxResults.toString(),
    ...(pageToken && { pageToken })
  });

  const url = `${YOUTUBE_API_CONFIG.baseUrl}/playlistItems?${params}`;

  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      const errorData: YouTubeApiError = await response.json();
      throw new Error(`YouTube API Error: ${errorData.message || 'Unknown error'}`);
    }

    const data: YouTubeApiResponse = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Failed to fetch YouTube playlist data');
  }
}

/**
 * Process raw YouTube API data into a more usable format
 */
export function processYouTubeVideos(items: YouTubePlaylistItem[]): ProcessedVideo[] {
  return items
    .filter(item => item.snippet?.resourceId?.videoId) // Filter out invalid items
    .map(item => {
      const { snippet, contentDetails } = item;
      const videoId = snippet.resourceId.videoId;
      
      return {
        id: item.id,
        videoId,
        title: snippet.title,
        description: snippet.description,
        thumbnail: {
          url: snippet.thumbnails.high?.url || snippet.thumbnails.medium?.url || snippet.thumbnails.default.url,
          width: snippet.thumbnails.high?.width || snippet.thumbnails.medium?.width || snippet.thumbnails.default.width,
          height: snippet.thumbnails.high?.height || snippet.thumbnails.medium?.height || snippet.thumbnails.default.height
        },
        publishedAt: snippet.publishedAt,
        channelTitle: snippet.channelTitle,
        url: `https://www.youtube.com/watch?v=${videoId}`,
        embedUrl: `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`
      };
    });
}

/**
 * Get video duration from YouTube API (requires additional API call)
 */
export async function fetchVideoDetails(videoIds: string[]): Promise<Record<string, { duration: string; viewCount: string; likeCount: string }>> {
  if (!YOUTUBE_API_CONFIG.apiKey || videoIds.length === 0) {
    return {};
  }

  const params = new URLSearchParams({
    part: 'contentDetails,statistics',
    id: videoIds.join(','),
    key: YOUTUBE_API_CONFIG.apiKey
  });

  const url = `${YOUTUBE_API_CONFIG.baseUrl}/videos?${params}`;

  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      console.warn('Failed to fetch video details');
      return {};
    }

    const data = await response.json();
    const details: Record<string, { duration: string; viewCount: string; likeCount: string }> = {};

    data.items?.forEach((item: any) => {
      details[item.id] = {
        duration: formatDuration(item.contentDetails?.duration || ''),
        viewCount: formatViewCount(item.statistics?.viewCount || '0'),
        likeCount: formatCount(item.statistics?.likeCount || '0')
      };
    });

    return details;
  } catch (error) {
    console.warn('Error fetching video details:', error);
    return {};
  }
}

/**
 * Format ISO 8601 duration to readable format (e.g., "PT4M13S" -> "4:13")
 */
export function formatDuration(isoDuration: string): string {
  if (!isoDuration) return '';
  
  const match = isoDuration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return '';
  
  const hours = parseInt(match[1] || '0');
  const minutes = parseInt(match[2] || '0');
  const seconds = parseInt(match[3] || '0');
  
  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
  
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

/**
 * Format view count to readable format (e.g., "1234567" -> "1.2M")
 */
export function formatViewCount(count: string): string {
  const num = parseInt(count);
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M`;
  }
  if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}K`;
  }
  return num.toString();
}

/**
 * Format generic count to readable format
 */
export function formatCount(count: string): string {
  const num = parseInt(count);
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M`;
  }
  if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}K`;
  }
  return num.toString();
}

/**
 * Format published date to relative time
 */
export function formatPublishedDate(dateString: string, language: string = 'PT'): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  
  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60
  };
  
  const labels = {
    PT: {
      year: 'ano', years: 'anos',
      month: 'mês', months: 'meses',
      week: 'semana', weeks: 'semanas',
      day: 'dia', days: 'dias',
      hour: 'hora', hours: 'horas',
      minute: 'minuto', minutes: 'minutos',
      ago: 'atrás'
    },
    EN: {
      year: 'year', years: 'years',
      month: 'month', months: 'months',
      week: 'week', weeks: 'weeks',
      day: 'day', days: 'days',
      hour: 'hour', hours: 'hours',
      minute: 'minute', minutes: 'minutes',
      ago: 'ago'
    },
    ES: {
      year: 'año', years: 'años',
      month: 'mes', months: 'meses',
      week: 'semana', weeks: 'semanas',
      day: 'día', days: 'días',
      hour: 'hora', hours: 'horas',
      minute: 'minuto', minutes: 'minutos',
      ago: 'hace'
    }
  };
  
  const currentLabels = labels[language as keyof typeof labels] || labels.PT;
  
  for (const [unit, seconds] of Object.entries(intervals)) {
    const interval = Math.floor(diffInSeconds / seconds);
    if (interval >= 1) {
      const unitLabel = interval === 1 
        ? currentLabels[unit as keyof typeof currentLabels]
        : currentLabels[`${unit}s` as keyof typeof currentLabels];
      
      if (language === 'ES') {
        return `${currentLabels.ago} ${interval} ${unitLabel}`;
      }
      return `${interval} ${unitLabel} ${currentLabels.ago}`;
    }
  }
  
  return language === 'ES' ? 'hace un momento' : 
         language === 'EN' ? 'just now' : 
         'agora mesmo';
}

/**
 * Extract playlist ID from YouTube URL
 */
export function extractPlaylistId(url: string): string | null {
  const patterns = [
    /[?&]list=([a-zA-Z0-9_-]+)/,
    /\/playlist\?list=([a-zA-Z0-9_-]+)/
  ];
  
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) {
      return match[1];
    }
  }
  
  return null;
}

/**
 * Validate YouTube API key format
 */
export function validateApiKey(apiKey: string): boolean {
  // YouTube API keys typically start with 'AIza' and are 39 characters long
  return /^AIza[a-zA-Z0-9_-]{35}$/.test(apiKey);
}

/**
 * Get YouTube video thumbnail URL with fallback
 */
export function getVideoThumbnail(videoId: string, quality: 'default' | 'medium' | 'high' | 'standard' | 'maxres' = 'high'): string {
  return `https://img.youtube.com/vi/${videoId}/${quality === 'high' ? 'hqdefault' : quality === 'medium' ? 'mqdefault' : 'default'}.jpg`;
}

/**
 * Track YouTube video analytics
 */
export function trackVideoAnalytics(videoId: string, action: string, language: string): void {
  // Integration with existing analytics system
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'youtube_video_interaction', {
      event_category: 'YouTube',
      event_label: videoId,
      video_action: action,
      language: language,
      timestamp: new Date().toISOString()
    });
  }
}