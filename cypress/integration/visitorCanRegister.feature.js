describe("user can register", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/quotes/random",
      response: "fixture:display_one_quote.json",
    });
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/auth",
      response: "fixture:visitor_can_register.json",
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

  it("successful", () => {
    cy.get("[data-cy='register-btn']").click();
    cy.get("[data-cy='register-form']").within(() => {
      cy.get("[data-cy='email']").type("user@gmail.com");
      cy.get("[data-cy='password']").type("password");
      cy.get("[data-cy='password_confirmation']").type("password");
      cy.get("[data-cy='submit-register-btn']").contains("Submit").click();
    });
    cy.get("[data-cy='confirmation-message']").contains(
      "TREMENDOUS, you are now a registered Trumpster!"
    );
  });

  it("sad path: unsuccessful register", () => {
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/auth",
      status: "401",
      response: {
        errors: ["Your credentials are RIGGED"],
        success: false,
      },
    });

    cy.get("[data-cy='register-btn']").click();
    cy.get("[data-cy='register-form']").within(() => {
      cy.get("[data-cy='email']").type("user@gmail.com");
      cy.get("[data-cy='password']").type("password");
      cy.get("[data-cy='password_confirmation']").type("wrongpassword");
      cy.get("button").contains("Submit").click();
    });
    cy.get("[data-cy='confirmation-message']").contains(
      "Your credentials are RIGGED!!"
    );
  });
});
