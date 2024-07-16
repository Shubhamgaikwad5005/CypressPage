describe('scroll', () => {
    it('test1', () => {
        
        cy.visit('https://www.google.com')
        
        cy.get('[title="Search"]').type('Masai{enter}')

        cy.scrollTo(0,1000);

        cy.scrollTo(0,-1000); 

        cy.scrollTo('bottomRight');

        cy.contains('Maasai people').scrollIntoView().wait(2000).click();
    });
});