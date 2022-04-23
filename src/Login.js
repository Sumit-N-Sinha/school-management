import React, { useState, useEffect } from 'react';
import './Login.css';
import { useHistory } from 'react-router-dom';


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
//const Login = () => {
function Login() {


    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const history = useHistory();
    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            history.push("/add")
        }
    }, [])

    async function loger() {
        console.warn(email, pass)
        let item = { email, pass };
        let result = await fetch("https://localhost:8000/app/login", {
            method: 'POST',
            headers: {
                "Content-Type": "application.json",
                "Accept": "application.json"
            },
            body: JSON.stringify(item)
        });
        result = await result.json();
        localStorage.setItem("user-info", JSON.stringify(result))
        history.push("/add")
    }
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
                            <td><input type="text" onChange={(e) => setEmail(e.target.value)} placeholder="Your name" className="form-control" /></td>
                        </tr>
                        <tr>
                            <td>Enter your password :</td>
                            <td><input type="password" onChange={(e) => setPass(e.target.value)} placeholder="Your password" className="form-control" /></td>
                        </tr>
                        <tr>
                            <th colSpan='2'>
                                Select your role and login
                            </th>
                        </tr>
                        <tr>
                            <th colSpan='2'>
                                <a class="btn btn-primary" onClick={loger} href="Admin" role="button">Admin Login</a>
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <a class="btn btn-primary" onClick={loger} href="Student" role="button">Student Login</a>
                            </td>
                            <td>
                                <a class="btn btn-primary" onClick={loger} href="Teacher" role="button">Teacher Login</a>
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