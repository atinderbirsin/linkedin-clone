/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'logo-gray': '#eef3f8',
        'blue-70': '#0a66c2',
        'tint-black': '#00000014',
        'trans': '#e5e7eb54',
      },
      flex: {
        2: '2',
        6: '6',
      },
      margin: {
        '-10': '-10px',
        '-15': '-16px',
      },
    },
  },
  plugins: [],
};
