/// <reference types="Cypress" />s
describe('Filter lists', ()=>{
    it('Filter listes based on entered characters',()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('Input.search-keyword').type('ca');
        //To find only visible elements
        //cy.get('.product:visible').should('have.length',4);
        cy.get('.products').find('.product').should('have.length',4);
        cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click();
    })
})