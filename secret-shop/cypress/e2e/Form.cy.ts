/// <reference types="cypress" />

describe('Form Page', () => {
  it('should create form', () => {
    cy.visit('/form');
    cy.get('#itemName').should('have.value', '');
    cy.get('#formRarity').should('have.value', '');
    cy.get(':nth-child(1) > .goods-filter-radio__label > .goods-filter-radio__checkmark').should(
      'not.be.checked'
    );
    cy.get(':nth-child(2) > .goods-filter-radio__label > .goods-filter-radio__checkmark').should(
      'not.be.checked'
    );
    cy.get('.goods-filter-checkbox__checkmark').should('not.be.checked');
    cy.get('#formDate').should('have.value', '');
    cy.get('#itemImage').should('have.value', '');
    cy.get('#rating').should('have.value', '');
  });

  it('should required', () => {
    cy.visit('/form');
    cy.get('.form__submit').click();
    cy.get('.form-error').should('have.length', 6);
  });

  it('should render card', () => {
    cy.visit('/form');
    cy.get('#itemName').type('Test name');
    cy.get('#formRarity').select('Comedy');
    cy.get(':nth-child(1) > .goods-filter-radio__label').click();
    cy.get('.goods-filter-checkbox__label').click();
    cy.get('#formDate').type('2021-01-10');
    cy.get('#itemImage').selectFile('cypress/fixtures/poster.jpg')
    cy.get('#rating').type('10');

    cy.get('.form__submit').click();
    cy.get('.card').should('have.length', 1);
  });
});
