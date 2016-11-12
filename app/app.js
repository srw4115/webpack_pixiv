import React from "react"
import ReactDOM from "react-dom"
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import thunkMiddleware from "redux-thunk"

import "./css/app.less"

import MainContent from "./pixivList/pixivListContainer.js"
import appReducer from "./Reducers/app.reducer.js"

class App {
    constructor() {
        const store = createStore(appReducer, applyMiddleware(thunkMiddleware));
        ReactDOM.render(
            <Provider store={store}>
        		<MainContent />
        	</Provider>,
            document.querySelector(".app")
        );

    }
};

export default App
