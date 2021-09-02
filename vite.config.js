import { svelte } from "@sveltejs/vite-plugin-svelte";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vite";
import path from "path";

export default defineConfig(({ command, mode }) => {
  const isProduction = mode === "production";
  return {
    plugins: [
      svelte({
        disableDependencyReinclusion: ["@roxi/routify"],
      }),
      tsconfigPaths(),
    ],
    build: {
      minify: isProduction,
    },
    resolve: {
      alias: {
        "@routes": path.resolve("/.routify/routes.js"),
        "@stores": path.resolve("/src/logic/stores.js"),
        "@logic/*": path.resolve("/src/logic/*"),
      },
    },
  };
});
