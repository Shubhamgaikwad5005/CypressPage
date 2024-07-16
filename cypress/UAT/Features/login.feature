Feature: Login

Scenario Outline: validate login for multiple users
Given open the browser and enter the url
When enter username as <username>
And enter password as <password>
And click on submit
Then login should be sucessful


Examples:
    | username | password | 
    | ADmin    | Admin123 |
    | admin    | Admin123 |