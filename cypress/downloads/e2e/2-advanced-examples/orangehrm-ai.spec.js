import {Login} from "../pages/Login";
const login = new Login();

describe('AI Validation',()=>{
    beforeEach('navigate to login page',()=>{
        //cy.eyesOpen - open the eyes for take screenshots
        cy.eyesOpen({appName:'OrangeHRM',batchName:'OrangeHRM_batch'})
        login.navigate();
    })
    afterEach('',()=>{
        //cy.eyesClose - close the eyes for take screenshots
        cy.eyesClose();
    })
    it('should not be able to login to using invalid credentials',()=>{
        // cy.eyesCheckWindow - take a screen shot of the login page and will compare to do with baseline image
        cy.eyesCheckWindow('plain login page');
        login.login('Admin','admin');
        cy.eyesCheckWindow('login error');
    })
})