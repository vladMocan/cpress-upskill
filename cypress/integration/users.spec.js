/// <reference types="cypress" />

describe('User List page', () => {
    before(() => {
        cy.intercept('GET', 'https://be-the-qa-api.herokuapp.com/users', {
            fixture: 'users.json',
        }).as('getRoute')
        cy.visit('/users')
        cy.wait('@getRoute')
    })

    beforeEach(() => {
        cy.get('.card').as('userListSection')
        cy.get('.card-header').as('userListSectionHeader')
        cy.get('[data-testid="search-input"]').as('searchInputBox')
        cy.get('[data-testid="create-user-button"]').as('createUserButton')
        cy.get('.table').as('userTable')
        cy.get('[data-testid="column-name"]').as('nameColumn')
        cy.get('[data-testid="column-email"]').as('emailColumn')
        cy.get('[data-testid="column-address"]').as('addressColumn')
        cy.get('[data-testid="column-active"]').as('activeStatusColumn')
        cy.get('[data-testid="row-name"]').as('rowName')
        cy.get('[data-testid="row-email"]').as('rowEmail')
        cy.get('[data-testid="row-adress"]').as('rowAddress')
        cy.get('[data-testid="row-checkbox"]').as('rowCheckbox')
    })

    it('should show "User List" section', () => {
        cy.get('@userListSection').should('be.visible')
        cy.get('@userListSectionHeader').should('have.text', ' User list ')
    })

    it('should show "Search By" input box', () => {
        cy.get('@searchInputBox').should('be.visible').and('be.empty')
    })

    it('should show the user table and each column', () => {
        cy.get('@userTable').should('be.visible')
        cy.get('@nameColumn').should('have.text', 'Name')
        cy.get('@emailColumn').should('have.text', 'Email')
        cy.get('@addressColumn').should('have.text', 'Address')
        cy.get('@activeStatusColumn').should('have.text', 'Active')
    })

    it('should correctly display a filtered table when entering valid "Search By" input', () => {
        cy.get('@searchInputBox').type('cristi')
        cy.get('@rowName')
            .should('have.length', 1)
            .and('have.text', ' cristi.mock ')
        cy.get('@searchInputBox').clear()
    })

    it('should correctly display an empty table when entering invalid "Search By" input', () => {
        cy.get('@searchInputBox').type('ab#1;')
        cy.get('@rowName').should('not.exist')
        cy.get('@searchInputBox').clear()
    })

    it('should correctly load stubbed /users API call response in the table', () => {
        const userArray = [
            {
                name: ' cristi.mock ',
                email: 'cristian.moculescu@chiparos.com',
                active: true,
            },
            {
                name: ' sebi.mock ',
                email: 'sebastian.moculescu@chiparos.com',
                active: false,
            },
        ]
        cy.get('@rowName')
            .should('have.length', 2)
            .each(($el, index) => {
                cy.wrap($el).should('have.text', userArray[index].name)
            })
        cy.get('@rowEmail')
            .should('have.length', 2)
            .each(($el, index) => {
                cy.wrap($el).should('have.text', userArray[index].email)
            })
        cy.get('@rowAddress')
            .should('have.length', 2)
            .each(($el) => {
                cy.wrap($el).should('have.text', '1234 Main')
            })
        cy.get('@rowCheckbox')
            .should('have.length', 2)
            .each(($el, index) => {
                if (userArray[index].active) cy.wrap($el).should('be.checked')
                else cy.wrap($el).should('not.be.checked')
            })
        cy.get('[data-testid="delete-button"]')
            .should('have.length', 2)
            .each(($el) => {
                cy.wrap($el)
                    .should('have.text', 'Delete ')
                    .and('have.css', 'background-color', 'rgb(220, 53, 69)')
                    .and('be.enabled')
            })
    })

    it('should show "Create User" button', () => {
        cy.get('@createUserButton')
            .should('be.visible')
            .and('be.enabled')
            .and('have.text', ' Create User ')
            .and('have.css', 'background-color', 'rgb(0, 123, 255)')
            .click()
        cy.location('pathname').should('equal', '/user/create')
    })
})
