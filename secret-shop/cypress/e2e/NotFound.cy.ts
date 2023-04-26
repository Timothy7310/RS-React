/// <reference types="cypress" />

describe('Not Found Page', () => {
  it('should visit', () => {
    cy.visit('/blabla');
    cy.get('.error__title').should('have.text', 'Страница не найдена');
  });
});
