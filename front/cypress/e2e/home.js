describe('home page', () => {
  it('render home page', () => {
    cy.visit('/')
      .get(':nth-child(4) > .MuiButton-outlined')
      .click()
      .url()
      .should('eq', Cypress.config().baseUrl + '/login')
  })
})
