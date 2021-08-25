describe('search', () => {
  it('should redirect on result page and show no result', () => {
    cy.visit('/');
    cy.findByPlaceholderText(/search\.\.\./i).type('fakepackage\n');
    cy.findByTestId('number-of-packages').contains('0');
  });
});
