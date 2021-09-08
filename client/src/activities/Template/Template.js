import React from "react"
import { Route, Switch, withRouter } from "react-router-dom"

import "./Template.css"

import Header from "./components/Header"
import MainMenu from "./activities/MainMenu"
import Error404 from "./components/404"

let Template = () => {
    return (
        <div className="template">
            <Header />
            <Switch>
                <Route
                    exact
                    path="/"
                    component={ MainMenu }
                />
                <Route
                    component={ Error404 }
                />
            </Switch>
        </div>
    )
}

Template = withRouter(Template)

export default Template