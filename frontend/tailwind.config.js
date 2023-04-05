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
        "japanese-brown": "#391D23",
        "darker-japanese-brown": "#1f0c10",
        "japanese-brown-2": "#2e1700",
        "lighter-japanese-brown-2": "#3c2200",
      },
      backgroundImage: {
        startMenu: "url('../public/img/start-menu-bg.jpeg')",
        jpRoom: "url('../public/img/japanese-room-background.gif')",
        onigiri: "url('../public/img/onigiri.jpg')",
        bedroom: "url('../public/img/bedroom-temp.gif')",
        bedroom2: "url('../public/img/pixelatedbedroomwithbackground2.jpg')",
        loadingWalk: "url('../public/img/loading-walk.gif')",
        pixelFishes: "url('../public/img/pixel-fishes.gif')",
        pixelSepia: "url('../public/img/pixel-sepia.gif')",
        pixelNoodles: "url('../public/img/pixel-noodles.gif')",
        pixelTrain: "url('../public/img/pixel-train.gif')",
        shopBg: "url('../public/img/shop-bg.gif')",
        shopBg2: "url('../public/img/shop-bg2.gif')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
