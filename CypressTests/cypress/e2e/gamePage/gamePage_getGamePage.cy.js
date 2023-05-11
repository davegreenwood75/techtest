context('Game Page request', () => {
    it('Game Page request', () => {
        cy.request({
            method: 'GET',
            url: '/game/getgamePage',
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
