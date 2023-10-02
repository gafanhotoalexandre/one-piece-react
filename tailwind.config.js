/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
        'secular-one': ['Secular One', 'sans-serif'],
      },
      backgroundColor: {
        buttons: 'rgba(0, 0, 0, .3)',
      },
      boxShadow: {
        button: '0 0 10px #d9d9d9',
      },
    },
  },
  plugins: [],
}
