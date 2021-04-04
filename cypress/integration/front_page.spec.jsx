// eslint-disable-next-line no-console
console.log('here.')
describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
})

describe('Navigate to another page', function() {
  it('Check if contents are loaded', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur').click()
    cy.get('.pokemon-stats-name').contains('speed')
  })
})