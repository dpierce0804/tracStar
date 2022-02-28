describe('Test checkout flow <end2end> <orders>', () => {

    it('Check product checkout functionality', () => {
        //Login cannot be seperated from the test or it fails
        cy.visit('/')
        cy.standardUserLogin();
        //Add a onesie and fleece jacket to cart
        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()
        //Check the items in the cart
        cy.get('.shopping_cart_link').click()
        cy.get('#item_2_title_link > .inventory_item_name').should("have.text", "Sauce Labs Onesie")
        cy.get(':nth-child(3) > .cart_item_label > .item_pricebar > .inventory_item_price').should("have.text", "$7.99")
        cy.get(':nth-child(3) > .cart_quantity').should("have.text", "1")
        cy.get('#item_5_title_link > .inventory_item_name').should("have.text", "Sauce Labs Fleece Jacket")
        cy.get(':nth-child(4) > .cart_item_label > .item_pricebar > .inventory_item_price').should("have.text", "$49.99")
        cy.get(':nth-child(4) > .cart_quantity').should("have.text", "1")
        cy.get('[data-test="checkout"]').click()
        //Fill out checkout information
        cy.get('[data-test="firstName"]').type("Chris P")
        cy.get('[data-test="lastName"]').type("Bacon")
        cy.get('[data-test="postalCode"]').type("12345")
        cy.get('[data-test="continue"]').click()
        //Verify overview totals are correct, then cancel the order
        cy.log('**Cancel the order and return to the homepage**')
        cy.get('.summary_total_label').should("have.text", "Total: $62.62")
        cy.get('[data-test="cancel"]').click()
        cy.location("pathname").should("include", "/inventory.html")
    })
})
