describe("Buying Factories", () => {
  // Given a player is on the Game Page
  // When the Player enters a numeric value in the Buy Factories field
  // And clicks the Buy Factories button
  // And the player's balance is equal to or greater than the cost of the number of factories being purchased
  // Then the player's number of factories increases by the chosen quantity
  // And the player's balance is decreased by the cost of the purchased factories
  it('Player can buy a factory', () => {

    const user = 'buyFactory'
    let cookiesToSell = 12
    let factoriesToBuy = 1
    let cookiesToAdd = 15

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

    cy.get('#factories').then(($span) => {
      // capture what the current number of factories is
      const startNumberOfFactories = parseFloat($span.text())
      cy.log('Starting number of factories is ' + startNumberOfFactories)

      // buy factory
      cy.get('#factories-to-buy').type(factoriesToBuy)
      cy.get('#buy-factories')
        .click()
        .wait(500)
        .then(() => {
          // capture what the new current number of factories is
          const newNumberOfFactories = parseFloat($span.text())

          // verify that the number of factories has increased
          expect(newNumberOfFactories).to.eq(startNumberOfFactories + factoriesToBuy)
          cy.log('Updated number of factories is ' + newNumberOfFactories)
        })
    })
  })

  it('Player can buy multiple factories', () => {

    const user = 'buyMultipleFactories'
    let cookiesToSell = 50
    let factoriesToBuy = 4
    let cookiesToAdd = 51

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

    cy.get('#factories').then(($span) => {
      // capture what the current number of factories is
      const startNumberOfFactories = parseFloat($span.text())
      cy.log('Starting number of factories is ' + startNumberOfFactories)

      // buy factory
      cy.get('#factories-to-buy').type(factoriesToBuy)
      cy.get('#buy-factories')
        .click()
        .wait(500)
        .then(() => {
          // capture what the new current number of factories is
          const newNumberOfFactories = parseFloat($span.text())

          // verify that the number of factories has increased
          expect(newNumberOfFactories).to.eq(startNumberOfFactories + factoriesToBuy)
          cy.log('Updated number of factories is ' + newNumberOfFactories)
        })
    })
  })


  it('Player must have sufficient money to buy a factory', () => {

    const user = 'buyFactoryWithoutMoney'
    let factoriesToBuy = 1

    cy.visit('/')
    cy.contains('Cookie Clicker!')
    cy.get('input').type(user)
    cy.get('button').click()
    cy.location('pathname').should('include', user)
    cy.get('body > :nth-child(2)').contains('Hello ' + user)

    cy.get('#factories').then(($span) => {
      // capture what the current number of factories is
      const startNumberOfFactories = parseFloat($span.text())
      cy.log('Starting number of factories is ' + startNumberOfFactories)

      // attempt to buy factory
      cy.get('#factories-to-buy').type(factoriesToBuy)
      cy.get('#buy-factories')
        .click()
        .wait(500)
        .then(() => {
          // capture what the new current number of factories is
          const newNumberOfFactories = parseFloat($span.text())

          // verify that the number of factories has not increased
          expect(newNumberOfFactories).to.eq(startNumberOfFactories)
          cy.log('Updated number of factories is ' + newNumberOfFactories)
        })
    })
  })


  it('Non-integer in Buy Factory field', () => {

    const user = 'nonIntegerInBuyFactoryField'
    let cookiesToSell = 12
    let factoriesToBuy = 'one'
    let cookiesToAdd = 15

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

    cy.get('#factories').then(($span) => {
      // capture what the current number of factories is
      const startNumberOfFactories = parseFloat($span.text())
      cy.log('Starting number of factories is ' + startNumberOfFactories)

      // buy factory
      cy.get('#factories-to-buy').type(factoriesToBuy)
      cy.get('#buy-factories')
        .click()
        .wait(500)
        .then(() => {
          // capture what the new current number of factories is
          const newNumberOfFactories = parseFloat($span.text())

          // verify that the number of factories has not changed
          expect(newNumberOfFactories).to.eq(startNumberOfFactories)
          cy.log('Updated number of factories is ' + newNumberOfFactories)
        })
    })
  })

  it('negative in Buy Factory field', () => {

    const user = 'negativeInBuyFactoryField'
    let cookiesToSell = 12
    let factoriesToBuy = '-1'
    let cookiesToAdd = 15

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

    cy.get('#factories').then(($span) => {
      // capture what the current number of factories is
      const startNumberOfFactories = parseFloat($span.text())
      cy.log('Starting number of factories is ' + startNumberOfFactories)

      // buy factory
      cy.get('#factories-to-buy').type(factoriesToBuy)
      cy.get('#buy-factories')
        .click()
        .wait(500)
        .then(() => {
          // capture what the new current number of factories is
          const newNumberOfFactories = parseFloat($span.text())

          // verify that the number of factories has not changed
          expect(newNumberOfFactories).to.eq(startNumberOfFactories)
          cy.log('Updated number of factories is ' + newNumberOfFactories)
        })
    })
  })


})