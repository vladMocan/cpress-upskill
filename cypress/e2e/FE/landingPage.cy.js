/// <reference types="cypress" />
import * as constants from '../../helpers/constants.js'

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

    it('should have correct title', () => {
        cy.title().should('equal', constants.values.title)
    })

    it('should show User List nav button', () => {
        cy.get('@userListNavButton')
            .should('have.text', ' User List ')
            .and('have.attr', 'href', '/users')
    })
})
