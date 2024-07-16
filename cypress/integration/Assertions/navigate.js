describe('Navigate', () => {

    it('Test1', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.xpath("//a[.='Free Access to InterviewQues/ResumeAssistance/Material']").click();

        cy.go('back');

        cy.go("forward")

        cy.reload();


        
    });
    
});