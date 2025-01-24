/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,ts,js}"
  ],
  theme: {
    extend: {
      colors:{
        bgblack:'#0B0B0D',
        bgpurple1:'#7E5EF2',
        bgpurple2:'#190F40',
        bgpurple3:'#372773'
      },
    },
  },
  plugins: [],
}

