describe('SignupFlows',()=>{
  it('Successfull Signup Flow', ()=>{

    cy.visit('https://react-redux.realworld.io/#/register?_k=jwvuf3');
    cy.get('input[placeholder="Username"]').type('SSBK5');
    cy.get('input[placeholder="Email"]').type('SSBK5@check.com');
    cy.get('input[placeholder="Password"]').type("123456");
    cy.get('button[type="submit"]').click();
    cy.contains('Your Feed').should('be.visible');

  }) 

  it('Unsccessful Signupflow', ()=>{
    cy.visit('https://react-redux.realworld.io/#/register?_k=jwvuf3');
    cy.get('input[placeholder="Username"]').type('SSBK5');
    cy.get('input[placeholder="Email"]').type('SSBK5@check.com');
    cy.get('input[placeholder="Password"]').type("123456");
    cy.get('button[type="submit"]').click();
    cy.get('.error-messages > :nth-child(1)').contains('email has already been taken');
    cy.get('.error-messages > :nth-child(2)').contains('username has already been taken');

   }) 

})

