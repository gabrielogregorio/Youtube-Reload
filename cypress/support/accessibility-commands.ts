/// <reference types="cypress" />

import axe from 'axe-core';
import { LogService, logType } from './log';

const MAX_NODE_ERRORS_SHOW = 3;

function callbackShowErrors(violations: axe.Result[]) {
  if (violations.length === 0) {
    LogService.normal('✅ No Violations Detected');
    return;
  }

  violations.forEach((violation) => {
    const { description, helpUrl, nodes, help, impact } = violation;

    const logLevelImpact: logType = violation.impact as logType | 'normal';

    LogService[logLevelImpact](impact || '', description);

    nodes.forEach((node, positionError) => {
      if (positionError === MAX_NODE_ERRORS_SHOW) {
        LogService[logLevelImpact]('alert', `${nodes.length} ARE HIDDEN....`);
      }

      if (positionError > MAX_NODE_ERRORS_SHOW) {
        return;
      }

      LogService[logLevelImpact]('code', `${JSON.stringify(node.html, undefined, 2)}`);
    });

    LogService[logLevelImpact]('help', ` ${help} [See more](${helpUrl})`);
    LogService[logLevelImpact]('');
  });
}

const defaultScreensSizesToTest: (Cypress.ViewportPreset | number[])[] = [
  'samsung-s10', // 3040 x 1440.
  'iphone-x', // 2436 x 1125.
  'ipad-mini', //  2048 x 1536.
  [1920, 1080],
  [1366, 768],
  'iphone-6', // 1334 x 750.
];

const checkAccessibilityPage = (root: string, size: Cypress.ViewportPreset | number[]) => {
  if (typeof size !== 'string') {
    cy.viewport(size[0], size[1]);
  } else {
    cy.viewport(size);
  }

  cy.checkA11y(root, {}, callbackShowErrors);
};

Cypress.Commands.add('verifyAccessibilityAxeA11y', ({ root, screensSizesToTest = defaultScreensSizesToTest }) => {
  LogService.cyan('starting', ' Accessibility tests started.');

  cy.injectAxe();

  screensSizesToTest.forEach((size) => {
    checkAccessibilityPage(root, size);
  });
});
