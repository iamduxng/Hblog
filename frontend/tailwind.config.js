const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        neutral: colors.neutral,
        primary: colors.sky,
        paper: '#f2ebd5',
      },
      backgroundImage: {
        'horizontal-black-gradient': `linear-gradient(
          to right,
          hsl(0, 0%, 0%) 0%,
          hsla(0, 0%, 0%, 0.964) 7.4%,
          hsla(0, 0%, 0%, 0.918) 15.3%,
          hsla(0, 0%, 0%, 0.862) 23.4%,
          hsla(0, 0%, 0%, 0.799) 31.6%,
          hsla(0, 0%, 0%, 0.73) 39.9%,
          hsla(0, 0%, 0%, 0.655) 48.2%,
          hsla(0, 0%, 0%, 0.577) 56.2%,
          hsla(0, 0%, 0%, 0.497) 64%,
          hsla(0, 0%, 0%, 0.417) 71.3%,
          hsla(0, 0%, 0%, 0.337) 78.1%,
          hsla(0, 0%, 0%, 0.259) 84.2%,
          hsla(0, 0%, 0%, 0.186) 89.6%,
          hsla(0, 0%, 0%, 0.117) 94.1%,
          hsla(0, 0%, 0%, 0.054) 97.6%,
          hsla(0, 0%, 0%, 0) 100%
        )`,
        'eclipse-right-gradient': `radial-gradient(
          ellipse 100% 100% at left center,
          transparent 80%,
          #000
        )`
      },
      keyframes: {
        'to-right': {
          'from': { transform: 'translate(-100vw, 0)' },
          'to': { transform: 'translate(0, 0)' }
        },
        'to-top': {
          'from': { transform: 'translate(0, 100vh)' },
          'to': { transform: 'translate(0, 0)' }
        },
        'to-center-y': {
          'from': { transform: 'translate(0, -100%)' },
          'to': { transform: 'translate(0, 0)' },
        },
        'to-center-x': {
          'from': { transform: 'translate(-100%, 0)' },
          'to': { transform: 'translate(0, 0)' },
        }
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        xs: '1rem',
        sm: '2rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
}
