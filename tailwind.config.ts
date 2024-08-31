import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: "#000",
          100: "rgba(5, 5, 5, 1)",
          200: "rgba(10, 10, 10, 1)",
          300: "rgba(15, 15, 15, 1)",
          400: "rgba(20, 20, 20, 1)",
          500: "rgba(25, 25, 25, 1)",
          600: "rgba(30, 30, 30, 1)",
          700: "rgba(35, 35, 35, 1)",
          800: "rgba(40, 40, 40, 1)",
          900: "rgba(45, 45, 45, 1)",
        },
        white: {
          DEFAULT: "#fff",
          100: "rgba(255, 255, 255, 0.9)",
          200: "rgba(255, 255, 255, 0.70)",
          300: "rgba(255,255,255,0.50)",
          400: "rgba(255, 255, 255, 0.30)",
          500: "rgba(255, 255, 255, 0.20)",
          600: "rgba(255, 255, 255, 0.10)",
          700: "rgba(255, 255, 255, 0.05)",
          800: "rgba(255, 255, 255, 0.02)",
          900: "rgba(255, 255, 255, 0.01)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
