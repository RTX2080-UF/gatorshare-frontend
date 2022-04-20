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

    it('click on create', function () {
        cy.visit("/");
        cy.get("#createModal").click();
    });
    it('Test the back link', function () {
        cy.visit("/forgotPwd");
        cy.get('a').click();
        cy.location('pathname').should('eq', '/login');
    });

});