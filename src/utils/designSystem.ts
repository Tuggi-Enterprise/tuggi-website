/**
 * Tuggi Design System
 * 
 * This file centralizes all design tokens, patterns, and visual configurations
 * used throughout the Tuggi application. It provides a single source of truth
 * for colors, typography, spacing, components, and animations.
 */

// ============================================================================
// COLOR SYSTEM
// ============================================================================

export const colors = {
  // Primary Brand Colors
  primary: {
    main: '#00A8E8',
    dark: '#0088BB',
    light: '#33B9ED',
  },
  
  // Secondary Brand Colors
  secondary: {
    main: '#FF6F00',
    dark: '#E55A00',
    light: '#FF8533',
  },
  
  // Semantic Colors
  success: {
    main: '#10B981',
    light: '#34D399',
    dark: '#059669',
  },
  
  warning: {
    main: '#F59E0B',
    light: '#FBBF24',
    dark: '#D97706',
  },
  
  error: {
    main: '#EF4444',
    light: '#F87171',
    dark: '#DC2626',
  },
  
  info: {
    main: '#3B82F6',
    light: '#60A5FA',
    dark: '#2563EB',
  },
  
  // Neutral Colors
  neutral: {
    50: '#F8FAFC',
    100: '#F1F5F9',
    200: '#E2E8F0',
    300: '#CBD5E1',
    400: '#94A3B8',
    500: '#64748B',
    600: '#475569',
    700: '#334155',
    800: '#1E293B',
    900: '#0F172A',
  },
  
  // Accent Colors
  accent: {
    purple: '#8B5CF6',
    'purple-light': '#A78BFA',
    'purple-dark': '#7C3AED',
    teal: '#14B8A6',
    'teal-light': '#2DD4BF',
    'teal-dark': '#0D9488',
    pink: '#EC4899',
    'pink-light': '#F472B6',
    'pink-dark': '#DB2777',
    amber: '#F59E0B',
    'amber-light': '#FBBF24',
    'amber-dark': '#D97706',
  },
} as const;

// ============================================================================
// TYPOGRAPHY SYSTEM
// ============================================================================

export const typography = {
  fontFamily: {
    sans: ['Inter', 'system-ui', 'sans-serif'],
  },
  
  fontSize: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem',    // 48px
    '6xl': '3.75rem', // 60px
  },
  
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  
  lineHeight: {
    tight: '1.25',
    normal: '1.5',
    relaxed: '1.75',
  },
} as const;

// ============================================================================
// SPACING SYSTEM
// ============================================================================

export const spacing = {
  // Base spacing units
  px: '1px',
  0: '0',
  0.5: '0.125rem',  // 2px
  1: '0.25rem',     // 4px
  1.5: '0.375rem',  // 6px
  2: '0.5rem',      // 8px
  2.5: '0.625rem',  // 10px
  3: '0.75rem',     // 12px
  3.5: '0.875rem',  // 14px
  4: '1rem',        // 16px
  5: '1.25rem',     // 20px
  6: '1.5rem',      // 24px
  7: '1.75rem',     // 28px
  8: '2rem',        // 32px
  9: '2.25rem',     // 36px
  10: '2.5rem',     // 40px
  11: '2.75rem',    // 44px
  12: '3rem',       // 48px
  14: '3.5rem',     // 56px
  16: '4rem',       // 64px
  18: '4.5rem',     // 72px
  20: '5rem',       // 80px
  24: '6rem',       // 96px
  28: '7rem',       // 112px
  32: '8rem',       // 128px
  36: '9rem',       // 144px
  40: '10rem',      // 160px
  44: '11rem',      // 176px
  48: '12rem',      // 192px
  52: '13rem',      // 208px
  56: '14rem',      // 224px
  60: '15rem',      // 240px
  64: '16rem',      // 256px
  72: '18rem',      // 288px
  80: '20rem',      // 320px
  96: '24rem',      // 384px
} as const;

// ============================================================================
// BORDER RADIUS SYSTEM
// ============================================================================

export const borderRadius = {
  none: '0',
  sm: '0.125rem',   // 2px
  base: '0.25rem',  // 4px
  md: '0.375rem',   // 6px
  lg: '0.5rem',     // 8px
  xl: '0.75rem',    // 12px
  '2xl': '1rem',    // 16px
  '3xl': '1.5rem',  // 24px
  full: '9999px',
} as const;

// ============================================================================
// SHADOW SYSTEM
// ============================================================================

export const shadows = {
  none: 'none',
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
} as const;

// ============================================================================
// GRADIENT SYSTEM
// ============================================================================

