describe("Start Game", () => {
  // Given a player is on the Home Page
  // When the Player enters a value in the Your Name field
  // And clicks the Start button
  // Then the player is navigated to the Game Page
  // And the player's name is displayed on the page
  // And a new game starts
  it('New Player starts game', () => {

    function getRandom() {
      return Math.floor(Math.random() * 10000000000 + 1).toString(10);
    }
    
    const randomNumber = getRandom();
    const user = 'Player ' + randomNumber

    cy.visit('/')
    cy.contains('Cookie Clicker!')
    cy.get('input').type(user)
    cy.get('button').click()
    cy.location('pathname').should('include', randomNumber)
    cy.get('body > :nth-child(2)').contains('Hello ' + user)

  })

  it('Player tries to start new game without inputting a name value', () => {

    // The expected behaviour would be defined by agreed User Story
    // but it seems to be incorrect behaviour to allow a new game to be initiated without inputting a name value
    cy.visit('/')
    cy.contains('Cookie Clicker!')
    cy.get('button').click()
    cy.location('pathname').should('not.include', '/game')

  })

  it('New Player starts game with very long name', () => {

    function getRandom() {
      return Math.floor(Math.random() * 10000000000 + 1).toString(10);
    }
    // If there's a max length limit for the name field, it's bigger than it may need to be 
    // This test currently passes but could be made to fail if the defined behaviour was specified
    const randomNumber = getRandom();
    const user = 'Player name is a really really really really really really really really really really really really really really really really really long string ' + randomNumber

    cy.visit('/')
    cy.contains('Cookie Clicker!')
    cy.get('input').type(user)
    cy.get('button').click()
    cy.location('pathname').should('include', randomNumber)
    cy.get('body > :nth-child(2)').contains('Hello ' + user)

  })
  

})