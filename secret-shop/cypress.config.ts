/* eslint-disable @typescript-eslint/no-var-requires */
import { defineConfig } from 'cypress';
import coverage from '@cypress/code-coverage/task';

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//       require('@cypress/code-coverage/task')(on, config);
//       return config;
//     },
//     baseUrl: 'http://localhost:3000',
//     specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
//     supportFile: 'cypress/support/e2e.js',
//     testIsolation: false,
//   },
//   video: false,
// });

export default defineConfig({
  env: {
    codeCoverage: {
      exclude: 'cypress/**/*.*',
    },
  },
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      coverage(on, config);
      return config;
    },
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.ts',
    testIsolation: false,
  },
  video: false,
});
