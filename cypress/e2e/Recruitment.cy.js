import DataGenerator from "../support/faker_test";

var testdata;
 
before(()=>{
  cy.writeFile("cypress/fixtures/testdata.json",
  DataGenerator.generatetestData()
  );
  cy.readFile("cypress/fixtures/testdata.json").then((data)=>{
    testdata=data;
  });
});

it('Adding Candidates', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.xpath('//input[@name="username"]').click().type('Admin')
    cy.xpath('//input[@name="password"]').click().type('admin123')
    cy.xpath('//button[@type="submit"]').click()
    cy.wait(3000)
    cy.xpath('//span[normalize-space()="Recruitment"]').click()
    cy.contains(' Add ').click()
    cy.get('input[placeholder="First Name"]').type(testdata.firstName)
    cy.get('input[placeholder="Last Name"]').type(testdata.lastName)
    cy.get('.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').click()
    cy.get('.oxd-select-wrapper').contains('Associate IT Manager').click()
    cy.xpath('//input[@placeholder="Type here"]').eq(0).type(testdata.email)
    cy.xpath('//input[@placeholder="Type here"]').eq(1).type("7768981584")
    cy.xpath('//div[@class="oxd-file-button"]').click().attachFile('0153 Mr. Swaraj Bharat Vitthaldas.pdf')
    cy.get('.oxd-date-input').click()
    cy.get('.oxd-date-input-link.--today').click()
    cy.wait(5000)
    cy.get('button[type="submit"]').click()
    cy.xpath('//p[@class="oxd-text oxd-text--p oxd-text--toast-title oxd-toast-content-text"]').should('have.text','Success')
    cy.log('Success')
    cy.xpath('//i[@class="oxd-icon bi-caret-down-fill oxd-userdropdown-icon"]').click()
    cy.contains('Logout').click()


})