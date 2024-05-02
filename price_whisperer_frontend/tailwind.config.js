/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'custom': ['Slagless', 'sans-serif'],
        'mysans': ['Poppins', 'Avenir']/* 'custom' is the name you'll use in your classes */
      },
    },
  },
  plugins: [],
}

