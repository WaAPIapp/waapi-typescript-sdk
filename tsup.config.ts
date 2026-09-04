import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  // Dual build: consumers on ESM and on CommonJS both get a working import,
  // which matters for a package aimed at scripts and serverless handlers that
  // have not all migrated.
  format: ["esm", "cjs"],
  dts: true,
  clean: true,
  sourcemap: true,
  target: "node18",
});
