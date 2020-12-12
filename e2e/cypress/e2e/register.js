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
        cy.findByText(/sign up/i)
            .click()

        cy.assertHome()
        cy.checkAuthCookie()
    })
    it('shouldn\'t create user because email already exist', () => {
        cy.createUser().then((user) => {
            const newUser = buildUser();
            cy.logout()

            cy.visit('/register')
            cy.findByLabelText(/username/i)
                .type(newUser.username)
            cy.findByLabelText(/email/i)
                .type(user.email)
            cy.findByLabelText(/password \*/i)
                .type(newUser.password)
            cy.findByText(/sign up/i)
                .click()

            cy.url().should('eq', `${Cypress.config().baseUrl}/register`)
        })
    })

    it('shouldn\'t create user because username already exist', () => {
        cy.createUser().then((user) => {
            const newUser = buildUser();
            cy.logout()

            cy.visit('/register')
            cy.findByLabelText(/username/i)
                .type(user.username)
            cy.findByLabelText(/email/i)
                .type(newUser.email)
            cy.findByLabelText(/password \*/i)
                .type(newUser.password)
            cy.findByText(/sign up/i)
                .click()
        })

        cy.url().should('eq', `${Cypress.config().baseUrl}/register`)
    })

    it('should have a link redirecting on the login page', () => {
        cy.visit('/register')
        cy.findByText(/sign in/i).click()
        cy.url().should('eq', `${Cypress.config().baseUrl}/login`)
    })

    it('should have a link redirecting on the home page', () => {
        cy.visit('/register')
        cy.findByAltText(/c3pm logo/i).click()
        cy.url().should('eq', `${Cypress.config().baseUrl}/`)
    })
})
