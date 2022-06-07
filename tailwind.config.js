const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '412px',
      '2xs': {'max': '411px'},
      ...defaultTheme.screens,
    },
    extend: {
      backgroundColor:{
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
      },
      textColor: {
        accent: 'var(--color-text-accent)',
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)'
      },
      minWidth: {
        '1/2': '50%',
        '512': '512px',
        '256': '256px'
      },
      keyframes:{
        
      }
    },
  },
  plugins: [],
}