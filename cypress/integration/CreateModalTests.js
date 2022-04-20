import { click } from "@testing-library/user-event/dist/click";
import { setAccessToken, setUser } from "../../src/utils/SessionUtils"
import { DEMO_DB } from "../../src/data/Demo"

describe('Testing Create Modal UI', function () {

    beforeEach(() => {
        // setUser(DEMO_DB.user)
        cy.visit("/login");
        cy.get("#username").type('anuj123').should('have.value','anuj123');
        cy.get("#password").type('hello').should('have.value','hello');
        cy.get("button").click();
        cy.wait(3000)
    });

    it('create modal header title check', function () {
        cy.visit("/");
        cy.get("#createModal").click();
        cy.get(".h4").should('contain', 'Create post');
        cy.get("#ctitle").type('hello').should('have.value','hello');
        cy.get("#cdesc").type('hello').should('have.value','hello');
    });
    
    it('create Modal title and description tests', function () {
        cy.visit("/");
        cy.get("#createModal").click();
        cy.get("#ctitle").type('hello').should('have.value','hello');
        cy.get("#cdesc").type('hello').should('have.value','hello');
    });

    it('create Modal limit and date tests', function () {
        cy.visit("/");
        cy.get("#createModal").click();
        cy.get("#ctitle").type('hello').should('have.value','hello');
        cy.get("#cdesc").type('hello').should('have.value','hello');
        cy.get("#cdate").type('2022-12-12').should('have.value','2022-12-12');
        cy.get("#climit").type(2).should('have.value',2);
    });

    it('create tags tests', function () {
        cy.visit("/");
        cy.get("#createModal").click();
        cy.get("#ctitle").type('hello').should('have.value','hello');
        cy.get("#cdesc").type('hello').should('have.value','hello');
        cy.get("#cdate").type('2022-12-12').should('have.value','2022-12-12');
        cy.get("#climit").type(2).should('have.value',2);
        cy.get("#ctag").type("hello").type('{enter}');
        cy.get('.badge').should('contain', 'hello');
        cy.get("#ctag").type("hello1").type('{enter}');
        cy.get('.badge').should('contain', 'hello1');
    });

});