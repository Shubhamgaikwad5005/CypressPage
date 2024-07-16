describe('automation test ', () => {
    it('Test1', () => {
        //Enter the URL: https://automationteststore.com/
        // to visit the website
        cy.visit("https://automationteststore.com/");

        //click on the appearal and assessories
        cy.get('a[href="https://automationteststore.com/index.php?rt=product/category&path=68"]').click();

        // click on the t-shirts option
        cy.xpath("//a[normalize-space()='T-shirts']").click();

        // click on the third shirts 
        cy.xpath("//div[@class='thumbnails grid row list-inline']//div[3]//div[2]//div[3]//a[1]//i[1]").click();

        // changing the colour and the size
        cy.get('#option350').select('775');
        cy.get('#option351').select('777'); 
        cy.get('#product_quantity').type('2')

        // click on checkout
        cy.get('.cart').click();
        cy.wait(4000)
        // to go the payment page
        cy.get('#cart_checkout1').click();

        // to register as a guest 
        cy.get('#accountFrm_accountguest').check();

        //click on continue
        cy.get('[title="Continue"]').click();

        // fill the for guest login

        cy.get('#guestFrm_firstname').type('Shubham') 
        cy.get('#guestFrm_lastname').type('Gaikwad')
        cy.get('#guestFrm_email').type('shubhamgaikwad@gmail.com')
        cy.get('#guestFrm_country_id').select('India') 
        cy.get('#guestFrm_zone_id').select('Maharashtra') 
        cy.get('#guestFrm_address_1').type('pimpalgaon') 
        cy.get('#guestFrm_city').type('nashik') 
        cy.get('#guestFrm_postcode').type('422207') 
        cy.get('[title="Continue"]').click(); 
        cy.get('#checkout_btn').click();  

        // asert the confirmation message
        cy.xpath("(//*[ contains(text(),'Your Order Has Been Processed!')])[2]").should('include.text',' Your Order Has Been Processed!');

        cy.window().then(win => {
            win.close();
        });


    });
});

