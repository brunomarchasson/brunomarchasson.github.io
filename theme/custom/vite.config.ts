import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
// import eslint from "vite-plugin-eslint";

export default defineConfig({
  plugins: [
    react(),
    // eslint(),
  ],
  build: {
    ssr: true,
    outDir: "./dist",
    rollupOptions: {
      input: "./src/index.tsx",
      external: ["react", "react-dom/server"],
      output: {
        format: "esm",
      },
    },
  },
  server: {
    open: true,
    fs: {
      allow: ["..", "."],
    },
  },
  root: './src',
});
