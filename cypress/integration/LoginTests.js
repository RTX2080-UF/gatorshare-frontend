describe('Testing Login UI', function () {

    it('renders User name', function () {
        cy.visit("/login");
        cy.get("label").should('contain', 'User Name');
    });
    
    it('renders password section', function () {
        cy.visit("/login");
        cy.get("label").should('contain', 'Password');
    });
    it('renders Keep me signed in section', function () {
        cy.visit("/login");
        cy.findByText("Keep me signed in").should('exist');
    });
    it('renders login button', function () {
        cy.visit("/login");
        cy.get("button").should('contain', 'Login');
    });
    it('renders Forgot password section', function () {
        cy.visit("/login");
        cy.get(".forgot-password").should('contain', 'Forgot password?');
    });
    it('renders Create a new account section', function () {
        cy.visit("/login");
        cy.get(".forgot-password").should('contain', 'Create a new account?');
    });
    it('Enter username', function () {
        cy.visit("/login");
        cy.get("#username").type('johndoe').should('have.value','johndoe');
    });
    it('Enter input values', function () {
        cy.visit("/login");
        cy.get('.form-check [type="checkbox"]').check().should('be.checked');
        cy.get("#username").type('johndoe').should('have.value','johndoe');
        cy.get("#password").type('123').should('have.value','123');
    });
    it('login flow', function () {
        cy.visit("/login");
        cy.get('.form-check [type="checkbox"]').check().should('be.checked');
        cy.get("#username").type('johndoe').should('have.value','johndoe');
        cy.get("#password").type('123').should('have.value','123');
        cy.get("button").click();
        // cy.location('pathname').should('eq', '/onboarding');
    });

});