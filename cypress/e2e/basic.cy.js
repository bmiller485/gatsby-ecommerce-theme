describe('sample render test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays the title text', () => {
    cy.get('h2')
    .contains('Just what you didn\'t know you needed');
  })
}) 
