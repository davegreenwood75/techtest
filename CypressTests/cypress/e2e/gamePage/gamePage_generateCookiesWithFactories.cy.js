describe("Factory Generation Of Cookies", () => {
  // Given a player is on the Game Page
  // When the Player has purchased at least one factory
  // Then the player's number of cookies increases by 1 per second for each factory owned
  it('Factories generate one cookie per second', () => {

    const user = 'productioniseCookieGeneration'
    let cookiesToSell = 12
    let factoriesToBuy = 1
    let cookiesToAdd = 13

    cy.visit('/')
    cy.contains('Cookie Clicker!')
    cy.get('input').type(user)
    cy.get('button').click()
    cy.location('pathname').should('include', user)
    cy.get('body > :nth-child(2)').contains('Hello ' + user)

    // add cookies
    cy.cookieClick(cookiesToAdd)

    // sell cookies to generate money for factory
    cy.get('#cookies-to-sell').type(cookiesToSell)
    cy.get('#sell-cookies')
      .click()
      .wait(500)

    // buy factory
    cy.get('#factories-to-buy').type(factoriesToBuy)
    cy.get('#buy-factories')
      .click()


    cy.get('#cookies').then(($span) => {
      // capture what the current number of cookies is
      const startNumberOfCookies = parseFloat($span.text())
      cy.log('Starting number of cookies is ' + startNumberOfCookies)

      // wait for 5 seconds
      cy.wait(5000)
        .then(() => {
          // capture what the new current number of cookies is
          const newNumberOfCookies = parseFloat($span.text())

          // verify that the number of cookies has increased
          expect(newNumberOfCookies).to.be.greaterThan(startNumberOfCookies)
          cy.log('Updated number of cookies is ' + newNumberOfCookies)
        })
    })


  })


})