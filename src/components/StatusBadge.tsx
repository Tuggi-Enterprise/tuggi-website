import React from 'react';
import { CheckCircle, AlertTriangle, XCircle, Info, Clock } from 'lucide-react';

interface StatusBadgeProps {
  status: 'success' | 'warning' | 'error' | 'info' | 'pending';
  text: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ 
  status, 
  text, 
  size = 'md',
  className = '' 
}) => {
  const statusConfig = {
    success: {
      icon: CheckCircle,
      bgColor: 'bg-tuggi-success/10',
      textColor: 'text-tuggi-success',
      borderColor: 'border-tuggi-success/20',
      iconColor: 'text-tuggi-success'
    },
    warning: {
      icon: AlertTriangle,
      bgColor: 'bg-tuggi-warning/10',
      textColor: 'text-tuggi-warning',
      borderColor: 'border-tuggi-warning/20',
      iconColor: 'text-tuggi-warning'
    },
    error: {
      icon: XCircle,
      bgColor: 'bg-tuggi-error/10',
      textColor: 'text-tuggi-error',
      borderColor: 'border-tuggi-error/20',
      iconColor: 'text-tuggi-error'
    },
    info: {
      icon: Info,
      bgColor: 'bg-tuggi-info/10',
      textColor: 'text-tuggi-info',
      borderColor: 'border-tuggi-info/20',
      iconColor: 'text-tuggi-info'
    },
    pending: {
      icon: Clock,
      bgColor: 'bg-tuggi-warning/10',
      textColor: 'text-tuggi-warning',
      borderColor: 'border-tuggi-warning/20',
      iconColor: 'text-tuggi-warning'
    }
  };

  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base'
  };

  const iconSizes = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5'
  };

  const config = statusConfig[status];
  const IconComponent = config.icon;

  return (
    <div className={`
      inline-flex items-center space-x-2 rounded-full border
      ${config.bgColor} ${config.textColor} ${config.borderColor}
      ${sizeClasses[size]} font-medium
      ${className}
    `}>
      <IconComponent className={`${iconSizes[size]} ${config.iconColor}`} />
      <span>{text}</span>
    </div>
  );
};

export default StatusBadge; 