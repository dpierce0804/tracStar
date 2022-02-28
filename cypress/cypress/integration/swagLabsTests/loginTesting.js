describe('Test Login Functionality <end2end> <smoke>', () => {
    it('successfully loads', () => {
        cy.visit('/')
    })
    it('standard_user login test', function(){
        //The standard_user should be able to login successfully
        cy.log('**Testing standard_user login and logout functions**')
        cy.visit('/')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.location("pathname").should("include", "/inventory.html")
        cy.get('#react-burger-menu-btn').click()
        cy.get('#logout_sidebar_link').click()
        cy.url().should('eq', 'https://www.saucedemo.com/')
    })
    it('locked_out_user login test', function(){
        //The locked_out_user should NOT login and should show 'locked out' message
        cy.log('**Testing locked_out_user login function**')
        cy.visit('/')
        cy.get('[data-test="username"]').type('locked_out_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('[data-test="error"]').contains("locked out")
    })
    it('performance_glitch_user login test', function(){
        //The performance_glitch_user should be able to login successfully
        cy.log('**Testing performance_glitch_user login and logout functions**')
        cy.visit('/')
        cy.get('[data-test="username"]').type('performance_glitch_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.location("pathname").should("include", "/inventory.html")
        cy.get('#react-burger-menu-btn').click()
        cy.get('#logout_sidebar_link').click()
        cy.url().should('eq', 'https://www.saucedemo.com/')
    })
})
