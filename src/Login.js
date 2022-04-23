import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
const d = new Date();
var met = "";
const cssStyle = {
    color: 'green'
};
if (d.getHours() >= 0 && d.getHours() <= 11) {
    met = "Good Morning";
    cssStyle.color = 'green';
} else if (d.getHours() > 11 && d.getHours() <= 19) {
    met = "Good Afternoon";
    cssStyle.color = 'blue';
} else {
    met = "Good Night";
    cssStyle.color = 'red';
}
// class Login extends React.Component {

//     render() {
const Login = () => {
        return (
            <>
                <h1>School Management System</h1>
                <div>
                    <form>
                        <table>
                            <tr>
                                <th colSpan='2'><span style={cssStyle}>{met}</span>, Please Enter your Login credential</th>
                            </tr>
                            <tr>
                                <td>Enter your name :</td>
                                <td><input type="text" id="name" placeholder="Your name" required/></td>
                            </tr>
                            <tr>
                                <td>Enter your password :</td>
                                <td><input type="password" id="pass" placeholder="Your password" required /></td>
                            </tr>
                            <tr>
                            <th colSpan='2'>
                            Select your role and login
                            </th>
                            </tr>
                            <tr>
                            <th colSpan='2'>
                            <a class="btn btn-primary" href="Admin" role="button">Admin Login</a>
                                </th>
                            </tr>
                            <tr>
                            <td>
                            <a class="btn btn-primary" href="Student" role="button">Student Login</a>
                            </td>
                            <td>
                            <a class="btn btn-primary" href="Teacher" role="button">Teacher Login</a>
                            </td>
                            </tr>
                            
                        </table>
                        
                    </form>
                </div>

                <h5>If you find any issue, please contact to our administrator<br></br>
                    Contact no: +91-1234567890<br></br>
                    Have a good day</h5>
                
            </>
        );
}
export default Login;