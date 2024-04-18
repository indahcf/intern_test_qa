describe('Set Unpaid', () => {
  it('Memilih salah satu invoices yang akan diubah statusnya', () => {
    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/Login')

    cy.get('#Input_UsernameVal').type('charles.estevez')

    cy.get('#Input_PasswordVal').type('123456')

    cy.get('button[type="submit"]').click()
    
    cy.wait(1000)

    cy.url().should('include', 'https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/Dashboard')

    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/Invoices')
    cy.wait(1000)
    
    // cy.get('a[data-link]').contains('14. Taehyung').click()
    // cy.wait(5000)

    // cy.get('button[data-button].ThemeGrid').contains('Set Unpaid').click()
    // cy.contains('Set Unpaid').click();
    // cy.get('.tag span').should('contain', 'Submit').then(() => {
      // cy.get('.tag.border-radius-rounded.background-red-lightest.text-error.OSInline span').should('contain', 'Submit').then(() => {
        // Jika status adalah "Submit", klik tombol "Set Unpaid"
        // cy.contains('Set Unpaid').click();
      // });
      // Jika status adalah "Submit", klik tombol "Set Unpaid"
    //   cy.contains('Set Unpaid').click();
    // });

    // cy.get('a[data-link]').contains('14. Taehyung').click().then(() => {
      // Periksa status invoice
    //   cy.get('.tag').should('contain', 'Submit');
    // });

cy.get('a[data-link]').contains('14. Taehyung').click().then(() => {
  // Periksa status invoice sebelum diubah
  cy.get('.tag').should('contain', 'Submit');
  
  // Klik tombol "Set Unpaid"
  cy.contains('Set Unpaid').click();
  cy.wait(2000);

  // Periksa apakah status telah berubah menjadi "Unpaid"
  cy.get('.tag').should('contain', 'Unpaid');
});

    cy.url().should('include', 'https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/Invoices') 
  })
})
