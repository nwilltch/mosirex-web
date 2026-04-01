/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0076B9',
          dark: '#005A8E',
          light: '#E0F2FE',
        },
        dark: {
          DEFAULT: '#0A1128',
          blue: '#1e293b',
        },
        accent: '#3B82F6',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      container: {
        center: true,
        padding: '2rem',
        screens: {
          '2xl': '1280px',
        },
      },
    },
  },
  plugins: [],
}
