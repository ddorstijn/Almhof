module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: ['content/**/*.md', 'layouts/**/*.html'],
  theme: {
    extend: {
      colors: {
        'primary': {
          100: '#f3eff0',
          200: '#dbced1',
          300: '#c2aeb2',
          400: '#aa8e93',
          500: '#926d75',
          600: '#71555b',
          700: '#513d41',
          800: '#513d41',
          900: '#100c0d',
        },
        'secondary': {
          100: '#f5f1ec',
          200: '#e2d4c7',
          300: '#cfb7a1',
          400: '#bc9b7c',
          500: '#a97e56',
          600: '#836243',
          700: '#5e4630',
          800: '#382a1d',
          900: '#130e0a',
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};