# Code-Crusher
![logo](https://user-images.githubusercontent.com/60215258/219694698-59427863-ef3a-4fb2-a4d7-e9d48e3823f2.png)

# Cypress e2e test automation
Cypress BDD based Automation Framework using TypeScript with Allure Reporting

This is a sample project for [opensource-demo.orangehrmlive.com](https://opensource-demo.orangehrmlive.com/web/index.php/auth/login) with:

- Page Object Model
- Data-Driven tests
- Cucumber example
- Mochawesome reporter for Cypress POM tests
- Accessibility tests (which are currently commented out to avoid causing failures in the test pipeline)

## To run the project follow below steps

- Clone the Repository
- On Terminal run command: npm i
- Let the packages and dependencies to install on your machine
- To start the test use command: npm test

## Cypress Mochawesome Reporter

https://www.npmjs.com/package/cypress-mochawesome-reporter

## Steps to run Cypress Cloud Dashboard:
- npx cypress open
- Click on Login from Cypress Runner - login into Cypress Cloud account
  ![image](https://github.com/ImrielAutomationHackathon/Code-Crusher/assets/160570326/b5674a8f-5db4-44d5-ae07-99d845c17d1d)


## Steps to run Cypress Allure Report:
- npm run browser:chrome
- npm run report:allure
  
## Test accessibility with axe-core

https://www.npmjs.com/package/cypress-axe

## Pre-requisite

- NodeJS
