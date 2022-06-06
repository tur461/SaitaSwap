import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PublicRoutes from "./routes/PublicRoutes/PublicRoutes";
import { rootName } from "./constant";


const Application = () => {
    return (
        <Router>
            <Switch>
                {/* <AuthGuard path={`${rootName}/auth`} component={PrivateRoutes} /> */}
                <Route path={`${rootName}/`} component={PublicRoutes} />
            </Switch>
        </Router>

    )
}

export default Application
