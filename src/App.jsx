import React, { Component } from "react";
import QuotesData from "./components/QuotesData";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import SearchQuotes from "./components/SearchQuotes";
import SubscriptionPayment from "./components/SubscriptionPayment";
import InsultGenerator from "./components/InsultGenerator";
import { Elements } from "react-stripe-elements";
import Header from "./components/Header";
import "./App.css";

class App extends Component {
	state = {
		authenticated: false,
	};

  toggleAuthenticatedState() {
    this.setState({ authenticated: !this.state.authenticated})
  }

  render() {
    return (
      <div>
        <h1>Trumpster</h1>
        {this.state.authenticated ? (
          <>
            <Elements>
              <SubscriptionPayment />
            </Elements>
            <SearchQuotes />
            <InsultGenerator />
            </>
        ) : (
            <>
            <RegisterForm />
            <LoginForm toggleAuthenticatedState={() => this.toggleAuthenticatedState()}/>
            <QuotesData />
          </> )
    }
      </div>
    )}
}

export default App;
