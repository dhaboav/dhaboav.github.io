import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { defineConfig } from 'vite';


// https://vite.dev/config/
export default defineConfig({
  base: '/',  
  resolve: {
    alias: {
        '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    react(), 
    tailwindcss()
  ],
  build: {
    outDir: 'dist',
    emptyOutDir: true, 
  }
});
