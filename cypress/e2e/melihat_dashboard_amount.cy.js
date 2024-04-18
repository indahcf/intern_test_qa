describe('Melihat Dashboard Amount', () => {
  it('Menginputkan username dan password yang valid', () => {
    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/Login')

    cy.get('#Input_UsernameVal').clear().type('charles.estevez')

    cy.get('#Input_PasswordVal').clear().type('123456')

    cy.get('button[type="submit"]').click()
  })
})