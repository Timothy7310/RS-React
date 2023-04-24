describe('Just visit e2e test', () => {
  it('should visit', () => {
    cy.visit('/about');
    cy.get('main > div').should('have.text', 'About us');
  });
});
