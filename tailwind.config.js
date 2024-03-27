const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        trueGray: colors.neutral,
        transparent: 'transparent',
        current: 'currentColor',
        'green': {
          100: '#EEF5E3',
          200: '#EEF5E3',
          300: '#DDECC8',
          400: '#CCE2AC',
          500: '#BBD891',
          600: '#AACE75',
          700: '#99C559',
          800: '#88BB3E',
          900: '#77B122',
        },
      },
    },
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
      stock: [defaultTheme.fontFamily.sans],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
