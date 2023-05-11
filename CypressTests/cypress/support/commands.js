Cypress.Commands.add('cookieClick', (cookiesToAdd) => {
	cy.get('#cookies').then(($numberOfCookies) => {
		if ($numberOfCookies.text().includes(cookiesToAdd)) {
			cy.log('>>> We have ' + cookiesToAdd + ' cookies')
		} else {
			cy.get('#click').click()
            cy.cookieClick(cookiesToAdd)
		}
	})
})

