import { setUser } from "../../src/utils/SessionUtils"
import { DEMO_DB } from "../../src/data/Demo"

describe('Testing Settings UI', function () {

    beforeEach(() => {
        // setUser(DEMO_DB.user)
        cy.visit("/login");
        cy.get("#username").type('anujkoli').should('have.value','anujkoli');
        cy.get("#password").type('hello123').should('have.value','hello123');
        cy.get("button").click();
        cy.wait(3000)
    });

    it('renders Profile section', function () {
        cy.visit("/settings");
        cy.get('#profile').within(()=>{
            cy.get('b').should('contain','Profile');
        })
        cy.get('#profile').click();
    });
    it('renders security section', function () {
        cy.visit("/settings");
        cy.get('#security').within(()=>{
            cy.get('b').should('contain','Security');
        })
        cy.get('#security').click();
    });
    it('renders notifications section', function () {
        cy.visit("/settings");
        cy.get('#notifications').within(()=>{
            cy.get('b').should('contain','Notifications');
        })
        cy.get('#notifications').click();
    });
    it('Edit bio section', function () {
        cy.visit("/settings");
        cy.get('#profile').within(()=>{
            cy.get('b').should('contain','Profile');
        })
        cy.get('#profile').click();
        cy.get("#account-fn").clear().type('johndoe').should('have.value','johndoe');
        cy.get("#account-ln").clear().type('johndoe').should('have.value','johndoe');
        cy.get("#account-email").clear().type('johndoe@gs.com').should('have.value','johndoe@gs.com');
        cy.get("#account-bio").clear().type('johndoe@gs.com').should('have.value','johndoe@gs.com');
    });
   
    it('Edit confirm new pwd section', function () {
        cy.visit("/settings");
        cy.get('#profile').within(()=>{
            cy.get('b').should('contain','Profile');
        })
        cy.get('#profile').click();
        cy.get('#security').within(()=>{
            cy.get('b').should('contain','Security');
        })
        cy.get('#security').click();
        cy.get('#notifications').within(()=>{
            cy.get('b').should('contain','Notifications');
        })
        cy.get('#notifications').click();
        cy.get('#security').within(()=>{
            cy.get('b').should('contain','Security');
        })
        cy.get('#security').click();
        cy.get("#account-pass").clear().type('johndoe').should('have.value','johndoe');
        cy.get("#account-new-pass").clear().type('johndoe').should('have.value','johndoe');
        cy.get("#account-confirm-pass").clear().type('johndoe').should('have.value','johndoe');
    });

});