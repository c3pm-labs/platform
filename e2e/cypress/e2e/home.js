describe('home page', () => {
  it('should have an header with navigation link', () => {
    cy.visit('/')

    cy.findByText(/sign in/i).click().assertLogin()
    cy.visit('/')
    cy.findByText(/sign up/i).click().assertRegister()
    cy.visit('/')
    cy.findByPlaceholderText(/search\.\.\./i).type('toto\n').url().should('eq', `${Cypress.config().baseUrl}/search?q=toto`)
    cy.findByAltText(/classic-sm c3pm logo/i).click().assertHome()
  })
})
