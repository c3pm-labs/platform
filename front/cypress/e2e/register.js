import { buildUser } from '../support/generate';

describe('registration', () => {
    it('should register a new user', () => {
        const user = buildUser();

        cy.visit('/');
        cy.findByText(/sign up/i)
            .click()
            .url()
            .should('eq', Cypress.config().baseUrl + '/register');
        cy.findByLabelText(/username/i)
            .type(user.username)
        cy.findByLabelText(/email/i)
            .type(user.email)
        cy.findByLabelText(/password \*/i)
            .type(user.password)
        cy.get('.MuiButton-root')
            .click()

    })
})
