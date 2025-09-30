/** @type {import('tailwindcss').Config} */
    export default {
      content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
      ],
      theme: {
        extend: {
          fontFamily:{
            sans:["Poppins","sans-serif"],
            cursive:["Pacifico","Sriracha","cursive"],
            cursive2:["Sriracha","cursive"],
          }
        },
      },
      plugins: [],
    }

