describe('Party Bard Player test', () => {
	before(() => {
		cy.visit('http://localhost:3000')
	})

	it('displays basic page', () => {
		cy.get('div').contains('Starships Wars').should('be.visible')
		cy.get('.game-page').should('be.visible')
		cy.get('.gp-player').should('be.empty')
	})

	it('play the game', () => {
		let crew1 = 0;
		let crew2 = 0;
		cy.get('div').contains('Play').click()
		cy.get('.gp-main').find('.display-starship').should('have.length', 2)
		cy.get('.ds-crew-value').eq(0).then(($c) => {
			crew1 = +$c.text()
			cy.get('.ds-crew-value').eq(1).then(($c) => {
				crew2 = +$c.text()
				if (crew1 > crew2) {
					cy.get('.gp-points').eq(0).contains('1')
					cy.get('.gp-points').eq(1).contains('0')
				} else if (crew1 < crew2) {
					cy.get('.gp-points').eq(0).contains('0')
					cy.get('.gp-points').eq(1).contains('1')
				} else {
					cy.get('.gp-points').eq(0).contains('0')
					cy.get('.gp-points').eq(1).contains('0')
				}
			})
		})
	})

	it('check list menu', () => {
		cy.get('div').contains('List').click()
		cy.get('div').contains('page 1')
		cy.get('.lp-list').children().should('have.length', 4)
		cy.get('div').contains('Previous').click()
		cy.get('div').contains('page 1')
		cy.get('.lp-list').children().should('have.length', 4)
		cy.get('div').contains('Next').click()
		cy.get('div').contains('page 2')
		cy.get('.lp-list').children().should('have.length', 1)
		cy.get('div').contains('Next').click()
		cy.get('div').contains('page 2')
		cy.get('.lp-list').children().should('have.length', 1)
		cy.get('div').contains('Previous').click()
		cy.get('div').contains('page 1')
		cy.get('.lp-list').children().should('have.length', 4)
	})
})
