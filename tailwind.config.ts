import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'system-ui', 'sans-serif'],
        display: ['Fredoka', 'Nunito', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Primary indigo (main brand)
        brand: {
          50: '#EEF2FF',
          100: '#E0E7FF',
          200: '#C7D2FE',
          300: '#A5B4FC',
          400: '#818CF8',
          500: '#6366F1',
          600: '#4F46E5',
          700: '#4338CA',
          800: '#3730A3',
          900: '#312E81',
          950: '#1E1B4B',
        },
        // Warm orange CTA
        sunset: {
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#F97316',
          600: '#EA580C',
          700: '#C2410C',
        },
        // Playful pink
        bubblegum: {
          50: '#FDF2F8',
          100: '#FCE7F3',
          200: '#FBCFE8',
          300: '#F9A8D4',
          400: '#F472B6',
          500: '#EC4899',
          600: '#DB2777',
        },
        // Mint success
        mint: {
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
        },
        // Sunshine yellow
        sunshine: {
          50: '#FEFCE8',
          100: '#FEF9C3',
          200: '#FEF08A',
          300: '#FDE047',
          400: '#FACC15',
          500: '#EAB308',
        },
        // Sky blue
        sky: {
          50: '#F0F9FF',
          100: '#E0F2FE',
          200: '#BAE6FD',
          300: '#7DD3FC',
          400: '#38BDF8',
          500: '#0EA5E9',
        },
        // Deep text
        ink: {
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
          950: '#1E1B4B',
        },
      },
      boxShadow: {
        // Claymorphism — soft, puffy 3D shadows with inset highlights
        clay: '0 10px 30px -6px rgba(79, 70, 229, 0.20), 0 4px 10px -2px rgba(79, 70, 229, 0.10), inset 0 -4px 0 rgba(30, 27, 75, 0.06), inset 0 2px 0 rgba(255, 255, 255, 0.85)',
        'clay-sm': '0 4px 12px -2px rgba(79, 70, 229, 0.12), inset 0 -2px 0 rgba(30, 27, 75, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
        'clay-lg': '0 24px 60px -12px rgba(79, 70, 229, 0.28), 0 8px 22px -6px rgba(79, 70, 229, 0.16), inset 0 -6px 0 rgba(30, 27, 75, 0.08), inset 0 3px 0 rgba(255, 255, 255, 0.9)',
        'clay-orange':
          '0 10px 28px -6px rgba(249, 115, 22, 0.45), 0 4px 10px -2px rgba(249, 115, 22, 0.25), inset 0 -4px 0 rgba(194, 65, 12, 0.35), inset 0 2px 0 rgba(255, 255, 255, 0.35)',
        'clay-pink':
          '0 10px 28px -6px rgba(236, 72, 153, 0.40), 0 4px 10px -2px rgba(236, 72, 153, 0.20), inset 0 -4px 0 rgba(190, 24, 93, 0.30), inset 0 2px 0 rgba(255, 255, 255, 0.35)',
        'clay-mint':
          '0 10px 28px -6px rgba(16, 185, 129, 0.35), 0 4px 10px -2px rgba(16, 185, 129, 0.15), inset 0 -4px 0 rgba(5, 150, 105, 0.28), inset 0 2px 0 rgba(255, 255, 255, 0.35)',
        'clay-sunshine':
          '0 10px 28px -6px rgba(234, 179, 8, 0.40), 0 4px 10px -2px rgba(234, 179, 8, 0.18), inset 0 -4px 0 rgba(161, 98, 7, 0.30), inset 0 2px 0 rgba(255, 255, 255, 0.45)',
        'clay-sky':
          '0 10px 28px -6px rgba(14, 165, 233, 0.38), 0 4px 10px -2px rgba(14, 165, 233, 0.18), inset 0 -4px 0 rgba(3, 105, 161, 0.28), inset 0 2px 0 rgba(255, 255, 255, 0.4)',
        'clay-inset': 'inset 0 4px 10px rgba(79, 70, 229, 0.08), inset 0 -2px 0 rgba(255, 255, 255, 0.9)',
        'clay-pressed':
          'inset 0 4px 10px rgba(30, 27, 75, 0.12), 0 1px 3px rgba(79, 70, 229, 0.08)',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        float: 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        wiggle: 'wiggle 2.5s ease-in-out infinite',
        'bounce-soft': 'bounceSoft 2.4s ease-in-out infinite',
        'progress-fill': 'progressFill 1.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(-2deg)' },
          '50%': { transform: 'translateY(-14px) rotate(2deg)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        progressFill: {
          '0%': { width: '0%' },
          '100%': { width: 'var(--progress, 100%)' },
        },
      },
      borderRadius: {
        blob: '2rem',
      },
    },
  },
  plugins: [],
} satisfies Config
