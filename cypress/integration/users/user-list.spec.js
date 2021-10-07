describe('User list', () => {
  
  beforeEach(() => {
    cy.visit('https://be-the-qa-fe.herokuapp.com/')
  })

  it('redirects to /users page', () => {
    cy.url().should('eq', 'https://be-the-qa-fe.herokuapp.com/users')
  })

  it('displays an empty user list', () => {
    cy.get('.card-header').should('have.text', ' User list ')
    cy.get('[data-testid="no users text"]').should('have.text', ' No users were found ')
  })

  it('allows searching for users', () => {
    cy.get('[data-testid="search-input"]').should('be.empty')
    cy.get('[data-testid="search-result"]').should('have.text', 'Search by:  ')
  })

  it('allows creating users', () => {
    cy.get('[data-testid="create-user-button"]')
      .should('be.enabled')
      .click()
    cy.url().should('eq', 'https://be-the-qa-fe.herokuapp.com/user/create')
  })
})
