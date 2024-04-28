import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      assets: "/src/assets",
      pages: "/src/pages",
    },
  },
  preview: {
    port: 1337,
    strictPort: true,
   },
  server: {
    port: 1337,
    strictPort: true,
    host: true,
    origin: "https://kickflipux.com",
   },
});