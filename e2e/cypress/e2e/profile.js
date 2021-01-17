import buildUser from '../support/generate';

describe('profile', () => {
  it('should display user information', () => {
    cy.createUser().then((user) => {
      cy.visit(`/user/${user.id}`);

      cy.findByText(user.username).should('exist');
      cy.findByText(user.email).should('exist');
      cy.findByText('0 package uploaded').should('exist');
    });
  });
  it('should display user packages', () => {
    const p = { name: 'sort', version: '1.0.0' };

    cy.createUserAndPublish(p).then((user) => {
      cy.visit(`/user/${user.id}`);
      cy.checkPackageCard({ ...p, author: user.username });
    });
  });

  it('should display an error if username is empty', () => {
    cy.createUser().then(() => {
      cy.visit('/settings');

      cy.findByPlaceholderText(/username/i).clear().blur();
      cy.get('#username-helper-text').contains('username is a required field');
    });
  });
  it('should update the username', () => {
    cy.createUser().then(() => {
      const newUser = buildUser();
      cy.visit('/settings');

      cy.findByPlaceholderText(/username/i).clear().type(newUser.username);
      cy.findByTestId('save-username').click();
      cy.findByTestId('alert').contains('Infos successfully updated!');
    });
  });

  it('should update the email', () => {
    cy.createUser().then(() => {
      const newUser = buildUser();
      cy.visit('/settings');

      cy.findByPlaceholderText(/email/i).clear().type(newUser.email);
      cy.findByTestId('save-email').click();
      cy.findByTestId('alert').contains('Infos successfully updated!');
    });
  });
  it('should display an error if email is empty', () => {
    cy.createUser().then(() => {
      cy.visit('/settings');

      cy.findByPlaceholderText(/email/i).clear().blur();
      cy.get('#email-helper-text').contains('email is a required field');
    });
  });
  it('should display an error if email is invalid', () => {
    cy.createUser().then((user) => {
      cy.visit('/settings');

      cy.findByPlaceholderText(/email/i).clear().type(user.username).blur();
      cy.get('#email-helper-text').contains('email must be a valid email');
    });
  });

  it('should update the description', () => {
    cy.createUser().then(() => {
      cy.visit('/settings');

      cy.findByPlaceholderText(/description/i).clear().type('Hey there! Here is my amazing description');
      cy.findByTestId('save-description').click();
      cy.findByTestId('alert').contains('Infos successfully updated!');
    });
  });
});
