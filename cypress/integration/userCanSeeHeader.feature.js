describe('user can see the header', () => {
  
  it("successfully renders,", () => {
    cy.visit("/");
    cy.contains("Trumpster");
  });
});
