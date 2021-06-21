describe('search', () => {
  const p = { name: 'boost', version: '6.4.5' };
  it('should redirect on result page and show no result', () => {
    cy.visit('/');
    cy.findByPlaceholderText(/search\.\.\./i).type('bonjour\n');
    cy.findByTestId('number-of-packages').contains('0');
  });
  it('should redirect on result page and packages with boost name', () => {
    cy.visit('/');
    cy.findByPlaceholderText(/search\.\.\./i).type('boost\n');
    cy.checkPackageCard({ ...p, author: 'demodemo' });
  });
  it('should redirect on result page and show all packages', () => {
    cy.visit('/');
    cy.findByPlaceholderText(/search\.\.\./i).type('{enter}');
    cy.findByTestId('number-of-packages').contains('4');
  });
  it('should redirect on result page, click on tag and show correct package', () => {
    cy.visit('/');
    cy.findByPlaceholderText(/search\.\.\./i).type('{enter}');
    cy.contains('boost').click();
    cy.checkPackageCard({ ...p, author: 'demodemo' });
    cy.findByTestId('number-of-packages').contains('1');
  });
});
