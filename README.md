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

## Test accessibility with axe-core

https://www.npmjs.com/package/cypress-axe

## Pre-requisite

- NodeJS

## Test Scenarios
## TC_01_AddEmployee_E2E
This TC verifies the End to End Addition/Validation/Deletion of Employee, functionality of the Application.

1. Login into the Application
2. Add Employee
3. Validate if the newly added employee's name is present in the Employee list or not.
4. Delete the Employee and Check the Success Message.

## TC_02_CreateVacancy_E2E
This TC verifies the End to End Addition/Validation/Deletion of new Vacancy, functionality of the Application.

1. Login into the Application
2. Create new Vacancy
3. Validate if the newly added Vacancy present in the Vacancy list or not.
4. Delete the Vacancy and Check the Success Message.

## TC_03_DirectorySearch
This TC verfies the Search Directory feature of the Application

1. Login into the Application
2. On Directory Page, Filter the Employees with 'Job Title'.
3. Check if a specfic employee is present in the list or not
Application Snapshots
