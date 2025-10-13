import React, { useState, useEffect } from 'react';
import { getUserLocationCached, getCachedUserLocation, UserLocation } from '../../utils/seo';

interface LocationDisplayProps {
  language: string;
  className?: string;
}

const LocationDisplay: React.FC<LocationDisplayProps> = ({ language, className = '' }) => {
  const [location, setLocation] = useState<UserLocation | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadLocation = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // First try to get cached location
        const cached = getCachedUserLocation();
        if (cached) {
          setLocation(cached);
          setLoading(false);
          return;
        }
        
        // If no cache, get fresh location
        const userLocation = await getUserLocationCached();
        setLocation(userLocation);
      } catch (err) {
        setError('Unable to detect location');
      } finally {
        setLoading(false);
      }
    };

    loadLocation();
  }, []);

  const getLocationText = () => {
    if (!location) return '';
    
    const parts = [];
    if (location.city) parts.push(location.city);
    if (location.region) parts.push(location.region);
    if (location.country) parts.push(location.country);
    
    return parts.join(', ');
  };

  const getSourceIcon = () => {
    switch (location?.source) {
      case 'geolocation':
        return '📍'; // GPS icon
      case 'ip':
        return '🌐'; // IP icon
      case 'fallback':
        return '🕐'; // Timezone icon
      default:
        return '📍';
    }
  };

  const getSourceText = () => {
    const texts = {
      EN: {
        geolocation: 'GPS Location',
        ip: 'IP Location',
        fallback: 'Timezone Detection',
        loading: 'Detecting location...',
        error: 'Location unavailable',
        unknown: 'Unknown location'
      },
      PT: {
        geolocation: 'Localização GPS',
        ip: 'Localização por IP',
        fallback: 'Detecção por Fuso Horário',
        loading: 'Detectando localização...',
        error: 'Localização indisponível',
        unknown: 'Localização desconhecida'
      },
      ES: {
        geolocation: 'Ubicación GPS',
        ip: 'Ubicación por IP',
        fallback: 'Detección por Zona Horaria',
        loading: 'Detectando ubicación...',
        error: 'Ubicación no disponible',
        unknown: 'Ubicación desconocida'
      }
    };

    const langTexts = texts[language as keyof typeof texts] || texts.EN;
    
    if (loading) return langTexts.loading;
    if (error) return langTexts.error;
    if (!location) return langTexts.unknown;
    
    return langTexts[location.source as keyof typeof langTexts] || langTexts.unknown;
  };

  if (loading) {
    return (
      <div className={`flex items-center space-x-2 text-sm text-gray-500 ${className}`}>
        <div className="animate-spin w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full"></div>
        <span>{getSourceText()}</span>
      </div>
    );
  }

  if (error || !location) {
    return (
      <div className={`flex items-center space-x-2 text-sm text-gray-400 ${className}`}>
        <span>❌</span>
        <span>{getSourceText()}</span>
      </div>
    );
  }

  return (
    <div className={`flex items-center space-x-2 text-sm text-gray-600 ${className}`}>
      <span className="text-base">{getSourceIcon()}</span>
      <div className="flex flex-col">
        <span className="font-medium">{getLocationText()}</span>
        <span className="text-xs text-gray-400">{getSourceText()}</span>
      </div>
    </div>
  );
};

export default LocationDisplay;