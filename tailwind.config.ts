import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Custom color palette
        dark: '#0a0a0a',
        charcoal: '#1a1a1a',
        'dark-gray': '#2a2a2a',
        card: '#2a2a2a',
        gold: '#d4af37',
        silver: '#e8e8e8',
        'electric-blue': '#00b4d8',
        'text-gray': '#b0b0b0',
        'text-dark-gray': '#808080',
      },
      backgroundColor: {
        dark: '#0a0a0a',
        charcoal: '#1a1a1a',
        card: '#2a2a2a',
      },
      textColor: {
        gold: '#d4af37',
        silver: '#e8e8e8',
        'text-gray': '#b0b0b0',
        'text-dark-gray': '#808080',
      },
      borderColor: {
        gold: '#d4af37',
        silver: '#e8e8e8',
      },
      fontFamily: {
        display: ['Poppins', 'Space Grotesk', 'Outfit', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'Satoshi', 'Sohne', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 20px rgba(212, 175, 55, 0.4)',
        'gold-lg': '0 4px 12px rgba(212, 175, 55, 0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideInUp 0.6s ease-out',
        'gold-glow': 'goldGlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInUp: {
          '0%': { opacity: '0', transform: 'translateY(2rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        goldGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(212, 175, 55, 0.5)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
