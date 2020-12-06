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

  render() {
    return (
      <div>
          <Header id="header"/>
         <div className="appimage" id="appimage" style={{background: 'url("../images/rsz_1image.png")', backgroundSize: 'cover', height: '100vh',}}>
        {this.state.authenticated ? (
          <>
            <Elements>
              <SubscriptionPayment />
            </Elements>
            <SearchQuotes />
            {/* <InsultGenerator /> */}
          </>
        ) : (
          <>
            <RegisterForm />
                <LoginForm />
                <div id="quotes">
                  <QuotesData  />
                </div>
          </>
        )}
      </div>
      </div>
    );
  }
}

export default App;
