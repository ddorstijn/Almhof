module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: ['content/**/*.md', 'layouts/**/*.html'],
  theme: {
    extend: {
      colors: {
        'primary': {
          "light-shade": "#faf8f8",
          "light-accent": "#cf8882",
          "brand": "#b77f84",
          "dark-accent": "#9f6271",
          "dark-shade": "#593b43"
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};