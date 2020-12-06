describe("Subscriber can create an insult with the insult generator", () => {
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
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/subscriptions",
      response: "fixture:payment_response.json",
    });
    cy.visit("/");
    cy.get("[data-cy='login-btn']").click();
    cy.get("[data-cy='login-form']").within(() => {
      cy.get("[data-cy='email']").type("user@gmail.com");
      cy.get("[data-cy='password']").type("password");
      cy.get("[data-cy='submit-btn']").contains("Submit").click();
    });
    cy.get("[data-cy='error-message']").contains(
      "You have successfully logged in!"
    );
    cy.get("[data-cy='become-subscriber']").click();
    cy.get('[data-cy="payment-form"]').within(() => {
      cy.get('[data-cy="card-number"]').within(() => {
        cy.wait(1000);
        cy.get('iframe[name^="__privateStripeFrame"]').then(($iframe) => {
          const $body = $iframe.contents().find("body");
          cy.wrap($body)
            .find('input[name="cardnumber"]')
            .type("4242424242424242", { delay: 10 });
        });
      });
      cy.get('[data-cy="card-expiry"]').within(() => {
        cy.get('iframe[name^="__privateStripeFrame"]').then(($iframe) => {
          const $body = $iframe.contents().find("body");
          cy.wrap($body)
            .find('input[name="exp-date"]')
            .type("1222", { delay: 10 });
        });
      });
      cy.get('[data-cy="card-cvc"]').within(() => {
        cy.get('iframe[name^="__privateStripeFrame"]').then(($iframe) => {
          const $body = $iframe.contents().find("body");
          cy.wrap($body).find('input[name="cvc"]').type("424", { delay: 10 });
        });
      });
      cy.get("button").contains("Confirm Payment").click();
    });
    cy.get('[data-cy="payment-message"]').contains(
      "HUUUUUGGGEEEE Thanks for your money, now you are a REAL Trumpscriber!!"
    );
  });

  it("successfully creates insult", () => {
    cy.get("[data-cy='create-insult']").click()
    cy.get("[data-cy='insult-form']").within(() => {
      cy.get("[data-cy='insult-name']").type("Bob")
      cy.get("[data-cy='submit-insult']").click()
    })
    cy.get("[data-cy='insult-result']").should("contain", "Bob")
  })
});