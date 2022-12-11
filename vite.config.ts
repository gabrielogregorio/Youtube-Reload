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
      '@/components': resolve(__dirname, './src/components'),
      '@/hooks': resolve(__dirname, './src/core/hooks'),
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
