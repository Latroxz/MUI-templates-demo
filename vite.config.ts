import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './components'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          mui: ['@mui/material', '@mui/icons-material']
        },
      },
    },
  },
});
