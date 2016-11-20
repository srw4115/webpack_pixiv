import React from "react"
import ReactDOM from "react-dom"
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import thunkMiddleware from "redux-thunk"

import "./css/app.less"

import MainContent from "./pixivList/pixivListContainer.js"
import Toolbar from "./components/toolbar.js"
import appReducer from "./Reducers/app.reducer.js"

class App extends React.Component {
    componentWillMount() {
        this.store = createStore(appReducer, applyMiddleware(thunkMiddleware));
    }

    render() {
        
        return (
            <Provider store={this.store}>
                <div>
                    <MainContent />
                    <Toolbar />
                </div>
            </Provider>
        )

    }
};

export default App
