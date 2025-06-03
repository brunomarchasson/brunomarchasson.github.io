import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue()],
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(__dirname, 'src/index.ts'),
      output: {
        entryFileNames: 'index.js',
        format: 'cjs'
      }
    },
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['cjs'],
      fileName: () => 'index.js'
    },
    ssr: true
  },
  server: {
    port: 5173,
    open: true
  }
});