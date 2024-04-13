/// <reference types="cypress" />

context('example to-do app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5556');
  });

  it('displays two todo items by default', () => {
    cy.get('button[id="open-notify"]').click();

    cy.get('h2:contains("Notificações")').should('exist');

    cy.get('h3:contains("Cria sistema de frases especiais")').should('exist');

    cy.get('button:contains("Gostei")').first().click();

    cy.get('button:contains("Likes")').first().click();
  });
});
