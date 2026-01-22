/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00D9FF',
        secondary: '#2ED573',
        background: '#0A0E1A',
        surface: '#111827',
        'surface-light': '#1F2937',
        danger: '#FF4757',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      boxShadow: {
        'glow-primary': '0 0 20px rgba(0, 217, 255, 0.3)',
        'glow-secondary': '0 0 20px rgba(46, 213, 115, 0.3)',
      },
    },
  },
  plugins: [],
}