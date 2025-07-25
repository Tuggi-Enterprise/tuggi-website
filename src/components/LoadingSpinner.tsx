import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'success' | 'warning' | 'error' | 'info';
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  variant = 'primary',
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const variantClasses = {
    primary: 'border-tuggi-primary',
    success: 'border-tuggi-success',
    warning: 'border-tuggi-warning',
    error: 'border-tuggi-error',
    info: 'border-tuggi-info'
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <div 
        className={`animate-spin rounded-full border-2 border-neutral-200 ${variantClasses[variant]} border-t-transparent`}
        role="status"
        aria-label="Loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner; 