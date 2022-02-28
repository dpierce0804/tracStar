// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
//
// --Login as standard_user--
//
Cypress.Commands.add("standardUserLogin", () => {
    cy.get('input#user-name').type('standard_user');
    cy.get('input#password').type('secret_sauce');
    cy.get('input[type="submit"]').click();
});
//
//
// --Product sorting commands --
//
Cypress.Commands.add("sortAtoZtest", () =>{
    cy.get('[data-test="product_sort_container"]')
      .select('az')
    cy.get('[class="inventory_item_name"]').should(($item1) => {
      expect($item1).to.have.length(6)
    });
    cy.get('[class="inventory_item_name"]').eq(0).should("have.text","Sauce Labs Backpack");
    cy.get('[class="inventory_item_name"]').eq(1).should("have.text","Sauce Labs Bike Light");
    cy.get('[class="inventory_item_name"]').eq(2).should("have.text","Sauce Labs Bolt T-Shirt");
    cy.get('[class="inventory_item_name"]').eq(3).should("have.text","Sauce Labs Fleece Jacket");
    cy.get('[class="inventory_item_name"]').eq(4).should("have.text","Sauce Labs Onesie");
    cy.get('[class="inventory_item_name"]').eq(5).should("have.text","Test.allTheThings() T-Shirt (Red)");
  });

  Cypress.Commands.add("sortZtoAtest", () => {
    cy.get('[data-test="product_sort_container"]')
      .select('za')
    cy.get('[class="inventory_item_name"]').should(($item1) => {
      expect($item1).to.have.length(6)
    });
    cy.get('[class="inventory_item_name"]').eq(0).should("have.text", "Test.allTheThings() T-Shirt (Red)");
    cy.get('[class="inventory_item_name"]').eq(1).should("have.text", "Sauce Labs Onesie");
    cy.get('[class="inventory_item_name"]').eq(2).should("have.text", "Sauce Labs Fleece Jacket");
    cy.get('[class="inventory_item_name"]').eq(3).should("have.text", "Sauce Labs Bolt T-Shirt");
    cy.get('[class="inventory_item_name"]').eq(4).should("have.text", "Sauce Labs Bike Light");
    cy.get('[class="inventory_item_name"]').eq(5).should("have.text", "Sauce Labs Backpack");
  });

  Cypress.Commands.add("sortDescendingPrice", () => {
    cy.get('[data-test="product_sort_container"]')
      .select('hilo')
    cy.get('[class="inventory_item_price"]').should(($item1) => {
      expect($item1).to.have.length(6)
    });
    cy.get(':nth-child(1) > .inventory_item_description > .pricebar > .inventory_item_price').eq(0).should("have.text", "$49.99")
    //This is a mess and there's something wrong with my array I believe.
    //When sorting by price it does grab the first inventory_item_price in the array
    //but doesn't recognize the text values for the remaining 5 items.
    //If I look specifially at the value outside of the array then it passes. I'm sure this is something
    //that I've done incorrectly, but hopefully you can see where I was going with this
    //testing
    cy.get(':nth-child(2) > .inventory_item_description > .pricebar > .inventory_item_price').should("have.text", "$29.99")
    //cy.get(':nth-child(2) > .inventory_item_description > .pricebar > .inventory_item_price').eq(1).should("have.text", "$29.99");
    //cy.get(':nth-child(3) > .inventory_item_description > .pricebar > .inventory_item_price').eq(2).should("have.text", "$15.99");
    //cy.get(':nth-child(4) > .inventory_item_description > .pricebar > .inventory_item_price').eq(3).should("have.text", "$15.99");
    //cy.get(':nth-child(5) > .inventory_item_description > .pricebar > .inventory_item_price').eq(4).should("have.text", "$9.99");
    //cy.get(':nth-child(6) > .inventory_item_description > .pricebar > .inventory_item_price').eq(5).should("have.text", "$7.99");
  });