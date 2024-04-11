const defaultTheme = require("tailwindcss/defaultTheme");
const {nextui} = require("@nextui-org/react");
 
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx,jsx,js,html}",
  "./components/**/*.{ts,tsx,jsx,js,html}",
  "./pages/**/*.{ts,tsx,jsx,js,html}",
  "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
],
  
  theme: {
    extend: {
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
