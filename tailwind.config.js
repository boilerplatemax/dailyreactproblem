module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' }
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        delay: {
          '0%': { display: 'none' },
          '100%': { display: 'block' }
        },
        menuSlideIn: {
          '0%': {
            transform: 'translateX(-100%)'
          },
          '100%': {
            transform: 'translateX(0)'
          }
        },
        menuSlideOut: {
          '0%': {
            transform: 'translateX(0)'
          },
          '100%': {
            transform: 'translateX(-100%)'
          }
        },
        animation: {
          wiggle: 'wiggle 1s ease-in-out infinite',
          fadeIn: 'fadeIn 1s ease-in-out',
          delay: 'delay 1s ease-in-out',
          menuSlideIn: 'menuSlideIn 1s linear',
          menuSlideOut: 'menuSlideOut 1s linear'
        }
      }
    }
  }
};
