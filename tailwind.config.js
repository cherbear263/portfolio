const plugin = require('tailwindcss/plugin')

module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm:'600px',
      md:'700px',
      lg:'900px',
      xl:'1400px'
    },

    extend: {
      rounded: {
        '4xl': '1.75rem',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        mono: ['click-clack','monospace', 'ui-monospace', 'Courier-new'],
        display: ['VT323', 'click-clack', 'monospace']
      },
      fontWeight: {
        light: 100,
        heavy: 400,
      }
    },
  },
  variants: {
    extend: {
    },
  },}

