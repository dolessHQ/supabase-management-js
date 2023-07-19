import { defineConfig } from "tsup";

export default defineConfig([
  {
    name: "main",
    entry: ["./src/index.ts"],
    outDir: "./dist",
    platform: "node",
    format: ["cjs"],
    legacyOutput: true,
    sourcemap: true,
    clean: true,
    bundle: true,
    splitting: false,
    dts: true,
    treeshake: {
      preset: "smallest",
    },
    esbuildPlugins: [],
    noExternal: ["openapi-fetch"],
    external: [],
  },
]);
