/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      primary: ['Montserrat', 'serif'],
      secondary: ['Hind Madurai', 'sans-serif'],
      tertiary: ['Lora'],
    },
    colors: {
      primary: '#141816',
      secondary: '#29312D',
      tertiary: '#13ab45',
      white: '#e5e5e5',
    },
  },
  plugins: [],
};
