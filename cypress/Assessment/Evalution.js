describe('Automation Test store', () => {
    it('test1', () => {
        cy.visit('https://automationteststore.com/')

        //Click on "Apparel & Accessories" and select "T-shirts".

        cy.get('a[href*="apparel-accessories"]').click();

    });
});