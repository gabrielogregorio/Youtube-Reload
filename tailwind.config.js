module.exports = {
  content: ['./index.html', './src/**/*.{jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
        serif: ['Mukta'],
        mono: ['"Fira Code"', 'ui-monospace'],
        display: ['Oswald'],
        body: ['"Open Sans"'],
      },
      colors: {
        'white-dark': '#ebebeb',
        white: '#fbfbfe',

        'dark-dark': '#1f2126',
        dark: '#2d3036',
        'dark-light': '#46484d',

        grey: '#888888',

        red: '#ff5959',
        'red-light': '#ff7373',

        'blue-light': '#5eb2ff',
        blue: '#49a7fc',
        'blue-dark': '#2f81ff',
        'blue-darker': '#185fcc',
      },

      animation: {
        fadeIn: 'fadeIn .3s ease-in-out',
      },
      keyframes: () => ({
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      }),
    },
  },
  plugins: [],
};