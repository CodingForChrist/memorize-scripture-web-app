/// <reference types="vitest" />
import { defineConfig } from "vite";

export default defineConfig({
  test: {
    environment: "happy-dom",
    sequence: {
      shuffle: true,
    },
  },
});
