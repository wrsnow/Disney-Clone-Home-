/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "512px",
      },
      colors: {
        "card-color": "#1A2739",
        "card-border": "#3A4A57",
      },
    },
  },
  plugins: [],
};
