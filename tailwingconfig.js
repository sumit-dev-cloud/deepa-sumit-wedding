/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        ivory: '#FAF7F2',
        champagne: '#E9DDCF',
        marigold: '#FFB300',
        sage: '#89947D',
        blush: '#D8B9AE',
        rosepetal: '#E4A89B',
        forest: '#26372F',
        charcoal: '#282724'
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'Arial', 'sans-serif']
      },
      boxShadow: {
        soft: '0 18px 50px rgba(38,55,47,.08)'
      }
    }
  }
}