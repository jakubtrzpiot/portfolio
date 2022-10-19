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
        DEFAULT: '1.25rem',
        md: '2.5rem',
      },
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#1E4593',
        secondary: '#f2f6ff',
        active: '#e5eeff',
        disabled: '#707070',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
