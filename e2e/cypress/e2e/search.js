describe('search', () => {
  const boost = { name: 'boost', version: '6.4.5' };
  const irrlicht = { name: 'irrlicht', version: '2.4.5' };
  const sfml = { name: 'sfml', version: '2.4.5' };
  const maths = { name: 'maths', version: '2.4.5' };

  it('should redirect on result page and show no result', () => {
    cy.visit('/');
    cy.findByPlaceholderText(/search\.\.\./i).type('fakepackage\n');
    cy.findByTestId('number-of-packages').contains('0');
  });
  it('should redirect on result page and show boost package', () => {
    cy.visit('/');
    cy.findByPlaceholderText(/search\.\.\./i).type('boost\n');
    cy.checkPackageCard({ ...boost, author: 'demodemo' });
  });
  it('should redirect on result page and show all packages', () => {
    cy.visit('/');
    cy.findByPlaceholderText(/search\.\.\./i).type('{enter}');
    cy.findByTestId('number-of-packages').contains('6');
  });
  it('should redirect on result page, click on tag and show correct package', () => {
    cy.visit('/');
    cy.findByPlaceholderText(/search\.\.\./i).type('{enter}');
    cy.contains('boost').click();
    cy.checkPackageCard({ ...boost, author: 'demodemo' });
    cy.findByTestId('number-of-packages').contains('1');
  });
  it('should redirect on result page, click on tag then deselect it and show all results', () => {
    cy.visit('/');
    cy.findByPlaceholderText(/search\.\.\./i).type('{enter}');
    cy.contains('boost').click();
    cy.checkPackageCard({ ...boost, author: 'demodemo' });
    cy.findByTestId('number-of-packages').contains('1');
    cy.contains('boost').click();
    cy.findByTestId('number-of-packages').contains('6');
  });
  it('should redirect on result page, click on multiple tags and show correct packages', () => {
    cy.visit('/');
    cy.findByPlaceholderText(/search\.\.\./i).type('{enter}');
    cy.contains('graphics').click();
    cy.checkPackageCard({ ...irrlicht, author: 'demodemo' });
    cy.checkPackageCard({ ...sfml, author: 'demodemo' });
    cy.findByTestId('number-of-packages').contains('2');
    cy.contains('sfml').click();
    cy.checkPackageCard({ ...sfml, author: 'demodemo' });
    cy.findByTestId('number-of-packages').contains('1');
  });
  it('should redirect on result page, click on multiple tags and show no package', () => {
    cy.visit('/');
    cy.findByPlaceholderText(/search\.\.\./i).type('{enter}');
    cy.contains('boost').click();
    cy.checkPackageCard({ ...boost, author: 'demodemo' });
    cy.findByTestId('number-of-packages').contains('1');
    cy.contains('sfml').click();
    cy.findByTestId('number-of-packages').contains('0');
  });
  it('should redirect on result page, search word and show correct packages ordered', () => {
    cy.visit('/');
    cy.findByPlaceholderText(/search\.\.\./i).type('m\n');
    cy.checkPackageCard({ ...maths, author: 'demodemo' });
    cy.checkPackageCard({ ...sfml, author: 'demodemo' });
    cy.findByTestId('number-of-packages').contains('2');
  });
});
