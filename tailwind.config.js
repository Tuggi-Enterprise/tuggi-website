/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        tuggi: {
          // Primary Brand Colors (exact from briefing)
          primary: '#00A8E8', // Azul Tuggi - confiança, tecnologia
          'primary-dark': '#0088C7',
          'primary-light': '#33B9EB',
          secondary: '#FF6F00', // Laranja Tuggi - energia, descoberta
          'secondary-dark': '#E55A2B',
          'secondary-light': '#FF8A5C',
          
          // Semantic Colors (synced with design system)
          success: '#10B981',
          'success-light': '#34D399',
          'success-dark': '#059669',
          warning: '#F59E0B',
          'warning-light': '#FBBF24',
          'warning-dark': '#D97706',
          error: '#EF4444',
          'error-light': '#F87171',
          'error-dark': '#DC2626',
          info: '#3B82F6',
          'info-light': '#60A5FA',
          'info-dark': '#2563EB',
          
          // Neutral Colors (from briefing)
          neutral: {
            50: '#F9FAFB', // Fundo neutro - leveza, foco no conteúdo
            100: '#F1F5F9',
            200: '#E5E7EB', // Linhas/divisores - sutileza e estrutura
            300: '#CBD5E1',
            400: '#94A3B8',
            500: '#4B5563', // Texto secundário - neutralidade
            600: '#475569',
            700: '#111827', // Texto principal - legibilidade
            800: '#1E293B',
            900: '#0F172A',
          },
          
          // Accent Colors (synced with design system)
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
        }
      },
      
      // Typography System (synced with design system)
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],     // 12px
        sm: ['0.875rem', { lineHeight: '1.25rem' }], // 14px
        base: ['1rem', { lineHeight: '1.5rem' }],    // 16px
        lg: ['1.125rem', { lineHeight: '1.75rem' }], // 18px
        xl: ['1.25rem', { lineHeight: '1.75rem' }],  // 20px
        '2xl': ['1.5rem', { lineHeight: '2rem' }],   // 24px
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],   // 36px
        '5xl': ['3rem', { lineHeight: '1' }],           // 48px
        '6xl': ['3.75rem', { lineHeight: '1' }],        // 60px
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
      
      // Spacing System (synced with design system)
      spacing: {
        '0.5': '0.125rem',  // 2px
        '1.5': '0.375rem',  // 6px
        '2.5': '0.625rem',  // 10px
        '3.5': '0.875rem',  // 14px
        '7': '1.75rem',     // 28px
        '9': '2.25rem',     // 36px
        '11': '2.75rem',    // 44px
        '13': '3.25rem',    // 52px
        '15': '3.75rem',    // 60px
        '17': '4.25rem',    // 68px
        '18': '4.5rem',     // 72px
        '19': '4.75rem',    // 76px
        '21': '5.25rem',    // 84px
        '22': '5.5rem',     // 88px
        '23': '5.75rem',    // 92px
        '25': '6.25rem',    // 100px
        '26': '6.5rem',     // 104px
        '27': '6.75rem',    // 108px
        '29': '7.25rem',    // 116px
        '30': '7.5rem',     // 120px
        '31': '7.75rem',    // 124px
        '33': '8.25rem',    // 132px
        '34': '8.5rem',     // 136px
        '35': '8.75rem',    // 140px
        '37': '9.25rem',    // 148px
        '38': '9.5rem',     // 152px
        '39': '9.75rem',    // 156px
        '41': '10.25rem',   // 164px
        '42': '10.5rem',    // 168px
        '43': '10.75rem',   // 172px
        '45': '11.25rem',   // 180px
        '46': '11.5rem',    // 184px
        '47': '11.75rem',   // 188px
        '49': '12.25rem',   // 196px
        '50': '12.5rem',    // 200px
        '51': '12.75rem',   // 204px
        '53': '13.25rem',   // 212px
        '54': '13.5rem',    // 216px
        '55': '13.75rem',   // 220px
        '57': '14.25rem',   // 228px
        '58': '14.5rem',    // 232px
        '59': '14.75rem',   // 236px
        '61': '15.25rem',   // 244px
        '62': '15.5rem',    // 248px
        '63': '15.75rem',   // 252px
        '65': '16.25rem',   // 260px
        '66': '16.5rem',    // 264px
        '67': '16.75rem',   // 268px
        '68': '17rem',      // 272px
        '69': '17.25rem',   // 276px
        '70': '17.5rem',    // 280px
        '71': '17.75rem',   // 284px
        '73': '18.25rem',   // 292px
        '74': '18.5rem',    // 296px
        '75': '18.75rem',   // 300px
        '76': '19rem',      // 304px
        '77': '19.25rem',   // 308px
        '78': '19.5rem',    // 312px
        '79': '19.75rem',   // 316px
        '81': '20.25rem',   // 324px
        '82': '20.5rem',    // 328px
        '83': '20.75rem',   // 332px
        '84': '21rem',      // 336px
        '85': '21.25rem',   // 340px
        '86': '21.5rem',    // 344px
        '87': '21.75rem',   // 348px
        '88': '22rem',      // 352px
        '89': '22.25rem',   // 356px
        '90': '22.5rem',    // 360px
        '91': '22.75rem',   // 364px
        '92': '23rem',      // 368px
        '93': '23.25rem',   // 372px
        '94': '23.5rem',    // 376px
        '95': '23.75rem',   // 380px
        '97': '24.25rem',   // 388px
        '98': '24.5rem',    // 392px
        '99': '24.75rem',   // 396px
        '100': '25rem',     // 400px
      },
      
      // Border Radius System (synced with design system)
      borderRadius: {
        'sm': '0.125rem',   // 2px
        'base': '0.25rem',  // 4px (default)
        'md': '0.375rem',   // 6px
        'lg': '0.5rem',     // 8px
        'xl': '0.75rem',    // 12px
        '2xl': '1rem',      // 16px
        '3xl': '1.5rem',    // 24px
        'full': '9999px',
      },
      
      // Shadow System (synced with design system)
      boxShadow: {
        'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'DEFAULT': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
        'inner': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
        'none': 'none',
      },
      
      // Animation and Transition (synced with design system)
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'gradient-shift': 'gradientShift 4s ease infinite',
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
      
      // Transition Duration (synced with design system)
      transitionDuration: {
        'fast': '150ms',
        'normal': '200ms',
        'slow': '300ms',
        'slower': '500ms',
      },
      
      // Background Images/Gradients (synced with design system)
      backgroundImage: {
        'gradient-ocean': 'linear-gradient(135deg, #00A8E8 0%, #3B82F6 50%, #1E40AF 100%)',
        'gradient-sunset': 'linear-gradient(135deg, #FF6F00 0%, #F59E0B 50%, #DC2626 100%)',
        'gradient-forest': 'linear-gradient(135deg, #10B981 0%, #059669 50%, #047857 100%)',
        'gradient-cosmic': 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 50%, #F59E0B 100%)',
        'gradient-aurora': 'linear-gradient(135deg, #00A8E8 0%, #10B981 50%, #8B5CF6 100%)',
        'gradient-subtle': 'linear-gradient(135deg, rgba(0, 168, 232, 0.05) 0%, rgba(255, 111, 0, 0.05) 100%)',
        'gradient-hero': 'linear-gradient(135deg, #F8FAFC 0%, rgba(0, 168, 232, 0.1) 50%, rgba(255, 111, 0, 0.05) 100%)',
      },
      
      // Z-Index Scale (synced with design system)
      zIndex: {
        '0': '0',
        '10': '10',
        '20': '20',
        '30': '30',
        '40': '40',
        '50': '50',
        'auto': 'auto',
      },
    },
  },
  plugins: [],
};