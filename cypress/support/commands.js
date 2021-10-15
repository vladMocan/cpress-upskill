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

/**
 * Check the styling of form error messages.
 * @param {string} selector The selector of the element to check.
 */
Cypress.Commands.add('checkErrorStyling', (selector) => {
  const element = cy.get(selector)
  element.should('have.class', 'alert-danger')
    .should('have.css', 'background-color')
    .and('eq', 'rgb(248, 215, 218)')
})
