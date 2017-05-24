import React from "react"
import ReactDOM from "react-dom"
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import thunkMiddleware from "redux-thunk"
import { Router, Route, Link, browserHistory } from "react-router"


import "./app/css/app.less"

import appReducer from "./app/Reducers/app.reducer.js"

import App from "./app/app.js"
import ImageDetail from "./app/imageDetail/index.js"

const store = createStore(appReducer, applyMiddleware(thunkMiddleware));

const content = (
	<Provider store={store}>
	    <Router  history={browserHistory}>
		    <Route path="/" component={App} />
		    <Route path="/imageDetail/:illustId" component={ImageDetail} />
		</Router>
    </Provider>		
);

ReactDOM.render(content, document.querySelector(".app"));
