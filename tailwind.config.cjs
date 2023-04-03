/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: { 
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      blue: colors.blue, 
      'primary': '#1E44B9',
      'orange': '#FF7F65',
      'purple': "#C1C2FF",
      'cream': "#FFFADE",
      'black': "#474555",
      
    },
    extend: {},
  },
  plugins: [],
};
