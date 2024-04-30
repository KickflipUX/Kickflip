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
    port: 8888,
    strictPort: true,
   },
  server: {
    port: 8888,
    strictPort: true,
    host: true,
   },
});