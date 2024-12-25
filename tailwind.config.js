/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'olive-green': '#836D21',
        'vibrant-pink': '#CE2F58',
        'deep-blue': '#105382',
        'bright-blue': '#0394BA',
        'light-blue': '#09A8CC',
      },
      fontFamily: {
        'merri-sans': ['Merriweather Sans', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

