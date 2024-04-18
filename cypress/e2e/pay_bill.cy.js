describe('Pay Bill', () => {
  it('Menginputkan Data', () => {
    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/Login')

    cy.get('#Input_UsernameVal').type('angela.garcia')

    cy.get('#Input_PasswordVal').type('123456')

    cy.get('button[type="submit"]').click()
    cy.wait(3000)
    
    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/Invoices')
    cy.wait(1000)

    cy.get('a[data-link]').contains('14. Taehyung').click().then(() => {
      cy.get('.tag').should('contain', 'Unpaid');
      cy.contains('Pay bill').click()

      cy.get('#Input_HolderName').type('Indah Febriani')
      cy.get('#Input_CardNumber').type('1234567890')
      cy.get('#Input_ExpMonth').click()
      cy.get('#Input_ExpMonth').contains('5').click()
      cy.get('#Input_ExpYear').click()
      cy.get('#Input_ExpYear').contains('2024').click()
      cy.get('#Input_CVV').type('1122')

      cy.get('#CreditCardForm_Btn').click()
    })
  })
})