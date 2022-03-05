describe('Testing Signup UI', function () {

    it('renders signup title', function () {
        cy.visit("/signup");
        cy.get("h3").should('contain', 'Sign Up');
    });
    it('renders First name', function () {
        cy.visit("/signup");
        cy.get("label").should('contain', 'First name');
    });
    it('renders LastName', function () {
        cy.visit("/signup");
        cy.get("label").should('contain', 'Last name');
    });
    it('renders Email address', function () {
        cy.visit("/signup");
        cy.get("label").should('contain', 'Email address');
    });
    it('renders password section', function () {
        cy.visit("/signup");
        cy.get("label").should('contain', 'Password');
    });
    it('renders signup button', function () {
        cy.visit("/signup");
        cy.get("button").should('contain', 'Sign Up');
    });
    it('renders Already have an account section', function () {
        cy.visit("/signup");
        cy.get(".forgot-password").should('contain', 'Already have an account?');
    });

});