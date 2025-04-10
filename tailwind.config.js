/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        'tonic-green': '#2E8B57',
        'tonic-light': '#F5F5F5',
        'tonic-dark': '#1A1A1A',
      },
      fontFamily: {
        serif: ['Freight Display Pro', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif'
        ],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} 