import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      provider: 'c8',
      all: true,
      enabled: true, // or 'istanbul'
      reporter: ['text'],
      include: ['**/*.{jsx,tsx}'],
    },
    environment: 'jsdom',
    globals: true,
  },
});
