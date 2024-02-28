it('Logging into Orange Hrm', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
   
    var invalidUserName = cy.xpath('//input[@name="username"]').click().type('Adm!n')
    var invalidUserPassword = cy.xpath('//input[@name="password"]').click().type('admin1234')
    var isLoginClicked = cy.xpath('//button[@type="submit"]').click()
    if(invalidUserName !== 'Admin' || invalidUserPassword !== 'admin123')
    {
      describe('Play Music', () => {
        it('InvalidCredentials', () => {
            cy.readFile('cypress/audio/InvalidCredentials.mp3', 'base64').then((mp3) => {
                const uri = 'data:audio/mp3;base64,' + mp3
                const audio = new Audio(uri)
              
                audio.play()
              })
        })
    })
    }
    cy.reload();
    var userName = cy.xpath('//input[@name="username"]').click().type('Admin')
    var userPassword = cy.xpath('//input[@name="password"]').click().type('admin123')
     if((userName === 'Admin' || userPassword === 'admin123') && isLoginClicked){   
        describe('Play Music', () => {
          it('LoggedInSuccessfully', () => {
              cy.readFile('cypress/audio/LoggedInSuccessfully.mp3', 'base64').then((mp3) => {
                  const uri = 'data:audio/mp3;base64,' + mp3
                  const audio = new Audio(uri)
                
                  audio.play()
                })
          })
      })
    }

    if(userName === ''){
      describe('Play Music', () => {
        it('EnterName', () => {
            cy.readFile('cypress/audio/EnterName.mp3', 'base64').then((mp3) => {
                const uri = 'data:audio/mp3;base64,' + mp3
                const audio = new Audio(uri)
              
                audio.play()
              })
        })
    })
    }

    if(userPassword === ''){
      describe('Play Music', () => {
        it('EnterPassword', () => {
            cy.readFile('cypress/audio/EnterPassword.mp3', 'base64').then((mp3) => {
                const uri = 'data:audio/mp3;base64,' + mp3
                const audio = new Audio(uri)
              
                audio.play()
              })
        })
    })
    }
  });