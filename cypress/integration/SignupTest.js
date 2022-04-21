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

    it('enter username', function () {
        cy.visit("/signup");
        cy.get("#username").type('johndoe').should('have.value','johndoe');
    });
    it('enter firstname and lastname', function () {
        cy.visit("/signup");
        cy.get("#firstname").type('john').should('have.value','john');
        cy.get("#lastname").type('doe').should('have.value','doe');
    });
    it('enter email', function () {
        cy.visit("/signup");
        cy.get("#email").type('johndoe@gmail.com').should('have.value','johndoe@gmail.com');
    });
    it('enter password', function () {
        cy.visit("/signup");
        cy.get("#password").type('password123').should('have.value','password123');
    });
    it('enter all the details', function () {
        cy.visit("/signup");
        cy.get("#username").type('johndoe').should('have.value','johndoe');
        cy.get("#firstname").type('john').should('have.value','john');
        cy.get("#lastname").type('doe').should('have.value','doe');
        cy.get("#email").type('johndoe@gmail.com').should('have.value','johndoe@gmail.com');
        cy.get("#password").type('password123').should('have.value','password123');
        cy.get("#confirmpassword").type('password123').should('have.value','password123');
    });

});