/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./{components,pages}/**/*.{mdx,tsx}', './theme.config.tsx'],
  theme: {
    extend: {
      animation: {
        ["infinite-slider"]: "infiniteSlider 20s linear infinite",
      },
      keyframes: {
        infiniteSlider: {
          "0%": { transform: "translateX(0)" },
          "100%": {
            transform: "translateX(calc(-250px * 5))",
          },
        },
      },
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
