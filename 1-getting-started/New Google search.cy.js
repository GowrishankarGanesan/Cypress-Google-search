describe('First test', () => {
  it('passes', () => {
    cy.visit('https://google.com')
    cy.get('#L2AGLb > .QS5gu').click()
    cy.get('#APjFqb').type("ikea.se")
    cy.contains('Sök på Google').click()
    cy.title().should('eq', 'ikea.se - Sök på Google')
    //cy.contains('IKEA - Möbler, inredning och inspiration - IKEA').click()
  
  })
})