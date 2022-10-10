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
        DEFAULT: '1rem',
        md: '1.5rem',
        lg: '2rem',
        xl: '3rem',
      },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        dark: '#212124',
        light: '#fff',
        textDark: '#343a40',
        textLight: '#f8f9fa',
        disabled: '#6c757d',
        active: '#303030',
        activeLight: '#e5eeff',
        accent: '#1E4593',
        accentLight: '#458de0',
        accentLighter: '#F99E89',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
