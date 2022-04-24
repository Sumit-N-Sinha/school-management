import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import Login from "./Login";
import Student from './Student';
import Admin from './Admin';
import Teacher from './Teacher';
import AddSt  from "./AddSt";
import AddT from "./AddT";
import DeleteT from "./DeleteT";
import DeleteSt from "./DeleteSt";
import UpdateT from "./UpdateT";
import Update from "./Update";
import AddStByT from "./AddStByT";
import UpdateSt from "./UpdateSt";
import Attendance from "./Attendance";
import Notification from "./Notification";
import AttendenceS from "./AttendanceS";
import Assessment from "./Assessment";
function Log() {
    return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route path="/admin" component={Admin} />
                    <Route path="/teacher" component={Teacher} />
                    <Route path="/student" component={Student} />
                    <Route path="/addst" component={AddSt} />
                    <Route path="/addt" component={AddT} />
                    <Route path="/update" component={Update} />
                    <Route path="/updatet" component={UpdateT} />
                    <Route path="/deletest" component={DeleteSt} />
                    <Route path="/deletet" component={DeleteT} />
                    <Route path="/addstbyt" component={AddStByT} />
                    <Route path="/attendance" component={Attendance} />
                    <Route path="/updatest" component={UpdateSt} />
                    <Route path="/notification" component={Notification} />
                    <Route path="/attendances" component={AttendenceS} />
                    <Route path="/assessment" component={Assessment} />
                    <Redirect path="/" />
                </Switch>
            </Router>
    );
}
export default Log;