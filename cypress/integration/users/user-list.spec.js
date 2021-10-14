const strings = require('../../support/strings')

describe('User list', () => {
  
  beforeEach(() => {
    cy.visit('/')
  })

  it('redirects to /users page', () => {
    cy.url().should('eq', `${Cypress.config().baseUrl}/users`)
  })

  it('displays an empty user list', () => {
    cy.get('.card-header').should('have.text', strings.userList)
    cy.get('[data-testid="no users text"]').should('have.text', strings.noUsersFound)
  })

  it('allows searching for users', () => {
    cy.get('[data-testid="search-input"]').should('be.empty')
    cy.get('[data-testid="search-result"]').should('have.text', strings.searchBy)
  })

  it('allows creating users', () => {
    cy.get('[data-testid="create-user-button"]')
      .should('be.enabled')
      .click()
    cy.url().should('eq', `${Cypress.config().baseUrl}/user/create`)
  })
})
