/// <reference types="cypress"/>

it('Google Search',() => {
    cy.visit('https://www.google.com/')
    cy.get('#APjFqb').type('Automation step by step{Enter}')
   // cy.contains('Google Search').click()
   cy.get('[data-hveid="CBgQAA"] > .nPDzT > .YmvwI')
   
})