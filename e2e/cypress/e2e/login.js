import buildUser from '../support/generate';

describe('login', () => {
  it('should login an existing user', () => {
    cy.createUser().then((user) => {
      cy.logout();
      cy.visit('/');

      cy.findByText(/sign in/i)
        .click()
        .url()
        .should('eq', `${Cypress.config().baseUrl}/login`);

      cy.findByLabelText(/email or username/i)
        .type(user.email);
      cy.findByLabelText(/password \*/i)
        .type(user.password);
      cy.findByText(/sign in/i)
        .click();

      cy.assertHome();
      cy.checkAuthCookie();
    });
  });

  it('shouldn\'t login the user because credentials are invalid', () => {
    const user = buildUser();

    cy.visit('/login');

    cy.findByLabelText(/email or username/i)
      .type(user.email);
    cy.findByLabelText(/password \*/i)
      .type(user.password);
    cy.findByText(/sign in/i)
      .click();
    cy.assertLogin();
  });

  it('should have a link redirecting on the register page', () => {
    cy.visit('/login');
    cy.findByText(/sign up/i).click();
    cy.assertRegister();
  });

  it('should have a link redirecting on the home page', () => {
    cy.visit('/login');
    cy.findByAltText(/c3pm logo/i).click();
    cy.assertHome();
  });
});
