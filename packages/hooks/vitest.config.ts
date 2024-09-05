import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['./__test__/**/*.test.ts'],
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
  },
})
