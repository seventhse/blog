import { defineProject } from 'vitest/config'

export default defineProject({
  test: {
    include: ['./__test__/**/*.test.ts'],
  },
})
