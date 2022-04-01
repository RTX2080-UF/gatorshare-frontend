import { setUser } from "../../src/utils/SessionUtils"
import { DEMO_DB } from "../../src/data/Demo"

describe('Testing Settings UI', function () {

    beforeEach(() => {
        setUser(DEMO_DB.user)
      });

    it('renders User name', function () {
        cy.visit("/settings");
        cy.get('#profile').within(()=>{
            cy.get('b').should('contain','Profile');
        })
    });

});