/// <reference types="cypress" />

import 'cypress-audit/commands';
import 'cypress-axe';
import './accessibility-commands';

(function showLogsOnHeadlessMode() {
  Cypress.Commands.overwrite('log', (_subject, ...message) => cy.task('log', ...message));
})();
