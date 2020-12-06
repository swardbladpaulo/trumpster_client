describe("User can login", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/quotes/random",
      response: "fixture:display_one_quote.json",
    });
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/auth/sign_in",
      response: "fixture:user_can_login.json",
      headers: {
        uid: "user@gmail.com",
        access_token: "blabla",
        client: "1337",
        token_type: "Bearer",
        expiry: 169999,
      },
    });
    cy.visit("/");
  });

  it("successfully", () => {
    cy.get("[data-cy='login-btn']").click();
    cy.get("[data-cy='login-form']").within(() => {
      cy.get("[data-cy='email']").type("user@gmail.com");
      cy.get("[data-cy='password']").type("password");
      cy.get("[data-cy='submit-btn']").contains("Submit").click();
    });
    cy.get("[data-cy='search_button']").should("be.visible")
    cy.get("[data-cy='become-subscriber']").should("be.visible")
  });

  it("sad path: unsuccessfully", () => {
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/auth/sign_in",
      status: "401",
      response: {
        errors: ["Your login credentials are RIGGED"],
        success: false,
      },
    });

    cy.get("[data-cy='login-btn']").click();
    cy.get("[data-cy='login-form']").within(() => {
      cy.get("[data-cy='email']").type("user@gmail.com");
      cy.get("[data-cy='password']").type("wrongpassword");
      cy.get("button").contains("Submit").click();
    });
    cy.get("[data-cy='error-message']").contains(
      "Your login credentials are RIGGED!!"
    );
  });
});
