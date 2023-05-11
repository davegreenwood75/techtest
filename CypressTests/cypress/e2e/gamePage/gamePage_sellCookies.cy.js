describe("Sell Cookies", () => {
  // Given a player is on the Game Page
  // When the Player enters a numeric value in the Sell Cookies field
  // And clicks the Sell Cookies button
  // And the player's current number of cookies is equal to or greater than the number of cookies being sold
  // Then the player's number of cookies decreases by the chosen quantity
  // And the player's balance is increased by the price of the sold cookies
  it('Sell a cookie', () => {

    const user = 'sellSingleCookie'
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

    cy.get('#cookies').then(($span) => {
      // capture what the current number of cookies is
      const startNumberOfCookies = parseFloat($span.text())
      cy.log('Starting number of cookies is ' + startNumberOfCookies)

      // sell cookie
      cy.get('#cookies-to-sell').type(cookiesToSell)
      cy.get('#sell-cookies')
        .click()
        .wait(500)
        .then(() => {
          // capture what the new current number of cookies is
          const newNumberOfCookies = parseFloat($span.text())

          // verify that the number of cookies has decreased by selected amount
          expect(newNumberOfCookies).to.eq(startNumberOfCookies - 1)
          cy.log('Updated number of cookies is ' + newNumberOfCookies)
        })
    })
  })

  it('Sell all current cookies', () => {

    const user = 'sellAllCurrentCookies'
    let cookiesToSell = 3
    let cookiesToAdd = 3

    cy.visit('/')
    cy.contains('Cookie Clicker!')
    cy.get('input').type(user)
    cy.get('button').click()
    cy.location('pathname').should('include', user)
    cy.get('body > :nth-child(2)').contains('Hello ' + user)

    // add cookies
    cy.cookieClick(cookiesToAdd)

    cy.get('#cookies').then(($span) => {
      // capture what the current number of cookies is
      const startNumberOfCookies = parseFloat($span.text())
      cy.log('Starting number of cookies is ' + startNumberOfCookies)

      // attempt to sell all current cookies
      cy.get('#cookies-to-sell').type(cookiesToSell)
      cy.get('#sell-cookies')
        .click()
        .wait(500)
        .then(() => {
          // capture what the new current number of cookies is
          const newNumberOfCookies = parseFloat($span.text())

          // verify that the number of cookies is 0
          expect(newNumberOfCookies).to.eq(startNumberOfCookies - 3)
          cy.log('Updated number of cookies is ' + newNumberOfCookies)
        })
    })
  })


  it('Verify player unable to sell more cookies (1) than current (0)', () => {

    const user = 'sellCookieValidation'
    let cookiesToSell = 1

    cy.visit('/')
    cy.contains('Cookie Clicker!')
    cy.get('input').type(user)
    cy.get('button').click()
    cy.location('pathname').should('include', user)
    cy.get('body > :nth-child(2)').contains('Hello ' + user)

    cy.get('#cookies').then(($span) => {
      // start with 0 cookies
      const startNumberOfCookies = parseFloat($span.text())
      cy.log('Starting number of cookies is ' + startNumberOfCookies)

      // sell cookies
      cy.get('#cookies-to-sell').type(cookiesToSell)
      cy.get('#sell-cookies')
        .click()
        .wait(500)
        .then(() => {
          // capture what the new current number of cookies is
          const newNumberOfCookies = parseFloat($span.text())

          // verify that the number of cookies is still 0
          expect(newNumberOfCookies).to.eq(startNumberOfCookies)
          cy.log('Updated number of cookies is ' + newNumberOfCookies)
        })
    })
  })

  it('Verify player unable to sell more cookies (2) than current (1)', () => {

    const user = 'sellOneMoreCookieThanCurrent'
    let cookiesToSell = 2

    cy.visit('/')
    cy.contains('Cookie Clicker!')
    cy.get('input').type(user)
    cy.get('button').click()
    cy.location('pathname').should('include', user)
    cy.get('body > :nth-child(2)').contains('Hello ' + user)

    // click button to add cookies
    cy.get('#click')
      .click()

    cy.get('#cookies').then(($span) => {
      // capture what the current number of cookies is
      const startNumberOfCookies = parseFloat($span.text())
      cy.log('Starting number of cookies is ' + startNumberOfCookies)

      // attempt to sell cookies
      cy.get('#cookies-to-sell').type(cookiesToSell)
      cy.get('#sell-cookies')
        .click()
        .wait(500)
        .then(() => {
          // capture what the new current number of cookies is
          const newNumberOfCookies = parseFloat($span.text())

          // verify that the number of cookies is still 1
          expect(newNumberOfCookies).to.eq(startNumberOfCookies)
          cy.log('Updated number of cookies is ' + newNumberOfCookies)
        })
    })
  })

  it('Non-integer in Sell Cookies field', () => {

    const user = 'nonIntegerInSellCookieField'
    let cookiesToSell = 'two'
    let cookiesToAdd = 3

    cy.visit('/')
    cy.contains('Cookie Clicker!')
    cy.get('input').type(user)
    cy.get('button').click()
    cy.location('pathname').should('include', user)
    cy.get('body > :nth-child(2)').contains('Hello ' + user)

    // add cookies
    cy.cookieClick(cookiesToAdd)

    cy.get('#cookies').then(($span) => {
      // capture what the current number of cookies is
      const startNumberOfCookies = parseFloat($span.text())
      cy.log('Starting number of cookies is ' + startNumberOfCookies)

      // attempt to sell cookies
      cy.get('#cookies-to-sell').type(cookiesToSell)
      cy.get('#sell-cookies')
        .click()
        .wait(500)
        .then(() => {
          // capture what the new current number of cookies is
          const newNumberOfCookies = parseFloat($span.text())

          // verify that the number of cookies is still 3
          expect(newNumberOfCookies).to.eq(startNumberOfCookies)
          cy.log('Updated number of cookies is ' + newNumberOfCookies)
        })
    })
  })

  it('Negative number in Sell Cookies field', () => {

    const user = 'negativeInSellCookieField'
    let cookiesToSell = '-1'
    let cookiesToAdd = 3

    cy.visit('/')
    cy.contains('Cookie Clicker!')
    cy.get('input').type(user)
    cy.get('button').click()
    cy.location('pathname').should('include', user)
    cy.get('body > :nth-child(2)').contains('Hello ' + user)

    // add cookies
    cy.cookieClick(cookiesToAdd)

    cy.get('#cookies').then(($span) => {
      // capture what the current number of cookies is
      const startNumberOfCookies = parseFloat($span.text())
      cy.log('Starting number of cookies is ' + startNumberOfCookies)

      // attempt to sell cookies
      cy.get('#cookies-to-sell').type(cookiesToSell)
      cy.get('#sell-cookies')
        .click()
        .wait(500)
        .then(() => {
          // capture what the new current number of cookies is
          const newNumberOfCookies = parseFloat($span.text())

          // verify that the number of cookies is still 3
          expect(newNumberOfCookies).to.eq(startNumberOfCookies)
          cy.log('Updated number of cookies is ' + newNumberOfCookies)
        })
    })
  })

  it('No value entered in Sell Cookies field', () => {

    const user = 'noInputInSellCookieField'
    let cookiesToAdd = 3

    cy.visit('/')
    cy.contains('Cookie Clicker!')
    cy.get('input').type(user)
    cy.get('button').click()
    cy.location('pathname').should('include', user)
    cy.get('body > :nth-child(2)').contains('Hello ' + user)

    // add cookies
    cy.cookieClick(cookiesToAdd)

    cy.get('#cookies').then(($span) => {
      // capture what the current number of cookies is
      const startNumberOfCookies = parseFloat($span.text())
      cy.log('Starting number of cookies is ' + startNumberOfCookies)

      // attempt to sell cookies
      cy.get('#sell-cookies')
        .click()
        .wait(500)
        .then(() => {
          // capture what the new current number of cookies is
          const newNumberOfCookies = parseFloat($span.text())

          // verify that the number of cookies is still 3
          expect(newNumberOfCookies).to.eq(startNumberOfCookies)
          cy.log('Updated number of cookies is ' + newNumberOfCookies)
        })
    })
  })

  it('Decimal entered in Sell Cookies field', () => {

    const user = 'decimalInSellCookieField'
    let cookiesToSell = '1.5'
    let cookiesToAdd = 3

    cy.visit('/')
    cy.contains('Cookie Clicker!')
    cy.get('input').type(user)
    cy.get('button').click()
    cy.location('pathname').should('include', user)
    cy.get('body > :nth-child(2)').contains('Hello ' + user)

    // add cookies
    cy.cookieClick(cookiesToAdd)

    cy.get('#cookies').then(($span) => {
      // capture what the current number of cookies is
      const startNumberOfCookies = parseFloat($span.text())
      cy.log('Starting number of cookies is ' + startNumberOfCookies)

      // attempt to sell cookies
      cy.get('#cookies-to-sell').type(cookiesToSell)
      cy.get('#sell-cookies')
        .click()
        .wait(500)
        .then(() => {
          // capture what the new current number of cookies is
          const newNumberOfCookies = parseFloat($span.text())

          // verify that the number of cookies is still 3
          expect(newNumberOfCookies).to.eq(startNumberOfCookies)
          cy.log('Updated number of cookies is ' + newNumberOfCookies)
        })
    })
  })


})