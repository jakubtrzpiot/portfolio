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
        dark: '#202020',
        light: '#fff',
        textDark: '#343a40',
        textLight: '#f8f9fa',
        disabled: '#6c757d',
        active: '#303030',
        activeLight: '#fce8e3',
        accent: '#FE633C',
        accentLight: '#FC8064',
        accentLighter: '#F99E89',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
