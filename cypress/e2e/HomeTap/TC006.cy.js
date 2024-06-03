/// <reference types="cypress" />

it('Error Message', () => {
    
    cy.visit('https://www.zillow.com/mortgage-calculator/')

    // Enter new Interest Rate

    cy.get('#rate').type('{selectall}{backspace}')

    cy.get('#rate').type('200{enter}')

    // Validate error message

    cy.contains('equal')
    cy.contains('Rate must be less than or equal to 100').should('be.visible')

})