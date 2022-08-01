/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'logo-gray': '#eef3f8',
        'blue-70': '#0a66c2',
        'blue-80': '#004182',
        'tint-black': '#00000014',
        'tint': '#00000099',
        'trans': '#e5e7eb54',
        'trans-2': '#dadce154',
      },
      flex: {
        2: '2',
        3: '3',
        6: '6',
        8: '8',
      },
      margin: {
        '-10': '-10px',
        '-15': '-16px',
      },
      spacing: {
        '-0.5': '2px',
        '--8': '-32px',
      }
    },
  },
  plugins: [],
};
