import {Given,When,Then,And} from "cypress-cucumber-preprocessor/steps"


Given('Given open the browser and enter the url',()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
})

