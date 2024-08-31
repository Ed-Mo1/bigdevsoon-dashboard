/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      "dark-blue": "#1F214A",
      transparent: "transparent",
      white: "#FFFFFF",
      yellow: "#FFD74B",
      orange: "#FF9E2B",
      "light-red": "#FDD5DA",
      "dark-red": "#FF5E75",
      "light-green": "#B8E9D4",
      "dark-green": "#2CC483",
      black: "#000000",
      blue: "#696FFB",
      // Add the opacity variants
      "white-60": "rgba(255, 255, 255, 0.6)",
      "white-20": "rgba(255, 255, 255, 0.2)",
      "white-16": "rgba(255, 255, 255, 0.16)",
      "white-8": "rgba(255, 255, 255, 0.08)",
      "yellow-60": "rgba(255, 215, 75, 0.6)",
      "black-60": "rgba(0, 0, 0, 0.6)",
      "black-16": "rgba(0, 0, 0, 0.16)",
      "blue-60": "rgba(105, 111, 251, 0.6)",
      "blue-32": "rgba(105, 111, 251, 0.32)",
      "blue-20": "rgba(105, 111, 251, 0.2)",
      "blue-12": "rgba(105, 111, 251, 0.12)",
      "blue-8": "rgba(105, 111, 251, 0.08)",
      "blue-4": "rgba(105, 111, 251, 0.04)",
    },
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
