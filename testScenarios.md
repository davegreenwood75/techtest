Aire Logic Cookie Clicker Test Scenarios

Home Page 1: Player can start a New Game
Given a player is on the Home Page
When the Player enters a value in the Your Name field And clicks the Start button
Then the player is navigated to the Game Page
And the player's name is displayed on the page
And a new game starts

Home Page 2: High Scores for players are displayed
Given a player is on the Home Page
When there has been at least one game played
Then the highest score for each player is displayed in a table 
And the displayed columns are Player and Score

Home Page 3: Player can resume existing game
Given a player is on the Home Page
And High Scores are displayed
When the player clicks on the name of an existing player in the table 
Then the player is navigated to the Game Page for the selected player 
And the player can resume the selected game

Game Page 1: Player’s current status is displayed
Given a player is on the Game Page
Then the page displays the player’s current number of cookies 
And the page displays the player’s current number of factories 
And the page displays the player’s current balance in dollars

Game Page 2: Player can click to add a cookie
Given a player is on the Game Page
When the Click Cookie button is clicked
Then a cookie is added to the player's number of cookies

Game Page 3: Player can sell cookies to make money
Given a player is on the Game Page
When the Player enters a numeric value in the Sell Cookies field
And clicks the Sell Cookies button
And the player's current number of cookies is equal to or greater than the number of cookies being sold 
Then the player's number of cookies decreases by the chosen quantity
And the player's balance is increased by the price of the sold cookies

Game Page 4: Player can buy factories
Given a player is on the Game Page
When the Player enters a numeric value in the Buy Factories field
And clicks the Buy Factories button
And the player's balance is equal to or greater than the cost of the number of factories being purchased 
Then the player's number of factories increases by the chosen quantity
And the player's balance is decreased by the cost of the purchased factories

Game Page 5: Factories automatically generate cookies for the player
Given a player is on the Game Page or Home Page
When the Player has purchased at least one factory
Then the player's number of cookies increases by 1 per second for each factory owned
