describe('template spec', () => {
  it('passes', () => {
    cy.visit('localhost:8000')
  })
  it('input exists', () => {
    cy.visit('localhost:8000')
    cy.get('input').should('have.text', '')
  })
})
