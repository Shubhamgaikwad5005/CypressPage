describe('dynamic and dropdown', () => {
   
     it('test1', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('.ui-autocomplete-input').type('In')

        cy.get('.ui-menu-item').each(($country)=>{

            if($country.text()=='India'){
            cy.wrap($country).click();
            }

        })
       

        
    });
    

    it('dropdown', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#autocomplete').type('an');

        cy.get('.ui-menu-item').contains('Poland').click();
        
    });
});