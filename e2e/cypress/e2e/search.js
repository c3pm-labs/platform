describe('search', () => {
  // it('should redirect on result page and show result', () => {
  //   const p = { name: 'hello', version: '1.0.0' };
  //   cy.createUserAndPublish(p).then((user) => {
  //     cy.visit('/');
  //     cy.findByPlaceholderText(/search\.\.\./i).type(`${p.name}\n`);
  //     cy.checkPackageCard({ ...p, author: user.username });
  //   });
  // });

  it('should redirect on result page and show no result', () => {
    cy.visit('/');
    cy.findByPlaceholderText(/search\.\.\./i).type('bonjour\n');
    cy.findByTestId('number-of-packages').contains('0');
  });

  it('should filter by boost tag', () => {
    cy.visit('/search');
    cy.findByTestId('button-boost').click();
    cy.checkPackageCard({ name: 'boost', version: '6.4.5', author: 'demodemo' });
  });

  it('should filter by graphics tag', () => {
    cy.visit('/search');
    cy.findByTestId('button-graphics').click();
    cy.checkPackageCard({ name: 'irrlicht', version: '2.4.5', author: 'demodemo' });
    cy.checkPackageCard({ name: 'sfml', version: '2.4.5', author: 'demodemo' });
  });

  it('should filter by graphics tag + irr name', () => {
    cy.visit('/search');
    cy.findByTestId('button-graphics').click();
    cy.findByPlaceholderText(/search\.\.\./i).type('irr\n');
    cy.checkPackageCard({ name: 'irrlicht', version: '2.4.5', author: 'demodemo' });
  });
});
