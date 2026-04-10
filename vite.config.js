import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 4173
  },
  build: {
    target: 'es2020',
    chunkSizeWarningLimit: 2200,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'three', '@react-three/fiber', '@react-three/drei', '@react-three/cannon', 'framer-motion']
        }
      }
    }
  }
});
