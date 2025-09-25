/// <reference types="cypress" />

const {
  generateUser
} = require('../support/generate');

describe('Sign In page', () => {
  const {
    userName,
    email,
    password
  } = generateUser();

  it('should provide an ability to log in', () => {
    cy.visit('/');

    cy.request('POST', 'https://conduit.mate.academy/api/users', {
      user: {
        username: userName,
        email,
        password
      }
    }).then(() => {
      cy.visit('/user/login');

      cy.get('[placeholder="Email"]')
        .type(email);

      cy.get('[placeholder="Password"]')
        .type(password);

      cy.get('[class="btn btn-lg btn-primary pull-xs-right"]')
        .click();

      cy.url()
        .should('not.include', '/login');

      cy.get('nav').contains(userName).should('be.visible');
    });
  });
});
