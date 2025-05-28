import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc'
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';

export default defineConfig({
  plugins: [react()],
  build: {
    ssr: true,
  //   target: 'node20',
    outDir: './dist',
    rollupOptions: {
      input: './src/index.tsx',
      external: ['react', 'react-dom/server'],
      output: {
        format: 'cjs', // <-- force CommonJS
  //       entryFileNames: '[name].js',
      },
    },
  },
  // resolve: {
  //   alias: {
  //     // Aliases if needed
  //   },
  // },
  // optimizeDeps: {
  //   esbuildOptions: {
  //     // Polyfills for Node.js globals and built-ins
  //     plugins: [
  //       NodeGlobalsPolyfillPlugin({
  //         process: true,
  //         buffer: true,
  //       }),
  //     ],
  //   },
  // },
});
