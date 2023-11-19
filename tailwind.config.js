/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html"],
  theme: {
    colors: {
      'palatinate-blue': "#3250fa",
      'eerie-black': "#202022",
      'lavender': "#c3c4d9",
      'l-lavender': "#E4E5FC",
      'red': "#FF0000",
    },

    screens: {
      'md': { 'max': '768px' }
    },

    extend: {
      backgroundImage: {
        'bubbles': "url('../images/download.png')",
      }
    },
  },
  plugins: [],
}

