import React from "react";
import QuotesData from "./components/QuotesData";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import SearchQuotes from "./components/SearchQuotes"
import SubscriptionPayment from "./components/SubscriptionPayment"

const App = () => {
	return (
		<div>
			<h1>Trumpster</h1>
			<SubscriptionPayment/>
			<RegisterForm />
			<LoginForm />
			<QuotesData />
			<SearchQuotes/>
		</div>
	);
};

export default App;
