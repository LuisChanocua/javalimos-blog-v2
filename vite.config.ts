// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { fileURLToPath } from "node:url";
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const selfHosted = process.env["SELF_HOSTED"] === "true";
const contentSource = process.env["VITE_CONTENT_SOURCE"] ?? "local";

if (contentSource !== "local" && contentSource !== "empty") {
  throw new Error(
    `Invalid VITE_CONTENT_SOURCE: "${contentSource}". Supported values: local, empty.`,
  );
}

const useEmptyContentSource = contentSource === "empty";

const emptyContentAliases = useEmptyContentSource
  ? [
      {
        find: "@/domains/blog/local-posts-repository",
        replacement: fileURLToPath(
          new URL("./src/domains/blog/empty-posts-repository.ts", import.meta.url),
        ),
      },
      {
        find: "@/domains/experiences/local-experiences-repository",
        replacement: fileURLToPath(
          new URL("./src/domains/experiences/empty-experiences-repository.ts", import.meta.url),
        ),
      },
      {
        find: "@/domains/events/local-events-repository",
        replacement: fileURLToPath(
          new URL("./src/domains/events/empty-events-repository.ts", import.meta.url),
        ),
      },
    ]
  : [];

export default defineConfig({
  vite: {
    resolve: {
      alias: emptyContentAliases,
    },
  },
  ...(selfHosted ? { nitro: { preset: "node-server" } } : {}),
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
