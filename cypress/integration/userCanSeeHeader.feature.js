describe('user can see 5 random quotes', () => {
  beforeEach(() => {
    cy.server()
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/random",
      response: "fixture:quotes_randomizer.json",
    })
    cy.visit("/")
  })
  it("is expected to show 5 random quote", () => {
    cy.get("[data-cy='random5quotes']").should("contain",)
  });
});
