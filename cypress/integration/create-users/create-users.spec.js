const strings = require('../../support/strings')

describe('Create user', () => {
  
  beforeEach(() => {
    cy.visit('/user/create')
    cy.get('[data-testid="email-input"]').as('emailInput')
    cy.get('[data-testid="user-input"]').as('userInput')
    cy.get('[data-testid="address-input"]').as('addressInput')
    cy.get('[data-testid="create-button"]').as('createBtn')
    cy.get('[data-testid="cancel-button"]').as('cancelBtn')
  })

  it('displays the create user form', () => {
    cy.get('.container h2').should('have.text', strings.createUser)
    cy.get('@emailInput').should('be.empty')
    cy.get('@userInput').should('be.empty')
    cy.get('@addressInput').should('be.empty')
    cy.get('.form-check-label').should('have.text', strings.active)
    cy.get('[data-testid="checkbox"]').should('be.checked')
    cy.get('@createBtn').should('be.enabled')
    cy.get('@cancelBtn').should('be.enabled')
  })

  it('displays input field error messages when attempting to create user with empty input', () => {
    cy.get('@emailInput').clear()
    cy.get('@userInput').clear()
    cy.get('@addressInput').clear()
    cy.get('@createBtn').click()
    cy.get('.form-row > div:nth-child(1) > div').as('emailError').should('have.text', strings.invalidEmail)
    cy.checkErrorStyling('@emailError') 
    cy.get('.form-row > div:nth-child(2) > div').as('usernameError').should('have.text', strings.fieldRequired)
    cy.checkErrorStyling('@usernameError') 
    cy.get('form > div:nth-child(2) > div').as('addressError').should('have.text', strings.fieldRequired)
    cy.checkErrorStyling('@addressError')
  })

  it('redirects to user list on cancel', () => {
    cy.get('@cancelBtn').click()
    cy.url().should('eq', `${Cypress.config().baseUrl}/users`)
  })
})
