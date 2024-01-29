/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        emojis: `url(./src/assets/emojis-bg.png)`
      }
    },
  },
  plugins: [],
}