describe('Verify product details <end2end> <smoke>', () => {

    it('Login as standard_user', function(){
        cy.visit('/')
        cy.standardUserLogin();
    })
    it('Check product details', () => {
        //Check the details of the Sauce Labs Onesie
        //Because onesies are not only for babies!!!
        cy.log('**Checking the title, description, and price of Sauce Labs Onesie**')
        cy.get('#item_2_title_link > .inventory_item_name').should("have.text","Sauce Labs Onesie")
        cy.get(':nth-child(5) > .inventory_item_description > .inventory_item_label > .inventory_item_desc').should("have.text", "Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.")
        cy.get(':nth-child(5) > .inventory_item_description > .pricebar > .inventory_item_price').should("have.text", "$7.99")
    })
})
