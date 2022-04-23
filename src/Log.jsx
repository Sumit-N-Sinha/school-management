import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import Login from './Login';
import Student from './Student';
import Admin from './Admin';
import Teacher from './Teacher';
function Log() {
    return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact={true} path="/admin" component={Admin} />
                    <Route path="/teacher" component={Teacher} />
                    <Route path="/student" component={Student} />
                </Switch>
            </Router>
    );
}
export default Log;