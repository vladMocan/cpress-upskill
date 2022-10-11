/// <reference types="cypress" />
describe('Create User page', () => {
    before(() => {
        cy.visit('/user/create')
    })

    it('should land on the correct page', () => {
        cy.location('pathname').should('equal', '/user/create')
    })


})
