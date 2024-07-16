describe('web table test', () => {
    it('test2', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.xpath('//table[@name="courses"]/tbody/tr[9]/td').each(($ele)=>{

            if ($ele.text().includes('Python')) {

                cy.wrap($ele).next().then((num)=>{

                    cy.log(num.text())
                    
                })
            }
        });
    });
})