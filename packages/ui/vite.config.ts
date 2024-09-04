import { extname, relative, resolve } from 'node:path'
import { readdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { glob } from 'glob'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import react from '@vitejs/plugin-react'
import type { Data } from '@seventhse/utils'

const componentEntries = readdirSync(resolve(__dirname, 'src/components'))
  .reduce<Data>((entries, dir) => {
    entries[dir] = resolve(__dirname, `src/components/${dir}/index.ts`)
    return entries
  }, {})

export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        ...componentEntries,
      },
      name: 'ui',
      // the proper extensions will be added
      fileName: 'index',
      formats: ['es'], // Output formats
    },
    rollupOptions: {
      // input: {
      //   index: resolve(__dirname, 'src/index.ts'),
      //   ...componentEntries
      // },
      input: Object.fromEntries(
        glob
          .sync(['src/**/*.{ts,tsx}'], {
            ignore: ['src/**/*.d.ts', 'src/**/*.d', 'src/**/*.test.*', '**/*.mdx', '**/*.stories.*'],
          })
          .map((file) => {
            return [
              relative(
                'src',
                file.slice(0, file.length - extname(file).length),
              ),
              fileURLToPath(new URL(file, import.meta.url)),
            ]
          }),
      ),
      output: {
        entryFileNames: '[name].js',
      },
      external: ['react', 'react-dom'], // Treat React as an external dependency
    },
  },
  plugins: [
    dts(),
    react(),
  ],
})
