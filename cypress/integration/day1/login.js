///<reference types="cypress" />

describe('OrangeHRM Suite', () => {
    it('Login Test1', () => {
        
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get("input[name='username']").type('Admin')

        cy.get("input[name='password']").type('admin123')

        cy.get("button[type='submit']").click()
    });
    
    it('facebook', () => {
        
        cy.visit("https://www.facebook.com/")

        cy.get("#email").type('shubhamgaikwad')

        cy.get("#pass").type('skg')

        cy.get("#loginbutton").click()
        

    });

    it('xpath test case', () => {
        
        cy.visit("https://the-internet.herokuapp.com/login");

        cy.xpath('//input[@id="username"]').type('shubham');

        cy.xpath('//input[@id="password"]').type('sakshi');

        cy.xpath('//button[@class="radius"]').click();

    });


});