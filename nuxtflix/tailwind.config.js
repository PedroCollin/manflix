module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        'alizarin-crimson': {
          DEFAULT: '#DB202C',
          50: '#F5BDC1',
          100: '#F3ABB0',
          200: '#EE888E',
          300: '#E8646D',
          400: '#E3414B',
          500: '#DB202C',
          600: '#AA1922',
          700: '#791218',
          800: '#480B0E',
          900: '#170305',
        },
      },
    },
  },
  plugins: [],
}
