/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#003366', // Deep Blue
          secondary: '#FF9900', // Accent Orange
        },
      },
    },
  },
  plugins: [],
}