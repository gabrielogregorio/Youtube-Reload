/// <reference types="cypress" />

context('<App /> ', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5556');
  });

  it('should render app', () => {
    cy.get('button[id="open-notify"]').click();

    cy.get('h3:contains("Notificações")').should('exist');

    cy.get('h4:contains("Cria sistema de frases especiais")').should('exist');

    cy.get('button:contains("Gostei")').first().click();

    cy.get('button:contains("Likes")').first().click();
  });
});
