// We want each package to be responsible for its own content.
const config = {
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      backgroundImage: {
        'page': 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)',
        'dark-page': 'linear-gradient(120deg, #2c3e50 0%, #34495e 100%)',
      },
    },
  },
  plugins: [],
}

export default config
