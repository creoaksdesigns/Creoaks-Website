/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ff9800',
        accent: '#7c3aed',
      },
    },
  },
  plugins: [],
}

