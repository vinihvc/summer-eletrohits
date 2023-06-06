const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['app/**/*.{ts,tsx}', 'components/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '0.75rem',
      screens: {
        xl: '80rem', // 1280px
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
    },
  },
}
