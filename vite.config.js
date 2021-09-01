import { svelte } from "@sveltejs/vite-plugin-svelte";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vite";
import path from "path";

export default defineConfig(({ command, mode }) => {
  const isProduction = mode === "production";
  return {
    plugins: [svelte(), tsconfigPaths()],
    build: {
      minify: isProduction,
    },
    resolve: {
      alias: {
        "@routes": path.resolve(process.cwd(), "/.routify/routes"),
        "@stores": path.resolve(process.cwd(), "/src/logic/stores"),
      },
    },
  };
});
