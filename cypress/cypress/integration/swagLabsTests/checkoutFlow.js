describe('Test checkout flow <end2end> <orders> <smoke>', () => {

    it('Check product checkout functionality', () => {
        //Login cannot be seperated from the test or it fails
        cy.visit('/')
        cy.standardUserLogin();
        //Add a onesie and fleece jacket to cart
        cy.log('**Add a onesie and fleece jacket to cart**')
        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()
        //Check the items in the cart
        cy.log('**Check the items in the cart**')
        cy.get('.shopping_cart_link').click()
        cy.get('#item_2_title_link > .inventory_item_name').should("have.text", "Sauce Labs Onesie")
        cy.get(':nth-child(3) > .cart_item_label > .item_pricebar > .inventory_item_price').should("have.text", "$7.99")
        cy.get(':nth-child(3) > .cart_quantity').should("have.text", "1")
        cy.get('#item_5_title_link > .inventory_item_name').should("have.text", "Sauce Labs Fleece Jacket")
        cy.get(':nth-child(4) > .cart_item_label > .item_pricebar > .inventory_item_price').should("have.text", "$49.99")
        cy.get(':nth-child(4) > .cart_quantity').should("have.text", "1")
        cy.get('[data-test="checkout"]').click()
        //Fill out checkout information
        cy.log('**Complete the order purchase details**')
        cy.get('[data-test="firstName"]').type("Chris P")
        cy.get('[data-test="lastName"]').type("Bacon")
        cy.get('[data-test="postalCode"]').type("12345")
        cy.get('[data-test="continue"]').click()
        //Verify overview totals are correct
        cy.log('**Verify order totals are correct**')
        cy.get('.summary_total_label').should("have.text", "Total: $62.62")
        cy.get('[data-test="finish"]').click()
        //Verify order has been successfully placed
        cy.log('**Complete the order process**')
        cy.get('.complete-header').should("have.text", "THANK YOU FOR YOUR ORDER")
        cy.get('.complete-text').should("have.text", "Your order has been dispatched, and will arrive just as fast as the pony can get there!")
    })
})
