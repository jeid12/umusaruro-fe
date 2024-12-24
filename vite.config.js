import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000, // Specify the dev server port
    open: true, // Automatically open the app in the browser
  },
  build: {
    outDir: 'dist', // Output directory for production build
  },
});
