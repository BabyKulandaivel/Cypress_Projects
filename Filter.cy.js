/// <reference types="Cypress" />s
describe('Filter lists', ()=>{
    it('Filter listes based on entered characters',()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('Input.search-keyword').type('ca');
        cy.get('.product:visible').should('have.length',4);
    })
})