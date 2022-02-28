# Simple Cypress testing suite

* This is a collection of tests to validate an e-commerce websites functionality

## Goal

* To create a test suite to validate the websites login, product display, product sorting, and cart functionality

## Installation

* If Cypress is not already installed on your local system then refer to https://docs.cypress.io/guides/getting-started/installing-cypress for installation details

* Once Cypress is installed then import the project, swagLabsTests, into your cypresstests/integration directory

## Running Tests

* Tests can be executed ad-hoc within the Cypress desktop app
* Tests can also be ran via command line
  - There are three groups of testing created in the package.json file
    - end2end, smoke, orders
  - Run the command from the PROJECT ROOT
    - Example: npm run cy.run.smoke