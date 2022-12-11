import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  build: {
    outDir: 'build',
  },
  resolve: {
    alias: {
      '@/layout': resolve(__dirname, './src/components/layout'),
      '@/widgets': resolve(__dirname, './src/components/widgets'),
      '@/components': resolve(__dirname, './src/components'),
      '@/helpers': resolve(__dirname, './src/core/helpers'),
      '@/interfaces': resolve(__dirname, './src/core/interfaces'),
      '@/services': resolve(__dirname, './src/core/services'),
    },
  },
  test: {
    css: false,
    coverage: {
      reporter: ['text', 'json', 'html', 'lcov'],
    },
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./tests/setup.ts'],
  },
  plugins: [react()],
});
