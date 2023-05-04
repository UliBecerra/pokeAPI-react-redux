/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens :{
        'slg': '340px',
        'mdx': '1150px'
      },
      backgroundImage:{
        'grass': 'linear-gradient(#B1DBBC, #C3DEA3)',
        'grassBG': 'linear-gradient(#7EC6C5,#B1DBBC, #C3DEA3)',
        
      },
      fontFamily: {
        'inter': ["Inter", "sans-serif"],

       'roboto': 'Roboto, sans-serif'
      }
    },
  },
  plugins: [],
}

