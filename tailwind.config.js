/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        figtree: ["Figtree", "sans-serif"],
      },
      colors: {
        primary: "#0F1428",
        secondary: "#16203D",
        cyan: "#0CB89F",
      },
    },
  },
  plugins: [],
};
