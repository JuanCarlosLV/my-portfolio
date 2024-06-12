/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        consola: ['consola', 'sans-serif']
      },
      colors: {
        primaryColor: '#FFF8F0',
        secondaryColor: '#FF9000',
        colorBackground: '#282828',
        colorCursor: 'rgba(0,71,255,.4)',
        colorHover: 'rgba(217,217,217,.1)',
      }
    },
  },
  plugins: [],
};
