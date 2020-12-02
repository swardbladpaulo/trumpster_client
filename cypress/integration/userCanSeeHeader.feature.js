
describe('user can display one quote', () => {
  beforeEach(() => {
    cy.server()
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/random",
      response: "fixture:display_one_quote.json",
    })
    cy.visit("/")
  })
  it("is expected to show a random quote", () => {
    cy.get('[data-cy="random_quote"]').should("contain", "I have a great relationship with the blacks.")
  });
});
