module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    content: ['./resources/views/**/*.edge', './resources/views/*.edge'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
