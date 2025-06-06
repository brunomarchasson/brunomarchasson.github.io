import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
// import eslint from "vite-plugin-eslint";
import path from "path";

const isSSR = !!process.env.VITE_SSR_BUILD;

export default defineConfig(({ command }) => {
  const isBuild = command === 'build';
  return {
    plugins: [
      react(),
      // eslint(),
    ],
    build: {
      ssr: isSSR ? true : false,
      outDir: "./dist",
      rollupOptions: {
        input: isSSR
          ? path.resolve(__dirname, "src/index.tsx")
          : path.resolve(__dirname, "src/main.tsx"),
        external: isSSR ? ["react", "react-dom/server"] : [],
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
