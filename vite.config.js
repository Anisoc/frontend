import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";
import path from "path";

export default defineConfig(({ command, mode }) => {
  const isProduction = mode === "production";
  return {
    plugins: [svelte()],
    build: {
      minify: isProduction,
    },
    resolve: {
      alias: {
        "@routes": path.resolve(process.cwd(), "/.routify/routes"),
      },
    },
  };
});
