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
		cy.get("[data-cy='login-btn']").click();
		cy.get("[data-cy='login-form']").within(() => {
			cy.get("[data-cy='email']").type("user@gmail.com");
			cy.get("[data-cy='password']").type("password");
			cy.get("[data-cy='submit-btn']").contains("Submit").click();
		});
		cy.get("[data-cy='search_button']").should("be.visible");
		cy.get("[data-cy='become-subscriber']").should("be.visible");
	});
	it("is expected to display search results", () => {
		cy.server();
		cy.route({
			method: "GET",
			url: "http://localhost:3000/api/quotes",
			response: "fixture:search_for_barack.json",
		});
		cy.get("[data-cy='search_input']").type("barack");
		cy.get("[data-cy='search_button']").click();
		cy.get("[data-cy='search_results']").within(() => {
			cy.get("li")
				.contains(
					"An 'extremely credible source' has called my office and told me that Barack Obama's birth certificate is a fraud."
				)
				.should("exist");
			cy.get("li").contains("August 2012").should("exist");
			cy.get("li")
				.contains(
					"https://twitter.com/realdonaldtrump/status/232572505238433794"
				)
				.should("exist");
			cy.get("li")
				.contains(
					"Marco Rubio would keep Barack Obama's executive order on amnesty intact. See article. Cannot be President. https://t.co/JW5f8OouyA"
				)
				.should("exist");
			cy.get("li").contains("November 2015").should("exist");
			cy.get("li")
				.contains(
					"https://twitter.com/realDonaldTrump/status/661570281060835328"
				)
				.should("exist");
		});
	});
});
