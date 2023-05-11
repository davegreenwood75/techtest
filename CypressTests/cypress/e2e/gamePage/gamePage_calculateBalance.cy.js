describe("Calculate Balance", () => {
  it('Player earns $0.25 for selling a cookie', () => {
  // Given a player is on the Game Page
  // When the Player enters a numeric value in the Sell Cookies field
  // And clicks the Sell Cookies button
  // And the player's current number of cookies is equal to or greater than the number of cookies being sold
  // Then the player's number of cookies decreases by the chosen quantity
  // And the player's balance is increased by the price of the sold cookies
    const user = 'priceOfCookie'
    let cookiesToSell = 1
    let cookiesToAdd = 2

    cy.visit('/')
    cy.contains('Cookie Clicker!')
    cy.get('input').type(user)
    cy.get('button').click()
    cy.location('pathname').should('include', user)
    cy.get('body > :nth-child(2)').contains('Hello ' + user)

    // add cookies
    cy.cookieClick(cookiesToAdd)

    cy.get('#money').then(($span) => {
      // capture what the current balance is
      const startBalance = parseFloat($span.text())
      cy.log('Starting balance is ' + startBalance)

      // sell cookie
      cy.get('#cookies-to-sell').type(cookiesToSell)
      cy.get('#sell-cookies')
        .click()
        .wait(500)
        .then(() => {
          // capture what the new balance is
          const newBalance = parseFloat($span.text())

          // verify that the balance has increased by $0.25
          expect(newBalance).to.eq(startBalance + 0.25)
          cy.log('Updated balance is ' + newBalance)
        })

    })
  })

  it('Balance to be displayed with two decimal places', () => {
  // Given a player is on the Game Page
  // When a monetary value is displayed
  // Then the value is displayed with two decimnal places
    const user = 'displayBalance'
    let cookiesToSell = 2
    let cookiesToAdd = 3

    cy.visit('/')
    cy.contains('Cookie Clicker!')
    cy.get('input').type(user)
    cy.get('button').click()
    cy.location('pathname').should('include', user)
    cy.get('body > :nth-child(2)').contains('Hello ' + user)

    // add cookies
    cy.cookieClick(cookiesToAdd)

    // sell cookie
    cy.get('#cookies-to-sell').type(cookiesToSell)
    cy.get('#sell-cookies')
      .click()
    cy.get(':nth-child(5)').contains('Money: $0.50')

  })


  it('Player spends $3 to buy a factory', () => {
    // Given a player is on the Game Page
    // When the Player enters a numeric value in the Buy Factories field
    // And clicks the Buy Factories button
    // And the player's balance is equal to or greater than the cost of the number of factories being purchased
    // Then the player's number of factories increases by the chosen quantity
    // And the player's balance is decreased by the cost of the purchased factories
    const user = 'costOfFactory'
    let cookiesToSell = 20
    let factoriesToBuy = 1
    let cookiesToAdd = 30

    cy.visit('/')
    cy.contains('Cookie Clicker!')
    cy.get('input').type(user)
    cy.get('button').click()
    cy.location('pathname').should('include', user)
    cy.get('body > :nth-child(2)').contains('Hello ' + user)

    // add cookies
    cy.cookieClick(cookiesToAdd)

    // sell cookies
    cy.get('#cookies-to-sell').type(cookiesToSell)
    cy.get('#sell-cookies')
      .click()
      .wait(500)

    cy.get('#money').then(($span) => {
      // capture what the current balance is
      const startBalance = parseFloat($span.text())
      cy.log('Starting balance is ' + startBalance)

      // buy factory
      cy.get('#factories-to-buy').type(factoriesToBuy)
      cy.get('#buy-factories')
        .click()
        .wait(500)
        .then(() => {
          // capture what the new balance is
          const newBalance = parseFloat($span.text())

          // verify that the balance has decreased by $3
          expect(newBalance).to.eq(startBalance - 3)
          cy.log('Updated balance is ' + newBalance)
        })

    })
  })



})