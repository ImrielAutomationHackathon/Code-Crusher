  it('Logging into Orange Hrm', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.xpath('//input[@name="username"]').click().type('Admin')
    cy.xpath('//input[@name="password"]').click().type('')
    cy.xpath('//button[@type="submit"]').click()
  
    
      describe('Play Music', () => {
        it('EnterPassword', () => {
            cy.readFile('cypress/audio/EnterPassword.mp3', 'base64').then((mp3) => {
                const uri = 'data:audio/mp3;base64,' + mp3
                const audio = new Audio(uri)
              
                audio.play()
              })
        })
    })
    
  });
  