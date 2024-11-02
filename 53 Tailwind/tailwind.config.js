/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors:{
        'Primary': '#3238f2',
        'gaurav' : '#01ee91'
      },
      fontFamily:{
       'display': ['poppins', 'sans-serif'],
       'body': ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}