export const gradients = {
  ocean: 'linear-gradient(135deg, #00A8E8 0%, #3B82F6 50%, #1E40AF 100%)',
  sunset: 'linear-gradient(135deg, #FF6F00 0%, #F59E0B 50%, #DC2626 100%)',
  forest: 'linear-gradient(135deg, #10B981 0%, #059669 50%, #047857 100%)',
  cosmic: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 50%, #F59E0B 100%)',
  aurora: 'linear-gradient(135deg, #00A8E8 0%, #10B981 50%, #8B5CF6 100%)',
  subtle: 'linear-gradient(135deg, rgba(0, 168, 232, 0.05) 0%, rgba(255, 111, 0, 0.05) 100%)',
  hero: 'linear-gradient(135deg, #F8FAFC 0%, rgba(0, 168, 232, 0.1) 50%, rgba(255, 111, 0, 0.05) 100%)',
} as const;

// ============================================================================
// ANIMATION SYSTEM
// ============================================================================

export const animations = {
  duration: {
    fast: '150ms',
    normal: '200ms',
    slow: '300ms',
    slower: '500ms',
  },
  
  easing: {
    linear: 'linear',
    ease: 'ease',
    'ease-in': 'ease-in',
    'ease-out': 'ease-out',
    'ease-in-out': 'ease-in-out',
  },
  
  keyframes: {
    fadeIn: {
      '0%': { opacity: '0' },
      '100%': { opacity: '1' },
    },
    slideUp: {
      '0%': { transform: 'translateY(20px)', opacity: '0' },
      '100%': { transform: 'translateY(0)', opacity: '1' },
    },
    gradientShift: {
      '0%, 100%': { 
        backgroundPosition: '0% 50%',
        backgroundSize: '200% 200%'
      },
      '50%': { 
        backgroundPosition: '100% 50%',
        backgroundSize: '200% 200%'
      },
    },
  },
} as const;

// ============================================================================
// TRANSITION SYSTEM (Synced with Tailwind)
// ============================================================================

export const transitions = {
  duration: {
    fast: '150ms',
    normal: '200ms', 
    slow: '300ms',
    slower: '500ms',
  },
  timing: {
    ease: 'ease',
    'ease-in': 'ease-in',
    'ease-out': 'ease-out',
    'ease-in-out': 'ease-in-out',
    linear: 'linear',
  },
} as const;

// ============================================================================
// COMPONENT PATTERNS
// ============================================================================

export const components = {
  // Button Patterns
  button: {
    // Primary Button
    primary: {
      base: 'bg-tuggi-primary hover:bg-tuggi-primary-dark text-white font-semibold transition-all duration-200 hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-tuggi-primary focus:ring-offset-2',
      sizes: {
        sm: 'px-3 py-1.5 text-xs',
        md: 'px-6 py-3 text-sm',
        lg: 'px-8 py-4 text-base',
      },
    },
    
    // Secondary Button
    secondary: {
      base: 'border-2 border-tuggi-primary text-tuggi-primary hover:bg-tuggi-primary hover:text-white font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-tuggi-primary focus:ring-offset-2',
      sizes: {
        sm: 'px-3 py-1.5 text-xs',
        md: 'px-6 py-3 text-sm',
        lg: 'px-8 py-4 text-base',
      },
    },
    
    // Outline Button
    outline: {
      base: 'border-2 border-neutral-300 hover:border-tuggi-primary text-neutral-700 hover:text-tuggi-primary font-semibold transition-all duration-200 bg-white/80 backdrop-blur-sm',
      sizes: {
        sm: 'px-3 py-1.5 text-xs',
        md: 'px-6 py-3 text-sm',
        lg: 'px-8 py-4 text-base',
      },
    },
    
    // Ghost Button
    ghost: {
      base: 'text-neutral-700 hover:text-tuggi-primary hover:bg-tuggi-primary/5 font-medium transition-all duration-200',
      sizes: {
        sm: 'px-2 py-1 text-xs',
        md: 'px-4 py-2 text-sm',
        lg: 'px-6 py-3 text-base',
      },
    },
  },
  
  // Card Patterns
  card: {
    base: 'bg-white rounded-2xl shadow-lg border border-neutral-200 p-6 hover:shadow-xl transition-all duration-300',
    hover: 'hover:-translate-y-2',
    gradient: 'bg-gradient-to-br from-neutral-50 to-white border border-neutral-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group-hover:border-tuggi-primary/20',
  },
  
  // Form Patterns
  form: {
    input: 'w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-tuggi-primary focus:border-tuggi-primary transition-colors duration-200',
    label: 'block text-sm font-semibold text-neutral-700 mb-2',
    error: 'text-sm text-red-600 mt-1',
  },
  
  // Badge Patterns
  badge: {
    base: 'inline-flex items-center space-x-2 rounded-full border font-medium',
    sizes: {
      sm: 'px-2 py-1 text-xs',
      md: 'px-3 py-1.5 text-sm',
      lg: 'px-4 py-2 text-base',
    },
    variants: {
      success: 'bg-tuggi-success/10 text-tuggi-success border-tuggi-success/20',
      warning: 'bg-tuggi-warning/10 text-tuggi-warning border-tuggi-warning/20',
      error: 'bg-tuggi-error/10 text-tuggi-error border-tuggi-error/20',
      info: 'bg-tuggi-info/10 text-tuggi-info border-tuggi-info/20',
    },
  },
  
  // Loading Spinner
  spinner: {
    base: 'animate-spin rounded-full border-2 border-neutral-200 border-t-transparent',
    sizes: {
      sm: 'w-4 h-4',
      md: 'w-8 h-8',
      lg: 'w-12 h-12',
    },
    variants: {
      primary: 'border-tuggi-primary',
      success: 'border-tuggi-success',
      warning: 'border-tuggi-warning',
      error: 'border-tuggi-error',
      info: 'border-tuggi-info',
    },
  },
} as const;

