import { setUser } from "../../src/utils/SessionUtils"
import { DEMO_DB } from "../../src/data/Demo"

describe('Testing Settings UI', function () {

    beforeEach(() => {
        setUser(DEMO_DB.user)
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

    it('Edit Profile section', function () {
        cy.visit("/settings");
        cy.get('#profile').within(()=>{
            cy.get('b').should('contain','Profile');
        })
        cy.get('#profile').click();
        cy.get("#account-fn").type('johndoe').should('have.value','johndoe');
    });
    it('Edit lastname section', function () {
        cy.visit("/settings");
        cy.get('#profile').within(()=>{
            cy.get('b').should('contain','Profile');
        })
        cy.get('#profile').click();
        cy.get("#account-ln").type('johndoe').should('have.value','johndoe');
    });
    it('Edit email section', function () {
        cy.visit("/settings");
        cy.get('#profile').within(()=>{
            cy.get('b').should('contain','Profile');
        })
        cy.get('#profile').click();
        cy.get("#account-email").type('johndoe@gs.com').should('have.value','johndoe@gs.com');
    });
    it('Edit bio section', function () {
        cy.visit("/settings");
        cy.get('#profile').within(()=>{
            cy.get('b').should('contain','Profile');
        })
        cy.get('#profile').click();
        cy.get("#account-bio").type('johndoe@gs.com').should('have.value','johndoe@gs.com');
    });
    it('Edit Security section', function () {
        cy.visit("/settings");
        cy.get('#security').within(()=>{
            cy.get('b').should('contain','Security');
        })
        cy.get('#security').click();
        cy.get("#account-pass").type('johndoe').should('have.value','johndoe');
    });
    it('Edit newpwd section', function () {
        cy.visit("/settings");
        cy.get('#security').within(()=>{
            cy.get('b').should('contain','Security');
        })
        cy.get('#security').click();
        cy.get("#account-pass").type('johndoe').should('have.value','johndoe');
        cy.get("#account-new-pass").type('johndoe').should('have.value','johndoe');
    });
    it('Edit confirm new pwd section', function () {
        cy.visit("/settings");
        cy.get('#security').within(()=>{
            cy.get('b').should('contain','Security');
        })
        cy.get('#security').click();
        cy.get("#account-pass").type('johndoe').should('have.value','johndoe');
        cy.get("#account-new-pass").type('johndoe').should('have.value','johndoe');
        cy.get("#account-confirm-pass").type('johndoe').should('have.value','johndoe');
    });

});