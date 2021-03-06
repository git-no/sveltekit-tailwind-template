const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: 'dc143c',
          // lighter: lighten('hotpink', 0.1),
        }
      },
      fontFamily: {
        'sans': ['Montserrat', ...defaultTheme.fontFamily.sans]
      },
    },
  },
  plugins: [],
}
