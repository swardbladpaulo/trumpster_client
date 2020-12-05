import React from "react";
import QuotesData from "./components/QuotesData";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import SearchQuotes from "./components/SearchQuotes"

const App = () => {
	return (
		<div>
			<h1>Trumpster</h1>
			<RegisterForm />
			<LoginForm />
			<QuotesData />
			<SearchQuotes/>
		</div>
	);
};

export default App;