// ============================================================================
// LAYOUT PATTERNS
// ============================================================================

export const layout = {
  // Container patterns
  container: {
    base: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
    narrow: 'max-w-4xl mx-auto px-4 sm:px-6 lg:px-8',
    wide: 'max-w-6xl mx-auto px-4 sm:px-6 lg:px-8',
  },
  
  // Section patterns
  section: {
    base: 'py-12 lg:py-16 xl:py-20',
    compact: 'py-4 lg:py-6',
    hero: 'py-6 lg:py-12 xl:py-20',
  },
  
  // Grid patterns
  grid: {
    '1': 'grid grid-cols-1',
    '2': 'grid grid-cols-1 md:grid-cols-2',
    '3': 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    '4': 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  },
  
  // Flex patterns
  flex: {
    center: 'flex items-center justify-center',
    between: 'flex items-center justify-between',
    start: 'flex items-center justify-start',
    end: 'flex items-center justify-end',
  },
} as const;

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Generate button classes based on variant and size
 */
export function getButtonClasses(variant: keyof typeof components.button, size: keyof typeof components.button.primary.sizes = 'md') {
  const buttonConfig = components.button[variant];
  return `${buttonConfig.base} ${buttonConfig.sizes[size]} rounded-lg`;
}

/**
 * Generate badge classes based on variant and size
 */
export function getBadgeClasses(variant: keyof typeof components.badge.variants, size: keyof typeof components.badge.sizes = 'md') {
  return `${components.badge.base} ${components.badge.sizes[size]} ${components.badge.variants[variant]}`;
}

/**
 * Generate spinner classes based on variant and size
 */
export function getSpinnerClasses(variant: keyof typeof components.spinner.variants, size: keyof typeof components.spinner.sizes = 'md') {
  return `${components.spinner.base} ${components.spinner.sizes[size]} ${components.spinner.variants[variant]}`;
}

/**
 * Generate card classes with optional hover effect
 */
export function getCardClasses(includeHover = true) {
  return `${components.card.base} ${includeHover ? components.card.hover : ''}`;
}

/**
 * Generate transition classes with specified duration and timing
 */
export function getTransitionClasses(
  duration: keyof typeof transitions.duration = 'normal',
  timing: keyof typeof transitions.timing = 'ease-in-out'
) {
  return `transition-all duration-${duration === 'normal' ? '200' : duration === 'fast' ? '150' : duration === 'slow' ? '300' : '500'} ${timing}`;
}

/**
 * Generate spacing classes (Tailwind-compatible)
 */
export function getSpacingClass(value: keyof typeof spacing) {
  // Convert design system spacing keys to Tailwind classes
  return `${value}`;
}

/**
 * Generate color utility classes for Tailwind
 */
export function getTuggiColorClass(colorType: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info', variant: 'main' | 'light' | 'dark' = 'main') {
  const suffix = variant === 'main' ? '' : `-${variant}`;
  return `tuggi-${colorType}${suffix}`;
}

/**
 * Get Tailwind gradient background class
 */
export function getGradientClass(gradientName: keyof typeof gradients) {
  return `bg-gradient-${gradientName}`;
}

// ============================================================================
// RESPONSIVE BREAKPOINTS
// ============================================================================

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// ============================================================================
// Z-INDEX SCALE
// ============================================================================

export const zIndex = {
  auto: 'auto',
  0: '0',
  10: '10',
  20: '20',
  30: '30',
  40: '40',
  50: '50',
} as const;

// ============================================================================
// EXPORT ALL DESIGN TOKENS
// ============================================================================

export const designSystem = {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  gradients,
  animations,
  transitions,
  components,
  layout,
  breakpoints,
  zIndex,
  utils: {
    getButtonClasses,
    getBadgeClasses,
    getSpinnerClasses,
    getCardClasses,
    getTransitionClasses,
    getSpacingClass,
    getTuggiColorClass,
    getGradientClass,
  },
} as const;

export default designSystem; 