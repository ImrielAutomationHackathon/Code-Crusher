# Code-Crusher
![logo](https://user-images.githubusercontent.com/60215258/219694698-59427863-ef3a-4fb2-a4d7-e9d48e3823f2.png)

# Cypress e2e Test Automation
Cypress Mocha Automation Framework

This is a sample project for [opensource-demo.orangehrmlive.com](https://opensource-demo.orangehrmlive.com/web/index.php/auth/login) with:

- Page Object Model
- Data-Driven tests
- Visibility Testing
- Accessibility Testing
- Allure Report
- Cypress Cloud Dashboard

## To run the project follow below steps

- Clone the Repository
- On Terminal run command: npm i
- Let the packages and dependencies to install on your machine
- To start the test use command: npx cypress open

## Steps to run Cypress Cloud Dashboard:
- npx cypress open
- Click on Login from Cypress Runner - login into Cypress Cloud account
  ![image](https://github.com/ImrielAutomationHackathon/Code-Crusher/assets/160570326/b5674a8f-5db4-44d5-ae07-99d845c17d1d)


## Steps to run Cypress Allure Report:
- npm run browser:chrome
- npm run report:allure
  ![image](https://github.com/ImrielAutomationHackathon/Code-Crusher/assets/160570326/76d2e42c-e054-4388-b57d-2ca2a2f27630)

## Test accessibility with axe-core

https://www.npmjs.com/package/cypress-axe

## Visibility Testing 
- We will capture screenshots, compare them against the baseline, and highlight visual changes. With increased visual coverage, teams can confidently deploy code changes with every commit.

## Accessibility Testing 
- This is introduced for People with disabilities. We added audios for the people partially blind. We added audio's for valid login and invalid login flow.

## Visual regression test with cypress

- **cypress-image-diff**
This tool was created to make visual regression as simple as possible, by exposing basic functions that allow one to view the difference between images. The wrapper uses pixelmatch which is simple and powerful and relies on cypress to take screenshots.
Reference Link for installation - https://reflect.run/articles/comparing-screenshots-in-cypress/

- **Applitools**
Applitools Eyes uses AI to help teams quickly ship high-quality applications on any browser or device by replicating the ‘human eye’ and automatically spotting bugs and defects with every release.
Reference Link for installation - https://applitools.com/docs/api-ref/sdk-api/cypress/

## Pre-requisite

- NodeJS
