describe('package', () => {
  it('should display package title and versions', () => {
    const p = { name: 'calculator', version: '1.0.0' }
    const p2 = { name: 'calculatorV2', version: '2.0.0' }

    cy.createUserAndPublish(p).then((user) => {
      cy.publish({ user, ...p2 })
      cy.visit('/package/calculator')

      cy.findByTestId('name').contains(p.name)
      cy.findByTestId('version').contains(`v${p2.version}`)
      cy.findByText(/versions/i).click()

      cy.findByTestId(`link-to-v${p.version}`).should('have.prop', 'href', `${Cypress.config().baseUrl}/package/${p.name}/${p.version}`).click()
      cy.findByTestId('name').contains(p.name)
      cy.findByTestId('version').contains(`v${p.version}`)
      cy.findByText(/versions/i).click()

      cy.findByTestId(`link-to-v${p2.version}`).should('have.prop', 'href', `${Cypress.config().baseUrl}/package/${p.name}/${p2.version}`).click()
      cy.findByTestId('name').contains(p.name)
      cy.findByTestId('version').contains(`v${p2.version}`)

      cy.findByTestId('author').should('have.prop', 'href', `${Cypress.config().baseUrl}/user/${user.id}`)
    })
  })

})
