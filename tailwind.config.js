/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // Purge unused CSS
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
