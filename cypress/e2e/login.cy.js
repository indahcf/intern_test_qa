describe('Login', () => {
  it('menginputkan username dan password yang valid', () => {
    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/Login')

    const users = [
      { username: 'charles.estevez', password: '123456' },
      { username: 'nancy.martin', password: '123456' },
      { username: 'cecil.anderson', password: '123456' },
      { username: 'Superadmin.company', password: '123456' },
      { username: 'angela.garcia', password: '123456' }
    ];

    users.forEach(user => {
      cy.get('#Input_UsernameVal').clear().type(user.username)

      cy.get('#Input_PasswordVal').clear().type(user.password)

      cy.get('button[type="submit"]').click()

      cy.wait(2000)

      cy.url().should('include', 'https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/Dashboard')

      cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/Login')
    });
  })

  it('menginputkan username yang tidak valid dan password yang valid', () => {
    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/Login')

    cy.get('#Input_UsernameVal').clear().type('charlesestevez')

    cy.get('#Input_PasswordVal').clear().type('123456')

    cy.get('button[type="submit"]').click()

    cy.wait(1000)

    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/Login')
  })

  it('menginputkan username yang valid dan password yang tidak valid', () => {
    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/Login')

    cy.get('#Input_UsernameVal').clear().type('charles.estevez')

    cy.get('#Input_PasswordVal').clear().type('1234567')

    cy.get('button[type="submit"]').click()

    cy.wait(1000)

    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/Login')
  })

  it('menginputkan username dan password yang tidak valid', () => {
    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/Login')

    cy.get('#Input_UsernameVal').clear().type('charlesestevez')

    cy.get('#Input_PasswordVal').clear().type('1234567')

    cy.get('button[type="submit"]').click()

    cy.wait(1000)

    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/Login')
  })

  it('mengosongkan username', () => {
    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/Login')

    cy.get('#Input_UsernameVal').clear()

    cy.get('#Input_PasswordVal').type('123456')

    cy.get('button[type="submit"]').click()

    cy.wait(1000)

    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/Login')
  })

  it('mengosongkan password', () => {
    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/Login')

    cy.get('#Input_UsernameVal').type('angela.garcia')

    cy.get('#Input_PasswordVal').clear()

    cy.get('button[type="submit"]').click()

    cy.wait(1000)

    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/Login')
  })

  it('mengosongkan username dan password', () => {
    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/Login')

    cy.get('#Input_UsernameVal').clear()

    cy.get('#Input_PasswordVal').clear()

    cy.get('button[type="submit"]').click()

    cy.wait(1000)

    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/Login')
  })
})