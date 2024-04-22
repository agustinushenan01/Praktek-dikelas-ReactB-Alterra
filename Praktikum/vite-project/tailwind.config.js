/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          100: '#cfe2ff',
          200: '#9ec5fe',
          300: '#6ea8fe',
          400: '#3d8bfd',
          500: '#0d6efd',
          600: '#0a58ca',
          700: '#084298',
          800: '#052c65',
          900: '#031633',
        },
        'white': '#fff',
        'figmagray': {
          100: '#f8f9fa',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#adb5bd',
          600: '#6c757d',
          700: '#495057',
          800: '#343a40',
          900: '#212529',
        },
      },
      fontFamily: {
        'roboto': '"Roboto", sans-serif',
        'jost': '"Jost", sans-serif',
        'open-sans': '"Open Sans", sans-serif',
      },
    },
  },
  plugins: [],
}

