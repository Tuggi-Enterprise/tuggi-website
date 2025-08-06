/**
 * YouTubeVideoSkeleton Component
 * 
 * Loading skeleton for YouTube video cards
 */

import React from 'react';

import { YouTubeVideoSkeletonProps } from '../types/youtube';

const YouTubeVideoSkeleton: React.FC<YouTubeVideoSkeletonProps> = ({ 
  count = 6,
  className = '',
  variant = 'default',
  layout = 'grid'
}) => {
  const getGridClasses = () => {
    if (layout === 'list') {
      return 'space-y-4';
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
    <div className={`${getGridClasses()} ${className}`}>
      {Array.from({ length: count }).map((_, index) => (
        <SingleVideoSkeleton key={index} variant={variant} layout={layout} />

      ))}
    </div>
  );
};

/**
 * Single Video Card Skeleton
 */
interface SingleVideoSkeletonProps {
  variant?: 'default' | 'compact' | 'featured';
  layout?: 'grid' | 'list';
  className?: string;
}

export const SingleVideoSkeleton: React.FC<SingleVideoSkeletonProps> = ({ 
  variant = 'default',
  layout = 'grid',
  className = ''
}) => {
  if (layout === 'list' || variant === 'compact') {
    return (
      <div className={`group flex space-x-4 p-4 bg-white rounded-xl border border-neutral-200 animate-pulse ${className}`}>
        {/* Thumbnail */}
        <div className="flex-shrink-0">
          <div className="w-32 h-20 rounded-lg bg-neutral-200"></div>
        </div>
        
        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="h-5 bg-neutral-200 rounded mb-2"></div>
          <div className="h-4 bg-neutral-200 rounded w-3/4 mb-2"></div>
          <div className="flex items-center space-x-3">
            <div className="h-3 bg-neutral-200 rounded w-16"></div>
            <div className="h-3 bg-neutral-200 rounded w-20"></div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'featured') {
    return (
      <div className={`relative rounded-3xl overflow-hidden shadow-2xl animate-pulse ${className}`}>
        <div className="aspect-video bg-neutral-200"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="h-6 bg-neutral-300 rounded mb-2"></div>
          <div className="h-4 bg-neutral-300 rounded w-3/4 mb-3"></div>
          <div className="flex items-center space-x-4">
            <div className="h-4 bg-neutral-300 rounded w-20"></div>
            <div className="h-4 bg-neutral-300 rounded w-24"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-2xl shadow-lg border border-neutral-200 overflow-hidden animate-pulse ${className}`}>
      {/* Thumbnail Skeleton */}
      <div className="relative aspect-video bg-neutral-200">
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-200 animate-shimmer"></div>
        
        {/* Play Button Skeleton */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-neutral-300 rounded-full"></div>
        </div>
        
        {/* Duration Badge Skeleton */}
        <div className="absolute bottom-2 right-2">
          <div className="w-12 h-5 bg-neutral-300 rounded"></div>
        </div>
      </div>
      
      {/* Content Skeleton */}
      <div className="p-4 space-y-3">
        {/* Title Skeleton */}
        <div className="space-y-2">
          <div className="h-5 bg-neutral-200 rounded w-full"></div>
          <div className="h-5 bg-neutral-200 rounded w-3/4"></div>
        </div>
        
        {/* Description Skeleton */}
        <div className="space-y-2">
          <div className="h-4 bg-neutral-100 rounded w-full"></div>
          <div className="h-4 bg-neutral-100 rounded w-5/6"></div>
          <div className="h-4 bg-neutral-100 rounded w-2/3"></div>
        </div>
        
        {/* Metadata Skeleton */}
        <div className="flex items-center justify-between pt-2">
          <div className="h-4 bg-neutral-100 rounded w-20"></div>
          <div className="h-4 bg-neutral-100 rounded w-16"></div>
        </div>
      </div>
    </div>
  );
};

/**
 * Compact Video List Skeleton
 */
export const CompactVideoListSkeleton: React.FC<{ count?: number; className?: string }> = ({ 
  count = 4,
  className = ''
}) => {
  return (
    <div className={`space-y-4 ${className}`}>
      {Array.from({ length: count }).map((_, index) => (
        <div 
          key={index}
          className="flex space-x-4 p-4 bg-white rounded-xl border border-neutral-200 animate-pulse"
        >
          {/* Thumbnail Skeleton */}
          <div className="flex-shrink-0">
            <div className="w-32 h-20 bg-neutral-200 rounded-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-200 animate-shimmer"></div>
            </div>
          </div>
          
          {/* Content Skeleton */}
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-neutral-200 rounded w-3/4"></div>
            <div className="h-3 bg-neutral-100 rounded w-full"></div>
            <div className="h-3 bg-neutral-100 rounded w-2/3"></div>
            <div className="flex items-center space-x-4 mt-2">
              <div className="h-3 bg-neutral-100 rounded w-16"></div>
              <div className="h-3 bg-neutral-100 rounded w-12"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

/**
 * Section Header Skeleton
 */
export const SectionHeaderSkeleton: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`text-center mb-8 lg:mb-12 animate-pulse ${className}`}>
      {/* Title Skeleton */}
      <div className="space-y-3 mb-4">
        <div className="h-8 bg-neutral-200 rounded w-2/3 mx-auto"></div>
        <div className="h-8 bg-neutral-200 rounded w-1/2 mx-auto"></div>
      </div>
      
      {/* Description Skeleton */}
      <div className="space-y-2 max-w-4xl mx-auto">
        <div className="h-5 bg-neutral-100 rounded w-full"></div>
        <div className="h-5 bg-neutral-100 rounded w-5/6 mx-auto"></div>
        <div className="h-5 bg-neutral-100 rounded w-3/4 mx-auto"></div>
      </div>
    </div>
  );
};

export default YouTubeVideoSkeleton;