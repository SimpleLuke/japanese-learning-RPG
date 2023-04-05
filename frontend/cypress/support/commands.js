// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("getTest", (selector, ...args) => {
  return cy.get(`[data-test=${selector}]`, ...args);
});

Cypress.Commands.add("signup", (email, password) => {
  cy.visit("/");
  cy.wait(7000);
  cy.get('[data-test="signup-btn"]').click();
  cy.get('[data-test="emailSignupInput"]').type(email);
  cy.get('[data-test="passwordSignupInput"]').type(password);
  cy.get('[data-test="signUpSubmitButton"]').click();
  cy.get('[data-test="submitChosenCharacter"]').click();
  cy.wait(500);
  cy.get('[data-test="cut-scene"]').click();
});
