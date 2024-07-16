describe('date', () => {
    it('test1', () => {

        cy.visit('https://jqueryui.com/datepicker/')

        cy.frameLoaded('[src="/resources/demos/datepicker/default.html"]')

        cy.iframe().xpath('//input[@type="text"]').type('07/07/2024{enter}');
        
    });
});