// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/v1": {
        target: "http://localhost:8000",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  resolve: {
    alias: {
      // Setting up aliases
      "@": path.resolve(new URL(".", import.meta.url).pathname, "src"), // Alias for the 'src' directory
      "@components": path.resolve(
        new URL(".", import.meta.url).pathname,
        "src/components"
      ), // Alias for the 'components' directory
      "@assets": path.resolve(
        new URL(".", import.meta.url).pathname,
        "src/assets"
      ), // Alias for the 'assets' directory
      "@utils": path.resolve(
        new URL(".", import.meta.url).pathname,
        "src/utils"
      ), // Alias for the 'utils' directory
    },
  },
});
