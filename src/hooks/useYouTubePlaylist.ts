/**
 * useYouTubePlaylist Hook
 * 
 * Custom React hook for fetching and managing YouTube playlist data
 */

import { useState, useEffect, useCallback } from 'react';
import {
  ProcessedVideo,
  UseYouTubePlaylistOptions,
  UseYouTubePlaylistReturn
} from '../types/youtube';
import {
  fetchPlaylistItems,
  processYouTubeVideos,
  fetchVideoDetails
} from '../utils/youtube';

/**
 * Custom hook for fetching YouTube playlist data
 */
export function useYouTubePlaylist({
  playlistId,
  maxResults = 12,
  apiKey
}: UseYouTubePlaylistOptions): UseYouTubePlaylistReturn {
  const [videos, setVideos] = useState<ProcessedVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [nextPageToken, setNextPageToken] = useState<string | undefined>();
  const [hasMore, setHasMore] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  /**
   * Fetch videos from YouTube playlist
   */
  const fetchVideos = useCallback(async (
    pageToken?: string,
    append: boolean = false
  ) => {
    if (!playlistId || !apiKey) {
      setError('Playlist ID and API key are required');
      setLoading(false);
      return;
    }

    try {
      if (!append) {
        setLoading(true);
        setError(null);
      } else {
        setIsLoadingMore(true);
      }

      // Fetch playlist items
      const response = await fetchPlaylistItems(playlistId, maxResults, pageToken);
      
      if (!response.items || response.items.length === 0) {
        if (!append) {
          setVideos([]);
          setError('No videos found in this playlist');
        }
        return;
      }

      // Process video data
      const processedVideos = processYouTubeVideos(response.items);
      
      // Fetch additional video details (duration, view count, etc.)
      const videoIds = processedVideos.map(video => video.videoId);
      const videoDetails = await fetchVideoDetails(videoIds);
      
      // Merge video details with processed videos
      const enrichedVideos = processedVideos.map(video => ({
        ...video,
        duration: videoDetails[video.videoId]?.duration || '',
        viewCount: videoDetails[video.videoId]?.viewCount || '',
        likeCount: videoDetails[video.videoId]?.likeCount || ''
      }));

      // Update state
      if (append) {
        setVideos(prev => [...prev, ...enrichedVideos]);
      } else {
        setVideos(enrichedVideos);
      }

      // Update pagination info
      setNextPageToken(response.nextPageToken);
      setHasMore(!!response.nextPageToken);
      
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch YouTube videos';
      setError(errorMessage);
      console.error('YouTube API Error:', err);
    } finally {
      setLoading(false);
      setIsLoadingMore(false);
    }
  }, [playlistId, maxResults, apiKey]);

  /**
   * Load more videos (pagination)
   */
  const loadMore = useCallback(() => {
    if (hasMore && !isLoadingMore && nextPageToken) {
      fetchVideos(nextPageToken, true);
    }
  }, [hasMore, isLoadingMore, nextPageToken, fetchVideos]);

  /**
   * Refresh the playlist data
   */
  const refresh = useCallback(() => {
    setVideos([]);
    setNextPageToken(undefined);
    setHasMore(false);
    fetchVideos();
  }, [fetchVideos]);

  // Initial fetch
  useEffect(() => {
    fetchVideos();
  }, [fetchVideos]);

  return {
    videos,
    loading,
    error,
    hasNextPage: hasMore,
    totalResults: null,
    refetch: refresh
  };
}

/**
 * Simplified hook for basic playlist fetching
 */
export function useSimpleYouTubePlaylist(playlistId: string, maxResults?: number) {
  const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY || '';
  
  return useYouTubePlaylist({
    playlistId,
    maxResults,
    apiKey
  });
}

/**
 * Hook for multiple playlists
 */
export function useMultipleYouTubePlaylists(playlistIds: string[], maxResults?: number) {
  const [allVideos, setAllVideos] = useState<Record<string, ProcessedVideo[]>>({});
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY || '';

  useEffect(() => {
    const fetchAllPlaylists = async () => {
      setLoading(true);
      const results: Record<string, ProcessedVideo[]> = {};
      const errorResults: Record<string, string> = {};

      await Promise.allSettled(
        playlistIds.map(async (playlistId) => {
          try {
            const response = await fetchPlaylistItems(playlistId, maxResults);
            const processedVideos = processYouTubeVideos(response.items || []);
            
            // Fetch video details
            const videoIds = processedVideos.map(video => video.videoId);
            const videoDetails = await fetchVideoDetails(videoIds);
            
            // Merge details
            const enrichedVideos = processedVideos.map(video => ({
              ...video,
              duration: videoDetails[video.videoId]?.duration || '',
              viewCount: videoDetails[video.videoId]?.viewCount || '',
              likeCount: videoDetails[video.videoId]?.likeCount || ''
            }));
            
            results[playlistId] = enrichedVideos;
          } catch (error) {
            errorResults[playlistId] = error instanceof Error ? error.message : 'Failed to fetch playlist';
          }
        })
      );

      setAllVideos(results);
      setErrors(errorResults);
      setLoading(false);
    };

    if (playlistIds.length > 0 && apiKey) {
      fetchAllPlaylists();
    }
  }, [playlistIds, maxResults, apiKey]);

  return {
    playlists: allVideos,
    loading,
    errors
  };
}

/**
 * Hook for searching within playlist videos
 */
export function useYouTubePlaylistSearch(playlistId: string, searchTerm: string) {
  const { videos, loading, error } = useSimpleYouTubePlaylist(playlistId);
  const [filteredVideos, setFilteredVideos] = useState<ProcessedVideo[]>([]);

  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredVideos(videos);
      return;
    }

    const filtered = videos.filter(video => 
      video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      video.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    setFilteredVideos(filtered);
  }, [videos, searchTerm]);

  return {
    videos: filteredVideos,
    loading,
    error,
    totalVideos: videos.length,
    filteredCount: filteredVideos.length
  };
}