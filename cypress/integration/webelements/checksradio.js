describe('radio and checkbox test', () => {

   /* it('radio button', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.xpath("(//input[@class='radioButton'])[1]").check().should('be.visible').and('be.checked').and('have.attr','')
    });
    */

    it('check box', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        
        cy.xpath('//label/input[@type="checkbox"]').check().should('be.checked');

        cy.xpath('//label/input[@type="checkbox"]').uncheck().should('not.be.checked');


        
    });
});