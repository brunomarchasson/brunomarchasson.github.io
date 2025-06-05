import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
// import eslint from "vite-plugin-eslint";
import path from "path";

export default defineConfig(({ command }) => {
  const isBuild = command === 'build';
  return {
    plugins: [
      react(),
      // eslint(),
    ],
    build: {
      ssr: true,
      outDir: "./dist",
      rollupOptions: {
        input: path.resolve(__dirname, "src/index.tsx"),
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
    root: isBuild ? undefined : './src',
  };
});
