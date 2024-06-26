/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightGrayishBlue: '#e2e8f0',
        white: '#ffffff',
        darkBlue: '#2e1d6a',
        mediumPurple: '#805ad5',
      },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    }
  },
  plugins: [],
}
