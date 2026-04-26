/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#080808',
        accent: '#00ffc8',
      }
    },
  },
  plugins: [],
}