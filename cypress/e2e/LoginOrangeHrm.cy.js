it('Logging into Orange Hrm', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    var userName = cy.xpath('//input[@name="username"]').click().type('Adm!n')
  
    var userPassword = cy.xpath('//input[@name="password"]').click().type('admin1234')
    cy.xpath('//button[@type="submit"]').click()
    if(userName !== 'Admin' || userPassword !== 'admin123')
    {
      describe('Play Music', () => {
        it('Lost', () => {
            cy.readFile('cypress/audio/Lost.mp3', 'base64').then((mp3) => {
                const uri = 'data:audio/mp3;base64,' + mp3
                const audio = new Audio(uri)
              
                audio.play()
              })
        })
    })
    }
  });