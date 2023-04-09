/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'kitten':'url("/public/cover.jpg")',
        'game':'url("/public/game.jpg")',
        'winner':'url("/public/winner.jpg")',
        'p1':'url("/public/p-1.png")',
        'p2':'url("/public/p-2.png")',
        'p3':'url("/public/p-3.png")',
      },
      fontFamily:{
        'roboto':['Roboto', 'sans-serif'],
        'poppins':['Poppins', 'sans-serif'],
        'archivo': ['Archivo Narrow', 'sans-serif']
      },
    },
  },
  plugins: [],
}