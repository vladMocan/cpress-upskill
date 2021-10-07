/// <reference types="cypress" />

describe('Landing page', () => {
    before(() => {
        cy.visit('/')
    })

    beforeEach(() => {
        cy.get('[data-testid="user-list"]').as('userListNavButton')
    })

    it('should redirect to /users', () => {
        cy.location('pathname').should('equal', '/users')
    })

    it('should have title "QA"', () => {
        cy.title().should('equal', 'QA')
    })

    it('should show "User List" nav button', () => {
        cy.get('@userListNavButton')
            .should('have.text', ' User List ')
            .and('have.attr', 'href', '/users')
    })
})
