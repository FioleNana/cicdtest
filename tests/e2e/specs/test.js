describe('Call page', () => {
  it('Visits the app root url', () => {
    cy.visit('/');
    cy.contains('p', 'You know, this is a pretty neat container for containery things.');
  })
});
