
describe('Verify Signup functionality',()=>{
  it('Verify Successfull Signup to application',()=>{
    
   cy.visit('https://react-redux.realworld.io/#/register?_k=jwvuf3');
   cy.get('input[placeholder="Username"]').type('BabyKul123');
   cy.get('input[placeholder="Email"]').type('B123@check.com');
   cy.get('input[placeholder="Password"]').type("123456");
   cy.get('button[type="submit"]').click();
   cy.contains('conduit').should('be.visible');
  })

})