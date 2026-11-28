import { resolve } from 'path';

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  resolve: {
    alias: {
      '@resources': resolve(import.meta.dirname, './resources'),
      '@': resolve(import.meta.dirname, './src'),
    },
  },
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              test: /node_modules\/react/,
              name: 'react',
            },
            {
              name: 'ui-vendor',
              test: /node_modules[\\/](lucide-react|@base-ui|@floating-ui)[\\/]/,
              priority: 10,
            },
          ],
        },
      },
    },
  },
});
