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
          400: "rgba(20, 20, 20, 1)"
        },
        white: {
          DEFAULT: "#fff",
          100: "rgba(255, 255, 255, 0.9)",
          200: "rgba(255, 255, 255, 0.70)",
          300: "rgba(255,255,255,0.50)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
