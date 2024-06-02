/// <reference types="cypress" />

it('Mortgage Calculator', () => {
    
    cy.visit('https://www.zillow.com/mortgage-calculator/')

    // Enter new Home Price value

    cy.get('#homePrice').type('{selectall}{backspace}')
    
    cy.get('#homePrice').type('500000')

    // Enter new Down Payment Precent

    cy.get('#form-1_downPaymentPercent').type('{selectall}{backspace}')

    cy.get('#form-1_downPaymentPercent').type('30{enter}')


    // Enter new Loan Program

    cy.get("select")
  .select("Fixed15Year")
  .invoke("val")
  .should("eq", "Fixed15Year")

    // Enter new Interest Rate

    cy.get('#rate').type('{selectall}{backspace}')

    cy.get('#rate').type('2.8{enter}')

    // Ensure Mortage Calculator renders


})