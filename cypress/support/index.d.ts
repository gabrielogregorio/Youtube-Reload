declare namespace Cypress {
  interface Chainable {
    /**
     * @example cy.verifyAccessibilityAxeA11y(props)
     * cy.wait('@login')
     *
     */
    verifyAccessibilityAxeA11y(props: { root: string; screensSizesToTest?: (Cypress.ViewportPreset | number[])[] });
  }
}
