/// <reference types="cypress" />

/**
 * @type {Cypress.PluginConfig}
 */

const fs = require('fs');
const { lighthouse, prepareAudit } = require('@cypress-audit/lighthouse');
const { pa11y } = require('@cypress-audit/pa11y');

export default function (on, config) {
  on('before:browser:launch', (_browser, launchOptions) => {
    prepareAudit(launchOptions);
  });

  on('task', {
    lighthouse: lighthouse((lighthouseReport) => {
      const reportHtml = lighthouseReport.report;
      fs.writeFileSync('lighthouseReport.html', reportHtml);
    }),
    pa11y: pa11y((report) => fs.writeFileSync('pa11y.html', JSON.stringify(report))),
  });
}
