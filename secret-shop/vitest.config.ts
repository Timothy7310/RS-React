import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    setupFiles: './src/setupTests.ts',
    coverage: {
      provider: 'c8',
      all: true,
      enabled: true,
      reporter: ['text'],
      include: ['**/*.{jsx,tsx}'],
    },
    environment: 'jsdom',
    globals: true,
  },
});
