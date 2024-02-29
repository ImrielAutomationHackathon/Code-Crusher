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


it('Adding Users', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.xpath('//input[@name="username"]').click().type('Admin')
    cy.xpath('//input[@name="password"]').click().type('admin123')
    cy.xpath('//button[@type="submit"]').click()
    cy.wait(3000)
    cy.contains('PIM').click()
    cy.xpath('//a[normalize-space()="Add Employee"]').click()
    cy.xpath('//input[@placeholder="First Name"]').type("Swaraj")
    cy.xpath('//input[@placeholder="Last Name"]').type("Vitthaldas")
    cy.xpath('//button[@type="submit"]').click()
    cy.xpath('//p[@class="oxd-text oxd-text--p oxd-text--toast-title oxd-toast-content-text"]').should('have.text','Success')
    cy.log('Success')
    cy.wait(4000)
    cy.contains('Admin').click()
    cy.wait(4000)
    cy.contains('Users').click()
  
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
    cy.get('.orangehrm-header-container > .oxd-button').click()
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type(testdata.email)
    cy.get('.oxd-autocomplete-text-input > input').type("swaraj Vi")
    cy.xpath('//div[@role="listbox"]').contains("Swaraj Vitthaldas").click()
    cy.get('.oxd-select-text--after').eq(0).click()
    cy.contains('ESS').click()
    cy.get('.oxd-select-text--after').eq(1).click()
    cy.contains('Enabled').click()
    cy.xpath('//input[@type="password"]').eq(0).type("Swaraj2104")
    cy.xpath('//input[@type="password"]').eq(1).type("Swaraj2104")
    cy.xpath('//button[@type="submit"]').click()
    cy.xpath('//p[@class="oxd-text oxd-text--p oxd-text--toast-title oxd-toast-content-text"]').should('have.text','Success')
    cy.log('Success')
    cy.xpath('//i[@class="oxd-icon bi-caret-down-fill oxd-userdropdown-icon"]').click()
    cy.contains('Logout').click()

  });