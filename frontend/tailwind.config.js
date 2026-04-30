/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-teal': '#1D3F4A',
        'golden-yellow': '#F5A623',
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
