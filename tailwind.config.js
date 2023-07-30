/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      'dark-blue': '#10141E',
    'semi-dark-blue': '#161D2F',
    'red': '#FC4747',
    'greyish-blue': '#5A698F',
    'white': '#ffffff'
    },
  },
  plugins: [],
}

