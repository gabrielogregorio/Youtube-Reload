/// <reference types="cypress" />

import 'cypress-audit/commands';
import '@cypress-audit/lighthouse/commands';
import 'cypress-audit/index.d.ts';
import 'cypress-axe';

import './accessibility-commands';

(function showLogsOnHeadlessMode() {
  Cypress.Commands.overwrite('log', (_subject, ...message) => cy.task('log', ...message));
})();
