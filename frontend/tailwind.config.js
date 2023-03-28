/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        rounded: ['M PLUS Rounded 1c', ...defaultTheme.fontFamily.sans],
        serif: ['M PLUS 1p', ...defaultTheme.fontFamily.serif],
      },
      backgroundColor: {
        'beige-japanese-book': '#f5f3da',
      },
    },
  },
  plugins: [],
};
