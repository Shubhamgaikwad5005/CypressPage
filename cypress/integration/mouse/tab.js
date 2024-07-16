

describe('windows and tab', () => {
    it('tab test', () => {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        cy.xpath("//*[.='Open Tab']").invoke('removeAttr', 'target').click();

        cy.origin('https://www.qaclickacademy.com/',()=>{

            cy.visit('')
            cy.contains('Access all our Courses').click();

        })


        
    });

    it('test2', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.xpath("//*[.='Open Window']").invoke('removeAttr', 'target').click();

        cy.origin('https://www.qaclickacademy.com/',()=>{

            cy.visit('')
            cy.contains('Access all our Courses').click();

        })



        
    });


});