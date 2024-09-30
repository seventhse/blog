import sharedConfig from '@blog/tailwind-config'
import typography from '@tailwindcss/typography'

export default {
  content: ['./src/**/*.tsx'],
  presets: [sharedConfig],
  plugins: [
    typography,
  ],
}
