import React from "react";
import QuotesData from "./components/QuotesData";
import RegisterForm from "./components/RegisterForm"
import LoginForm from "./components/LoginForm"

const App = () => {
  return (
    <div>
      <h1>Trumpster</h1>
      <QuotesData />
      <RegisterForm />
      <LoginForm/>
    </div>
  );
};

export default App;


