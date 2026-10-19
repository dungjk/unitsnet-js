import { defineConfig } from 'rolldown'
import { dts } from 'rolldown-plugin-dts'

const entry = 'src/index.ts'
const shared = {
  input: entry,
  tsconfig: './tsconfig.json',
  platform: 'node' as const,
}

export default defineConfig([
  {
    ...shared,
    output: { dir: 'dist', format: 'cjs', entryFileNames: 'index.js', minify: true },
    clean: true,
  },
  {
    ...shared,
    output: { dir: 'dist', format: 'esm', entryFileNames: 'index.mjs', minify: true },
  },
  {
    ...shared,
    plugins: [dts({ emitDtsOnly: true, tsconfig: './tsconfig.json' })],
    output: { dir: 'dist', format: 'esm', entryFileNames: 'index.d.ts', minify: true },
  },
])
