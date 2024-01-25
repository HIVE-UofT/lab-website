/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./{components,pages}/**/*.{mdx,tsx}', './theme.config.tsx'],
  theme: {
    extend: {
      colors: {
        primary: '#76C893',
        secondary: '#9fc479',
        tertiary: '#484848',
        success: '#39D98A',
        error: '#FF3B3B',
        warning: '#FEC800',
        info: '#61A0B2',
      }
    },
  },
}
