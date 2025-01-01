/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        gradient: "gradient 4s ease infinite",
      },
      keyframes: {
        gradient: {
          "0%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
          "100%": { "background-position": "0% 50%" },
        },
      },
      fontFamily:{
        poppins: ["Poppins", "sans-serif"],
        outfit: ["Outfit" , "sans-serif"],
        audiowide: ["Audiowide", "sans-serif"],
        pridi: ["Pridi", "sans-serif"],
        titillium: ["Titillum Web", "sans-serif"],
        faculty: ["Faculty Glyphic", "sans-serif"],
        right: ["Righteous", "sans-serif"],
        exo2: ["Exo 2", "sans-serif"],
        
      }
    },

  },
  plugins: [],
}