describe("User can make a search", () => {
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
		cy.get("[data-cy='login-btn']").click();
		cy.get("[data-cy='login-form']").within(() => {
			cy.get("[data-cy='email']").type("user@gmail.com");
			cy.get("[data-cy='password']").type("password");
			cy.get("[data-cy='submit-btn']").contains("Submit").click();
		});
		cy.get("[data-cy='error-message']").contains(
			"You have successfully logged in!"
		);
	});

	describe("successfully", () => {
		beforeEach(() => {
			cy.server();
			cy.route({
				url: "http://localhost:3000/api/quotes/",
				method: "GET",
				response: "fixture:search_for_barack.json",
			});
			cy.visit("/");
			cy.get("[data-cy='search_input']").type("barack");
			cy.get("[data-cy='search_button']").click();
		});
		it("is expected to display search results", () => {
			cy.get("[data-cy='search_results']").within(() => {
				cy.get("li").contains("An 'extremely credible source' has called my office and told me that Barack Obama's birth certificate is a fraud.").should("exist");
				cy.get("li").contains("Marco Rubio would keep Barack Obama's executive order on amnesty intact. See article. Cannot be President.\n\n  https://t.co/JW5f8OouyA").should("exist");
			});
		});
	});
});
