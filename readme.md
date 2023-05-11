Thank you for the opportunity. It was a pleasure to do this test.

How to run the Cypress tests

There is full documentation on the Cypress docs pages:

https://docs.cypress.io/guides/getting-started/installing-cypress

https://docs.cypress.io/guides/getting-started/opening-the-app

If you need to install Cypress, from the directory you wish to install Cypress, run:
npm install cypress --save-dev

To run the tests via the Cypress gui, run the following command in a terminal from the CypressTests folder:
npx cypress open

To run all the tests headless:
npx cypress run

This will generate a html report in the reprts/html folder