import React, { Component } from "react";
import axios from "axios";

class RegisterForm extends Component {
  state = {
    showRegistrationButton: false,
    message: "",
  };

  async authenticate(event) {
    event.preventDefault();
    let credentials = {
      email: event.target.email.value,
      password: event.target.password.value,
      password_confirmation: event.target.password_confirmation.value,
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
        showRegistrationButton: false,
        message: "TREMENDOUS, you are now a registered Trumpster!",
      });
    } catch (error) {
      localStorage.setItem("authenticated", false);
      this.setState({ message: "Your credentials are RIGGED!!" });
    }
  }

  render() {
    return (
      <>
        {this.state.showRegistrationButton ? (
          <form
            data-cy="register-form"
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
            <input
              type="password"
              name="password_confirmation"
              data-cy="password_confirmation"
              placeholder="Password Confirmation"
            />
            <button type="submit" value="Register" data-cy="submit-btn">
              Submit
            </button>
          </form>
        ) : (
          <button
            data-cy="register-btn"
            onClick={() => this.setState({ showRegistrationButton: true })}
          >
            Create an account!
          </button>
        )}
        {this.state.message && (
          <div data-cy="confirmation-message">{this.state.message}</div>
        )}
      </>
    );
  }
}

export default RegisterForm;
