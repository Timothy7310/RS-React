/// <reference types="cypress" />

describe('About Page', () => {
  it('should visit', () => {
    cy.visit('/about');
    cy.get('main > div').should('have.text', 'About us');
  });
});
