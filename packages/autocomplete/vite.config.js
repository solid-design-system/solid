import { defineConfig } from 'vite';

export default defineConfig({
  // Base public path when served in production.
  base: '/',

  // Output directory for the production build.
  build: {
    outDir: 'dist'
  },

  // Plugins configuration.
  plugins: []
});
