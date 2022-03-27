describe('Party Bard Player test', () => {
	before(() => {
		cy.visit('http://localhost:3000')
	})

	it('displays basic page', () => {
		cy.get('div').contains('Starships Wars').should('be.visible')
		cy.get('.game-page').should('be.visible')
		cy.get('.gp-player').should('be.empty')
		// cy.get('.link').contains('List').click()
	})

	it('play the game', () => {
		cy.get('div').contains('Play').click()
		cy.get('.gp-main').find('.display-starship').should('have.length', 2)
	})

// 	it('connect player', () => {
// 		cy.get('#player-nickname').type('CypressPlayer')
// 		cy.get('.connect-to-room > .button').click()
// 		cy.get('.ctr-error').should('be.visible')
// 		cy.get('.ctr-error').should('have.text', "Something went wrong! Make sure you're using the correct link and password.")
// 		cy.get('#player-password').type('123')
// 		cy.get('.connect-to-room > .button').click()
// 		cy.get('#ph-player-nickname').should('have.value', 'CypressPlayer')
// 		cy.get('.pmp-track-name').should('be.visible')
// 	})
//
// 	it('change nickname', () => {
// 		cy.get('#ph-player-nickname').clear()
// 		cy.get('#ph-player-nickname').type('CypressPlayer2')
// 		cy.get('.player-header > .ph-row > .button').click()
// 		cy.get('.MuiAlert-message').should('be.visible')
// 	})
//
// 	it('audio check', () => {
// 		cy.get('.pmp-audio').should('not.be.visible')
// 		expectPlayingAudio(true);
// 		cy.get('.pmp-pause').click();
// 		expectPlayingAudio(false);
// 	})
})
