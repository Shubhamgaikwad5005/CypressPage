Feature: Simple form

Scenario: to validate simple form

Given user opens the Simple form url

When user enters firstname, lastname, emails, message

And click on submit 

Then An alert saying sucessful meassage has to be displayed 
