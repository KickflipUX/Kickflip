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
    port: 7777,
    strictPort: true,
   },
  server: {
    port: 7777,
    strictPort: true,
    host: true,
   },
});