describe('Product Sorting <end2end>', () => {

    it('Login as standard_user', () => {
      cy.visit('/');
      cy.standardUserLogin();
    });
    it('Sort Z to A and verfiy', () => {
        cy.log('**Sorting items A to Z**')
        cy.sortZtoAtest();
    })
    it('Sort A to Z and verify', () => {
        cy.log('**Sorting items Z to A**')
        cy.sortAtoZtest();
    })
    // it('Sort by price descending and verify', () => {
    //     cy.log('**Sorting items by price - Descending**')
    //     cy.sortDescendingPrice();
    // })
  });