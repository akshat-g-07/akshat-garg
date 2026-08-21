import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  server: { port: 3200 },
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    include: ["components"],
  },
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
      // react: path.resolve(import.meta.dirname, "./node_modules/react"),
      // "react-dom": path.resolve(import.meta.dirname, "./node_modules/react-dom"),
      // "react/jsx-runtime": path.resolve(
      //   import.meta.dirname,
      //   "./node_modules/react/jsx-runtime.js",
      // ),
      // "react/jsx-dev-runtime": path.resolve(
      //   import.meta.dirname,
      //   "./node_modules/react/jsx-dev-runtime.js",
      // ),
    },
  },
});
