import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { componentTagger } from "lovable-tagger";

const __dirname = dirname(fileURLToPath(import.meta.url));

// ...existing code...

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  //base: 'https://github.com/tashfeenMustafa/myrlink-source-connect.git',
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
