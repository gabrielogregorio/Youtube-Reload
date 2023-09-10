import { defineConfig } from 'cypress';

export default defineConfig({
  chromeWebSecurity: false,
  viewportWidth: 1366,
  viewportHeight: 768,
  defaultCommandTimeout: 15000,
  pageLoadTimeout: 15000,
  requestTimeout: 15000,
  responseTimeout: 15000,
  screenshotOnRunFailure: true,
  video: false,
  retries: 2,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://127.0.0.1:5556',
  },
});
