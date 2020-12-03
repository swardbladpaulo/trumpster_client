import React from "react";
import QuotesData from "./components/QuotesData";
import RegisterForm from "./components/register"

const App = () => {
  return (
    <div>
      <h1>Trumpster</h1>
      <QuotesData />
      <RegisterForm />
    </div>
  );
};

export default App;
