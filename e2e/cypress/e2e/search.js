describe('search', () => {
  it('should redirect on result page and show result', () => {
    const p = { name: 'hello', version: '1.0.0' }
    cy.createUserAndPublish(p).then((user) => {
      cy.visit('/')
      cy.findByPlaceholderText(/search\.\.\./i).type(`${p.name}\n`)
      cy.checkPackageCard({ ...p, author: user.username })
    })
  })

  it('should redirect on result page and show no result', () => {
      cy.visit('/')
      cy.findByPlaceholderText(/search\.\.\./i).type('bonjour\n')
      cy.findByTestId('number-of-packages').contains('0')
  })

})
