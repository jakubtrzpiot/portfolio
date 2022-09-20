/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '0.75rem',
        md: '1.5rem',
      },
    },
    fontFamily: {
      sans: ['Figtree', 'sans-serif'],
    },
    extend: {
      colors: {
        primaryDark: '#272727',
        footerDark: '#191919',
        active: '#363636',
        accent: '#fe633d',
        accentLight: '#F99E89',
      },
    },
  },
  plugins: [],
};
