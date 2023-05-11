context('Home Page request', () => {
    it('Home Page request', () => {
        cy.request({
            method: 'GET',
            url: '/',
            failOnStatusCode: true,
            headers: {},
            body: {

            }
        }
        )
            .then((response) => {
                expect(response.status).to.eq(200)

            })

    })

})
