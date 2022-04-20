describe('Testing Change password UI', function () {

    it('renders signup title', function () {
        cy.visit("/forgotPwd");
        cy.get("label").should('contain', 'Enter EmailID to receive password reset link');
    });
    it('Test the back link', function () {
        cy.visit("/forgotPwd");
        cy.get('a').click();
        cy.location('pathname').should('eq', '/login');
    });

});