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
    this.setState({ authenticated: !this.state.authenticated });
  }

  render() {
    return (
      <div>
        <Header id="header" />
          <div id="quotes">
            <QuotesData />
          </div>
        <div
          className="appimage"
          id="appimage"
          style={{
            background: 'url("../images/image2.jpg")',
            backgroundSize: "cover",
            height: "100vh",
          }}
        >
          
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
              <div id="registerform">
                <RegisterForm />
              </div>
                
              <div id="login">
                <LoginForm
                  toggleAuthenticatedState={() =>
                    this.toggleAuthenticatedState()
                  }
                />
              </div>
                

            </>
          )}
        </div>
      </div>
    );
  }
}

export default App;
