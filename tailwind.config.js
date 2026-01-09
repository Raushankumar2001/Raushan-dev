/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#111111',
        accent: '#4F46E5',
        'light-grey': '#F7F7F7',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '8px',
      },
      maxWidth: {
        'layout': '19200px', // As requested, though effectively unconstrained
      }
    },
  },
  plugins: [],
}
