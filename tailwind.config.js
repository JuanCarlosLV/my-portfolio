/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        corbel: ["corbel", "sans-serif"],
      },
      colors: {
        primaryColor: "#FFF8F0",
        secondaryColor: "#FF9000",
        colorBackground: "#282828",
        colorCursor: "rgba(0,71,255,.4)",
        colorHover: "rgba(217,217,217,.1)",
        colorHoverProject: "rgba(255, 144, 0, 0.1)",
        textoSecundario: "rgba(255, 248, 240, 0.5)",
        hoverButton: "#484848",
        colorbgPill: "#3B3B3B",
      },
      keyframes: {
        "adjust-header": {
          "0%": { background: "transparent", height: "64px", fontSize: "16px" },
          "100%": {
            background: "rgba(0,0,0,0.3)",
            backdropFilter: "blur(5px)",
            height: "24px",
            fontSize: "12px",
          },
        },
      },
      animation: {
        "adjust-header": "adjust-header 1s linear both",
      },
      
    },
  },
  plugins: [],
};
