import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import { API_HEADERS, API_URL } from "./services/api";
import { Provider } from "react-redux";
import store from "./store/store";

/* axios default configuration */
axios.defaults.baseURL = API_URL;
axios.defaults.headers = API_HEADERS;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
