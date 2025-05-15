// vite.github.config.js - Used specifically for GitHub Pages deployment
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  build: {
    outDir: 'dist',
    emptyOutDir: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './client/src'),
      '@assets': path.resolve(__dirname, './attached_assets'),
      '@components': path.resolve(__dirname, './client/src/components'),
      '@contexts': path.resolve(__dirname, './client/src/contexts'),
      '@hooks': path.resolve(__dirname, './client/src/hooks'),
      '@lib': path.resolve(__dirname, './client/src/lib'),
      '@pages': path.resolve(__dirname, './client/src/pages'),
      '@shared': path.resolve(__dirname, './shared'),
      '@translations': path.resolve(__dirname, './client/src/translations')
    }
  },
  // For GitHub Pages, add a base path
  base: '/StriktlyWebsiteNew/',
  // Specify the entry point
  root: './',
  publicDir: 'attached_assets',
});