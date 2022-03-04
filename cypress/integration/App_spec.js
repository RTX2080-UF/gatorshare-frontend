describe('Home Page', function () {

    it('renders learn react link', function () {
        cy.visit("/");
        cy.findByText("Posts").should("exist");
    });

});