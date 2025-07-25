/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        tuggi: {
          // Cores principais
          primary: '#00A8E8',
          'primary-dark': '#0088BB',
          'primary-light': '#33B9ED',
          secondary: '#FF6F00',
          'secondary-dark': '#E55A00',
          'secondary-light': '#FF8533',
          
          // Cores semânticas para estados
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
          
          // Cores neutras expandidas
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
          
          // Cores de destaque para hierarquia
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
          
          // Cores para gradientes expressivos
          gradient: {
            ocean: {
              from: '#00A8E8',
              via: '#3B82F6',
              to: '#1E40AF'
            },
            sunset: {
              from: '#FF6F00',
              via: '#F59E0B',
              to: '#DC2626'
            },
            forest: {
              from: '#10B981',
              via: '#059669',
              to: '#047857'
            },
            cosmic: {
              from: '#8B5CF6',
              via: '#EC4899',
              to: '#F59E0B'
            },
            aurora: {
              from: '#00A8E8',
              via: '#10B981',
              to: '#8B5CF6'
            }
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
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
      backgroundImage: {
        'gradient-ocean': 'linear-gradient(135deg, #00A8E8 0%, #3B82F6 50%, #1E40AF 100%)',
        'gradient-sunset': 'linear-gradient(135deg, #FF6F00 0%, #F59E0B 50%, #DC2626 100%)',
        'gradient-forest': 'linear-gradient(135deg, #10B981 0%, #059669 50%, #047857 100%)',
        'gradient-cosmic': 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 50%, #F59E0B 100%)',
        'gradient-aurora': 'linear-gradient(135deg, #00A8E8 0%, #10B981 50%, #8B5CF6 100%)',
        'gradient-subtle': 'linear-gradient(135deg, rgba(0, 168, 232, 0.05) 0%, rgba(255, 111, 0, 0.05) 100%)',
        'gradient-hero': 'linear-gradient(135deg, #F8FAFC 0%, rgba(0, 168, 232, 0.1) 50%, rgba(255, 111, 0, 0.05) 100%)',
      },
    },
  },
  plugins: [],
};