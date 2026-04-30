/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#18495C',
          50: '#edf5f8',
          100: '#d2e7ef',
          200: '#aad1df',
          300: '#77b3c9',
          400: '#4c95b2',
          500: '#307996',
          600: '#18495C',
          700: '#143d4d',
          800: '#11323f',
          900: '#0f2a35',
        },
        secondary: {
          DEFAULT: '#EAAB21',
          50: '#fef9eb',
          100: '#fdf1cc',
          200: '#fbe099',
          300: '#f9ca66',
          400: '#f6b433',
          500: '#EAAB21',
          600: '#c58c14',
          700: '#a36e10',
          800: '#865711',
          900: '#704711',
        },
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      clipPath: {
        'triangle-right': 'polygon(0 0, 100% 0, 100% 100%, 0 0)',
        'diagonal-cut': 'polygon(0 0, 85% 0, 100% 100%, 0 100%)',
      }
    },
  },
  plugins: [],
}
