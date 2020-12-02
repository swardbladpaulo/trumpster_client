describe("user can display one quote", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/random",
      response: "fixture:display_one_quote.json",
    });
    cy.visit("/");
  });
  it("is expected to show a random quote", () => {
    cy.get('[data-cy="random_quote"]').should(
      "contain",
      "The election is absolutely being rigged by the dishonest and distorted media pushing Crooked Hillary - but also at many polling places - SAD"
    );
  });
});
