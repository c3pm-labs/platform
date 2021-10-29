describe('home page', () => {
  it('should have an header with navigation link', () => {
    cy.visit('/');

    cy.findByText(/sign in/i).click().assertLogin();
    cy.visit('/');
    cy.findByText(/sign up/i).click().assertRegister();
    cy.visit('/');
    cy.findByPlaceholderText(/browse packages/i).type('toto\n').url().should('eq', `${Cypress.config().baseUrl}/search?q=toto&page=1`);
    cy.findByAltText(/classic-sm c3pm logo/i).click().assertHome();
  });

  it('should have user navigation when a user is logged in', () => {
    cy.createUser().then((user) => {
      cy.visit('/');
      cy.findByTestId('user-menu').should('contain', user.username[0]).click();
      cy.findByText(/profile/i).click().url().should('eq', `${Cypress.config().baseUrl}/user/${user.id}`);

      cy.findByTestId('user-menu').should('contain', user.username[0]).click();
      cy.findByText(/settings/i).click().url().should('eq', `${Cypress.config().baseUrl}/settings`);

      cy.findByTestId('user-menu').should('contain', user.username[0]).click();
      cy.findByText(/sign out/i).click().assertHome();
      cy.findByText(/sign in/i);
      cy.findByText(/sign up/i);
    });
  });
});
