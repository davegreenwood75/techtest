describe("Add Cookies", () => {
    // Given a player is on the Game Page
    // When the Click Cookie button is clicked
    // Then a cookie is added to the player's number of cookies
  beforeEach(() => {
    cy.visit('/')
    cy.contains('Cookie Clicker!')

  })


  it('Player generates a cookie with every click of the Click Cookie button', () => {
    const user = 'addSingleCookie'
    
    cy.get('input').type(user)
    cy.get('button').click()
    cy.location('pathname').should('include', user)
    cy.get('body > :nth-child(2)').contains('Hello ' + user)
    cy.get('#cookies').then(($span) => {
      // capture what the current number of cookies is
      const startNumberOfCookies = parseFloat($span.text())
      cy.log('Starting number of cookies is ' + startNumberOfCookies)

      // click button to add a cookie
      cy.get('#click')
        .click()
        .then(() => {
          // capture what the new current number of cookies is
          const newNumberOfCookies = parseFloat($span.text())

          // verify that the number of cookies has increased by 1
          expect(newNumberOfCookies).to.eq(startNumberOfCookies + 1)
          cy.log('Updated number of cookies is ' + newNumberOfCookies)
        })
    })

  })

  it('Player\'s number of cookies increases with every click of the button', () => {
    const user = 'addMultipleCookies'
    let cookiesToAdd = 5
    
    cy.get('input').type(user)
    cy.get('button').click()
    cy.location('pathname').should('include', user)
    cy.get('body > :nth-child(2)').contains('Hello ' + user)
    cy.get('#cookies').then(($span) => {
      // capture what the current number of cookies is
      const startNumberOfCookies = parseFloat($span.text())
      cy.log('Starting number of cookies is ' + startNumberOfCookies)

      // click button multiple times to add cookies
      cy.cookieClick(cookiesToAdd)
        .then(() => {
          // capture what the new current number of cookies is
          const newNumberOfCookies = parseFloat($span.text())

          // verify that the number of cookies has increased to 5
          expect(newNumberOfCookies).to.eq(startNumberOfCookies + 5)
          cy.log('Updated number of cookies is ' + newNumberOfCookies)
        })
    })

  })



}
)