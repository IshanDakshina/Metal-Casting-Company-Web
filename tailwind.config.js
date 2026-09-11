/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: '#FFFFFF',
          soft: '#F7F9FB',
        },
        ink: {
          DEFAULT: '#22262B',
          muted: '#8A8F98',
        },
        brand: {
          DEFAULT: '#1957B8',
          light: '#1C64F2',
          dark: '#123E85',
        },
        navy: {
          DEFAULT: '#0F1620',
          soft: '#161F2C',
          border: '#26313F',
        },
      },
      fontFamily: {
        sans: ['"Manrope"', 'system-ui', 'sans-serif'],
        head: ['"Manrope"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(15, 22, 32, 0.06), 0 8px 24px -12px rgba(15, 22, 32, 0.12)',
      },
      maxWidth: {
        content: '1180px',
      },
    },
  },
  plugins: [],
}
