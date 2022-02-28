// sortPrice2.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:

// const cypress = require("cypress");

// // const { expect } = require("chai");
// // const { describe } = require("mocha");
// const { _ } = cypress

// // https://on.cypress.io/writing-first-test
// describe('Sorting price table <end2end>', () => {
//     it('sorts', () => {
//         cy.visit('/')
//         cy.standardUserLogin()

//         cy.log('**Checking prices exist**')
//         cy.get('[class="inventory_item_price"]')
//         .should('have.length', 6)

//         cy.log('**Sorting by Price**')
//         cy.get('[data-test="product_sort_container"]')
//         .select('hilo')

//         const toStrings = (cells$) => _.map(cells$, 'textContent')
//         const toNumbers = (prices) => _.map(prices, Number)

//         cy.get('[class="inventory_item_price"]')
//         .then(toStrings)
//         .then(toNumbers)
//         .then((prices) => {
//             const sorted = _.sortBy(prices)

//             expect(prices, 'Cells are sorted').to.deep.equal(sorted)
//         })
//     });
// })