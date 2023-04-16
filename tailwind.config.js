/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {

      colors:{
        primary:"#b8b4c1", 
        secondary:"#50349b",
        hover:"#573ba3",
        active: "#573ba3"

      }

    },
  },
  plugins: [],
}
