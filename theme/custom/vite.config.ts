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
    //   target: 'node20',
    outDir: "./dist",
    rollupOptions: {
      input: "./src/index.tsx",
      external: ["react", "react-dom/server"],
      output: {
        format: "cjs", 
      },
    },
  },

});
