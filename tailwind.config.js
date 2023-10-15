/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    slateBlue: "#7857ff",
    royalBlue: "#3127ec",
    fontFamily:{
      'sans': ["Hanken Grotesk", ...defaultTheme.fontFamily.sans]
    },
    extend: {},
  },
  plugins: [],
}

