describe('login', () => {
    it('should login an existing user', () => {
        cy.createUser().then((user) => {
            cy.logout()
            cy.visit('/');

            cy.findByText(/sign in/i)
                .click()
                .url()
                .should('eq', Cypress.config().baseUrl + '/login');

            cy.findByLabelText(/email or username/i)
                .type(user.email)
            cy.findByLabelText(/password \*/i)
                .type(user.password)
            cy.findByText(/sign in/i)
                .click()

            cy.assertHome()
            cy.checkAuthCookie()
        })
    })
})
