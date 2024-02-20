it('Logging into Orange Hrm', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.xpath('//input[@name="username"]').click().type('Admin')
    cy.xpath('//input[@name="password"]').click().type('admin123')
    cy.xpath('//button[@type="submit"]').click()
  });