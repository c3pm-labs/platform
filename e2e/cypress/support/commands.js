import '@testing-library/cypress/add-commands';
import buildUser from './generate';

Cypress.Commands.add('createUser', (overrides) => {
  const user = buildUser(overrides);
  const rbody = {
    operationName: 'register',
    query: 'mutation register($username: String!, $email: String!, $password: String!) {register(username: $username, email: $email, password: $password) { id email username }}',
    variables: user,
  };
  return cy
    .request({
      url: `${Cypress.env('API_URL')}/graphql`,
      method: 'POST',
      body: rbody,
    })
    .then(({ body }) => ({
      ...body.data.register,
      password: user.password,
    }));
});

Cypress.Commands.add('login', (user) => {
  const rbody = {
    operationName: 'login',
    query: 'mutation login($login: String!, $password: String!) {login(login: $login, password: $password) {id email username }}',
    variables: { login: user.email, password: user.password },
  };

  return cy
    .request({
      url: `${Cypress.env('API_URL')}/graphql`,
      method: 'POST',
      body: rbody,
    })
    .then(({ body }) => ({
      ...body.data.login,
      password: user.password,
    }));
});

Cypress.Commands.add('cliLogin', (user) => {
  const rbody = {
    login: user.email,
    password: user.password,
  };
  return cy
    .request({
      url: `${Cypress.env('API_URL')}/v1/auth/login`,
      method: 'POST',
      body: rbody,
    })
    .then(({ body }) => ({
      ...body,
      ...rbody,
    }));
});

Cypress.Commands.add('publish', ({ user, version, name }) => {
  const args = {
    url: `${Cypress.env('API_URL')}/v1/packages/publish`, apiKey: user.apiKey, name, version,
  };
  return cy.task('publishPackage', args);
});

Cypress.Commands.add('createUserAndPublish', ({ version, name }) => cy.createUser().then((user) => {
  // eslint-disable-next-line max-len
  cy.logout().then(() => cy.cliLogin(user).then((cliUser) => cy.publish({ user: cliUser, name, version }).then(() => ({ ...user, ...cliUser }))));
}));

Cypress.Commands.add('logout', () => {
  const body = {
    operationName: 'logout',
    query: 'mutation logout {logout { id username email }}',
    variables: {},
  };

  return cy
    .request({
      url: `${Cypress.env('API_URL')}/graphql`,
      method: 'POST',
      body,
    });
});

Cypress.Commands.add('assertHome', () => {
  cy.url().should('eq', `${Cypress.config().baseUrl}/`);
});

Cypress.Commands.add('assertLogin', () => {
  cy.url().should('eq', `${Cypress.config().baseUrl}/login`);
});

Cypress.Commands.add('assertRegister', () => {
  cy.url().should('eq', `${Cypress.config().baseUrl}/register`);
});

Cypress.Commands.add('checkAuthCookie', () => {
  cy.getCookies()
    .should('have.length', 1)
    .then((cookies) => {
      expect(cookies[0]).to.have.property('name', 'connect.sid');
    });
});

Cypress.Commands.add('checkPackageCard', ({ name, version, author }) => {
  cy.findByTestId(`packageCard-${name}`).should('exist').contains(author);
  cy.findByTestId(`packageCard-${name}-name`).contains(`${name} v${version}`).should('have.prop', 'href', `${Cypress.config().baseUrl}/package/${name}/${version}`);
});
