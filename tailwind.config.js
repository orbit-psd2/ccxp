/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        gradient: "gradient 8s linear infinite", // Adjust timing as needed
      },
      keyframes: {
        gradient: {
          "0%": { "background-position": "0% 0%" },
          "50%": { "background-position": "100% 100%" },
          "100%": { "background-position": "0% 0%" },
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
        
      }
    },

  },
  plugins: [],
}