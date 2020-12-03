import React, { Component } from "react";
import axios from "axios";

class RegisterForm extends Component {
  state = {
    showRegistrationButton: false,
  };

  async authenticate(event) {
    event.preventDefault();
    let credentials = {
      email: event.target.email.value,
      password: event.target.password.value,
      password_confirmation: event.target.password_confirmation.value,
    };
    let response = await axios.post(
      "http://localhost:3000/api/auth",
      credentials
    );
    let userData = {
      uid: response.headers.uid,
      client: response.headers.client,
      token_type: response.headers.token_type,
      expiry: response.headers.expiry,
    };
    localStorage.setItem("credentials", JSON.stringify(userData))
    localStorage.setItem("authenticated", true)
    debugger
    this.setState({ showRegistrationButton: false });
  }

  render() {
    return (
      <div>
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
              type="password_confirmation"
              name="password_confirmation"
              data-cy="password_confirmation"
              placeholder="password_confirmation"
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
      </div>
    );
  }
}

export default RegisterForm;


// for search function to validate authenticated users
// { localStorage.getItem('authenticated') === 'true' && 
// <button> search for a tag here <button>}