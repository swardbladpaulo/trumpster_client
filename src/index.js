import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import axios from "axios";

let apiUrl;
if (process.env.NODE_ENV === "production") {
	apiUrl = "https://trumpster-dump-api.herokuapp.com/api/";
} else {
	apiUrl = "http://localhost:3000/api/";
}
axios.defaults.baseURL = apiUrl;

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);

reportWebVitals();
