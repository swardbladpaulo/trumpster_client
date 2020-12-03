describe("user can register", () => {
  beforeEach(() => {
    cy.server();
    cy.visit("/");
  });

  it("successful", () => {
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/auth",
      response: "fixture:user_can_register.json",
      headers: {
        uid: "user@gmail.com",
      },
    });

    cy.get("[data-cy='register-form']").within(() => {
      cy.get("[data-cy='email']").type("user@gmail.com");
      cy.get("[data-cy='password']").type("password");
      cy.get("[data-cy='password_confirmation']").type("password");
      cy.get("button").contains("Submit").click();
    });
    cy.get("#message").should("contain", "success");
  });
});
