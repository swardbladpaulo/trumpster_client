import React, { Component } from "react";
import axios from "axios";

class LoginForm extends Component {
	state = {
		showLoginButton: false,
		message: "",
	};

	async authenticate(event) {
		event.preventDefault();
		let credentials = {
			email: event.target.email.value,
			password: event.target.password.value,
		};
		try {
			let response = await axios.post("/auth/sign_in", credentials);
			debugger;
			let userData = {
				uid: response.headers["uid"],
				client: response.headers["client"],
				access_token: response.headers["access-token"],
				token_type: "Bearer",
				expiry: response.headers["expiry"],
			};
			localStorage.setItem("credentials", JSON.stringify(userData));
			localStorage.setItem("authenticated", true);
			this.props.toggleAuthenticatedState();
			debugger;
			this.setState({
				showLoginButton: false,
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
						<button style={{background: 'black', fontWeight: 'bold', fontSize: 15, color: 'white' }}type="submit" value="Register" data-cy="submit-btn">
							Submit
						</button>
					</form>
				) : (
					<button style={{background: 'red', fontWeight: 'bold', fontSize: 18, color: 'white' }}	data-cy="login-btn"	onClick={() => this.setState({ showLoginButton: true })}>
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
