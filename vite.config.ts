import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path'
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  resolve: {
    alias: { 
      '@/ui': resolve(import.meta.dirname, './src/components/ui'), 
      '@/i18n': resolve(import.meta.dirname, './src/lib/i18n'), 
      '@/hooks': resolve(import.meta.dirname, './src/hooks'),
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
              name: 'react'
            },
            {
              name: 'ui-vendor',
              test: /node_modules[\\/](lucide-react|@base-ui|@floating-ui)[\\/]/,
              priority: 10,
            },
          ]
        }
      },
    },
  },
});
