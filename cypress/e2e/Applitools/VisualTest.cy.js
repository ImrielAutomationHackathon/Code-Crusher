/// <reference types="@applitools/eyes-cypress" />
describe('Hello world', () => {
  beforeEach(() => {
    cy.eyesOpen({
      appName: 'Hello World!',
      browser: { width: 800, height: 600 },
    });
  });

  afterEach(() => {
    cy.eyesClose();
  });

  it('My first JavaScript test!', () => {
    cy.visit('https://applitools.com/helloworld');
    cy.eyesCheckWindow('Main Page');
    cy.get('button').click();
    cy.eyesCheckWindow('Click!');
  });
});