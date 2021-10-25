module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: theme => ({
        "primary-color": "#e06f1f",
        "secondary-color": "#292929",
        "header-color": "#484848"
      }),
      height : {
        'almost': 'calc(-8rem + 100vh)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
