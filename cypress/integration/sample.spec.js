describe('My First Test', () => {
  it('Adds an item to the string list', () => {
    cy.visit('localhost:3000');
    cy.contains('Input').click();
    cy.get('input').type('test1');
    cy.get('input').should('have.value', 'test1');
    cy.contains('Add string').click();
    cy.get('label').should('exist');
    cy.contains('Home').click();
    cy.contains('test1').should('exist');
  });
});
