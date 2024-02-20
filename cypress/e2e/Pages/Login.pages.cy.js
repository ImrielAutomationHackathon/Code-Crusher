import LoginLocators from "../Locator Files/Login.locators.cy";

var loginlocators = new LoginLocators

class LoginFunctions {
    OpenApp(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }
    EnterUserName(){
        cy.xpath(loginlocators.Username_Field).click().type('Admin')
    }
    EnterPassword(){
        cy.xpath(loginlocators.Password_Field).click().type('admin123')
    }
    ClickOnLoginBtn(){
        cy.xpath(loginlocators.Password_Field).click()
    }
}

export default LoginFunctions;