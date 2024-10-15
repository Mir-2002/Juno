/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#243642",
        secondary: "#387478",
        footer: "#629584",
        text: "#E2F1E7",
      },
      fontFamily: {
        logo: ["Anton", "sans-serif"],
        body: ["Archivo", "sans-serif"],
      },
    },
  },
  plugins: [],
};
