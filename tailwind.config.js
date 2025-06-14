/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
      },
      colors: {
        red: '#FF0000',
        "light-white": {
          DEFAULT: "rgba(59,60,152,0.03)",
          100: "rgba(59,60,152,0.02)",
        },
        grey: "#9F9F9F26",
        greyy: "#D9D9D999",
        mint: '#227766',
        lightblack: '#353535',
        blue:'#252457'
      },
    },
  },
  plugins: [],
};