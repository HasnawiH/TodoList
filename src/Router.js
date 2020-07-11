import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TodoList from "./page/TodoList"

const AppRoute = () => {
    return(
        <Router>
            <Switch>
            <Route exact path="/" component={TodoList} />
            </Switch>
        </Router>
    )
}

export default AppRoute
