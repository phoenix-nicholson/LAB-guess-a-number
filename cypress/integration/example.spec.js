
describe('Example Test', ()=>{
    before(()=>{
        cy.visit('/');
    });

    describe('HTML elements', ()=>{   
        it('should contain button', ()=>{
            cy.get('#guess-btn').should('be.visible');
        });
    });
    describe('user interaction', ()=> {
        it('clicking on the button resets guesses', ()=> {
            cy.get('#reset').click();
            cy.get('#user-guess').should('be.visible');
        });
        // cy.get('#reset').click();
        // cy.get('#result').should('be.visible');
    });
});