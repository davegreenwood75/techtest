Aire Logic Cookie Clicker Test Bugs

Game Page: Sell Cookies: Exception in console if player clicks Sell Cookies without having entered a value in input box
Error: '<' not supported between instances of 'NoneType' and 'int'

Game Page: Sell Cookies: If player inputs a negative number in Sell Cookies field and clicks the Sell Cookies button, the value is accepted, a cookie is added to the players amount and $0.25 is deducted from the players Balance

Game Page: Sell Cookies: Player can input numbers with decimal places in Sell Cookies field - value is rounded up, ie value of 1.5 is accepted, resulting in 2 cookies being removed from the total

Game Page: Sell Cookies: Exception in console when value of cookies attempted to be sold is greater than or equal to current number of cookies
Error: Not enough cookies to sell

Game Page: Sell Cookies: Exception in console when non numeric value entered in Sell Cookies field Error: '>' not supported between instances of 'NoneType' and 'int'

Game Page: Buy Factories: Exception in console if player clicks Buy Factories without having entered a value in input box
Error: '>' not supported between instances of 'NoneType' and 'int'

Game Page: Buy Factories: Player able to buy factory without having the required money

Game Page: Buy Factories: Exception in console if player attempts to buy factories having input a negative number
Error: Number of factories to buy must be positive

Game Page: Money: Balance displayed to one decimal place when value includes half a dollar (eg $0.5 rather than $0.50)

Game Page: no max length limit on value that can be entered in Sell Cookies or Buy Factories fields Home Page: Player not required to input a value in the name field

Home Page: A value of space is permitted in the name field

Home Page: High scores not ordered highest first (undefined behaviour?)

Home Page: Can start a new game with the name of a Player that already exists (undefined behaviour?)
