describe('explorer page', () => {
    it('Should go to the explorer page', () => {
      cy.visit('/');
      cy.findByText(/explorer/i).click().assertExplorer();
/*       cy.visit('/explorer');
      cy.findByText(/network/i).click().assertTags();
 */
//      cy.findByText(/network/i).click().url().should('eq', `${Cypress.config().baseUrl}/search?q=&tags=network&page=1`);;

      /*   
      cy.visit('/');
      cy.findByText(/sign up/i).click().assertRegister();
      cy.visit('/');
      cy.findByPlaceholderText(/search\.\.\./i).type('toto\n').url().should('eq', `${Cypress.config().baseUrl}/search?q=toto`);
      cy.findByAltText(/classic-sm c3pm logo/i).click().assertHome(); */
    });
  
/*     it('should have user navigation when a user is logged in', () => {
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
    }); */
  });
  