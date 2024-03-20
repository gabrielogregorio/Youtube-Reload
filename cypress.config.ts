import { defineConfig } from 'cypress';

import createBundler from '@bahmutov/cypress-esbuild-preprocessor';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
// @ts-ignore
import { createEsbuildPlugin } from '@badeball/cypress-cucumber-preprocessor/esbuild';

// https://github.com/badeball/cypress-cucumber-preprocessor/blob/master/docs/step-definitions.md

async function setupNodeEvents(on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions): Promise<Cypress.PluginConfigOptions> {
  require('./cypress/plugins/index.js')(on, config); // load custom plgugins

  // load bdd
  await addCucumberPreprocessorPlugin(on, config);

  const bundler = createBundler({
    plugins: [createEsbuildPlugin(config)],
  });

  on('file:preprocessor', bundler);

  return config;
}

// if(1) {
//   console.error('ops')
//   process.exit(1)
// }

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
    setupNodeEvents,
    specPattern: ['cypress/e2e/bdd/cases/*.feature', 'cypress/e2e/tests/*.{js,ts}'],
    baseUrl: 'http://127.0.0.1:5556',
  },
});
