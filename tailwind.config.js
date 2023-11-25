const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')

module.exports = {
  safelist: [
    {
      pattern: /./, 
    },
  ],
  content: [
    "./src/**/*.{html,js}",
],
theme: {
  extend: {
    colors: {
      ...colors,
    },
  },
  plugins: [],
}
}

