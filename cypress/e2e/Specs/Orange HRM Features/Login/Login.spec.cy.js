import LoginFunctions from "../../../Pages/Login.pages.cy";

var loginFunctions = new LoginFunctions

Given("I open the Application", ()=>{
    loginFunctions.OpenApp();
})
When("I Enter UserName", ()=>{
    loginFunctions.EnterUserName();
})
And("I Enter Password", ()=>{
    loginFunctions.EnterPassword();
})
Then("I Enter Password", ()=>{
    loginFunctions.ClickOnLoginBtn();
})