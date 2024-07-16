describe('mouse action test', () => {

    it.skip('test1', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.xpath("//*[.='right click me']").rightclick();

        cy.xpath("//button").dblclick();
        
    });


    it('test2', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#mousehover').invoke('show')
        cy.contains('Top').click({force:true})
        cy.url().should('include','top');
        
    });
    
});