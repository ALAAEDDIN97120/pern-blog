import "./login.css";
import { Link } from "react-router-dom";
const Login = () => {
	return (
		<div className="login">
			<span className="loginTitle">Login</span>
			<form action="" className="loginForm">
				<label htmlFor="">Email</label>
				<input className="loginInput" type="email" placeholder="Email" />

				<label htmlFor="">Password</label>
				<input className="loginInput" type="password" placeholder="Password" />
				<button className="loginButton">Login</button>
			</form>
			<Link to="/register">
				<button className="loginRegisterButton">Register</button>
			</Link>
		</div>
	);
};

export default Login;
