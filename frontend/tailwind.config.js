/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        rounded: ["M PLUS Rounded 1c", ...defaultTheme.fontFamily.sans],
        serif: ["M PLUS 1p", ...defaultTheme.fontFamily.serif],
      },
      backgroundColor: {
        "beige-japanese-book": "#f5f3da",
      },
      backgroundImage: {
        startMenu: "url('../public/img/start-menu-bg.jpeg')",
        jpRoom: "url('../public/img/japanese-room-background.gif')",
        onigiri: "url('../public/img/onigiri.jpg')",
        bedroom: "url('../public/img/bedroom-temp.gif')",
        loadingWalk: "url('../public/img/loading-walk.gif')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
