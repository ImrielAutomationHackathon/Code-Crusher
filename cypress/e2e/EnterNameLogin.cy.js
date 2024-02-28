  it('Logging into Orange Hrm', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.xpath('//input[@name="password"]').click().type('admin123')
    cy.xpath('//input[@name="username"]').click().type('')
   
    cy.xpath('//button[@type="submit"]').click()
  
    
      describe('Play Music', () => {
        it('EnterName', () => {
            cy.readFile('cypress/audio/EnterName.mp3', 'base64').then((mp3) => {
                const uri = 'data:audio/mp3;base64,' + mp3
                const audio = new Audio(uri)
              
                audio.play()
              })
        })
    })
    
  });
  