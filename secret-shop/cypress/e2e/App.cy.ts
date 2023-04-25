/// <reference types="cypress" />

describe('Main Page', () => {
  it('should start render with top 250', () => {
    cy.intercept('/v1/movie?limit=12&page=1&top250=%21null').as('fetchTop250')
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
    cy.get('.search-form__input').should('have.value', 'Зеленая миля')
    cy.get('.card').contains('Зеленая миля');
  });

  it('should open modal', () => {
    cy.get('.card').click();
    cy.get('.modal-content').contains('Зеленая миля');
  });

  it('should close modal', () => {
    cy.get('.modal-close').click();
    cy.get('.modal-content').should('not.exist');
  })
});

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

describe('About Page', () => {
  it('should visit', () => {
    cy.visit('/about');
    cy.get('main > div').should('have.text', 'About us');
  });
});
