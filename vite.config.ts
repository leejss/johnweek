import { defineConfig } from "vite";
import babel from "@rollup/plugin-babel";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: "./src/index.ts",
      fileName: (f) => `index.${f}.js`,
      formats: ["cjs", "es"],
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      plugins: [
        babel({
          babelHelpers: "runtime",
          exclude: "**/node_modules/**",
          extensions: [".ts", ".tsx"],
        }),
      ],
    },
  },
});
