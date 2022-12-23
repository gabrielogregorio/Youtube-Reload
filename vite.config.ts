import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  base: '/youtube-reload',
  build: {
    outDir: 'build',
  },
  resolve: {
    alias: {
      '@/layouts': resolve(__dirname, './src/components/layouts'),
      '@/screens': resolve(__dirname, './src/components/screens'),
      '@/templates': resolve(__dirname, './src/components/templates'),
      '@/widgets': resolve(__dirname, './src/components/widgets'),

      '@/adapters': resolve(__dirname, './src/core/adapters'),
      '@/configs': resolve(__dirname, './src/core/configs'),
      '@/connections': resolve(__dirname, './src/core/connections'),
      '@/constants': resolve(__dirname, './src/core/constants'),
      '@/contracts': resolve(__dirname, './src/core/contracts'),
      '@/helpers': resolve(__dirname, './src/core/helpers'),
      '@/data': resolve(__dirname, './src/core/data'),
      '@/errors': resolve(__dirname, './src/core/errors'),
      '@/guard': resolve(__dirname, './src/core/guard'),
      '@/hooks': resolve(__dirname, './src/core/hooks'),
      '@/libs': resolve(__dirname, './src/core/libs'),
      '@/locales': resolve(__dirname, './src/core/locales'),
      '@/services': resolve(__dirname, './src/core/services'),
      '@/utils': resolve(__dirname, './src/core/utils'),

      '@/mocks': resolve(__dirname, './src/mocks'),
      '@/pages': resolve(__dirname, './src/pages'),
    },
  },
  // @ts-ignore
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
