describe('rahulshety', () => {
    it('test1', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.frameLoaded('#courses-iframe');

        cy.iframe().contains('Blog').click();
        
    });
});