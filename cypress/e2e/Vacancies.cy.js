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

it('Adding Vacancies', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.xpath('//input[@name="username"]').click().type('Admin')
    cy.xpath('//input[@name="password"]').click().type('admin123')
    cy.xpath('//button[@type="submit"]').click()
    cy.wait(3000)
    cy.contains('PIM').click()
    cy.xpath('//a[normalize-space()="Add Employee"]').click()
    cy.xpath('//input[@placeholder="First Name"]').type("Swaraj")
    cy.xpath('//input[@placeholder="Last Name"]').type("Vitthaldas")
    cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type(testdata.lastName)
    cy.xpath('//button[@type="submit"]').click()
    cy.wait(3000)
    cy.xpath('//span[normalize-space()="Recruitment"]').click()
    cy.contains('Vacancies').click()
    cy.contains(' Add ').click()
    cy.xpath('//input[@class="oxd-input oxd-input--active"]').eq(1).type(testdata.firstName)
    cy.get('.oxd-select-text-input').click()
    cy.contains('Software Test Engineer').click()
    cy.xpath('//input[@class="oxd-input oxd-input--active"]').eq(2).type('4')
    cy.xpath('//input[@placeholder="Type for hints..."]').type('Swaraj')
    cy.xpath('//div[@role="listbox"]').contains("Swaraj Vitthaldas").click()
    cy.get('button[type="submit"]').click()
    cy.wait(4000)
   // cy.xpath('//p[@class="oxd-text oxd-text--p oxd-text--toast-title oxd-toast-content-text"]').should('have.text','Success')
    cy.log('Success')
    cy.xpath('//i[@class="oxd-icon bi-caret-down-fill oxd-userdropdown-icon"]').click()
    cy.contains('Logout').click()

})