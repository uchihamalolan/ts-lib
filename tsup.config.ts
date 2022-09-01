import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  clean: true,
  dts: true,
  sourcemap: 'inline',
  format: ['esm'],
  loader: {
    '.jpg': 'base64',
    '.webp': 'file',
  },
});
