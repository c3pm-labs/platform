import '@testing-library/cypress/add-commands';
import { buildUser } from './generate';

Cypress.Commands.add('createUser', overrides => {
    const user = buildUser(overrides)
    const body = {
        operationName: "register",
        query: "mutation register($username: String!, $email: String!, $password: String!) {register(username: $username, email: $email, password: $password) { id email username }}",
        variables: user,
    }
    return cy
        .request({
            url: `${Cypress.env('API_URL')}/graphql`,
            method: 'POST',
            body,
        })
        .then(({body}) => ({
            ...body.data.register,
            password: user.password
        }))
})

Cypress.Commands.add('login', user => {
    const body = {
        operationName: "login",
        query: "mutation login($login: String!, $password: String!) {login(login: $login, password: $password) {id email username }}",
        variables: { login: user.email, password: user.password },
    }

    return cy
        .request({
            url: `${Cypress.env('API_URL')}/graphql`,
            method: 'POST',
            body,
        })
        .then(({body}) => ({
            ...body.data.login,
            password: user.password
        }))
})

Cypress.Commands.add('logout', () => {
    const body = {
        operationName: "logout",
        query: "mutation logout {logout { id username email }}",
        variables: {} ,
    }

    return cy
        .request({
            url: `${Cypress.env('API_URL')}/graphql`,
            method: 'POST',
            body,
        })
})

Cypress.Commands.add('assertHome', () => {
    cy.url().should('eq', `${Cypress.config().baseUrl}/`)
})

Cypress.Commands.add('assertLogin', () => {
    cy.url().should('eq', `${Cypress.config().baseUrl}/login`)
})

Cypress.Commands.add('assertRegister', () => {
    cy.url().should('eq', `${Cypress.config().baseUrl}/register`)
})

Cypress.Commands.add('checkAuthCookie', () => {
    cy.getCookies()
        .should('have.length', 1)
        .then((cookies) => {
            expect(cookies[0]).to.have.property('name', 'connect.sid')
        })
})
