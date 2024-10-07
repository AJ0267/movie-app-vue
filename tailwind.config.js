/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Afacad Flux", "sans-serif"],
      },
    },
  },
  daisyui: {
    themes: ["light", "dark", "black"],
  },
  plugins: [require("daisyui")],
};
