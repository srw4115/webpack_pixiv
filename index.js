import React from "react"
import ReactDOM from "react-dom"
import { Router, Route, Link, hashHistory } from "react-router"

import App from "./app/app.js"


let content = (
    <Router  history={hashHistory}>
	    <Route path="/" component={App} />
	</Router>
);

ReactDOM.render(content, document.querySelector(".app"));
