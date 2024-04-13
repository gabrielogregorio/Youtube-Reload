/// <reference types="cypress" />

context('example to-do app', () => {
  it('should validate screen with notify modal', () => {
    cy.visit('http://localhost:5556');
    cy.get('[aria-label="Abrir notificações"]').click();
    cy.get('h3:contains("Notificações")').should('be.visible');

    cy.verifyAccessibilityAxeA11y({ root: '#root-react-youtube-reload-app', screensSizesToTest: [[1366, 768]] });
  });

  it('should validate home screen', () => {
    cy.visit('http://localhost:5556');
    cy.get('button:contains("Gerar Playlist")').should('be.visible');

    cy.verifyAccessibilityAxeA11y({ root: '#root-react-youtube-reload-app' });
  });

  it('should validate likes screen', () => {
    cy.visit('http://localhost:5556');
    cy.get('button:contains("Gerar Playlist")').should('be.visible');
    cy.get('button:contains("Gostei")').first().click();
    cy.get('button:contains("Likes")').first().click();

    cy.verifyAccessibilityAxeA11y({ root: '#root-react-youtube-reload-app' });
  });

  it('should validate unlikes screen', () => {
    cy.visit('http://localhost:5556');
    cy.get('button:contains("Gerar Playlist")').should('be.visible');
    cy.get('button:contains("ignorar")').first().click();
    cy.get('button:contains("UnLikes")').first().click();

    cy.verifyAccessibilityAxeA11y({ root: '#root-react-youtube-reload-app' });
  });
});
