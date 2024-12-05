/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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