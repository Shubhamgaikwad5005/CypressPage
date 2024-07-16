import {Given,When,Then,And} from "cypress-cucumber-preprocessor/steps"

Given('user opens the Simple form url',()=>{
    cy.visit('https://v1.training-support.net/selenium/simple-form')
});
When('user enters firstname, lastname, emails, message',()=>{
    cy.get('#firstName').type('skg');
    cy.get('#lastName').type('shubham')
    cy.get('#email').type('shubham@123')
    cy.get('#number').type('1234567891')
    cy.xpath('//textarea').type('hi')
});

And('click on submit',()=>{
    cy.xpath('//input[@value="submit"]').click()

});
Then('An alert saying sucessful meassage has to be displayed',()=>{
    cy.on('window:confirm', (alertmsg) => {
        expect(alertmsg).to.equal('Thank You for reaching out to us, skg shubham');
        return true;
    });
});