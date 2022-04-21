describe('Home Page', function () {

    beforeEach(() => {
        // setUser(DEMO_DB.user)
        cy.visit("/login");
        cy.get("#username").type('anujkoli').should('have.value','anujkoli');
        cy.get("#password").type('hello123').should('have.value','hello123');
        cy.get("button").click();
        cy.wait(3000)
    });

    it('renders learn react link', function () {
        cy.visit("/");
        cy.findByText("Latest Posts").should("exist");
    });

});