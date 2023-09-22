it('Access URL', ()=>{

    cy.visit('https://react-redux.realworld.io/#/register?_k=jwvuf3');
    cy.get('input[placeholder="Username"]').type('SSBK2');
   cy.get('input[placeholder="Email"]').type('SSBK2@check.com');
   cy.get('input[placeholder="Password"]').type("123456");
   cy.get('button[type="submit"]').click();
   cy.contains('Your Feed').should('be.visible');

})