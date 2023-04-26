/// <reference types="cypress" />

describe('Main Page', () => {
  it('should start render with top 250', () => {
    cy.intercept('/v1/movie?limit=12&page=1&top250=%21null').as('fetchTop250');
    cy.visit('/');
    cy.wait('@fetchTop250');
    cy.get('.card').should('have.length', 12);
  });

  it('should search', () => {
    cy.get('.search-form__input').type('Зеленая миля');
    cy.get('.search-form__btn').click();
    cy.get('.card').contains('Зеленая миля');
  });

  it('save search result', () => {
    cy.get('[href="/about"]').click();
    cy.get('.header__nav > [href="/"]').click();
    cy.get('.search-form__input').should('have.value', 'Зеленая миля');
    cy.get('.card').contains('Зеленая миля');
  });

  it('should open modal', () => {
    cy.get('.card').click();
    cy.get('.modal-content').contains('Зеленая миля');
  });

  it('should close modal', () => {
    cy.get('.modal-close').click();
    cy.get('.modal-content').should('not.exist');
  });
});
