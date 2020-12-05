import React, { Component } from "react";
import axios from "axios";

class LoginForm extends Component {
	state = {
		showLoginButton: false,
		message: "",
		showLogoutButton: true
	};

	async authenticate(event) {
		event.preventDefault();
		let credentials = {
			email: event.target.email.value,
			password: event.target.password.value,
		};
		try {
			let response = await axios.post("/auth", credentials);
			let userData = {
				uid: response.headers.uid,
				client: response.headers.client,
				token_type: response.headers.token_type,
				expiry: response.headers.expiry,
			};
			localStorage.setItem("credentials", JSON.stringify(userData));
			localStorage.setItem("authenticated", true);
			this.setState({
				showLoginButton: false,
				message: "You have successfully logged in!",
			});
		} catch (error) {
			localStorage.setItem("authenticated", false);
			this.setState({ message: "Your login credentials are RIGGED!!" });
		}
	}
	render() {
		return (
					<>
						{this.state.showLoginButton ? (
							<form
								data-cy="login-form"
								onSubmit={(event) => this.authenticate(event)}
							>
								<input
									type="email"
									name="email"
									data-cy="email"
									placeholder="Email"
								/>
								<input
									type="password"
									name="password"
									data-cy="password"
									placeholder="Password"
								/>
								<button type="submit" value="Register" data-cy="submit-btn">
									Submit
							</button>
							</form>
						) : (
								<button
									data-cy="login-btn"
									onClick={() => this.setState({ showLoginButton: true })}
								>
									Login
								</button>
							)}
						{this.state.message && (
							<div data-cy="error-message">{this.state.message}</div>
						)}
					</>
		);
	}
}
export default LoginForm;
