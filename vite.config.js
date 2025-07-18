import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    host: "localhost", // or "0.0.0.0" if you're on WSL or testing on mobile
    port: 5173,
    strictPort: true,
    hmr: {
      protocol: "ws",
      host: "localhost", // or your LAN IP if accessing from another device
      port: 5173,
    },
  },
});
