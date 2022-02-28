describe('Test Menu Selection Functionality <end2end>', () => {

    it('Login as standard_user', function(){
        cy.visit('/')
        cy.standardUserLogin();
        cy.location("pathname").should("include", "/inventory.html")
    })
    it('Expand menu and check selections', () => {
        //The expandable menu should be available and have the selections
        //specified below
        cy.log('**Checking the items listed in the expandable menu**')
        cy.get('#react-burger-menu-btn').click()
        cy.get('#inventory_sidebar_link').should('be.visible')
        cy.get('#about_sidebar_link').should('be.visible')
        cy.get('#logout_sidebar_link').should('be.visible')
        cy.get('#reset_sidebar_link').should('be.visible')
    })
})
