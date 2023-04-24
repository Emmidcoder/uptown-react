/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '500px',
        bscreen: '900px'
      },

      colors: {
        primary: '#A03816',
        secondary: {
          100: '#FFF1EC',
          200: '#f5dfd7'
        },
        gry: '#646464'
      },

      fontFamily: {
        body: 'Outfit'
      },

      lineHeight: {
        'leading-20': '3rem'
      }
    },
  },
  plugins: [],
}

