import React from "react"
import ReactDOM from "react-dom"

import MainContent from "./pixivList/pixivListContainer.js"
import Toolbar from "./components/toolbar.js"


class App extends React.Component {
    componentWillMount() {
        
    }
    render() {
        return (
            <div>
                <MainContent />
                <Toolbar />
            </div>
        )

    }
};

export default App
