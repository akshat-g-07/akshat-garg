import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { port: 3100 },
  build: {
    chunkSizeWarningLimit: 1600,
  },
});
