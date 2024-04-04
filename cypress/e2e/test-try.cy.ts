describe('template spec', () => {
  beforeEach(() => {
    cy.visit('localhost:8000')
  })
  it('input exists', () => {
    cy.get('input').should('have.text', '')
  })
  it('show correct answer on multi expression', () => {
    const exercise = '13 * 123';
    cy.get('input').type(`${exercise}{enter}`)
    cy.get('div').children().children().contains('Answer: ').should('have.text', `Answer: ${13 * 123}`)
  })
})
