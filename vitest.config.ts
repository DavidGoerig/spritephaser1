import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    // Default environment for src/ tests (no DOM needed).
    // Individual test files that need jsdom declare: @vitest-environment jsdom
    environment: "node",
    include: [
      "src/**/*.test.ts",
      "public/**/*.test.js",
    ],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      include: [
        "src/**/*.ts",
        "public/characters/viewer.js",
      ],
      exclude: [
        "node_modules/",
        "src/**/*.test.ts",
        "public/**/*.test.js",
        "src/main.ts",
        "src/game.ts",
        // Shaders: GLSL strings and Phaser subclasses — GPU-only, not coverable in node
        "src/engine/shaders/ElementAuraPipeline.ts",
        "src/engine/shaders/SelectionPipeline.ts",
        "src/engine/shaders/FogOfWarPipeline.ts",
      ],
    },
  },
});



