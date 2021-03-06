module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    extend: {
      colors: {
        cornflower: '#6952ff',
        ecstasy: '#fb751c',
        saffron: '#f3c43d',
        screamin: '#4bf2a6',
        shark: '#262629'
      },
      typography: {
        DEFAULT: {
          css: {
            li: {
              'white-space': 'normal'
            }
          }
        }
      }
    }
  },
  variants: {
    extend: {
      padding: ['first', 'responsive']
    }
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')]
}
