context('Display High Scores', () => {
    // Given a player is on the Home Page
    // When there has been at least one game played
    // Then the Highest Score for each player is displayed in a table
    // And the displayed columns are Player and Score

    it('High Score list displays names and scores from previous games', () => {

        // Return a defined set of values from the fixture file to guarantee stability
        cy.intercept('GET', '/', { fixture: '/highScores.html' })
        cy.visit('/')

        // Scores are ordered as returned in the html 
        // Not clear what the expected behaviour should be here?
        // Should they be sorted highest score first?
        cy.get(':nth-child(1) > :nth-child(1) > a').contains('Eric Estrada')
        cy.get('tbody > :nth-child(1) > :nth-child(2)').contains('2000')



    })

})
