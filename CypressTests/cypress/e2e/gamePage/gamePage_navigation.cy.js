context('Navigation', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.contains('Cookie Clicker!')

    })


    it('Navigate back or forward in the browser history', () => {

        const user = 'navigationTest'

        cy.get('input').type(user)
        cy.get('button').click()
        cy.location('pathname').should('include', user)
        cy.get('body > :nth-child(2)').contains('Hello ' + user)

        cy.go('back')
        cy.location('pathname').should('not.include', user)

        cy.go('forward')
        cy.location('pathname').should('include', user)

        // clicking back
        cy.go(-1)
        cy.location('pathname').should('not.include', user)

        // clicking forward
        cy.go(1)
        cy.location('pathname').should('include', user)
    })

    it('Navigate to Home page from Game page', () => {

        const user = 'navigationTest'

        cy.get('input').type(user)
        cy.get('button').click()
        cy.location('pathname').should('include', user)
        cy.get('body > :nth-child(2)').contains('Hello ' + user)

        cy.get('a').click()
        cy.location('pathname').should('not.include', user)

    })

    it('Return to existing game', () => {
    // Given a player is on the Home Page
    // And High Scores are displayed
    // When the player clicks on the name of an existing player in the table
    // Then the player is navigated to the Game Page for the selected player
    // And the player can resume the selected game
        const user = 'resumeGame'
        let cookiesToAdd = 2

        cy.get('input').type(user)
        cy.get('button').click()
        cy.location('pathname').should('include', user)
        cy.get('body > :nth-child(2)').contains('Hello ' + user)

        cy.cookieClick(cookiesToAdd)

        cy.get('#cookies').then(($span) => {
            // capture what the current number of cookies is
            const startNumberOfCookies = parseFloat($span.text())
            cy.log('Number of cookies is ' + startNumberOfCookies)
      
            // navigate back to home page
            cy.get('a').click()
            cy.location('pathname').should('not.include', user)
    
            // select player name to resume game
            cy.contains(user).click({force: true})
            cy.location('pathname').should('include', user)
              .then(() => {
                // capture what the number of cookies is for resumed game
                const newNumberOfCookies = parseFloat($span.text())
      
                // verify that the number of cookies is unchanged
                expect(newNumberOfCookies).to.eq(startNumberOfCookies)
                cy.log('Number of cookies is ' + newNumberOfCookies)
              })

    })
})

    it('Reload the page', () => {
        const user = 'navigationTest'

        cy.get('input').type(user)
        cy.get('button').click()
        cy.location('pathname').should('include', user)
        cy.get('body > :nth-child(2)').contains('Hello ' + user)

        cy.reload()

        // reload the page without using the cache
        cy.reload(true)
    })


})
