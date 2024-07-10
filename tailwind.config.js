/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './public/index.html',
  ],
  theme: {
    extend: {

      margin: ['group-hover'],
      bottom: ['group-hover'],
      scale: {
        '102': '1.02',
      },
      inset: {
        '6': '1.5rem',
      },
      colors: {
        white: '#ffffff',
      },
      fontSize: {
        '2xl': '24px',
      },
      fontWeight: {
        'semibold': '600',
      },
      transitionDuration: {
        '400': '400ms',
      },
      transitionTimingFunction: {
        'ease-out': 'ease-out',
      },
      transitionProperty: {
        'all': 'all',
      },
      screens: {
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'xl': '1200px',
        '2xl': '1400px',
      },
    },
  },
  variants: {
    extend: {
      scale: ['hover'],
      opacity: ['hover'],
      visibility: ['hover'],
    },
  },
  plugins: [],
};
