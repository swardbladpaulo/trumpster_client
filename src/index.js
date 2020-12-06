import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import axios from "axios";
import { StripeProvider } from "react-stripe-elements";
import 'semantic-ui-css/semantic.min.css'

let apiUrl;
//if (process.env.NODE_ENV === "production") {
	apiUrl = "https://trumpster-dump-api.herokuapp.com/api/";
//} else {
//	apiUrl = "http://localhost:3000/api/";
//}
axios.defaults.baseURL = apiUrl;

ReactDOM.render(
	<StripeProvider apiKey="pk_test_51HuxwPB4iQLxMzwRoYvwIg9YWiZPJbCCNQvYgR53ye90XKjtqHZGIwJBbnOwoM0HRPf1YrQ0J44YJlUviKfXUTIU00HdNTkvl4">
		<App />
	</StripeProvider>,
	document.getElementById("root")
);

reportWebVitals();
