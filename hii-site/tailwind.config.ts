/** @type {import('tailwindcss').Config} */
import fluid, { extract, screens, fontSize } from "fluid-tailwind";
module.exports = {
  content: [
    "./src/component/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  extract,
  theme: {
    extend: {
      colors: {
        Customblack: "#282828",
        Customgray: " #4d4d4d",
        Customgreen: "#124F53",
        Customblue: "#158DD1",
        white: "#FFFFFF",
        CustomWhite: "#f5f5f5",
      },
    },
    screens,
    fontSize,
  },
  plugins: [fluid],
};
