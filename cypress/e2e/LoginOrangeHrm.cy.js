it('Logging into Orange Hrm', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    var invalidUserName = cy.xpath('//input[@name="username"]').click().type('Adm!n')
    var invalidUserPassword = cy.xpath('//input[@name="password"]').click().type('admin1234')

    var userName = cy.xpath('//input[@name="username"]').click().type('Admin')
    var userPassword = cy.xpath('//input[@name="password"]').click().type('admin123')
    
    cy.xpath('//button[@type="submit"]').click()
    if(invalidUserName !== 'Admin' || invalidUserPassword !== 'admin123')
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
    else if(userName === 'Admin' || userPassword === 'admin123'){
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
    }
  });