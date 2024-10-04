import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    includeSource: ["app/api/*.{js,ts}"],
    environment: "jsdom",
  },
});
