import React from "react"

import { Provider } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"

import configureStore from "./redux/store"
import Template from "./activities/Template"

const store = configureStore()

const App = () => {
    return (
        <Provider store={ store }>
            <div className="app">
                <Router>
                    <Template />
                </Router>
            </div>
        </Provider>
    )
}

export default App