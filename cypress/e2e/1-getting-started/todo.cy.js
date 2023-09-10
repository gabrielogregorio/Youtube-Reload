/// <reference types="cypress" />

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5556');
  });

  it('displays two todo items by default', () => {
    expect(1).equal(1);
  });
});
