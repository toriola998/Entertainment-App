/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#10141E',
        'dark-blue-2': '#161D2F',
        'red': '#FC4747',
        'greyish-blue': '#5A698F',
        'white': '#ffffff'
      }
    },
  },
  plugins: [],
}

