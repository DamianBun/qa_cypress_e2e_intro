/// <reference types="cypress" />

const {
  generateUser
} = require('../support/generate');

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    const {
      userName,
      email,
      password
    } = generateUser(); 

    cy.request('POST', 'https://conduit.mate.academy/api/users/', {
      "user": {
        "username": userName,
        "email": email,
        "password": password
      }
    }); 

    cy.visit('/user/login');

    cy.get('[placeholder="Email"]')
    .type(email);

    cy.get('[placeholder="Password"]')
    .type(password);

    cy.get('[class="btn btn-lg btn-primary pull-xs-right"]')
    .click();
  });
});