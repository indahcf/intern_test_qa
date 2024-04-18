describe('Membuat New Request', () => {
  it('menginputkan data yang valid', () => {
    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/Login')

    cy.get('#Input_UsernameVal').type('nancy.martin')

    cy.get('#Input_PasswordVal').type('123456')

    cy.get('button[type="submit"]').click()
    
    cy.wait(1000)

    cy.url().should('include', 'https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/Dashboard')

    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/Invoices')
    cy.wait(1000)

    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/InvoiceDetail?EnergyInvoiceId=0')
    cy.wait(1000)

    cy.get('#Input_InvoiceNumber').clear().type('27. Beauty')
    cy.get('#Input_PeriodStartDate').clear().type('2024-04-20T13:30')
    cy.get('#Input_PeriodEndDate').clear().type('2024-04-21T15:00')
    cy.get('#Input_Amount').clear().type('15000')

    cy.get('button[type="submit"]').click()

    cy.url().should('include', 'https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/Invoices') 
    cy.wait(2000)
  })

  it('menginputkan data yang sudah ada di list invoices', () => {
    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/Login')

    cy.get('#Input_UsernameVal').type('nancy.martin')

    cy.get('#Input_PasswordVal').type('123456')

    cy.get('button[type="submit"]').click()
    
    cy.wait(1000)

    cy.url().should('include', 'https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/Dashboard')

    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/Invoices')
    cy.wait(1000)

    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/InvoiceDetail?EnergyInvoiceId=0')
    cy.wait(1000)

    cy.get('#Input_InvoiceNumber').clear().type('27. Beauty')
    cy.get('#Input_PeriodStartDate').clear().type('2024-04-20T13:30')
    cy.get('#Input_PeriodEndDate').clear().type('2024-04-21T15:00')
    cy.get('#Input_Amount').clear().type('15000')

    cy.get('button[type="submit"]').click()

    cy.url().should('include', 'https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/Invoices') 

    cy.wait(2000)
  })

  it('mengosongkan semua field', () => {
    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/Login')

    cy.get('#Input_UsernameVal').type('nancy.martin')

    cy.get('#Input_PasswordVal').type('123456')

    cy.get('button[type="submit"]').click()
    
    cy.wait(1000)

    cy.url().should('include', 'https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/Dashboard')

    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/Invoices')
    cy.wait(1000)

    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/InvoiceDetail?EnergyInvoiceId=0')
    cy.wait(1000)

    cy.get('#Input_InvoiceNumber').clear()
    cy.get('#Input_PeriodStartDate').clear()
    cy.get('#Input_PeriodEndDate').clear()
    cy.get('#Input_Amount').clear()

    cy.get('button[type="submit"]').click()
    
    cy.url().should('include', 'https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/Invoices') 
  })
})