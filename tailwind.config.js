module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: ['content/**/*.md', 'layouts/**/*.html'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};