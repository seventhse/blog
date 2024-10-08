import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'utils',
      // the proper extensions will be added
      fileName: 'index',
      formats: ['cjs', 'es'],
    },
  },
  plugins: [
    dts({
      rollupTypes: true,
    }),
  ],
})
